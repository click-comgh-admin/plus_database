<?php
require_once "exceptions.php";

// BaseWebpackLoaderException,
// WebpackError,
// WebpackLoaderBadStatsError,
// WebpackLoaderTimeoutError,
// WebpackBundleLookupError,

class WebpackLoader
{
    /** @var array $_assets */
    private $_assets = [];

    public function __construct($name = null, $config = null)
    {
        $this->name = $name;
        $this->config = $config;
    }

    public function load_assets()
    {
        $__FILE_NAME__ = $this->config['STATS_FILE'];
        $read = null;
        try {
            $file = fopen($__FILE_NAME__, 'r');
            $read = fread($file, filesize($__FILE_NAME__));
            $read = json_decode($read);
            fclose($file);
        } catch (Throwable$th) {
            throw $th;
        }
        // print_r(['$read' => $read]);
        return $read;
    }

    public function get_assets()
    {
        if ($this->config['CACHE']) {
            if (!in_array($this->name, $this->_assets)) {
                $this->_assets[$this->name] = $this->load_assets();
            }
            return $this->_assets[$this->name];
        }
        return $this->load_assets();
    }

    public function filter_chunks($chunks)
    {
        $filtered_chunks = [];
        foreach ($chunks as $key => $chunk) {
            // /** @var string $chunk */
            // $chunk = str_replace("../", "", $chunk);
            foreach ($this->config['IGNORE'] as $iKey => $regex) {
                // print_r(["$regex" => $regex]);
                $ignore = preg_match("/".$regex."/", $chunk);
                if (!$ignore) {
                    if (!in_array($chunk, $filtered_chunks)) {
                        array_push($filtered_chunks, $chunk);
                    }
                }
            }
        }
        // print_r(["filtered_chunks" => $filtered_chunks]);

        return $filtered_chunks;
    }

    function clean_file_url(String $file)
    {
        return str_replace('../', '', $file);
    }

    public function map_chunk_files_to_url($chunks)
    {
        $assets = $this->get_assets();
        $files = $assets->assets;

        $setFiles = [];

        foreach ($chunks as $key => $chunk) {
            $url = $this->get_chunk_url($files->$chunk);
            $url = $this->clean_file_url($url);
            $file = ['name' => $chunk, 'url' => $url];

            if (!in_array($file, $setFiles)) {
                array_push($setFiles, $file);
            }
        }
        // print_r(["setFiles" => $setFiles]);

        return $setFiles;
    }

    public function get_chunk_url($chunk_file)
    {
        $public_path = $chunk_file->publicPath;
        if ($public_path) {
            return $public_path;
        }

        # Use os.path.normpath for Windows paths
        // $relpath = os.path.normpath(
        //     os.path.join($this->config['BUNDLE_DIR_NAME'], $chunk_file['name'])
        // );
        // return staticfiles_storage.url(relpath);
    }

    public function get_bundle($bundle_name)
    {
        $assets = $this->get_assets();

        // print_r(['$bundle_name'=> $bundle_name]);
        // print_r(['$assets'=> $assets]);

        if ($assets->status == 'done') {
            if (isset($assets->chunks->$bundle_name)) {
                $chunks = $assets->chunks->$bundle_name;
                // print_r(['$chunks'=> $chunks]);
            } else {
                throw new WebpackBundleLookupError(sprintf("Cannot resolve bundle %s.", $bundle_name));
            }

            $filtered_chunks = $this->filter_chunks($chunks);

            foreach ($filtered_chunks as $key => $chunk) {
                if (isset($assets->assets->$chunk)) {
                    $asset = $assets->assets->$chunk;
                    // print_r(['$asset'=> $asset]);
                } else {
                    throw new WebpackBundleLookupError(sprintf("Cannot resolve asset %s.", $chunk));
                }
            }
            
            $map_chunk_files_to_url = $this->map_chunk_files_to_url($filtered_chunks);
            // print_r(['$map_chunk_files_to_url' => $map_chunk_files_to_url]);
            return $map_chunk_files_to_url;
        } elseif ($assets->status == 'error') {
            if (!isset($assets->file)) {
                $assets->file = '';
            }
            if (!isset($assets->error)) {
                $assets->error = 'Unknown Error';
            }
            if (!isset($assets->message)) {
                $assets->message = '';
            }
            $error = sprintf("%s in %s \n%s", $assets->error, $assets->file, $assets->message);
            throw new WebpackError($error);
        } else {
            throw new WebpackLoaderBadStatsError(
                "The stats file does not contain valid data. Make sure " .
                "webpack-bundle-tracker plugin is enabled and try to run webpack again.");
        }
    }
}

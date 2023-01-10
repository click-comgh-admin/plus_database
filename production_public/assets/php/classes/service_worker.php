<?php

namespace ServiceWorker;

class Response
{
    public $service_worker;
    public $content_type;

    public function __construct(string $service_worker, string $content_type)
    {
        $this->service_worker = $service_worker;
        $this->content_type = $content_type;
    }
}
class View
{
    private $BASE_DIRECTORY = BASE_DIRECTORY;
    private $content_type = "application/x-javascript";
    private $DIR_NAME = "";
    private $exclude_xlsx_file = "xlsx";
    private $exclude_map_file = "js.map";
    private $exclude_map_file2 = "css.map";
    private $exclude_map_file3 = "min.map";
    private $exclude_copy_file = " copy.js";
    private $exclude_copy2_file = " copy (";
    private $exclude_copy3_file = " - Copy";
    private $exclude_dev_prod_files = "";
    private $exclude_php_files = ".php";
    private $exclude_LICENSE_files = ".LICENSE";
    private $exclude_webpack_stats_files = "webpack-stats.json";
    private $exclude_htaccess_files = ".htaccess";
    private $exclude_package_lock_json_files = "package-lock.json";
    private $exclude_package_json_files = "package.json";
    private $exclude_manifest_file = "manifest.json";
    private $exclude_node_modules_files = "node_modules";
    private $exclude_manifest_file2 = "manifest.webmanifest";
    private $exclude_service_worker_file = "service-worker.js";
    private $PRODUCTION = true;

    public function __construct(bool $PRODUCTION)
    {
        $this->DIR_NAME = "{$this->BASE_DIRECTORY}/assets";
        $this->PRODUCTION = $PRODUCTION;

        if ($this->PRODUCTION == true) {
            $this->exclude_dev_prod_files = "prod-files";
        } else {
            $this->exclude_dev_prod_files = "dev-files";
        }
    }

    public function get()
    {
        $SERVICE_WORKER = file_get_contents("{$this->DIR_NAME}/v2/service-worker/service-worker.js", );
        $service_worker = "{$SERVICE_WORKER}";
        // print_r(["service_worker" => $service_worker]);

        $CACHEABLE_FILES_css = $this->getCacheableFiles("{$this->DIR_NAME}/css/");
        $CACHEABLE_FILES_fonts = $this->getCacheableFiles("{$this->DIR_NAME}/fonts/");
        $CACHEABLE_FILES_images = $this->getCacheableFiles("{$this->DIR_NAME}/images/");
        $CACHEABLE_FILES_js = $this->getCacheableFiles("{$this->DIR_NAME}/js/");
        $CACHEABLE_FILES_v2 = $this->getCacheableFiles("{$this->DIR_NAME}/v2/");
        $CACHEABLE_FILES = "{$CACHEABLE_FILES_css}{$CACHEABLE_FILES_fonts}{$CACHEABLE_FILES_images}{$CACHEABLE_FILES_js}{$CACHEABLE_FILES_v2}";
        $CACHEABLE_FILES = substr($CACHEABLE_FILES, 0, strlen($CACHEABLE_FILES) - 1);
        // echo "<pre>";
        // print_r(["CACHEABLE_FILES" => $CACHEABLE_FILES]);
        // echo "</pre>";

        $CACHEABLE_URLS = $this->getCacheableUrls();
        $cacheables = "const ASSETS = [{$CACHEABLE_URLS} {$CACHEABLE_FILES}\n];\n";
        $service_worker = str_replace("const ASSETS = [];", $cacheables, $service_worker);

        $UNCACHEABLE_URLS = $this->getUnCacheableUrls();
        $uncacheables = "const UNCACHEABLE_URLS = [{$UNCACHEABLE_URLS}\n];\n";
        $service_worker = str_replace("const UNCACHEABLE_URLS = [];", $uncacheables, $service_worker);
        // print_r(["service_worker" => $service_worker]);

        return new Response(
            (string) $service_worker,
            (string) $this->content_type,
        );
    }

    private function getCacheableFiles(string $dirname)
    {
        $splitFrom = "/assets";
        $pathExtention = "";
        $allFiles = "";

        $listOfFiles = scandir($dirname);
        // print_r(["listOfFiles-1" => $listOfFiles]);
        // $listOfFiles = $this->globDir($dirname);
        // print_r(["listOfFiles-2" => $listOfFiles]);

        if (is_array($listOfFiles)) {
            foreach ($listOfFiles as $key => $entry) {
                if ($entry === "." || $entry === "..") {
                    null;
                } else {
                    // $fullPath = strtolower("{$dirname}{$entry}");
                    $fullPath = "{$dirname}{$entry}";
    
                    if (is_dir($fullPath)) {
                        $fullPath = "{$fullPath}/";
                        // print_r(["fullPath-is_dir" => $fullPath]);
                        $getCacheableFiles = $this->getCacheableFiles($fullPath);
                        $allFiles = "{$allFiles}{$getCacheableFiles}";
                    } else {
                        // print_r(["fullPath" => $fullPath]);
    
                        if (strpos($fullPath, $this->exclude_manifest_file)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_xlsx_file)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_manifest_file2)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_service_worker_file)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_map_file)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_map_file2)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_map_file3)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_copy_file)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_copy2_file)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_copy3_file)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_htaccess_files)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_node_modules_files)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_package_lock_json_files)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_package_json_files)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_php_files)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_LICENSE_files)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_webpack_stats_files)) {
                            null;
                        } elseif (strpos($fullPath, $this->exclude_dev_prod_files)) {
                            null;
                        } else {
                            $fullPaths = explode($splitFrom, $fullPath);
                            if (count($fullPaths) > 0) {
                                $fullPath = $fullPaths[1];
                                $fullPath = str_replace("", "/", "{$splitFrom}{$fullPath}");
    
                                $pathExtended = "{$pathExtention}{$fullPath}";
    
                                // if PRODUCTION != False:
                                //     __static_url = STATIC_URL.replace('/public/static/', '')
                                //     pathExtended = "{__static_url}{pathExtended}"
                                //     # print_r({"fullPath":fullPath})
    
                                $allFiles = "{$allFiles}\n'{$pathExtended}',";
                            }
                        }
                    }
                }
            }
        }
        // print_r(["allFiles" => $allFiles]);

        return $allFiles;
    }

    private function getCacheableUrls()
    {
        $URLS = [
            // '/',
            // '/akwaaba-forms/',
            // # MUST ALWAYS BE[2] index
            // '/akwaaba-forms/stop/sorry-you-are-offline',
            // '/akwaaba-forms/login/',
            // '/akwaaba-forms/projects/',
            // '/akwaaba-forms/questionnaires/',
            // '/akwaaba-forms/questionnaire/questions/',
        ];

        $allUrls = "";

        foreach ($URLS as $key => $URL) {
            $allUrls = "{$allUrls}\n'{$URL}',";
        }

        return $allUrls;
    }

    private function getUnCacheableUrls()
    {
        $URLS = [
            'http://127.0.0.1:9000/api/',
            'https://db-api.akwaabasoftware.com/',
            'https://db-api-v2.akwaabasoftware.com/',
        ];

        $allUrls = "";

        foreach ($URLS as $key => $URL) {
            $allUrls = "{$allUrls}\n'{$URL}',";
        }

        return $allUrls;
    }
}

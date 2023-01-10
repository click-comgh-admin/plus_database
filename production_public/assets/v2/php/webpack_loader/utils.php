<?php
function startsWith(String $string, String $startString)
{
    $len = strlen($startString);
    return (substr($string, 0, $len) === $startString);
}
// function endsWith(String $string, String $endString){
//     $len = strlen($endString);
//     if ($len == 0) {
//         return true;
//     }
//     return (substr($string, -$len) === $endString);
// }
function endsWith(String $string, array $endStrings)
{
    $return = false;
    foreach ($endStrings as $key => $endString) {
        $endString = (string) $endString;
        $len = strlen($endString);
        if ($len == 0) {
            $return = true;
        }
        $return = (substr($string, -$len) === $endString);
        if ($return === true) {
            return $return;
        }
    }

    return $return;
}

/** @return \WebpackLoader */
function get_loader($config_name)
{
    global $config;
    // print_r(['$config_name'=>$config_name, '$config'=>$config]);
    $WebpackLoader = new WebpackLoader($config_name, $config[$config_name]);
    return $WebpackLoader;
}

function _filter_by_extension($bundle, $extension)
{
    foreach ($bundle as $key => $chunk) {
        if (endsWith($chunk['name'], [sprintf(".%s", $extension)])) {
            yield $chunk;
        }
    }
}

function _get_bundle($bundle_name, $extension, $config)
{
    $bundle = get_loader($config)->get_bundle($bundle_name);
    // print_r(['$bundle' => $bundle]);
    if ($extension) {
        $bundle = _filter_by_extension($bundle, $extension);
    }
    return $bundle;
}

function get_files($bundle_name, $extension = null, $config = 'DEFAULT')
{
    return _get_bundle($bundle_name, $extension, $config);
}

function remove_unwanted($currentUrl)
{
    // print_r(["currentUrl" => $currentUrl]);
    foreach (_ASSET_REMOVE_STR_ as $iKey => $unwanted) {
        // print_r(["unwanted" => $unwanted]);
        $currentUrl = str_replace($unwanted, "", $currentUrl);
    }
    // print_r(["currentUrl-2" => $currentUrl]);
    return $currentUrl;
}

function Get_Webpack_Tags($bundle_name, $extension = null, $config = 'DEFAULT', $prefix = '', $suffix = '', $attrs = '', $is_preload = false,)
{
    $bundle = _get_bundle($bundle_name, $extension, $config);
    $cssTags = [];
    $jsTags = [];
    foreach ($bundle as $key => $chunk) {
        // print_r(['$chunk' => $chunk]);
        // print_r(['$chunk[name]' => $chunk['name']]);
        $URL = $chunk['url'];
        // print_r(['$URL-1' => $URL]);
        $URL = remove_unwanted($URL);
        // print_r(['$URL-2' => $URL]);
        if (endsWith($chunk['name'], ['.js', '.js.gz'])) {
            if ($is_preload) {
                $tag = sprintf("<link rel=\"preload\" as=\"script\" href=\"%s\" %s/>",
                    implode("", [$prefix, $URL, $suffix]), $attrs
                );
                if (!in_array($tag, $jsTags)) {
                    array_push($jsTags, $tag);
                }
            } else {
                $tag = sprintf("<script type=\"text/javascript\" src=\"%s\" %s></script>",
                    implode("", [$prefix, $URL, $suffix]), $attrs
                );
                if (!in_array($tag, $jsTags)) {
                    array_push($jsTags, $tag);
                }
            }
        } elseif (endsWith($chunk['name'], ['.css', '.css.gz'])) {
            $others = $is_preload ? 'preload" as="style' : "stylesheet";
            $tag = sprintf("<link href=\"%s\" rel=\"%s\" %s/>",
                implode("", [$prefix, $URL, $suffix]), $others, $attrs
            );
            if (!in_array($tag, $cssTags)) {
                array_push($cssTags, $tag);
            }
        }
    }
    $tags['css'] = $cssTags;
    $tags['js'] = $jsTags;
    // print_r(['$tags' => $tags]);
    return $tags;
}

function get_static($asset_name, $config = 'DEFAULT')
{
    return sprintf("%s%s", 
        get_loader($config)->get_assets()->publicPath, $asset_name
    );
}

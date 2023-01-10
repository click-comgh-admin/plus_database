<?php
require_once 'webpack_loader/config.php';
require_once 'webpack_loader/loader.php';

// define('IN_PRODUCTION_MODE', true);
define('IN_PRODUCTION_MODE_PREFIX', IN_PRODUCTION_MODE
    ? "" : str_replace("/production_public/", "", CLIENT_BASE_URL));

$config = DEFAULT_CONFIG;
$config['DEFAULT']['STATS_FILE'] = dirname(__DIR__) . "/webpack-stats.json";

// print_r(['$config' => $config]);
// print_r(['$_SERVER[HTTP_HOST]' => $_SERVER['HTTP_HOST']]);
// print_r(['$_SERVER[SERVER_ADDR]' => $_SERVER['SERVER_ADDR']]);
// print_r(['$_SERVER' => $_SERVER]);
if (($_SERVER['HTTP_HOST'] === '192.168.173.1:83') || ($_SERVER['HTTP_HOST'] === '45.80.152.213') || ($_SERVER['HTTP_HOST'] === '162.0.233.215')) {
    define('_ASSET_REMOVE_STR_', ["/production_public"]);
} else if (($_SERVER['SERVER_ADDR'] === '192.168.173.1:83') || ($_SERVER['SERVER_ADDR'] === '45.80.152.213') || ($_SERVER['SERVER_ADDR'] === '162.0.233.215')) {
    define('_ASSET_REMOVE_STR_', ["/production_public"]);
} else {
    define('_ASSET_REMOVE_STR_', ["/production_public"]);
}

require_once 'webpack_loader/utils.php';

define("_Webpack_Pack_Shared_", Get_Webpack_Tags(
    'shared', prefix:IN_PRODUCTION_MODE_PREFIX, )
);

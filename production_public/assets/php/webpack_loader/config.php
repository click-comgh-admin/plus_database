<?php
define('DEFAULT_CONFIG', __DEFAULT_CONFIG());

function __DEFAULT_CONFIG()
{
    return [
        'DEFAULT' => [
            'CACHE' => false,
            'BUNDLE_DIR_NAME' => 'webpack_bundles/',
            'STATS_FILE' => 'webpack-stats.json',
            'POLL_INTERVAL' => 0.1,
            'IGNORE' => ['.+\.hot-update.js', '.+\.map'],
            'LOADER_CLASS' => 'webpack_loader.loader.WebpackLoader',
        ],
    ];
}

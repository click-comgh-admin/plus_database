<?php

    // define('IN_PRODUCTION_MODE', false);
    define('IN_PRODUCTION_MODE', true);

    require_once ('base_url/api_base_url.php');
    require_once ('base_url/public_base_url.php');
    require_once ('base_url/member_base_url.php');
    require_once ('base_url/file_bucket_base_url.php');
    require_once ('base_url/client_base_url.php');
    require_once ('base_url/attendance_base_url.php');

    define('CLICK_COM_BASE_URL', 'https://clickcomgh.com');

    define('SERVER_HOST', $_SERVER['HTTP_HOST']);

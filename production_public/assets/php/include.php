<?php

use Branch\BranchInfo_I;
use LoginInfo\UserLoginInfo_I;

session_start();

require_once 'main.php';
require_once DIRECTORY . '/settings/classes.php';
require_once BASE_DIRECTORY . '/assets/v2/php/webpack.php';

if (isset($_COOKIE['pdb-client-user']) && !empty($_COOKIE['pdb-client-user'])) {
    $UserLoginInfo_I = new UserLoginInfo_I();
    global $UserLoginInfo_I;

    $BranchInfo_I = new BranchInfo_I();
    global $BranchInfo_I;

    require_once "include_logged.php";
}

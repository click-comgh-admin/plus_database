<?php
    if (isset($_GET['request-log'])) {
        require_once "my-devices.php";
    } else {
        require_once "user-devices.php";
    }
?>
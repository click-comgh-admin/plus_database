<?php require_once BASE_DIRECTORY . '/assets/php/page_components/webpack_support.php'; ?>
<head>
    <!--
        =========================================================
        * PROJECT MYRTEK DASHBOARD 2020
        =========================================================
        * Copyright 2020 PMD (http://myrtek.com)
        =========================================================
    -->
    <?php $ALLOW_AUDIO_RECORDING = false; ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
    <meta name="description" content="This is an example dashboard created using build-in elements and components.">
    <meta name="msapplication-tap-highlight" content="no">
    <link rel="apple-touch-icon" sizes="76x76" href="<?= PUBLIC_BASE_URL; ?>favicon.ico">
    <link rel="icon" type="image/png" href="<?= PUBLIC_BASE_URL; ?>favicon.ico">
    <script type="text/javascript" src="<?= CLIENT_BASE_URL; ?>assets/js/check_login.min.js"></script>
    <link href="<?= CLIENT_BASE_URL; ?>assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?= CLIENT_BASE_URL; ?>assets/css/combo.css" rel="stylesheet">
    <link href="<?= CLIENT_BASE_URL; ?>assets/css/countdown.css" rel="stylesheet">
    <link href="<?= CLIENT_BASE_URL; ?>assets/css/font-awesome.min.css" rel="stylesheet">
    <?php
        if (defined("LIT_FILE_HEAD")) {
            echo LIT_FILE_HEAD;    
        } else { ?>
            <link href="<?= CLIENT_BASE_URL; ?>assets/css/none-table-pagination.css" rel="stylesheet">
        <?php }
    ?>
    <link href="<?= CLIENT_BASE_URL; ?>assets/v2/3rd-party/material/fonts/material-icons.css" rel="stylesheet">
    <?php if (defined("WEB_PACK_CSS_FILES_BRANCH_BTN")) { echo WEB_PACK_CSS_FILES_BRANCH_BTN; } ?>
    <?php if (defined("WEB_PACK_CSS_FILES")) { echo WEB_PACK_CSS_FILES; } ?>
    <link rel="manifest" href="<?= CLIENT_BASE_URL; ?>manifest.webmanifest" />
    <link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-48x48.png" />
    <link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-96x96.png" />
    <link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-144x144.png" />
    <link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-192x192.png" />
    <meta name="apple-mobile-web-app-status-bar" content="#f97817">
    <meta name="theme-color" content="#f97817">
    <script type="text/javascript" src="<?= CLIENT_BASE_URL; ?>assets/js/--set_cookie--.js"></script>
    <title><?= AppName; ?> :: <?= PAGE_TITLE; ?></title>
</head>
<?php require_once(BASE_DIRECTORY."/input_urls.php"); ?>
<div class="scrollbar-container"></div>
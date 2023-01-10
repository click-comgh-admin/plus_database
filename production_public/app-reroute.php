<?php
	ob_start();
	require_once 'assets/php/include.php';
	require_once 'defs.php';
	require_once 'assets/v2/php/webpack.php';

    define("_Webpack_Pack_", Get_Webpack_Tags(
        'redirect', prefix: IN_PRODUCTION_MODE_PREFIX)
    );    
?>
<!DOCTYPE HTML>
<html>
    <?php 
        $cssFiles = '';
        foreach (_Webpack_Pack_['css'] as $key => $cssFile) {
            $cssFiles .= $cssFile;
        }
        define('WEB_PACK_CSS_FILES', $cssFiles);
    ?>
	<head>
		<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta http-equiv="Content-Language" content="en">
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
    	<meta name="description" content="Redirection..., let's go digital. Developed by Click Communications Limited">
		<meta name="author" content="myrtek.com">
    	<meta name="msapplication-tap-highlight" content="no">
		<title>Redirection...</title>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/gradient_bg.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/font-awesome.min.css" />
    	<link href="<?= CLIENT_BASE_URL; ?>assets/v2/3rd-party/material/fonts/material-icons.css" rel="stylesheet">
		<?= WEB_PACK_CSS_FILES; ?>
		<link rel="manifest" href="<?= CLIENT_BASE_URL; ?>manifest.webmanifest" />
		<link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-48x48.png" />
		<link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-72x72.png" />
		<link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-96x96.png" />
		<link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-144x144.png" />
		<link rel="apple-touch-icon" href="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-192x192.png" />
		<meta name="apple-mobile-web-app-status-bar" content="#f97817">
		<meta name="theme-color" content="#f97817">
	</head>
	<body>
		<pdb-redirection></pdb-redirection>
		<?php 
            $jsFiles = '';
            foreach (_Webpack_Pack_Shared_['js'] as $key => $jsFile) {
                $jsFiles .= $jsFile;
            }
            foreach (_Webpack_Pack_['js'] as $key => $jsFile) {
                $jsFiles .= $jsFile;
            }
            define('WEB_PACK_JS_FILES', $jsFiles);
		?>
		<script src="<?= BaseUrl; ?>assets/js/jquery.min.js"></script>
		<?= WEB_PACK_JS_FILES; ?>
	</body>
</html>
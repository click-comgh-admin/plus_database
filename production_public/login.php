<?php
	ob_start();
	require_once 'assets/php/include.php';
	require_once 'defs.php';
	require_once 'assets/v2/php/webpack.php';

	if (isset($_COOKIE['pdb-client-user']) && !empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl);
	}

    define("_Webpack_Pack_", Get_Webpack_Tags(
        'login', prefix: IN_PRODUCTION_MODE_PREFIX)
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
    	<meta name="description" content="<?= AppName; ?>, let's go digital. Developed by Click Communications Limited">
		<meta name="author" content="myrtek.com">
    	<meta name="msapplication-tap-highlight" content="no">
		<title><?= AppName; ?></title>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/bootstrap.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/datepicker.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/select2.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/sweetalert2.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/gradient_bg.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/font-awesome.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/datetime.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/click_com_wizard.min.css" />
		<link rel="stylesheet" href="<?= ClientBaseUrl; ?>assets/css/login-interface.min.css" />
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
		<?php require_once 'input_urls.php'; ?>
		<?php if ($_SERVER['SERVER_NAME'] === "nalag.Akwaaba.com") {
			require_once 'custom_dashboard/nalag_dashboard/login.php';
		} else if ($_SERVER['SERVER_NAME'] === "app.districtdb.com") {
			require_once 'custom_dashboard/district_dashboard/login.php';
		} else if ($_SERVER['SERVER_NAME'] === "admin.clockintoday.com") {
			require_once 'custom_dashboard/clocking_dashboard/register.php';
		} else { ?>
			<!-- Header -->
				<header id="header" class="reveal alt">
					<div class="logo"><a href="<?= BaseUrl; ?>"><?= AppNameSpan; ?></a></div>
					<div class="d-md-inline-block px-3 d-none">
						<ul class="navbar-nav">
							<li class="nav-item active">
								<a class="nav-link" href="<?= BaseUrl; ?>">Home <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a type="button" href="#" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" class="nav-link mb-2 mr-2 dropdown-toggle btn">Accounts</a>
								<div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu" style="top:100%">
									<h6 tabindex="-1" class="pl-3 dropdown-header h-d-i">Register As a</h6>
									<a href="<?= ClientBaseUrl; ?>register" type="button" tabindex="0" class="dropdown-item h-d-i">- Client</a>
									<a href="<?= UserBaseUrl; ?>register" type="button" tabindex="0" class="dropdown-item h-d-i">- Member</a>
									<h6 tabindex="-1" class="pl-3 dropdown-header h-d-i">Login As a</h6>
									<a href="<?= ClientBaseUrl; ?>login" type="button" tabindex="0" class="dropdown-item h-d-i">- Client</a>
									<a href="<?= UserBaseUrl; ?>login" type="button" tabindex="0" class="dropdown-item h-d-i">- Member</a>
								</div>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="<?= BaseUrl; ?>about-us" tabindex="-1">About Us</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="<?= BaseUrl; ?>contact" tabindex="-1">Contact</a>
							</li>
						</ul>
					</div>
					<a href="#menu" class="d-md-none">Menu</a>
				</header>
			<!-- Nav -->
				<nav id="menu">
					<ul class="links">
						<li><a href="<?= BaseUrl; ?>">Home</a></li>
						<li><a href="<?= ClientBaseUrl; ?>register">Register As a Client</a></li>
						<li><a href="<?= UserBaseUrl; ?>register">Register As a Member</a></li>
						<li><a href="<?= ClientBaseUrl; ?>login">Login As a Client</a></li>
						<li><a href="<?= UserBaseUrl; ?>login">Login As a Member</a></li>
						<li><a href="<?= BaseUrl; ?>about-us">About Us</a></li>
						<li><a href="<?= BaseUrl; ?>contact">Contact</a></li>
					</ul>
				</nav>

			<!-- One -->
				<section class="banner p-0">
					<article id="One" class="wrapper style3">
						<img src="<?= BaseUrl; ?>images/bg.jpg" alt="" />
						<div class="inner">
							<header class="align-center">
								<p><?= AppName; ?></p>
								<h2>Client Login</h2>
							</header>
						</div>
					</article>
				</section>

			<!-- Two -->
				<section id="two" class="wrapper style2">
					<div class="inner">
						<div class="box">
							<div class="content shadow border-0">
								<div class="row align-items-center justify-content-center border-1">
									<div class="col-lg-6 col-md-10">
										<div class="row align-items-center justify-content-center">
											<div class="col-lg-12" style="display: contents;">
												<img src="<?= CLIENT_BASE_URL; ?>assets/images/icons/icon-144x144.png" alt="LOGO"/>
											</div>
											<div class="col-lg-12">
												<pdb-login-form></pdb-login-form>
												<?php
													// require_once 'subpages/forms/login_form.php';
												?>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			<!-- Footer -->
				<footer id="footer">
					<div class="container">
						<ul class="icons">
							<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
						</ul>
					</div>
					<div class="copyright">
						<?= date("Y"); ?> &copy; Click Communications Limited. All rights reserved.
					</div>
				</footer>		
		<?php } ?>

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
		
		<!-- Scripts -->
			<script src="<?= BaseUrl; ?>assets/js/jquery.min.js"></script>
			<script src="<?= BaseUrl; ?>assets/js/popper.min.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/moment.min.js"></script>
			<script src="<?= BaseUrl; ?>assets/js/bootstrap.min.js"></script>
			<script src="<?= BaseUrl; ?>assets/js/jquery.scrollex.min.js"></script>
			<script src="<?= BaseUrl; ?>assets/js/skel.min.js"></script>
			<script src="<?= BaseUrl; ?>assets/js/util.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/sweetalert2.min.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/select2.min.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/click_com_wizard.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/datepicker.min.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/datepicker.en.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/croppr.min.js"></script>
			<script type="text/javascript" src="<?= CLIENT_BASE_URL; ?>assets/js/moment.min.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/locale.js"></script>
			<script src="<?= ClientBaseUrl; ?>assets/js/main.js"></script>
			<script src="<?= BaseUrl; ?>assets/js/main.js"></script>
			<?= WEB_PACK_JS_FILES; ?>

	</body>
</html>
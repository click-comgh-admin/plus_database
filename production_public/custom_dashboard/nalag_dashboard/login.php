            <?php require_once 'defs.php'; ?>
            <!-- Header -->
                <header id="header" class="reveal alt">
					<div class="logo"><a href="<?= ClientBaseUrl; ?>"><?= SiteName; ?>.<?= AppNameSpan; ?></a></div>
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
								<p><?= SiteName; ?>.<?= AppName; ?></p>
								<h2><?= SiteName; ?> Login</h2>
							</header>
						</div>
					</article>
				</section>

			<!-- Two -->
				<section id="two" class="wrapper style2">
                <div class="inner">
						<div class="box">
                        <div class="content shadow border-0">
								<?php
									require_once 'subpages/forms/login_form.php';
								?>
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
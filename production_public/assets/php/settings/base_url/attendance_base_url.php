<?php
	$actual_host = $_SERVER['SERVER_ADDR'];
	if (IN_PRODUCTION_MODE) {
		define('CLOCK_BASE_URL', "https://clock.akwaabasoftware.com/");
	} else {
		// define('CLOCK_BASE_URL', "http://$actual_host/AMG/plus_db/client_dashboard/");
		define('CLOCK_BASE_URL', "http://$actual_host:83/");
	}

	// $_SERVER['SERVER_NAME'] = "app.districtdb.com";
	$_SERVER['SERVER_NAME'] = "clock.akwaabasoftware.com";

	// if ($_SERVER['SERVER_NAME'] == "app.districtdb.com") {
	// 	define('CLOCK_BASE_URL', "https://app.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "clock.akwaabasoftware.com") {
	// 	define('CLOCK_BASE_URL', "https://clock.akwaabasoftware.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "admin.clockintoday.com") {
	// 	define('CLOCK_BASE_URL', "https://admin.clockintoday.com/");
	// } else {
	// 	define('CLOCK_BASE_URL', "https://clock.akwaabasoftware.com/");
	// }
	// print_r($_SERVER);

	// $_SERVER['SERVER_NAME'] = "nalag.Akwaaba.com";
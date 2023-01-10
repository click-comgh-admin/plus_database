<?php
	$actual_host = $_SERVER['SERVER_ADDR'];
	if (IN_PRODUCTION_MODE) {
		define('PUBLIC_BASE_URL', "https://plus-database.akwaabasoftware.com/");
	} else {
		define('PUBLIC_BASE_URL', "http://$actual_host/AMG/plus_db/landing_page/");
	}

	$_SERVER['SERVER_NAME'] = "districtdb.com";
	// // $_SERVER['SERVER_NAME'] = "Akwaaba.com";

	// if ($_SERVER['SERVER_NAME'] == "districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "Akwaaba.com") {
	// 	define('CLIENT_BASE_URL', "https://Akwaaba.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "clockintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://clockintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://Akwaaba.com/");
	// }
	// print_r($_SERVER);
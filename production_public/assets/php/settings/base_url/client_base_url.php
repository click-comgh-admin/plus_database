<?php
	$actual_host = $_SERVER['SERVER_ADDR'];
	if (IN_PRODUCTION_MODE) {
		define('CLIENT_BASE_URL', "https://database.akwaabasoftware.com/");
	} else {
		// define('CLIENT_BASE_URL', "http://$actual_host/AMG/plus_db/client_dashboard/");
		define('CLIENT_BASE_URL', "http://$actual_host:84/");
	}

	// $_SERVER['SERVER_NAME'] = "app.districtdb.com";
	$_SERVER['SERVER_NAME'] = "database.akwaabasoftware.com";

	// if ($_SERVER['SERVER_NAME'] == "app.districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://app.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "database.akwaabasoftware.com") {
	// 	define('CLIENT_BASE_URL', "https://database.akwaabasoftware.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "admin.databaseintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://admin.databaseintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://database.akwaabasoftware.com/");
	// }
	// print_r($_SERVER);

	// $_SERVER['SERVER_NAME'] = "nalag.Akwaaba.com";
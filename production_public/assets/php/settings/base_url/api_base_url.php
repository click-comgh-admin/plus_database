<?php
	// print_r(['IN_PRODUCTION_MODE'=>IN_PRODUCTION_MODE]);
	$actual_host = $_SERVER['SERVER_ADDR'];
	// print_r(['$actual_host' => $actual_host, '$_SERVER[HTTP_HOST]' => $_SERVER['HTTP_HOST']]);
	if (IN_PRODUCTION_MODE) {
		define('API_BASE_URL', "https://db-api.akwaabasoftware.com/");
		define('API_V2_BASE_URL', "https://db-api-v2.akwaabasoftware.com/");
	} else {
		define('API_BASE_URL', "http://$actual_host/AMG/plus_db/api/");
		define('API_V2_BASE_URL', "http://127.0.0.1:9001/api/");
	}
	// print_r($_SERVER);

	$_SERVER['SERVER_NAME'] = "api.districtdb.com";
	// // $_SERVER['SERVER_NAME'] = "api.Akwaaba.com";

	// if ($_SERVER['SERVER_NAME'] == "api.districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://api.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "api.Akwaaba.com") {
	// 	define('CLIENT_BASE_URL', "https://api.Akwaaba.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "api.clockintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://api.clockintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://api.Akwaaba.com/");
	// }
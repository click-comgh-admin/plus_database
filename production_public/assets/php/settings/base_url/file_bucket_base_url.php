<?php
	$actual_host = $_SERVER['SERVER_ADDR'];
	if (IN_PRODUCTION_MODE) {
		define('FILE_BUCKET_BASE_URL', "https://file-bucket.akwaabasoftware.com/");
	} else {
		define('FILE_BUCKET_BASE_URL', "http://$actual_host/AMG/plus_db/file_bucket/");
	}
	
	$_SERVER['SERVER_NAME'] = "file_bucket.districtdb.com";
	// // $_SERVER['SERVER_NAME'] = "file_bucket.Akwaaba.com";

	// if ($_SERVER['SERVER_NAME'] == "file_bucket.districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://file_bucket.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "file_bucket.Akwaaba.com") {
	// 	define('CLIENT_BASE_URL', "https://file_bucket.Akwaaba.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "file_bucket.clockintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://file_bucket.clockintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://file_bucket.Akwaaba.com/");
	// }
	// print_r($_SERVER);

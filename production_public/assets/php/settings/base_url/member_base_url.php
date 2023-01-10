<?php
	$actual_host = $_SERVER['SERVER_ADDR'];
	if (IN_PRODUCTION_MODE) {
		define('MEMBER_BASE_URL', "https://member.plus-database.akwaabasoftware.com/");
	} else {
		define('MEMBER_BASE_URL', "http://$actual_host/AMG/plus_db/member_dashboard/");
	}
	
	$_SERVER['SERVER_NAME'] = "staff.districtdb.com";
	// // $_SERVER['SERVER_NAME'] = "member.Akwaaba.com";

	// if ($_SERVER['SERVER_NAME'] == "staff.districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://staff.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "member.Akwaaba.com") {
	// 	define('CLIENT_BASE_URL', "https://member.Akwaaba.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "user.clockintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://user.clockintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://member.Akwaaba.com/");
	// }
	// print_r($_SERVER);
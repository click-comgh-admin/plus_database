<?php
	// define('BaseUrl', 'http://169.254.128.177/AMG/plus_db/landing_page/');
	// define('UserBaseUrl', 'http://169.254.128.177/AMG/plus_db/member_dashboard/');
	// define('ClientBaseUrl', 'http://169.254.128.177/AMG/plus_db/client_dashboard/');

	$get_string = "client-membership/system_version";
	$system_version = @$ccApi->fetch_from($get_string, function($versions)
	{
		$appDomain = $_SERVER['SERVER_NAME'];
		
		foreach ($versions as $key => $version) {
			// print_r(['$version'=>$version]);
			if (!is_string($version) && (bool)strpos($appDomain, $version['pdv_url']) === true) {
				return $version;
			}
		}
	}, $debug = false);

	if (is_array($system_version)) {
		$fN = explode("database", strtolower($system_version['pdv_info']));
		define('AppName', $system_version['pdv_info']);
		define('AppNameSpan', ucfirst($fN[0]).'<span>Database</span>');
	} else {
		define('AppName', 'Akwaaba');
		define('AppNameSpan', 'Akwaaba<span>...</span>');
	}

	define('BaseUrl', PUBLIC_BASE_URL);
	define('UserBaseUrl', MEMBER_BASE_URL);
	define('ClientBaseUrl', CLIENT_BASE_URL);
	define('FileBucketBaseUrl', FILE_BUCKET_BASE_URL);
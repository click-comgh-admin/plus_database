<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;
	
	if ($_SERVER['REQUEST_METHOD'] == "GET") {
        if ($_GET['job']=="credit_purchase" || $_GET['job']=="pay_fees" || $_GET['job']=="space_purchase" || $_GET['job']=="subscription" || $_GET['job']=="move-expired-to-archived") {
			$curl = curl_init();
			$response = curlCall($base_url."--workers--/".$_GET['job'], $curl, $method="POST", $post_data=[]);

			$err = curl_error($curl);
			curl_close($curl);
			print_r($response);
		} else {

        }
	}
?>
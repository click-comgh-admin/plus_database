<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;
    $data['user_id'] = $_GET['user'];
    $data['client_id'] = $_GET['client_id'];
    $data['by_region'] = $_GET['by_region'];
    $data['region'] = $_GET['region'];
    $data['by_district'] = $_GET['by_district'];
    $data['district'] = $_GET['district'];
    $data['by_country'] = $_GET['by_country'];
    $data['country'] = $_GET['country'];

	$curl = curl_init();
	$response = curlCall($base_url."client-membership/branch/account_branches_pagin", $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
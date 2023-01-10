<?php
	require_once ('../../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;
    $data['account_id'] = $_GET['acc_id'];
    $data['page_base_url'] = $_GET['page'];
    $data['api_base_url'] = $_GET['api'];
    $data['file_base_url'] = $_GET['file'];
    $data['user_id'] = $_GET['user_id'];

	$curl = curl_init();
	$response = curlCall($base_url."notifications/clients/pagins/clients-notifications_pagin?account_id=".$_GET['acc_id'], $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
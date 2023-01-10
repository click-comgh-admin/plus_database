<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;
    $data['account_id'] = $_GET['acc_id'];
    $data['user_id'] = $_GET['user'];
    $data['member_id'] = $_GET['member'];
    $data['api_base_url'] = $_GET['api'];

    $curl = curl_init();
	$response = curlCall($base_url."membership/identity/member_id_pagin_md", $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
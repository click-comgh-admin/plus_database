<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;
    $data['client_id'] = $_GET['client_id'];
    $data['searchQuery'] = isset($_GET['searchQuery']) ? $_GET['searchQuery']: "";
    $data['currentPage'] = isset($_GET['currentPage']) ? $_GET['currentPage']: 0;
    $data['rowsPerPage'] = isset($_GET['rowsPerPage']) ? $_GET['rowsPerPage']: 10;

	$curl = curl_init();
	$response = curlCall($base_url."file-manager/clients/pagin_folders", $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
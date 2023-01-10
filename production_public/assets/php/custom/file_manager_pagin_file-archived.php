<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;
    $data['by_date'] = $_GET['by_date'];
    $data['start_date'] = $_GET['start_date'];
    $data['end_date'] = $_GET['end_date'];
    $data['client_id'] = $_GET['client_id'];
    $data['by_folder_id'] = isset($_GET['by_folder_id']) ? $_GET['by_folder_id']: 0;
    $data['folder_id'] = isset($_GET['folder_id']) ? $_GET['folder_id']: 0;
    $data['by_subfolder_id'] = isset($_GET['by_subfolder_id']) ? $_GET['by_subfolder_id']: 0;
    $data['subfolder_id'] = isset($_GET['subfolder_id']) ? $_GET['subfolder_id']: 0;
    $data['searchQuery'] = isset($_GET['searchQuery']) ? $_GET['searchQuery']: "";
    $data['currentPage'] = isset($_GET['currentPage']) ? $_GET['currentPage']: 0;
    $data['rowsPerPage'] = isset($_GET['rowsPerPage']) ? $_GET['rowsPerPage']: 10;

	$curl = curl_init();
	$response = curlCall($base_url."file-manager/clients/pagin_file-archived", $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
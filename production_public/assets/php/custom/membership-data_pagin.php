<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;
    $data['account_id'] = $_GET['acc_id'];
    $data['by_gender'] = $_GET['by_gender'];
    $data['gender'] = $_GET['gender'];
    $data['by_status'] = $_GET['by_status'];
    $data['status'] = $_GET['status'];
    $data['by_group_id'] = $_GET['by_group_id'];
    $data['group_id'] = $_GET['group_id'];
    $data['by_subgroup_id'] = $_GET['by_subgroup_id'];
    $data['subgroup_id'] = $_GET['subgroup_id'];
    $data['by_reg_status'] = $_GET['by_reg_status'];
    $data['reg_status'] = $_GET['reg_status'];
    $data['by_location'] = $_GET['by_location'];
    $data['location'] = $_GET['location'];
    $data['by_country'] = $_GET['by_country'];
    $data['country'] = $_GET['country'];
    $data['by_region'] = $_GET['by_region'];
    $data['region'] = $_GET['region'];
    $data['by_district'] = $_GET['by_district'];
    $data['district'] = $_GET['district'];
    $data['by_search_member'] = $_GET['by_search'];
    $data['search_member'] = $_GET['search'];
    $data['filter_type'] = $_GET['filter_type'];
    
    $data['page_base_url'] = $_GET['page'];
    $data['api_base_url'] = $_GET['api'];
    $data['file_base_url'] = $_GET['file'];
    $data['user_id'] = $_GET['user_id'];

	$curl = curl_init();
	$response = curlCall($base_url."membership-filter/membership-data_pagin?account_id=".$_GET['acc_id'], $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
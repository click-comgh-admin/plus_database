<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;
    $data['account_id'] = $_GET['acc_id'];
    $data['by_date'] = $_GET['by_date'];
    $data['selected_date'] = $_GET['selected_date'];
    $data['by_time'] = $_GET['by_time'];
    $data['start_time'] = $_GET['start_time'];
    $data['end_time'] = $_GET['end_time'];
    $data['by_check_out_time'] = $_GET['by_check_out_time'];
    $data['check_out_start_time'] = $_GET['check_out_start_time'];
    $data['check_out_end_time'] = $_GET['check_out_end_time'];
    $data['by_group_id'] = $_GET['by_group_id'];
    $data['group_id'] = $_GET['group_id'];
    $data['by_subgroup_id'] = $_GET['by_subgroup_id'];
    $data['subgroup_id'] = $_GET['subgroup_id'];
    $data['by_clocking_medium'] = $_GET['by_clocking_medium'];
    $data['clocking_medium'] = $_GET['clocking_medium'];
    $data['by_web_status'] = $_GET['by_web_status'];
    $data['web_status'] = $_GET['web_status'];
    $data['by_attendance_status'] = $_GET['by_attendance_status'];
    $data['attendance_status'] = $_GET['attendance_status'];
    
    $data['page_base_url'] = $_GET['page'];
    $data['api_base_url'] = $_GET['api'];
    $data['file_base_url'] = $_GET['file'];
    $data['user_id'] = $_GET['user_id'];
    $data['by_member_id'] = $_GET['by_member_id'];
    $data['member_id'] = $_GET['member_id'];

	$curl = curl_init();
	$response = curlCall($base_url."attendance/clients/settings/attendance-post-clock-in_pagin?account_id=".$_GET['acc_id'], $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
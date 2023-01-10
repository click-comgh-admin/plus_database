<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;
    $data['account_id'] = $_GET['acc_id'];
    $data['by_date'] = $_GET['by_date'];
    $data['start_date'] = $_GET['start_date'];
    $data['end_date'] = $_GET['end_date'];
    $data['by_attendance_status_id'] = $_GET['by_attendance_status_id'];
    $data['attendance_status_id'] = $_GET['attendance_status_id'];
    $data['by_user_meeting_day_id'] = $_GET['by_user_meeting_day_id'];
    $data['user_meeting_day_id'] = $_GET['user_meeting_day_id'];
    $data['by_group_id'] = $_GET['by_group_id'];
    $data['group_id'] = $_GET['group_id'];
    $data['by_subgroup_id'] = $_GET['by_subgroup_id'];
    $data['subgroup_id'] = $_GET['subgroup_id'];
    $data['by_gender'] = $_GET['by_gender'];
    $data['gender'] = $_GET['gender'];
    
    $data['page_base_url'] = $_GET['page'];
    $data['api_base_url'] = $_GET['api'];
    $data['file_base_url'] = $_GET['file'];
    $data['user_id'] = $_GET['user_id'];
    $data['by_member_id'] = $_GET['by_member_id'];
    $data['member_id'] = $_GET['member_id'];

	$curl = curl_init();
	$response = curlCall($base_url."attendance/clients/settings/attendance-report_pagin?account_id=".$_GET['acc_id'], $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
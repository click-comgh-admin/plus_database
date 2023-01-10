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
    $data['user_id'] = $_GET['user'];
    $data['by_group_id'] = $_GET['by_group_id'];
    $data['group_id'] = $_GET['group_id'];
    $data['by_appointment_status'] = $_GET['by_appointment_status'];
    $data['appointment_status'] = $_GET['appointment_status'];

	$curl = curl_init();
	$response = curlCall($base_url."office/appointments/appointments_pagin", $curl, $method="POST", $data);
    // print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
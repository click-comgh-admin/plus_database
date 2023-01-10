<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = LOCATION_BASE_URL;
	$token = LOCATION_API_TOKEN;
	
	if ($_SERVER['REQUEST_METHOD'] == "GET") {
		if ($_GET['cc']=="get_regions") {
			
			$curl = curl_init();
			$response = locationCurl($base_url."regions", $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			foreach ($locationCurlResponse as $r) {
				echo "<option value='".@$r['id']."'>".@$r['Region']."</option>";
			}

		} else if ($_GET['cc']=="get_district") {
			
			$curl = curl_init();
			$response = locationCurl($base_url."districts/".str_replace(' ', "%20", $_GET['region']), $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			foreach ($locationCurlResponse as $d) {
				echo "<option value='".@$d['id']."'>".@$d['District']."</option>";
			}

		} else if ($_GET['cc']=="get_constituency") {

			$curl = curl_init();
			$response = locationCurl($base_url."constituency/".str_replace(' ', "%20", $_GET['region'])."/".str_replace(' ', "%20", $_GET['district']), $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			foreach ($locationCurlResponse as $c) {
				echo "<option value='".@$c['id']."'>".@$c['Constituency']."</option>";
			}
			
		} else if ($_GET['cc']=="get_electoral_area") {

			$curl = curl_init();
			$response = locationCurl($base_url."electoral_area/".str_replace(' ', "%20", $_GET['region'])."/".str_replace(' ', "%20", $_GET['district']), $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			foreach ($locationCurlResponse as $c) {
				echo "<option value='".@$c['id']."'>".@$c['Electoral_Area']."</option>";
			}
			
		} else if ($_GET['cc']=="show_regions") {
			
			$curl = curl_init();
			$response = locationCurl($base_url."regions", $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			echo $response;

		} else if ($_GET['cc']=="show_district") {
			
			$curl = curl_init();
			$response = locationCurl($base_url."districts/".str_replace(' ', "%20", $_GET['region']), $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			echo $response;

		} else if ($_GET['cc']=="show_constituency") {

			$curl = curl_init();
			$response = locationCurl($base_url."constituency/".str_replace(' ', "%20", $_GET['region'])."/".str_replace(' ', "%20", $_GET['district']), $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			echo $response;
			
		} else if ($_GET['cc']=="show_electoral_area") {

			$curl = curl_init();
			$response = locationCurl($base_url."electoral_area/".str_replace(' ', "%20", $_GET['region'])."/".str_replace(' ', "%20", $_GET['district']), $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			echo $response;
			
		} else if ($_GET['cc']=="get_mother_church") {
			$curl = curl_init();
			$response = locationCurl($base_url."mother_churches", $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			foreach ($locationCurlResponse as $c) {
				echo "<option value='".@$c['as_id']."'>".@$c['church_name']."</option>";
			}
		} else if ($_GET['cc']=="mother_church_by_id") {
			$curl = curl_init();
			$response = locationCurl($base_url."mother_church/".str_replace(' ', "%20", $_GET['mother_church']), $curl, $token);
			
			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			echo json_encode($locationCurlResponse);
		} else if ($_GET['cc']=="get_congregation") {
			$curl = curl_init();
			$response = locationCurl($base_url."churches/".str_replace(' ', "%20", $_GET['mother_church']), $curl, $token);
			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			foreach ($locationCurlResponse as $c) {
				echo "<option value='".@$c['coc_churches_id']."'>".@$c['church_name']."</option>";
			}
		} else if ($_GET['cc']=="get_congregation_by_district") {

			$curl = curl_init();
			$response = locationCurl($base_url."get_district_church/".str_replace(' ', "%20", $_GET['mother_church'])."/".str_replace(' ', "%20", $_GET['district']), $curl, $token);

			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			foreach ($locationCurlResponse as $c) {
				echo "<option value='".@$c['coc_churches_id']."'>".@$c['church_name']."</option>";
			}
		} else if ($_GET['cc']=="congregation_by_id") {
			$curl = curl_init();
			$response = locationCurl($base_url."get_church/".str_replace(' ', "%20", $_GET['mother_church_name'])."/".str_replace(' ', "%20", $_GET['congregation']), $curl, $token);

			$err = curl_error($curl);
			curl_close($curl);
			$locationCurlResponse = locationCurlResponse($err, $response);
			if (@$locationCurlResponse['error'] == 1) {
				$locationCurlResponse = [];
			}
			echo json_encode($locationCurlResponse);
		} else if ($_GET['cc']=="get_training_events") {
			$event_seminar = $ccApi->event_seminar($all=true, $id=1, function($event_seminar) {
		        return $event_seminar;
		    });

			foreach ($event_seminar as $es) {
				if (strtolower($es['sb_cc_training_seminar_event_region']) == strtolower($_GET['region'])) {
					echo "<option value='".@$es['sb_cc_training_seminar_event_id']."'>@ ".@$es['sb_cc_training_seminar_event']." on ".date("D d/ m/ Y H:i a", strtotime(@$es['sb_cc_training_seminar_event_date']))." </option>";
				}				
			}
		}
	}
?>
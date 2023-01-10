<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;
	
	if ($_SERVER['REQUEST_METHOD'] == "GET") {
        
        if ($_GET['fetch']=="file-manager-spaces") {
			
			$curl = curl_init();
			$response = curlCall($base_url."file-manager/spaces", $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="communications-clients-credit-units") {
			
			$curl = curl_init();
			$response = curlCall($base_url."communications/clients/credit/units", $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="client-membership-all_client_users") {
			
			$curl = curl_init();
			$response = curlCall($base_url."client-membership/all_client_users?account_id=".$_GET['account_id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="client-membership-filter_clients_type") {
			
			$curl = curl_init();
			$response = curlCall($base_url."client-membership/filter_clients_type?account_type=".$_GET['account_type'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="subscription-duration_fee") {
			
			$curl = curl_init();
			$response = curlCall($base_url."subscription/duration_fee?duration_id=".$_GET['duration_id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="subscription-duration") {
			
			$curl = curl_init();
			$response = curlCall($base_url."subscription/duration?id=".$_GET['id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="membership-size-size") {
			
			$curl = curl_init();
			$response = curlCall($base_url."membership-size/size?id=".$_GET['id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="client-membership-one_client_code") {
			
			$curl = curl_init();
			$response = curlCall($base_url."client-membership/one_client_code?code=".$_GET['code'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="client-membership-contact_access_code") {
			
			$curl = curl_init();
			$response = curlCall($base_url."communications/clients/contact/access-code-all?code=".$_GET['code'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="client-membership-one_client_sms_id") {
			
			$curl = curl_init();
			$response = curlCall($base_url."client-membership/one_client_sms_id?sms_id=".$_GET['sms_id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="client-contacts-list") {
			
			$curl = curl_init();
			$response = curlCall($base_url."communications/clients/contacts?account_id=".$_GET['account_id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="client-members-list") {
			
			$curl = curl_init();
			$response = curlCall($base_url."membership-filter/members?currentpage=1&rowsperpage=100000&client_id=".$_GET['account_id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="client-members-list-by-group") {
			
			$curl = curl_init();
			$response = curlCall($base_url."membership-filter/groups?currentpage=1&rowsperpage=".$_GET['rowsperpage']."&client_id=".$_GET['client_id']."&group_id=".$_GET['group_id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="community-by-electoral_area") {
			
			$curl = curl_init();
			$response = curlCall($base_url."location/community-all?ea_id=".$_GET['ea_id'], $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="branches-by-location") {
			$url="client_id=" . $_GET['client_id'];
			if (isset($_GET['country'])) {
				$url .= "&country=" . $_GET['country'];
			}
			if (isset($_GET['region'])) {
				$url .= "&region=" . $_GET['region'];
			}
			if (isset($_GET['district'])) {
				$url .= "&district=" . $_GET['district'];
			}

			$curl = curl_init();
			$response = curlCall($base_url."client-membership/branch/branches_location?$url", $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="get_subscription_durations") {
			$url="";
			if (isset($_GET['account_type_id'])) {
				$url .= "&account_type=" . $_GET['account_type_id'];
			}
			if (isset($_GET['is-trial'])) {
				$url .= "&is-trial=" . $_GET['is-trial'];
			}

			$curl = curl_init();
			$response = curlCall($base_url."subscription/all_durations?$url", $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="get_subscription_sizes") {
			$url="";
			if (isset($_GET['account_type_id'])) {
				$url .= "account_type=" . $_GET['account_type_id'];
			}
			if (isset($_GET['is-trial'])) {
				$url .= "&is-trial=" . $_GET['is-trial'];
			}

			$curl = curl_init();
			$response = curlCall($base_url."membership-size/all_sizes?$url", $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else if ($_GET['fetch']=="get_subscription_fee") {
			$url="fee";
			if (isset($_GET['duration_id'])) {
				$url .= "&duration_id=" . $_GET['duration_id'];
			}
			if (isset($_GET['size_id'])) {
				$url .= "&size_id=" . $_GET['size_id'];
			}
			if (isset($_GET['account_type_id'])) {
				$url .= "&account_type_id=" . $_GET['account_type_id'];
			}
			if (isset($_GET['client_id'])) {
				$url .= "&client_id=" . $_GET['client_id'];
			}
			if (isset($_GET['no_duration'])) {
				$url .= "&no_duration=" . $_GET['no_duration'];
			}

			$curl = curl_init();
			$response = curlCall($base_url."subscription/get-fee?$url", $curl);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else {

        }
	} else if ($_SERVER['REQUEST_METHOD'] == "POST") {

		if ($_GET['fetch']=="form-post") {
			
            function _POST($_post)
            {
				function inputs($value)
				{
					$value = @trim($value);
	
					$value = @stripslashes($value);
	
					$value = @htmlspecialchars($value);
	
					$value = @htmlentities($value);
	
					$value = @strip_tags($value);
	
					return $value;
	
				}
                if (empty($_post)) {
                    $postBody = file_get_contents("php://input");
                    $postBodyJson = @json_decode($postBody,1);
                    $postBodyXml = @simplexml_load_string($postBody);
                    $postBodyXml = @json_decode(json_encode($postBodyXml),1);
                    if (empty($postBodyJson)) {
                        if (empty($postBodyXml)) {
                            $_POST_ = [];
                        } else {
                            $_POST_ = $postBodyXml;
                        }
                    } else {
                        $_POST_ = $postBodyJson;
                    }
                } else {
                    $_POST_ = $_post;
                }
                $_post = [];
                function check_array($array){
                    foreach ($array as $arr_key => $arr) {
                        if (!is_array($arr)) {
                            $array[$arr_key] = inputs($arr);
                        } else {
                            $array[$arr_key] = check_array($arr);
                        }
                    }
                    return $array;
                }
                foreach ($_POST_ as $key => $value) {
                    if (!is_array($value)) {
                        $_post[$key] = inputs($value);
                    } else {
                        $_post[$key] = check_array($value);
                    }
                }
                return $_post;
			}
			
			$_POST = _POST($_POST);
			
			$curl = curl_init();
			$response = curlCall($base_url."".$_GET['url']."", $curl, $method="POST", $post_data=$_POST);

			$err = curl_error($curl);
            curl_close($curl);
            print_r($response); return;

		} else {

		}

	}
?>
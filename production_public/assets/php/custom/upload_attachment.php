<?php
	require_once ('../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;
	$token = API_TOKEN;

    $data = $_POST;print_r($_FILES);
    if (isset($_FILES['attachments'])) {
        $dir = "upload/".date("y-m-d-h-i-a-u")."/";
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
        foreach ($_FILES['attachments']['tmp_name'] as $key => $file) {
            // $data['attachments'][] = new CurlFile($file);
            $data['attachments']['name'][$key] = $_FILES['attachments']['name'][$key];
            $data['attachments']['type'][$key] = $_FILES['attachments']['type'][$key];
            $data['attachments']['tmp_name'][$key] = $_FILES['attachments']['tmp_name'][$key];
            $data['attachments']['error'][$key] = $_FILES['attachments']['error'][$key];
            $data['attachments']['size'][$key] = $_FILES['attachments']['size'][$key];

            $ext = explode(".", $data['attachments']['name'][$key]);
            $ext = end($ext);
            $fileName = "file_$key.$ext";
            $movedTo = "$dir$fileName";
                
            @move_uploaded_file($_FILES['attachments']['tmp_name'][$key], $movedTo);

            $mime = mime_content_type($movedTo);
            $file_contents = file_get_contents($movedTo);
            $file_contents = base64_encode($file_contents);
            // $data['attachments'][] = new CurlFile($movedTo);
            $data['attachments'][] = 'data: '.$mime.';base64, '.$file_contents;
        }
    }
    
    print_r($data);
    $curl = curl_init();
	$response = curlCall($base_url."communications/clients/attachments/upload", $curl, $method="POST", $data);
    print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>
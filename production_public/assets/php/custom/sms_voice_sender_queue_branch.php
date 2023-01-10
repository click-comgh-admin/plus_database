<?php
    require_once ('../main.php');
    require_once DIRECTORY.'/settings/classes.php';

    $base_url = API_BASE_URL;
    $token = API_TOKEN;
?>
<pre>
    <hr>
        <h3>SMS Sender From Admin</h3>
    <hr>
    <?php
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/messaging/branch/sms_sender_queue", $curl, $method="POST", $post_data=[]);

        $err = curl_error($curl);
        curl_close($curl);
        print_r($response);
    ?>
    <hr>
        <h3>VOICE Sender To Contacts</h3>
    <hr>
    <?php
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/messaging/branch/voice_sender_queue", $curl, $method="POST", $post_data=[]);

        $err = curl_error($curl);
        curl_close($curl);
        print_r($response);
    ?>
</pre>
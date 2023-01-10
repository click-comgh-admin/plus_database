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
        $response = curlCall($base_url."--workers--/messaging/sms_sender_admin", $curl, $method="POST", $post_data=[]);

        $err = curl_error($curl);
        curl_close($curl);
        print_r($response);
    ?>
        <hr>
            <h3>SMS Sender To Contacts</h3>
        <hr>
    <?php
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/messaging/sms_sender_contact", $curl, $method="POST", $post_data=[]);

        $err = curl_error($curl);
        curl_close($curl);
        print_r($response);
    ?>
        <hr>
            <h3>SMS Sender To Members</h3>
        <hr>
    <?php
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/messaging/sms_sender_members", $curl, $method="POST", $post_data=[]);

        $err = curl_error($curl);
        curl_close($curl);
        print_r($response);
    ?>
        <hr>
            <h3>Voice Sender From Admin</h3>
        <hr>
    <?php
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/messaging/voice_sender_admin", $curl, $method="POST", $post_data=[]);

        $err = curl_error($curl);
        curl_close($curl);
        print_r($response);
    ?>
    <hr>
        <h3>Voice Sender To Contacts</h3>
    <hr>
    <?php
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/messaging/voice_sender_contact", $curl, $method="POST", $post_data=[]);

        $err = curl_error($curl);
        curl_close($curl);
        print_r($response);
    ?>
    <hr>
        <h3>Voice Sender To Members</h3>
    <hr>
    <?php
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/messaging/voice_sender_members", $curl, $method="POST", $post_data=[]);

        $err = curl_error($curl);
        curl_close($curl);
        print_r($response);
    ?>
</pre>
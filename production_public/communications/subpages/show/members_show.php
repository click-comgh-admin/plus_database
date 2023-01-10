<?php
    use Encryptor\Encryptor;
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    $get_string = "mailer/members/one_contact_mail?account_id=$account_id&message_id=".$_GET['show'];
    $message = $ccApi->communications($type="clients", $get_string, function($message)
    {
        return $message;
    }, $debug = false);
    if (empty($message)) { ?>
        <script>
            history.back();
        </script>
    <?php die(); }
    $get_string = "mailer/members/contact_mail_trail?account_id=$account_id&message_id=".$_GET['show'];
    $message_trail = $ccApi->communications($type="clients", $get_string, function($message_trail)
    {
        return $message_trail;
    }, $debug = false);
    function update_seen($ccApi, $message_id, $account_id, $user_id)
    {
        $url = API_BASE_URL."communications/clients/mailer/members/update_seen";
        $post = ["message_id"=>$message_id, "client_id"=>$account_id, "admin_user_id"=>$user_id];
        $ccApi->action_post($url=$url, $post=$post, function($post_response) {
            return $post_response;
        }, $debug=false);
    }
    function message_info_gen($message, $account_id, $ccApi, $account_info)
    { ?>
        <div class="table-responsive">
            <table class="table table-sm table-striped table-borderless table-hover tabs-shadow-bordered">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sent By</td>
                        <td>
                            <?php
                                if (@$message['parties'][0]['pdccmc_sender'] == 1) {
                                    $sender_info = $ccApi->user_info($type = "client", $account_id,
                                        $all="one_user", $id=$message['pdccmc_sender_id'], function ($info)
                                    {
                                        return @$info[0];
                                    });
                                    echo $sender_info['pdcu_firstname']." ".$sender_info['pdcu_surname']." of <b>".$account_info['pdc_name']."</b>";
                                } else {
                                    $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member",
                                        $id=@$message['parties'][0]['pdccmc_sender_id'], function ($members) {
                                        return $members;
                                    }, $debug = 0);
                                    $user_id = @$member['pdm_id']|"0";
                                    $encryptor = new Encryptor("members", md5("members"));
                                    $user_id = $encryptor->encrypt($user_id);
                                    ?>
                                        <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $user_id; ?>" class="btn btn-success btn-sm" type="button">
                                            <?= @$member['pdm_firstname']." ".@$member['pdm_surname']; ?>
                                        </a>
                                    <?php
                                }
                            ?>
                        </td>
                    </tr>
                    <tr>
                        <td>Recipient(s)</td>
                        <td>
                            <?php
                                if (@$message['parties'][0]['pdccmc_sender_id'] == $account_id) {
                                    if (!empty($message['parties'])) {
                                        $encryptor = new Encryptor("members", md5("members"));
                                        foreach ($message['parties'] as $key => $recipient) {
                                            $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member",
                                                $id=@$recipient['pdccmc_recipient_id'], function ($members) {
                                                return $members;
                                            }, $debug = 0);
                                            if (isset($member['pdm_id'])) {
                                                $user_id = @$member['pdm_id']|"0";
                                                $user_id = @$encryptor->encrypt($user_id); ?>
                                                <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $user_id; ?>" class="btn btn-info btn-sm" type="button">
                                                    <?= @$member['pdm_firstname']." ".@$member['pdm_surname']; ?>
                                                </a>,
                                            <?php }
                                        }
                                    } else {
                                        echo "-";
                                    }
                                } else { ?>
                                    <a href="#" class="btn btn-info m-1 btn-sm">
                                        <?= $account_info['pdc_name']; ?>
                                    </a>
                                <?php 
                                }
                            ?>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <?php }
    function delete_btn_alt($message_id, $account_id, $user_id, $class) { ?>
        <button class="<?= $class; ?> d-flex btn-actions-pane-right" style="padding: .25rem .5rem !important"
            btn-submit-post=<?= json_encode(["message_id"=>[["id"=>$message_id]], "client_id"=>$account_id, "admin_user_id"=>$user_id, "entry"=>1]); ?>
            btn-submit-post--confirm="Delete Message?"
            btn-submit-post--url="<?= API_BASE_URL."communications/clients/mailer/members/delete"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="d-none d-sm-block">Delete</span>
        </button>
    <?php }
?>
<pre><?php //print_r($message); ?></pre>
<pre><?php //print_r($message_trail); ?></pre>
<div class="container" email-tabs="container-mail">
    <div class="main-card mb-3">
        <div class="card-body py-0">
            <div class="collapse py-2" id="message_info">
                <h5 class="card-title">Message Info</h5>
                <?= message_info_gen($message, $account_id, $ccApi, $account_info); ?>
            </div>
            <div class="collapse py-2" id="message_attachments">
                <h5 class="card-title">Attachments</h5>
                <div class="row justify-content-center">
                    <?php
                        $MailAttachment->files($message["attached"], 10000, ["col"=>"col-md-3", "width"=>"33%"], true, false);
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button class="btn-actions-pane-right btn btn-info collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#message_info">
                <span class="d-block d-md-none pe-7s-info fa-1x"></span>
                <span class="d-none d-sm-block">View Message Info</span>
            </button>
            <button class="btn btn-success mx-1 collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#message_attachments">
                <span class="d-block d-md-none pe-7s-link fa-1x"></span>
                <span class="d-none d-sm-block">View Attachments</span>
            </button>
        </div>
    </div>
    <div class="main-card mb-3 pr-5">
        <?php update_seen($ccApi, $message['pdccmc_id'], $account_id, $user_id); ?>
        <?= delete_btn_alt($message['pdccmc_id'], $account_id, $user_id, "btn btn-sm bg-love-kiss text-white font-weight-bold"); ?>
        <div class="card-header-tab card-header-tab-animation card-header h-25 bg-light">
            <div class="card-header-title" style="white-space: normal">
                <?php
                    $sender_id = @$message['parties'][0]['pdccmc_sender_id'];
                    if ((int)@$message['parties'][0]['pdccmc_sender'] == 1) { ?>
                        <h5 class="mail-sender--abbr my-1 mr-2">
                            <?= @explode(" ", $account_info['pdc_name'])[0][0].@explode(" ", $account_info['pdc_name'])[1][0]; ?>
                        </h5>
                    <?php } else { 
                        $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$sender_id, function ($members) {
                            return $members;
                        }, $debug = 0);
                        ?>
                        <img width="50" height="50" class="rounded-circle my-1 mr-2 shadow shadow-sm" alt="Member Image"
                            src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                    <?php }
                ?>
                <span><?= $message['pdccmc_subject']; ?></span>
                
            </div>
            <span class="badge p-1 mx-3 small badge-info shadow shadow-sm">
                <?= $message['message_type']['pdccmc_type']; ?>
            </span>
        </div>
        <div class="card-body py-0 bg-light">
            <?php
                if ((int)$message['message_type']['pdccmc_id'] == 3) { ?>
                    <audio src="<?= FILE_BUCKET_BASE_URL; ?>files/<?= $message['pdccmc_attachment']; ?>" 
                        controls="" class="mfp-img-mobile mfp-fade container" 
                        style="background-image: linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px"></audio>
                <?php }
            ?>
            <p class="p-0 m-0"><?= multilineText($message['pdccmc_message']); ?></p>
        </div>
        <div class="card-footer bg-light">
            <small class="btn-actions-pane-right font-weight-bold">
                <?php
                    $date = $message['pdccmc_date'];
                    echo date("m/d/Y @ H:i A", strtotime($date));
                ?>
            </small>
        </div>
    </div>

    <div>
        <h5 class="text-center">
            Message Thread
            <a href="members?<?= $_SERVER['QUERY_STRING']; ?>&reply" type="button" class="btn btn-sm bg-grow-early text-light font-weight-bold rounded-pill shadow" 
                style="width: 150px; z-index: 999;" >Reply/ Follow-up
            </a>
            
        </h5>
    </div>
    <div class="mb-3 pl-5">
        <?php
            foreach ($message_trail as $mess_key => $message) { ?>
                <!-- <pre><?php //print_r($message); ?></pre> -->
                <div class="main-card mb-2 bg-light">
                    <?php update_seen($ccApi, $message['pdccmc_id'], $account_id, $user_id); ?>
                    <?= ((int)@$message['parties'][0]['pdccmc_sender'] == 1) ?
                        delete_btn_alt($message['pdccmc_id'], $account_id, $user_id,
                            "btn btn-sm bg-love-kiss text-white font-weight-bold"): ""; ?>
                    <div class="card-header-tab card-header-tab-animation card-header h-25 bg-light p-1">
                        <div class="card-header-title" style="white-space: normal">
                            <?php
                                $sender_id = @$message['parties'][0]['pdccmc_sender_id'];
                                if ((int)@$message['parties'][0]['pdccmc_sender'] == 1) { ?>
                                    <h5 class="mail-sender--abbr my-1 mr-2 shadow shadow-sm">
                                        <?= @explode(" ", $account_info['pdc_name'])[0][0].@explode(" ", $account_info['pdc_name'])[1][0]; ?>
                                    </h5>
                                <?php } else { 
                                    $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$sender_id, function ($members) {
                                        return $members;
                                    }, $debug = 0);
                                    ?>
                                    <img width="50" height="50" class="rounded-circle my-1 mr-2 shadow shadow-sm" alt="Member Image"
                                        src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                                <?php }
                            ?>
                            <span><?= $message['pdccmc_subject']; ?></span>
                        </div>
                        <span class="badge p-1 mx-3 small badge-info shadow shadow-sm">
                            <?= $message['message_type']['pdccmc_type']; ?>
                        </span>
                    </div>
                    <div class="card-body py-0">
                        <div class="bg-white">
                            <div class="card-body py-0">
                                <div class="collapse py-2" id="trail_message_info_<?= $mess_key; ?>">
                                    <h5 class="card-title">Message Info</h5>
                                    <?= message_info_gen($message, $account_id, $ccApi, $account_info); ?>
                                </div>
                                <div class="collapse py-2" id="trail_message_attachments_<?= $mess_key; ?>">
                                    <h5 class="card-title">Attachments</h5>
                                    <div class="row justify-content-center">
                                        <?php
                                            $MailAttachment->files($message["attached"], 10000, ["col"=>"col-md-3", "width"=>"50%"], true, false);
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-light p-1">
                                <div class="btn-actions-pane-right">
                                    <button class="btn btn-info collapsed" style="padding:.375rem .75rem" aria-expanded="false" type="button"
                                        data-toggle="collapse" href="#trail_message_info_<?= $mess_key; ?>">
                                        <span class="d-block d-md-none pe-7s-info fa-1x"></span>
                                        <span class="d-none d-sm-block">Message Info</span>
                                    </button>
                                    <button class="btn btn-success mx-1 collapsed" style="padding:.375rem .75rem" aria-expanded="false" type="button"
                                        data-toggle="collapse" href="#trail_message_attachments_<?= $mess_key; ?>">
                                        <span class="d-block d-md-none pe-7s-link fa-1x"></span>
                                        <span class="d-none d-sm-block">Attachments</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <?php
                            if ((int)$message['message_type']['pdccmc_id'] == 3) { ?>
                                <audio src="<?= FILE_BUCKET_BASE_URL; ?>files/<?= $message['pdccmc_attachment']; ?>" 
                                    controls="" class="mfp-img-mobile mfp-fade container" 
                                    style="background-image: linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px"></audio>
                            <?php }
                        ?>
                        <p class="p-0 m-0"><?= multilineText($message['pdccmc_message']); ?></p>
                    </div>
                    <div class="card-footer bg-light">
                        <small class="btn-actions-pane-right font-weight-bold">
                            <?php
                                $date = $message['pdccmc_date'];
                                echo date("m/d/Y @ H:i A", strtotime($date));
                            ?>
                        </small>
                    </div>
                </div>
            <?php }
        ?>
    </div>
</div>
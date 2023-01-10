<?php
    use Encryptor\Encryptor;
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    $get_string = "mailer/peers/one_contact_mail?account_id=$account_id&user_id=$user_id&message_id=".$_GET['show'];
    $message = $ccApi->communications($type="clients", $get_string, function($message)
    {
        return $message;
    }, $debug = false);
    if (empty($message)) { ?>
        <script>
            history.back();
        </script>
    <?php die(); }
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
                                if ($message['pdccmc_recipient_id'] == 0) {
                                    $sender_id = $message['parties'][0]['pdccmc_sender_id'];
                                } else {
                                    $sender_id = $message['pdccmc_sender_id'];
                                }
                                $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                                    function ($info) { return @$info[0];
                                });
                                echo $sender_info['pdcu_firstname']." ".$sender_info['pdcu_surname'];
                            ?>
                        </td>
                    </tr>
                    <tr>
                        <td>Recipient(s)</td>
                        <td>
                            <?php
                                if ($message['pdccmc_recipient_id'] == 0) {
                                    foreach ($message['parties'] as $key => $recipient) {
                                        $recipient_id = $recipient['pdccmc_recipient_id'];
                                        $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$recipient_id,
                                            function ($info) { return @$info[0];
                                        }); ?>
                                        <a href="#" class="btn btn-info btn-sm" type="button">
                                            <?= $sender_info['pdcu_firstname']." ".$sender_info['pdcu_surname']; ?>
                                        </a>,
                                    <?php }
                                } else {
                                    $recipient_id = $message['pdccmc_recipient_id'];
                                    $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$recipient_id,
                                        function ($info) { return @$info[0];
                                    }); ?>
                                    <a href="#" class="btn btn-info btn-sm" type="button">
                                        <?= $sender_info['pdcu_firstname']." ".$sender_info['pdcu_surname']; ?>
                                    </a>
                                <?php }
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
            btn-submit-post--url="<?= API_BASE_URL."communications/clients/mailer/peers/delete"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="d-none d-sm-block">Delete</span>
        </button>
    <?php } 

    ?> <pre><?php //print_r($message); ?></pre> <?php

    if (isset($message['pdccmc_recipient_id']) && $message['pdccmc_recipient_id'] == 0) {
        $get_string = "mailer/peers/contact_mail_trail?account_id=$account_id&message_id=".$_GET['show'];
        $message_trail = $ccApi->communications($type="clients", $get_string, function($message_trail)
        {
            return $message_trail;
        }, $debug = false);
        ?>
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
                <?= delete_btn_alt($message['pdccmc_id'], $account_id, $user_id, "btn btn-sm bg-love-kiss text-white font-weight-bold"); ?>
                <div class="card-header-tab card-header-tab-animation card-header h-25 bg-light">
                    <div class="card-header-title" style="white-space: normal">
                        <?php
                            $sender_id = $message['pdccmc_sender_id'];
                            $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                                function ($info) { return @$info[0];
                            });
                        ?>
                        <img width="50" height="50" class="rounded-circle shadow shadow-sm my-1 mr-2" alt="Admin Image"
                            src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= $sender_info['pdcu_profile_picture']; ?>">
                        <span><?= $message['pdccmc_subject']; ?></span>
                        
                    </div>
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
                    <a href="peers?<?= $_SERVER['QUERY_STRING']; ?>&reply" type="button" class="btn btn-sm bg-grow-early text-light font-weight-bold rounded-pill shadow" 
                        style="width: 150px; z-index: 999;" >Reply/ Follow-up
                    </a>
                    
                </h5>
            </div>
            <div class="mb-3 pl-5">
                <?php
                    foreach ($message_trail as $mess_key => $message) { 
                        $sender_id = $message['pdccmc_sender_id']; ?>
                        <!-- <pre><?php //print_r($message); ?></pre> -->
                        <div class="main-card mb-2 bg-light">
                            <?= ((int)@$sender_id == $user_id) ?
                                delete_btn_alt($message['pdccmc_id'], $account_id, $user_id,
                                    "btn btn-sm bg-love-kiss text-white font-weight-bold"): ""; ?>
                            <div class="card-header-tab card-header-tab-animation card-header h-25 bg-light p-1" id="<?= $message['pdccmc_id']; ?>">
                                <div class="card-header-title" style="white-space: normal">
                                    <?php
                                        $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                                            function ($info) { return @$info[0];
                                        });
                                    ?>
                                    <img width="50" height="50" class="rounded-circle shadow shadow-sm my-1 mr-2" alt="Admin Image"
                                        src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= $sender_info['pdcu_profile_picture']; ?>">
                                    <span><?= $message['pdccmc_subject']; ?></span>
                                </div>
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
    <?php } else {
        require_once "peers_show_messages.php";
    }
?>
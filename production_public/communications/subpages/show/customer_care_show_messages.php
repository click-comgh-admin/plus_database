<?php
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    $get_string = "mailer/customer-care/one_contact_mail?account_id=$account_id&user_id=$user_id&message_id=".$_GET['show-messages'];
    $message = $ccApi->communications($type="clients", $get_string, function($message)
    {
        return $message;
    }, $debug = false);
    if (empty($message)) { ?>
        <script>
            history.back();
        </script>
    <?php die(); }
    $get_string = "mailer/customer-care/contact_mail_messages_trail?account_id=$account_id&user_id=$user_id";
    $message_trail = $ccApi->communications($type="clients", $get_string, function($message_trail)
    {
        return $message_trail;
    }, $debug = false);

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
                                if ($message['pdccmc_sender'] == 1) {
                                    $sender_id = $message['pdccmc_sender_id'];
                                    $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                                        function ($info) { return @$info[0];
                                    });
                                    echo $sender_info['pdcu_firstname']." ".$sender_info['pdcu_surname']. " of <b>".$account_info['pdc_name']."</b>";
                                } else {
                                    $sender_id = $message['pdccmc_sender_admin_id'];
                                    $sender_info = $ccApi->user_info($type = "admin", $account_id, $all="one_user", $id=$sender_id,
                                        function ($info) { return @$info[0];
                                    });
                                    echo $sender_info['pda_firstname']." ".$sender_info['pda_surname']. " of <b>Customer Care</b>";
                                }
                            ?>
                        </td>
                    </tr>
                    <tr>
                        <td>Recipient(s)</td>
                        <td>
                            <?php
                                if ($message['pdccmc_sender'] == 2) {
                                    echo "<b>".$account_info['pdc_name']."</b>";
                                } else {
                                    echo "<b>Customer Care</b>";
                                }
                            ?>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>              
    <?php } 
    function update_seen($ccApi, $message_id, $account_id, $user_id)
    {
        $url = API_BASE_URL."communications/clients/mailer/customer-care/update_seen";
        $post = ["message_id"=>$message_id, "client_id"=>$account_id, "admin_user_id"=>$user_id];
        $ccApi->action_post($url=$url, $post=$post, function($post_response) {
            return $post_response;
        }, $debug=false);
    }
    function delete_btn_alt($message_id, $account_id, $user_id, $class) { ?>
        <button class="<?= $class; ?> d-flex btn-actions-pane-right" style="padding: .25rem .5rem !important"
            btn-submit-post=<?= json_encode(["message_id"=>[["id"=>$message_id]], "client_id"=>$account_id, "admin_user_id"=>$user_id, "entry"=>1]); ?>
            btn-submit-post--confirm="Delete Message?"
            btn-submit-post--url="<?= API_BASE_URL."communications/clients/mailer/customer-care/delete"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="d-none d-sm-block">Delete</span>
        </button>
    <?php } 

    ?> 
    <pre><?php //print_r($message); ?></pre>
    <pre><?php //print_r($message_trail); ?></pre>

    <div class="container" email-tabs="container-mail">
        <div>
            <h5 class="text-center">
                Message Thread
                <a href="customer-care?<?= $_SERVER['QUERY_STRING']; ?>&reply" type="button" class="btn btn-sm bg-grow-early text-light font-weight-bold rounded-pill shadow" 
                    style="width: 150px; z-index: 999;" >Reply/ Follow-up
                </a>
                
            </h5>
        </div>
        <?php
            foreach ($message_trail as $mess_key => $message) { 
                $sender_id = $message['pdccmc_sender_id']; ?>
                <div class="mb-0 pt-5 <?= ($message['pdccmc_sender'] == 1) ? "pr-4" : "pl-4"; ?>" id="<?= $message['pdccmc_id']; ?>">
                    <!-- <pre><?php //print_r($message); ?></pre> -->
                    <div class="main-card mb-2 bg-light">
                        <?php update_seen($ccApi, $message['pdccmc_id'], $account_id, $user_id); ?>
                        <?= ((int)@$message['pdccmc_sender'] == 1) ?
                            delete_btn_alt($message['pdccmc_id'], $account_id, $user_id,
                                "btn btn-sm bg-love-kiss text-white font-weight-bold"): ""; ?>
                        <div class="card-header-tab card-header-tab-animation card-header h-25 bg-light p-1">
                            <div class="card-header-title" style="white-space: normal">
                                <?php
                                    $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                                        function ($info) { return @$info[0];
                                    });
                                ?>
                                <img width="50" height="50" class="rounded-circle shadow shadow-sm my-1 mr-2" alt="Admin Image"
                                    src="<?= FILE_BUCKET_BASE_URL.$ext = ($message['pdccmc_sender'] == 1) ?
                                        "files/clients/profile-picture/".$sender_info['pdcu_profile_picture'] :
                                        "files/admin/logo.png"; ?>" >
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
                                        style="background-image: linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px">
                                    </audio>
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
                </div>
            <?php }
        ?>
    </div>
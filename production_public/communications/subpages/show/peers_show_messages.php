<?php
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    $other_id = ($message['pdccmc_sender_id'] == $user_id) ? $message['pdccmc_recipient_id'] : $message['pdccmc_sender_id'];
    $get_string = "mailer/peers/contact_mail_messages_trail?account_id=$account_id&user_id=$user_id&contact_id=$other_id";
    $message_trail = $ccApi->communications($type="clients", $get_string, function($message_trail)
    {
        return $message_trail;
    }, $debug = false);
    ?>
    <pre><?php //print_r($message_trail); ?></pre>

    <div class="container" email-tabs="container-mail">
        <div>
            <h5 class="text-center">
                Message Thread
                <a href="peers?<?= $_SERVER['QUERY_STRING']; ?>&reply" type="button" class="btn btn-sm bg-grow-early text-light font-weight-bold rounded-pill shadow" 
                    style="width: 150px; z-index: 999;" >Reply/ Follow-up
                </a>
                
            </h5>
        </div>
        <?php
            foreach ($message_trail as $mess_key => $message) { 
                $sender_id = $message['pdccmc_sender_id']; ?>
                <div class="mb-3 <?= ($sender_id == $user_id) ? "pr-4" : "pl-4"; ?>" id="<?= $message['pdccmc_id']; ?>">
                    <pre><?php //print_r($message); ?></pre>
                    <div class="main-card mb-2 bg-light">
                        <?= ((int)@$sender_id == $user_id) ?
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
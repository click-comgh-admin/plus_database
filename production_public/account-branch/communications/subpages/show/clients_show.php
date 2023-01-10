<?php
    use Encryptor\Encryptor;
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    
    $head_account_id = isset($is_branch_account['pdcbl_client']) ? $is_branch_account['pdcbl_client'] : 0;
    $branch_account_id = isset($is_branch_account['pdcbl_branch']) ? $is_branch_account['pdcbl_branch'] : 0;
        
    $get_string = "client-membership/branch/communications/one_client_to_branch_acc?branch_id=$branch_account_id&account_id=$head_account_id&message_id=".$_GET['show'];
    $message = $ccApi->fetch_from($get_string=$get_string, function($message)
    {
        return $message;
    }, $debug = false);
    // print_r($message);
    if (empty($message)) { ?>
        <script>
            history.back();
        </script>
    <?php die(); }
    $get_string = "client-membership/branch/communications/trail_client_to_branch_acc?branch_id=$branch_account_id&account_id=$head_account_id&message_id=".$_GET['show'];
    $message_trail = $ccApi->fetch_from($get_string=$get_string, function($message_trail)
    {
        return $message_trail;
    }, $debug = false);
    function update_seen($ccApi, $message_id, $account_id, $user_id)
    {
        $url = API_BASE_URL."client-membership/branch/communications/update_seen";
        $post = ["message_id"=>$message_id, "client_id"=>$account_id, "user_id"=>$user_id];
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
                                $is_admin = @$message['pdcbm_is_admin'];
                                $sender_id = @$message['pdcbm_by'];
                                if ((int)$is_admin === 1) {
                                    $sender_info = $ccApi->user_info($type = "client", $account_id,
                                        $all="one_user", $id=$sender_id, function ($info)
                                    {
                                        return @$info[0];
                                    });
                                    echo $sender_info['pdcu_firstname']." ".$sender_info['pdcu_surname']." of <b>".$account_info['pdc_name']."</b>";
                                } else {
                                    $member = $ccApi->user_info($type = "member", $account_id, $all="one_member",
                                        $id=@$sender_id, function ($members) {
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
                                if ((int)$message['pdcbm_from_branch'] === 1) {
                                    if (!empty($message['parties'])) {
                                        $encryptor = new Encryptor("members", md5("members"));
                                        foreach ($message['parties'] as $key => $recipient) {
                                            if ((int)$key < 6) {
                                                if ((int)$recipient['pdcbmc_is_admin'] === 1) {
                                                    $sender_info = $ccApi->user_info($type = "client", $account_id,
                                                        $all="one_user", $id=$recipient['pdcbmc_contact_id'], function ($info)
                                                    {
                                                        return @$info[0];
                                                    }); ?>
                                                    <button type="button" class="btn btn-info btn-sm mx-1" type="button">
                                                        <?= @$sender_info['pdcu_firstname']." ".$sender_info['pdcu_surname']; ?>
                                                    </button>, <?php
                                                } else {
                                                    $member = $ccApi->user_info($type = "member", $account_id, $all="one_member",
                                                        $id=@$recipient['pdcbmc_contact_id'], function ($members) {
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
                                                echo " <b>and more...</b>";
                                                break;
                                            }
                                        }
                                    } else {
                                        echo "-";
                                    }
                                } else {
                                    $is_admin = @$message['pdcbm_is_admin'];
                                    $sender_id = @$message['pdcbm_by'];
                                    if ((int)$is_admin === 1) {
                                        $accountName = $ccApi->user_info($type = "client", $message['pdcbm_client_id'], $all="one_client", $id=$message['pdcbm_client_id'], function ($info)
                                        {
                                            return isset($info['pdc_name'])? $info['pdc_name']: "--";
                                        }); ?>
                                        <a href="#" class="btn btn-info m-1 btn-sm">
                                            <?= $accountName; ?>
                                        </a> <?php
                                    } else {
                                        $member = $ccApi->user_info($type = "member", $account_id, $all="one_member",
                                            $id=@$sender_id, function ($members) {
                                            return $members;
                                        }, $debug = 0);
                                        $user_id = @$member['pdm_id']|"0";
                                        $encryptor = new Encryptor("members", md5("members"));
                                        $user_id = $encryptor->encrypt($user_id);
                                        ?>
                                            <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $user_id; ?>" class="btn btn-info btn-sm" type="button">
                                                <?= @$member['pdm_firstname']." ".@$member['pdm_surname']; ?>
                                            </a>
                                        <?php
                                    } ?>
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
            btn-submit-post=<?= json_encode(["message_id"=>[["id"=>$message_id]], "client_id"=>$account_id, "user_id"=>$user_id, "entry"=>1]); ?>
            btn-submit-post--confirm="Delete Message?"
            btn-submit-post--url="<?= API_BASE_URL."client-membership/branch/communications/delete"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="d-none d-sm-block">Delete</span>
        </button>
    <?php }
    
    $accountName = $account_info['pdc_name'];
    $accountName = explode(" ", $accountName);
    $accountNameShort = @$accountName[0][0].end($accountName)[0];
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
        <?php
            if ((int)$message['pdcbm_from_branch'] === 1) {
                update_seen($ccApi, $message['pdcbm_id'], $message['pdcbm_client_id'], $user_id);
            } 
            if ((int)$message['pdcbm_from_branch'] !== 1) {
                if ((int)$message['pdcbm_by'] === (int)$user_id) {
                    echo delete_btn_alt($message['pdcbm_id'], $message['pdcbm_client_id'], $user_id, "btn btn-sm bg-love-kiss text-white font-weight-bold");
                }
            }
        ?>
        <div class="card-header-tab card-header-tab-animation card-header h-25 bg-light">
            <div class="card-header-title" style="white-space: normal">
                <?php
                    $from_branch = @$message['pdcbm_from_branch'];
                    if ((int)$from_branch === 1) { ?>
                        <h5 class="mail-sender--abbr my-1 mr-2">
                            <?php
                                $clientName = $ccApi->user_info($type = "client", $message['pdcbm_client_id'], $all="one_client", $id=$message['pdcbm_client_id'],
                                    function ($info) { return isset($info['pdc_name'])? $info['pdc_name']: "ss";
                                }, $debug = false);
                                $clientName = explode(" ", $clientName);
                                echo $clientNameShort = @$clientName[0][0].end($clientName)[0];
                            ?>
                        </h5>
                    <?php } else { 
                        $is_admin = @$message['pdcbm_is_admin'];
                        $sender_id = @$message['pdcbm_by'];
                        if ((int)$is_admin === 1) {
                            $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                                function ($info) { return @$info[0];
                            }); 
                            // print_r($sender_info);
                            $ext = (!empty($sender_info)) ? "files/clients/profile-picture/".$sender_info['pdcu_profile_picture'] :
                                "files/admin/logo.png"; ?>
                            <img width="50" height="50" class="rounded-circle shadow shadow-sm my-1 mr-2" alt="Admin Image"
                                src="<?= FILE_BUCKET_BASE_URL.$ext; ?>" >
                        <?php } else {
                            $member = $ccApi->user_info($type = "member", $account_id, $all="one_member", $id=$sender_id, function ($members) {
                                return $members;
                            }, $debug = 0); ?>
                            <img width="50" height="50" class="rounded-circle my-1 mr-2 shadow shadow-sm" alt="Member Image"
                                src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                        <?php } ?>
                    <?php }
                ?>
                <span><?= $message['pdcbm_subject']; ?></span>
                
            </div>
            <span class="badge p-1 mx-3 small badge-info shadow shadow-sm">
                <?= (strtolower($message['message_type']['pdccmc_type']) === "e-mail" )? "Webmail": $message['message_type']['pdccmc_type']; ?>
            </span>
        </div>
        <div class="card-body py-0 bg-light">
            <?php
                if ((int)$message['message_type']['pdccmc_id'] == 3) { ?>
                    <audio src="<?= FILE_BUCKET_BASE_URL; ?>files/<?= $message['pdcbm_attachments']; ?>" 
                        controls="" class="mfp-img-mobile mfp-fade container" 
                        style="background-image: linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px"></audio>
                <?php }
            ?>
            <p class="p-0 m-0"><?= multilineText($message['pdcbm_messages']); ?></p>
        </div>
        <div class="card-footer bg-light">
            <small class="btn-actions-pane-right font-weight-bold">
                <?php
                    $date = $message['pdcbm_date'];
                    echo date("m/d/Y @ H:i A", strtotime($date));
                ?>
            </small>
        </div>
    </div>

    <div>
        <h5 class="text-center">
            Message Thread
            <a href="<?= Current_BaseUrl; ?>/branch-message?<?= $_SERVER['QUERY_STRING']; ?>&reply" type="button" class="btn btn-sm bg-grow-early text-light font-weight-bold rounded-pill shadow" 
                style="width: 150px; z-index: 999;" >Reply/ Follow-up
            </a>
            
        </h5>
    </div>
    
    <?php
        foreach ($message_trail as $mess_key => $message) {
            $from_branch = (int)$message['pdcbm_from_branch'];
            $sender_id = (int)$message['pdcbm_by'];
            $sender_client_id = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                function ($info) { return isset($info[0]['pdcu_account_id'])? (int)$info[0]['pdcu_account_id']: 0;
            }, $debug = false);
            $senderShift = ((int)$sender_client_id == AccountInfoId) ? "pr-4" : "";
            $senderShift = ($from_branch == 1) ? "pl-4" : $senderShift; ?>
            <!-- <pre><?php //print_r($message); ?></pre> -->
            <div class="mb-3 <?= $senderShift; ?>" id="<?= $message['pdccmc_id']; ?>">
                <div class="main-card mb-2 bg-light">
                    <?php
                        if ((int)$message['pdcbm_from_branch'] === 1) {
                            update_seen($ccApi, $message['pdcbm_id'], $message['pdcbm_client_id'], $user_id);
                        }
                        if ($from_branch !== 1) {
                            if ($sender_id === (int)$user_id) {
                                echo delete_btn_alt($message['pdcbm_id'], $message['pdcbm_client_id'], $user_id, "btn btn-sm bg-love-kiss text-white font-weight-bold");
                            }
                        }
                    ?>
                    <div class="card-header-tab card-header-tab-animation card-header h-25 bg-light p-1">
                        <div class="card-header-title" style="white-space: normal">
                            <?php
                                if ((int)$from_branch === 1) { ?>
                                    <h5 class="mail-sender--abbr my-1 mr-2">
                                        <?php 
                                            $clientName = $ccApi->user_info($type = "client", $message['pdcbm_client_id'], $all="one_client", $id=$message['pdcbm_client_id'],
                                                function ($info) { return isset($info['pdc_name'])? $info['pdc_name']: "--";
                                            }, $debug = false);
                                            $clientName = explode(" ", $clientName);
                                            echo $clientNameShort = @$clientName[0][0].end($clientName)[0];
                                        ?>
                                    </h5>
                                <?php } else { 
                                    $is_admin = @$message['pdcbm_is_admin'];
                                    $sender_id = @$message['pdcbm_by'];
                                    if ((int)$is_admin === 1) {
                                        $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                                            function ($info) { return @$info[0];
                                        }); 
                                        // print_r($sender_info);
                                        $ext = (!empty($sender_info)) ? "files/clients/profile-picture/".$sender_info['pdcu_profile_picture'] :
                                            "files/admin/logo.png"; ?>
                                        <img width="50" height="50" class="rounded-circle shadow shadow-sm my-1 mr-2" alt="Admin Image"
                                            src="<?= FILE_BUCKET_BASE_URL.$ext; ?>" >
                                    <?php } else {
                                        $member = $ccApi->user_info($type = "member", $account_id, $all="one_member", $id=$sender_id, function ($members) {
                                            return $members;
                                        }, $debug = 0); ?>
                                        <img width="50" height="50" class="rounded-circle my-1 mr-2 shadow shadow-sm" alt="Member Image"
                                            src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                                    <?php } ?>
                                <?php }
                            ?>
                            <span><?= $message['pdcbm_subject']; ?></span>
                        </div>
                        <span class="badge p-1 mx-3 small badge-info shadow shadow-sm">
                            <?= (strtolower($message['message_type']['pdccmc_type']) === "e-mail" )? "Webmail": $message['message_type']['pdccmc_type']; ?>
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
                                <audio src="<?= FILE_BUCKET_BASE_URL; ?>files/<?= $message['pdcbm_attachments']; ?>" 
                                    controls="" class="mfp-img-mobile mfp-fade container" 
                                    style="background-image: linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px"></audio>
                            <?php }
                        ?>
                        <p class="p-0 m-0"><?= multilineText($message['pdcbm_messages']); ?></p>
                    </div>
                    <div class="card-footer bg-light">
                        <small class="btn-actions-pane-right font-weight-bold">
                            <?php
                                $date = $message['pdcbm_date'];
                                echo date("m/d/Y @ H:i A", strtotime($date));
                            ?>
                        </small>
                    </div>
                </div>
            </div>
        <?php }
    ?>
</div>
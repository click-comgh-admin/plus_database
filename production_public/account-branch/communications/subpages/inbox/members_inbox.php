<?php
    $get_string = "client-membership/branch/communications/from_branch?account_id=$account_id&user_id=$user_id";
    $messages = $ccApi->fetch_from($get_string=$get_string, function($_messages)
    {
        $messages = [];
        foreach ($_messages as $key => $_message) { 
            if ($key === "inbox_msg_count") {
                break;
            };
            $from_branch = (int)$_message['pdcbm_from_branch'];
            if ($from_branch !== 1) {
                if (!in_array($_message, $messages)) {
                    array_push($messages, $_message);
                }
            }
        }
        return $messages;
    }, $debug = false);

    // print_r($messages);
?>

<ul class="list-group list-group-flush" email-tabs="container-list">
    <?php
        if (empty($messages)) { ?>
            <a class="list-group-item" email-tabs="container-list--item" href="#">
                <div email-tabs="container-list--item---content">
                    <h4 email-tabs="container-list--item---content----client_abbr" class="shadow shadow-sm"> -- </h4>
                    <div email-tabs="container-list--item---content----text">
                        <h6>
                            ...
                            <span class="badge p-1 mx-3 small badge-info shadow">?</span>
                        </h6>
                        <h6 class="small">No Message(s)</h6>
                    </div>
                </div>
                <div email-tabs="container-list--item---others">
                    <div email-tabs="container-list--item---others----date">
                        <?= date("H:i"); ?>
                    </div>
                </div>
            </a> 
        <?php }
        foreach ($messages as $key => $message) { 
            $from_branch = (int)$message['pdcbm_from_branch'];
            $has_attachment = (empty($message['attached']) || empty(@$message['attached'][0])) ? false : true;
            if ($from_branch !== 1) {
                $is_admin = @$message['pdcbm_is_admin'];
                $sender_id = @$message['pdcbm_by'];
                $__url___ = ($message['pdcbm_thread_id'] == 0) ? $message['pdcbm_id']: $message['pdcbm_thread_id']."#".$message['pdcbm_id']; ?>
                <a class="list-group-item" email-tabs="container-list--item" href="<?= Current_BaseUrl; ?>/branch-messages?show=<?= $__url___; ?>">
                    <?php
                        $accountName = $account_info['pdc_name'];
                        $accountName = explode(" ", $accountName);
                    ?>
                    <div email-tabs="container-list--item---content">
                        <?php
                            if ((int)$is_admin === 1) {
                                $sender_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                                    function ($info) { return @$info[0];
                                }); 
                                // print_r($sender_info);
                                $ext = (!empty($sender_info)) ? "files/clients/profile-picture/".$sender_info['pdcu_profile_picture'] :
                                    "files/admin/logo.png"; ?>
                                <img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Admin Image"
                                    src="<?= FILE_BUCKET_BASE_URL.$ext; ?>" >
                            <?php } else {
                                $member = $ccApi->user_info($type = "member", $account_id, $all="one_member", $id=$sender_id, function ($members) {
                                    return $members;
                                }, $debug = 0); ?>
                                <img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Member Image"
                                    src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                            <?php }
                        ?>
                        <div email-tabs="container-list--item---content----text">
                            <h6>
                                <?= $message['pdcbm_subject']; ?>
                                <span class="badge p-1 mx-3 small badge-info shadow">
                                    <?= (strtolower($message['message_type']['pdccmc_type']) === "e-mail" )? "Webmail": $message['message_type']['pdccmc_type']; ?>
                                </span>
                            </h6>
                            <h6 class="small"><?= (strlen(html_str_decode($message['pdcbm_messages'], true)) > 70)
                                ? substr(html_str_decode($message['pdcbm_messages'], true), 0, 70)."..."
                                : html_str_decode($message['pdcbm_messages'], true); ?>
                            </h6>
                        </div>
                        <?php 
                            if ($has_attachment) { ?>
                                <div email-tabs="container-list--item---content----attach">
                                    <span class="pe-7s-link"></span>
                                </div>
                            <?php }
                        ?>
                    </div>
                    <div email-tabs="container-list--item---others">
                        <div email-tabs="container-list--item---others----date">
                            <?php
                                $date = $message['pdcbm_date'];                        
                                $date_time_display = (date("Y/m/d", strtotime($date)) == date("Y/m/d")) ? date("H:i", strtotime($date)): date("m/d", strtotime($date));
                                $date_time_display = (date("Y", strtotime($date)) == date("Y")) ? $date_time_display: date("m/d/Y", strtotime($date));                            
                            ?>
                            <?= $date_time_display; ?>
                        </div>
                    </div>
                </a> <?php
            }
        }
    ?>
</ul>
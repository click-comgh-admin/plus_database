<?php
    $get_string = "mailer/members/contact_mail?account_id=$account_id";
    $messages = $ccApi->communications($type="clients", $get_string, function($messages)
    {
        return $messages;
    }, $debug = false);
    // print_r($messages);
?>

<ul class="list-group list-group-flush" email-tabs="container-list">
    <?php
        foreach ($messages as $key => $message) { 
            $sender_id = @$message['parties'][0]['pdccmc_sender_id'];
            if ((int)@$message['parties'][0]['pdccmc_sender'] == 2) {
                $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$sender_id, function ($members) {
                    return $members;
                }, $debug = 0);

                $has_attachment = (empty($message['attached']) || empty(@$message['attached'][0])) ? false : true; ?>
                <!-- <pre><?php //print_r($message); ?></pre> -->
                <a class="list-group-item" email-tabs="container-list--item" href="members?show=<?= $message['pdccmc_id']; ?>">
                    <div email-tabs="container-list--item---content">
                        <img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"
                            src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                        <div email-tabs="container-list--item---content----text">
                            <h6>
                                <?= $message['pdccmc_subject']; ?>
                                <span class="badge p-1 mx-3 small badge-info shadow">
                                    <?= $message['message_type']['pdccmc_type']; ?>
                                </span>
                            </h6>
                            <h6 class="small"><?= (strlen($message['pdccmc_message']) > 70)
                                ? substr($message['pdccmc_message'], 0, 70)."..."
                                : $message['pdccmc_message']; ?></h6>
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
                                $date = $message['pdccmc_date'];
                                $date_time_display = (date("Y", strtotime($date)) == date("Y"))
                                    ? (date("Y/m/d", strtotime($date)) == date("Y/m/d"))
                                        ? date("H:i", strtotime($date))
                                        : date("m/d", strtotime($date))
                                    : date("m/d/Y", strtotime($date));
                            ?>
                            <?= $date_time_display; ?>
                        </div>
                        <?php /*<div email-tabs="container-list--item---others----select">
                            <div class="custom-checkbox custom-control">
                                <input class="custom-control-input" type="checkbox" name="message_id[]" id="mess_sel_<?= $message['pdccmc_id']; ?>" value="<?= $message['pdccmc_id']; ?>" />
                                <label class="custom-control-label" for="mess_sel_<?= $message['pdccmc_id']; ?>"> </label>
                            </div>	
                        </div>*/ ?>
                    </div>
                </a>
            <?php }
        }
    ?>
</ul>
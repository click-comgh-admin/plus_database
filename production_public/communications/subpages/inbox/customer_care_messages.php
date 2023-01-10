<?php
    $get_string = "mailer/customer-care/contact_mail_messages?account_id=$account_id&user_id=$user_id";
    $messages = $ccApi->communications($type="clients", $get_string, function($messages)
    {
        return $messages;
    }, $debug = false);

    // print_r($messages);
?>

<ul class="list-group list-group-flush" email-tabs="container-list">
    <?php
        foreach ($messages as $key => $message) { 
            $sender_id = (int)@$message['parties'][0]['pdccmc_sender_id'];
            
            $other_info = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$sender_id,
                function ($info) { return @$info[0];
            });

            $has_attachment = (empty($message['attached']) || empty(@$message['attached'][0])) ? false : true; ?>
            <!-- <pre><?php //print_r($message); ?></pre> -->
            <a class="list-group-item" email-tabs="container-list--item" href="customer-care?show-messages=<?= $message['pdccmc_id']; ?>#<?= $message['pdccmc_id']; ?>">
                <div email-tabs="container-list--item---content">
                    <img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"
                        src="<?= FILE_BUCKET_BASE_URL; ?>files/admin/logo.png">
                    <div email-tabs="container-list--item---content----text">
                        <h6> <?= $message['pdccmc_subject']; ?> </h6>
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
    ?>
</ul>
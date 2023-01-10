<?php
    $get_string = "mailer/members/contact_mail?account_id=$account_id";
    $messages = $ccApi->communications($type="clients", $get_string, function($messages)
    {
        return $messages;
    }, $debug = false);

    // print_r($messages);
?>

<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">
    <?php
        foreach ($messages as $key => $message) { 
            $sender_id = @$message['parties'][0]['pdccmc_sender_id'];
            if ((@$sender_id == $account_id) && ((int)@$message['parties'][0]['pdccmc_sender'] == 1)) {
                $has_attachment = (empty($message['attached']) || empty(@$message['attached'][0])) ? false : true; ?>
                <!-- <pre><?php //print_r($message); ?></pre> -->
                <a class="list-group-item" email-tabs="container-list--item" href="members?show=<?= $message['pdccmc_id']; ?>">
                    <div email-tabs="container-list--item---content">
                        <h4 email-tabs="container-list--item---content----client_abbr" class="shadow shadow-sm">
                            <?= @explode(" ", $account_info['pdc_name'])[0][0].@explode(" ", $account_info['pdc_name'])[1][0]; ?>
                        </h4>
                        <div email-tabs="container-list--item---content----text">
                            <h6>
                                <?= $message['pdccmc_subject']; ?>
                                <span class="badge p-1 mx-3 small badge-info shadow">
                                    <?= $message['message_type']['pdccmc_type']; ?>
                                </span>
                            </h6>
                            <h6 class="small"><?= (strlen(html_str_decode($message['pdccmc_message'], true)) > 70)
                                ? substr(html_str_decode($message['pdccmc_message'], true), 0, 70)."..."
                                : html_str_decode($message['pdccmc_message'], true); ?></h6>
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
                        <div email-tabs="container-list--item---others----select">
                            <div class="custom-checkbox custom-control">
                                <input class="custom-control-input" type="checkbox" name="message_id[]" id="mess_sel_<?= $message['pdccmc_id']; ?>" value="<?= $message['pdccmc_id']; ?>" />
                                <label class="custom-control-label" for="mess_sel_<?= $message['pdccmc_id']; ?>"> </label>
                            </div>	
                        </div>
                    </div>
                </a>
            <?php }
        }
    ?>
    <!-- <a class="list-group-item" email-tabs="container-list--item" href="javascript:void(0);">
        <div email-tabs="container-list--item---content">
            <img width="50" height="50" class="rounded-circle" alt="Contact Image"
                src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/profile.png">
            <div email-tabs="container-list--item---content----text">
                <h6>Dapibus ac facilisis in</h6>
                <h6 class="small">Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in</h6>
            </div>
        </div>
        <div email-tabs="container-list--item---others">
            <div email-tabs="container-list--item---others----date">
                <?= date("Y-m-d"); ?>
            </div>
            <div email-tabs="container-list--item---others----select">
                <input type="checkbox" />
            </div>
        </div>
    </a>
    <a class="list-group-item seen" email-tabs="container-list--item" href="javascript:void(0);">
        <div email-tabs="container-list--item---content">
            <img width="50" height="50" class="rounded-circle" alt="Contact Image"
                src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/profile.png">
            <div email-tabs="container-list--item---content----text">
                <h6>Morbi leo risus</h6>
                <h6 class="small">Morbi leo risus Morbi leo risus Morbi leo risus Morbi leo risus Morbi leo risus</h6>
            </div>
        </div>
        <div email-tabs="container-list--item---others">
            <div email-tabs="container-list--item---others----date">
                <?= date("Y-m-d"); ?>
            </div>
            <div email-tabs="container-list--item---others----select">
                <input type="checkbox" />
            </div>
        </div>
    </a>
    <a class="list-group-item" email-tabs="container-list--item" href="javascript:void(0);">
        <div email-tabs="container-list--item---content">
            <img width="50" height="50" class="rounded-circle" alt="Contact Image"
                src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/profile.png">
            <div email-tabs="container-list--item---content----text">
                <h6>Porta ac consectetur ac</h6>
                <h6 class="small">Porta ac consectetur ac Porta ac consectetur ac Porta ac consectetur ac Porta ac consectetur ac Porta ac consectetur ac</h6>
            </div>
        </div>
        <div email-tabs="container-list--item---others">
            <div email-tabs="container-list--item---others----date">
                <?= date("Y-m-d"); ?>
            </div>
            <div email-tabs="container-list--item---others----select">
                <input type="checkbox" />
            </div>
        </div>
    </a>
    <a class="list-group-item seen" email-tabs="container-list--item" href="javascript:void(0);">
        <div email-tabs="container-list--item---content">
            <img width="50" height="50" class="rounded-circle" alt="Contact Image"
                src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/profile.png">
            <div email-tabs="container-list--item---content----text">
                <h6>Vestibulum at eros</h6>
                <h6 class="small">Vestibulum at eros Vestibulum at eros Vestibulum at eros Vestibulum at eros Vestibulum at eros Vestibulum at eros</h6>
            </div>
        </div>
        <div email-tabs="container-list--item---others">
            <div email-tabs="container-list--item---others----date">
                <?= date("Y-m-d"); ?>
            </div>
            <div email-tabs="container-list--item---others----select">
                <input type="checkbox" />
            </div>
        </div>
    </a> -->
</ul>
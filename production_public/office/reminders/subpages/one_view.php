
<?php
    use Encryptor\Encryptor;
    $memberEncryptor = new Encryptor("members", md5("members"));
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Reminders</h5>
                <div class="table-responsive border border-warning"><?php //print_r($reminder); ?>
                    <table class="mb-0 table table-striped table-hover" pagin_table="office_reminders_one" pt_c_cid="<?= AccountInfoId; ?>" 
                        pt_c_reminder_id="<?= (int)$reminder['pdor_reminder']; ?>">
                        <thead class=" bg-sunny-morning text-white">
                            <tr>
                                <th style="white-space: nowrap;">Reminder Details</th>
                                <th style="white-space: nowrap;">Contact Details</th>
                                <th style="white-space: nowrap;">Reminder Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th  style="white-space: nowrap;">Date: <?= isset($reminder['pdor_date'])? date("Y-m-d", strtotime($reminder['pdor_date'])): "--"; ?></th>
                                <td  style="white-space: nowrap;">
                                    <?php
                                        function getHosts($data, $memberEncryptor, $ccApi)
                                        {
                                            $host = $data['pdor_members'];
                                            $hosts = explode(",", $host);
                                            $host_others = rtrim($data['pdor_other_contacts'], ",");
                                            $host_others = explode(",", $host_others);
                                            
                                            $_hosts = $hosts;
                                            $hosts = "";
                                            foreach ($_hosts as $key => $host) {
                                                $keyId = (int)$key + 1;
                                                $member = $ccApi->user_info($type = "member", AccountInfoId, $all="one_client_member", $id=$host, function ($members) {
                                                    return $members;
                                                }, $debug = false); 
                                                if (isset($member['pdm_id'])) {
                                                    $memberId = $memberEncryptor->encrypt($member['pdm_id']);
                                                    $name = $member['pdm_firstname'] . " " . $member['pdm_surname'];
                                                    $contact = $member['pdm_phone'];
                                                    $email = $member['pdm_email'];
                                                    $url = ClientBaseUrl."members?show-member&member=$memberId";
                                                    $hosts .= "
                                                        <tr>
                                                            <th class=\"pl-3\">$keyId</th>
                                                            <td><a href=\"$url\" type=\"button\" target=\"_blank\">$name</a></td>
                                                            <td>
                                                                <span class=\"font-weight-bold\">Phone: </span><a href=\"tel:$contact\">$contact</a>,<hr class=\"my-1 bg-light\">
                                                                <span class=\"font-weight-bold\">E-mail: </span><a href=\"mailto:$email\">$email</a>,
                                                            </td>
                                                        </tr>
                                                    ";
                                                }            
                                            }

                                            $_host_others = $host_others;
                                            $host_others = "";
                                            foreach ($_host_others as $key => $host) {
                                                $id = (int)$key + 1;
                                                if (!empty($host)) {
                                                    $get_string = "one_contact?account_id=".AccountInfoId."&contact=".$host;
                                                    $contact = $ccApi->communications($type="clients", $get_string, function($contact)
                                                    {
                                                        return $contact;
                                                    }, $debug = false);
                                                    if (isset($contact[0])) {
                                                        $contact = $contact[0];
                                                        $contactId = $contact['pdccc_id'];
                                                        $code = $contact['pdccc_code'];
                                                        $name = $contact['pdccc_name'];
                                                        $phone = $contact['pdccc_contact'];
                                                        $url = ClientBaseUrl."communication?contacts&contact=$code";
                                                        $host_others .= "
                                                            <tr>
                                                                <th class=\"pl-3\">$id</th>
                                                                <td><a href=\"$url\" type=\"button\" target=\"_blank\">$name</a></td>
                                                                <td>
                                                                    <a href=\"tel:$phone\">$phone</a>
                                                                </td>
                                                            </tr>
                                                        ";
                                                    }   
                                                }
                                                        
                                            }
                                            
                                            $groupName = $ccApi->groups($all="one", AccountInfoId, $id=(isset($data['pdor_group'])? $data['pdor_group']: 0), function($groups)
                                            {
                                                return isset($groups[0]['pdmg_group'])? $groups[0]['pdmg_group']: "???";
                                            });

                                            $title = ((int)AccountInfoType ===  10) ? "Department": "Group";
                                            return "
                                                <div class=\"card shadow shadow-lg mb-2\">
                                                    <div class=\"card-header py-2\"><h5 class=\"card-title mb-0\">$title</h5></div>
                                                    <div class=\"card-body py-2 table-responsive\">$groupName</div>
                                                    <div class=\"card-footer py-2\">-</div>
                                                </div>
                                                <div class=\"card shadow shadow-lg mb-2\">
                                                    <div class=\"card-header\"><h5 class=\"card-title\">Host(s)</h5></div>
                                                    <div class=\"card-body table-responsive p-0 m-0\">
                                                        <table class=\"table table-hover table-striped table-sm m-0\">
                                                            <thead>
                                                                <tr>
                                                                    <th class=\"pl-3\">No#</th>
                                                                    <th>Name</th>
                                                                    <th>Contact</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                $hosts
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class=\"card-footer\">-</div>
                                                </div>
                                                <div class=\"card shadow shadow-lg\">
                                                    <div class=\"card-header\"><h5 class=\"card-title\">Ohters</h5></div>
                                                    <div class=\"card-body table-responsive p-0 m-0\">
                                                        <table class=\"table table-hover table-striped table-sm m-0\">
                                                            <thead>
                                                                <tr>
                                                                    <th class=\"pl-3\">No#</th>
                                                                    <th>Name</th>
                                                                    <th>phone</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                $host_others
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class=\"card-footer\">-</div>
                                                </div>
                                            ";
                                        }
                                        $getHosts = getHosts($reminder, $memberEncryptor, $ccApi);
                                    ?>
                                    <button class="btn btn-sm m-1 btn-primary shadow btn-block w-75" type="button" data-toggle="modal"
                                        open-modal--id="view_reminder-hosts" open-modal--type="modal-lg"
                                        open-modal--title="View Host(s)" open-modal--html='<?= $getHosts; ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                        <span class="d-sm-block">View Contact(s)</span>
                                    </button>
                                </td>
                                <td  style="white-space: nowrap;">
                                    Status: 
                                    <?php 
                                        $get_string = "office/reminders/reminder_status?id=".(isset($reminder['pdor_reminder_status'])? $reminder['pdor_reminder_status']: 0);
                                        echo $ccApi->fetch_from($get_string=$get_string, function($status) {
                                            return isset($status[0])? $status[0]['pdd_info']: "-";
                                        });
                                    ?>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">Time: <?= isset($reminder['pdor_time'])? date("H:i A", strtotime($reminder['pdor_time'])): " : "; ?></th>
                                <td  style="white-space: nowrap;">
                                    <?= ((int)AccountInfoType === 10) ? "Department": "Group"; ?>: 
                                    <?= $ccApi->groups($all="one", $account_id, $id=(isset($reminder['pdor_group'])? $reminder['pdor_group']: 0), function($groups)
                                        {
                                            return isset($groups[0]['pdmg_group'])? $groups[0]['pdmg_group']: "-";
                                        }
                                    ); ?>
                                </td>
                                <td  style="white-space: nowrap;">
                                    <?php
                                        $reminder_id = isset($reminder['pdor_id'])? $reminder['pdor_id']: 0;
                                        $postData = json_encode(["reminder_id"=>$reminder_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]);
                                        $url = API_BASE_URL."office/reminders/cancel-reminder";
                                        echo "
                                            <button type=\"button\" class=\"btn btn-sm m-1 btn-warning shadow w-100\"
                                                btn-submit-post=$postData
                                                btn-submit-post--confirm=\"Cancel Reminder Entry?\"
                                                btn-submit-post--url=\"$url\">
                                                <span class=\"pe-7s-expand1\"> Cancel Reminder</span>
                                            </button>
                                        "; 
                                    ?>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">
                                    Subject: <span class="text-capitalize"><?= isset($reminder['pdor_subject'])? $reminder['pdor_subject']: ""; ?></span>
                                </th>
                                <td  style="white-space: nowrap;">
                                    Last Edited: <?= isset($reminder['pdor_update_date'])? date("Y-m-d @ H:i A", strtotime($reminder['pdor_update_date'])): "-- @ : "; ?><br class="m-0 p-0">
                                    By: <?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", 
                                        $id=(isset($reminder['pdor_update_by'])? $reminder['pdor_update_by']: 0), function ($info)
                                        {
                                            if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                return "Unknown??";
                                            } else {
                                                return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'] . ", / <span class='p-2 shadow shadow-lg'>Phone: <a class='p-2' href='tel:".$info[0]['pdcu_phone']."'>".$info[0]['pdcu_phone']."</a></span>";
                                            }
                                        }); 
                                    ?>
                                </td>
                                <td  style="white-space: nowrap;">
                                    <?php 
                                        $reminder_id = isset($reminder['pdor_id'])? $reminder['pdor_id']: 0;
                                        $get_string = "office/reminders/message?reminder_id=".(int)$reminder_id."&client_id=".AccountInfoId;
                                        $notifications = $ccApi->fetch_from($get_string=$get_string, function($notifications) {
                                            return $notifications;
                                        }, $debug = false);
                                        $getNotifications = (empty($notifications)) ? false: getNotifications($reminder, $ccApi);
                                        function getNotifications($data, $ccApi)
                                        {
                                            $reminder_id = $data['pdor_id'];
                                            
                                            $get_string = "office/reminders/message?reminder_id=".(int)$reminder_id."&client_id=".AccountInfoId;
                                            $notifications = $ccApi->fetch_from($get_string=$get_string, function($notifications) {
                                                return $notifications;
                                            }, $debug = false);

                                            $_notifications = $notifications;
                                            $notifications = "";
                                            foreach ($_notifications as $key => $notification) {
                                                $id = (int)$key + 1;
                                                $medium_id = (int)$notification['pdors_medium_id'];
                                                $subject = $notification['pdors_subject'];
                                                $alertId = $notification['pdors_sms_id'];
                                                $sms_intro = ($medium_id === 1)? str_replace("'", "&#39;", multilineText($notification['pdors_sms_intro'])): "";
                                                $sms_intro = (empty($sms_intro))? "": "<small class=\"card-subtitle small fa\"><b>SMS INTRO: </b>$sms_intro</small>";
                                                $message = str_replace("'", "&#39;", multilineText($notification['pdors_messages']));
                                                
                                                $date = date('Y-m-d @ H:i A', strtotime($notification['pdors_date']));
                                                $sender = $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=(isset($notification['pdors_by'])? $notification['pdors_by']: 0), function ($info)
                                                {
                                                    if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                        return "Unknown??";
                                                    } else {
                                                        return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                                    }
                                                }); 
                                                // $getAttachmentsBtn = getAttachmentsBtn($notification, $db);
                                                // $hasAttachment = $notification['pdors_attachments'];
                                                // $getAttachmentsBtn = ($hasAttachment === "") ? "": getAttachmentsBtn($notification, $db);
                                                $notifications .= "
                                                    <div class=\"card mb-3 shadow shadow-lg\">
                                                        <div class=\"card-header d-block py-2\">
                                                            <h5 class=\"card-title mb-1\"><b>Subject: </b>$subject</h5> $sms_intro
                                                            <i class=\"card-subtitle small fa\"><b>Alert ID: </b>$alertId</i>
                                                        </div>
                                                        <div class=\"card-body\">$message</div>
                                                        <div class=\"card-footer d-block py-2\">
                                                            <h5 class=\"card-title mb-1\"><b>Sent: </b>$date</h5>
                                                            <small class=\"card-subtitle small fa\"><b>Sent By: </b>$sender</small>
                                                        </div>
                                                    </div>
                                                ";
                                            }
                                            return "
                                                $notifications
                                            ";
                                        }
                                    ?>
                                    <?php if ((bool)$getNotifications !== false) { ?>
                                        <button class="btn btn-sm m-1 btn-outline-warning shadow btn-block" type="button" data-toggle="modal"
                                            open-modal--id="view_reminder-notifications" open-modal--type="modal-lg"
                                            open-modal--title="View Notification(s)" open-modal--html='<?= $getNotifications; ?>' open-modal--buttons='
                                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                            <span class="d-sm-block">Notification(s)</span>
                                        </button>
                                    <?php } ?>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">
                                    Medium:
                                    <?php 
                                        $reminder_medium = (isset($reminder['pdor_medium'])? $reminder['pdor_medium']: 0);
                                        $get_string = "office/reminders/reminder_medium?id=".$reminder_medium;
                                        $reminder_medium = $ccApi->fetch_from($get_string=$get_string, function($status) {
                                            return isset($status[0])? $status[0]['pdorm_medium']: "-";
                                        });
                                    ?>
                                    <span class="text-capitalize"><?= $reminder_medium; ?></span>
                                </th>
                                <td  style="white-space: nowrap;">
                                    Entry Date: <?= isset($reminder['pdor_creation_date'])? date("Y-m-d @ H:i A", strtotime($reminder['pdor_creation_date'])): "-- @ : "; ?><br class="m-0 p-0">
                                    By: <?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", 
                                        $id=(isset($reminder['pdor_created_by'])? $reminder['pdor_created_by']: 0), function ($info)
                                        {
                                            if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                return "Unknown??";
                                            } else {
                                                return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'] . ", / <span class='p-2 shadow shadow-lg'>Phone: <a class='p-2' href='tel:".$info[0]['pdcu_phone']."'>".$info[0]['pdcu_phone']."</a></span>";
                                            }
                                        }); 
                                    ?>
                                </td>
                                <td class="d-flex">
                                    <?php
                                        $reminder_id = isset($reminder['pdor_id'])? $reminder['pdor_id']: 0;
                                        $url = CLIENT_BASE_URL."office/reminders/update-reminder?reminder=$reminder_id";
                                        echo "
                                            <a href=\"$url\" target=\"_blank\" class=\"btn btn-sm m-1 btn-warning shadow w-100\" type=\"button\">
                                                <span class=\"pe-7s-edit\"> Update</span>                
                                            </a>
                                        ";

                                        $postData = json_encode(["reminder_id"=>$reminder_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]);
                                        $url = API_BASE_URL."office/reminders/delete-reminder";
                                        echo "
                                            <button type=\"button\" class=\"btn btn-sm m-1 btn-danger shadow w-100\"
                                                btn-submit-post=$postData
                                                btn-submit-post--confirm=\"Delete Reminder Entry?\"
                                                btn-submit-post--url=\"$url\">
                                                <span class=\"pe-7s-trash\"> Delete</span>
                                            </button>
                                        ";
                                    ?>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
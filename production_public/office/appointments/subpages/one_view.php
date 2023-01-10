
<?php
    use Encryptor\Encryptor;
    $memberEncryptor = new Encryptor("members", md5("members"));
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Appointments</h5>
                <div class="table-responsive border border-warning"><?php //print_r($appointment); ?>
                    <table class="mb-0 table table-striped table-hover" pagin_table="office_appointments_one" pt_c_cid="<?= AccountInfoId; ?>" 
                        pt_c_appointment_id="<?= (int)$appointment['pdoa_appointment']; ?>">
                        <thead class=" bg-sunny-morning text-white">
                            <tr>
                                <th style="white-space: nowrap;">Appointment Booker</th>
                                <th style="white-space: nowrap;">Appointment Host Details</th>
                                <th style="white-space: nowrap;">Appointment Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th  style="white-space: nowrap;">Name: <span class="text-capitalize"><?= isset($appointment['pdoa_name'])? $appointment['pdoa_name']: ""; ?></span></th>
                                <td  style="white-space: nowrap;">
                                    <?php
                                        function getHosts($data, $memberEncryptor, $ccApi)
                                        {
                                            $host = $data['pdoa_host'];
                                            $hosts = explode(",", $host);
                                            $host_others = rtrim($data['pdoa_host_others'], ",");
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
                                            
                                            $groupName = $ccApi->groups($all="one", AccountInfoId, $id=(isset($data['pdoa_host_group'])? $data['pdoa_host_group']: 0), function($groups)
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
                                        $getHosts = getHosts($appointment, $memberEncryptor, $ccApi);
                                    ?>
                                    <button class="btn btn-sm m-1 btn-primary shadow btn-block w-75" type="button" data-toggle="modal"
                                        open-modal--id="view_appointment-hosts" open-modal--type="modal-lg"
                                        open-modal--title="View Host(s)" open-modal--html='<?= $getHosts; ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                        <span class="d-sm-block">View Host(s)</span>
                                    </button>
                                </td>
                                <td  style="white-space: nowrap;">
                                    Status: 
                                    <?php 
                                        $get_string = "office/appointments/appointment_status?id=".(isset($appointment['pdoa_appointment_status'])? $appointment['pdoa_appointment_status']: 0);
                                        echo $ccApi->fetch_from($get_string=$get_string, function($status) {
                                            return isset($status[0])? $status[0]['pdd_info']: "-";
                                        });
                                    ?>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">
                                    Phone: <a href="tel:<?= isset($appointment['pdoa_contact'])? $appointment['pdoa_contact']: ""; ?>">
                                    <?= isset($appointment['pdoa_contact'])? $appointment['pdoa_contact']: ""; ?></a>
                                </th>
                                <td  style="white-space: nowrap;">
                                    <?= ((int)AccountInfoType === 10) ? "Department": "Group"; ?>: 
                                    <?= $ccApi->groups($all="one", $account_id, $id=(isset($appointment['pdoa_host_group'])? $appointment['pdoa_host_group']: 0), function($groups)
                                        {
                                            return isset($groups[0]['pdmg_group'])? $groups[0]['pdmg_group']: "-";
                                        }
                                    ); ?>
                                </td>
                                <td  style="white-space: nowrap;">
                                    <?php
                                        $agenda = str_replace("'", "&#39;", multilineText(isset($appointment['pdoa_meeting_agenda'])? $appointment['pdoa_meeting_agenda']: ""));
                                        $getAgenda = "
                                            <div class=\"card mb-3 shadow shadow-lg\">
                                                <div class=\"card-header d-block py-2\">
                                                    <h5 class=\"card-title mb-1\">Meeting Agenda</h5>
                                                </div>
                                                <div class=\"card-body\">$agenda</div>
                                                <div class=\"card-footer d-block py-2\">
                                                    <h5 class=\"card-title mb-1\">---</h5>
                                                </div>
                                            </div>
                                        "; 
                                    ?>
                                    <button class="btn btn-sm m-1 btn-outline-primary shadow btn-block" type="button" data-toggle="modal"
                                        open-modal--id="view_appointment-agenda" open-modal--type="modal-md"
                                        open-modal--title="Appointment's Agenda" open-modal--html='<?= $getAgenda; ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                        <span class="d-sm-block">View Agenda</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">
                                    Organization: <span class="text-capitalize"><?= isset($appointment['pdoa_name_of_organiztion'])? $appointment['pdoa_name_of_organiztion']: ""; ?></span>
                                </th>
                                <td  style="white-space: nowrap;">
                                    Last Edited: <?= isset($appointment['pdoa_update_date'])? date("Y-m-d @ H:i A", strtotime($appointment['pdoa_update_date'])): "-- @ : "; ?><br class="m-0 p-0">
                                    By: <?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", 
                                        $id=(isset($appointment['pdoa_update_by'])? $appointment['pdoa_update_by']: 0), function ($info)
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
                                        function getAttachments($data, $ccApi)
                                        {
                                            $attachments = $data['pdoa_attachments'];
                                            $attachments = explode(",", $attachments);

                                            $urls = "";
                                            foreach ($attachments as $key => $attachment) {
                                                $id = (int)$key + 1;
                                                $get_string = "office/appointments/file?id=".(int)$attachment;
                                                $url = $ccApi->fetch_from($get_string=$get_string, function($file) {
                                                    return $file;
                                                }, $debug = false);
                                                if (isset($url[0])) {
                                                    $url = $url[0]['pdccmc_attachment'];
                                                    $url = FileBucketBaseUrl."files/".$url;
                                                    $name = explode("/", $url);
                                                    $name = end($name);
                                                    $file = "<li class=\"my-1\">
                                                        <a href=\"$url\" target=\"_blank\" class=\"btn btn-outline-info btn-block text-left text-uppercase\">Open File $id: $name</a>
                                                    </li>";
                                                    $urls .= $file;
                                                }
                                            }
                                            return "
                                                <ul>$urls</ul>
                                            ";
                                        }
                                        $getAttachments = getAttachments($appointment, $ccApi);
                                    ?>
                                    <button class="btn btn-sm m-1 btn-outline-success shadow btn-block" type="button" data-toggle="modal"
                                        open-modal--id="view_appointment-attachments"
                                        open-modal--title="View Attachment" open-modal--html='<?= $getAttachments; ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                        <span class="d-sm-block">Attachment(s)</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">Location: <span class="text-capitalize"><?= isset($appointment['pdoa_address'])? $appointment['pdoa_address']: ""; ?></span></th>
                                <td  style="white-space: nowrap;">
                                    Entry Date: <?= isset($appointment['pdoa_creation_date'])? date("Y-m-d @ H:i A", strtotime($appointment['pdoa_creation_date'])): "-- @ : "; ?><br class="m-0 p-0">
                                    By: <?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", 
                                        $id=(isset($appointment['pdoa_created_by'])? $appointment['pdoa_created_by']: 0), function ($info)
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
                                        $getNotifications = ((int)$appointment['pdoa_notification'] === 0) ? false: getNotifications($appointment, $ccApi);
                                        function getNotifications($data, $ccApi)
                                        {
                                            $appointment_id = $data['pdoa_id'];
                                            
                                            $get_string = "office/appointments/notification?appointment_id=".(int)$appointment_id."&client_id=".AccountInfoId;
                                            $notifications = $ccApi->fetch_from($get_string=$get_string, function($notifications) {
                                                return $notifications;
                                            }, $debug = false);

                                            $_notifications = $notifications;
                                            $notifications = "";
                                            foreach ($_notifications as $key => $notification) {
                                                $id = (int)$key + 1;
                                                $subject = $notification['pdoas_sms_subject'];
                                                $alertId = $notification['pdoas_sms_id'];
                                                $message = str_replace("'", "&#39;", multilineText($notification['pdoas_sms_messages']));
                                                $date = date('Y-m-d @ H:i A', strtotime($notification['pdoas_date']));
                                                $sender = $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=(isset($notification['pdoas_by'])? $notification['pdoas_by']: 0), function ($info)
                                                {
                                                    if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                        return "Unknown??";
                                                    } else {
                                                        return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                                    }
                                                }); 
                                                $notifications .= "
                                                    <div class=\"card mb-3 shadow shadow-lg\">
                                                        <div class=\"card-header d-block py-2\">
                                                            <h5 class=\"card-title mb-1\"><b>Subject: </b>$subject</h5>
                                                            <small class=\"card-subtitle small fa\"><b>Alert ID: </b>$alertId</small>
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
                                            open-modal--id="view_appointment-notifications" open-modal--type="modal-lg"
                                            open-modal--title="View Notification(s)" open-modal--html='<?= $getNotifications; ?>' open-modal--buttons='
                                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                            <span class="d-sm-block">Notification(s)</span>
                                        </button>
                                    <?php } ?>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;"></th>
                                <td  style="white-space: nowrap;"></td>
                                <td class="d-flex">
                                    <?php
                                        $appointment_id = isset($appointment['pdoa_id'])? $appointment['pdoa_id']: 0;
                                        $url = CLIENT_BASE_URL."office/appointments/update-appointment?appointment=$appointment_id";
                                        echo "
                                            <a href=\"$url\" target=\"_blank\" class=\"btn btn-sm m-1 btn-warning shadow w-100\" type=\"button\">
                                                <span class=\"pe-7s-edit\"> Update</span>                
                                            </a>
                                        ";

                                        $postData = json_encode(["appointment_id"=>$appointment_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]);
                                        $url = API_BASE_URL."office/appointments/delete-appointment";
                                        echo "
                                            <button type=\"button\" class=\"btn btn-sm m-1 btn-danger shadow w-100\"
                                                btn-submit-post=$postData
                                                btn-submit-post--confirm=\"Delete Appointment Entry?\"
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
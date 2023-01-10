
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Visitors</h5>
                <div class="table-responsive border border-warning"><?php //print_r($visitor); ?>
                    <table class="mb-0 table table-striped table-hover" pagin_table="office_visitors_one" pt_c_cid="<?= AccountInfoId; ?>" 
                        pt_c_visitor_id="<?= (int)$visitor['pdov_appointment']; ?>">
                        <thead class=" bg-sunny-morning text-white">
                            <tr>
                                <th style="white-space: nowrap;">Visitor’s Details</th>
                                <th style="white-space: nowrap;">Host Details</th>
                                <th style="white-space: nowrap;">Visit Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th  style="white-space: nowrap;">Name: <span class="text-capitalize"><?= isset($visitor['pdov_name'])? $visitor['pdov_name']: ""; ?></span></th>
                                <td  style="white-space: nowrap;">Name: <span class="text-capitalize"><?= isset($visitor['pdov_host'])? $visitor['pdov_host']: ""; ?></span></td>
                                <td  style="white-space: nowrap;">
                                    Action: 
                                    <?php 
                                        $visitor_action = (isset($visitor['pdov_visitor_action'])? $visitor['pdov_visitor_action']: 0);
                                        $get_string = "office/visitors/visitor_action?id=".$visitor_action;
                                        echo $ccApi->fetch_from($get_string=$get_string, function($status) {
                                            return isset($status[0])? $status[0]['pdd_info']: "-";
                                        });
                                    ?>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">
                                    Gender: <?= (isset($visitor['pdov_gender']) && (int)$visitor['pdov_gender'] === 1)? "Male": ""; ?>
                                    <?= (isset($visitor['pdov_gender']) && (int)$visitor['pdov_gender'] === 2)? "Female": ""; ?>
                                </th>
                                <td  style="white-space: nowrap;">
                                    <?= ((int)AccountInfoType === 10) ? "Department": "Group"; ?>: 
                                    <?= $ccApi->groups($all="one", $account_id, $id=(isset($visitor['pdov_host_group'])? $visitor['pdov_host_group']: 0), function($groups)
                                        {
                                            return isset($groups[0]['pdmg_group'])? $groups[0]['pdmg_group']: "-";
                                        }
                                    ); ?>
                                </td>
                                <td  style="white-space: nowrap;">
                                    <?php $reason_for_visit = str_replace("'", "&#39;", multilineText(isset($visitor['pdov_reason_for_visit'])? $visitor['pdov_reason_for_visit']: "")); ?>
                                    <button class="btn btn-sm m-1 btn-outline-danger shadow btn-block" type="button" data-toggle="modal"
                                        open-modal--id="view_visitor-reason_for_visit" open-modal--type="modal-lg"
                                        open-modal--title="View Reason For Visit" open-modal--html='<?= $reason_for_visit; ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                        <span class="d-sm-block">Reason For Visit</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">
                                    Phone: <a href="tel:<?= isset($visitor['pdov_contact'])? $visitor['pdov_contact']: ""; ?>">
                                    <?= isset($visitor['pdov_contact'])? $visitor['pdov_contact']: ""; ?></a>
                                </th>
                                <td  style="white-space: nowrap;">
                                    Status: 
                                    <?php 
                                        $get_string = "office/visitors/visit_status_client?client-id=".AccountInfoId."&id=".(isset($visitor['pdov_status_of_visit'])? $visitor['pdov_status_of_visit']: 0);
                                        echo $ccApi->fetch_from($get_string=$get_string, function($status) {
                                            return isset($status[0])? $status[0]['pdd_info']: "-";
                                        });
                                    ?>
                                </td>
                                <td  style="white-space: nowrap;">
                                    <?php
                                        if ((int)$visitor_action === 3) {
                                            $note = str_replace("'", "&#39;", multilineText(isset($visitor['pdov_note'])? $visitor['pdov_note']: ""));
                                            $getNote = "
                                                <div class=\"card mb-3 shadow shadow-lg\">
                                                    <div class=\"card-header d-block py-2\">
                                                        <h5 class=\"card-title mb-1\">Visitor Note</h5>
                                                    </div>
                                                    <div class=\"card-body\">$note</div>
                                                    <div class=\"card-footer d-block py-2\">
                                                        <h5 class=\"card-title mb-1\">---</h5>
                                                    </div>
                                                </div>
                                            "; ?>
                                            <button class="btn btn-sm m-1 btn-outline-primary shadow btn-block" type="button" data-toggle="modal"
                                                open-modal--id="view_visitor-note" open-modal--type="modal-lg"
                                                open-modal--title="Visitor's Note" open-modal--html='<?= $getNote; ?>' open-modal--buttons='
                                                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                                <span class="d-sm-block">View Note</span>
                                            </button>
                                        <?php } else if ((int)$visitor_action === 4) {
                                            $appointment = isset($visitor['pdov_appointment'])? $visitor['pdov_appointment']: "";
                                            $url = CLIENT_BASE_URL."office/appointments/appointment?appointment=$appointment"; ?>
                                            <a href="<?= $url; ?>" target="_blank" class="btn btn-sm m-1 btn-outline-primary btn-block shadow" type="button">
                                                <span class="d-sm-block"> View Appointment</span>                
                                            </a>
                                        <?php }
                                    ?>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">Location: <span class="text-capitalize"><?= isset($visitor['pdov_location'])? $visitor['pdov_location']: ""; ?></span></th>
                                <td  style="white-space: nowrap;">
                                    Last Edited: <?= isset($visitor['pdov_update_date'])? date("Y-m-d @ H:i A", strtotime($visitor['pdov_update_date'])): "-- @ : "; ?><br class="m-0 p-0">
                                    By: <?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", 
                                        $id=(isset($visitor['pdov_update_by'])? $visitor['pdov_update_by']: 0), function ($info)
                                        {
                                            if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                return "Unknown??";
                                            } else {
                                                return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                            }
                                        }); 
                                    ?>
                                </td>
                                <td  style="white-space: nowrap;">
                                    <?php
                                        function getAttachments($data, $ccApi)
                                        {
                                            $attachments = $data['pdov_attachments'];
                                            $attachments = explode(",", $attachments);

                                            $urls = "";
                                            foreach ($attachments as $key => $attachment) {
                                                $id = (int)$key + 1;
                                                $get_string = "office/visitors/file?id=".(int)$attachment;
                                                $url = $ccApi->fetch_from($get_string=$get_string, function($file) {
                                                    return $file;
                                                });
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
                                        $getAttachments = getAttachments($visitor, $ccApi);
                                    ?>
                                    <button class="btn btn-sm m-1 btn-outline-success shadow btn-block" type="button" data-toggle="modal"
                                        open-modal--id="view_visitor-attachments"
                                        open-modal--title="View Attachment" open-modal--html='<?= $getAttachments; ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                        <span class="d-sm-block">Attachment(s)</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th  style="white-space: nowrap;">Date: <?= isset($visitor['pdov_visit_date'])? date("Y-m-d", strtotime($visitor['pdov_visit_date'])): "-- @ : "; ?></th>
                                <td  style="white-space: nowrap;"></td>
                                <td class="d-flex">
                                    <?php
                                        $visitor_id = isset($visitor['pdov_id'])? $visitor['pdov_id']: 0;
                                        $url = CLIENT_BASE_URL."office/visitors/update-visitor?visitor=$visitor_id";
                                        echo "
                                            <a href=\"$url\" target=\"_blank\" class=\"btn btn-sm m-1 btn-warning shadow w-100\" type=\"button\">
                                                <span class=\"pe-7s-edit\"> Update</span>                
                                            </a>
                                        ";

                                        $postData = json_encode(["visitor_id"=>$visitor_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]);
                                        $url = API_BASE_URL."office/visitors/delete-visitor";
                                        echo "
                                            <button type=\"button\" class=\"btn btn-sm m-1 btn-danger shadow w-100\"
                                                btn-submit-post=$postData
                                                btn-submit-post--confirm=\"Delete Visitor Entry?\"
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
<?php
    $page = "user-devices";
    $page_url = Current_BaseUrl."$page";

    $get_string = "attendance/clocking/user-device-requests?account_id=".AccountInfoId."&member_id=".(int)$_GET['mid'];
    $user_devices = $ccApi->fetch_from($get_string = $get_string, function($user_devices) {
        return $user_devices;
    }, $debug = false);
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">User Device Request Logs</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped table-hover" pagin_table="random-access">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">#</th>
                                <th style="white-space: nowrap;">Phone Details</th>
                                <th style="white-space: nowrap;">Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                                foreach ($user_devices as $key => $user_device) { 
                                    $phoneType = $user_device['pdad_device_type']; 
                                    $phoneId = $user_device['pdad_device_id'];
                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($user_device['pdad_date'])));
                                    $badgeClass = ((int)$user_device['pdad_approved'] == 0)? "badge-dark": "badge-success";
                                    $badgeClass = ((int)$user_device['pdad_approved'] == 2)? "badge-warning": $badgeClass;
                                    
                                    $iconClass = ((int)$user_device['pdad_approved'] == 0)? "fa fa-remove": "pe-7s-check";
                                    $iconClass = ((int)$user_device['pdad_approved'] == 2)? "pe-7s-signal": $iconClass;
                                    
                                    $statusName = ((int)$user_device['pdad_approved'] == 0)? "Unapproved": "Approved";
                                    $statusName = ((int)$user_device['pdad_approved'] == 2)? "Canceled": $statusName; ?>
                                    <tr>
                                        <th style="white-space: nowrap;">
                                            <?= (int)$key + 1; ?> 
                                            <span class="badge <?= $badgeClass; ?> badge-circle">
                                                <i class="<?= $iconClass; ?>"></i>
                                            </span>
                                        </th>
                                        <td style="white-space: nowrap;">
                                            <div class="d-block m-1">
                                                <span class="shadow shadow-lg p-1 bg-white rounded text-dark d-inline-block">
                                                    <b>Phone Type</b>: <?= $phoneType; ?>
                                                    <span class="ml-2 badge <?= $badgeClass; ?> badge-circle">
                                                        <i><?= $statusName; ?></i>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="d-block m-1">
                                                <span class="shadow shadow-lg p-1 bg-white rounded text-dark d-inline-block">
                                                    <b>Phone ID</b>: <?= $phoneId; ?>
                                                </span>
                                            </div>
                                        </td>
                                        <td style="white-space: nowrap;">
                                            <?= date('Y/ m/ d', strtotime(@$user_device['pdad_date'])); ?>
                                            <hr class="m-0"/>
                                            <i><?= !empty($user_device) ? @$TimeAgo->get(): "-"; ?></i>
                                        </td>
                                    </tr>
                                <?php }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
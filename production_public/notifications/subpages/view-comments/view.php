<?php
require_once Current_BaseDir."subpages/view-comments/setup.php";

function getDateTimeAgo($date) {
    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($date)));
    $timeAgo = !empty($date) ? $TimeAgo->get(): "-";
    $date = date('Y-m-d @ H:i A', strtotime($date));
    return [
        "timeAgo"=>$timeAgo,
        "date"=>$date,
    ];
}

$getDateTimeAgo = getDateTimeAgo(date("Y-m-d"));
$date = $getDateTimeAgo['date'];
$timeAgo = $getDateTimeAgo['timeAgo'];

$addCommentUrl = ClientBaseUrl . "notifications/add-comment?notification={$notification_id}";
$viewsUrl = ClientBaseUrl . "notifications/notification-views?notification={$notification_id}";
require_once Current_BaseDir."subpages/view-comments/notification.php";

?>

<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Comments</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped table-hover" pagin_table="client-notifications-comments"
                        pt_c_acc_id="<?=AccountInfoId;?>" pt_c_page="<?=$page_url;?>"
                        pt_c_user_id="<?=$user_id;?>" pt_c_api="<?=API_BASE_URL;?>"
                        pt_c_file="<?=FILE_BUCKET_BASE_URL;?>" pt_c_notification_id="<?= $notification_id;?>">
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
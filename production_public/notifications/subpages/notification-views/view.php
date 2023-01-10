<?php
require_once Current_BaseDir."subpages/notification-views/setup.php";

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


$commentsUrl = ClientBaseUrl . "notifications/view-comments?notification={$notification_id}";
require_once Current_BaseDir."subpages/notification-views/notification.php";

?>

<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Views</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped table-hover" pagin_table="client-notifications-ncr_views"
                        pt_c_acc_id="<?= AccountInfoId; ?>" pt_c_page="<?= $page_url; ?>"
                        pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>"
                        pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>" pt_c_by_comment_id="0"
                        pt_c_comment_id="0" pt_c_by_notification_id="1"
                        pt_c_notification_id="<?= $notification_id;?>" pt_c_by_comment_reply_id="0"
                        pt_c_comment_reply_id="0" >
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
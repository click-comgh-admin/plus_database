<?php
$page = "view-comments";
$page_url = Current_BaseUrl . "$page";

$reply_id = isset($_GET['reply']) ? (int) $_GET['reply'] : 0;
$comment_id = isset($_GET['comment']) ? (int) $_GET['comment'] : 0;
$notification_id = isset($_GET['notification']) ? (int) $_GET['notification'] : 0;
$get_string = "notifications/notification/reply?client-id=" . AccountInfoId
    . "&notification-id=$notification_id&comment-id=$comment_id&reply-id=$reply_id";

$reply = $ccApi->fetch_from($get_string, function ($reply) {
    return isset($reply[0]) ? $reply : [];
}, $debug = false);

$POST_URL = API_BASE_URL."notifications/clients/record-view";
$post = [
    "admin_user_id"=> AccountInfoUserId, "client_id"=> AccountInfoId,
    "view_type"=> 3, "person_type"=> 1, "content_id"=> $reply_id,
    "person_id"=> AccountInfoUserId
];
// print_r($post);
$post_response = $ccApi->action_post($url=$POST_URL, $post=$post, function($post_response) {
    return $post_response;
}, $debug=false);
// print_r($post_response);

function getDeleteBtn($commentReply)
{
    $reply_id = isset($commentReply['id'])
        ? $commentReply['id']: 0;
    $comment_id = isset($commentReply['comment_id'])
        ? $commentReply['comment_id']: 0;
    $notification_id = isset($commentReply['notification_id'])
        ? $commentReply['notification_id']: 0;
    $postData = json_encode(["reply_id"=>$reply_id,
        "comment_id"=>$comment_id, "notification_id"=>$notification_id,
        "client_id"=>AccountInfoId, "admin_user_id"=>AccountInfoUserId
    ]);

    $url = API_BASE_URL."notifications/clients/delete-reply";
    return "
        <span class=\"p-1\"></span>
        <button type=\"button\" class=\"btn btn-outline-light btn sm\"
            btn-submit-post=$postData
            btn-submit-post--confirm=\"Delete Reply?\"
            btn-submit-post--url=\"$url\">
            <span class=\"text-dark\"> Delete</span>
            <span class=\"pe-7s-trash font-weight-bold text-warning\"></span>
        </button>
    ";
}
?>
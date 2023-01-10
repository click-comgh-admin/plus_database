<?php
$page = "view-comments";
$page_url = Current_BaseUrl . "$page";

$comment_id = isset($_GET['comment']) ? (int) $_GET['comment'] : 0;
$notification_id = isset($_GET['notification']) ? (int) $_GET['notification'] : 0;
$get_string = "notifications/notification/comment?client-id=" . AccountInfoId
    . "&notification-id=$notification_id&comment-id=$comment_id";

$comment = $ccApi->fetch_from($get_string, function ($comment) {
    return isset($comment[0]) ? $comment : [];
}, $debug = false);

$POST_URL = API_BASE_URL."notifications/clients/record-view";
$post = [
    "admin_user_id"=> AccountInfoUserId, "client_id"=> AccountInfoId,
    "view_type"=> 2, "person_type"=> 1, "content_id"=> $comment_id,
    "person_id"=> AccountInfoUserId
];
// print_r($post);
$post_response = $ccApi->action_post($url=$POST_URL, $post=$post, function($post_response) {
    return $post_response;
}, $debug=false);
// print_r($post_response);

function getDeleteBtn($data)
{
    $comment_id = isset($data['id']) ? $data['id']: 0;
    $notification_id = isset($data['notification_id'])
        ? $data['notification_id']: 0;
    $postData = json_encode([
        "comment_id"=>$comment_id, "notification_id"=>$notification_id,
        "client_id"=>AccountInfoId, "admin_user_id"=>AccountInfoUserId
    ]);

    $url = API_BASE_URL."notifications/clients/delete-comment";
    return "
        <span class=\"p-1\"></span>
        <button type=\"button\" class=\"btn btn-outline-light btn sm\"
            btn-submit-post=$postData
            btn-submit-post--confirm=\"Delete Comment?\"
            btn-submit-post--url=\"$url\">
            <span class=\"text-dark\"> Delete</span>
            <span class=\"pe-7s-trash font-weight-bold text-warning\"></span>
        </button>
    ";
}
?>
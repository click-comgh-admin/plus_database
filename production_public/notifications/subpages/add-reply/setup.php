<?php
$page = "add-reply";
$page_url = Current_BaseUrl . "$page";

$comment_id = isset($_GET['comment']) ? (int) $_GET['comment'] : 0;
$notification_id = isset($_GET['notification']) ? (int) $_GET['notification'] : 0;
$get_string = "notifications/notification/comment?client-id=" . AccountInfoId
    . "&notification-id=$notification_id&comment-id=$comment_id";

$comment = $ccApi->fetch_from($get_string, function ($comment) {
    return isset($comment[0]) ? $comment : [];
}, $debug = false);

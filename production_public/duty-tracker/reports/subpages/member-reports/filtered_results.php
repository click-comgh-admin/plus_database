<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    $_start_date = "start_date";
    $_end_date = "end_date";
    $fiveDaysBefore = date("Y/m/").((int)date("d")-5);
    $today = date("Y/m/d");
    $start_date = @(isset($_GET[$_start_date]))
        ? date("Y/m/d", strtotime($_GET[$_start_date])) : $fiveDaysBefore;
    $end_date = @(isset($_GET[$_end_date]))
        ? date("Y/m/d", strtotime($_GET[$_end_date])) :$today;

    $_by_member_id = "by_member_id";
    $_member_id = "member_id";
    if (isset($_GET[$_member_id])) { 
        $getMid = $encryptor->decrypt($_GET[$_member_id]);
        $by_member_id = (int)$getMid;
        $this_member_id = ($by_member_id == 0) ? "all": $by_member_id;
        $by_member_id = ($by_member_id == 0) ? 0: 1; ?>
    <?php } else {
        $by_member_id = @(isset($_COOKIE[$_by_member_id])) ? $_COOKIE[$_by_member_id] : 0;
        $this_member_id = @(isset($_COOKIE[$_member_id])) ? $_COOKIE[$_member_id] : "all"; 
        $by_member_id = ($by_member_id == 0) ? 0: 1; ?>
    <?php }
    
    $_by_duty_id = "by_duty_id";
    $_duty_id = "duty_id";
    $_duty_id = "show-duty";
    if (isset($_GET[$_duty_id])) { 
        $by_duty_id = (int)$_GET[$_duty_id];
        $this_duty_id = ($by_duty_id == 0) ? "all": $by_duty_id;
        $by_duty_id = ($by_duty_id == 0) ? 0: 1; ?>
    <?php } else {
        $by_duty_id = @(isset($_COOKIE[$_by_duty_id])) ? $_COOKIE[$_by_duty_id] : 0;
        $this_duty_id = @(isset($_COOKIE[$_duty_id])) ? $_COOKIE[$_duty_id] : "all"; 
        $by_duty_id = ($by_duty_id == 0) ? 0: 1; ?>
    <?php }
    
    $_by_admin_report = "by_admin_report";
    $_admin_report = "admin_report";
    if (isset($_GET[$_admin_report])) { 
        $by_admin_report = (int)$_GET[$_admin_report];
        $this_admin_report = ($by_admin_report == 0) ? "all": $by_admin_report;
        $by_admin_report = ($by_admin_report == 0) ? 0: 1; ?>
    <?php } else {
        $by_admin_report = @(isset($_COOKIE[$_by_admin_report])) ? $_COOKIE[$_by_admin_report] : 0;
        $this_admin_report = @(isset($_COOKIE[$_admin_report])) ? $_COOKIE[$_admin_report] : "all"; 
        $by_admin_report = ($by_admin_report == 0) ? 0: 1; ?>
    <?php }

?>
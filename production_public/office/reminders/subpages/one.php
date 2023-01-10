<?php
    $page = "reminder";
    $page_url = Current_BaseUrl."$page";
?>
<?php 
    if (isset($_GET['reminder']) && !empty($_GET["reminder"])) {
        $get_string = "office/reminders/reminder?client_id=".AccountInfoId."&id=".$_GET['reminder'];
        $reminder = $ccApi->fetch_from($get_string = $get_string, function ($reminder)
        {
            return isset($reminder[0])? $reminder[0]: [];
        }, $debug = false);

        if (empty($reminder)) { ?>
            <h5 class="card-title">Invalid reminder</h5>
        <?php } else {
            require_once Current_BaseDir."/subpages/one_view.php"; 
        }
    } else { ?>
        <h5 class="card-title">Undefined reminder</h5>
    <?php }
?>
<?php
    $page = "update-reminder";
    $page_url = Current_BaseUrl."$page";
?>
<div class="card mb-4">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                Edit Reminder Entry
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="tab-content">
            <?php 
                if (isset($_GET['reminder']) && !empty($_GET["reminder"])) {
                    $get_string = "office/reminders/reminder?client_id=".AccountInfoId."&id=".$_GET['reminder'];
                    $reminder = $ccApi->fetch_from($get_string = $get_string, function ($reminder)
                    {
                        return isset($reminder[0])? $reminder[0]: [];
                    }, $debug = false);

                    if (empty($reminder)) { ?>
                        <h5 class="card-title">Invalid Reminder</h5>
                    <?php } else {
                        require_once Current_BaseDir."/forms/update_reminder.php"; 
                    }
                } else { ?>
                    <h5 class="card-title">Undefined Reminder</h5>
                <?php }
            ?>
        </div>
    </div>
    <div class="card-footer">
        <div class="btn-actions-pane-right px-1">
            <span class="p-2 fa pull-right">Save Update</span>
        </div>
    </div>
</div>
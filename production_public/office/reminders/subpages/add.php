<?php
    $page = "new-reminder";
    $page_url = Current_BaseUrl."$page";
?>
<div class="card mb-4">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                Enter New Reminder
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="tab-content">
            <?php require_once Current_BaseDir."/forms/new_reminder.php"; ?>
        </div>
    </div>
    <div class="card-footer">
        <div class="btn-actions-pane-right px-1">
            <span class="p-2 fa pull-right">Save New Reminder</span>
        </div>
    </div>
</div>
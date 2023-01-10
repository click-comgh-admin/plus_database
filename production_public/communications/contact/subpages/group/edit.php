<?php
    $page = "contact-group-update";
    $page_url = Current_BaseUrl."$page";
?>
<div class="card mb-4">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                Edit Group Entry
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="tab-content">
            <?php 
                if (isset($_GET['group']) && !empty($_GET["group"])) {
                    $get_string = "communications/clients/contact/group?account_id=" . AccountInfoId . "&id=" . $_GET['group'];
                    $group = $ccApi->fetch_from($get_string=$get_string, function($group) {
                        return isset($group[0])? $group[0]: [];
                    }, $debug=false);

                    if (empty($group)) { ?>
                        <h5 class="card-title">Invalid Group</h5>
                    <?php } else {
                        require_once Current_BaseDir."/forms/group/update.php"; 
                    }
                } else { ?>
                    <h5 class="card-title">Undefined Group</h5>
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
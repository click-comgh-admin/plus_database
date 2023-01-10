<?php
    $page = "new-branch";
    $page_url = Current_BaseUrl."$page";
?>
<div class="card mb-4">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                Edit Branch Entry
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="tab-content">
            <?php 
                if (isset($_GET['branch']) && !empty($_GET["branch"])) {
                    $branch = $ccApi->user_info($type = "client", $_GET['branch'], $all="one_client", $id=1, function ($info)
                    {
                        return (isset($info['error'])) ? [] : @$info;
                    });

                    if (empty($branch)) { ?>
                        <h5 class="card-title">Invalid Branch</h5>
                    <?php } else {
                        require_once Current_BaseDir."/forms/update_branch.php"; 
                    }
                } else { ?>
                    <h5 class="card-title">Undefined Branch</h5>
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
<?php
    $page = "update-user";
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
                        if (isset($_GET['user']) && !empty($_GET["user"])) {
                            $client_user = $ccApi->user_info($type = "client", $account_id = $branch['pdc_id'],
                                $all="one_user", $id=$_GET["user"], function ($info) {
                                return @$info;
                            });
        
                            if (empty($client_user)) { ?>
                                <h5 class="card-title">Invalid User</h5>
                            <?php } else {
                                require_once Current_BaseDir."/forms/user/update_user.php"; 
                            }
                        } else { ?>
                            <h5 class="card-title">Undefined User</h5>
                        <?php }
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
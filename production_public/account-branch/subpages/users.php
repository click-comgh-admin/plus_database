<?php
    $page = "branch";
    $page_url = Current_BaseUrl."$page";
?>
<?php 
    if (isset($_GET['branch']) && !empty($_GET["branch"])) {
        $branch = $ccApi->user_info($type = "client", $_GET['branch'], $all="one_client", $id=1, function ($info)
        {
            return (isset($info['error'])) ? [] : @$info;
        });

        if (empty($branch)) { ?>
            <h5 class="card-title">Invalid branch</h5>
        <?php } else {
            $client_users = $ccApi->user_info($type = "client", $account_id = $branch['pdc_id'], $all="all_client_users", $id=$user_id, function ($info)
            {
                return @$info;
            });
            require_once Current_BaseDir."/subpages/users_view.php"; 
        }
    } else { ?>
        <h5 class="card-title">Undefined branch</h5>
    <?php }
?>

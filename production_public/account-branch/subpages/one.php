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
            require_once Current_BaseDir."/subpages/one_view.php"; 
        }
    } else { ?>
        <h5 class="card-title">Undefined branch</h5>
    <?php }
?>

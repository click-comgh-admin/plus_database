<?php
    $page = "appointment";
    $page_url = Current_BaseUrl."$page";
?>
<?php 
    if (isset($_GET['appointment']) && !empty($_GET["appointment"])) {
        $get_string = "office/appointments/appointment?client_id=".AccountInfoId."&id=".$_GET['appointment'];
        $appointment = $ccApi->fetch_from($get_string = $get_string, function ($appointment)
        {
            return isset($appointment[0])? $appointment[0]: [];
        }, $debug = false);

        if (empty($appointment)) { ?>
            <h5 class="card-title">Invalid appointment</h5>
        <?php } else {
            require_once Current_BaseDir."/subpages/one_view.php"; 
        }
    } else { ?>
        <h5 class="card-title">Undefined appointment</h5>
    <?php }
?>
<?php
    $page = "visitor";
    $page_url = Current_BaseUrl."$page";
?>
<?php 
    if (isset($_GET['visitor']) && !empty($_GET["visitor"])) {
        $get_string = "office/visitors/visitor?client_id=".AccountInfoId."&id=".$_GET['visitor'];
        $visitor = $ccApi->fetch_from($get_string = $get_string, function ($visitor)
        {
            return isset($visitor[0])? $visitor[0]: [];
        }, $debug = false);

        if (empty($visitor)) { ?>
            <h5 class="card-title">Invalid Visitor</h5>
        <?php } else {
            if ((int)$visitor['pdov_visitor_action'] === 4) {
                $get_string = "office/appointments/appointment?client_id=".AccountInfoId."&id=".(int)$visitor['pdov_appointment'];
                $appointment = $ccApi->fetch_from($get_string = $get_string, function ($appointment)
                {
                    return isset($appointment[0])? $appointment[0]: [];
                }, $debug = false);
            } else {
                $appointment = [];
            }
            require_once Current_BaseDir."/subpages/one_view.php"; 
        }
    } else { ?>
        <h5 class="card-title">Undefined Visitor</h5>
    <?php }
?>
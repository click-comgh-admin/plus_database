<?php
    $page = "update-appointment";
    $page_url = Current_BaseUrl."$page";
?>
<div class="card mb-4">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                Edit Appointment Entry
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="tab-content">
            <?php 
                if (isset($_GET['appointment']) && !empty($_GET["appointment"])) {
                    $get_string = "office/appointments/appointment?client_id=".AccountInfoId."&id=".$_GET['appointment'];
                    $appointment = $ccApi->fetch_from($get_string = $get_string, function ($appointment)
                    {
                        return isset($appointment[0])? $appointment[0]: [];
                    }, $debug = false);

                    if (empty($appointment)) { ?>
                        <h5 class="card-title">Invalid Appointment</h5>
                    <?php } else {
                        require_once Current_BaseDir."/forms/update_appointment.php"; 
                    }
                } else { ?>
                    <h5 class="card-title">Undefined Appointment</h5>
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
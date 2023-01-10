<?php
    if (isset($_GET['duty_id']) && !empty(@$_GET['duty_id'])) {
        define('AccountDutyId', (int)$_GET['duty_id']);
        
        $get_string = "duty-tracker/duties/duty-info?client_id=".AccountInfoId."&id=".AccountDutyId;
        $dutyInfo = $ccApi->fetch_from($get_string=$get_string, function($dutys) {
            return isset($dutys['duty'])? $dutys: [];
        }, $debug = false);
    }
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php require_once Current_BaseDir."/forms/assign-duty/duties_filter_form.php";?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
    if (isset($_GET['duty_id']) && !empty(@$_GET['duty_id'])) {
        require_once "assign-duty-assign.php";
    } else {
        require_once "no-duty.php";
    }
?>

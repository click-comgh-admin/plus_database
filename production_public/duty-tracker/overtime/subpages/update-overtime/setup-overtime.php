<div class="d-flex justify-content-between">
    <h5 class="card-title pt-2 mb-0">Update Overtime</h5>
</div><hr/>

<?php 
    define('AccountOvertimeId', (int)@$_GET['show-overtime']);
    
    $get_string = "duty-tracker/overtime/this-overtime?client_id=".AccountInfoId."&id=".AccountOvertimeId;
    $overtimeInfo = $ccApi->fetch_from($get_string=$get_string, function($overtime) {
        return isset($overtime[0])? $overtime[0]: [];
    }, $debug = false);

    // print_r($overtimeInfo);
    require_once Current_BaseDir."/forms/overtime/update-overtime.php";
?>
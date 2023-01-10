<div class="d-flex justify-content-between">
    <h5 class="card-title pt-2 mb-0">Set Duty Time</h5>
    <a class="btn btn-outline-info" href="<?= $page_url;?>">RESET</a>
</div><hr/>

<?php 
    define('AccountDutyId', (int)@$_GET['show-duty']);

    $get_string = "duty-tracker/duties/duty-info?client_id=".AccountInfoId."&id=".AccountDutyId;
    $dutyInfo = $ccApi->fetch_from($get_string=$get_string, function($duties) {
        return isset($duties['duty'])? $duties: [];
    }, $debug = false);

    // print_r($dutyInfo);

    require_once Current_BaseDir."/forms/duties/update-duty.php";
?>
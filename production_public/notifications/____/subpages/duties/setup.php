<?php
    $get_string = "duty-tracker/overtime/currencies?account_id=".AccountInfoId;
    $currency = $ccApi->fetch_from($get_string, function($currency)
    {
        return isset($currency[0])? $currency: [];
    }, $debug = false);

    $get_string = "duty-tracker/overtime/fee?account_id=".AccountInfoId;
    $fee = $ccApi->fetch_from($get_string, function($fee)
    {
        return isset($fee[0])? $fee: [];
    }, $debug = false);

    require_once Current_BaseDir."forms/overtime_fee/form.php";
?>
<div class="d-flex justify-content-between">
    <h5 class="card-title pt-2 mb-0">View Overtime Info</h5>
</div>
<?php 
    define('AccountOvertimeId', (int)@$_GET['show-overtime']);
    
    $get_string = "duty-tracker/overtime/this-overtime?client_id=".AccountInfoId."&id=".AccountOvertimeId;
    $overtimeInfo = $ccApi->fetch_from($get_string=$get_string, function($overtime) {
        return isset($overtime[0])? $overtime[0]: [];
    }, $debug = false);
    // echo "<pre>";
    // print_r($overtimeInfo);
    // echo "</pre>";
?>
<div class="card my-2">
    <div class="card-header p-1 h-25">
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Overtime</th>
                    <th style="white-space: nowrap;">Created On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="white-space: nowrap;">
                            <?= isset($overtimeInfo['pdt_max_minutes'])
                                ? getHoursFromMins($overtimeInfo['pdt_max_minutes']): ""; ?>
                        </th>
                        <th style="white-space: nowrap;">
                            <?= isset($overtimeInfo['pdt_date'])
                                ? date("Y-m-d", strtotime($overtimeInfo['pdt_date'])): ""; ?>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="card-body p-1">
        <h3 class="header card-title">Overtime Details</h3>
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Currency</th>
                        <th style="white-space: nowrap;">Fee Per Minute</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="white-space: nowrap;">
                            <?php
                                $currency = isset($overtimeInfo['pdt_currency'])
                                    ? (int)$overtimeInfo['pdt_currency']: 0;
                                $get_string = "duty-tracker/overtime/currency?account_id=".AccountInfoId."&currency_id=$currency";
                                $currency = $ccApi->fetch_from($get_string, function($currency)
                                {
                                    return isset($currency[0])? $currency[0]: [];
                                }, $debug = false);
                            ?>
                            <?= isset($currency['pdt_currency'])
                                ? multilineText($currency['pdt_currency']): ""; ?>
                        </th>
                        <th style="white-space: nowrap;">
                            <?= isset($overtimeInfo['pdt_baseline_fee_per_minute'])
                                ? multilineText($overtimeInfo['pdt_baseline_fee_per_minute']): ""; ?>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
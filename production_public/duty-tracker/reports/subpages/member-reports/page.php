<?php 
    $currency_value = (isset($fee[0]['pdt_currency'])) ? $fee[0]['pdt_currency']: 0;
    $_curs = '--';
    foreach ($currency as $key => $cur) {
        if (isset($cur['pdt_id'])) {
            if ((int)$currency_value === (int)$cur['pdt_id']) {
                $_curs = $cur['pdt_currency'];
            }
        }
    }   
?>

<div class="col-md-12 px-0 table-responsive">
    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
        <thead>
            <tr>
                <th style="white-space: nowrap;"><span class="pe-7s-check"></span></th>
                <th style="white-space: nowrap;">Overtime Fee</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Overtime Fee Per Minute</th>
                <th>
                    <?= $_curs; ?> <?= (isset($fee[0]['pdt_baseline_fee_per_minute']))
                        ? floatval($fee[0]['pdt_baseline_fee_per_minute']): "--";
                    ?>
                </th>
            </tr>
            <tr>
                <th>Maximum Overtime Minutes</th>
                <td>
                    <?= (isset($fee[0]['pdt_max_minutes'])) ? $fee[0]['pdt_max_minutes']: "--"; ?>
                </td>
            </tr>
            <tr>
                <th>Currency</th>
                <td>
                    <?= $_curs; ?>
                </td>
            </tr>
        </tbody>
    </table>
</div>
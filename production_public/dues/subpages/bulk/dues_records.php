<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <?php
            $get_string = "type?account_id=$account_id&id=".$_GET['dues'];
            $type = $ccApi->dues($get_string, function($type)
            {
                return @$type;
            }, $debug = false);
            
            $get_string = "payment_interval?id=".$type['pddt_payment_intervals'];
            $payment_interval = $ccApi->dues($get_string, function($type)
            {
                return @$type;
            }, $debug = false);
        ?>
        <pre><?php //print_r($type); ?></pre>
        <div class="card-header">
            <?= $type['pddt_type']; ?> Records Bulk Payment.<span class="mx-1"></span>
            Paid <?= $payment_interval[0]['pddt_intervals']; ?> @ <?= $type['pddt_currency']; ?> <?= $type['pddt_amount']; ?>
        </div>
        <div class="card-body">            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($type)) { ?>
                            <h4 class="text-muted">Due Type Does Not Exist.</h4>
                        <?php } else {
                            require_once BASE_DIRECTORY."/dues/forms/bulk/due_record_pay.php";
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
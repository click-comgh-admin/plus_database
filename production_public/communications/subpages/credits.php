<?php
    $get_string = "credit/balance?account_id=$account_id";
    $balance = $ccApi->communications($type="clients", $get_string, function($balance)
    {
        return $balance;
    }, $debug = false);
    
    function credit_purchase_show_info_btn($bal, $TimeAgo, $created_by, $class) { ?>
        <button class="<?= $class; ?>" type="button" data-toggle="modal"
            open-modal--id="credit_purchase-<?= $bal['pdccmc_id']; ?>" open-modal--title="Purchase Details"
            open-modal--html='<?php 
                $timeAgo = !empty($bal) ? @$TimeAgo->get(): "-";
                $date = date('Y/ m/ d', strtotime(@$bal['pdccmc_date']));
                credit_purchase_show_info($created_by = $created_by, $date = $date, $timeAgo = $timeAgo);
            ?>' open-modal--buttons='
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            '>
            <span class="pe-7s-info"></span>
            <span class="d-none d-sm-block">Info</span>
        </button>
    <?php }
    function credit_purchase_show_info($created_by, $date, $timeAgo) { ?>
        <table class="align-middle mb-1 table table-striped table-hover">
            <tbody>
                <tr>
                    <th>Purchased By</th>
                    <td><?= $created_by; ?></td>
                </tr>
                <tr>
                    <th>Purchased Time</th>
                    <td>
                        <u>
                            <?= $date; ?>
                        </u>
                        <br class="m-0" />
                        <i><?= $timeAgo; ?></i>
                    </td>
                </tr>
            </tbody class="my-1">
        </table>
    <?php }
    function credit_usage_log_btn($log, $TimeAgo, $class) { ?>
        <button class="<?= $class; ?>" type="button" data-toggle="modal"
            open-modal--id="credit_usage_log-<?= $log['pdccmc_id']; ?>" open-modal--title="Credit Usage Log"
            open-modal--html='<?php 
                $timeAgo = !empty($log) ? @$TimeAgo->get(): "-";
                $date = date('Y/ m/ d', strtotime(@$log['pdccmc_date']));
                $cost = '<span class="text-info">'.@$log['pdccmc_total_cost'].' Units</span> for messages sent to 
                    <span class="text-info">'.count(@$log['recipients']).'</span> recipients at 
                    <span class="text-info">'.@$log['pdccmc_unit_cost'].'</span> units per recipient.';
                credit_usage_log($cost = $cost, $date = $date, $timeAgo = $timeAgo);
            ?>' open-modal--buttons='
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            '>
            <span class="pe-7s-info"></span>
            <span class="d-none d-sm-block">Info</span>
        </button>
    <?php }
    function credit_usage_log($cost, $date, $timeAgo) { ?>
        <table class="align-middle mb-1 table table-striped table-hover">
            <tbody>
                <tr>
                    <th>Cost</th>
                    <td><?= $cost; ?></td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>
                        <u>
                            <?= $date; ?>
                        </u>
                        <br class="m-0" />
                        <i><?= $timeAgo; ?></i>
                    </td>
                </tr>
            </tbody class="my-1">
        </table>
    <?php }
?>
<!-- <pre><?php 
    //print_r($balance);
    //print_r($units); 
?></pre> -->
<div class="main-card mb-3 card shadow">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                <a class="btn-shadow btn btn-danger show active" href="#account_credit" data-toggle="tab">Credit Balance</a>
                <a class="btn-shadow btn btn-danger show" href="#credit_logs" data-toggle="tab">Usage Logs</a>
            </div>
        </div>
    </div>
    <div class="card-body p-0 mb-4">
        <div class="tab-content">
            <div class="tab-pane show active" id="account_credit" role="tabpanel">
                <?php require_once "subpages/credit/account_credit.php"; ?>
            </div>
            <div class="tab-pane show p-2" id="credit_logs" role="tabpanel">
                <?php require_once "subpages/credit/credit_logs.php"; ?>
            </div>
        </div>
    </div>
</div>
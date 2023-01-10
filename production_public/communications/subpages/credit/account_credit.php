<div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
    <div class="btn-actions-pane-right px-1">
        <div class="btn-group-sm nav btn-group" role="group">
            <a class="btn-shadow btn btn-warning show active" href="#credit_balance" data-toggle="tab">Credit Balance</a>
            <a class="btn-shadow btn btn-warning show" href="#credit_purchase_logs" data-toggle="tab">Credit Purchase Logs</a>
        </div>
    </div>
</div>
<div class="card-body p-0 mb-4">
    <div class="tab-content">
        <div class="tab-pane show active p-2" id="credit_balance" role="tabpanel">
            <h5 class="card-title">Credit Balance</h5>
            <div class="container card shadow shadow-sm p-2">
                <h4 class="text-center">Your Credit Balance is 
                    <i class="text-info"><?= $current_balance = @$balance[0]['pdccmc_units']; ?></i> 
                    Units.</h4>
            </div>
        </div>
        <div class="tab-pane show p-2" id="credit_purchase_logs" role="tabpanel">
            <h5 class="card-title">Credit Purchase Logs</h5>
            <div class="d-none d-lg-block table-responsive">
                <table
                    class="align-middle mb-0 table table-striped table-hover" pagin_table="credit_purchase_logs" pt_c_id="<?= $account_id; ?>">
                    <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th style="white-space: nowrap;" class="text-center">Unit</th>
                            <th style="white-space: nowrap;" class="text-center">Amount Paid</th>
                            <th style="white-space: nowrap;">By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php /*
                            foreach ($balance as $bal_key => $bal) {
                                if (isset($bal['pdccmc_id'])) {
                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($bal['pdccmc_date']))); ?>
                                    <tr>
                                        <th class="text-center"><?= (int)$bal_key+1; ?></th>
                                        <td style="white-space: nowrap" class="text-center">
                                            <?= @$bal['pdccmc_units_bought']; ?>
                                        </td>
                                        <td style="white-space: nowrap" class="text-center">
                                            <?= @$bal['pdccmc_paid']; ?>
                                        </td>
                                        <td style="white-space: nowrap">
                                            <?= 
                                                @$ccApi->user_info($type = "client", $account_id, $all="one_user",
                                                    $id=@$bal['pdccmc_paid_by'], function ($info) { 
                                                    return @$info[0]['pdcu_firstname']." ".@$info[0]['pdcu_surname'];
                                                }); 
                                            ?> on
                                            <?= date("Y/ m/ d", strtotime(@$bal['pdccmc_date'])); ?>
                                           <hr class="m-0"/>
                                           <i><?= !empty($bal) ? @$TimeAgo->get(): "-"; ?></i>
                                        </td>
                                    </tr>
                                <?php }
                            } */
                        ?>
                    </tbody>
                </table>
            </div>
            <div class="d-block d-lg-none table-responsive">
                <table
                    class="align-middle mb-0 table table-striped table-hover" pagin_table="credit_purchase_logs_sm" pt_c_id="<?= $account_id; ?>">
                    <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th style="white-space: nowrap;" class="text-center">Unit</th>
                            <th style="white-space: nowrap;" class="text-center">Amount Paid</th>
                            <th style="white-space: nowrap;" class="text-center">By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php /*
                            foreach ($balance as $bal_key => $bal) {
                                if (!empty($bal)) {
                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($bal['pdccmc_date'])));
                                    $created_by = @$ccApi->user_info($type = "client", $account_id, $all="one_user",
                                        $id=@$bal['pdccmc_paid_by'], function ($info) { 
                                        return @$info[0]['pdcu_firstname']." ".@$info[0]['pdcu_surname'];
                                    }); ?>
                                    <tr>
                                        <th class="text-center"><?= (int)$bal_key+1; ?></th>
                                        <td style="white-space: nowrap" class="text-center">
                                            <?= @$bal['pdccmc_units_bought']; ?>
                                        </td>
                                        <td style="white-space: nowrap" class="text-center">
                                            <?= @$bal['pdccmc_paid']; ?>
                                        </td>
                                        <td style="white-space: nowrap" class="text-center">
                                           <?= credit_purchase_show_info_btn($bal, $TimeAgo, $created_by, "m-1 btn btn-sm btn-info shadow"); ?>
                                        </td>
                                    </tr>
                                <?php }
                            } */
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
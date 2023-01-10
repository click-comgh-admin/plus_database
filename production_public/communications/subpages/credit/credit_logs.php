<h5 class="card-title">Credit Usage Logs</h5>
<div class="d-none d-lg-block table-responsive">
    <table
        class="align-middle mb-0 table table-striped table-hover" pagin_table="credit_usage_logs" pt_c_id="<?= $account_id; ?>">
        <thead>
            <tr>
                <th class="text-center">#</th>
                <th style="white-space: nowrap;" class="text-center">Message Type</th>
                <th style="white-space: nowrap;" class="text-center">Costs</th>
                <th style="white-space: nowrap;" class="text-center"></th>
            </tr>
        </thead>
        <tbody>
            <?php /*
                foreach ($balance['logs'] as $log_key => $log) {
                    if (!empty($log)) {
                        $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($log['pdccmc_date']))); ?>
                        <tr>
                            <th class="text-center"><?= (int)$log_key+1; ?></th>
                            <td style="white-space: nowrap" class="text-center">
                                <?= $ccApi->message_types_alt("one_message_type?id=".$log['pdccmc_message_type'], function($type)
                                    {
                                        return @$type[0]['pdccmc_type'];
                                    }, $debug = false);
                                ?> to
                                <?= $ccApi->message_types_alt("one_communication_type?id=".$log['pdccmc_communication_type'], function($type)
                                    {
                                        return @$type[0]['pdccmc_type'];
                                    }, $debug = false); ?>
                            </td>
                            <td class="text-center">
                                <span class="text-info"><?= @$log['pdccmc_total_cost']; ?> Units</span> for messages sent to 
                                <span class="text-info"><?= count(@$log['recipients']); ?></span> recipients at 
                                <span class="text-info"><?= @$log['pdccmc_unit_cost']; ?></span> units per recipient. 
                            </td>
                            <td style="white-space: nowrap">
                                <?= 
                                    @$ccApi->user_info($type = "client", $account_id, $all="one_user",
                                        $id=@$log['pdccmc_paid_by'], function ($info) { 
                                        return @$info[0]['pdcu_firstname']." ".@$info[0]['pdcu_surname'];
                                    }); 
                                ?> on
                                <?= date("Y/ m/ d", strtotime(@$log['pdccmc_date'])); ?>
                               <hr class="m-0"/>
                               <i><?= !empty($log) ? @$TimeAgo->get(): "-"; ?></i>
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
        class="align-middle mb-0 table table-striped table-hover" pagin_table="credit_usage_logs_sm" pt_c_id="<?= $account_id; ?>">
        <thead>
            <tr>
                <th class="text-center">#</th>
                <th style="white-space: nowrap;" class="text-center">Message Type</th>
                <th style="white-space: nowrap;" class="text-center">Info</th>
            </tr>
        </thead>
        <tbody>
            <?php /*
                foreach ($balance['logs'] as $log_key => $log) {
                    if (!empty($log)) {
                        $TimeAgo = new TimeAgo(date('y-m-d h:i', strtotime($log['pdccmc_date']))); ?>
                        <tr>
                            <th class="text-center"><?= (int)$log_key+1; ?></th>
                            <td style="white-space: nowrap" class="text-center">
                                <?= $ccApi->message_types_alt("one_message_type?id=".$log['pdccmc_message_type'], function($type)
                                    {
                                        return @$type[0]['pdccmc_type'];
                                    }, $debug = false);
                                ?> to
                                <?= $ccApi->message_types_alt("one_communication_type?id=".$log['pdccmc_communication_type'], function($type)
                                    {
                                        return @$type[0]['pdccmc_type'];
                                    }, $debug = false); ?>
                            </td>
                            <td style="white-space: nowrap" class="text-center">
                               <?= credit_usage_log_btn($log, $TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                            </td>
                        </tr>
                    <?php }
                } */
            ?>
        </tbody>
    </table>
</div>
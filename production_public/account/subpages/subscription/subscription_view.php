
<?php
    $account_subscriptions = @$account_status['subscription'];
    // print_r($account_subscriptions);
    // [pdcp_pay_date] => 2020-01-10 00:00:00 [pdcp_expire_date] => 2020-01-10 18:29:04 [pdcc_paid_by
    function show_info_btn($subscription, $account_info, $paid_by, $ccApi, $class) { ?>
        <button class="<?= $class; ?>" type="button" data-toggle="modal"
            open-modal--id="info_subscription-<?= $subscription['pdcp_id']; ?>" open-modal--title="Subscription Info"
            open-modal--html='<?php 
                $paid_by = !empty($subscription['pdcc_paid_by']) ? @$paid_by['pdcu_firstname'] ." ". @$paid_by['pdcu_surname']: "-";
                $pay_date = date('Y/ m/ d', strtotime(@$subscription['pdcp_pay_date']));
                $expire_date = date('Y/ m/ d', strtotime(@$subscription['pdcp_expire_date']));

                show_info(
                    $subscription = $subscription, $account_info, $paid_by, $pay_date = $pay_date, $expire_date = $expire_date, $ccApi
                ); 
            ?>' open-modal--buttons='
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            '>
            <span class="pe-7s-info"></span>
            <span class="d-none d-sm-inline">Info</span>
        </button>
    <?php }

    function show_info($subscription, $account_info, $paid_by, $pay_date, $expire_date, $ccApi) { ?>
        <table class="align-middle mb-1 table table-borderless table-striped table-hover">
            <tbody class="card shadow mb-2">
                <tr>
                    <th><?= (AccountInfoCategory == 10)? "District Type": "Membership Size"; ?></th>
                    <?php 
                        if (AccountInfoCategory == 10) { ?>
                            <td>
                                <?php
                                    $default_membership_size = @$account_info['trial_district_type']['pdcms_district_type'];
                                    $get_string = 'district-status/district?id='.$default_membership_size;
                                    $district_type = $ccApi->fetch_from($get_string, function($district_type) {
                                        return isset($district_type[0])? $district_type[0]: [];
                                    }, $debug = false);
                                                            
                                    $get_string = 'district-status/district?id='.$district_type['pdd_info'].'&type=1';
                                    echo $ccApi->fetch_from($get_string, function($district_types) use($ccApi) {
                                        $at = '';
                                        foreach ($district_types as $key => $district_type) {
                                            $get_string = 'district-status/one?id='.$district_type['pdd_info'];
                                            $district_type_name = $ccApi->fetch_from($get_string, function($district_type) {
                                                return isset($district_type[0]['pdd_info'])? $district_type[0]['pdd_info']: "-";
                                            }, $debug = false);
                                            $at .= $district_type_name;
                                        }
                                        return @$at;
                                    });
                                ?>
                            </td>
                        <?php } else { ?>
                            <td>
                                <?= $ccApi->membership_size($all=false, $id=$subscription['pdcp_membership_size'], function($membership_size) {
                                    return @$membership_size[0]['pdd_info'];
                                }); ?>
                            </td>
                        <?php }
                    ?>
                </tr>
                <tr>
                    <th>Duration</th>
                    <td>
                        <?= $ccApi->subscription_duration($all="one", $id=$subscription['pdcp_duration'], function($subscription_duration) {
                            return @$subscription_duration[0]['pdd_info'];
                        }); ?>
                    </td>
                </tr>
            </tbody>
            <tbody class="my-1 card shadow">
                <tr>
                    <th>Paid By</th>
                    <td><?= $paid_by; ?></td>
                </tr>
                <tr>
                    <th>Paid On</th>
                    <td>
                        <?= $pay_date; ?>
                    </td>
                </tr>
                <tr>
                    <th>Expires On</th>
                    <td>
                        <?= $expire_date; ?>
                    </td>
                </tr>
            </tbody>
        </table>
    <?php }
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-5">
        <?php require_once BASE_DIRECTORY."/account/subpages/subscription/subscription_add_edit.php"; ?>
        <?php require_once BASE_DIRECTORY."/account/subpages/subscription/subscription_upgrade.php"; ?>
    </div>
    <div class="col-md-12 col-lg-7">
        <div class="card">
            <div class="card-header">
                <i>Subscription</i> // <?= @$account_info['pdc_name']; ?>
            </div>
            <div class="card-body p-0">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <div class="d-none d-lg-block table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead class="shadow bg-primary">
                                    <tr>
                                        <th class="text-white">#</th>
                                        <th class="text-white">Amount</th>
                                        <th class="text-white"><?= (AccountInfoCategory == 10)? "District Type": "Membership Size"; ?></th>
                                        <th class="text-white">Duration</th>
                                        <th class="text-white">Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($account_subscriptions as $subscription_key => $subscription) {
                                        if (!empty($subscription)) {
                                            $paid_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subscription['pdcc_paid_by'],
                                            function ($info) {
                                                return @$info[0];
                                            });
                                        } ?>
                                        <tr <?= ((int)$subscription_key == 0) ? "class='bg-info text-white'": ""; ?>>
                                            <th><?= (int)$subscription_key + 1; ?></th>
                                            <th>
                                                <?= $subscription['pdcp_amount']; ?>
                                            </th>
                                            <?php 
                                                if (AccountInfoCategory == 10) { ?>
                                                    <td <?= ((int)$subscription_key == 0) ? "class='font-weight-bold'": ""; ?>>
                                                        <?php
                                                            $default_membership_size = @$account_info['trial_district_type']['pdcms_district_type'];
                                                            $get_string = 'district-status/district?id='.$default_membership_size;
                                                            $district_type = $ccApi->fetch_from($get_string, function($district_type) {
                                                                return isset($district_type[0])? $district_type[0]: [];
                                                            }, $debug = false);
                                    
                                                            $get_string = 'district-status/district?id='.$district_type['pdd_info'].'&type=1';
                                                            echo $ccApi->fetch_from($get_string, function($district_types) use($ccApi) {
                                                                $at = '';
                                                                foreach ($district_types as $key => $district_type) {
                                                                    $get_string = 'district-status/one?id='.$district_type['pdd_info'];
                                                                    $district_type_name = $ccApi->fetch_from($get_string, function($district_type) {
                                                                        return isset($district_type[0]['pdd_info'])? $district_type[0]['pdd_info']: "-";
                                                                    }, $debug = false);
                                                                    $at .= $district_type_name;
                                                                }
                                                                return @$at;
                                                            });
                                                        ?>
                                                    </td>
                                                <?php } else { ?>
                                                    <td <?= ((int)$subscription_key == 0) ? "class='font-weight-bold'": ""; ?>>
                                                        <?= $ccApi->membership_size($all=false, $id=$subscription['pdcp_membership_size'], function($membership_size) {
                                                            return @$membership_size[0]['pdd_info'];
                                                        }); ?>
                                                    </td>
                                                <?php }
                                            ?>
                                            <td <?= ((int)$subscription_key == 0) ? "class='font-weight-bold'": ""; ?>>
                                                <?= $ccApi->subscription_duration($all="one", $id=$subscription['pdcp_duration'], function($subscription_duration) {
                                                    return @$subscription_duration[0]['pdd_info'];
                                                }); ?>
                                            </td>
                                            <td class="py-0 px-1">
                                                <table class="align-middle mb-0 table table-borderless table-striped table-hover <?= ((int)$subscription_key == 0) ? "bg-info": ""; ?>">
                                                    <tbody class="card mb-2 mt-1">
                                                        <tr>
                                                            <th class="py-1">Paid By</th>
                                                        </tr>
                                                        <tr>
                                                            <td class="py-1"><?= !empty($subscription['pdcc_paid_by']) ? @$paid_by['pdcu_firstname'] ." ". @$paid_by['pdcu_surname']: "-"; ?></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody class="card my-0 mb-1">
                                                        <tr>
                                                            <th class="py-1">Paid On</th>
                                                            <td class="py-1"><?= date("Y-m-d", strtotime($subscription['pdcp_pay_date'])); ?></td>
                                                        </tr>
                                                        <tr>
                                                            <th class="py-1">Expires On</th>
                                                            <td class="py-1"><?= date("Y-m-d", strtotime($subscription['pdcp_expire_date'])); ?></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-block d-lg-none table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead class="shadow bg-primary">
                                    <tr>
                                        <th class="text-white">#</th>
                                        <th class="text-white">Amount</th>
                                        <th class="text-white">Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($account_subscriptions as $subscription_key => $subscription) {
                                        if (!empty($subscription)) {
                                            $paid_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subscription['pdcc_paid_by'],
                                            function ($info) {
                                                return @$info[0];
                                            });
                                        } ?>
                                        <tr <?= ((int)$subscription_key == 0) ? "class='bg-info text-white'": ""; ?>>
                                            <th><?= (int)$subscription_key + 1; ?></th>
                                            <th>
                                                <?= $subscription['pdcp_amount']; ?>
                                            </th>
                                            <td class="py-0 px-1">
                                                <table class="align-middle mb-0 table table-borderless table-striped table-hover <?= ((int)$subscription_key == 0) ? "bg-info": ""; ?>">
                                                    <tbody class="card my-1">
                                                        <tr>
                                                            <td class="p-0"><?= show_info_btn($subscription, $account_info, $paid_by, $ccApi, "m-1 btn btn-sm btn-info shadow m-0"); ?></td>
                                                            <th class="py-1">Expires On</th>
                                                            <td class="py-1"><?= date("Y-m-d", strtotime($subscription['pdcp_expire_date'])); ?></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-block">
            </div>
        </div>
    </div>
</div>
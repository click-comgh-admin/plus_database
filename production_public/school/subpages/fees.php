<?php
    $member_id = isset($_GET["student"]) ? $_GET["student"] : "";
    $member_id = $encryptor->decrypt($member_id);
    $get_string = "student/fees?client_id=$account_id&member_id=$member_id";
    $fees = $ccApi->school($get_string, function($fees)
    {
        return (isset($fees['error'])) ? "Enter Student Name/ Index Number" : @$fees;
    }, $debug = false);
    // print_r($fees);
    if (empty($fees)) { ?>
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            No Records Found
        </div>
    <?php } else { ?>
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            <div class="btn-actions-pane-right">
                <div class="btn-group-sm nav btn-group" role="group">
                    <a class="btn-shadow btn btn-info show active" href="#fees_data_info_tab" data-toggle="tab">Fees</a>
                    <a class="btn-shadow btn btn-success" href="<?= schoolFees_BaseUrl; ?>">Reset Data</a>
                    <a class="btn-shadow btn btn-warning show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_fees_data")) ? " active" : ""; ?>" href="#edit_fees_data_tab" data-toggle="tab">Upload Fees</a>
                </div>
            </div>
        </div>
        <div class="card-body p-0 mb-4">
            <div class="tab-content">
                <div class="tab-pane show active" id="fees_data_info_tab" role="tabpanel">
                    <?php
                        if (is_array($fees)) { ?>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-8">
                                    <div class="table-responsive">
                                        <table
                                            class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th style="white-space: nowrap;">-</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php foreach ($fees as $fee_key => $fee) {
                                                    $member_id = $fee['pdsc_member_id'];
                                                    $records = $fee['records'];
                                                    $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
                                                        return $members;
                                                    }, $debug = 0); 
                                                    if (!empty($fee)) {
                                                        $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$fee['_date_'])));

                                                        $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$fee['pdsc_created_by'],
                                                        function ($info) {
                                                            return @$info[0];
                                                        });

                                                        $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$fee['_update_date_'])));

                                                        $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$fee['pdsc_updated_by'],
                                                        function ($info) {
                                                            return @$info[0];
                                                        });
                                                    } ?>
                                                    <tr>
                                                        <th class="p-0 w-25"
                                                            background-image="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= @$member['pdm_profile_picture']; ?>">
                                                            <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                                <div class="widget-content-wrapper">
                                                                    <div class="widget-content-c enter ml-auto mr-auto">
                                                                        <div class="widget-content-ce nter">
                                                                            <img width="130" height="130" class="rounded-circle shadow" alt="Member Image"
                                                                                src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= @$member['pdm_profile_picture']; ?>">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td class="p-0">
                                                            <table class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                                <tbody>
                                                                    <tr>
                                                                        <th><?= $member['pdm_firstname']; ?> <?= $member['pdm_surname']; ?></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th><b>ID: </b> 
                                                                            <?php
                                                                                $get_string = "student/index_number?client_id=$account_id&member_id=$member_id";
                                                                                echo $index_number = $ccApi->school($get_string, function($index_numbers)
                                                                                {
                                                                                    return @$index_numbers[0]['pdsc_index_number'];
                                                                                }, $debug = false);
                                                                            ?>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th><b>Class: </b> 
                                                                            <?php
                                                                                $get_string = "class/class?client_id=$account_id&id=".$fee['pdsc_class_id'];
                                                                                echo $class = $ccApi->school($get_string, function($class)
                                                                                {
                                                                                    return @$class[0]['pdsc_class'];
                                                                                }, $debug = false);
                                                                            ?>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th><b>Term: </b> 
                                                                            <?php
                                                                                $get_string = "term?client_id=$account_id&id=".$fee['pdsc_term'];
                                                                                echo $class = $ccApi->school($get_string, function($class)
                                                                                {
                                                                                    return @$class[0]['pdsc_term'];
                                                                                }, $debug = false);
                                                                            ?>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th><b>Year: </b> 
                                                                            <?= $fee['pdsc_year']; ?>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th><b>Fee: </b> 
                                                                            <?= $fee['pdsc_fee']; ?>,
                                                                            <b>Arrears: </b> 
                                                                            <?= floatval($fee['pdsc_fee'])-floatval(@$records['sum'][0]['SUM(pddt_amount_paid)']); ?>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th class="pr-0">
                                                                            <?php if (empty($records)) { ?>
                                                                                <span class="badge badge-info p-2 my-1 shadow bg-love-kiss">
                                                                                    Unpaid
                                                                                </span>
                                                                                <?= show_fee_pay_btn($account_id, $user_id, $tf, $ccApi, $fee, "Pay Fees", "m-0 btn btn-sm btn-info shadow"); ?>
                                                                            <?php } else { ?>
                                                                                <span class="badge badge-info p-2 my-1 shadow bg-night-sky">
                                                                                    <?= $records[0]['payStatus']['pddt_status']; ?>
                                                                                </span>
                                                                                <?= show_fee_pay_btn($account_id, $user_id, $tf, $ccApi, $fee, "Pay", "m-0 btn btn-sm btn-primary shadow"); ?>
                                                                                <?= show_fee_record_btn($fee, $account_id, $ccApi, "Records", "m-0 btn btn-sm btn-success shadow"); ?>
                                                                            <?php } ?>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>
                                                                            <?= show_info_btn($fee, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-0 btn btn-sm btn-info shadow"); ?>
                                                                            <?php /* edit_btn($fee, $account_id, $user_id, "Edit This Fee Record", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm");*/ ?>
                                                                            <?php 
                                                                                $fee_id = $fee['pdsc_id']; 
                                                                                delete_btn($fee_id, $member_id, $account_id, $user_id, "m-0 btn btn-sm btn-danger shadow"); 
                                                                            ?>
                                                                        </th>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr><td class="pt-1 pb-0 bg-light"></td><td class="pt-1 pb-0 bg-light"></td></tr>
                                                <?php } ?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        <?php } else { ?>
                            <h5 class="card-title text-muted mt-3 ml-3"><?= $fees; ?></h5>
                        <?php }
                    ?>
                    
                </div>
                <div class="tab-pane show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_fees_data")) ? " active" : ""; ?>" id="edit_fees_data_tab" role="tabpanel">
                    <h4 class="card-title p-3">Upload Bill</h4>
                    <div class="container">
                        <?php require_once BASE_DIRECTORY.'/school/forms/fees-create_form.php'; ?>
                    </div>
                </div>
            </div>
        </div>
    <?php }
?>

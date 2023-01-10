<?php
    $get_member = (isset($_GET['member'])) ? (($_GET['member'] == "all") ? $_GET['member'] : $encryptor->decrypt($_GET['member'])) : "all";
    $get_term = (isset($_GET['term'])) ? $_GET['term'] : "all";
    $get_class = (isset($_GET['class'])) ? $_GET['class'] : "all";
    $get_year = (isset($_GET['years'])) ? $_GET['years'] : date("Y");
    $get_fee_status = (isset($_GET['fee_status'])) ? $_GET['fee_status'] : "all";

    $get_string = "student/all_fees?client_id=$account_id&year=$get_year&term=$get_term&class=$get_class&member_id=$get_member";
    $allfees = $ccApi->school($get_string, function($fees)
    {
        return @$fees;
    }, $debug = false);
    $fees = [];
    foreach ($allfees as $f_key => $thisFee) {
        $records = $thisFee['records'];
        if ((int)$get_fee_status === 3) {
            if (empty($records)) {
                if (!in_array($thisFee, $fees)) {
                    array_push($fees, $thisFee);
                }
            } else {
                if ((int)$get_fee_status === (int)$records[0]['payStatus']['pddt_id']) {
                    if (!in_array($thisFee, $fees)) {
                        array_push($fees, $thisFee);
                    }
                }
            }
        } else if (strtolower($get_fee_status) === "all") {
            if (!in_array($thisFee, $fees)) {
                array_push($fees, $thisFee);
            }
        } else {
            if (!empty($records)) {
                if ((int)$get_fee_status === (int)$records[0]['payStatus']['pddt_id']) {
                    // echo "<pre>";print_r($records);echo "<pre>";
                    if (!in_array($thisFee, $fees)) {
                        array_push($fees, $thisFee);
                    }
                }
            }
        }
    }
?>
<div class="card-header py-1">
    <div class="btn-actions-pane-right shadow shadow-sm">
        <div class="btn-group-sm nav btn-group" role="group">
            <a class="btn-shadow btn btn-info show active" href="#fees_data_info_tab" data-toggle="tab">Fees</a>
            <a class="btn-shadow btn btn-warning show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_fees_data")) ? " active" : ""; ?>" href="#edit_fees_data_tab" data-toggle="tab">Upload Fees</a>
        </div>
    </div>
</div>
<div class="card-body p-0 mb-4">
    <div class="tab-content">
        <div class="tab-pane show active" id="fees_data_info_tab" role="tabpanel">
            <div class="card-header h-25"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                Fees
                <div class="btn-actions-pane-right">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <?php require_once BASE_DIRECTORY."/school/forms/filter_data_pay_status.php"; ?>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <?php
                    if (empty($fees)) { ?>
                        <div class="col-md-12 col-lg-12 m-3">
                            <h5 class="card-title m-0 p-3 py-0">No Records Found</h5>
                        </div>
                    <?php } else { ?>
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
                                                                    <?= show_info_btn($fee, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                    <?php /* edit_btn($fee, $account_id, $user_id, "Edit This Fee Record", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm");*/ ?>
                                                                    <?php 
                                                                        $fee_id = $fee['pdsc_id']; 
                                                                        delete_btn($fee_id, $member_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
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
                    <?php }
                ?>
                
            </div>
        </div>
        <div class="tab-pane show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_fees_data")) ? " active" : ""; ?>" id="edit_fees_data_tab" role="tabpanel">
            <h4 class="card-title p-3">Upload Bill</h4>
            <div class="container">
                <?php require_once BASE_DIRECTORY.'/school/forms/fees-create_form.php'; ?>
            </div>
        </div>
    </div>
</div>
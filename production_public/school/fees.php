<?php
	require_once '../assets/php/include.php';
    require_once '../defs.php';
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "School Fees");
    define('PAGE_DESC', "View Fees Info");
?>
<!doctype html>
<html lang="en">
    <?php require_once '../assets/php/page_components/header/head.php'; ?>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once '../assets/php/page_components/header/navbar.php'; ?>
            <?php require_once '../assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once '../assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-cash icon-gradient bg-happy-green">
                                        </i>
                                    </div>
                                    <div>
                                        <?= PAGE_TITLE; ?>
                                        <div class="page-title-subheading"><?= PAGE_DESC; ?></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                            if ($account_status['is_active'] === false) {
                                require_once '../assets/php/page_components/account_inactive.php';
                                require_once '../assets/php/page_components/footer/close.php';
                                die();
                            }
                            $_appPage = 0;
                            foreach ($appPages as $key => $page) {
                                if ((string)strtolower($page['pdpc_page']) === "school") {
                                    $_appPage = $page['pdpc_id'];
                                }
                            }
                            if (in_array($_appPage, $my_access_levels) === false) {
                                require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                                require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                                die();
                            }
                            define("schoolFees_BaseUrl", CLIENT_BASE_URL."school/fees");                            
                            // print_r($fees);
                        
                            function show_info_btn($fees, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="info_class-<?= $fees['pdsc_id']; ?>" open-modal--title="Fee Record Info"
                                    open-modal--html='<?php 
                                        $created_by = !empty($fees['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                        $date = date('Y/ m/ d', strtotime(@$fees['_date_']));
                                        $timeAgo = !empty($fees) ? @$TimeAgo->get(): "-";
                        
                                        $updated_by = !empty($fees['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                        $updated_date = date('Y/ m/ d', strtotime(@$fees['_update_date_']));
                                        $updated_timeAgo = !empty($fees) ? @$updated_TimeAgo->get(): "-";
                        
                                        show_info(
                                            $created_by = $created_by, $date = $date, $timeAgo = $timeAgo,
                                            $updated_by = $updated_by, $updated_date = $updated_date,
                                            $updated_timeAgo = $updated_timeAgo, $fees
                                        ); 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-info"></span>
                                    <span class="d-none d-sm-inline">Info</span>
                                </button>
                            <?php }
                        
                            function show_info($created_by, $date, $timeAgo, $updated_by, $updated_date, $updated_timeAgo, $fees) { ?>
                                <div class="card m-1 mt-0 mb-2">
                                    <div class="card-header">
                                        Fee Record Note/ Remarks 
                                    </div>
                                    <div class="card-body"><?= multilineText($fees['pdsc_message']); ?></div>
                                    <div class="card-footer">
                                        <a href="<?= FILE_BUCKET_BASE_URL."files/".$fees['pdsc_bill_attachment']; ?>" target="_blank">Download Bill</a>
                                    </div>
                                </div>
                                <table class="align-middle mb-1 table table-bor derless table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Created By</th>
                                            <td><?= $created_by; ?></td>
                                        </tr>
                                        <tr>
                                            <th>Creation Time</th>
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
                                <table class="align-middle mt-1 mb-0 table table-bor derless table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Updated By</th>
                                            <td><?= $updated_by; ?></td>
                                        </tr>
                                        <tr>
                                            <th>Updated Time</th>
                                            <td>
                                                <u>
                                                    <?= $updated_date; ?>
                                                </u>
                                                <br class="m-0" />
                                                <i><?= $updated_timeAgo; ?></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            <?php }
                        
                            function show_fee_pay_btn($account_id, $user_id, $tf, $ccApi, $fees, $title, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="fee_pay_class-<?= $fees['pdsc_id']; ?>" open-modal--title="Pay Fees"
                                    open-modal--html='<?php                         
                                        show_fee_pay(
                                            $account_id = $account_id, $user_id = $user_id, $tf = $tf, $ccApi = $ccApi, $fees
                                        ); 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-cash"></span>
                                    <span class="d-none d-sm-inline"><?= $title; ?></span>
                                </button>
                            <?php }
                        
                            function show_fee_pay($account_id, $user_id, $tf, $ccApi, $fees) {
                                $fee_id = $fees['pdsc_id']; 
                                $member_id = $fees['pdsc_member_id']; 
                                $confirm_msg = "Pay Fees";
                                require 'forms/fees-pay_form.php'; 
                            }
                        
                            function show_fee_record_btn($fees, $account_id, $ccApi, $title, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="fee_record-<?= $fees['pdsc_id']; ?>" open-modal--title="Fee Record Info"
                                    open-modal--html='<?php                        
                                        show_fee_record($fees, $account_id, $ccApi); 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-note2"></span>
                                    <span class="d-none d-sm-inline"><?= $title; ?></span>
                                </button>
                            <?php }
                        
                            function show_fee_record($fees, $account_id, $ccApi) {
                                $member_id = $fees['pdsc_member_id'];
                                $records = $fees['records']; ?>
                                <div class="table-responsive">
                                    <table
                                        class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Paid</th>
                                                <th style="white-space: nowrap;">By</th>
                                                <th style="white-space: nowrap;">Status</th>
                                                <th style="white-space: nowrap;">-</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach ($records as $record_key => $record) {
                                                if (!isset($record[0])) {
                                                    $timeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$record['_date_'])));

                                                    $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$record['created_by'],
                                                    function ($info) {
                                                        return @$info[0];
                                                    }); ?>
                                                    <tr>
                                                        <th><?= $record['pddt_amount_paid']; ?></th>
                                                        <td><?= $record['payMethod']['pddt_method']; ?></td>
                                                        <td><?= $record['payStatus']['pddt_status']; ?></td>
                                                        <td>                                                                
                                                            <?= !empty($record['created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                                <hr class="m-0 p-0">
                                                            <?= !empty($record) ? @$timeAgo->get(): "-"; ?>
                                                        </td>
                                                    </tr>
                                                <?php }
                                            } ?>
                                        </tbody>
                                    </table>
                                </div>
                            <?php }
                            
                            function edit_btn($feeInfo, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_class-<?= $feeInfo['pdsc_id']; ?>-<?= $type; ?>"
                                    open-modal--title="Edit Class" open-modal--html='<?php 
                                        $fee_id = $feeInfo['pdsc_id']; 
                                        $fee_name = $feeInfo['pdsc_class']; 
                                        require 'forms/fees-edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }
                        
                            function delete_btn($fee_id, $member_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["fee_id"=>$fee_id, "member_id"=>$member_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Fee Record?"
                                    btn-submit-post--url="<?= API_BASE_URL."school/clients/student/fees/delete"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-inline">Delete</span>
                                </button>
                            <?php }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-12 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Enter Student Name/ Index Number</h5>
                                        <?php require_once 'pick-up/forms/filter_members.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <?php
                                        if (isset($_GET["student"])) {
                                            require_once 'subpages/fees.php';
                                        } else {
                                            require_once 'subpages/fees_filtered.php';
                                        }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php require_once '../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
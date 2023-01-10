<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <?php
            $get_string = "type?account_id=$account_id&id=".$_GET['dues'];
            $type = $ccApi->dues($get_string, function($type)
            {
                return @$type;
            }, $debug = false);
            if (!empty($type)) {
                $get_string = "members?account_id=$account_id&due_id=".$_GET['dues'];
                $due_members = $ccApi->dues($get_string, function($due_members)
                {
                    return @$due_members;
                }, $debug = 0);
                
                $members = [];
                foreach ($due_members as $key => $due_member) {
                    if (!in_array($due_member['pddt_member_id'], $members)) {
                        array_push($members, $due_member['pddt_member_id']);
                    }
                }

                $get_string = "currentpage=1&rowsperpage=100000&client_id=$account_id";
                $client_members = $ccApi->client_members("members", $get_string = $get_string, function ($members) {
                    return @$members['data'];
                }, $debug = 0);

                $all_members = [];
                foreach ($client_members as $key => $client_member) {
                    if (in_array($client_member['pdm_id'], $members)) {
                        if (!in_array($client_member, $all_members)) {
                            array_push($all_members, $client_member);
                        }
                    }
                }
            }
            function show_record_info($record, $account_id, $ccApi, $title, $class) { ?>
                <a href="#" data-toggle="modal" open-modal--id="due_record-<?= $record['pddt_id']; ?>"
                    open-modal--title="Due Record" open-modal--html='<?php 
                        $created_by = created_by($ccApi, $account_id, $record['pddt_created_by']); 
                        $created_date = $record['pddt_date'];
                        $updated_by = created_by($ccApi, $account_id, $record['pddt_updated_by']); 
                        $updated_date = $record['pddt_update_date']; ?> 
                        <table class="align-middle mb-0 table table-b orderless table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Created By</th>
                                    <td>
                                        <?= !empty($created_by) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?><hr class="m-0">
                                        <u>
                                            <?= $created_date; ?>
                                        </u> <br class="m-0" />
                                        <i><?= timeAgo($created_date); ?></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Last Updated By</th>
                                    <td>
                                        <?= !empty($updated_by) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?><hr class="m-0">
                                        <u>
                                            <?= $updated_date; ?>
                                        </u> <br class="m-0" />
                                        <i><?= timeAgo($updated_date); ?></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <?php
                        if (empty($record['pddt_message'])) { ?>
                            <div class="card my-2">
                                <div class="card-header">No Messages Sent</div>
                            </div>
                        <?php } else { ?>
                            <div class="card my-2">
                                <div class="card-header"><b class="mr-2">Message Subject: </b> <?= $record['pddt_message_subject']; ?></div>
                                <div class="card-body"> <?= multilineText($record['pddt_message']); ?></div>
                                <div class="card-footer"></div>
                            </div>
                        <?php }
                    ?>' open-modal--buttons='
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                    ' class="<?= $class; ?>">
                    <?= $title; ?>
                </a>
            <?php }
            function created_by($ccApi, $account_id, $id) {
                return $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$id,
                    function ($info) {
                        return @$info[0];
                    }
                );
            }
            function timeAgo($date)
            {
                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($date)));
                return $TimeAgo->get();
            }
            function show_paid_by($id, $ccApi) {
                $get_string = "payment_method?id=$id";
                $payment_method = $ccApi->dues($get_string, function($payment_method)
                {
                    return @$payment_method[0]['pddt_method'];
                }, $debug = 0);
                echo empty($payment_method) ? "No Payments Made" : $payment_method;
            }
            function show_status($id, $ccApi) {
                $get_string = "payment_status?id=$id";
                echo $payment_status = $ccApi->dues($get_string, function($payment_status)
                {
                    return @$payment_status[0]['pddt_status'];
                }, $debug = 0);
            }
        ?>
        <pre><?php //print_r($type); ?></pre>
        <div class="card-header h-25">
            <?= $type['pddt_type']; ?> Records
            <div class="btn-actions-pane-right">
                <?php require_once(BASE_DIRECTORY."/dues/forms/filter_members_by_date.php"); ?>
                <?php require_once(BASE_DIRECTORY."/dues/forms/filter_by_member_name.php"); ?>
                <?php require_once(BASE_DIRECTORY."/dues/forms/filter_by_member_method_status.php"); ?>
            </div>
        </div>
        <div class="card-body">            
            <a href="<?= dues_BaseUrl; ?>records?dues=<?= $type['pddt_id']; ?>&make_payment" class="btn btn-secondary shadow m-1">Make Payment</a>          
            <a href="<?= dues_BaseUrl; ?>records?dues=<?= $type['pddt_id']; ?>&message=unpaid" class="btn btn-warning shadow m-1">Message Unpaid Members</a>          
            <a href="<?= dues_BaseUrl; ?>records?dues=<?= $type['pddt_id']; ?>&message=filtered" class="btn btn-primary shadow m-1">Message Filtered Members</a>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($type)) { ?>
                            <h4 class="text-muted">Due Type Does Not Exist.</h4>
                        <?php } else {
                            if (isset($_GET['due_members'])) { ?>
                                <script> __set_cookies__("due_members", '<?= json_encode($_GET['due_members']); ?>', $time = 2); </script>
                            <?php }
                            if (isset($_GET['year_filter_input'])) { ?>
                                <script> __set_cookies__("year_filter_input", "<?= $_GET['year_filter_input']; ?>", $time = 2); </script>
                            <?php }
                            if (isset($_GET['date_filter_input'])) { ?>
                                <script> __set_cookies__("date_filter_input", "<?= $_GET['date_filter_input']; ?>", $time = 2); </script>
                            <?php }
                            if (isset($_GET['payment_method'])) { ?>
                                <script> __set_cookies__("payment_method", "<?= $_GET['payment_method']; ?>", $time = 2); </script>
                            <?php }
                            if (isset($_GET['payment_status'])) { ?>
                                <script> __set_cookies__("payment_status", "<?= $_GET['payment_status']; ?>", $time = 2); </script>
                            <?php }
                            
                            $get_year = (isset($_COOKIE['year_filter_input'])) ? $_COOKIE['year_filter_input'] : date("Y");
                            $get_date = (isset($_COOKIE['date_filter_input'])) ? date("Y-m-d", strtotime($_COOKIE['date_filter_input'])): date("Y-m-d");
                            $get_payment_method = (isset($_COOKIE['payment_method'])) ? (strlen($_COOKIE['payment_method'])==0)? "all" : $_COOKIE['payment_method'] : "all";
                            $get_payment_status = (isset($_COOKIE['payment_status'])) ? (strlen($_COOKIE['payment_status'])==0)? "all" : $_COOKIE['payment_status'] : "all";

                            if (isset($_GET['due_members']) && !empty(@$_GET['due_members'][0])) {
                                $due_records = [];
                                $get_members = (isset($_COOKIE['due_members'])) ? json_decode($_COOKIE['due_members'], 1) : [];
                                foreach ($get_members as $gm_key => $gm) {
                                    $get_string = "record?account_id=$account_id&due_id=".$_GET['dues']."&year=$get_year&date=$get_date&paid_by=$get_payment_method&status=$get_payment_status&member_id=$gm&interval=".$type['pddt_payment_intervals'];
                                    $due_record = $ccApi->dues($get_string, function($due_record)
                                    {
                                        return @$due_record;
                                    }, $debug = 0);
                                    
                                    if (!in_array($due_record, $due_records)) {
                                        array_push($due_records, $due_record);
                                    }
                                }
                            } else {
                                ?>
                                    <script> __set_cookies__("due_members", '[""]', $time = 2); </script>
                                <?php 

                                $get_string = "records?account_id=$account_id&due_id=".$_GET['dues']."&year=$get_year&date=$get_date&paid_by=$get_payment_method&status=$get_payment_status&interval=".$type['pddt_payment_intervals'];
                                $due_records = $ccApi->dues($get_string, function($due_members)
                                {
                                    return @$due_members;
                                }, $debug = 0);
                            }  
                            $DRS = $due_records;
                            $due_records = [];
                            foreach ($DRS as $DR_record_key => $DR) {
                                foreach ($all_members as $key => $am) {
                                    if ($DR['pddt_member_id'] == $am['pdm_id']) {
                                        $due_record = [
                                            "member"=>$am,
                                            "record"=>$DR
                                        ];
                                        if (!in_array($due_record, $due_records)) {
                                            array_push($due_records, $due_record);
                                        }
                                    }
                                }
                            }
                            echo "<pre>";
                            // print_r($_COOKIE);
                            // print_r($due_records);
                            echo "</pre>";
                            if (empty($due_records)) { ?>
                                <h4 class="text-muted">No Due Records.</h4>
                            <?php } else { ?>
                                <table class="align-middle mb-0 table table-b orderless table-bordered table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th style="white-space: nowrap;">Due Records</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                            foreach ($due_records as $due_record_key => $due_record) {
                                                $member = $due_record['member'];
                                                $record = $due_record['record']; ?>
                                                <tr>
                                                    <td class="text-center">
                                                        <?= (int)$due_record_key + 1; ?>
                                                    </td>
                                                    <td class="p-0">
                                                        <table class="table table-sm table-bordered table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th><?= $member['pdm_firstname']; ?> <?= $member['pdm_surname']; ?></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><b>Expected Due:</b> <?= $type['pddt_currency']; ?> <?= $type['pddt_amount']; ?></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Due Paid:</b> <?= $type['pddt_currency']; ?> <?= $record['pddt_amount_paid']; ?></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Date:</b> <?= date("Y-m-d", strtotime($record['pddt_date'])); ?></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <b>Dues Arrears:</b> 
                                                                        <?= $type['pddt_currency']; ?> 
                                                                        <?= floatval($type['pddt_amount'])-floatval($record['pddt_amount_paid']); ?>
                                                                        <span class="badge badge-info p-2 shadow bg-night-sky">
                                                                            <?= show_paid_by($record['pddt_paid_by'], $ccApi); ?>
                                                                        </span> 
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="container">
                                                                            <div class="row">
                                                                                <div class="col-md-4">
                                                                                    <span class="badge badge-info p-2 btn-block bt n-sm my-1 shadow bg-grow-early">
                                                                                        <?= show_status($record['pddt_status'], $ccApi); ?>
                                                                                    </span> 
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <?= show_record_info(@$record, $account_id, $ccApi,
                                                                                        '<span class="font-weight-bold">View Info</span>',
                                                                                        "btn btn-warning btn-block btn-sm my-1"
                                                                                    ); ?>
                                                                                </div>
                                                                                <div class="col-md-4 d-flex px-0">
                                                                                    <a href="<?= dues_BaseUrl; ?>records?dues=<?= $type['pddt_id']; ?>&member=<?= $member['pdm_id']; ?>&record=<?= $record['pddt_id']; ?>" class="btn btn-info w-50 mr-1 btn-sm my-1 px-1" type="button">
                                                                                        <span class="font-weight-bold">Update</span>
                                                                                    </a>
                                                                                    <button type="button" style="white-space: nowrap" class="btn my-1 btn-danger btn-sm w-50 ml-1"
                                                                                        btn-submit-post=<?= json_encode(["record_id"=>$record['pddt_id'], "member_id"=>$member['pdm_id'], "due_id"=>$type['pddt_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                                                       btn-submit-post--confirm="Delete Payment Record?"
                                                                                        btn-submit-post--url="<?= API_BASE_URL."dues/clients/due-record/delete"; ?>">
                                                                                        Delete <span class="pe-7s-trash"></span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            <?php }
                                        ?>
                                    </tbody>
                                </table>
                            <?php }
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
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
        ?>
        <pre><?php //print_r($type); ?></pre>
        <div class="card-header h-25">
            Make Payment For <?= $type['pddt_type']; ?> Due
        </div>
        <div class="card-body">            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($type)) { ?>
                            <h4 class="text-muted">Due Type Does Not Exist.</h4>
                        <?php } else {
                            $get_year = (isset($_COOKIE['year_filter_input'])) ? $_COOKIE['year_filter_input'] : date("Y");
                            $get_date = (isset($_COOKIE['date_filter_input'])) ? date("Y-m-d", strtotime($_COOKIE['date_filter_input'])): date("Y-m-d");
                            $get_payment_method = (isset($_COOKIE['payment_method'])) ? $_COOKIE['payment_method']: "all";
                            $get_payment_status = (isset($_COOKIE['payment_status'])) ? $_COOKIE['payment_status']: "all";
                            
                            $get_string = @"record_id?account_id=$account_id&due_id=".$_GET['dues']."&year=$get_year&date=$get_date&paid_by=$get_payment_method&status=$get_payment_status&member_id=".$_GET['member']."&record_id=".$_GET['record']."&interval=".$type['pddt_payment_intervals'];
                            $due_record = $ccApi->dues($get_string, function($due_record)
                            {
                                return @$due_record;
                            }, $debug = 0);
                            $member_info = [];
                            foreach ($all_members as $key => $am) {
                                if ($_GET['member'] == $am['pdm_id']) {
                                    $member_info = $am;
                                }
                            }
                            if (empty($due_record)) { ?>
                                <h4 class="text-muted">Record Does Not Exist.</h4>
                            <?php } else {
                                ?> <h5 class="card-title"><?= @$member_info['pdm_firstname']; ?> <?= @$member_info['pdm_surname']; ?>'s Record</h5> <?php 
                                require_once(BASE_DIRECTORY."/dues/forms/records/due_record_update.php");
                            }
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
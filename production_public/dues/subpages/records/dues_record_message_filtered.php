<?php
    // use Encryptor\Encryptor;

    // $encryptor = new Encryptor("members", md5("members"));
    // $member_id = (int)$encryptor->decrypt(@$_GET['member']);

    $message_types = $ccApi->message_types(function($message_types)
    {
        return $message_types;
    }, $debug = false);
    
?>
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
        <div class="card-header-tab card-header-tab-animation card-header h-25">
            <div class="card-header-title">
                <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Send Message.
            </div>
            <div class="btn-actions-pane-right px-1">
                <div class="btn-group-sm nav btn-group" role="group">
                    <?php
                        foreach ($message_types as $ms_key => $ms) { 
                            if ($ms['pdccmc_id'] != 1) {
                                $active = ($ms_key == 1) ? "active" : ""; ?>
                                <a class="btn-shadow btn btn-primary show <?= $active; ?>" href="#show_compose_form_<?= (int)$ms_key+1; ?>" data-toggle="tab"><?= @$ms['pdccmc_type']; ?></a>
                            <?php }
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-body">            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        
                    ?>
                </div>
            </div>
            <div class="tab-content">
                <?php
                    if (empty($type)) { ?>
                        <h4 class="text-muted">Due Type Does Not Exist.</h4>
                    <?php } else {
                        $get_year = (isset($_COOKIE['year_filter_input'])) ? $_COOKIE['year_filter_input'] : date("Y");
                        $get_date = (isset($_COOKIE['date_filter_input'])) ? date("Y-m-d", strtotime($_COOKIE['date_filter_input'])): date("Y-m-d");
                        $get_payment_method = (isset($_COOKIE['payment_method'])) ? (strlen($_COOKIE['payment_method'])==0)? "all" : $_COOKIE['payment_method'] : "all";
                        $get_payment_status = (isset($_COOKIE['payment_status'])) ? (strlen($_COOKIE['payment_status'])==0)? "all" : $_COOKIE['payment_status'] : "all";
                        
                        $get_string = @"records?account_id=$account_id&due_id=".$_GET['dues']."&year=$get_year&date=$get_date&paid_by=$get_payment_method&status=$get_payment_status&interval=".$type['pddt_payment_intervals'];
                        $due_records = $ccApi->dues($get_string, function($due_records)
                        {
                            return @$due_records;
                        }, $debug = 0);

                        $DRS = [];
                        $filtered = [];
                        foreach ($due_records as $due_record_key => $due_record) {
                            if (!in_array($due_record['pddt_member_id'], $DRS)) {
                                array_push($DRS, $due_record['pddt_member_id']);
                            }
                        }

                        foreach ($all_members as $key => $am) {
                            if (in_array($am['pdm_id'], $DRS)) {
                                if (!in_array($am, $filtered)) {
                                    array_push($filtered, $am);
                                }
                            }
                        }
                        
                        if (empty($filtered)) { ?>
                            <h4 class="text-muted">No Members Found</h4>
                        <?php } else { ?>
                            <h4 class="text-muted card-title mb-0">
                                <b>Year:</b> <?= $get_year; ?> | <b>Date:</b> <?= $get_date; ?> | <b>Payment Method:</b> <?= $get_payment_method; ?> | <b>Payment Status:</b> <?= $get_payment_status; ?>
                            </h4><hr class="my-2"> <?php
                            $message_members = $filtered;
                            foreach ($message_types as $ms_key => $ms) { 
                                if ($ms['pdccmc_id'] != 1) {
                                    $active = ($ms_key == 1) ? "active" : "";
                                    $form = str_replace("-", "", strtolower($ms['pdccmc_type'])); ?>
                                    <div class="tab-pane show  <?= $active; ?> p-0" id="show_compose_form_<?= (int)$ms_key+1; ?>" role="tabpanel">
                                        <?php require_once BASE_DIRECTORY."/communications/forms/compose/dues/members_".$form.".php"; ?>
                                    </div>
                                <?php }
                            }
                        }
                    }
                ?>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
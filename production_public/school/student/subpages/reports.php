<?php
    $member_id = isset($_GET["student"]) ? $_GET["student"] : "";
    $member_id = $encryptor->decrypt($member_id);
    $get_string = "student/report?client_id=$account_id&member_id=$member_id";
    $student_reports = $ccApi->school($get_string, function($student_reports)
    {
        return (isset($student_reports['error'])) ? "Enter Student Name/ Index Number" : @$student_reports;
    }, $debug = false);
    // print_r($member);
    if (empty($student_reports)) { ?>
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            No Records Found
        </div>
    <?php } else { ?>
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            <div class="btn-actions-pane-right">
                <div class="btn-group-sm nav btn-group" role="group">
                    <a class="btn-shadow btn btn-info show active" href="#report_data_info_tab" data-toggle="tab">Reports</a>
                    <a class="btn-shadow btn btn-success" href="<?= schoolStudent_BaseUrl; ?>">Reset Data</a>
                    <a class="btn-shadow btn btn-warning show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_report_data")) ? " active" : ""; ?>" href="#edit_report_data_tab" data-toggle="tab">Create Student Report</a>
                </div>
            </div>
        </div>
        <div class="card-body p-0 mb-4">
            <div class="tab-content">
                <div class="tab-pane show active" id="report_data_info_tab" role="tabpanel">
                    <?php
                        if (is_array($student_reports)) { ?>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-6">
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
                                                <?php foreach ($student_reports as $student_report_key => $student_report) {
                                                    $data = $student_report['data'];
                                                    $report = $student_report['report'];
                                                    $member_id = $report['pdsc_member_id'];
                                                    $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
                                                        return $members;
                                                    }, $debug = 0); 
                                                    if (!empty($report)) {
                                                        $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$report['_date_'])));

                                                        $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$report['pdsc_created_by'],
                                                        function ($info) {
                                                            return @$info[0];
                                                        });

                                                        $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$report['_update_date_'])));

                                                        $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$report['pdsc_updated_by'],
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
                                                                                $get_string = "class/class?client_id=$account_id&id=".$report['pdsc_class_id'];
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
                                                                                $get_string = "term?client_id=$account_id&id=".$report['pdsc_term'];
                                                                                echo $class = $ccApi->school($get_string, function($class)
                                                                                {
                                                                                    return @$class[0]['pdsc_term'];
                                                                                }, $debug = false);
                                                                            ?>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th><b>Year: </b> 
                                                                            <?= $report['pdsc_year']; ?>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th class="p-1">
                                                                            <?= show_report_btn($report, @$data['record'], $account_id, $user_id, $ccApi, "mx-0 ml-1 btn btn-sm btn-success shadow"); ?>
                                                                            <?= show_info_btn($report, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "mx-0 ml-1 btn btn-sm btn-info shadow"); ?>
                                                                            <?= edit_btn($report, $account_id, $user_id, "Edit This Report Record", $ccApi, "btn btn-sm mx-0 ml-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                                                                            <?php 
                                                                                $report_id = $report['pdsc_id']; 
                                                                                delete_btn($report_id, $member_id, $account_id, $user_id, "mx-0 ml-1 btn btn-sm btn-danger shadow"); 
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
                            <h5 class="card-title text-muted mt-3 ml-3"><?= $student_reports; ?></h5>
                        <?php }
                    ?>
                </div>
                <div class="tab-pane show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_report_data")) ? " active" : ""; ?>" id="edit_report_data_tab" role="tabpanel">
                    <h4 class="card-title p-3">Create Report</h4>
                    <div class="container">
                        <?php require_once BASE_DIRECTORY.'/school/student/forms/student_reports-create_form.php'; ?>
                    </div>
                </div>
            </div>
        </div>
    <?php }
?>

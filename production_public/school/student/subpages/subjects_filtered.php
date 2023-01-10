<?php
    $get_member = (isset($_GET['member'])) ? (($_GET['member'] == "all") ? $_GET['member'] : $encryptor->decrypt($_GET['member'])) : "all";
    $get_subject = (isset($_GET['subject'])) ? $_GET['subject'] : "all";
    $get_class = (isset($_GET['class'])) ? $_GET['class'] : "all";
    $get_year = (isset($_GET['years'])) ? $_GET['years'] : date("Y");

    $get_string = "subject/students?client_id=$account_id&subject_id=$get_subject&class_id=$get_class&member_id=$get_member&year=$get_year";
    $student_subjects = $ccApi->school($get_string, function($student_subjects)
    {
        return @$student_subjects;
    }, $debug = false);
?>
<div class="card-header py-1">
    <div class="btn-actions-pane-right shadow shadow-sm">
        <div class="btn-group-sm nav btn-group" role="group">
            <a class="btn-shadow btn btn-info show active" href="#subject_data_info_tab" data-toggle="tab">Student Subjects</a>
            <a class="btn-shadow btn btn-warning show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_subject_data")) ? " active" : ""; ?>" href="#edit_subject_data_tab" data-toggle="tab">Assign Student Subjects</a>
        </div>
    </div>
</div>
<div class="card-body p-0 mb-4">
    <div class="tab-content">
        <div class="tab-pane show active" id="subject_data_info_tab" role="tabpanel">
            <div class="card-header h-25"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                Subjects
                <div class="btn-actions-pane-right">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <?php require_once BASE_DIRECTORY."/school/student/forms/filter_data.php"; ?>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <?php
                    if (empty($student_subjects)) { ?>
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
                                        <?php foreach ($student_subjects as $student_subject_key => $student_subject) {
                                            $member_id = $student_subject['pdsc_member_id'];
                                            $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
                                                return $members;
                                            }, $debug = 0); 
                                            if (!empty($student_subject)) {
                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$student_subject['_date_'])));

                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$student_subject['pdsc_created_by'],
                                                function ($info) {
                                                    return @$info[0];
                                                });

                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$student_subject['_update_date_'])));

                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$student_subject['pdsc_updated_by'],
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
                                                                        $get_string = "class/class?client_id=$account_id&id=".$student_subject['pdsc_class_id'];
                                                                        echo $class = $ccApi->school($get_string, function($class)
                                                                        {
                                                                            return @$class[0]['pdsc_class'];
                                                                        }, $debug = false);
                                                                    ?>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th><b>Subject: </b> 
                                                                    <?php
                                                                        $get_string = "subject/subject?client_id=$account_id&id=".$student_subject['pdsc_subject_id'];
                                                                        echo $class = $ccApi->school($get_string, function($class)
                                                                        {
                                                                            return @$class[0]['pdsc_subject'];
                                                                        }, $debug = false);
                                                                    ?>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th><b>Year: </b> 
                                                                    <?= $student_subject['pdsc_year']; ?>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    <?= show_info_btn($student_subject, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                    <?php /* edit_btn($student_subject, $account_id, $user_id, "Edit This Subject Record", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm");*/ ?>
                                                                    <?php 
                                                                        $student_subject_id = $student_subject['pdsc_id']; 
                                                                        delete_btn($student_subject_id, $member_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
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
        <div class="tab-pane show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_subject_data")) ? " active" : ""; ?>" id="edit_subject_data_tab" role="tabpanel">
            <h4 class="card-title p-3">Assign Subject</h4>
            <div class="container">
                <?php require_once BASE_DIRECTORY.'/school/student/forms/subject-create_form.php'; ?>
            </div>
        </div>
    </div>
</div>
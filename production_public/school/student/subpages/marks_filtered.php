<?php
    $get_member = (isset($_GET['member'])) ? (($_GET['member'] == "all") ? $_GET['member'] : $encryptor->decrypt($_GET['member'])) : "all";
    $get_class = (isset($_GET['class'])) ? $_GET['class'] : "all";
    $get_year = (isset($_GET['years'])) ? $_GET['years'] : date("Y");

    $get_string = "subject/marks?client_id=$account_id&class_id=$get_class&member_id=$get_member&year=$get_year";
    $student_marks = $ccApi->school($get_string, function($student_marks)
    {
        return @$student_marks;
    }, $debug = 0);
?>
<div class="card-body p-0 mb-4">
    <div class="tab-content">
        <div class="container">
            <div class="card-header h-25"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                Marks
                <div class="btn-actions-pane-right">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <?php require_once BASE_DIRECTORY."/school/student/forms/filter_data.php"; ?>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <?php
                    if (empty($student_marks)) { ?>
                        <div class="col-md-12 col-lg-12 m-3">
                            <h5 class="card-title m-0 p-3 py-0">No Records Found</h5>
                        </div>
                    <?php } else {
                        // $member_subjects = [];
                        // foreach ($student_marks as $key => $student_mark) {
                        //     $subject = $student_mark['subject'];
                        // } ?>
                        <pre><?php //print_r($student_marks); ?></pre>
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
                                        <?php foreach ($student_marks as $student_mark_key => $student_mark) {
                                            $records = $student_mark['record'];
                                            $member_id = $student_mark['member'];
                                            $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
                                                return $members;
                                            }, $debug = 0); ?>
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
                                                                <th><b>Year: </b> 
                                                                    <?= @$records[0]['subject']['pdsc_year']; ?>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    <?php show_marks_btn($records, $account_id, $user_id, $ccApi, $tf, "m-1 btn btn-sm btn-info shadow"); ?>
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
    </div>
</div>
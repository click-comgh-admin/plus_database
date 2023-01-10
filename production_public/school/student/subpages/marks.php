<?php
    $member_id = isset($_GET["student"]) ? $_GET["student"] : "";
    $member_id = $encryptor->decrypt($member_id);
    $get_string = "subject/mark?client_id=$account_id&member_id=$member_id";
    $student_marks = $ccApi->school($get_string, function($student_marks)
    {
        return (isset($student_marks['error'])) ? "Enter Student Name/ Index Number" : @$student_marks;
    }, $debug = false);
    // print_r($student_marks);
    if (empty($student_marks)) { ?>
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            No Records Found
        </div>
    <?php } else { ?>
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            <div class="btn-actions-pane-right">
                <div class="btn-group-sm nav btn-group" role="group">
                    <a class="btn-shadow btn btn-success" href="<?= schoolStudent_BaseUrl; ?>">Reset Data</a>
                </div>
            </div>
        </div>
        <div class="card-body p-0 mb-4">
            <div class="tab-content">
                <div class="container">
                    <?php
                        if (is_array($student_marks)) { ?>
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
                            </div>
                        <?php } else { ?>
                            <h5 class="card-title text-muted mt-3 ml-3"><?= $student_marks; ?></h5>
                        <?php }
                    ?>
                </div>
            </div>
        </div>
    <?php }
?>

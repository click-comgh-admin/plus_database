<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Subject(s)");
    define('PAGE_DESC', "View All Subjects");
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
                                        <i class="pe-7s-menu icon-gradient bg-love-kiss">
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
                            define("school_BaseUrl", CLIENT_BASE_URL."school/");
                            
                            $get_string = "subject/subjects?client_id=$account_id";
                            $subjects = $ccApi->school($get_string, function($subjects)
                            {
                                return @$subjects;
                            }, $debug = false);
                            
                            function edit_btn($subjectInfo, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_class-<?= $subjectInfo['pdsc_id']; ?>-<?= $type; ?>"
                                    open-modal--title="Edit Subject" open-modal--html='<?php 
                                        $subject_id = $subjectInfo['pdsc_id']; 
                                        $subject_name = $subjectInfo['pdsc_subject']; 
                                        require 'forms/settings/subject-edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }
                        
                            function show_info_btn($subjectInfo, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="info_class-<?= $subjectInfo['pdsc_id']; ?>" open-modal--title="Subject Info"
                                    open-modal--html='<?php 
                                        $created_by = !empty($subjectInfo['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                        $date = date('Y/ m/ d', strtotime(@$subjectInfo['_date_']));
                                        $timeAgo = !empty($subjectInfo) ? @$TimeAgo->get(): "-";
                        
                                        $updated_by = !empty($subjectInfo['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                        $updated_date = date('Y/ m/ d', strtotime(@$subjectInfo['_update_date_']));
                                        $updated_timeAgo = !empty($subjectInfo) ? @$updated_TimeAgo->get(): "-";
                        
                                        show_info(
                                            $created_by = $created_by, $date = $date, $timeAgo = $timeAgo,
                                            $updated_by = $updated_by, $updated_date = $updated_date,
                                            $updated_timeAgo = $updated_timeAgo
                                        ); 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-info"></span>
                                    <span class="d-none d-sm-block">Info</span>
                                </button>
                            <?php }
                        
                            function show_info($created_by, $date, $timeAgo, $updated_by, $updated_date, $updated_timeAgo) { ?>
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
                        
                            function delete_btn($subject_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["subject_id"=>$subject_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Subject?"
                                    btn-submit-post--url="<?= API_BASE_URL."school/clients/subject/delete"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-block">Delete</span>
                                </button>
                            <?php }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Create Subject</h5>
                                        <?php require 'forms/settings/subject-create_form.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Subjects</h5>
                                        <div class="d-none d-lg-block table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">Subject</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                        <th style="white-space: nowrap;">By</th>
                                                        <th style="white-space: nowrap;">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($subjects as $key => $subject) { 
                                                            if (!empty($subject)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subject['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subject['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subject['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subject['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;">
                                                                    <?= $subject['pdsc_subject']; ?>
                                                                </td>
                                                                <td style="white-space: nowrap;" class="text-center">
                                                                    <?= edit_btn($subject, $account_id, $user_id, "Edit Subject", "ml-2 p-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                    <?php 
                                                                        $subject_id = $subject['pdsc_id']; 
                                                                        delete_btn($subject_id, $account_id, $user_id, "ml-2 p-1 btn btn-sm btn-danger shadow"); 
                                                                    ?>
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Created By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($subject['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Updated By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($subject['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Creation Time</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$subject['_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($subject) ? @$TimeAgo->get(): "-"; ?></i>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Update Time</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$subject['_update_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($subject) ? @$updated_TimeAgo->get(): "-"; ?></i>
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
                                        </div>
                                        <div class="d-block d-lg-none table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">Subject</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($subjects as $key => $subject) { 
                                                            if (!empty($subject)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subject['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subject['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subject['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subject['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;"><?= $subject['pdsc_subject']; ?></td>
                                                                <td class="text-center">
                                                                    <?= show_info_btn($subject, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                    <?= edit_btn($subject, $account_id, $user_id, "Edit This Subject", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                                                                    <?php 
                                                                        $subject_id = $subject['pdsc_id']; 
                                                                        delete_btn($subject_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
                                                                    ?>
                                                                </td>
                                                            </tr>
                                                        <?php }
                                                    ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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
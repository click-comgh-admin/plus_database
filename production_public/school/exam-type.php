<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Exam Type(s)");
    define('PAGE_DESC', "View All Exam Types");
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
                            // if ($account_status['is_active'] === false) {
                            //     require_once '../assets/php/page_components/account_inactive.php';
                            //     require_once '../assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            // $_appPage = 0;
                            // foreach ($appPages as $key => $page) {
                            //     if ((string)strtolower($page['pdpc_page']) === "school") {
                            //         $_appPage = $page['pdpc_id'];
                            //     }
                            // }
                            // if (in_array($_appPage, $my_access_levels) === false) {
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            define("school_BaseUrl", CLIENT_BASE_URL."school/");
                            
                            $get_string = "exam_types?client_id=$account_id";
                            $exam_types = $ccApi->school($get_string, function($exam_types)
                            {
                                return @$exam_types;
                            }, $debug = false);
                            
                            function edit_btn($examInfo, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_class-<?= $examInfo['pdsc_id']; ?>-<?= $type; ?>"
                                    open-modal--title="Edit Exam Type" open-modal--html='<?php 
                                        $exam_type_id = $examInfo['pdsc_id']; 
                                        $exam_type_name = $examInfo['pdsc_exam_type']; 
                                        require 'forms/settings/exam_type-edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }
                        
                            function show_info_btn($examInfo, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="info_class-<?= $examInfo['pdsc_id']; ?>" open-modal--title="Exam Type Info"
                                    open-modal--html='<?php 
                                        $created_by = !empty($examInfo['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                        $date = date('Y/ m/ d', strtotime(@$examInfo['_date_']));
                                        $timeAgo = !empty($examInfo) ? @$TimeAgo->get(): "-";
                        
                                        $updated_by = !empty($examInfo['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                        $updated_date = date('Y/ m/ d', strtotime(@$examInfo['_update_date_']));
                                        $updated_timeAgo = !empty($examInfo) ? @$updated_TimeAgo->get(): "-";
                        
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
                        
                            function delete_btn($exam_type_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["exam_type_id"=>$exam_type_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Exam Type?"
                                    btn-submit-post--url="<?= API_BASE_URL."school/clients/delete_exam_type"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-block">Delete</span>
                                </button>
                            <?php }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Create Exam Type</h5>
                                        <?php require 'forms/settings/exam_type-create_form.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Exam Types</h5>
                                        <div class="d-none d-lg-block table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">Exam Type</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                        <th style="white-space: nowrap;">By</th>
                                                        <th style="white-space: nowrap;">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($exam_types as $key => $exam_type) { 
                                                            if (!empty($exam_type)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$exam_type['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$exam_type['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$exam_type['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$exam_type['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;">
                                                                    <?= $exam_type['pdsc_exam_type']; ?>
                                                                </td>
                                                                <td style="white-space: nowrap;" class="text-center">
                                                                    <?= edit_btn($exam_type, $account_id, $user_id, "Edit Exam Type", "ml-2 p-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                    <?php 
                                                                        $exam_type_id = $exam_type['pdsc_id']; 
                                                                        delete_btn($exam_type_id, $account_id, $user_id, "ml-2 p-1 btn btn-sm btn-danger shadow"); 
                                                                    ?>
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Created By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($exam_type['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Updated By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($exam_type['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?>
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
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$exam_type['_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($exam_type) ? @$TimeAgo->get(): "-"; ?></i>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Update Time</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$exam_type['_update_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($exam_type) ? @$updated_TimeAgo->get(): "-"; ?></i>
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
                                                        <th style="white-space: nowrap;">Exam Type</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($exam_types as $key => $exam_type) { 
                                                            if (!empty($exam_type)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$exam_type['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$exam_type['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$exam_type['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$exam_type['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;"><?= $exam_type['pdsc_exam_type']; ?></td>
                                                                <td class="text-center">
                                                                    <?= show_info_btn($exam_type, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                    <?= edit_btn($exam_type, $account_id, $user_id, "Edit This Exam Type", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                                                                    <?php 
                                                                        $exam_type_id = $exam_type['pdsc_id']; 
                                                                        delete_btn($exam_type_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
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
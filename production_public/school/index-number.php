<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Index Number(s)");
    define('PAGE_DESC', "View All Index Numbers");
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
                            
                            $get_string = "student/index_numbers?client_id=$account_id";
                            $index_numbers = $ccApi->school($get_string, function($index_numbers)
                            {
                                return @$index_numbers;
                            }, $debug = false);
                            
                            function edit_btn($indexInfo, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_class-<?= $indexInfo['pdsc_id']; ?>-<?= $type; ?>"
                                    open-modal--title="Edit Index Number" open-modal--html='<?php 
                                        $index_number_id = $indexInfo['pdsc_id']; 
                                        $index_number_name = $indexInfo['pdsc_index_number']; 
                                        require 'forms/settings/index_number-edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }
                        
                            function show_info_btn($indexInfo, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="info_class-<?= $indexInfo['pdsc_id']; ?>" open-modal--title="Index Number Info"
                                    open-modal--html='<?php 
                                        $created_by = !empty($indexInfo['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                        $date = date('Y/ m/ d', strtotime(@$indexInfo['_date_']));
                                        $timeAgo = !empty($indexInfo) ? @$TimeAgo->get(): "-";
                        
                                        $updated_by = !empty($indexInfo['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                        $updated_date = date('Y/ m/ d', strtotime(@$indexInfo['_update_date_']));
                                        $updated_timeAgo = !empty($indexInfo) ? @$updated_TimeAgo->get(): "-";
                        
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
                        
                            function delete_btn($index_number_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["index_number_id"=>$index_number_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Index Number?"
                                    btn-submit-post--url="<?= API_BASE_URL."school/clients/student/index-number/delete"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-block">Delete</span>
                                </button>
                            <?php }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Create Index Number</h5>
                                        <?php require 'forms/settings/index_number-create_form.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Index Numbers</h5>
                                        <div class="d-none d-lg-block table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">Index Number</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                        <th style="white-space: nowrap;">By</th>
                                                        <th style="white-space: nowrap;">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($index_numbers as $key => $index_number) { 
                                                            if (!empty($index_number)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$index_number['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$index_number['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$index_number['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$index_number['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;">
                                                                    <?= $index_number['pdsc_index_number']; ?>
                                                                </td>
                                                                <td style="white-space: nowrap;" class="text-center">
                                                                    <?= edit_btn($index_number, $account_id, $user_id, "Edit Index Number", "ml-2 p-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                    <?php 
                                                                        $index_number_id = $index_number['pdsc_id']; 
                                                                        delete_btn($index_number_id, $account_id, $user_id, "ml-2 p-1 btn btn-sm btn-danger shadow"); 
                                                                    ?>
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Created By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($index_number['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Updated By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($index_number['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?>
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
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$index_number['_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($index_number) ? @$TimeAgo->get(): "-"; ?></i>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Update Time</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$index_number['_update_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($index_number) ? @$updated_TimeAgo->get(): "-"; ?></i>
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
                                                        <th style="white-space: nowrap;">Index Number</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($index_numbers as $key => $index_number) { 
                                                            if (!empty($index_number)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$index_number['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$index_number['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$index_number['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$index_number['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;"><?= $index_number['pdsc_index_number']; ?></td>
                                                                <td class="text-center">
                                                                    <?= show_info_btn($index_number, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                    <?= edit_btn($index_number, $account_id, $user_id, "Edit This Index Number", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                                                                    <?php 
                                                                        $index_number_id = $index_number['pdsc_id']; 
                                                                        delete_btn($index_number_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
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
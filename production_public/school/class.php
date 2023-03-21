<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Class(es)");
    define('PAGE_DESC', "View All Classes");
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
                            
                            $get_string = "class/classes?client_id=$account_id";
                            $classes = $ccApi->school($get_string, function($classes)
                            {
                                return @$classes;
                            }, $debug = false);

                            function show_subclasses($class, $account_id, $ccApi) { ?>
                                <a href="#" data-toggle="modal" open-modal--id="subclasses-<?= $class['pdsc_id']; ?>"
                                    open-modal--title="<?= $class['pdsc_class']; ?> Sub-Classes" open-modal--html='<?php 
                                        $class_id = $class['pdsc_id']; 

                                        $get_string = "class/subclasses?client_id=$account_id&class_id=$class_id";
                                        $subclasses = $ccApi->school($get_string, function($subclasses)
                                        {
                                            return @$subclasses;
                                        }, $debug = false);
                        
                                        if (!empty($subclasses)) {
                                            $subclassList = '<ul class="d-block">';
                                            foreach ($subclasses as $key => $subclass) {                                
                                                $subclassList .= '<li>'.@$subclass['pdsc_subclass'].'</li>';
                                            }
                                            echo $subclassList .= '</ul>';
                                        } else {
                                            echo "No Sub-Class(es) Created";
                                        }
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <?= $class['pdsc_class']; ?>
                                </a>
                            <?php }
                            
                            function edit_btn($classInfo, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_class-<?= $classInfo['pdsc_id']; ?>-<?= $type; ?>"
                                    open-modal--title="Edit Class" open-modal--html='<?php 
                                        $class_id = $classInfo['pdsc_id']; 
                                        $class_name = $classInfo['pdsc_class']; 
                                        require 'forms/classes.subclasses/class-edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }
                        
                            function show_info_btn($classInfo, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="info_class-<?= $classInfo['pdsc_id']; ?>" open-modal--title="Class Info"
                                    open-modal--html='<?php 
                                        $created_by = !empty($classInfo['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                        $date = date('Y/ m/ d', strtotime(@$classInfo['_date_']));
                                        $timeAgo = !empty($classInfo) ? @$TimeAgo->get(): "-";
                        
                                        $updated_by = !empty($classInfo['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                        $updated_date = date('Y/ m/ d', strtotime(@$classInfo['_update_date_']));
                                        $updated_timeAgo = !empty($classInfo) ? @$updated_TimeAgo->get(): "-";
                        
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
                        
                            function delete_btn($class_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["class_id"=>$class_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Class?"
                                    btn-submit-post--url="<?= API_BASE_URL."school/clients/class/delete"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-block">Delete</span>
                                </button>
                            <?php }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Create Class</h5>
                                        <?php require_once 'forms/classes.subclasses/class-create_form.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Class</h5>
                                        <div class="d-none d-lg-block table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">Class</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                        <th style="white-space: nowrap;">By</th>
                                                        <th style="white-space: nowrap;">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($classes as $key => $class) { 
                                                            if (!empty($class)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$class['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$class['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$class['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$class['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;">
                                                                    <?= show_subclasses($class, $account_id, $ccApi); ?>
                                                                </td>
                                                                <td style="white-space: nowrap;" class="text-center">
                                                                    <?= edit_btn($class, $account_id, $user_id, "Edit Class", "ml-2 p-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                    <?php 
                                                                        $class_id = $class['pdsc_id']; 
                                                                        delete_btn($class_id, $account_id, $user_id, "ml-2 p-1 btn btn-sm btn-danger shadow"); 
                                                                    ?>
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Created By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($class['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Updated By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($class['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?>
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
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$class['_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($class) ? @$TimeAgo->get(): "-"; ?></i>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Update Time</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$class['_update_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($class) ? @$updated_TimeAgo->get(): "-"; ?></i>
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
                                                        <th style="white-space: nowrap;">Class</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($classes as $key => $class) { 
                                                            if (!empty($class)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$class['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$class['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$class['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$class['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;"><?= show_subclasses($class, $account_id, $ccApi); ?></td>
                                                                <td class="text-center">
                                                                    <?= show_info_btn($class, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                    <?= edit_btn($class, $account_id, $user_id, "Edit This Class", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                                                                    <?php 
                                                                        $class_id = $class['pdsc_id']; 
                                                                        delete_btn($class_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
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
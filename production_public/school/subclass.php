<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Sub-Class(es)");
    define('PAGE_DESC', "View All Sub-Classes Belonging To Created Classes");
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
                            
                            $get_string = "class/classes?client_id=$account_id";
                            $subclassesList = $ccApi->school($get_string, function($classes) use($ccApi, $account_id) {
                                $subclassesList = [];
                                foreach ($classes as $class_key => $class) {
                                    $get_string = "class/subclasses?client_id=$account_id&class_id=".$class['pdsc_id'];
                                    $subclasses = $ccApi->school($get_string, function($classes) {
                                        return $classes;
                                    });
                                    $data = ["class" => $class, "subclasses" => $subclasses];
                                    if (!in_array($data, $subclassesList)) {
                                        array_push($subclassesList, $data);
                                    }
                                }
                                return @$subclassesList;
                            }, $debug = false);
                            // print_r($subclassesList);

                            function show_subclasses($class, $account_id, $ccApi) { ?>
                                <a href="#" data-toggle="modal" open-modal--id="subclasses-<?= $class['pdsc_id']; ?>"
                                    open-modal--title="<?= $class['pdsc_class']; ?> Sub-Classes" open-modal--html='<?php 
                                        $class_id = $class['pdsc_id']; 
                                        
                                        $get_string = "class/subclasses?client_id=$account_id&class_id=$class_id";
                                        $subclasses = $ccApi->school($get_string, function($classes) {
                                            return $classes;
                                        });
                        
                                        if (!empty($subclasses)) {
                                            $subclassesList = '<ul class="d-block">';
                                            foreach ($subclasses as $key => $subclass) {                                
                                                $subclassesList .= '<li>'.@$subclass['pdsc_subclass'].'</li>';
                                            }
                                            echo $subclassesList .= '</ul>';
                                        } else {
                                            echo "No Sub-Class(es) Created";
                                        }
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <?= $class['pdsc_class']; ?>
                                </a>
                            <?php }
                            
                            function edit_btn($classInfo, $subclass, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_class-<?= $classInfo['pdsc_id']; ?>-<?= $type; ?>-<?= $subclass['pdsc_id']; ?>"
                                    open-modal--title="Edit Sub-Class of [<?= $classInfo['pdsc_class']; ?>]" open-modal--html='<?php 
                                        $class_id = $classInfo['pdsc_id']; 
                                        $class_name = $classInfo['pdsc_class']; 
                                        $subclass_id = $subclass['pdsc_id']; 
                                        $subclass_name = $subclass['pdsc_subclass']; 
                                        require 'forms/classes.subclasses/subclass-edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }
                        
                            function show_info_btn($classInfo, $class_TimeAgo, $class_created_by, $class_updated_TimeAgo, $class_updated_by, $subclass, $created_by, $updated_TimeAgo, $updated_by, $TimeAgo, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="info_subclass-<?= $classInfo['pdsc_id']; ?>-<?= $subclass['pdsc_id']; ?>" open-modal--title="Sub-Class Info"
                                    open-modal--html='<?php 
                                        $created_by = !empty($subclass['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                        $date = date('Y/ m/ d', strtotime(@$subclass['_date_']));
                                        $timeAgo = !empty($subclass) ? @$TimeAgo->get(): "-";
                        
                                        $updated_by = !empty($subclass['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                        $updated_date = date('Y/ m/ d', strtotime(@$subclass['_update_date_']));
                                        $updated_timeAgo = !empty($subclass) ? @$updated_TimeAgo->get(): "-";
                        
                                        $class_created_by = !empty($classInfo['pdsc_created_by']) ? @$class_created_by['pdcu_firstname'] ." ". @$class_created_by['pdcu_surname']: "-";
                                        $class_date = date('Y/ m/ d', strtotime(@$classInfo['_date_']));
                                        $class_timeAgo = !empty($classInfo) ? @$class_TimeAgo->get(): "-";
                        
                                        $class_updated_by = !empty($classInfo['pdsc_created_by']) ? @$class_updated_by['pdcu_firstname'] ." ". @$class_updated_by['pdcu_surname']: "-";
                                        $class_updated_date = date('Y/ m/ d', strtotime(@$classInfo['_update_date_']));
                                        $class_updated_timeAgo = !empty($classInfo) ? @$class_updated_TimeAgo->get(): "-";
                        
                                        show_info(
                                            $created_by = $created_by, $date = $date, $timeAgo = $timeAgo,
                                            $updated_by = $updated_by, $updated_date = $updated_date,
                                            $updated_timeAgo = $updated_timeAgo
                                        );
                                        echo '<h3 class="card-title my-2">Class ('.@$classInfo['pdsc_class'].')</h3>';
                                        show_info(
                                            $created_by = $class_created_by, $date = $class_date, $timeAgo = $class_timeAgo,
                                            $updated_by = $class_updated_by, $updated_date = $class_updated_date,
                                            $updated_timeAgo = $class_updated_timeAgo
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
                        
                            function delete_btn($class_id, $subclass_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["class_id"=>$class_id, "subclass_id"=>$subclass_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Sub-Class?"
                                    btn-submit-post--url="<?= API_BASE_URL."school/clients/class/subclass/delete"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-block">Delete</span>
                                </button>
                            <?php }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Create Sub-Class</h5>
                                        <?php require_once 'forms/classes.subclasses/subclass-create_form.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Sub-Classes</h5>
                                        <div class="d-none d-lg-block table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">Class</th>
                                                        <th style="white-space: nowrap;">Sub-Class</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                        <th style="white-space: nowrap;">By</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($subclassesList as $sL_key => $sL) {
                                                            $class = @$sL['class'];
                                                            $subclasses = @$sL['subclasses'];
                                                            
                                                            // echo "<pre>";
                                                            // print_r($subclasses);
                                                            // echo "</pre>"; 

                                                            if (!empty($class)) {
                                                                $class_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$class['_date_'])));

                                                                $class_created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$class['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $class_updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$class['_update_date_'])));

                                                                $class_updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$class['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            }

                                                            foreach ($subclasses as $key => $subclass) {
                                                                if (!empty($subclass)) {
                                                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subclass['_date_'])));

                                                                    $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subclass['pdsc_created_by'],
                                                                    function ($info) {
                                                                        return @$info[0];
                                                                    });

                                                                    $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subclass['_update_date_'])));

                                                                    $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subclass['pdsc_updated_by'],
                                                                    function ($info) {
                                                                        return @$info[0];
                                                                    });
                                                                } ?>
                                                                <tr>
                                                                    <th>-</th>
                                                                    <td style="white-space: nowrap">
                                                                        <?= show_subclasses(@$class, $account_id, $ccApi); ?>
                                                                    </td>
                                                                    <td style="white-space: nowrap">
                                                                        <?= @$subclass['pdsc_subclass']; ?>
                                                                    </td>
                                                                    <td class="text-center" style="white-space: nowrap">
                                                                        <?= show_info_btn($class, $class_TimeAgo, $class_created_by, $class_updated_TimeAgo, $class_updated_by, $subclass, $created_by, $updated_TimeAgo, $updated_by, $TimeAgo, "btn btn-sm btn-info shadow"); ?>
                                                                        <?= edit_btn($class, $subclass, $account_id, $user_id, "Edit Sub-Class", "ml-2 p-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                        <?php 
                                                                            $class_id = $class['pdsc_id']; 
                                                                            $subclass_id = $subclass['pdsc_id']; 
                                                                            delete_btn($class_id, $subclass_id, $account_id, $user_id, "ml-2 p-1 btn btn-sm btn-danger shadow"); 
                                                                        ?>
                                                                    </td>
                                                                    <td>
                                                                        <table>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th style="white-space: nowrap">Created By</th>
                                                                                    <td style="white-space: nowrap">
                                                                                        <?= !empty($subclass['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th style="white-space: nowrap">Updated By</th>
                                                                                    <td style="white-space: nowrap">
                                                                                        <?= !empty($subclass['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            <?php }
                                                        }
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
                                                        <th style="white-space: nowrap;">Sub-Class</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($subclassesList as $sL_key => $sL) {
                                                            $class = @$sL['class'];
                                                            $subclasses = @$sL['subclasses'];
                                                            
                                                            // echo "<pre>";
                                                            // print_r($subclasses);
                                                            // echo "</pre>"; 

                                                            if (!empty($class)) {
                                                                $class_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$class['_date_'])));

                                                                $class_created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$class['pdsc_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $class_updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$class['_update_date_'])));

                                                                $class_updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$class['pdsc_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            }

                                                            foreach ($subclasses as $key => $subclass) {
                                                                if (!empty($subclass)) {
                                                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subclass['_date_'])));

                                                                    $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subclass['pdsc_created_by'],
                                                                    function ($info) {
                                                                        return @$info[0];
                                                                    });

                                                                    $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subclass['_update_date_'])));

                                                                    $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subclass['pdsc_updated_by'],
                                                                    function ($info) {
                                                                        return @$info[0];
                                                                    });
                                                                } ?>
                                                                <tr>
                                                                    <th>-</th>
                                                                    <td style="white-space: nowrap">
                                                                        <?= @$subclass['pdsc_subclass']; ?>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <?= show_info_btn($class, $class_TimeAgo, $class_created_by, $class_updated_TimeAgo, $class_updated_by, $subclass, $created_by, $updated_TimeAgo, $updated_by, $TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                        <?= edit_btn($class, $subclass, $account_id, $user_id, "Edit Sub-Class", "m-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                        <?php 
                                                                            $class_id = $class['pdsc_id']; 
                                                                            $subclass_id = $subclass['pdsc_id']; 
                                                                            delete_btn($class_id, $subclass_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
                                                                        ?>
                                                                    </td>
                                                                </tr>
                                                            <?php }
                                                        }
                                                        
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
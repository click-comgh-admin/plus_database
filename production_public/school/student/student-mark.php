<?php
	require_once '../../assets/php/include.php';
    require_once '../../defs.php';
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Student Marks");
    define('PAGE_DESC', "View Student Marks Info");
?>
<!doctype html>
<html lang="en">
    <?php require_once '../../assets/php/page_components/header/head.php'; ?>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once '../../assets/php/page_components/header/navbar.php'; ?>
            <?php require_once '../../assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once '../../assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-id icon-gradient bg-malibu-beach">
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
                            define("schoolStudent_BaseUrl", CLIENT_BASE_URL."school/student/student-mark");                        
                            // print_r($marks);

                            function show_marks_btn($marks, $account_id, $user_id, $ccApi, $tf, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal" open-modal--type="modal-lg"
                                    open-modal--id="class_subject_marks-<?= @$marks[0]['subject']['pdsc_id']; ?>_<?= rand(1, 999999); ?>" open-modal--title="Class - Subject - Marks"
                                    open-modal--html='<?php 
                                        show_marks($marks, $account_id, $user_id, $ccApi, $tf); 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-check"></span>
                                    <span class="d-none d-sm-inline">Mark/ Grade</span>
                                </button>
                            <?php }

                            function show_marks($marks, $account_id, $user_id, $ccApi, $tf)
                            {
                                echo "<pre>";
                                // print_r($marks);
                                echo "</pre>";
                                ?>
                                <div class="table-responsive">
                                    <table
                                        class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                        <tbody>
                                            <?php
                                                foreach ($marks as $mark_key => $m) {
                                                    $subject = $m['subject'];
                                                    $mark = $m['mark']; ?>
                                                    <tr class="">
                                                        <td class="p-0">
                                                            <table
                                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Class</th>
                                                                        <td>
                                                                            <?php
                                                                                $get_string = "class/class?client_id=$account_id&id=".$subject['pdsc_class_id'];
                                                                                echo $class = $ccApi->school($get_string, function($class)
                                                                                {
                                                                                    return @$class[0]['pdsc_class'];
                                                                                }, $debug = false);
                                                                            ?>
                                                                        </td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Subject</th>
                                                                        <td>
                                                                            <?php
                                                                                $get_string = "subject/subject?client_id=$account_id&id=".$subject['pdsc_subject_id'];
                                                                                echo $_subject = $ccApi->school($get_string, function($subject)
                                                                                {
                                                                                    return @$subject[0]['pdsc_subject'];
                                                                                }, $debug = false);
                                                                            ?>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="p-0">
                                                            <table
                                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                                <tbody>
                                                                    <tr>
                                                                        <th class="text-center">
                                                                            <?= $_subject; ?> Mark/ Grade
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <?php require "forms/mark-create_edit_form.php"; ?>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr class="pb-2"><td class="p-0 py-2"></td></tr>
                                                    <tr class="pb-2">
                                                        <td class="p-0 py-2 bg-light text-center">---------------  ---------------</td>
                                                    </tr>
                                                    <tr class="pb-2"><td class="p-0 py-2"></td></tr>
                                                <?php }
                                            ?>
                                        </tbody>
                                    </table>
                                </div>
                            <?php }
                        
                            function show_info_btn($marks, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="info_class-<?= $marks['pdsc_id']; ?>" open-modal--title="Fee Record Info"
                                    open-modal--html='<?php 
                                        $created_by = !empty($marks['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                        $date = date('Y/ m/ d', strtotime(@$marks['_date_']));
                                        $timeAgo = !empty($marks) ? @$TimeAgo->get(): "-";
                        
                                        $updated_by = !empty($marks['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                        $updated_date = date('Y/ m/ d', strtotime(@$marks['_update_date_']));
                                        $updated_timeAgo = !empty($marks) ? @$updated_TimeAgo->get(): "-";
                        
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
                            
                            function edit_btn($markInfo, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_class-<?= $markInfo['pdsc_id']; ?>-<?= $type; ?>"
                                    open-modal--title="Edit Class" open-modal--html='<?php 
                                        $mark_id = $markInfo['pdsc_id']; 
                                        $mark_name = $markInfo['pdsc_class']; 
                                        require 'forms/mark-edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }
                        
                            function delete_btn($mark_id, $member_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["mark_id"=>$mark_id, "member_id"=>$member_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Record?"
                                    btn-submit-post--url="<?= API_BASE_URL."school/clients/subject/student/delete"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-block">Delete</span>
                                </button>
                            <?php }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-12 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Enter Student Name/ Index Number</h5>
                                        <?php require_once 'forms/filter_members.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <?php
                                        if (isset($_GET["student"])) {
                                            require_once 'subpages/marks.php';
                                        } else {
                                            require_once 'subpages/marks_filtered.php';
                                        }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php require_once '../../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
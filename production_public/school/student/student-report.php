<?php
	require_once '../../assets/php/include.php';
    require_once '../../defs.php';
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Student Report");
    define('PAGE_DESC', "View Student Report Info");
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
                            define("schoolStudent_BaseUrl", CLIENT_BASE_URL."school/student/student-report");                            
                        
                            function show_report_btn($report, $mark_record, $account_id, $user_id, $ccApi, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal" open-modal--type="modal-lg"
                                    open-modal--id="report_class-<?= $report['pdsc_id']; ?>" open-modal--title="Report"
                                    open-modal--html='<?php                         
                                        show_report($report, $mark_record, $account_id, $user_id, $ccApi); 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-note2"></span>
                                    <span class="d-none d-sm-block">View Report</span>
                                </button>
                            <?php }
                        
                            function show_report($report, $mark_record, $account_id, $user_id, $ccApi) { ?>
                                <div class="table-responsive">
                                    <table
                                        class="align-middle mb-0 table table-bordered table-striped table-hover col-md-6">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th style="white-space: nowrap;">-</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Year</th>
                                                <td><?= $report['pdsc_year']; ?></td>
                                            </tr>
                                            <tr>
                                                <th>Date</th>
                                                <td><?= date("Y/m/d", strtotime($report['pdsc_date'])); ?></td>
                                            </tr>
                                            <tr>
                                                <th>Term</th>
                                                <td>
                                                    <?php
                                                        $get_string = "term?client_id=$account_id&id=".$report['pdsc_term'];
                                                        echo $class = $ccApi->school($get_string, function($class)
                                                        {
                                                            return @$class[0]['pdsc_term'];
                                                        }, $debug = false);
                                                    ?>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Class</th>
                                                <td>
                                                    <?php
                                                        $get_string = "class/class?client_id=$account_id&id=".$report['pdsc_class_id'];
                                                        echo $class = $ccApi->school($get_string, function($class)
                                                        {
                                                            return @$class[0]['pdsc_class'];
                                                        }, $debug = false);
                                                    ?>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Assessment</th>
                                                <td>
                                                    <?php
                                                        $get_string = "assessment_type?client_id=$account_id&id=".$report['pdsc_class_id'];
                                                        echo $class = $ccApi->school($get_string, function($class)
                                                        {
                                                            return @$class[0]['pdsc_assessment_type'];
                                                        }, $debug = false);
                                                    ?>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Position</th>
                                                <td><?= $report['pdsc_position']; ?></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        class="align-middle mb-0 table table-bordered table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Subject</th>
                                                <th>Mark</th>
                                                <th>Grade</th>
                                                <th><b>%</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                foreach ($mark_record as $mr_key => $mr) {
                                                    $marks = $mr['mark'];
                                                    $subject = $mr['subject'];
                                                    foreach ($marks as $mk_key => $mk) { ?>
                                                        <pre><?php //print_r($mk); ?></pre>
                                                        <tr>
                                                            <th>
                                                                <?php
                                                                    $get_string = "subject/subject?client_id=$account_id&id=".$subject['pdsc_subject_id'];
                                                                    echo $class = $ccApi->school($get_string, function($class)
                                                                    {
                                                                        return @$class[0]['pdsc_subject'];
                                                                    }, $debug = false);
                                                                ?>
                                                            </th>
                                                            <td><?= $mk['pdsc_mark']; ?></td>
                                                            <td><?= $mk['pdsc_grade']; ?></td>
                                                            <td><?= $mk['pdsc_percentage']; ?></td>
                                                        </tr>
                                                    <?php } ?>
                                                <?php }
                                            ?>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="mt-3">
                                    <div class="card shadow">
                                        <div class="card-header">Remarks</div>
                                        <div class="card-body">
                                            <?= multilineText($report['pdsc_remarks']); ?>
                                            <div class="container" btn-submit-post--display="download-attachment"></div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-sm bg-grow-early text-light font-weight-bold rounded-pill"
                                                btn-submit-download=<?= json_encode(["report_id"=>$report['pdsc_id'], "download_type"=>"excel", "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Download In Excel?" btn-submit-post--download="download-attachment"
                                                btn-submit-post--url="<?= API_BASE_URL."school/clients/student/report/download"; ?>">
                                                Download In Excel <i class="fa fa-file-excel"></i>
                                            </button>
                                            <button class="btn btn-sm bg-strong-bliss text-light font-weight-bold rounded-pill"
                                                btn-submit-download=<?= json_encode(["report_id"=>$report['pdsc_id'], "download_type"=>"pdf", "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Download In PDF?" btn-submit-post--download="download-attachment"
                                                btn-submit-post--url="<?= API_BASE_URL."school/clients/student/report/download"; ?>">
                                                Download In PDF <i class="fa fa-file-pdf"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            <?php }
                        
                            function show_info_btn($report, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="info_class-<?= $report['pdsc_id']; ?>" open-modal--title="Report Info"
                                    open-modal--html='<?php 
                                        $created_by = !empty($report['pdsc_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                        $date = date('Y/ m/ d', strtotime(@$report['_date_']));
                                        $timeAgo = !empty($report) ? @$TimeAgo->get(): "-";
                        
                                        $updated_by = !empty($report['pdsc_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                        $updated_date = date('Y/ m/ d', strtotime(@$report['_update_date_']));
                                        $updated_timeAgo = !empty($report) ? @$updated_TimeAgo->get(): "-";
                        
                                        show_info(
                                            $created_by = $created_by, $date = $date, $timeAgo = $timeAgo,
                                            $updated_by = $updated_by, $updated_date = $updated_date,
                                            $updated_timeAgo = $updated_timeAgo, $report
                                        ); 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-info"></span>
                                    <span class="d-none d-sm-block">Info</span>
                                </button>
                            <?php }
                        
                            function show_info($created_by, $date, $timeAgo, $updated_by, $updated_date, $updated_timeAgo, $report) { ?>
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
                            
                            function edit_btn($reportInfo, $account_id, $user_id, $confirm_msg, $ccApi, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_report-<?= $reportInfo['pdsc_id']; ?>-<?= $type; ?>"
                                    open-modal--title="Edit Report" open-modal--html='<?php 
                                        $report_id = $reportInfo['pdsc_id']; 
                                        $report_assessment_type = $reportInfo['pdsc_assessment_type']; 
                                        $report_position = $reportInfo['pdsc_position']; 
                                        $report_remarks = $reportInfo['pdsc_remarks'];  
                                        require 'forms/student_reports-edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }
                        
                            function delete_btn($report_id, $member_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["report_id"=>$report_id, "member_id"=>$member_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Fee Record?"
                                    btn-submit-post--url="<?= API_BASE_URL."school/clients/student/report/delete"; ?>">
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
                                            if (isset($_GET['download-report'])) {
                                                require_once 'subpages/report_download.php';
                                            } else {
                                                require_once 'subpages/reports.php';
                                            }
                                        } else {
                                            if (isset($_GET['download-report'])) {
                                                require_once 'subpages/report_download.php';
                                            } else {
                                                require_once 'subpages/reports_filtered.php';
                                            }
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
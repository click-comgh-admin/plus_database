<?php
    $page = "file-report";
    $page_url = Current_BaseUrl."$page";
    
    if (isset($_GET["duty"]) && !empty($_GET["duty"])) {} else { ?>
        <script>
            history.back();
        </script>
    <?php die(); }

    define("TODAY_DATE", date("Y-m-d H:i"));  
    
    // $get_string = "duty-tracker/member/all-duties?account_id=".AccountInfoId."&member_id=".AccountInfoUserId;
    // $duty_tracker = $ccApi->fetch_from($get_string, function($duty_tracker)
    // {
    //     return $duty_tracker;
    // }, $debug = false);
    // echo "<pre>";
    // print_r(["duty_tracker"=>$duty_tracker]);
    // echo "</pre>";

?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">My Report</h5>
                <div class="">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-8">  
                            <?php
                                define('DUTY_ID', (int)$_GET["duty"]);
                                // define('AccountInfoUserId', (int)$user_id);

                                if (isset($_GET["update"]) && !empty($_GET["update"])) { 
    
                                    $get_string = "duty-tracker/member/report?account_id=".AccountInfoId
                                        ."&member_id=".AccountInfoUserId."&duty_id=".(int)$_GET["duty"]
                                        ."&report_id=".(int)$_GET["update"];
                                    $duty_report = $ccApi->fetch_from($get_string, function($duty_report)
                                    {
                                        return isset($duty_report[0])? $duty_report[0]: [];
                                    }, $debug = false);
                                    // echo "<pre>";
                                    // print_r(["duty_report"=>$duty_report]);
                                    // echo "</pre>";

                                    define('REPORT_ID', (int)$_GET["update"]);

                                    require_once Current_BaseDir."/forms/member-reports/update-report.php"; 
                                } else {
                                    require_once Current_BaseDir."/forms/member-reports/new-report.php"; 
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
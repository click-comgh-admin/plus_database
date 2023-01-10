<?php
    $page = "file-report";
    $page_url = Current_BaseUrl."$page";
    
    if (isset($_GET["duty"]) && !empty($_GET["duty"])) {} else { ?>
        <script>
            history.back();
        </script>
    <?php die(); }

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
    
                                $get_string = "duty-tracker/duties/supervisor-remarks?account_id=".AccountInfoId
                                    ."&duty_id=".(int)$_GET["duty"];
                                $duty_report = $ccApi->fetch_from($get_string, function($duty_report)
                                {
                                    return isset($duty_report[0])? $duty_report[0]: [];
                                }, $debug = false);
                                // echo "<pre>";
                                // print_r(["duty_report"=>$duty_report]);
                                // echo "</pre>";

                                require_once Current_BaseDir."/forms/member-reports/supervisor-remarks.php"; 
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
    $page = "member-reports";
    $page_url = Current_BaseUrl."$page";
    
    require_once Current_BaseDir."/subpages/member-reports/filtered_results.php";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-2 col-lg-2"></div>
                    <div class="col-md-4 col-lg-4">
                        <?php
                            require_once Current_BaseDir."/forms/member-reports/admin_filter_form.php";
                        ?>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <?php
                            require_once Current_BaseDir."/forms/member-reports/member_filter_form.php";
                        ?>
                    </div>
                    <div class="col-md-2 col-lg-2"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-header my-3">
                <?php
                    $duty_id = isset($_GET['show-duty']) ? (int)$_GET['show-duty']: 0;
                    $get_string = "duty-tracker/duties/duty-info?client_id=".AccountInfoId."&id=$duty_id";
                    $duty_tracker = $ccApi->fetch_from($get_string, function($duty_tracker)
                    {
                        return $duty_tracker;
                    }, $debug = false);
                    // echo "<pre>";
                    // print_r($duty_tracker);
                    // echo "</pre>";

                    if (isset($duty_tracker['duty']['pdt_duty'])) { ?>
                        <h5 class="card-title">
                            <?= isset($duty_tracker['duty']['pdt_duty'])
                                ? $duty_tracker['duty']['pdt_duty']: ""; ?> Reports
                            <a href="<?= Current_BaseUrl; ?>file-report?duty=<?= $duty_id; ?>" 
                                class="btn btn-outline-success btn-sm mx-2" >Add Report</a>
                        </h5>  
                    <?php }
                ?>  
            </div>
            <div class="card-body px-2">
                <h5 class="card-title">Duty Reports</h5>
                <?php
                    if (isset($duty_tracker['duty']['pdt_duty'])) { ?>
                        <div class="table-responsive">
                            <table class="mb-0 table table-striped" pagin_table="view-duty-member-reports"
                                pt_c_acc_id="<?= AccountInfoId; ?>" pt_c_page="<?= $page_url; ?>"
                                pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>"
                                pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>" pt_c_by_duty_id="<?= $by_duty_id; ?>"
                                pt_c_duty_id="<?= $this_duty_id; ?>" pt_c_by_admin_report="<?= $by_admin_report; ?>" 
                                pt_c_admin_report="<?= $this_admin_report; ?>" pt_c_by_member_id="<?= $by_member_id; ?>"
                                pt_c_member_id="<?= $this_member_id; ?>" >
                                <thead>
                                    <tr>
                                        <th style="white-space: nowrap;">Duty</th>
                                        <th style="white-space: nowrap;">Action</th>
                                        <!-- <th style="white-space: nowrap;">Info</th> -->
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    <?php } else { ?>
                        <div class="table-responsive card p-2 border border-danger">
                            <h5 class="card-title py-2 my-2 text-danger">Duty Not Found</h5>
                        </div>
                    <?php }
                ?>
            </div>
        </div>
    </div>
</div>
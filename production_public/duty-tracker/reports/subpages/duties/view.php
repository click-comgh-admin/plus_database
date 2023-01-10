<?php
    $page = "duty-reports";
    $page_url = Current_BaseUrl."$page";
    
    require_once Current_BaseDir."/subpages/duty-reports/filtered_results.php";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-8 col-lg-8">
                        <?php
                            require_once Current_BaseDir."/forms/duty-reports/date_filter_form.php";
                        ?>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <?php
                            require_once Current_BaseDir."/forms/duty-reports/duties_filter_form.php";
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Created Duties</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="view-duty-reports"
                        pt_c_acc_id="<?= AccountInfoId; ?>" pt_c_page="<?= $page_url; ?>"
                        pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>"
                        pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>" pt_c_by_duty_id="<?= $by_duty_id; ?>"
                        pt_c_duty_id="<?= $this_duty_id; ?>" pt_c_by_date="1"
                        pt_c_start_date="<?= $start_date; ?>" pt_c_end_date="<?= $end_date; ?>"
                        pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
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
            </div>
        </div>
    </div>
</div>
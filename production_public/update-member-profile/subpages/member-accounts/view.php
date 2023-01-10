<?php
    $page = "member-accounts";
    $page_url = Current_BaseUrl."$page";

    require_once "filtered_results.php";
?>    
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <div class="row justify-content-center">
                    <div class="col-md-7 col-lg-6 border border-light">
                        <h5 class="card-title">Members</h5>
                        <?php require_once Current_BaseDir."/forms/$page/registration_status_filter.php"; ?>
                        <div class="table-responsive">
                            <table class="mb-0 table table-striped table-hover" pagin_table="member-accounts"
                                pt_c_acc_id="<?=AccountInfoId;?>" pt_c_page="<?=$page_url;?>"
                                pt_c_user_id="<?=$user_id;?>" pt_c_api="<?=API_BASE_URL;?>"
                                pt_c_file="<?=FILE_BUCKET_BASE_URL;?>"
                                pt_c_by_registration_status="<?= $by_registration_status;?>"
                                pt_c_registration_status="<?= $this_registration_status;?>">
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
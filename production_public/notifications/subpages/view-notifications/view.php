<?php
    $page = "view-notifications";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Created Notifications</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped table-hover" pagin_table="client-notifications"
                        pt_c_acc_id="<?= AccountInfoId; ?>" pt_c_page="<?= $page_url; ?>"
                        pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>"
                        pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
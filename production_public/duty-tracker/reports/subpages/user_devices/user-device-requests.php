<?php
    $page = "user-device-request";
    $page_url = Current_BaseUrl."$page";

    $_by_member_id = "by_member_id";
    $_member_id = "member_id";
    if (isset($_GET[$_member_id])) { 
        $getMid = $encryptor->decrypt($_GET[$_member_id]);
        $by_member_id = (int)$getMid;
        $this_member_id = ($by_member_id == 0) ? "all": $by_member_id;
        $by_member_id = ($by_member_id == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_member_id; ?>", "<?= $this_member_id; ?>", $time = 2); </script>
    <?php } else {
        $by_member_id = @(isset($_COOKIE[$_by_member_id])) ? $_COOKIE[$_by_member_id] : 0;
        $this_member_id = @(isset($_COOKIE[$_member_id])) ? $_COOKIE[$_member_id] : "all"; 
        $by_member_id = ($by_member_id == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_member_id; ?>", "<?= (strtolower($this_member_id) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-sm-12 col-md-4 col-lg-6"></div>
                    <div class="col-sm-12 col-md-8 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/user_devices/member_filter_form.php";?>
                    </div>
                    <div class="col-md-12 col-lg-12"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">User Device Requests</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="user-devices-requests" pt_c_acc_id="<?= AccountInfoId; ?>"
                        pt_c_page="<?= $page_url; ?>" pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
                        pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Identity</th>
                                <th style="white-space: nowrap;">Phone Details</th>
                                <th style="white-space: nowrap;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
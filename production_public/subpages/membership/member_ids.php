<?php

    define("memberIds_BaseUrl", CLIENT_BASE_URL."members?member-ids");
    
    $identity = 0;
    if (isset($_GET['identity']) && !empty($_GET['identity'])) {
        $identity = (int)$_GET['identity'];
    }

    function set_ids_btn($account_id, $user_id, $class) { ?>
        <button class="<?= $class; ?>"
            btn-submit-post=<?= json_encode(["client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
            btn-submit-post--confirm="Set Member Ids?"
            btn-submit-post--url="<?= API_BASE_URL."membership/identity/set_ids"; ?>">
            <span class="pe-7s-add-user"></span>
            <span class="d-none d-sm-block">Set Member Ids</span>
        </button>
    <?php }
?>
<div class="row justify-content-center">
    <div class="col-sm-12 col-md-5 col-lg-4">
        <div class="main-card mb-3 card shadow">
            <div class="card-body">
                <h5 class="card-title">Filter Member</h5>
                <?php require 'identity/forms/filter_members.php'; ?>
            </div>
        </div>
        <div class="main-card mb-3 card shadow">
            <div class="card-body">
                <h5 class="card-title">Create Member ID</h5>
                <?php require 'identity/forms/member_id-create_form.php'; ?>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-7 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <div class="card-body">
                <h5 class="card-title">Member IDs</h5>
                <div class="fa pull-right">
                    <?= set_ids_btn($account_id, $user_id, "m-1 btn btn-sm btn-primary shadow"); ?>
                </div>
                <div class="d-none d-lg-block table-responsive">
                    <table
                        class="align-middle mb-0 table table-bor derless table-striped table-hover" pagin_table="member_id_md" pt_c_id="<?= $account_id; ?>"
                            pt_c_user="<?= $user_id; ?>" pt_c_member="<?= $identity; ?>" pt_c_api="<?= API_BASE_URL; ?>">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style="white-space: nowrap;">Member ID</th>
                                <th style="white-space: nowrap;" class="text-center">Actions</th>
                                <th style="white-space: nowrap;">By</th>
                                <th style="white-space: nowrap;">Time</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="d-block d-lg-none table-responsive">
                    <table
                        class="align-middle mb-0 table table-bor derless table-striped table-hover" pagin_table="member_id_sm" pt_c_id="<?= $account_id; ?>"
                            pt_c_user="<?= $user_id; ?>" pt_c_member="<?= $identity; ?>" pt_c_api="<?= API_BASE_URL; ?>">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style="white-space: nowrap;">Member ID</th>
                                <th style="white-space: nowrap;" class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
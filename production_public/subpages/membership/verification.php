<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));

    define("memberIds_BaseUrl", CLIENT_BASE_URL."members?member-ids");
    
    $identity = 0;
    if (isset($_GET['identity']) && !empty($_GET['identity'])) {
        $identity = (int)$_GET['identity'];
    }
    $isVerification = 1;
    if (isset($_GET['verification']) && !empty($_GET['verification'])) {
        $isVerification = (int)$_GET['verification'];
    }
?>
<div class="row justify-content-center">
    <div class="col-sm-12 col-md-5 col-lg-4">
        <div class="main-card mb-3 card shadow">
            <div class="card-body">
                <h5 class="card-title">Filter Member</h5>
                <?php require 'identity/forms/filter_members_verification.php'; ?>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-7 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <div class="card-body">
                <h5 class="card-title">Member Verifications</h5>
                <div class="btn-actions-pane-right px-1">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <a class="btn-shadow btn btn-primary <?= ($isVerification === 1) ? 'active': ''; ?> " 
                            href="<?= CLIENT_BASE_URL; ?>members?verification=1" >ALL</a>
                        <a class="btn-shadow btn btn-primary <?= ($isVerification === 2) ? 'active': ''; ?> " 
                            href="<?= CLIENT_BASE_URL; ?>members?verification=2" >VERIFIED</a>
                        <a class="btn-shadow btn btn-primary <?= ($isVerification === 3) ? 'active': ''; ?> " 
                            href="<?= CLIENT_BASE_URL; ?>members?verification=3" >UNVERIFIED</a>
                    </div>
                </div>
                <form role="form" action="" method="POST"
                    btn-general-posts--form="Continue User Verification?" class="table-responsive">
                    <table
                        class="align-middle mb-0 table table-striped table-hover" pagin_table="verification_md" pt_c_id="<?= $account_id; ?>"
                            pt_c_user="<?= $user_id; ?>" pt_c_member="<?= $identity; ?>" pt_c_verified="<?= $isVerification; ?>" 
                            pt_c_api="<?= API_BASE_URL; ?>">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Member Verification</th>
                                <th style="white-space: nowrap;" class="text-center" data-orderable="false">
                                    Actions <hr class="mb-1 mt-0">
                                    <button type="submit" class="btn badge btn-sm px-1 btn-outline-info shadow"
                                        btn-general-posts="Continue User Verification?"
                                        btn-general-posts--url="<?= API_BASE_URL."membership/verify-multiple"; ?>">
                                        <span class="font-weight-bold">Verify Checked</span>
                                    </button><br>
                                    <button type="submit" class="btn badge btn-sm px-1 btn-outline-danger shadow mt-1"
                                        btn-general-posts="Continue User Verification?"
                                        btn-general-posts--url="<?= API_BASE_URL."membership/unverify-multiple"; ?>">
                                        <span class="font-weight-bold">Unverify Checked</span>
                                    </button>
                                </th>
                                <th style="white-space: nowrap;">Verification</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
</div>
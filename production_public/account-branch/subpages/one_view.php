<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-header">
                <i class="lnr-license icon-gradient bg-plum-plate"> Branch Info</i> // <?= @$branch['pdc_name']; ?>
                <div class="btn-actions-pane-right px-1">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <a class="btn-shadow btn btn-primary show active" href="#settings" data-toggle="tab">Main</a>
                        <a class="btn-shadow btn btn-primary show" href="#logo" data-toggle="tab">Logo</a>
                        <a class="btn-shadow btn btn-primary show" href="#leaders" data-toggle="tab">Leaders</a>
                    </div>
                </div>
            </div>
            <div class="card-body p-0 mb-4">
                <div class="tab-content">
                    <div class="tab-pane show active container" id="settings" role="tabpanel">
                        <div class="row justify-content-center">
                            <?php require_once Current_BaseDir."/subpages/branch_profile/main_settings_view.php"; ?>
                        </div>
                    </div>
                    <div class="tab-pane show container" id="logo" role="tabpanel">
                        <div class="row justify-content-center">
                            <?php require_once Current_BaseDir."/subpages/branch_profile/logo_view.php"; ?>
                        </div>
                    </div>
                    <div class="tab-pane show container" id="leaders" role="tabpanel">
                        <div class="row justify-content-center">
                            <?php require_once Current_BaseDir."/subpages/branch_profile/leaders_view.php"; ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <i class="lnr-license icon-gradient bg-plum-plate"> Branch Info</i> // 
                    <?= @$branch['pdc_name']; ?> // 
                <i class="lnr-license icon-gradient bg-plum-plate"> Actions</i>
                <div class="btn-actions-pane-right px-1">
                    <a class="btn-wide btn btn-warning" target="_blank" href="<?= Current_BaseUrl; ?>update-branch?branch=<?= @$branch['pdc_id']; ?>">Update Branch Profile</a>
                </div>
            </div>
        </div>
    </div>
</div>
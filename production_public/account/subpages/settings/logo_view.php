<?php
    // print_r($account_info);
    $logoUrl = strtolower($account_info['pdc_logo']);
    $logoUrl = ($logoUrl == "logo.png") ? "files/$logoUrl" : "files/clients/logo/$account_id/$logoUrl";
?>
<div class="row justify-content-center">
    <?php require_once BASE_DIRECTORY."/account/subpages/settings/logo_edit.php"; ?>
    <div class="col-md-12 col-lg-7">
        <div class="card">
            <div class="card-header">
                <i>Main Settings</i> // <?= @$account_info['pdc_name']; ?>
                <div class="btn-actions-pane-right">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>settings">Main</a>
                        <a class="btn-shadow btn btn-danger show active" href="<?= settings_BaseUrl; ?>logo">Logo</a>
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>leaders">Leaders</a>
                        <a class="btn-shadow btn btn-info show" href="<?= settings_BaseUrl; ?>status-indicator">Status Indicator</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-6">
                        <div
                            background-image="<?= FILE_BUCKET_BASE_URL; ?><?= @$logoUrl; ?>">
                            <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-c enter ml-auto mr-auto">
                                        <div class="widget-content-ce nter">
                                            <img width="150" height="150" class="rounded-circle shadow shadow-lg"
                                                alt="Member Image"
                                                src="<?= FILE_BUCKET_BASE_URL; ?><?= @$logoUrl; ?>">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-block">
            </div>
        </div>
    </div>
</div>
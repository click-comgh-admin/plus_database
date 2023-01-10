<div class="col-md-12 col-lg-5">
    <div class="card mb-3">
        <div class="card-header">
            Edit <i class="ml-1"> Logo</i>
        </div>
        <div class="card-body py-0">
            <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "update_logo"))? "show": ""; ?> py-2" id="update_logo">
                <div class="row justify-content-center p-0 m-0" upload-preview-crop--preview="profile-picture" upload-preview-crop--preview---aspectRatio="0">
                    <img class="container img-fluid" no-popup="true" src="<?= FILE_BUCKET_BASE_URL; ?><?= @$logoUrl; ?>"/>
                </div>
                <?php require_once(BASE_DIRECTORY."/account/forms/settings/edit_photo.php"); ?>
            </div>
        </div>
        <div class="card-footer">
            <?php
                if (isset($_POST['add-form'])) {
                    if ($_POST['add-form'] == "contact") { ?>
            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true" type="button"
                data-toggle="collapse" href="#update_logo">Update Logo</button>
            <?php } else { ?>
            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_logo">Update Logo</button>
            <?php }
                } else { ?>
            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_logo">Update Logo</button>
            <?php } ?>
        </div>
    </div>
</div>
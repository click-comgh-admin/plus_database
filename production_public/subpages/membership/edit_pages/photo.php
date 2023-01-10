
<div class="row justify-content-center">
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h5 class="text-muted card-title"><i>Crop <?= @$member['pdm_firstname'] . " " . @$member['pdm_surname']; ?>'s Image</i></h5>
                <div class="row justify-content-center p-0 m-0" upload-preview-crop--preview="profile-picture">
                    <img class="container img-fluid" no-popup="true" src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= @$member['pdm_profile_picture']; ?>"/>
                </div>
            </div>
            <div class="card-footer d-block">
                <?php require_once(BASE_DIRECTORY."/subpages/membership/forms/edit_pages-photo.php"); ?>
            </div>
        </div>
    </div>
</div>
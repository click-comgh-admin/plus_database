<div class="row justify-content-center">
    <?php
        if (strtolower($_GET['edit']) == "photo") { ?>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-muted card-title"><i>Crop <?= @$user_info['pdcu_firstname'] . " " . @$user_info['pdcu_surname']; ?>'s Image</i></h5>
                        <div class="row justify-content-center p-0 m-0" upload-preview-crop--preview="profile-picture">
                            <img class="container img-fluid" no-popup="true" src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= @$user_info['pdcu_profile_picture']; ?>"/>
                        </div>
                    </div>
                    <div class="card-footer d-block">
                        <?php require_once(BASE_DIRECTORY."/account/forms/account/edit/edit_pages-photo.php"); ?>
                    </div>
                </div>
            </div>
        <?php } else if (strtolower($_GET['edit']) == "info") { ?>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <i>Update <?= @$user_info['pdcu_firstname'] . " " . @$user_info['pdcu_surname']; ?>'s Main Info</i>
                    </div>
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <?php 
                                    if (AccountInfoCategory === 10) {
                                        require_once(BASE_DIRECTORY."/account/forms/account/edit/edit-district_pages-main.php");
                                    } else {
                                        require_once(BASE_DIRECTORY."/account/forms/account/edit/edit_pages-main.php");
                                    }
                                ?>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-block">
                    </div>
                </div>
            </div>
        <?php } else if (strtolower($_GET['edit']) == "password") { ?>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <i>Update <?= @$user_info['pdcu_firstname'] . " " . @$user_info['pdcu_surname']; ?>'s Password</i>
                    </div>
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <?php require_once(BASE_DIRECTORY."/account/forms/account/edit/edit_pages-password.php"); ?>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-block">
                    </div>
                </div>
            </div>
        <?php }
    ?>
</div>
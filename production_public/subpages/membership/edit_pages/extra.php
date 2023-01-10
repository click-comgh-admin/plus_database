<div class="row justify-content-center">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <i>Update <?= @$member['pdm_firstname'] . " " . @$member['pdm_surname']; ?>'s Extra Information</i>
            </div>
            <div class="card-body">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <?php require_once(BASE_DIRECTORY."/subpages/membership/forms/edit_pages-extra.php"); ?>
                    </div>
                </div>
            </div>
            <div class="card-footer d-block">
            </div>
        </div>
    </div>
</div>
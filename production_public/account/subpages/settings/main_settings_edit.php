<div class="col-md-12 col-lg-5">
    <div class="card mb-3">
        <div class="card-header">
            Edit <i class="ml-1"> Main Settings</i>
        </div>
        <div class="card-body py-0">
            <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "update_settings"))? "show": ""; ?> py-2" id="update_settings">
                <?php require_once(BASE_DIRECTORY."/account/forms/settings/edit_main.php"); ?>
            </div>
        </div>
        <div class="card-footer">
            <?php
                if (isset($_POST['add-form'])) {
                    if ($_POST['add-form'] == "contact") { ?>
            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true" type="button"
                data-toggle="collapse" href="#update_settings">Update Settings</button>
            <?php } else { ?>
            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_settings">Update Settings</button>
            <?php }
                } else { ?>
            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_settings">Update Settings</button>
            <?php } ?>
        </div>
    </div>
</div>
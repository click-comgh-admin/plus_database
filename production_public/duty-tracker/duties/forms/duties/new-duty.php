<?php 
    require_once "new-duty_form.php";
    use SetupDuty\SetupDuty;
    $sdForm = new SetupDuty();
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."duty-tracker/clients/duties/create-duty"; ?>"
    method="POST" make-general-posts="Create Duty?">
    <div class="row justify-content-center">
        <?= $sdForm->main_content($tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Create Duty</button>
        </div>
    </div>
</form>
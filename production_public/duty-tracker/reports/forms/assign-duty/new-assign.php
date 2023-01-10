<?php 
    require_once "new_assign_form.php";
    use AssignDuty\AssignDuty;
    $asForm = new AssignDuty();
    
    $asForm->data = $dutyInfo; 
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."duty-tracker/clients/duties/assign-duty"; ?>" method="POST"
    make-general-posts="Assign Duty?">
    <div class="row justify-content-center">
        <?= $asForm->main_content($tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="duty_id" value="<?= AccountDutyId; ?>" />
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Assign Duty</button>
        </div>
    </div>
</form>
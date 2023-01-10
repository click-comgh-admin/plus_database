<?php 
    require_once "new_visitor_form.php";
    use VisitorForm\VisitorForm;
    $vsForm = new VisitorForm();
    $vsForm->data = $visitor;

    require_once BASE_DIRECTORY."/office/appointments/forms/new_appointment_form.php";
    use AppointmentForm\AppointmentForm;
    $apForm = new AppointmentForm();
    $apForm->data = $appointment;
    $vsForm->appointmentForm = $apForm;
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."office/visitors/update-visitor"; ?>" method="POST"
    make-general-posts="Update Visitor?">
    <div class="row justify-content-center">
        <?= $vsForm->main_content(AccountInfoId, $account_status, $tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="visitor_id" value="<?= $visitor['pdov_id']; ?>" />
        </div>
        <div class="col-lg-6 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Visitor</button>
        </div>
    </div>
</form>
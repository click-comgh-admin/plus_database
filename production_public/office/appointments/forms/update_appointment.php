<?php 
    require_once "new_appointment_form.php";
    use AppointmentForm\AppointmentForm;
    $apForm = new AppointmentForm();
    $apForm->data = $appointment;
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."office/appointments/update-appointment"; ?>" method="POST"
    make-general-posts="Update Appointment?">
    <div class="row justify-content-center">
        <?= $apForm->main_content(AccountInfoId, $account_status, $tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="appointment_id" value="<?= $appointment['pdoa_id']; ?>" />
        </div>
        <div class="col-lg-6 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Appointment</button>
        </div>
    </div>
</form>
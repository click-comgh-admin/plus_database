<?php 
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    require_once "new-duty_form.php";
    use SetupDuty\SetupDuty;
    $sdForm = new SetupDuty();
    
    $sdForm->data = $dutyInfo; 
    $sdForm->MailAttachment = $MailAttachment; 

    define("AccountInfoUserId", $user_id);
?>
<form upload_attachment="this-form" role="form"
    action="<?= API_BASE_URL."duty-tracker/clients/duties/update-duty"; ?>" 
    method="POST" make-general-posts="Update Duty?">
    <div class="row justify-content-center">
        <?= $sdForm->main_content($tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="duty_id" value="<?= AccountDutyId; ?>" />
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Duty</button>
        </div>
    </div>
</form>
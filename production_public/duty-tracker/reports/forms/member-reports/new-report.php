<?php 
    require_once "report_form.php";
    use MemberReport\MemberReport;
    $mrForm = new MemberReport();

    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    $mrForm->MailAttachment = $MailAttachment; 
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."duty-tracker/clients/admin/create-report"; ?>"
    method="POST" make-general-posts="Create Report?">
    <div class="row justify-content-center">
        <?= $mrForm->main_content($tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="duty_id" value="<?= DUTY_ID; ?>" />
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= AccountInfoUserId; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Create Report</button>
        </div>
    </div>
</form>
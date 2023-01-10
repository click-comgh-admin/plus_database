<?php 
    require_once "new_form.php";
    use AccessCodeForm\AccessCodeForm;
    $vsForm = new AccessCodeForm();
    $vsForm->data = $access_code;
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."communications/clients/contacts/contact/update-access-code"; ?>" method="POST"
    make-general-posts="Update Access Code?">
    <div class="row justify-content-center">
        <?= $vsForm->main_content(AccountInfoId, $account_status, $tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="access_code_id" value="<?= $access_code['pdccac_id']; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Access Code</button>
        </div>
    </div>
</form>
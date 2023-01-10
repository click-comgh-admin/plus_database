<?php 
    require_once "new_user_form.php";
    use UserForm\UserForm;
    $usForm = new UserForm();
    $usForm->branch_data = $branch;
    $usForm->data = $client_user[0];
    $usForm->load_countries = $load_countries;
    $usForm->appPages = $appPages;
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."client-membership/branch/update-user"; ?>" method="POST"
    make-general-posts="Update User?">
    <div class="row justify-content-center">
        <?= $usForm->main_content(AccountInfoId, $account_status, $tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="branch_id" value="<?= $branch['pdc_id']; ?>" />
            <input type="hidden" name="branch_user_id" value="<?= @$client_user[0]['pdcu_id']; ?>" />
        </div>
        <div class="col-lg-6 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update User</button>
        </div>
    </div>
</form>
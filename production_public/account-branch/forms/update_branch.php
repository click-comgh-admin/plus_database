<?php 
    require_once "new_branch_form.php";
    use BranchForm\BranchForm;
    $brForm = new BranchForm();
    $brForm->data = $branch;
    $brForm->load_countries = $load_countries;
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."client-membership/branch/update-branch"; ?>" method="POST"
    make-general-posts="Update Branch?">
    <div class="row justify-content-center">
        <?= $brForm->main_content(AccountInfoId, $account_status, $tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="branch_id" value="<?= $branch['pdc_id']; ?>" />
        </div>
        <div class="col-lg-6 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Branch</button>
        </div>
    </div>
</form>
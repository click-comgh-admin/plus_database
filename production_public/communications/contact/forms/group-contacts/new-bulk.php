<?php 
    require_once "new_form.php";
    use ContactForm\ContactForm;
    $coForm = new ContactForm($type = 2);
    $coForm->inputCol = "col-lg-12 col-md-12";
    $coForm->load_countries = $load_countries;
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."communications/clients/contacts/groups/new-contact"; ?>" method="POST"
    make-general-posts="Save Contact? <span class=d-none>(bulk)">
    <div class="row justify-content-center">
        <?= $coForm->main_content(AccountInfoId, $account_status, $tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <?php
                $get_string = "communications/clients/contact/access-code?account_id=" . AccountInfoId . "&user=" . $user_id;
                $access_code = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                    return (isset($access_code[0]))? $access_code[0]['pdccac_id']: 0;
                }, $debug=false);
            ?>
            <input type="hidden" name="access_code" value="<?= $access_code; ?>" />
            <input type="hidden" name="group_id" value="<?= $group['pdccc_id']; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Save Contact</button>
        </div>
    </div>
</form>
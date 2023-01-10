<?php 
    require_once "new-notification_form.php";
    use AddNotification\AddNotification;
    $sdForm = new AddNotification();
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."notifications/clients/create-notification"; ?>"
    method="POST" make-general-posts="Create Notification?">
    <div class="row justify-content-center">
        <?= $sdForm->main_content($tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Create Notification</button>
        </div>
    </div>
</form>
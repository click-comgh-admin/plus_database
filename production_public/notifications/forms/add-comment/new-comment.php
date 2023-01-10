<?php
require_once "new-comment_form.php";
use AddComment\AddComment;
$sdForm = new AddComment();
?>
<form upload_attachment="this-form" role="form" action="<?=API_BASE_URL . "notifications/clients/create-comment";?>"
    method="POST" make-general-posts="Create Comment?">
    <div class="row justify-content-center">
        <?=$sdForm->main_content($tf, $ccApi);?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?=AccountInfoId;?>" />
            <input type="hidden" name="admin_user_id" value="<?=$user_id;?>" />
            <input type="hidden" name="notification_id" value="<?=$notification_id;?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Create Comment</button>
        </div>
    </div>
</form>
<?php
require_once "new-reply_form.php";
use AddReply\AddReply;
$sdForm = new AddReply();
?>
<form upload_attachment="this-form" role="form" action="<?=API_BASE_URL . "notifications/clients/create-reply";?>"
    method="POST" make-general-posts="Create Reply?">
    <div class="row justify-content-center">
        <?=$sdForm->main_content($tf, $ccApi);?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?=AccountInfoId;?>" />
            <input type="hidden" name="admin_user_id" value="<?=$user_id;?>" />
            <input type="hidden" name="comment_id" value="<?=$comment_id;?>" />
            <input type="hidden" name="notification_id" value="<?=$notification_id;?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Create Reply</button>
        </div>
    </div>
</form>
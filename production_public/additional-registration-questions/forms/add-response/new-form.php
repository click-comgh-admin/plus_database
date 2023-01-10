<?php
require_once "form.php";
use AddQuestionResponse\AddQuestionResponse;
$aqrForm = new AddQuestionResponse($responses);
?>

<form role="form" action="<?=API_BASE_URL . "system-questions/registration/add-response";?>"
    method="POST" make-general-posts="Add Response?">
    <div class="row justify-content-center">
        <?=$aqrForm->main_content($tf, $ccApi);?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?=AccountInfoId;?>" />
            <input type="hidden" name="admin_user_id" value="<?=$user_id;?>" />
            <input type="hidden" name="original_question_id" value="<?= $questionId; ?>" />
        </div>
        <div class="col-lg-12 col-md-12 text-center">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill">
                Add Response
            </button>
        </div>
    </div>
</form>
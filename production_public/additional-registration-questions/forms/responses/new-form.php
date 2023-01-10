<?php
require_once "form.php";
use QuestionResponse\QuestionResponse;
use QuestionResponse\QuestionResponseList;

foreach ($question as $key => $_q) {
    // print_r($_q);
    // echo "question['id'] => ".$_q['id']. "----<br>";
    $qfForm = new QuestionResponse($responses, $questionId);
    $qfForm->data = $_q; ?>
    <form>
        <div class="row justify-content-center">
            <?=$qfForm->main_content($tf, $ccApi);?>
        </div>
    </form>
<?php }

foreach ($responses as $key => $_response) {
    
    $qrlForm = new QuestionResponseList();
    $qrlForm->data = $_response;
    $postData = json_encode([
        "original_question_id" => $questionId, "response_id" => $_response['id'],
        "client_id" => AccountInfoId, "admin_user_id" => AccountInfoUserId,
    ]); ?>
    <form role="form" action="<?=API_BASE_URL . "system-questions/registration/update-response";?>"
        method="POST" make-general-posts="Update Response <?= (int)$key + 1; ?>?">
        <div class="row justify-content-center">
            <?=$qrlForm->main_content($tf, $ccApi);?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" name="client_id" value="<?=AccountInfoId;?>" />
                <input type="hidden" name="admin_user_id" value="<?=$user_id;?>" />
                <input type="hidden" name="original_question_id" value="<?=$questionId;?>" />
                <input type="hidden" name="response_id" value="<?=$_response['id'];?>" />
            </div>
            <div class="col-lg-7 col-md-7 text-center">
                <button type="submit"
                    class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill">Update Response</button>
                <button type="submit"
                    class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill"
                    btn-submit-post='<?=$postData;?>' btn-submit-post--confirm="Delete Response?"
                    btn-submit-post--url="<?=API_BASE_URL . "system-questions/registration/delete-response";?>">
                    Delete
                </button>
                <?= count($responses) === ((int)$key+1)? "": "<hr>"; ?> 
            </div>
        </div>
    </form>
<?php }
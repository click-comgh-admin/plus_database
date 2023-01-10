<?php
require_once "form.php";
use QuestionsForm\QuestionsForm; 

$aqForm = new QuestionsForm($question_types);?>

<form role="form" action="<?=API_BASE_URL . "system-questions/registration/add-question";?>"
    method="POST" make-general-posts="Add Question?">
    <div class="row justify-content-center">
        <?=$aqForm->main_content($tf, $ccApi);?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?=AccountInfoId;?>" />
            <input type="hidden" name="admin_user_id" value="<?=$user_id;?>" />
        </div>
        <div class="col-lg-12 col-md-12 text-center">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill">
                Add Question
            </button>
        </div>
    </div>
</form>

<?php 

if (isset($questions[0]) && is_array($questions)) {
    foreach ($questions as $key => $formQuestion) {
        // echo "question['id'] => ".$question['id']. "----<br>";
        if (isset($formQuestion['question'])) {
            $question = $formQuestion['question'];
            // echo "<pre>";
            // print_r($formQuestion);
            // echo "</pre>";
    
            $qfForm = new QuestionsForm($question_types);
            $qfForm->data = $question;
            $postData = json_encode([
                "original_question_id" => $question['id'],
                "client_id" => AccountInfoId, "admin_user_id" => AccountInfoUserId,
            ]); //print_r($postData); ?>
            <form role="form" action="<?=API_BASE_URL . "system-questions/registration/insert";?>"
                method="POST" make-general-posts="Update Question <?= (int)$key + 1; ?>?">
                <div class="row justify-content-center">
                    <?=$qfForm->main_content($tf, $ccApi);?>
                    <div class="col-lg-12 col-md-12">
                        <input type="hidden" name="client_id" value="<?=AccountInfoId;?>" />
                        <input type="hidden" name="admin_user_id" value="<?=$user_id;?>" />
                        <input type="hidden" name="original_question_id" value="<?=$question['id'];?>" />
                    </div>
                    <div class="col-lg-12 col-md-12 text-right">
                        <?php
                            if ((int)$question['type']['id'] === 4 || (int)$question['type']['id'] === 5) { ?>
                                <a type="button" href="<?= Current_BaseUrl; ?>responses?question-id=<?= $question['id']; ?>"
                                    class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill">Question Responses</a>
                            <?php }
                        ?>
                        <button type="submit"
                            class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill">Update Question</button>
                        <button type="submit"
                            class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill"
                            btn-submit-post='<?=$postData;?>' btn-submit-post--confirm="Remove Question?"
                            btn-submit-post--url="<?=API_BASE_URL . "system-questions/registration/delete";?>">Remove</button>
                    </div>
                </div><hr>
            </form>
        <?php }
    }
}
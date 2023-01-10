<?php
require_once "form.php";
// echo "<pre>";
// print_r($question);
// echo "</pre>";
if (isset($question[0]['question'])) {
    $question = $question[0]['question'];
    if ((int)$question['type']["id"] === 10 || (int)$question['type']["id"] === 11) {

        $get_string = "system-questions/form/member-response?question-id=$questionId&member-id=$memberId&response-id=$memberResponseId&client-id=".AccountInfoId;
        $memberResponse = $ccApi->fetch_from($get_string, function ($memberResponse) {
            return isset($memberResponse['responses'][0]['response']) ? $memberResponse['responses'][0]['response'] : [];
        }, $debug = false);
        $actionUrl = API_BASE_URL . "system-questions/form/save-question-response";

        $ffuForm = new FormFileUploader\FormFileUploader(
            $memberId, $memberResponseId,
            $question, $memberResponse
        ); ?>
    
        <form upload_attachment="this-form" role="form" action="<?= $actionUrl; ?>"
            method="POST" make-general-posts="Upload File(s)?">
            <div class="row justify-content-center">
                <?=$ffuForm->main_content($tf, $ccApi);?>
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?=AccountInfoId;?>" />
                    <input type="hidden" name="member_id" value="<?=$memberId;?>" />
                    <input type="hidden" name="question_id" value="<?=isset($question['id']) ? $question['id'] : 0;?>" />
                </div>
                <div class="col-lg-12 col-md-12 text-center">
                    <button type="submit"
                        class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill">
                        Upload File(s)
                    </button>
                </div>
            </div>
        </form>
    <?php } else { ?>
        <h1 class="fa fa-2x">Question Does Not Require File Upload</h1>
    <?php }
    
} else {?>
    <h1 class="fa fa-2x">Question ???</h1>
<?php }



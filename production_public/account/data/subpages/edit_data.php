<?php
    use CustomForm\CustomForm;
    
    $member_id = isset($_GET["member"]) ? $_GET["member"] : "";
    $member_id = $encryptor->decrypt($member_id);

    $get_string = "question_types";
    $ques_types = $ccApi->custom_form($get_string, function($question_types) {
        return @$question_types;
    }, $debug = 0);
    $cf = new CustomForm($tf, DIRECTORY, $ques_types, $method = "post");
?>
<div class="">
    <div class="main-card mb-3 card shadow">
        <?php
            $get_string = "question/form?client_id=$account_id&id=".$_GET['form'];
            $form = $ccApi->custom_form($get_string, function($form)
            {
                return @$form;
            }, $debug = false);
        ?>
        <div class="card-header">Form => <?= @$form[0]['pdcqq_form']; ?></div>
        <div class="card-body">
            <?php
                $get_string = "question/questions?client_id=$account_id&form_id=".$_GET['form'];
                $questions = $ccApi->custom_form($get_string, function($questions)
                {
                    return @$questions;
                }, $debug = false);
                
                $get_string = "response/response?client_id=$account_id&form_id=".$_GET['form']."&member_id=$member_id";
                $response = $ccApi->custom_form($get_string, function($response)
                {
                    return isset($response[0])? @$response[0]:$response;
                }, $debug = false);
            ?>
            <pre><?php //print_r($response); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <div class="row justify-content-center">
                        <?php
                            if (empty($response)) { ?>
                                <h4 class="text-muted">No Data Found.</h4>
                            <?php } else {
                                $responseInfo = $response['response'];
                                require_once BASE_DIRECTORY."/custom-forms/data/forms/edit_form.php";
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
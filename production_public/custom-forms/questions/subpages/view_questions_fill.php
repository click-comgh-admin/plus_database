<?php
    use CustomForm\CustomForm;

    $get_string = "question_types";
    $ques_types = $ccApi->custom_form($get_string, function($question_types) {
        return @$question_types;
    }, $debug = 0);
    $cf = new CustomForm($tf, DIRECTORY, $ques_types, $method = "post");
?>
<div class="col-md-12 col-lg-12">
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
            ?>
            <pre><?php //print_r($questions); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <div class="row justify-content-center">
                        <?php
                            if (empty($questions)) { ?>
                                <h4 class="text-muted">No Question(s) Created.</h4>
                            <?php } else {
                                require_once BASE_DIRECTORY."/custom-forms/questions/forms/fill_form.php";
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
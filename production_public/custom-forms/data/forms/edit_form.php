<div class="container">
    <?php
        if (isset($_POST) && !empty($_POST)) {
            define("POST_URL", API_BASE_URL."custom-form/clients/data/edit");
            require_once 'edit_form - processing.php';
        }
    ?>
</div>
<?php
    use CustomForm\CustomForm;

    $get_string = "question_types";
    $ques_types = $ccApi->custom_form($get_string, function($question_types) {
        return @$question_types;
    }, $debug = 0);
    $cf = new CustomForm($tf, DIRECTORY, $ques_types, $method = "post");
?>
<form role="form" action="<?= API_BASE_URL."custom-form/clients/data/edit"; ?>" method="POST" enctype="multipart/form-data" make-general-posts="Submit Response?">
<!-- <form role="form" action="<?= customForms_BaseUrl . "data/custom-form?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data"> -->
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="row justify-content-center">
                <?php
                    $rIs = [];
                    foreach ($responseInfo as $key => $rI) {
                        if (!in_array($rI['question_id'], $rIs)) {
                            array_push($rIs, $rI['question_id']);
                        }
                    }
                    $rIsAll = [];
                    foreach ($responseInfo as $key => $rI) {
                        if (!in_array($rI, $rIsAll)) {
                            array_push($rIsAll, $rI);
                        }
                    }
                    foreach ($questions as $question_key => $question) {
                        foreach ($rIs as $rI_key => $rI) {
                            if ($question['pdcqq_id'] == $rI) {
                                if ((int)$question['pdcqq_type'] == 2) {
                                    $cf->default = @$rIsAll[$rI_key]['raw_response'][0];
                                } else {
                                    $cf->default = @$rIsAll[$rI_key]['raw_response'];
                                }
                            }
                        }
                        $get_string = "question/responses?client_id=$account_id&question_id=".$question['pdcqq_id'];
                        $responses = $ccApi->custom_form($get_string, function($responses)
                        {
                            return @$responses;
                        }, $debug = false);

                        $options = [];
                        foreach ($responses as $response_key => $response) {
                            $option = ["id"=>$response['pdcqq_id'], "name"=>$response['pdcqq_response']];
                            if (!in_array($option, $options)) {
                                array_push($options, $option);
                            }
                        }
                        $cf->options = $options; ?>
                        <div class="col-lg-6 col-md-6">
                            <?= $cf->makeInput($question['pdcqq_question'], $question['pdcqq_type']); ?>
                        </div>
                    <?php }
                ?>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="form_id" value="<?= $_GET['form']; ?>" />
                    <input type="hidden" name="member_id" value="<?= $member_id; ?>" />
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Data</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

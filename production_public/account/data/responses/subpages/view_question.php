<?php
    use CustomForm\CustomForm;

    $get_string = "question_types";
    $ques_types = $ccApi->custom_form($get_string, function($question_types) {
        return @$question_types;
    }, $debug = 0);
    $cf = new CustomForm($tf, DIRECTORY, $ques_types);
?>
<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <?php
            $get_string = "question/question?client_id=$account_id&id=".$_GET['question'];
            $question = $ccApi->custom_form($get_string, function($question)
            {
                return @$question;
            }, $debug = false);
            $question = @$question[0];
            
            $get_string = "question/responses?client_id=$account_id&question_id=".$_GET['question'];
            $responses = $ccApi->custom_form($get_string, function($responses)
            {
                return @$responses;
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

                function show_info_btn($question, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                    <button class="<?= $class; ?>" type="button" data-toggle="modal"
                        open-modal--id="info_form-<?= $question['pdcqq_id']; ?>" open-modal--title="Question Info"
                        open-modal--html='<?php 
                            $created_by = !empty($question['pdcqq_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                            $date = date('Y/ m/ d', strtotime(@$question['pdcqq_date']));
                            $timeAgo = !empty($question) ? @$TimeAgo->get(): "-";
            
                            $updated_by = !empty($question['pdcqq_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                            $updated_date = date('Y/ m/ d', strtotime(@$question['pdcqq_update_date']));
                            $updated_timeAgo = !empty($question) ? @$updated_TimeAgo->get(): "-";
            
                            show_info(
                                $created_by = $created_by, $date = $date, $timeAgo = $timeAgo,
                                $updated_by = $updated_by, $updated_date = $updated_date,
                                $updated_timeAgo = $updated_timeAgo, $question
                            ); 
                        ?>' open-modal--buttons='
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                        '>
                        Info <span class="ml-1 pe-7s-info"></span>
                    </button>
                <?php }
            
                function show_info($created_by, $date, $timeAgo, $updated_by, $updated_date, $updated_timeAgo, $question) { ?>
                    <table class="align-middle mb-1 table table-bor derless table-striped table-hover">
                        <tbody>
                            <tr>
                                <th>Created By</th>
                                <td><?= $created_by; ?></td>
                            </tr>
                            <tr>
                                <th>Creation Time</th>
                                <td>
                                    <u>
                                        <?= $date; ?>
                                    </u>
                                    <br class="m-0" />
                                    <i><?= $timeAgo; ?></i>
                                </td>
                            </tr>
                        </tbody class="my-1">
                    </table>
                    <table class="align-middle mt-1 mb-0 table table-bor derless table-striped table-hover">
                        <tbody>
                            <tr>
                                <th>Updated By</th>
                                <td><?= $updated_by; ?></td>
                            </tr>
                            <tr>
                                <th>Updated Time</th>
                                <td>
                                    <u>
                                        <?= $updated_date; ?>
                                    </u>
                                    <br class="m-0" />
                                    <i><?= $updated_timeAgo; ?></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <?php }
            ?>
            <pre><?php //print_r($responses); ?></pre>
            
            <div class="container card bg-light my-0 mb-2 pt-3 pb-0">
                <?php
                    $options = [];
                    foreach ($responses as $response_key => $response) {
                        $option = ["id"=>$response['pdcqq_id'], "name"=>$response['pdcqq_response']];
                        if (!in_array($option, $options)) {
                            array_push($options, $option);
                        }
                    }
                    $cf->options = $options;
                ?>
                <?=  $cf->makeInput($question['pdcqq_question'], $question['pdcqq_type']); ?>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <div class="table-responsive">
                        <?php
                            if ((int)$question['pdcqq_type'] == 1 || (int)$question['pdcqq_type'] == 4) {} else {
                                if (empty($responses)) { ?>
                                    <h4 class="text-muted">No Responses Created.</h4>
                                <?php } else { ?>
                                    <table class="align-middle mb-0 table table-b orderless table-bordered table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-center">#</th>
                                                <th style="white-space: nowrap;">Question</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                foreach ($responses as $response_key => $response) {
                                                    if (!empty($response)) {
                                                        $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$response['pdcqq_date'])));
        
                                                        $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$response['pdcqq_created_by'],
                                                        function ($info) {
                                                            return @$info[0];
                                                        });
        
                                                        $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$response['pdcqq_update_date'])));
        
                                                        $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$response['pdcqq_updated_by'],
                                                        function ($info) {
                                                            return @$info[0];
                                                        });
                                                    }  ?>
                                                    <tr>
                                                        <td class="p-0">
                                                            <div class="widget-content p-3">
                                                                <div class="widget-content-wrapper">
                                                                    <div class="widget-content-center ml-auto mr-auto">
                                                                        <div class="widget-content-center">
                                                                            <span class="pe-7s-note fa-2x"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="container">
                                                                <div class="row">
                                                                    <h6 class="col-md-12 card-title"><?= $response['pdcqq_response']; ?></h6>
                                                                    <div class="col-md-4">
                                                                        <?= show_info_btn($response, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "btn my-1 btn-info btn-sm w-100"); ?>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <a href="<?= customForms_BaseUrl; ?>questions/responses/create-form?form=<?= $_GET['form']; ?>&question=<?= $_GET['question']; ?>&edit=<?= $response['pdcqq_id']; ?>" class="btn my-1 btn-warning btn-sm w-100" form="button">
                                                                            Edit <span class="ml-1 pe-7s-edit"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <button form="button" class="btn my-1 btn-danger btn-sm w-100"
                                                                            btn-submit-post=<?= json_encode(["response_id"=>$response['pdcqq_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                                            btn-submit-post--confirm="Delete Response?"
                                                                            btn-submit-post--url="<?= API_BASE_URL."custom-form/clients/form/question/response/delete"; ?>">
                                                                            Delete <span class="pe-7s-trash"></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                <?php }
                                            ?>
                                        </tbody>
                                    </table>
                                <?php }
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
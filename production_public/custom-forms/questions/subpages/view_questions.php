<div class="col-md-12 col-lg-7">
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

                function show_info_btn($question, $question_type, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
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
                                $updated_timeAgo = $updated_timeAgo, $question, $question_type
                            ); 
                        ?>' open-modal--buttons='
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                        '>
                        Info <span class="ml-1 pe-7s-info"></span>
                    </button>
                <?php }
            
                function show_info($created_by, $date, $timeAgo, $updated_by, $updated_date, $updated_timeAgo, $question, $question_type) { ?>
                    <div class="card">
                        <div class="card-header">-</div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered table-sm table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Question Type</th>
                                            <td><?= $question_type; ?></td>
                                        </tr>
                                        <tr>
                                            <th>Question Number</th>
                                            <td><?= $question['pdcqq_question_number']; ?></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">-</div>
                    </div>
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
            <pre><?php //print_r($questions); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <div class="table-responsive">
                        <?php
                            if (empty($questions)) { ?>
                                <h4 class="text-muted">No Question(s) Created.</h4>
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
                                            foreach ($questions as $question_key => $question) {
                                                if (!empty($question)) {
                                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$question['pdcqq_date'])));
    
                                                    $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$question['pdcqq_created_by'],
                                                    function ($info) {
                                                        return @$info[0];
                                                    });
    
                                                    $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$question['pdcqq_update_date'])));
    
                                                    $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$question['pdcqq_updated_by'],
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
                                                                        <span class="pe-7s-note fa-2x"> -</span> #<?= $question['pdcqq_question_number']; ?>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="container">
                                                            <div class="row">
                                                                <h6 class="col-md-12 card-title"><?= $question['pdcqq_question']; ?></h6>
                                                                <div class="col-md-3">
                                                                    <?php 
                                                                        $get_string = "question_type?id=".$question['pdcqq_type'];
                                                                        $question_type = $ccApi->custom_form($get_string, function($question_type)
                                                                        {
                                                                            return @$question_type[0]['pdcqq_type'];
                                                                        }, $debug = false);
                                                                    ?>
                                                                    <?= show_info_btn($question, $question_type, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "btn my-1 btn-info btn-sm w-100"); ?>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <a href="<?= customForms_BaseUrl; ?>questions/responses/create-form?form=<?= $_GET['form']; ?>&question=<?= $question['pdcqq_id']; ?>" class="btn my-1 btn-success btn-sm w-100" form="button">
                                                                        Open <span class="ml-1 pe-7s-link"></span>
                                                                    </a>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <a href="<?= customForms_BaseUrl; ?>questions/create-form?form=<?= $_GET['form']; ?>&edit=<?= $question['pdcqq_id']; ?>" class="btn my-1 btn-warning btn-sm w-100" form="button">
                                                                        Edit <span class="ml-1 pe-7s-edit"></span>
                                                                    </a>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <button form="button" class="btn my-1 btn-danger btn-sm w-100"
                                                                        btn-submit-post=<?= json_encode(["form_id"=>$_GET['form'], "question_id"=>$question['pdcqq_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                                        btn-submit-post--confirm="Delete Question?"
                                                                        btn-submit-post--url="<?= API_BASE_URL."custom-form/clients/form/question/delete"; ?>">
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
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
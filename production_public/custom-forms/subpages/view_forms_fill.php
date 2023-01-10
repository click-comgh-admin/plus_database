<div class="col-md-12 col-lg-12">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Custom Forms</div>
        <div class="card-body">
            <?php
                $get_string = "question/forms?client_id=$account_id";
                $forms = $ccApi->custom_form($get_string, function($forms)
                {
                    return @$forms;
                }, $debug = false);

                function show_info_btn($form, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                    <button class="<?= $class; ?>" type="button" data-toggle="modal"
                        open-modal--id="info_form-<?= $form['pdcqq_id']; ?>" open-modal--title="Form Info"
                        open-modal--html='<?php 
                            $created_by = !empty($form['pdcqq_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                            $date = date('Y/ m/ d', strtotime(@$form['pdcqq_date']));
                            $timeAgo = !empty($form) ? @$TimeAgo->get(): "-";
            
                            $updated_by = !empty($form['pdcqq_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                            $updated_date = date('Y/ m/ d', strtotime(@$form['pdcqq_update_date']));
                            $updated_timeAgo = !empty($form) ? @$updated_TimeAgo->get(): "-";
            
                            show_info(
                                $created_by = $created_by, $date = $date, $timeAgo = $timeAgo,
                                $updated_by = $updated_by, $updated_date = $updated_date,
                                $updated_timeAgo = $updated_timeAgo, $form
                            ); 
                        ?>' open-modal--buttons='
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                        '>
                        Info <span class="ml-1 pe-7s-info"></span>
                    </button>
                <?php }
            
                function show_info($created_by, $date, $timeAgo, $updated_by, $updated_date, $updated_timeAgo, $form) { ?>
                    <div class="card">
                        <div class="card-header">Form Info</div>
                        <div class="card-body"><?= str_replace("'", "&#39;", multiline_text($form['pdcqq_form_info'])); ?></div>
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
            <pre><?php //print_r($forms); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-8 col-xl-7">
                    <div class="table-responsive">
                        <?php
                            if (empty($forms)) { ?>
                                <h4 class="text-muted">No Form(s) Created.</h4>
                            <?php } else { ?>
                                <table class="align-middle mb-0 table table-b orderless table-bordered table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th style="white-space: nowrap;">Form</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                            foreach ($forms as $form_key => $form) {
                                                if (!empty($form)) {
                                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$form['pdcqq_date'])));
    
                                                    $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$form['pdcqq_created_by'],
                                                    function ($info) {
                                                        return @$info[0];
                                                    });
    
                                                    $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$form['pdcqq_update_date'])));
    
                                                    $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$form['pdcqq_updated_by'],
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
                                                                <h6 class="col-md-12 card-title"><?= $form['pdcqq_form']; ?></h6>
                                                                <div class="col-md-3">
                                                                    <?= show_info_btn($form, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "btn my-1 btn-info btn-sm w-100"); ?>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <a href="<?= customForms_BaseUrl; ?>questions/custom-form?form=<?= $form['pdcqq_id']; ?>" class="btn my-1 btn-success btn-sm w-100" form="button">
                                                                        Open <span class="ml-1 pe-7s-link"></span>
                                                                    </a>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <a href="<?= customForms_BaseUrl; ?>data/custom-form?form=<?= $form['pdcqq_id']; ?>" class="btn my-1 bg-grow-early text-white font-weight-bold btn-sm w-100" form="button">
                                                                        Data <span class="ml-1 pe-7s-server"></span>
                                                                    </a>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <button form="button" class="btn my-1 btn-danger btn-sm w-100"
                                                                        btn-submit-post=<?= json_encode(["form_id"=>$form['pdcqq_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                                        btn-submit-post--confirm="Delete Form?"
                                                                        btn-submit-post--url="<?= API_BASE_URL."custom-form/clients/form/delete"; ?>">
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
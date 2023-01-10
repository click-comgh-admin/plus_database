<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Question Edit</div>
        <div class="card-body">
            <?php
                $get_string = "question/question?client_id=$account_id&id=".$_GET['edit'];
                $question = $ccApi->custom_form($get_string, function($question)
                {
                    return isset($question[0]) ? @$question[0] : [];
                }, $debug = false);
            ?>
            <!-- <pre><?php //print_r($question); ?></pre> -->
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($question)) { ?>
                            <h4 class="text-muted">Question Does Not Exist.</h4>
                        <?php } else {
                            require_once BASE_DIRECTORY."/custom-forms/questions/forms/edit_form.php";
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
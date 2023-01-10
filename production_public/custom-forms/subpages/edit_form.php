<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Form Edit</div>
        <div class="card-body">
            <?php
                $get_string = "question/form?client_id=$account_id&id=".$_GET['edit'];
                $form = $ccApi->custom_form($get_string, function($form)
                {
                    return isset($form[0]) ? @$form[0] : [];
                }, $debug = false);
            ?>
            <!-- <pre><?php //print_r($form); ?></pre> -->
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($form)) { ?>
                            <h4 class="text-muted">Form Does Not Exist.</h4>
                        <?php } else {
                            require_once BASE_DIRECTORY."/custom-forms/forms/edit_form.php";
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
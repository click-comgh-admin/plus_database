<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Question Edit</div>
        <div class="card-body">
            <?php
                $get_string = "question/response?client_id=$account_id&id=".$_GET['edit'];
                $response = $ccApi->custom_form($get_string, function($response)
                {
                    return isset($response[0]) ? @$response[0] : [];
                }, $debug = false);
            ?>
            <!-- <pre><?php //print_r($response); ?></pre> -->
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($response)) { ?>
                            <h4 class="text-muted">Response Does Not Exist.</h4>
                        <?php } else {
                            require_once BASE_DIRECTORY."/custom-forms/questions/responses/forms/edit_form.php";
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
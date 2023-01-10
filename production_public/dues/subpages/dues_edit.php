<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Due Types Edit</div>
        <div class="card-body">
            <?php
                $get_string = "type?account_id=$account_id&id=".$_GET['edit'];
                $type = $ccApi->dues($get_string, function($type)
                {
                    return @$type;
                }, $debug = false);
            ?>
            <pre><?php //print_r($type); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($type)) { ?>
                            <h4 class="text-muted">Due Type Does Not Exist.</h4>
                        <?php } else {
                            require_once BASE_DIRECTORY."/dues/forms/edit_due_type.php";
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-contact-form-type']) && ($_POST["add-contact-form-type"] == "excel-group")) {
            define("POST_URL", API_BASE_URL."communications/clients/contacts/group/excel");
            require_once 'contact_add_excel - processing.php';
        }
    }
?>
<!-- <form role="form" action="<?= ComBaseUrlAlt . "?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data" make-gener al-posts="Upload Excel Contact?"> -->

<form role="form" action="<?= API_BASE_URL."communications/clients/contacts/group/excel"; ?>" method="POST" enctype="multipart/form-data" make-general-posts="Upload Excel Contact to Group?">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="contact_group" />
        <input type="hidden" name="add-contact-form-type" value="excel-group" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Select Excel File";
                        $id_name = "xls_file";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" accept=".xls,.xlsx" lang="en"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-file-excel-o fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"file" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit- btn btn-outline-success container" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="group_id" value="<?= @$_GET['group']; ?>" />
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="container fa">
                        Click <button class="btn btn-sm btn-outline-info p-1" autofocus="" type="button" data-toggle="modal"
                            open-modal--id="AddExcelBulkContactToListRules"
                            open-modal--title="Excel Upload Instructions" open-modal--html='<?php 
                                echo instructions($load_countries); 
                            ?>' open-modal--buttons='
                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                            '>
                            <span>Here</span>
                        </button> to read instructions.
                    </div>
                    <div class="modal fade" id="AddExcelBulkContactToListRules" tabindex="-1" role="dialog" aria-labelledby="AddExcelBulkContactToListRules" aria-hidden="true">
                        <div class="modal-dialog modal-notify modal-info" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <p class="heading lead">Add Bulk <span class="fa fa-file-excel-o" style="color: #ffffff;"></span> Contact(s)</p>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" class="white-text">&times;</span>
                                    </button>
                                </div>

                                <div class="modal-body">
                                    
                                </div>

                                <div class="modal-footer py-1">
                                    <a role="button" class="btn btn-outline-info waves-effect py-1" data-dismiss="modal">Close</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Add Contact</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

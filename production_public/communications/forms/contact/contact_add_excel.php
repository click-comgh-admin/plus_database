<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-contact-form-type']) && ($_POST["add-contact-form-type"] == "excel")) {
            define("POST_URL", API_BASE_URL."communications/clients/contacts/excel");
            require_once 'contact_add_excel - processing.php';
        }
    }
?>
<!-- <form role="form" action="<?= ComBaseUrlAlt . "?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data" make-gener al-posts="Upload Excel Contact?"> -->

<form role="form" action="<?= API_BASE_URL."communications/clients/contacts/excel"; ?>" method="POST" enctype="multipart/form-data" make-general-posts="Upload Excel Contact?">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="contact" />
        <input type="hidden" name="add-contact-form-type" value="excel" />
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
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="container fa">
                        Click <button class="btn btn-sm btn-outline-info p-1" autofocus="" type="button" data-toggle="modal"
                            open-modal--id="AddExcelBulkContactToListRules"
                            open-modal--title="Excel Upload Instructions" open-modal--html='<?php 
                                if (!function_exists("instructions")) {
                                    function instructions($load_countries)
                                    {     
                                        if (!function_exists("countries_loader")) {                
                                            function countries_loader($cc)
                                            {
                                                $qust = '<option value="Select Your Country">';
                                                foreach ($cc as $c) {
                                                    $qust .= '<option value="'.str_replace("'", "~", $c->Name).'">'.$c->Short.'</option>';
                                                }
                                                return $qust;
                                            }
                                        } ?>
                                        <div class="container fa">
                                            <p>
                                                Upload <span class="fa fa-file-excel-o"> Excel File </span>. [ <a href="" download="">Download Template File</a>. ]
                                            </p>
                                            <div class="d-block">
                                                <div class="col-lg-12 px-0">
                                                    <label for="membershipinput15_1">Check Country Name</label>
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-append ms-input-icon">
                                                            <span class="input-group-text" style="font-weight: 700;">
                                                                <i class="fa fa-flag"></i>
                                                            </span>
                                                        </div>
                                                        <input list="data-quest-2" type="text" id="country" class="form-control p-2 __f-c__ p-2" style="padding-top: 5px; padding-bottom: 5px;height: 38px;border-top-right-radius: 30px;border-bottom-right-radius: 30px;" placeholder="Country" name="country" required="" />
                                                        <datalist class="" id="data-quest-2">
                                                            <?= countries_loader($load_countries); ?>
                                                        </datalist>
                                                    </div>
                                                </div>
                                                <p class="text-warning">Please Enter Country Name as it appears in the list above.</p>
                                            </div>
                                            <div class="table-responsive">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th>Columns</th>
                                                            <th align="center"><span class="fa fa-info"></span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>1</th>
                                                            <td>
                                                                <p class="my-1">Contact Name => Required</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>2</th>
                                                            <td>
                                                                <p class="my-1">Contact Phone => Required</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>3</th>
                                                            <td>
                                                                <p class="my-1">Contact Description => Optional</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>4</th>
                                                            <td>
                                                                <p class="my-1">Contact Country => Optional </p>
                                                                <p class="my-1">[ If country is left blank default country will be set, i.e to account country ].</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>  
                                    <?php }
                                }
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

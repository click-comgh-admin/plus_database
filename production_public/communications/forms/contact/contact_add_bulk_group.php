<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-contact-form-type']) && ($_POST["add-contact-form-type"] == "bulk-group")) {
            define("POST_URL", API_BASE_URL."communications/clients/contacts/group/bulk");
            require_once 'contact_add_bulk - processing.php';
        }
    }
?>
<form role="form" action="<?= ComBaseUrlAlt . "?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data" make-gen eral-posts="Update Contact?">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="contact_group" />
        <input type="hidden" name="add-contact-form-type" value="bulk-group" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Contact Phone";
                        $id_name = "contact_phone";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST['contact_phone'])) ? $_POST['contact_phone'] : "";

                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="4"';
                        echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Select Country of Residence";
                        $id_name = "country_of_contact_bulk_group";
                    ?>
                    <?php
                        $set_country = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;

                        $countries = '';
                        foreach ($load_countries as $key => $country) {
                            $country_selected = @(strtolower($set_country) == strtolower($country->Name)) ? "selected": "";
                            $countries .= "<option value='".$country->Name."' ".$country_selected.">".$country->Name."</option>";
                        }
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            '.@$countries.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-flag icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-md-12" select-show="country_of_contact_bulk_group">
            <div class="card-header-tab card-header-tab-animation card-header pt-0">
                <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Add Contact Location Data (Optional)
            </div>
            <div class="card-body p-0">
                <div class="collapse py-2" id="add_contact_location_data_group">
                    <div class="row justify-content-center">
                        <?php require "contact_location_details.php"; ?>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                    type="button" data-toggle="collapse" href="#add_contact_location_data_group">Add Location Data</button>
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
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Add Contact</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."communications/clients/contacts/edit");
        require_once 'contact_update - processing.php';
    }
?>
<form role="form" action="<?= API_BASE_URL."communications/clients/contacts/edit"; ?>" method="POST" enctype="multipart/form-data" make-general-posts="Update Contact?">
    <div class="row justify-content-center p-0 m-0">
        <div class="col-md-10 col-lg-7 p-0 m-0" upload-preview-crop--preview="contact-picture">
            <img class="container img-fluid shadow" src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/contact-picture/<?= @$contact['pdccc_photo']; ?>"/>
        </div>
    </div><hr>
    <div class="row justify-content-center p-0 m-0">
        <div class="col-md-7">
            <?php 
				$tittle_placeholder = "Upload Image";
				$id_name = "profile_img";
			?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" accept=".jpg,.jpeg,.png,.gif" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" upload-preview-crop--input="contact-picture"';
	    		echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-photo icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"file" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>      
    </div>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Contact Name";
                        $id_name = "contact_name";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($contact['pdccc_name'])) ? $contact['pdccc_name'] : null;
                        $input_value = (isset($_POST['contact_name'])) ? $_POST['contact_name'] : $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Contact Phone";
                        $id_name = "contact_phone";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($contact['pdccc_contact'])) ? $contact['pdccc_contact'] : null;
                        $input_value = (isset($_POST['contact_phone'])) ? $_POST['contact_phone'] : $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-phone fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Select Country of Residence";
                        $id_name = "contact_country";
                    ?>
                    <?php
                        $set_country = (isset($contact['pdccc_country'])) ? $contact['pdccc_country'] : null;
                        $set_country = (isset($_POST['contact_country'])) ? $_POST['contact_country'] : $set_country;

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
        <div class="col-md-6">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Contact Info";
                        $id_name = "contact_info";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($contact['pdccc_info'])) ? $contact['pdccc_info'] : "";
                        $input_value = (isset($_POST['contact_info'])) ? $_POST['contact_info'] : $input_value;

                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="6"';
                        echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="contact_id" value="<?= $contact['pdccc_id']; ?>" />
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                    <input type="hidden" name="photo-x" />
                    <input type="hidden" name="photo-y" />
                    <input type="hidden" name="photo-width" />
                    <input type="hidden" name="photo-height" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Contact</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

<form role="form" action="<?= API_BASE_URL."client-membership/branch/communications/sms"; ?>" method="POST"
    make-general-posts="Send SMS?">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
        <input type="hidden" name="account_type" value="<?= AccountInfoType; ?>"/>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <?php 
                        $tittle_placeholder = "Select Country of Residence";
                        $id_name = "country";
                    ?>
                    <?php
                        $set_country = (isset($account_info['pdc_country']))? $account_info['pdc_country']: "";
                        $set_country = @(isset($_GET[$id_name])) ? $_GET[$id_name]: $set_country;
                        $countries = '';
                        foreach ($load_countries as $key => $country) {
                            $country_selected = @(strtolower($set_country) == strtolower($country->Name)) ? "selected": "";
                            $countries .= "<option value='".$country->Name."' ".$country_selected.">".$country->Name."</option>";
                        }
                    ?>
                    <?php
                        $input_value = '
                            <option value="all">All Countries</option>
                            '.$countries.'
                        ';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-flag icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-4 col-md-6" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?> select-show="country">
                    <?php 
                        $tittle_placeholder = "Select Region";
                        $id_name = "region";
                    ?>
                    <?php
                        $set_location = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
                        $location = $ccApi->get_location($type=$id_name."s", $get_string = "", function($locations) use($set_location) {
                            $at = '';
                            foreach ($locations as $key => $location) {
                                $location_selected = @((int)$set_location == $location['id']) ? "selected": "";
                                $at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['Region'].'</option>';
                            }
                            return @$at;
                        });
                        $input_value = '
                            <option value="all" selected>All Regions</option>
                            '.$location.'
                        ';
                        $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" no-ajax multiple multiple-query="request" 
                            multiple-query--dependent="district" client_id="'.AccountInfoId.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-4 col-md-6" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?> select-show="country">
                    <?php 
                        $tittle_placeholder = "Select District";
                        $id_name = "district";
                    ?>
                    <?php
                        $set_location = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
                        $location = $ccApi->get_location($type="$id_name", $get_string = "region=" . @$_GET["region"], function($locations) use($set_location) {
                            $at = '';
                            if (is_array($locations) && isset($locations[0]['id'])) {
                                foreach ($locations as $key => $location) {
                                    $location_selected = @((int)$set_location == $location['id']) ? "selected": "";
                                    $at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['District'].'</option>';
                                }
                            }
                            return @$at;
                        });
                        $input_value = '
                            <option value="all" selected>All Districts</option>
                            '.$location.'
                        ';
                        $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple multiple-query="request" 
                            multiple-query--dependent="branches" client_id="'.AccountInfoId.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php
                        $tittle_placeholder = "Select Branch(es)";
                        $id_name = "branches";
                    ?>
                    <?php
                        $input_value = '
                            <option value="all" selected>All Branches</option>
                        ';
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'" multiple multiple-query="request" client_id="'.AccountInfoId.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-share fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit- " ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php
                        $tittle_placeholder = "Select Recipient(s) Type";
                        $id_name = "contact_type";
                    ?>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            <option value="4">Branch Administration</option>
                            <option value="1">All Members</option>
                            <option value="2">All Female Members</option>
                            <option value="3">All Male Members</option>
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" select_show_type="members" acc_id="'.$account_id.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit- " ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php
                        $tittle_placeholder = "Age Range";
                    ?>
                    <h6>
                        Select <?= $tittle_placeholder; ?>
                        <i class="ml-2 custom-checkbox custom-control small">
                            <input class="custom-control-input" name="age_range" id="age_range" type="checkbox">
                            <label class="custom-control-label text-warning" for="age_range">
                                [Check to select Age range when sending to members]
                            </label>
                        </i>
                    </h6>
                    <div class="input-group mb-3 text-center">
                        <div class="input-group-prepend" style="width: 45%;">
                            <?php
                                $id_name = "age_range-from";
                                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : "";

                                $input_value = 'value="'.$input_value.'" min="1" max="99" ';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.': From"';
                                echo $tf->use(DIRECTORY."/templates/form/input-basic.tmpl", [
                                    [ "name"=>"type", "value"=>"number" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"main_class", "value"=>"w-100" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div>
                        <b class="p-1" style="width: 10%;">To</b>
                        <div class="input-group-append" style="width: 45%;">
                            <?php
                                $id_name = "age_range-to";
                                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : "";

                                $input_value = 'value="'.$input_value.'" min="1" max="99" ';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.': To"';
                                echo $tf->use(DIRECTORY."/templates/form/input-basic.tmpl", [
                                    [ "name"=>"type", "value"=>"number" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"main_class", "value"=>"w-100" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php
                        $account_sms_id = $ccApi->account_sms_id($all="id", $id=$account_id, function ($account_sms_ids) {
                            return @$account_sms_ids[0];
                        });
                        function make_sms_id($account_name)
                        {
                            $an_parts = explode(" ", $account_name);
        
                            if (isset($an_parts[1])) {
                                $part_1 = $an_parts[0];
                                $part_2 = $an_parts[1];
                                return substr($part_1, 0, 5)."-".substr($part_2, 0, 5);
                            } else {
                                return substr($account_name, 0, 10);
                            }
                        }
                    ?>
                    <?php
                        $tittle_placeholder = "Enter Your SMS ID";
                        $id_name = "account_sms_id";
                    ?>
                    <br>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($account_sms_id['pdcc_sms_id'])) ? $account_sms_id['pdcc_sms_id'] : make_sms_id($account_info['pdc_name']);
                        $input_value = (isset($_POST['account_sms_id'])) ? $_POST['account_sms_id'] : $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-tools icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Subject";
                $id_name = "subject";
            ?>
            <?php
                $input_value = (isset($_POST['subject'])) ? $_POST['subject'] : null;

                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"fa fa-heading fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Message";
                $id_name = "message";
            ?>
            <?php
                $input_value = (isset($_POST['message'])) ? $_POST['message'] : "";

                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6"';
                echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                    [ "name"=>"default_value", "value"=>$input_value ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
            <p class="fa pull-right card" style="padding: 3px; font-weight: bold;"><span characters-remaining="<?= $id_name; ?>"></span></p>
        </div>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <select name="mAttachment[]" class="no-select2 d-none" multiple="true"></select>
        </div>
        <div class="col-lg-12 col-md-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Send Message</button>
        </div>
    </div>
</form>
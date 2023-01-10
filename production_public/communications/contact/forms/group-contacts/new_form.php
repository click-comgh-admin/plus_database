<?php
    namespace ContactForm;
    class ContactForm
    {
        public $data = [];
        public $inputCol = "col-lg-4 col-md-6";
        public $load_countries = [];
        private $type = 1; // 1==All/ 2==Bulk/ 3==Excel

        function __construct(int $type = 1)
		{
			$this->type = $type;
		}

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-warning p-0 mb-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        public function main_content(int $account_id = 0, $account_status, $tf, $ccApi)
        { //print_r($this->data); ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?php
                        if ((int)$this->type === 1) { ?>
                            <?= $this->header("Contact Details."); ?>
                            <input type="hidden" name="add-form" value="contact_group" />
                            <input type="hidden" name="add-contact-form-type" value="individual-group" />
                            <div class="<?= (isset($this->data["pdccc_photo"]) && !empty($this->data["pdccc_photo"]))? "col-lg-4 col-md-3": "col-md-12"; ?>"></div>
                            <div class="<?= (isset($this->data["pdccc_photo"]) && !empty($this->data["pdccc_photo"]))? "col-lg-4 col-md-6": "col-md-12"; ?>">
                                <?php
                                    if (isset($this->data["pdccc_photo"]) && !empty($this->data["pdccc_photo"])) { ?>
                                        <div class="row justify-content-center p-0 m-0">
                                            <div class="col-md-10 col-lg-7 p-0 m-0" upload-preview-crop--preview="contact-picture">
                                                <img class="container img-fluid shadow" src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/contact-picture/<?= @$this->data["pdccc_photo"]; ?>"/>
                                            </div>
                                        </div><hr>
                                        <input type="hidden" name="photo-x" />
                                        <input type="hidden" name="photo-y" />
                                        <input type="hidden" name="photo-width" />
                                        <input type="hidden" name="photo-height" />
                                    <?php }
                                ?>
                                <?php 
                                    $tittle_placeholder = "Upload Image";
                                    $id_name = "profile_img";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $input_value = 'value=""';

                                    $previewer = (isset($this->data["pdccc_photo"]) && !empty($this->data["pdccc_photo"]))? 'upload-preview-crop--input="contact-picture"': '';
                                    
                                    $input_attributes = ''.$input_value.' name="'.$id_name.'" accept=".jpg,.jpeg,.png,.gif" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" '.$previewer. '';
                                    echo $tf->use(DIRECTORY."/templates/form/input-icon--both.tmpl", [
                                        [ "name"=>"icon", "value"=>"pe-7s-photo icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"icon_other", "value"=>"pe-7s-text--view icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"icon_attributes__other", "value"=>'file-view="'.$id_name.'"' ],
                                        [ "name"=>"type", "value"=>"file" ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit- btn btn-outline-secondary container" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                    ]);
                                ?>
                            </div>
                            <div class="<?= (isset($this->data["pdccc_photo"]) && !empty($this->data["pdccc_photo"]))? "col-lg-4 col-md-3": "col-md-12"; ?>"></div>
                            <div class="<?= $this->inputCol; ?>">
                                <?php
                                    $tittle_placeholder = "Enter Contact Name";
                                    $id_name = "contact_name";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $input_value = (isset($this->data["pdccc_name"])) ? $this->data["pdccc_name"] : "";
                                    $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                                    $input_value = 'value="'.$input_value.'"';
                                    $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" client_id="'.$account_id.'"';
                                    echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                        [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"type", "value"=>"text" ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                    ]);
                                ?>
                            </div>
                            <div class="<?= $this->inputCol; ?>">
                                <?php
                                    $tittle_placeholder = "Contact Phone";
                                    $id_name = "contact_phone";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $input_value = (isset($this->data["pdccc_contact"])) ? $this->data["pdccc_contact"] : "";
                                    $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

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
                            <div class="<?= $this->inputCol; ?>">
                                <?php 
                                    $tittle_placeholder = "Select Gender";
                                    $id_name = "contact_gender";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $input_value = (isset($this->data["pdccc_gender"])) ? $this->data["pdccc_gender"] : "";
                                    $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                                    $input_value = '
                                        <option value="">'.$tittle_placeholder.'</option>
                                        <option value=1 '.(((int)$input_value === 1) ? "selected":"").'>Male</option>
                                        <option value=2 '.(((int)$input_value === 2) ? "selected":"").'>Female</option>
                                    ';
                                    $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                                    echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                        [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                        [ "name"=>"options", "value"=>$input_value ],
                                    ]);
                                ?>
                            </div>
                        <?php } else if ((int)$this->type === 2) { ?>
                            <?= $this->header("Bulk Contact Details."); ?>
                            <input type="hidden" name="add-form" value="contact_group" />
                            <input type="hidden" name="add-contact-form-type" value="bulk-group" />
                            <div class="<?= $this->inputCol; ?>">
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
                        <?php } else if ((int)$this->type === 3) { ?>
                            <?= $this->header("Excel Contact Details."); ?>
                            <input type="hidden" name="add-form" value="contact_group" />
                            <input type="hidden" name="add-contact-form-type" value="excel-group" />
                            <div class="<?= $this->inputCol; ?>">
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
                                                [ "name"=>"icon", "value"=>"fa fa-file-excel-o fa-1x icon-gradient bg-warm-flame text-primary" ],
                                                [ "name"=>"type", "value"=>"file" ],
                                                [ "name"=>"input_class", "value"=>"-height-inherit- btn btn-outline-primary container" ],
                                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                            ]);
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="<?= $this->inputCol; ?>">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="container fa ">
                                            Click <button class="btn btn-sm btn-outline-info p-1" autofocus="" type="button" data-toggle="modal"
                                                open-modal--id="AddExcelBulkContactToListRules"
                                                open-modal--title="Excel Upload Instructions" open-modal--html='<?php 
                                                    echo instructions($this->load_countries); 
                                                ?>' open-modal--buttons='
                                                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                                '>
                                                <span>Here</span>
                                            </button> to read instructions.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php }
                    ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php
                            $tittle_placeholder = "Select Country";
                            $id_name = "country";
                            $country_shower = "$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdccc_country"])) ? $this->data["pdccc_country"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $countries = '';
                            foreach ($this->load_countries as $key => $country) {
                                $country_selected = @(strtolower($input_value) == strtolower($country->Name)) ? "selected": "";
                                $countryName = str_replace("'", "&#39;", $country->Name);
                                $countries .= "<option value=\"$countryName\" $country_selected>$countryName</option>";
                            }
                            
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
                    <?php
                        $forceShowIfNotType1 = ((int)$this->type === 1) ? 'select-show="'.$country_shower.'"' : 'force-show';
                        $forceShowCountry = (isset($this->data["pdccc_country"])) ? "force-show" : $forceShowIfNotType1;
                    ?>
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?> select-show-alt="<?= $country_shower; ?>">
                        <?php 
                            $tittle_placeholder = "Enter State/ Province";
                            $id_name = "state_province";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["location"]["pdccc_state_province"])) ? $this->data['location']["pdccc_state_province"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?>>
                        <?php 
                            $tittle_placeholder = "Select Region";
                            $id_name = "region";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span id="region_loading"></span></h6>
                        <?php
                            $input_value = (isset($this->data["location"]["pdccc_region"])) ? $this->data["location"]["pdccc_region"] : 0;
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            $region_input_value = $input_value;

                            $region = $ccApi->get_location($type=$id_name."s", $get_string = "", function($locations) use($input_value) {
                                $at = '';
                                foreach ($locations as $key => $location) {
                                    $location_selected = @((int)$input_value == $location['id']) ? "selected": "";
                                    $at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Region'].'</option>';
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>'.$region.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" no-ajax';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?>>
                        <?php 
                            $tittle_placeholder = "Select District";
                            $id_name = "district";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span id="district_loading"></span></h6>
                        <?php
                            $input_value = (isset($this->data["location"]["pdccc_district"])) ? $this->data["location"]["pdccc_district"] : 0;
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            $district_input_value = $input_value;

                            $location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $input_value, function($locations) use($input_value) {
                                $at = '';
                                foreach ($locations as $key => $location) {
                                    $location_selected = @((int)$input_value == $location['id']) ? "selected": "";
                                    $at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['District'].'</option>';
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.@$tittle_placeholder.'</option>
                                '.@$location.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?>>
                        <?php 
                            $tittle_placeholder = "Select Constituency";
                            $id_name = "constituency";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span id="constituency_loading"></span></h6>
                        <?php
                            $input_value = (isset($this->data["location"]["pdccc_constituency"])) ? $this->data["location"]["pdccc_constituency"] : 0;
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            
                            $location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_input_value . "&district=" . $district_input_value,
                                function($locations) use($input_value) {
                                $at = '';
                                foreach ($locations as $key => $location) {
                                    $location_selected = @((int)$input_value == $location['id']) ? "selected": "";
                                    $at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Constituency'].'</option>';
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.@$tittle_placeholder.'</option>
                                '.@$location.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?>>
                        <?php 
                            $tittle_placeholder = "Select Electoral Area";
                            $id_name = "electoral_area";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span id="electoral_area_loading"></span></h6>
                        <?php
                            $input_value = (isset($this->data["location"]["pdccc_electoral_area"])) ? $this->data["location"]["pdccc_electoral_area"] : 0;
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            
                            $location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_input_value . "&district=" . $district_input_value,
                                function($locations) use($input_value) {
                                $at = '';
                                foreach ($locations as $key => $location) {
                                    $location_selected = @((int)$input_value == $location['id']) ? "selected": "";
                                    $at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Electoral_Area'].'</option>';
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.@$tittle_placeholder.'</option>
                                '.@$location.'
                            ';
                            // $input_attributes = 'name="'.$id_name.'" electoral_area="selected" id="'.$id_name.'"';
                            // $get_url = API_BASE_URL."location/community-all?ea_id=";
                            $get_url = CLIENT_BASE_URL."/assets/php/custom/fetch_reply.php?fetch=community-by-electoral_area&ea_id=";
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" form_change_to_show="community" url="'.$get_url.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>" >
                        <?php 
                            $tittle_placeholder = "Select Community";
                            $id_name = "community";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span id="community_loading"></span></h6>
                        <?php
                            $input_value = (isset($this->data["location"]["pdccc_community"])) ? $this->data["location"]["pdccc_community"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $get_string = "location/community?id=".(int)@$input_value;
                            $community = $ccApi->fetch_from($get_string=$get_string, function($community) use($input_value)
                            {
                                $at = '';
                                foreach ($community as $key => $comm) {
                                    $location_selected = @((int)$input_value == $comm['pdeac_id']) ? "selected": "";
                                    $at .= '<option value="'.@$comm['pdeac_id'].'" '.@$location_selected.'>'.@$comm['pdeac_community'].'</option>';
                                }
                                return @$at;
                            }, $debug = false);

                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>'.$community.'
                                <option>Others</option>
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" form_got_from="electoral_area" others="true"
                                input_title="'.$tittle_placeholder.'" id_getter="pdeac_id" name_getter="pdeac_community"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <?php
                        $forceShowIfNotType1Com = ((int)$this->type === 1) ? '' : 'force-show';
                        $forceShowCom = (isset($this->data["pdccc_country"])) ? "force-show" : $forceShowIfNotType1Com;
                    ?>
                    <div class="<?= $this->inputCol; ?>"  <?= $forceShowCom; ?> select-show="<?= $id_name; ?>">
                        <?php 
                            $tittle_placeholder = "Enter Other Community";
                            $id_name = "community_other";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = 'value=""';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <?php
                        if ((int)$this->type === 1) { ?>
                            <div class="<?= $this->inputCol; ?>">
                                <?php 
                                    $tittle_placeholder = "Contact Info";
                                    $id_name = "contact_info";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $input_value = (isset($this->data["pdccc_info"])) ? $this->data["pdccc_info"] : "";
                                    $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                                    $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="4"';
                                    echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                        [ "name"=>"default_value", "value"=>$input_value ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                    ]);
                                ?>
                            </div>
                        <?php }
                    ?>
                </div>
            </div>
        <?php }
    }
?>
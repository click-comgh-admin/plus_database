<?php
    namespace BranchForm;
    class BranchForm
    {
        public $data = [];
        public $inputCol = "col-lg-4 col-md-6";
        public $load_countries = [];

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-info p-0 mb-3 shadow shadow-sm card-shadow-info border border-white bg-night-sky">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0 border border-white">
                    <u class="text-capitalize small font-weight-bold" style="color: white"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        private function header_2(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-info p-0 px-2 mb-3 shadow shadow-sm card-shadow-info border border-white alert alert-info">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0 border border-white">
                    <u class="text-capitalize small font-weight-bold"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        private function branch_name(int $account_type, $tf, $ccApi)
        {
            $account_type = ((int)$account_type === 0) ? AccountInfoType: $account_type;
            $id_name = "account_name";
            if ((int)$account_type === 10) { 

                $input_value = (isset($this->data["district_name"])) ? $this->data["district_name"] : "";
                $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value; ?>
                <input type="hidden" name="<?= $id_name; ?>" value='<?= $input_value; ?>' />

            <?php } else { ?>
                <div class="<?= $this->inputCol; ?>" >
                    <?php 
                        $tittle_placeholder = "Enter Name of Branch";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($this->data["pdc_name"])) ? $this->data["pdc_name"] : "";
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
            <?php }
        }

        private function leader_role(int $account_type, $id_name, $default, $tf, $ccApi)
        {
            $account_type = ((int)$account_type === 0) ? AccountInfoType: $account_type;
            if ((int)$account_type === 10) { ?>
                <div class="<?= $this->inputCol; ?>">
                    <?php 
						$tittle_placeholder = "Designation/ Role";
						$id_name = "$id_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $default = $default;
						$designation = $ccApi->staff_status($all=true, $id=1, function($designations) use($default) {
							$at = '';
							foreach ($designations as $key => $designation) {
                                $selected = @((int)$default == (int)$designation['pdd_id']) ? "selected" : "";
								$at .= '<option value="'.@$designation['pdd_id'].'" '.$selected.'>'.@$designation['pdd_info'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$designation.'
							<option>Others</option>
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="<?= $this->inputCol; ?>" select-show="<?= $id_name; ?>">
                    <?php 
                        $tittle_placeholder = "Other Designation/ Role";
                        $id_name = "other_$id_name";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            <?php } else { 
                if (isset($this->data["leaders"]["pdcl_leader3_role"])) { ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Designation/ Role";
                            $id_name = "$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $default = $default;
                            $designation = $ccApi->designation($all=true, $id=1, function($designations) use($default) {
                                $at = '';
                                foreach ($designations as $key => $designation) {
                                    $selected = @((int)$default == (int)$designation['coc_leadership_id']) ? "selected" : "";
                                    $at .= '<option value="'.@$designation['coc_leadership_id'].'" '.$selected.'>'.@$designation['coc_leader'].'</option>';
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$designation.'
                                <option>Others</option>
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>" select-show="<?= $id_name; ?>">
                        <?php 
                            $tittle_placeholder = "Other Designation/ Role";
                            $id_name = "other_$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = 'value=""';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                <?php } else { ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $id_name = "$id_name";
                        ?>
                        <input type="hidden" name="<?= $id_name; ?>" id="<?= $id_name; ?>" value="Others" />
                        <?php 
                            $tittle_placeholder = "Designation/ Role";
                            $id_name = "other_$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = $default;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                <?php } ?>
            <?php }
        }

        public function main_content(int $account_id = 0, $account_status, $tf, $ccApi)
        {
            ?>
            <div class="col-lg-12 col-md-12">
                <div class="row justify-content-center">
                    <?= $this->header("Location/ Branch Name."); ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php
                            $tittle_placeholder = "Select Country";
                            $id_name = "country";
                            $country_shower = "$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdc_country"])) ? $this->data["pdc_country"] : "";
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
                        $forceShowCountry = (isset($this->data["pdc_country"])) ? "force-show" : "";
                    ?>
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?> select-show="<?= $country_shower; ?>" select-show-alt="<?= $country_shower; ?>">
                        <?php 
                            $tittle_placeholder = "Enter State/ Province";
                            $id_name = "state_province";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdc_state_province"])) ? $this->data["pdc_state_province"] : "";
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
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?> select-show="<?= $country_shower; ?>">
                        <?php 
                            $tittle_placeholder = "Select Region";
                            $id_name = "region";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span id="region_loading"></span></h6>
                        <?php
                            $input_value = (isset($this->data["pdc_region"])) ? $this->data["pdc_region"] : 0;
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
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?> select-show="<?= $country_shower; ?>">
                        <?php 
                            $tittle_placeholder = "Select District";
                            $id_name = "district";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span id="district_loading"></span></h6>
                        <?php
                            $input_value = (isset($this->data["pdc_district"])) ? $this->data["pdc_district"] : 0;
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
                    <div class="<?= $this->inputCol; ?>" <?= $forceShowCountry; ?> select-show="<?= $country_shower; ?>">
                        <?php 
                            $tittle_placeholder = "Select Constituency";
                            $id_name = "constituency";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span id="constituency_loading"></span></h6>
                        <?php
                            $input_value = (isset($this->data["pdc_constituency"])) ? $this->data["pdc_constituency"] : 0;
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
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Enter Community";
                            $id_name = "community";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdc_community"])) ? $this->data["pdc_community"] : "";
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
                    <?php $___AT___ = isset($this->data["pdc_account_type"]) ? (int)$this->data["pdc_account_type"] : AccountInfoType; ?>
                    <?= $this->branch_name($___AT___, $tf, $ccApi); ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Select Account Type";
                            $id_name = "account_type";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $account_type = $ccApi->account_type($all=true, $id=1, function($account_types) use($___AT___) {
                                $at = '';
                                foreach ($account_types as $key => $account_type) {
                                    if ((int)$account_type['pdd_id'] === (int)$___AT___) {//NEW
                                        $at .= '<option value="'.$account_type['pdd_id'].'" selected>'.$account_type['pdd_info'].'</option>';
                                    }
                                }
                                return @$at;
                            });
                            $input_value = '
                                '.$account_type.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-umbrella icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit- js-states " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <?php
                        if (!isset($this->data["pdc_account_type"])) { ?>
                            <div class="<?= $this->inputCol; ?>">
                                <?php 
                                    $tittle_placeholder = "Select Average Membership Size";
                                    $id_name = "client_membership_size";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $get_string = "trial_size";
                                    $membership_size = $ccApi->membership_sizes($get_string, function($membership_sizes) {
                                        $at = '';
                                        foreach ($membership_sizes as $key => $membership_size) {
                                            $at .= '<option value="'.$membership_size['pdd_id'].'">'.$membership_size['pdd_info'].'</option>';
                                        }
                                        return @$at;
                                    });
                
                                    $input_value = '
                                        <option value="">'.$tittle_placeholder.'</option>
                                        '.@$membership_size.'
                                    ';
                                    $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                                    echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                        [ "name"=>"icon", "value"=>"pe-7s-users icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                        [ "name"=>"options", "value"=>$input_value ],
                                    ]);
                                ?>
                            </div>
                        <?php }
                    ?>
                    <div class="<?= $this->inputCol; ?>"></div><div class="<?= $this->inputCol; ?>"></div>
                    <?= $this->header("Details of Branch Leaders."); ?>
                    <?= $this->header_2("First Leader Details."); ?> 
                    <div class="<?= $this->inputCol; ?>" >
                        <?php 
                            $tittle_placeholder = "Name";
                            $id_name = "leader_1_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader1_name"])) ? $this->data["leaders"]["pdcl_leader1_name"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>" >
                        <?php 
                            $tittle_placeholder = "Phone";
                            $id_name = "leader_1_phone";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader1_phone"])) ? $this->data["leaders"]["pdcl_leader1_phone"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-call  icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"phone" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>" >
                        <?php 
                            $tittle_placeholder = "E-mail";
                            $id_name = "leader_1_email";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader1_email"])) ? $this->data["leaders"]["pdcl_leader1_email"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"email" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div> <?php /*
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $id_name = "leader_1_designation_role";
                        ?>
                        <input type="hidden" name="<?= $id_name; ?>" id="<?= $id_name; ?>" value="Others" />
                        <?php 
                            $tittle_placeholder = "Designation/ Role";
                            $id_name = "other_leader_1_designation_role";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader1_role"])) ? $this->data["leaders"]["pdcl_leader1_role"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                            $input_value = (isset($this->data["leaders"]["pdcl_leader1_role"])) ? $this->data["leaders"]["pdcl_leader1_role"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                        ?>
                    </div> */ ?>
                    <?php
                        $id_name = "leader_1_designation_role";
                        $input_value = (isset($this->data["leaders"]["pdcl_leader1_role"])) ? $this->data["leaders"]["pdcl_leader1_role"] : "";
                        $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                        echo $this->leader_role($___AT___, $id_name, $input_value, $tf, $ccApi);
                    ?>
                    <div class="<?= $this->inputCol; ?>"></div><div class="<?= $this->inputCol; ?>"></div>
                    <?= $this->header_2("Second Leader Details."); ?> 
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Name";
                            $id_name = "leader_2_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader2_name"])) ? $this->data["leaders"]["pdcl_leader2_name"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
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
                            $tittle_placeholder = "Phone";
                            $id_name = "leader_2_phone";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader2_phone"])) ? $this->data["leaders"]["pdcl_leader2_phone"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-call  icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"phone" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "E-mail";
                            $id_name = "leader_2_email";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader2_email"])) ? $this->data["leaders"]["pdcl_leader2_email"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"email" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <?php
                        $id_name = "leader_2_designation_role";
                        $input_value = (isset($this->data["leaders"]["pdcl_leader2_role"])) ? $this->data["leaders"]["pdcl_leader2_role"] : "";
                        $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                        echo $this->leader_role($___AT___, $id_name, $input_value, $tf, $ccApi);
                    ?>
                    <div class="<?= $this->inputCol; ?>"></div><div class="<?= $this->inputCol; ?>"></div>
                    <?= $this->header_2("Third Leader Details."); ?> 
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Name";
                            $id_name = "leader_3_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader3_name"])) ? $this->data["leaders"]["pdcl_leader3_name"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
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
                            $tittle_placeholder = "Phone";
                            $id_name = "leader_3_phone";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader3_phone"])) ? $this->data["leaders"]["pdcl_leader3_phone"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-call  icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"phone" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "E-mail";
                            $id_name = "leader_3_email";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["leaders"]["pdcl_leader3_email"])) ? $this->data["leaders"]["pdcl_leader3_email"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"email" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <?php
                        $id_name = "leader_3_designation_role";
                        $input_value = (isset($this->data["leaders"]["pdcl_leader3_role"])) ? $this->data["leaders"]["pdcl_leader3_role"] : "";
                        $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                        echo $this->leader_role($___AT___, $id_name, $input_value, $tf, $ccApi);
                    ?>
                    <div class="<?= $this->inputCol; ?>"></div><div class="<?= $this->inputCol; ?>"></div>
                    <?php if (!isset($this->data["pdc_applicant_surname"])) { ?>
                        <?= $this->header("Create Account User."); ?>
                        <div class="<?= $this->inputCol; ?>">
                            <?php
                                $tittle_placeholder = "Enter First Name";
                                $id_name = "first_name";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = 'value=""';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
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
                                $tittle_placeholder = "Enter Surname";
                                $id_name = "surname";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = 'value=""';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
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
                                $tittle_placeholder = "Select Gender";
                                $id_name = "gender";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = '
                                    <option value="">'.$tittle_placeholder.'</option>
                                    <option value=1>Male</option>
                                    <option value=2>Female</option>
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
                        <div class="<?= $this->inputCol; ?>">
                            <?php 
                                $tittle_placeholder = "Enter Phone Number";
                                $id_name = "phone_number";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = 'value=""';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                    [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"type", "value"=>"phone" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div>
                        <div class="<?= $this->inputCol; ?>">
                            <?php 
                                $tittle_placeholder = "Enter E-mail Address";
                                $id_name = "email_address";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = 'value=""';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                    [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"type", "value"=>"email" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div> <?php /*
                        <div class="<?= $this->inputCol; ?>">
                            <?php 
                                $tittle_placeholder = "Select Designation/ Role";
                                $id_name = "applicant_designation_role";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $designation = $ccApi->designation($all=true, $id=1, function($designations) {
                                    $at = '';
                                    foreach ($designations as $key => $designation) {
                                        $at .= '<option value="'.$designation['coc_leadership_id'].'">'.$designation['coc_leader'].'</option>';
                                    }
                                    return @$at;
                                });
                                $input_value = '
                                    <option value="">'.$tittle_placeholder.'</option>
                                    '.$designation.'
                                    <option>Others</option>
                                ';
                                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                    [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                    [ "name"=>"options", "value"=>$input_value ],
                                ]);
                            ?>
                        </div> */ ?>
                        <?php
                            $id_name = "applicant_designation_role";
                            $input_value = (isset($this->data["pdc_applicant_designation_role"])) ? $this->data["pdc_applicant_designation_role"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            echo $this->leader_role($___AT___, $id_name, $input_value, $tf, $ccApi);
                        ?>
                        <div class="<?= $this->inputCol; ?>" select-show="applicant_designation_role">
                            <?php 
                                $tittle_placeholder = "Other Designation/ Role";
                                $id_name = "other_applicant_designation_role";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = 'value=""';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                    [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"type", "value"=>"text" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div>
                        <?= $this->header_2("User Password."); ?>
                        <div class="<?= $this->inputCol; ?>">
                            <?php 
                                $tittle_placeholder = "Set Password";
                                $id_name = "password";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = 'value=""';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" show-password="input" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                                echo $tf->use(DIRECTORY."/templates/form/input-icon--both.tmpl", [
                                    [ "name"=>"icon", "value"=>"pe-7s-key icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"icon_other", "value"=>"pe-7s-unlock icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"icon_attributes__other", "value"=>'show-password="icon"' ],
                                    [ "name"=>"type", "value"=>"password" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div>
                        <div class="<?= $this->inputCol; ?>">
                            <?php 
                                $tittle_placeholder = "Confirm Password";
                                $id_name = "confirm_password";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = 'value=""';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" show-password="input" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                                echo $tf->use(DIRECTORY."/templates/form/input-icon--both.tmpl", [
                                    [ "name"=>"icon", "value"=>"pe-7s-key icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"icon_other", "value"=>"pe-7s-unlock icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"icon_attributes__other", "value"=>'show-password="icon"' ],
                                    [ "name"=>"type", "value"=>"password" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div>
                    <?php } ?>
                </div>
            </div>
        <?php }
    }
?>
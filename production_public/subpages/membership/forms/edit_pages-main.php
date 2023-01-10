<form role="form" action="<?= API_BASE_URL; ?>membership/edit/main-info" click-com-wizard="form-container">
    <div click-com-wizard="container" click-com-wizard--condition="Update Member's Main Info?">
        <div click-com-wizard="pages"></div>
        <div class="pb-0" click-com-wizard-title="Personal" click-com-wizard="step">
            <h4>Personal</h4>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
                    <?php
						$tittle_placeholder = "Enter First Name";
						$id_name = "first_name";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="'.@$member['pdm_firstname'].'"';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Enter Surname";
						$id_name = "surname";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="'.@$member['pdm_surname'].'"';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Select Gender";
						$id_name = "gender";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
						$gender_1_selected = @((int)$member['pdm_gender'] == 1) ? "selected": "";
						$gender_2_selected = @((int)$member['pdm_gender'] == 2) ? "selected": "";
						$input_value = '
                            <option value="">'.$tittle_placeholder.'</option>
							<option value=1 '.@$gender_1_selected.'>Male</option>
							<option value=2 '.@$gender_2_selected.'>Female</option>
						';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Date of Birth";
						$id_name = "date_of_birth";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
						$input_value = 'value="'.date("m/d/Y", strtotime(@$member['pdm_date_of_birth'])).'"';
					
                        $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"datepicker-here " ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="pb-0" click-com-wizard-title="Contact" click-com-wizard="step">
            <h4>Member's Contact</h4>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Mobile Contact";
						$id_name = "phone_number";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="'.@$member['pdm_phone'].'"';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Enter E-mail Address";
						$id_name = "email_address";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="'.@$member['pdm_email'].'"';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"email" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="pb-0" click-com-wizard-title="Statuses" click-com-wizard="step">
            <h4>Member's Statuses</h4>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Select Country of Nationality";
						$id_name = "nationality_country";
					?>
                    <?php
						$set_country = @$member['pdm_nationality'];
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
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Select Religion";
						$id_name = "religion";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
						$set_religion = @$member['pdm_religion'];
						$religion = $ccApi->religion($all=true, $id=1, function($religions) use($set_religion) {
							$at = '';
							foreach ($religions as $key => $religion) {
								$religion_selected = @((int)$set_religion == $religion['pdd_id']) ? "selected": "";
								$at .= '<option value="'.@$religion['pdd_id'].'" '.@$religion_selected.'>'.@$religion['pdd_info'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.@$tittle_placeholder.'</option>
							'.@$religion.'
							<option>Others</option>
						';
				   		$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6" select-show="<?= $id_name; ?>">
                    <?php 
						$tittle_placeholder = "Other Religion";
						$id_name = "religion_other";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value=""';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="pb-0" click-com-wizard-title="Location" click-com-wizard="step">
            <h4>Member's Location</h4>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Select Country of Residence";
						$id_name = "country";
					?>
                    <?php
						$set_country = @$member['pdm_country_of_residence'];
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
                <div class="col-lg-6"
                    <?= (strtolower($set_country) != "ghana") ? 'select-show-alt="country"' : 'select-show="country" select-show-alt="country"'; ?>>
                    <?php 
						$tittle_placeholder = "Enter State/ Province";
						$id_name = "state_province";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="'.@$member['pdm_state_province'].'"';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$tittle_placeholder = "Select Region";
						$id_name = "region";
					?>
                    <h6><?= $tittle_placeholder; ?> <span id="region_loading"></span></h6>
                    <?php
						$region_location =@$member['pdm_region'];
						$location = $ccApi->get_location($type=$id_name."s", $get_string = "", function($locations) use($region_location) {
							$at = '';
							foreach ($locations as $key => $location) {
								$location_selected = @((int)$region_location == $location['id']) ? "selected": "";
								$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Region'].'</option>';
							}
							return @$at;
						});
                       	$input_value = '
							<option value="">'.@$tittle_placeholder.'</option>
							'.@$location.'
						';
				   		$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" no-ajax';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$tittle_placeholder = "Select District";
						$id_name = "district";
					?>
                    <h6><?= $tittle_placeholder; ?> <span id="district_loading"></span></h6>
                    <?php
						$district_location = @$member['pdm_district'];
						$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location, function($locations) use($district_location) {
							$at = '';
							foreach ($locations as $key => $location) {
								$location_selected = @((int)$district_location == $location['id']) ? "selected": "";
								$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['District'].'</option>';
							}
							return @$at;
						});
                       	$input_value = '
							<option value="">'.@$tittle_placeholder.'</option>
							'.@$location.'
						';
				   		$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$tittle_placeholder = "Select Constituency";
						$id_name = "constituency";
					?>
                    <h6><?= $tittle_placeholder; ?> <span id="constituency_loading"></span></h6>
                    <?php
						$constituency_location = @$member['pdm_constituency'];
						$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location . "&district=" . $district_location,
							function($locations) use($constituency_location) {
							$at = '';
							foreach ($locations as $key => $location) {
								$location_selected = @((int)$constituency_location == $location['id']) ? "selected": "";
								$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Constituency'].'</option>';
							}
							return @$at;
						});
                       	$input_value = '
							<option value="">'.@$tittle_placeholder.'</option>
							'.@$location.'
						';
				   		$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$tittle_placeholder = "Select Electoral Area";
						$id_name = "electoral_area";
					?>
                    <h6><?= $tittle_placeholder; ?> <span id="electoral_area_loading"></span></h6>
                    <?php
						$electoral_area_location = @$member['pdm_electoral_area'];
						$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location . "&district=" . $district_location,
							function($locations) use($electoral_area_location) {
							$at = '';
							foreach ($locations as $key => $location) {
								$location_selected = @((int)$electoral_area_location == $location['id']) ? "selected": "";
								$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Electoral_Area'].'</option>';
							}
							return @$at;
						});
                       	$input_value = '
							<option value="">'.@$tittle_placeholder.'</option>
							'.@$location.'
						';
				   		$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$tittle_placeholder = "Enter Community";
						$id_name = "community";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="'.@$member['pdm_community'].'"';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6">
                    <?php 
						$tittle_placeholder = "Enter Home Town";
						$id_name = "hometown";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="'.@$member['pdm_hometown'].'"';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="pt-4 pb-0">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="member_id" value="<?= $member_id; ?>" />
        </div>
        <div click-com-wizard="buttons"></div>
    </div>
</form>
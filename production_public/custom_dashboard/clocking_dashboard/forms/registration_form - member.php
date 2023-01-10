<form role="form" action="<?= API_BASE_URL; ?>client-membership/add_district_staff" click-com-wizard="form-container">
	<div click-com-wizard="container">
		<div click-com-wizard="pages"></div>
		<div class="pb-0" click-com-wizard-title="Info" click-com-wizard="step">
			<h4>Applicant</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
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
				<div class="col-lg-6">
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Upload Image";
						$id_name = "profile_img";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" accept=".jpg,.jpeg,.png,.gif" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
						echo $tf->use(DIRECTORY."/templates/form/input-icon--both.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-photo icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"icon_other", "value"=>"pe-7s-text--view icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"icon_attributes__other", "value"=>'file-view="'.$id_name.'"' ],
                            [ "name"=>"type", "value"=>"file" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
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
						$input_value = 'value=""';
					
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" local e-type="date" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"datepicker-here " ],
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Mobile Contact";
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
				<div class="col-lg-6">
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
				</div>
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Any Disabilities";
						$id_name = "disability";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1>Yes</option>
							<option value=2>No</option>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Languages Spoken";
						$id_name = "languages";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$language = $ccApi->languages($all=true, $id=1, function($languages) {
							$at = '';
							foreach ($languages as $key => $language) {
								$at .= '<option value="'.$language['pdd_id'].'">'.$language['pdd_info'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$language.'
						';
                        $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple';
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
						$tittle_placeholder = "Enter Other Language not in list.";
						$id_name = "other_language";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = 'value=""';
					
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
			</div>
		</div>
		<div class="pb-0" click-com-wizard-title="Statuses" click-com-wizard="step">
			<h4>Applicant's Statuses</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Marital Status";
						$id_name = "marital_status";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$marital_status = $ccApi->marital_status($all=true, $id=1, function($marital_statuses) {
							$at = '';
							foreach ($marital_statuses as $key => $marital_status) {
								$at .= '<option value="'.$marital_status['pdd_id'].'">'.$marital_status['pdd_info'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$marital_status.'
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
				<div class="col-lg-6" select-show="<?= $id_name; ?>">
					<?php 
						$tittle_placeholder = "Other Marital Status";
						$id_name = "marital_status_other";
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Educational Status";
						$id_name = "educational_status";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$education = $ccApi->education($all=true, $id=1, function($educations) {
							$at = '';
							foreach ($educations as $key => $education) {
								$at .= '<option value="'.$education['pdd_id'].'">'.$education['pdd_info'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$education.'
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
				<div class="col-lg-6" select-show="<?= $id_name; ?>">
					<?php 
						$tittle_placeholder = "Other Educational Status";
						$id_name = "educational_status_other";
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Field of Study";
						$id_name = "field_of_study";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
						$input_value = 'value=""';
					
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Name of Institution/ School";
						$id_name = "name_of_institution";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
						$input_value = 'value=""';
					
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Country of Nationality";
						$id_name = "nationality_country";
					?>
					<?php
						$countries = '';
						foreach ($load_countries as $key => $country) {
							$countries .= "<option value='".$country->Name."'>".$country->Name."</option>";
						}
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Religion";
						$id_name = "religion";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$religion = $ccApi->religion($all=true, $id=1, function($religions) {
							$at = '';
							foreach ($religions as $key => $religion) {
								$at .= '<option value="'.$religion['pdd_id'].'">'.$religion['pdd_info'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$religion.'
							<option>Others</option>
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
				<div class="col-lg-6" select-show="<?= $id_name; ?>">
					<?php 
						$tittle_placeholder = "Other Religion";
						$id_name = "religion_other";
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
			</div>
		</div>
		<div class="pb-0" click-com-wizard-title="Staff" click-com-wizard="step">
			<h4>Staff Details</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Staff Status";
						$id_name = "staff_status";;
						$id_name_changer = $id_name."_changer";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$designation = $ccApi->staff_status($all=true, $id=1, function($designations) {
							$at = '';
							foreach ($designations as $key => $designation) {
								$at .= '<option value="'.$designation['pdd_id'].'">'.$designation['pdd_info'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$designation.'
							<option>Others</option>
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'_changer"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>" select-show-alt--others="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Other Staff Status";
						$id_name = "occupational_status_other";
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Department";
						$id_name = "user_group";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$groups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) {
							$at = '';
							foreach ($groups as $key => $group) {
								$at .= '<option value="'.$group['pdmg_id'].'">'.$group['pdmg_group'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$groups.'
						';
                        $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple';
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
						$tittle_placeholder = "Select Unit";
						$id_name = "user_subgroup";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$subgroups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($ccApi, $account_id) {
							$at = '';
							foreach ($groups as $key => $group) {
								$group_id = $group['pdmg_id'];
								$group_name = $group['pdmg_group'];
								$at .= $ccApi->subgroups($all=true, $account_id, $group_id, $id=1, function($subgroups) use($group_name) {
									$sg = '';
									foreach ($subgroups as $key => $subgroup) {
										$sg .= '<option value="'.$subgroup['pdmg_id'].'">'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
									}
									return @$sg;
								});
							}
							return @$at;
						});

						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$subgroups.'
						';
                        $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>" 
					select-show-alt--committee="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Committee";
						$id_name = "user_committee";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$committees = $ccApi->committees($all=true, $account_id, $id=1, function($committees) {
							$at = '';
							foreach ($committees as $key => $committee) {
								$at .= '<option value="'.$committee['pdmg_id'].'">'.$committee['pdmg_group'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$committees.'
						';
                        $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>" 
					select-show-alt--committee="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Sub Committee";
						$id_name = "user_subcommittee";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$subcommittees = $ccApi->committees($all=true, $account_id, $id=1, function($committees) use($ccApi, $account_id) {
							$at = '';
							foreach ($committees as $key => $committee) {
								$committee_id = $committee['pdmg_id'];
								$committee_name = $committee['pdmg_group'];
								$at .= $ccApi->subcommittees($all=true, $account_id, $committee_id, $id=1, function($subcommittees) use($committee_name) {
									$sg = '';
									foreach ($subcommittees as $key => $subcommittee) {
										$sg .= '<option value="'.$subcommittee['pdmg_id'].'">'.$committee_name.' => '.$subcommittee['pdmg_subgroup'].'</option>';
									}
									return @$sg;
								});
							}
							return @$at;
						});

						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$subcommittees.'
						';
                        $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>"  select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Your Status";
						$id_name = "user_status";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$get_string = "staff-assembly-member/appointment_statuses";
						$statuses = $ccApi->fetch_from($get_string=$get_string, function($statuses) {
							$at = '';
							foreach ($statuses as $key => $status) {
								$at .= '<option value="'.$status['pdd_id'].'">'.$status['pdd_info'].'</option>';
							}
							return @$at;
						});

						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$statuses.'
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
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>"  select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Terms served";
						$id_name = "user_termsserved";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$get_string = "staff-assembly-member/terms_served";
						$statuses = $ccApi->fetch_from($get_string=$get_string, function($statuses) {
							$at = '';
							foreach ($statuses as $key => $status) {
								$at .= '<option value="'.$status['pdd_id'].'">'.$status['pdd_info'].'</option>';
							}
							return @$at;
						});

						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$statuses.'
							<option>Others</option>
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
				<div class="col-lg-6" select-show="<?= $id_name; ?>">
					<?php 
						$tittle_placeholder = "Other Term served";
						$id_name = "user_termsserved_other";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>"  select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Enter the year you were last elected/appointed";
						$id_name = "last_appointment_year";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
			</div>
		</div>
		<div class="pb-0" click-com-wizard-title="Additional: 1" click-com-wizard="step">
			<h4>Additional Information</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "House No./Digital Address";
						$id_name = "house_no_digital_Address";
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Date of Marriage";
						$id_name = "date_of_marriage";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" local e-type="date" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"datepicker-here " ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Mother's Name";
						$id_name = "mother_name";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Mother's Living Status";
						$id_name = "mother_living_status";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1>Alive</option>
							<option value=2>Deceased</option>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Mother's Occupation";
						$id_name = "mother_occupation";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Father's Name";
						$id_name = "father_name";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Father's Living Status";
						$id_name = "father_living_status";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1>Alive</option>
							<option value=2>Deceased</option>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Father's Occupation";
						$id_name = "father_occupation";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Guardian's Name";
						$id_name = "guardian_name";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Guardian's Occupation";
						$id_name = "guardian_occupation";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Next of Kin's Name";
						$id_name = "next_of_kin_name";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Next of Kin's Contact";
						$id_name = "next_of_kin_contact";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
			</div>
		</div>
		<div class="pb-0" click-com-wizard-title="Additional: 2" click-com-wizard="step">
			<h4>Travel & References</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Any Traveling Experience?";
						$id_name = "traveling_experience";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1>Yes</option>
							<option value=2>No</option>
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
				<div class="col-lg-6"></div>
				<div class="col-md-4 col-lg-4">
					<?php 
						$tittle_placeholder = "Passport Number";
						$id_name = "passport_number";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value=""';
						$input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-4 col-lg-4">
					<?php 
						$tittle_placeholder = "Passport=> Date Issued";
						$id_name = "passport_date_issued";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value=""';
						$input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" local e-type="date" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"datepicker-here " ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-4 col-lg-4">
					<?php 
						$tittle_placeholder = "Passport=> Expiry Date";
						$id_name = "passport_expiry_date";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value=""';
						$input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" local e-type="date" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"datepicker-here " ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Any Training Course Attended";
						$id_name = "training_course_attended";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1>Yes</option>
							<option value=2>No</option>
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
				<div class="col-lg-6" select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Organization Name";
						$id_name = "training_organization_name";
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
				<div class="col-lg-6" select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Course Name";
						$id_name = "training_course_name";
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
				<div class="col-lg-6" select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Course Duration";
						$id_name = "training_course_duration";
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Current Postal Address";
						$id_name = "current_postal_address";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Residential Address";
						$id_name = "residential_address";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Provide Landmarks ";
						$id_name = "provide_landmarks";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Digital Address";
						$id_name = "digital_address";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "References";
						$id_name = "references";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1>Yes</option>
							<option value=2>No</option>
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
				<div class="col-lg-6" select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Name";
						$id_name = "referee_1_name";
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
				<div class="col-lg-6" select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Contact";
						$id_name = "referee_1_contact";
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
				<div class="col-lg-6" select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Address";
						$id_name = "referee_1_address";
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
				<div class="col-lg-6" select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Name";
						$id_name = "referee_2_name";
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
				<div class="col-lg-6" select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Contact";
						$id_name = "referee_2_contact";
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
				<div class="col-lg-6" select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Address";
						$id_name = "referee_2_address";
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
			</div>
		</div>
		<div class="pb-0" click-com-wizard-title="Location" click-com-wizard="step">
			<h4>Location Details</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Country of Residence";
						$id_name = "country";
					?>
					<?php
						$countries = '';
						foreach ($load_countries as $key => $country) {
							if (strtolower($country->Name) === "ghana") {
								$countries .= "<option value=".$country->Name." selected>".$country->Name."</option>";
							}
						}
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = '
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
				<div class="col-lg-6" select-show="country" select-show-alt="country">
					<?php 
						$tittle_placeholder = "Enter State/ Province";
						$id_name = "state_province";
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Region";
						$id_name = "region";
					?>
					<h6><?= $tittle_placeholder; ?> <span id="region_loading"></span></h6>
					<?php
                       $input_value = '
							<option value="">'.$tittle_placeholder.'</option>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select District";
						$id_name = "district";
					?>
					<h6><?= $tittle_placeholder; ?> <span id="district_loading"></span></h6>
					<?php
                       $input_value = '
							<option value="">'.$tittle_placeholder.'</option>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Constituency";
						$id_name = "constituency";
					?>
					<h6><?= $tittle_placeholder; ?> <span id="constituency_loading"></span></h6>
					<?php
                       $input_value = '
							<option value="">'.$tittle_placeholder.'</option>
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
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Electoral Area";
						$id_name = "electoral_area";
					?>
					<h6><?= $tittle_placeholder; ?> <span id="electoral_area_loading"></span></h6>
					<?php
                       $input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option>Others</option>
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
				<div class="col-lg-6" select-show="<?= $id_name; ?>">
					<?php 
						$tittle_placeholder = "Other Electoral Area";
						$id_name = "electoral_area_other";
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
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Enter Communities/Suburbs in your Electoral Area";
						$id_name = "community";
					?>
					<h6><?= $tittle_placeholder; ?>: [separate communities with comma(,)]</h6>
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
				<div class="col-lg-6" select-show="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Have you entered all the communities in your electoral Area?";
						$id_name = "all_communities_entered";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                       $input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option>Yes</option>
							<option>No</option>
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Enter Home Town";
						$id_name = "hometown";
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
			</div>
		</div>
		<div class="pt-4 pb-0" click-com-wizard-title="Final" click-com-wizard="step">
			<h4>Password</h4>
			<h5 class="text-info">
				<i>Default Account Password is User's Phone Number</i>
			</h5><hr/>
			<h5 class="text-warning px-2">
				<i>
					<b>Declaration:</b>
					<div class="custom-checkbox custom-control">
						<input class="custom-control-input" name="declaration" id="declaration" type="checkbox">
						<label class="custom-control-label" for="declaration">
							I declare that every information provided in response to questions asked in this application is true, complete and correct to the best of my knowledge. I understand that any misrepresentations or omission made on the form may render my candidature invalid or liable for early termination of my engagement.
						</label>
					</div>					
				</i>
			</h5>
			<input type="hidden" name="client_id" value="<?= $account_id; ?>" />
			<input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
		</div>
		<div click-com-wizard="buttons"></div>
	</div>
</form>
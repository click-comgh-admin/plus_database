<?php global $BranchInfo_I; global $tf; ?>
<form role="form" action="<?= API_BASE_URL; ?>membership/app/register-member" click-com-wizard="form-container">
	<div click-com-wizard="container">
		<div click-com-wizard="pages"></div>
		<div class="pb-0" click-com-wizard-title="Info" click-com-wizard="step">
			<h4>Applicant</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php
						$tittle_placeholder = "Enter First Name";
						$id_name = "firstname";
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
						$tittle_placeholder = "Enter Middlename";
						$id_name = "middlename";
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
						$tittle_placeholder = "Date of Birth";
						$id_name = "date_of_birth";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = 'value=""';
					
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
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
						$tittle_placeholder = "Mobile Contact";
						$id_name = "phone";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" inputmode="numeric" pattern="[0-9]*" autocomplete="phone-number" placeholder="'.$tittle_placeholder.'" maxlength="10"';
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
						$tittle_placeholder = "Whatsapp Number";
						$id_name = "whatsapp";
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
						$id_name = "email";
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
			</div>
		</div>
		<div class="pb-0" click-com-wizard-title="Statuses" click-com-wizard="step">
			<h4>Applicant's Statuses</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Member Type";
						$id_name = "memberType";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<pdb-membership-select-member-type material="false" defaultValue="" label="Select <?= $tittle_placeholder; ?>"
						name="<?= $id_name; ?>" id="<?= $id_name; ?>" tag_class="form-control -height-inherit-" css_style="width: 100%"
						style="width: 100%">
					</pdb-membership-select-member-type>
				</div>
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Group";
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
						$tittle_placeholder = "Select Sub-Group";
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
						$tittle_placeholder = "Enter Reference ID";
						$id_name = "referenceId";
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
						$tittle_placeholder = "Date Member Joined";
						$id_name = "date_joined";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = 'value=""';
					
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
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
		<div class="pb-0" click-com-wizard-title="Location" click-com-wizard="step">
			<h4>Country of Residence</h4>
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Country of Residence";
						$id_name = "country";
					?>
					<?php
						global $load_countries;
						// print_r(['$load_countries' => $load_countries]);
						$countries = '';
						foreach ($load_countries as $key => $country) {
							$countryName = $country->Name;
							$countries .= "<option value='".$countryName."'>".$countryName."</option>";
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
				<div class="col-lg-6" select-show="country">
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
				<div class="col-lg-6" select-show="country">
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
				<div class="col-lg-6" select-show="country">
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
				<div class="col-lg-6" select-show="country">
					<?php 
						$tittle_placeholder = "Select Electoral Area";
						$id_name = "electoral_area";
					?>
					<h6><?= $tittle_placeholder; ?> <span id="electoral_area_loading"></span></h6>
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
				<div class="col-lg-6" select-show="country">
					<?php 
						$tittle_placeholder = "Enter Community";
						$id_name = "community";
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
				<i>Default Account Password is User's Date of Birth</i>
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
			<input type="hidden" name="branchId" value="<?= $BranchInfo_I->id; ?>" />
			<input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
			<input type="hidden" name="is_public_registration" value="0" />
			<input type="hidden" name="is_app_registration" value="0" />
			<input type="hidden" name="allow_profile_image" value="1" />
			<input type="hidden" name="accountType" value="1" />
		</div>
		<div click-com-wizard="buttons"></div>
	</div>
</form>
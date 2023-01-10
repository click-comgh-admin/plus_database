<form role="form" action="<?= API_BASE_URL; ?>client-membership/add_member" click-com-wizard="form-container">
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
				
				<input type="hidden" name="profile_img">
				<input type="hidden" name="date_of_birth" value="<?= date("Y-m-d"); ?>">
				<input type="hidden" name="disability" value="2">
				<input type="hidden" name="languages[]" value="1">
				<input type="hidden" name="other_language" value="">
				<input type="hidden" name="user_group[]" value="0">
				<input type="hidden" name="user_subgroup[]" value="0">
				<input type="hidden" name="marital_status" value="1">
				<input type="hidden" name="marital_status_other" value="">
				<input type="hidden" name="occupational_status" value="1">
				<input type="hidden" name="occupational_status_other" value="">
				<input type="hidden" name="educational_status" value="1">
				<input type="hidden" name="educational_status_other" value="">
				<input type="hidden" name="field_of_study" value="">
				<input type="hidden" name="name_of_institution" value="">
				<input type="hidden" name="nationality_country" value="Ghana">
				<input type="hidden" name="religion" value="1">
				<input type="hidden" name="religion_other" value="">
				<input type="hidden" name="house_no_digital_Address" value="Ghana">
				<input type="hidden" name="date_of_marriage" value="">
				<input type="hidden" name="mother_name" value="">
				<input type="hidden" name="mother_living_status" value="1">
				<input type="hidden" name="mother_occupation" value="">
				<input type="hidden" name="father_name" value="">
				<input type="hidden" name="father_living_status" value="1">
				<input type="hidden" name="father_occupation" value="">
				<input type="hidden" name="guardian_name" value="">
				<input type="hidden" name="guardian_occupation" value="">
				<input type="hidden" name="next_of_kin_name" value="">
				<input type="hidden" name="next_of_kin_contact" value="">
				<input type="hidden" name="traveling_experience" value="2">
				<input type="hidden" name="passport_number" value="">
				<input type="hidden" name="passport_date_issued" value="">
				<input type="hidden" name="passport_expiry_date" value="">
				<input type="hidden" name="training_course_attended" value="2">
				<input type="hidden" name="training_organization_name" value="">
				<input type="hidden" name="training_course_name" value="">
				<input type="hidden" name="training_course_duration" value="">
				<input type="hidden" name="current_postal_address" value="">
				<input type="hidden" name="residential_address" value="">
				<input type="hidden" name="provide_landmarks" value="">
				<input type="hidden" name="digital_address" value="Ghana">
				<input type="hidden" name="references" value="2">
				<input type="hidden" name="referee_1_name" value="">
				<input type="hidden" name="referee_1_contact" value="">
				<input type="hidden" name="referee_1_address" value="">
				<input type="hidden" name="referee_2_name" value="">
				<input type="hidden" name="referee_2_contact" value="">
				<input type="hidden" name="referee_2_address" value="">
				<input type="hidden" name="country" value="Ghana">
				<input type="hidden" name="state_province" value="">
				<input type="hidden" name="region" value="1">
				<input type="hidden" name="district" value="1">
				<input type="hidden" name="constituency" value="1">
				<input type="hidden" name="electoral_area" value="1">
				<input type="hidden" name="community" value="Ghana">
				<input type="hidden" name="hometown" value="">
			</h5>
			<input type="hidden" name="client_id" value="<?= $account_id; ?>" />
			<input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
		</div>
		<div click-com-wizard="buttons"></div>
	</div>
</form>
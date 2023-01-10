<form role="form" action="<?= API_BASE_URL; ?>membership/edit/extra-info" click-com-wizard="form-container">
    <div click-com-wizard="container" click-com-wizard--condition="Update Member's Data?">
        <div click-com-wizard="pages"></div>
        <div class="pb-0" click-com-wizard-title="Travel & Address" click-com-wizard="step">
            <h4>Member's Travel & Address Info</h4>
            <div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Any Traveling Experience?";
						$id_name = "traveling_experience";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$traveling_experience_1_selected = @((int)$member['info_more']['pdm_traveling_experience'] == 1) ? "selected": "";
						$traveling_experience_2_selected = @((int)$member['info_more']['pdm_traveling_experience'] == 2) ? "selected": "";
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1 '.@$traveling_experience_1_selected.'>Yes</option>
							<option value=2 '.@$traveling_experience_2_selected.'>No</option>
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
                        $input_value = 'value="'.@$member['info_more']['pdm_passport_number'].'"';
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
                        $_date = @$member['info_more']['pdm_passport_date_issued'];
						$_date = (empty($_date)) ? "": date("m/d/Y", strtotime($_date));
                        $input_value = 'value="'.$_date.'"';
						$input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" set_default="false" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.$tittle_placeholder.'"';
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
                        $_date = @$member['info_more']['pdm_passport_expiry_date'];
						$_date = (empty($_date)) ? "": date("m/d/Y", strtotime($_date));
                        $input_value = 'value="'.$_date.'"';
						$input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" set_default="false" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.$tittle_placeholder.'"';
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
						$tittle_placeholder = "Current Postal Address";
						$id_name = "current_postal_address";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_current_postal_address'].'"';
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
                        $input_value = 'value="'.@$member['info_more']['pdm_residential_address'].'"';
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
                        $input_value = 'value="'.@$member['info_more']['pdm_provide_landmarks'].'"';
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
                        $input_value = 'value="'.@$member['info_more']['pdm_digital_address'].'"';
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
        <div class="pb-0" click-com-wizard-title="Courses & References" click-com-wizard="step">
            <h4>Member's Courses & References</h4>
            <div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Any Training Course Attended";
						$id_name = "training_course_attended";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $set_training_course_attended = @(int)$member['info_more']['pdm_training_course_attended'];
						$training_course_attended_1_selected = @($set_training_course_attended == 1) ? "selected": "";
						$training_course_attended_2_selected = @($set_training_course_attended == 2) ? "selected": "";
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1 '.@$training_course_attended_1_selected.'>Yes</option>
							<option value=2 '.@$training_course_attended_2_selected.'>No</option>
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
				<div class="col-lg-6" <?= ((int)$set_training_course_attended == 1) ? 'force-show' : ''; ?> select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Organization Name";
						$id_name = "training_organization_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_training_organization_name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" <?= ((int)$set_training_course_attended == 1) ? 'force-show' : ''; ?> select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Course Name";
						$id_name = "training_course_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_training_course_name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" <?= ((int)$set_training_course_attended == 1) ? 'force-show' : ''; ?> select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Course Duration";
						$id_name = "training_course_duration";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_training_course_duration'].'"';
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
                        $set_references = @(int)$member['info_more']['pdm_references'];
						$references_1_selected = @($set_references == 1) ? "selected": "";
						$references_2_selected = @($set_references == 2) ? "selected": "";
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1 '.@$references_1_selected.'>Yes</option>
							<option value=2 '.@$references_2_selected.'>No</option>
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
				<div class="col-lg-6" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Name";
						$id_name = "referee_1_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_referee_1_name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Contact";
						$id_name = "referee_1_contact";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_referee_1_contact'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Address";
						$id_name = "referee_1_address";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_referee_1_address'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Name";
						$id_name = "referee_2_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_referee_2_name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Contact";
						$id_name = "referee_2_contact";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_referee_2_contact'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Address";
						$id_name = "referee_2_address";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$member['info_more']['pdm_referee_2_address'].'"';
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
        <div class="pt-4 pb-0">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="member_id" value="<?= $member_id; ?>" />
        </div>
        <div click-com-wizard="buttons"></div>
    </div>
</form>
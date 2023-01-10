
                <div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Field of Study";
						$id_name = "field_of_study";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
						$input_value = 'value="'.$infoExtra['fieldOfStudy'].'"';
					
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Name of Institution/ School";
						$id_name = "name_of_institution";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
						$input_value = 'value="'.$infoExtra['nameOfInstitution'].'"';
					
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Date of Marriage";
						$id_name = "date_of_marriage";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
						$_date = $infoExtra['dateOfMarriage']['date'];
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Mother's Name";
						$id_name = "mother_name";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoExtra['motherName'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Mother's Living Status";
						$id_name = "mother_living_status";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $mother_living_status_1_selected = ((int)$infoExtra['motherLivingStatus'] == 1) ? "selected": "";
                        $mother_living_status_2_selected = ((int)$infoExtra['motherLivingStatus'] == 2) ? "selected": "";
                        $input_value = '
                            <option value="">'.$tittle_placeholder.'</option>
                            <option value=1 '.$mother_living_status_1_selected.'>Alive</option>
                            <option value=2 '.$mother_living_status_2_selected.'>Deceased</option>
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Mother's Occupation";
						$id_name = "mother_occupation";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoExtra['motherOccupation'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Father's Name";
						$id_name = "father_name";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoExtra['fatherName'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Father's Living Status";
						$id_name = "father_living_status";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
                    <?php                    
                        $father_living_status_1_selected = ((int)$infoExtra['fatherLivingStatus'] == 1) ? "selected": "";
                        $father_living_status_2_selected = ((int)$infoExtra['fatherLivingStatus'] == 2) ? "selected": "";
                        $input_value = '
                            <option value="">'.$tittle_placeholder.'</option>
                            <option value=1 '.$father_living_status_1_selected.'>Alive</option>
                            <option value=2 '.$father_living_status_2_selected.'>Deceased</option>
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Father's Occupation";
						$id_name = "father_occupation";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoExtra['fatherOccupation'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Guardian's Name";
						$id_name = "guardian_name";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoExtra['guardianName'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Guardian's Occupation";
						$id_name = "guardian_occupation";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoExtra['guardianOccupation'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Next of Kin's Name";
						$id_name = "next_of_kin_name";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoExtra['nextOfKinName'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Next of Kin's Contact";
						$id_name = "next_of_kin_contact";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoExtra['nextOfKinContact'].'"';
						$input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div> 
			    <div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Any Disabilities";
						$id_name = "disability";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$disability_1_selected = ((int)$infoStatus['disability'] == 1) ? "selected": "";
						$disability_2_selected = ((int)$infoStatus['disability'] == 2) ? "selected": "";
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1 '.$disability_1_selected.'>Yes</option>
							<option value=2 '.$disability_2_selected.'>No</option>
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Select Marital Status";
						$id_name = "marital_status";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $set_value = $infoStatus['maritalStatus']['id'];
						$marital_status = $ccApi->marital_status($all=true, $id=1, function($marital_statuses) use($set_value) {
							$at = '';
							foreach ($marital_statuses as $key => $marital_status) {
                                $selected_value = ((int)$set_value == (int)$marital_status['pdd_id']) ? "selected" : "";
								$at .= '<option value="'.$marital_status['pdd_id'].'" '.$selected_value.'>'.$marital_status['pdd_info'].'</option>';
							}
							return $at;
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
				<div class="col-md-6 col-lg-4" select-show="<?= $id_name; ?>">
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Select Occupational Status";
						$id_name = "occupation";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $set_value = $infoStatus['occupationalStatus']['id'];
						$occupation = $ccApi->occupation($all=true, $id=1, function($occupations) use($set_value) {
							$at = '';
							foreach ($occupations as $key => $occupation) {
                                $selected_value = ((int)$set_value == (int)$occupation['pdd_id']) ? "selected" : "";
								$at .= '<option value="'.$occupation['pdd_id'].'" '.$selected_value.'>'.$occupation['pdd_info'].'</option>';
							}
							return $at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$occupation.'
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
				<div class="col-md-6 col-lg-4" select-show="<?= $id_name; ?>">
					<?php 
						$tittle_placeholder = "Other Occupational Status";
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Select Educational Status";
						$id_name = "education";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $set_value = $infoStatus['educationalStatus']['id'];
						$education = $ccApi->education($all=true, $id=1, function($educations) use($set_value) {
							$at = '';
							foreach ($educations as $key => $education) {
                                $selected_value = ((int)$set_value == (int)$education['pdd_id']) ? "selected" : "";
								$at .= '<option value="'.$education['pdd_id'].'" '.$selected_value.'>'.$education['pdd_info'].'</option>';
							}
							return $at;
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
				<div class="col-md-6 col-lg-4" select-show="<?= $id_name; ?>">
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
                <div class="col-md-6 col-lg-4">
                    <?php 
						$tittle_placeholder = "Select Religion";
						$id_name = "religion";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
						$set_religion = $this->member['religion']['id'];
						$religion = $ccApi->religion($all=true, $id=1, function($religions) use($set_religion) {
							$at = '';
							foreach ($religions as $key => $religion) {
								$religion_selected = ((int)$set_religion == $religion['pdd_id']) ? "selected": "";
								$at .= '<option value="'.$religion['pdd_id'].'" '.$religion_selected.'>'.$religion['pdd_info'].'</option>';
							}
							return $at;
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Select Languages Spoken";
						$id_name = "languages";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $set_languages = $infoStatus['languages'];
						$language = $ccApi->languages($all=true, $id=1, function($languages) use($set_languages) {
                            $at = '';
                            
                            $set_languages = explode(",", $set_languages);
							foreach ($languages as $key => $language) {
                                $selected_languages = in_array($language['pdd_id'], $set_languages) ? "selected" : "";
								$at .= '<option value="'.$language['pdd_id'].'" '.$selected_languages.'>'.$language['pdd_info'].'</option>';
							}
							return $at;
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Any Traveling Experience?";
						$id_name = "traveling_experience";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$traveling_experience_1_selected = ((int)$infoMore['travelingExperience'] == 1) ? "selected": "";
						$traveling_experience_2_selected = ((int)$infoMore['travelingExperience'] == 2) ? "selected": "";
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1 '.$traveling_experience_1_selected.'>Yes</option>
							<option value=2 '.$traveling_experience_2_selected.'>No</option>
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
				<div class="col-md-4 col-lg-4">
					<?php 
						$tittle_placeholder = "Passport Number";
						$id_name = "passport_number";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoMore['passportNumber'].'"';
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
                        $_date = $infoMore['passportDateIssued']['date'];
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
                        $_date = $infoMore['passportExpiryDate']['date'];
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
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Any Training Course Attended";
						$id_name = "training_course_attended";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $set_training_course_attended = (int)$infoMore['trainingCourseAttended'];
						$training_course_attended_1_selected = ($set_training_course_attended == 1) ? "selected": "";
						$training_course_attended_2_selected = ($set_training_course_attended == 2) ? "selected": "";
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1 '.$training_course_attended_1_selected.'>Yes</option>
							<option value=2 '.$training_course_attended_2_selected.'>No</option>
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
				<div class="col-md-6 col-lg-4" <?= ((int)$set_training_course_attended == 1) ? 'force-show' : ''; ?> select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Organization Name";
						$id_name = "training_organization_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['trainingOrganizationName'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4" <?= ((int)$set_training_course_attended == 1) ? 'force-show' : ''; ?> select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Course Name";
						$id_name = "training_course_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['trainingCourseName'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4" <?= ((int)$set_training_course_attended == 1) ? 'force-show' : ''; ?> select-show="training_course_attended">
					<?php 
						$tittle_placeholder = "Course Duration";
						$id_name = "training_course_duration";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['trainingCourseDuration'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Current Postal Address";
						$id_name = "current_postal_address";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoMore['currentPostalAddress'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Residential Address";
						$id_name = "residential_address";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoMore['residentialAddress'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Provide Landmarks ";
						$id_name = "provide_landmarks";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoMore['provideLandmarks'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "Digital Address";
						$id_name = "digital_address";
					?>
					<h6><?= $tittle_placeholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$infoMore['digitalAddress'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4">
					<?php 
						$tittle_placeholder = "References";
						$id_name = "references";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $set_references = (int)$infoMore['references'];
						$references_1_selected = ($set_references == 1) ? "selected": "";
						$references_2_selected = ($set_references == 2) ? "selected": "";
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option value=1 '.$references_1_selected.'>Yes</option>
							<option value=2 '.$references_2_selected.'>No</option>
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
				<div class="col-md-6 col-lg-4" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Name";
						$id_name = "referee_1_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['referee1Name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Contact";
						$id_name = "referee_1_contact";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['referee1Contact'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 1’s Address";
						$id_name = "referee_1_address";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['referee1Address'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Name";
						$id_name = "referee_2_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['referee2Name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Contact";
						$id_name = "referee_2_contact";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['referee2Contact'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-md-6 col-lg-4" <?= ((int)$set_references == 1) ? 'force-show' : ''; ?> select-show="references">
					<?php 
						$tittle_placeholder = "Referee 2’s Address";
						$id_name = "referee_2_address";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$infoMore['referee2Address'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
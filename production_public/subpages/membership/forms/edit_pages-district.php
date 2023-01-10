<form role="form" action="<?= API_BASE_URL; ?>membership/edit/district-details" click-com-wizard="form-container">
    <div click-com-wizard="container" click-com-wizard--condition="Update Staff's District Details?">
        <div click-com-wizard="pages"></div>
        <div class="pb-0" click-com-wizard-title="Staff Details" click-com-wizard="step">
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
                        $set_staff_status = @$member['info_statuses']['pdm_occupational_status'];
						$designation = $ccApi->staff_status($all=true, $id=1, function($designations) use($set_staff_status) {
							$at = '';
							foreach ($designations as $key => $designation) {
                                $selected = @(strtolower($set_staff_status) == strtolower($designation['pdd_id'])) ? "selected": "";
								$at .= '<option value="'.$designation['pdd_id'].'" '.$selected.'>'.$designation['pdd_info'].'</option>';
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
						$set_groups = @$member['member_groups'];
                        $groups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($set_groups) {
                            $at = '';
        
                            $_set_groups = $set_groups;
                            $set_groups = [];
        
                            foreach ($_set_groups as $key => $set_group) {
                                if (!in_array($set_group['pdmmg_group_id'], $set_groups)) {
                                    array_push($set_groups, $set_group['pdmmg_group_id']);
                                }
                            }
        
                            foreach ($groups as $group_key => $group) {
                                $selected_group = (in_array($group['pdmg_id'], $set_groups)) ? "selected" : "";
                                $at .= '<option value="'.$group['pdmg_id'].'" '.$selected_group.'>'.$group['pdmg_group'].'</option>'; 
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
						
                        $set_subgroups = @$member['member_subgroups'];
                        $subgroups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($ccApi, $account_id, $set_subgroups) {
                            $at = '';
                            foreach ($groups as $key => $group) {
                                $group_id = $group['pdmg_id'];
                                $group_name = $group['pdmg_group'];
                                $at .= $ccApi->subgroups($all=true, $account_id, $group_id, $id=1, function($subgroups) use($group_name, $set_subgroups) {
                                    $sg = '';
        
                                    $_set_subgroups = $set_subgroups;
                                    $set_subgroups = [];
        
                                    foreach ($_set_subgroups as $key => $set_subgroup) {
                                        if (!in_array($set_subgroup['pdmms_subgroup_id'], $set_subgroups)) {
                                            array_push($set_subgroups, $set_subgroup['pdmms_subgroup_id']);
                                        }
                                    }
                
                                    foreach ($subgroups as $key => $subgroup) {
                                        $selected_subgroups = (in_array($subgroup['pdmg_id'], $set_subgroups)) ? "selected" : "";
                                        $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$selected_subgroups.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
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
                <?php 
                    $_committee_shower = ((int)$set_staff_status == 1) ? 'force-show' : '';
                ?>
                <div class="col-lg-6" <?= $_committee_shower; ?> select-show="<?= $id_name_changer; ?>" 
                    select-show-alt--committee="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Committee";
						$id_name = "user_committee";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$set_committees = @$member['staff_committees'];
                        $committees = $ccApi->committees($all=true, $account_id, $id=1, function($committees) use($set_committees) {
                            $at = '';
        
                            $_set_committees = $set_committees;
                            $set_committees = [];
		
							if (is_array($_set_committees)) {
								foreach ($_set_committees as $key => $set_committee) {
									if (!in_array($set_committee['pdmmc_committee_id'], $set_committees)) {
										array_push($set_committees, $set_committee['pdmmc_committee_id']);
									}
								}
							}
        
                            foreach ($committees as $committee_key => $committee) {
                                $selected_group = (in_array($committee['pdmg_id'], $set_committees)) ? "selected" : "";
                                $at .= '<option value="'.$committee['pdmg_id'].'" '.$selected_group.'>'.$committee['pdmg_group'].'</option>'; 
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
                <?php 
                    $_subcommittee_shower = ((int)$set_staff_status == 1) ? 'force-show' : '';
                ?>
                <div class="col-lg-6" <?= $_subcommittee_shower; ?> select-show="<?= $id_name_changer; ?>" 
					select-show-alt--committee="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Sub Committee";
						$id_name = "user_subcommittee";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$set_subcommittees = @$member['staff_subcommittees'];
                        $subcommittees = $ccApi->committees($all=true, $account_id, $id=1, function($committees) use($ccApi, $account_id, $set_subcommittees) {
                            $at = '';
                            foreach ($committees as $key => $group) {
                                $group_id = $group['pdmg_id'];
                                $group_name = $group['pdmg_group'];
                                $at .= $ccApi->subcommittees($all=true, $account_id, $group_id, $id=1, function($subcommittees) use($group_name, $set_subcommittees) {
                                    $sg = '';
        
                                    $_set_subcommittees = $set_subcommittees;
                                    $set_subcommittees = [];
		
									if (is_array($_set_subcommittees)) {
										foreach ($_set_subcommittees as $key => $set_subcommittee) {
											if (!in_array($set_subcommittee['pdmms_subcommittee_id'], $set_subcommittees)) {
												array_push($set_subcommittees, $set_subcommittee['pdmms_subcommittee_id']);
											}
										}
									}
                
                                    foreach ($subcommittees as $key => $subgroup) {
                                        $selected_subcommittees = (in_array($subgroup['pdmg_id'], $set_subcommittees)) ? "selected" : "";
                                        $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$selected_subcommittees.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
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
                <?php 
                    $_appointmentstatus_shower = ((int)$set_staff_status == 1) ? 'force-show' : '';
                ?>
                <div class="col-lg-6" <?= $_appointmentstatus_shower; ?> select-show="<?= $id_name_changer; ?>"  select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Your Status";
						$id_name = "user_status";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$set_user_status = @$member['info_district']['pdm_user_status'];
						$get_string = "staff-assembly-member/appointment_statuses";
						$statuses = $ccApi->fetch_from($get_string=$get_string, function($statuses) use ($set_user_status) {
							$at = '';
							foreach ($statuses as $key => $status) {
								$selected = ((int)$set_user_status === (int)$status['pdd_id']) ? "selected": "";
								$at .= '<option value="'.$status['pdd_id'].'" '.$selected.'>'.$status['pdd_info'].'</option>';
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
                <?php 
                    $_appointmenttermserved_shower = ((int)$set_staff_status == 1) ? 'force-show' : '';
                ?>
                <div class="col-lg-6" <?= $_appointmenttermserved_shower; ?> select-show="<?= $id_name_changer; ?>"  select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Select Terms served";
						$id_name = "user_termsserved";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$set_termserved = @$member['info_district']['pdm_user_termsserved'];
						$get_string = "staff-assembly-member/terms_served";
						$statuses = $ccApi->fetch_from($get_string=$get_string, function($statuses) use($set_termserved) {
							$at = '';
							foreach ($statuses as $key => $status) {
								$selected = ((int)$set_termserved === (int)$status['pdd_id']) ? "selected": "";
								$at .= '<option value="'.$status['pdd_id'].'" '.$selected.'>'.$status['pdd_info'].'</option>';
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
                <?php 
                    $_appointmentyear_shower = ((int)$set_staff_status == 1) ? 'force-show' : '';
                ?>
                <div class="col-lg-6" <?= $_appointmentyear_shower; ?> select-show="<?= $id_name_changer; ?>"  select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Enter the year you were last elected/appointed";
						$id_name = "last_appointment_year";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$set_last_appointment_year = @$member['info_district']['pdm_last_appointment_year'];
                        $input_value = 'value="'.$set_last_appointment_year.'"';
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
        <div class="pb-0" click-com-wizard-title="Location" click-com-wizard="step">
			<h4>Location Details</h4>
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
                <?php 
                    $__shower = ((int)$set_staff_status == 1) ? 'force-show' : "";
                ?>
                <div class="col-lg-6" <?= $__shower; ?> select-show-alt--1="<?= $id_name_changer; ?>">
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
							if (isset($locations[0]) && is_array($locations)) {
								foreach ($locations as $key => $location) {
									$location_selected = @((int)$electoral_area_location == $location['id']) ? "selected": "";
									$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Electoral_Area'].'</option>';
								}
							}
							return @$at;
						});
                       $input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.@$location.'
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
                <?php 
                    $_electoralarea_shower = ((int)$set_staff_status == 1) ? 'force-show' : '';
                ?>
                <div class="col-lg-6" <?= $_electoralarea_shower; ?> select-show="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Enter Communities/Suburbs in your Electoral Area";
						$id_name = "community";
					?>
					<h6><?= $tittle_placeholder; ?>: [separate communities with comma(,)]</h6>
					<?php
						$set_community = @$member['pdm_community'];
                        $input_value = 'value="'.$set_community.'"';
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
                    $_communities_shower = ((int)$set_staff_status == 1) ? 'force-show' : '';
                ?>
                <div class="col-lg-6" <?= $_communities_shower; ?> select-show="<?= $id_name_changer; ?>" select-show-alt--1="<?= $id_name_changer; ?>">
					<?php 
						$tittle_placeholder = "Have you entered all the communities in your electoral Area?";
						$id_name = "all_communities_entered";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$set_all_communities_entered = @$member['info_district']['pdm_all_communities_entered'];
                       	$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							<option '.(strtolower($set_all_communities_entered) === "yes"? 'selected': '').'>Yes</option>
							<option '.(strtolower($set_all_communities_entered) === "no"? 'selected': '').'>No</option>
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
						$set_hometown = @$member['pdm_hometown'];
                        $input_value = 'value="'.$set_hometown.'"';
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
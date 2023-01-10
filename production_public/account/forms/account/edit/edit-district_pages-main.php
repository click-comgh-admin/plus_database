<form role="form" action="<?= API_BASE_URL; ?>client-membership/user/edit-district" click-com-wizard="form-container">
    <div click-com-wizard="container" click-com-wizard--condition="Update Info?">
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
                        $input_value = 'value="'.@$user_info['pdcu_firstname'].'"';
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
                        $input_value = 'value="'.@$user_info['pdcu_surname'].'"';
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
						$gender_1_selected = @((int)$user_info['pdcu_gender'] == 1) ? "selected": "";
						$gender_2_selected = @((int)$user_info['pdcu_gender'] == 2) ? "selected": "";
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
						$input_value = 'value="'.date("m/d/Y", strtotime(@$user_info['pdcu_date_of_birth'])).'"';
					
                        $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
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
						$id_name = "phone_number";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="'.@$user_info['pdcu_phone'].'"';
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
                        $input_value = 'value="'.@$user_info['pdcu_email'].'"';
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
        <div class="pb-0" click-com-wizard-title="Extra" click-com-wizard="step">
            <h4>Extra</h4>
            <div class="row align-items-center justify-content-center">
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Staff Status";
						$id_name = "staff_status";;
						$id_name_changer = $id_name."_changer";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $set_staff_status = @$user_info['pdcu_role'];
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
						$set_groups = isset($user_info['user_info']['pdcud_group'])?$user_info['user_info']['pdcud_group']:"";
                        $groups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($set_groups) {
                            $at = '';
        
                            $_set_groups = explode(",", $set_groups);
                            $set_groups = [];
        
                            foreach ($_set_groups as $key => $set_group) {
                                if (!in_array($set_group, $set_groups)) {
                                    array_push($set_groups, $set_group);
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
                        $set_subgroups = @isset($user_info['user_info']['pdcud_subgroup'])?$user_info['user_info']['pdcud_subgroup']:"";
                        $subgroups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($ccApi, $account_id, $set_subgroups) {
                            $at = '';
                            foreach ($groups as $key => $group) {
                                $group_id = $group['pdmg_id'];
                                $group_name = $group['pdmg_group'];
                                $at .= $ccApi->subgroups($all=true, $account_id, $group_id, $id=1, function($subgroups) use($group_name, $set_subgroups) {
                                    $sg = '';
        
                                    $_set_subgroups = explode(",", $set_subgroups);
                                    $set_subgroups = [];
        
                                    foreach ($_set_subgroups as $key => $set_subgroup) {
                                        if (!in_array($set_subgroup, $set_subgroups)) {
                                            array_push($set_subgroups, $set_subgroup);
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
						$set_committees = isset($user_info['user_info']['pdcud_committee'])?$user_info['user_info']['pdcud_committee']:"";
                        $committees = $ccApi->committees($all=true, $account_id, $id=1, function($committees) use($set_committees) {
                            $at = '';
        
                            $_set_committees = explode(",", $set_committees);
                            $set_committees = [];
		
							if (is_array($_set_committees)) {
								foreach ($_set_committees as $key => $set_committee) {
									if (!in_array($set_committee, $set_committees)) {
										array_push($set_committees, $set_committee);
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
						$set_subcommittees = isset($user_info['user_info']['pdcud_subcommittee'])?$user_info['user_info']['pdcud_subcommittee']:"";
                        $subcommittees = $ccApi->committees($all=true, $account_id, $id=1, function($committees) use($ccApi, $account_id, $set_subcommittees) {
                            $at = '';
                            foreach ($committees as $key => $group) {
                                $group_id = $group['pdmg_id'];
                                $group_name = $group['pdmg_group'];
                                $at .= $ccApi->subcommittees($all=true, $account_id, $group_id, $id=1, function($subcommittees) use($group_name, $set_subcommittees) {
                                    $sg = '';
        
                                    $_set_subcommittees = explode(",", $set_subcommittees);
                                    $set_subcommittees = [];
		
									if (is_array($_set_subcommittees)) {
										foreach ($_set_subcommittees as $key => $set_subcommittee) {
											if (!in_array($set_subcommittee, $set_subcommittees)) {
												array_push($set_subcommittees, $set_subcommittee);
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
						$set_user_status = @isset($user_info['user_info']['pdcud_appointement_status'])?$user_info['user_info']['pdcud_appointement_status']:"";
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
						$set_termserved = @isset($user_info['user_info']['pdcud_terms_served'])?$user_info['user_info']['pdcud_terms_served']: "";
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
						$set_last_appointment_year = @isset($user_info['user_info']['pdcud_last_appointment_year'])? $user_info['user_info']['pdcud_last_appointment_year']:"";
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
                <div class="col-lg-6 d-none">
					<?php 
						$tittle_placeholder = "Select Access Level";
						$id_name = "access_level";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $defaultLevel = @$user_info['pdcu_level'];
						$client_levels = $ccApi->client_levels($all=true, $id=1, function($client_levels) use($defaultLevel) {
							$at = '';
							foreach ($client_levels as $key => $client_level) {
                                $selected = ((int)$defaultLevel==(int)$client_level['pdd_id']) ? "selected" : "";
								$at .= '<option value="'.$client_level['pdd_id'].'" '.$selected.'>'.$client_level['pdd_info'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$client_levels.'
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
            </div>
        </div>
        <div class="pt-4 pb-0">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div click-com-wizard="buttons"></div>
    </div>
</form>
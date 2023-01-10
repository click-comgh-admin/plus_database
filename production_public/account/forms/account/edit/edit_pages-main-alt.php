<form role="form" action="<?= API_BASE_URL; ?>client-membership/user/edit-alt" click-com-wizard="form-container">
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
                        $input_value = 'value="'.@$client_user['pdcu_firstname'].'"';
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
                        $input_value = 'value="'.@$client_user['pdcu_surname'].'"';
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
						$gender_1_selected = @((int)$client_user['pdcu_gender'] == 1) ? "selected": "";
						$gender_2_selected = @((int)$client_user['pdcu_gender'] == 2) ? "selected": "";
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
						$input_value = 'value="'.date("m/d/Y", strtotime(@$client_user['pdcu_date_of_birth'])).'"';
					
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
                        $input_value = 'value="'.@$client_user['pdcu_phone'].'"';
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
                        $input_value = 'value="'.@$client_user['pdcu_email'].'"';
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
            <div class="row align-items-center justify-content-center px-0">
                <div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Designation/ Role";
						$id_name = "applicant_designation_role";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $defaultRole = @$client_user['pdcu_role'];
						$designation = $ccApi->designation($all=true, $id=1, function($designations) use($defaultRole) {
							$at = '';
							foreach ($designations as $key => $designation) {
                                $selected = ((int)$defaultRole==(int)$designation['coc_leadership_id']) ? "selected" : "";
								$at .= '<option value="'.$designation['coc_leadership_id'].'" '.$selected.'>'.$designation['coc_leader'].'</option>';
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
				<div class="col-lg-6" select-show="applicant_designation_role">
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
				<div class="col-lg-6">
					<?php 
						$tittle_placeholder = "Select Group";
						$id_name = "user_group";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
						$set_groups = $client_user['user_info']['pdcud_group'];
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
						$tittle_placeholder = "Select Sub-Group";
						$id_name = "user_subgroup";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $set_subgroups = @$client_user['user_info']['pdcud_subgroup'];
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
                <div class="col-lg-6 d-none">
					<?php 
						$tittle_placeholder = "Select Access Level";
						$id_name = "access_level";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $defaultLevel = @$client_user['pdcu_level'];
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
            <input type="hidden" name="user_id" value="<?= @$client_user['pdcu_id']; ?>" />
        </div>
        <div click-com-wizard="buttons"></div>
    </div>
</form>
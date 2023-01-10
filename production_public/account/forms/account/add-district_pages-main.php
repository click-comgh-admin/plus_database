<form role="form" action="<?= API_BASE_URL; ?>client-membership/user/add_district_user" click-com-wizard="form-container">
    <div click-com-wizard="container" click-com-wizard--condition="Save Info?">
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
                        $input_value = 'value=""';
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
                        $input_value = 'value=""';
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
						$tittle_placeholder = "Date of Birth";
						$id_name = "date_of_birth";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
						$input_value = 'value="'.date("m/d/Y", strtotime("01/01/2000")).'"';
					
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
						$tittle_placeholder = "Mobile Contact";
						$id_name = "phone_number";
					?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value=""';
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
                        $input_value = 'value=""';
                        $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"email" ],
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
						$client_levels = $ccApi->client_levels($all=true, $id=1, function($client_levels) {
							$at = '';
							foreach ($client_levels as $key => $client_level) {
                                if ((int)$client_level['pdd_id'] === 1) {
                                    $at .= '<option value="'.$client_level['pdd_id'].'" selected>'.$client_level['pdd_info'].'</option>';
                                }
							}
							return @$at;
						});
						$input_value = '
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
        <div class="pb-0" click-com-wizard-title="Staff Details" click-com-wizard="step">
			<h4>Staff Details</h4>
            <div class="row align-items-center justify-content-center px-0">
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
        <div class="pb-0" click-com-wizard-title="Access" click-com-wizard="step">
            <div class="row align-items-center justify-content-center px-0">
                <div class="col-md-6">
                    <div class="table-responsive">
                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead class="shadow bg-primary">
                                <tr>
                                    <th class="text-white">Member's Page Access Level</th>
                                    <th class="text-white text-center">Access</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    foreach ($appPages as $key => $page) { ?>
                                        <tr>
                                            <th><?= $page['pdpc_page']; ?></th>
                                            <td class="text-center p-0">
                                                <div class="custom-checkbox custom-control">
                                                    <input class="custom-control-input" type="checkbox" name="page_check_<?= $page['pdpc_id']; ?>" id="page_check_<?= $page['pdpc_id']; ?>" />
                                                    <label class="custom-control-label" for="page_check_<?= $page['pdpc_id']; ?>">Select</label>
                                                </div>	
                                                <input type="hidden" name="page_id[]" value="<?= $page['pdpc_id']; ?>" />
                                            </td>
                                        </tr>
                                    <?php }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-0" click-com-wizard-title="Password" click-com-wizard="step">
            <h4>Password</h4>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
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
                <div class="col-lg-6">
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
            </div>
        </div>
        <div class="pt-4 pb-0">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div click-com-wizard="buttons"></div>
    </div>
</form>
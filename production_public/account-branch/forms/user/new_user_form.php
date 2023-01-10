<?php
    namespace UserForm;
    class UserForm
    {
        public $branch_data = [];
        public $data = [];
        public $appPages = [];
        public $inputCol = "col-lg-4 col-md-6";
        public $load_countries = [];

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-info p-0 mb-3 shadow shadow-sm card-shadow-info border border-white bg-night-sky">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0 border border-white">
                    <u class="text-capitalize small font-weight-bold" style="color: white"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        private function leader_role(int $account_type, $id_name, $default, $tf, $ccApi)
        {
            $account_type = ((int)$account_type === 0) ? AccountInfoType: $account_type;
            if ((int)$account_type === 10) { ?>
                <div class="<?= $this->inputCol; ?>">
                    <?php 
						$tittle_placeholder = "Designation/ Role";
						$id_name = "$id_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $default = $default;
						$designation = $ccApi->staff_status($all=true, $id=1, function($designations) use($default) {
							$at = '';
							foreach ($designations as $key => $designation) {
                                $selected = @((int)$default == (int)$designation['pdd_id']) ? "selected" : "";
								$at .= '<option value="'.@$designation['pdd_id'].'" '.$selected.'>'.@$designation['pdd_info'].'</option>';
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
                <div class="<?= $this->inputCol; ?>" select-show="<?= $id_name; ?>">
                    <?php 
                        $tittle_placeholder = "Other Designation/ Role";
                        $id_name = "other_$id_name";
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
            <?php } else { 
                if (isset($this->branch_data["pdc_id"])) { ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Designation/ Role";
                            $id_name = "$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $default = $default;
                            $designation = $ccApi->designation($all=true, $id=1, function($designations) use($default) {
                                $at = '';
                                foreach ($designations as $key => $designation) {
                                    $selected = @((int)$default == (int)$designation['coc_leadership_id']) ? "selected" : "";
                                    $at .= '<option value="'.@$designation['coc_leadership_id'].'" '.$selected.'>'.@$designation['coc_leader'].'</option>';
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
                    <div class="<?= $this->inputCol; ?>" select-show="<?= $id_name; ?>">
                        <?php 
                            $tittle_placeholder = "Other Designation/ Role";
                            $id_name = "other_$id_name";
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
                <?php } else { ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $id_name = "$id_name";
                        ?>
                        <input type="hidden" name="<?= $id_name; ?>" id="<?= $id_name; ?>" value="Others" />
                        <?php 
                            $tittle_placeholder = "Designation/ Role";
                            $id_name = "other_$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = $default;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                <?php } ?>
            <?php }
        }

        public function main_content(int $account_id = 0, $account_status, $tf, $ccApi)
        { 
            ?>
            <div class="col-lg-12 col-md-12">
                <div class="row justify-content-center">
                    <?= $this->header("Details of user."); ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php
                            $tittle_placeholder = "Enter First Name";
                            $id_name = "first_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdcu_firstname"])) ? $this->data["pdcu_firstname"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Enter Surname";
                            $id_name = "surname";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdcu_surname"])) ? $this->data["pdcu_surname"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <?php $___AT___ = isset($this->branch_data["pdc_account_type"]) ? (int)$this->branch_data["pdc_account_type"] : AccountInfoType; ?>
                    <input type="hidden" value="<?= (int)$___AT___; ?>" name="account_type">
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Select Gender";
                            $id_name = "gender";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdcu_gender"])) ? $this->data["pdcu_gender"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                <option value=1 '.(((int)$input_value === 1) ? "selected":"").'>Male</option>
                                <option value=2 '.(((int)$input_value === 2) ? "selected":"").'>Female</option>
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
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Date of Birth";
                            $id_name = "date_of_birth";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdcu_date_of_birth"])) ? $this->data["pdcu_date_of_birth"] : date("m/d/Y");
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            $input_value = 'value="'.date("m/d/Y", strtotime($input_value)).'"';
                        
                            $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"datepicker-here " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Mobile Contact";
                            $id_name = "phone_number";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdcu_phone"])) ? $this->data["pdcu_phone"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'" maxlength="10"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"phone" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Enter E-mail Address";
                            $id_name = "email_address";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdcu_email"])) ? $this->data["pdcu_email"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"email" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <?php
                        $id_name = "applicant_designation_role";
                        $input_value = (isset($this->data["pdcu_role"])) ? $this->data["pdcu_role"] : "";
                        $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                        echo $this->leader_role($___AT___, $id_name, $input_value, $tf, $ccApi);
                    ?>
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Select Group";
                            $id_name = "user_group";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
						    $set_groups = isset($this->data['user_info']['pdcud_group']) ? $this->data['user_info']['pdcud_group']: "";
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
                    <div class="<?= $this->inputCol; ?>">
                        <?php 
                            $tittle_placeholder = "Select Sub-Group";
                            $id_name = "user_subgroup";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $set_subgroups = @isset($this->data['user_info']['pdcud_subgroup'])?$this->data['user_info']['pdcud_subgroup']:"";
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
                    <div class="<?= $this->inputCol; ?>"></div><div class="<?= $this->inputCol; ?>"></div>
                    <?php if (!isset($this->data['pdcu_password'])) { ?>
                        <?= $this->header("User Password."); ?>
                        <div class="<?= $this->inputCol; ?>">
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
                        <div class="<?= $this->inputCol; ?>">
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
                    <?php } ?>
                    <?= $this->header("Set User Access Level."); ?> 
                    <div class="col-md-12">
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
                                                if (isset($this->branch_data['pdc_id']) && isset($this->data['pdcu_id'])) {
                                                    $get_string = "page-access-levels/client_level?client_id=".$this->branch_data['pdc_id']."&user_id=".$this->data['pdcu_id'];
                                                    $user_access_levels = $ccApi->fetch_from($get_string, function($pages)
                                                    {
                                                        $access_levels = [];
                                                        foreach ($pages as $key => $page) {
                                                            if (!in_array($page['pdpcl_page_id'], $access_levels)) {
                                                                array_push($access_levels, $page['pdpcl_page_id']);
                                                            }
                                                        }
                                                        return $access_levels;
                                                    }, $debug=false);
                                                } else {
                                                    $user_access_levels = [];
                                                }
                                                
                                                foreach ($this->appPages as $key => $page) { ?>
                                                    <tr>
                                                        <th><?= $page['pdpc_page']; ?></th>
                                                        <td class="text-center p-0">
                                                            <?php
                                                                $isChecked = (in_array($page['pdpc_id'], $user_access_levels)) ? 'checked="true"' : "";
                                                            ?>
                                                            <div class="custom-checkbox custom-control">
                                                                <input class="custom-control-input" type="checkbox" name="page_check_<?= $page['pdpc_id']; ?>" id="page_check_<?= $page['pdpc_id']; ?>" <?= $isChecked; ?> />
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
                </div>
            </div>
        <?php }
    }
?>
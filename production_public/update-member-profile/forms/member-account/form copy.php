<?php
    namespace MemberProfileUpdate;
    use CustomForms;

    class MemberProfileUpdate
    {
        private $member = [];
        private $additionalQuestions = [];
        public $loadCountries = [];

        public function __construct(?array $member, ?array $additionalQuestions) {
            $this->member = isset($member[0])? $member[0]: [];
            $this->additionalQuestions = $additionalQuestions;
        }

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-warning p-0 mb-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u> 
                </h2>
            </div>
        <?php }

        public function main_content($tf, $ccApi)
        {
            ####::PRINT DATA
                // echo "<pre>";
                // print_r($this->member);
                // echo "</pre>";
                $memberId = $this->member['id'];
                $appProfile = $this->member['extraInfo']['memberAppProfile'];
                // echo "<pre>";
                // print_r($appProfile);
                // echo "</pre>";
                $infoExtra = $this->member['extraInfo']['memberInfoExtra'];
                // echo "<pre>";
                // print_r($infoExtra);
                // echo "</pre>";
                $infoMore = $this->member['extraInfo']['memberInfoMore'];
                // echo "<pre>";
                // print_r($infoMore);
                // echo "</pre>";
                $infoStatus = $this->member['extraInfo']['memberInfoStatus'];
                // echo "<pre>";
                // print_r($infoStatus);
                // echo "</pre>";
                $memberGroups = $this->member['extraInfo']['memberGroups'];
                // echo "<pre>";
                // print_r($memberGroups);
                // echo "</pre>";
                $memberSubGroups = $this->member['extraInfo']['memberSubGroups'];
                // echo "<pre>";
                // print_r($memberSubGroups);
                // echo "</pre>";
                $memberLocation = $this->member['extraInfo']['memberLocation'];
                // echo "<pre>";
                // print_r($memberLocation);
                // echo "</pre>";
                $memberAdditionalProfile = $this->member['extraInfo']['memberAdditionalProfile']['responses'];
                // echo "<pre>";
                // print_r($memberAdditionalProfile);
                // echo "</pre>";
            ####

            $account_id = AccountInfoId; ?>             
            <div class="row align-items-center justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <?php
						$titlePlaceholder = "Enter First Name";
						$id_name = "firstname";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$this->member['firstname'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Enter Surname";
						$id_name = "surname";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$this->member['surname'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Select Gender";
						$id_name = "gender";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
						$gender_1_selected = ((int)$this->member['gender'] == 1) ? "selected": "";
						$gender_2_selected = ((int)$this->member['gender'] == 2) ? "selected": "";
						$input_value = '
                            <option value="">'.$titlePlaceholder.'</option>
							<option value=1 '.$gender_1_selected.'>Male</option>
							<option value=2 '.$gender_2_selected.'>Female</option>
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
						$titlePlaceholder = "Date of Birth";
						$id_name = "date_of_birth";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
						$input_value = 'value="'.date("m/d/Y", strtotime($this->member['date_of_birth']['date'])).'"';
					
                        $input_attributes = ''.$input_value.' set_default="true" name="'.$id_name.'" id="'.$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.$titlePlaceholder.'"';
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
						$titlePlaceholder = "Mobile Contact";
						$id_name = "phone";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$this->member['phone'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'" maxlength="10"';
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
						$titlePlaceholder = "Enter E-mail Address";
						$id_name = "email";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$this->member['email'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"email" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Enter Place of Work";
						$id_name = "place_of_work";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$appProfile['placeOfWork'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Enter Whatsapp Number";
						$id_name = "whatsapp";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$appProfile['whatsapp'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Enter Facebook Handle";
						$id_name = "facebook";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$appProfile['facebook'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Enter Twitter Handle";
						$id_name = "twitter";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$appProfile['twitter'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Enter Instagram Handle";
						$id_name = "instagram";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$appProfile['instagram'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Enter Profession";
						$id_name = "profession";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$appProfile['profession'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Enter Business Area(s), separated with comma. ','";
						$id_name = "business_hashtag";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$appProfile['businessHashtag'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-8">
                    <?php 
						$titlePlaceholder = "Enter Business Description";
						$id_name = "business_desc";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = (isset($ppProfile['businessDesc'])) 
                            ? multilineText($ppProfile['businessDesc']) : "";
                        $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'" rows="3" ';
                        echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Date Member Joined Organization";
						$id_name = "date_joined";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $dateJoined = isset($appProfile['dateJoined']['date'])
                        ? date("m/d/Y", strtotime($appProfile['dateJoined']['date'])): "";
						$input_value = 'value="'.$dateJoined.'"';
                        
                        $input_attributes = ''.$input_value.' set_default="true" name="'.$id_name.'" id="'.$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.$titlePlaceholder.'"';
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
                        $titlePlaceholder = "Select Group(s)/ Committee(s)";
                        $id_name = "user_group";
                    ?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $set_groups = $memberGroups;
                        $groups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($set_groups) {
                            $at = '';

                            $_set_groups = $set_groups;
                            $set_groups = [];

                            if (is_array($_set_groups)) {
                                foreach ($_set_groups as $key => $set_group) {
                                    if (!in_array($set_group['group']['id'], $set_groups)) {
                                        array_push($set_groups, $set_group['group']['id']);
                                    }
                                }
                            }

                            if (is_array($groups)) {
                                foreach ($groups as $group_key => $group) {
                                    $selected_group = (in_array($group['pdmg_id'], $set_groups)) ? "selected" : "";
                                    $at .= '<option value="'.$group['pdmg_id'].'" '.$selected_group.'>'.$group['pdmg_group'].'</option>'; 
                                }    
                            }
                            return $at;
                        });
                        $input_value = '
                            <option value="">'.$titlePlaceholder.'</option>
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
                <div class="col-md-6 col-lg-4">
                    <?php 
                        $titlePlaceholder = "Select Subgroup(s)/ Unit(s)";
                        $id_name = "user_subgroup";
                    ?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $set_subgroups = $memberSubGroups;
                        $subgroups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($ccApi, $account_id, $set_subgroups) {
                            $at = '';
                            foreach ($groups as $key => $group) {
                                $group_id = $group['pdmg_id'];
                                $group_name = $group['pdmg_group'];
                                $at .= $ccApi->subgroups($all=true, $account_id, $group_id, $id=1, function($subgroups) use($group_name, $set_subgroups) {
                                    $sg = '';

                                    $_set_subgroups = $set_subgroups;
                                    $set_subgroups = [];

                                    if (is_array($_set_subgroups)) {
                                        foreach ($_set_subgroups as $key => $set_subgroup) {
                                            if (!in_array($set_subgroup['subgroup']['id'], $set_subgroups)) {
                                                array_push($set_subgroups, $set_subgroup['subgroup']['id']);
                                            }
                                        }
                                    }

                                    if (is_array($subgroups)) {
                                        foreach ($subgroups as $key => $subgroup) {
                                            $selected_subgroups = (in_array($subgroup['pdmg_id'], $set_subgroups)) ? "selected" : "";
                                            $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$selected_subgroups.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
                                        }
                                    }
                
                                    return $sg;
                                });
                            }
                            return $at;
                        });
                        $input_value = '
                            <option value="">'.$titlePlaceholder.'</option>
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
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Select Country of Nationality";
						$id_name = "nationality";
					?>
                    <?php
						$set_country = $this->member['nationality'];
						$countries = '';
						foreach ($this->loadCountries as $key => $country) {
							$country_selected = (strtolower($set_country) == strtolower($country->Name)) ? "selected": "";
							$countries .= "<option value='".$country->Name."' ".$country_selected.">".$country->Name."</option>";
						}
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
						$input_value = '
							<option value="">'.$titlePlaceholder.'</option>
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
                <div class="col-md-6 col-lg-4">
                    <?php 
						$titlePlaceholder = "Select Religion";
						$id_name = "religion";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
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
							<option value="">'.$titlePlaceholder.'</option>
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
                <div class="col-md-6 col-lg-4" select-show="<?= $id_name; ?>">
                    <?php 
						$titlePlaceholder = "Other Religion";
						$id_name = "religion_other";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
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
						$titlePlaceholder = "Select Country of Residence";
						$id_name = "country_of_residence";
					?>
                    <?php
						$set_country = $this->member['country_of_residence'];
						$countries = '';
						foreach ($this->loadCountries as $key => $country) {
							$country_selected = (strtolower($set_country) == strtolower($country->Name)) ? "selected": "";
							$countries .= "<option value='".$country->Name."' ".$country_selected.">".$country->Name."</option>";
						}
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
						$input_value = '
							<option value="">'.$titlePlaceholder.'</option>
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
                <div class="col-md-6 col-lg-4"
                    <?= (strtolower($set_country) != "ghana") ? 'select-show-alt="country"' : 'select-show="country" select-show-alt="country"'; ?>>
                    <?php 
						$titlePlaceholder = "Enter State/ Province";
						$id_name = "state_province";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$this->member['state_province'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$titlePlaceholder = "Select Region";
						$id_name = "region";
					?>
                    <h6><?= $titlePlaceholder; ?> <span id="region_loading"></span></h6>
                    <?php
						$region_location = $memberLocation['region']['id'];
						$location = $ccApi->get_location($type=$id_name."s", $get_string = "", function($locations) use($region_location) {
							$at = '';
							foreach ($locations as $key => $location) {
								$location_selected = ((int)$region_location == $location['id']) ? "selected": "";
								$at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['Region'].'</option>';
							}
							return $at;
						});
                       	$input_value = '
							<option value="">'.$titlePlaceholder.'</option>
							'.$location.'
						';
				   		$input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" no-ajax';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-md-6 col-lg-4" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$titlePlaceholder = "Select District";
						$id_name = "district";
					?>
                    <h6><?= $titlePlaceholder; ?> <span id="district_loading"></span></h6>
                    <?php
						$district_location = $memberLocation['district']['id'];
						$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location, function($locations) use($district_location) {
							$at = '';
							foreach ($locations as $key => $location) {
                                if (isset($location['id'])) {
                                    $location_selected = ((int)$district_location == $location['id']) ? "selected": "";
                                    $at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['District'].'</option>';
                                }
							}
							return $at;
						});
                       	$input_value = '
							<option value="">'.$titlePlaceholder.'</option>
							'.$location.'
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
                <div class="col-md-6 col-lg-4" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$titlePlaceholder = "Select Constituency";
						$id_name = "constituency";
					?>
                    <h6><?= $titlePlaceholder; ?> <span id="constituency_loading"></span></h6>
                    <?php
						$constituency_location = $memberLocation['constituency']['id'];
						$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location . "&district=" . $district_location,
							function($locations) use($constituency_location) {
							$at = '';
							foreach ($locations as $key => $location) {
                                if (isset($location['id'])) {
                                    $location_selected = ((int)$constituency_location == $location['id']) ? "selected": "";
                                    $at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['Constituency'].'</option>';
                                }
							}
							return $at;
						});
                       	$input_value = '
							<option value="">'.$titlePlaceholder.'</option>
							'.$location.'
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
                <div class="col-md-6 col-lg-4" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$titlePlaceholder = "Select Electoral Area";
						$id_name = "electoral_area";
					?>
                    <h6><?= $titlePlaceholder; ?> <span id="electoral_area_loading"></span></h6>
                    <?php
						$electoral_area_location = $memberLocation['electoralArea']['id'];
						$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location . "&district=" . $district_location,
							function($locations) use($electoral_area_location) {
							$at = '';
							foreach ($locations as $key => $location) {
                                if (isset($location['id'])) {
                                    $location_selected = ((int)$electoral_area_location == $location['id']) ? "selected": "";
                                    $at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['Electoral_Area'].'</option>';
                                }
							}
							return $at;
						});
                       	$input_value = '
							<option value="">'.$titlePlaceholder.'</option>
							'.$location.'
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
                <div class="col-md-6 col-lg-4" <?= (strtolower($set_country) == "ghana") ? 'force-show' : ''; ?>
                    select-show="country">
                    <?php 
						$titlePlaceholder = "Enter Community";
						$id_name = "community";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$this->member['community'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
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
						$titlePlaceholder = "Enter Home Town";
						$id_name = "hometown";
					?>
                    <h6><?= $titlePlaceholder; ?></h6>
                    <?php
                        $input_value = 'value="'.$this->member['hometown'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
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
						$titlePlaceholder = "House Address";
						$id_name = "house_no_digital_address";
					?>
					<h6><?= $titlePlaceholder; ?> <span class="text-warning">[Leave Empty if Not Applicable]</span></h6>
					<?php
                        $input_value = 'value="'.$this->member['house_no_digital_Address'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
                <?php
                    $customForms2 = new CustomForms\CustomForms2(
                        $template_file=$tf, $method="post"
                    );
                    
                    echo $this->header("Additional Registration");
                    foreach ($this->additionalQuestions as $key => $additionalQuestion) {
                        $additionalQuestionId = (int)$additionalQuestion['id'];
                        $memberProcessedResponse = [];
                        $memberResponse = [];
                        $memberResponseId = 0;
                        // echo "<pre>";
                        // print_r($additionalQuestion);
                        // echo "</pre>";
                        foreach ($memberAdditionalProfile as $mapkey => $mAp) {
                            $responseQuestionId = (int)$mAp['responseDetails']['question']['id'];

                            if ($additionalQuestionId === $responseQuestionId) {
                                $memberResponse = $mAp['memberResponse'];
                                $memberResponseId = (int)$mAp['responseDetails']['id'];
                                $memberProcessedResponse = $mAp['response'];
                            }
                        }
                        $type = (int)$additionalQuestion['type']['id']; ?>
                            <div class="col-md-6 col-lg-4">
                                <?php 
                                    $titlePlaceholder = $additionalQuestion['name'];
                                    $idNameIndex = ucfirst($titlePlaceholder);
                                    $idNameIndex = str_replace(" ", "", $idNameIndex);
                                    $idNameIndex = lcfirst($idNameIndex);

                                    $id_name = str_replace(" ", "_", strtolower($titlePlaceholder));
                                    
                                    // print_r($memberResponse);
                                    $value = isset($infoMore[$id_name])? $infoMore[$id_name]: null;
                                    $value = isset($infoExtra[$id_name])? $infoExtra[$id_name]: $value;
                                    $value = isset($infoStatus[$id_name])? $infoStatus[$id_name]: $value;

                                    $customForms2->options = $additionalQuestion['responses'];
                                    $customForms2->processedResponse = $memberProcessedResponse;
                                    $customForms2->default = isset($memberResponse["response"])
                                    ? $memberResponse["response"]: null;
                                    if ($additionalQuestionId === 2 ) {
                                        // print_r($memberProcessedResponse);
                                    }
                                    $customForms2->setFileUploaderPageUrlParams(
                                        $memberId, $memberResponseId, true, 0, $additionalQuestionId
                                    );

                                    echo $customForms2->makeInput(
                                        $titlePlaceholder, $type, $value, true
                                    );
                                ?>
                            </div>
                        <?php
                    }
                ?>
            </div>
        <?php }
    }
?>
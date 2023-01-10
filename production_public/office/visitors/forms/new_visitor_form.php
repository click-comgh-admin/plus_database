<?php
    namespace VisitorForm;
    class VisitorForm
    {
        public $data = [];
        public $appointmentForm;
        public function attachments(int $account_id = 0, $tf)
        { ?>
            <div upload_attachment="multiple" class="container" method="POST" action="<?= API_BASE_URL."office-uploads/"; ?>">
                <div class="col-md-12 card mb-3 shadow shadow-lg">
                    <label>Attach Media [<small class="text-warning">Select multiple attachments if neccessary</small>]: </label>
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-12">
                            <?php
                                $tittle_placeholder = "Add Attachment";
                                $id_name = "attachments";
                            ?>
                            <?php
                                $input_value = 'value=""';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'[]" accept=".doc,.docx,.xls,.xlsx,.pdf,.mp4,.mp3,.jpg,.jpeg,.png,.gif" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" multiple="true"';
                                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                    [ "name"=>"icon", "value"=>"pe-7s-file icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"type", "value"=>"file" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div>
                    </div>
                    <input type="hidden" value="" name="file" />
                    <input type="hidden" value="" name="file_extention" />
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="file_api_location" id="file_api_location" value="<?= FILE_BUCKET_BASE_URL; ?>files/" />
                    <label>[<small class="text-warning"> word, pdf, excel, MP4, MP3, Jpg, Png, Gif </small>]: </label>
                </div>
                <div myProgress style="display: none;" class="my-2">
                    <div myBar>0</div>
                </div>
                <div upload_attachment="display" class="w-100"></div>
            </div>
        <?php }

        private function header(string $title = "Title")
        { ?>
            <!-- <div class="col-md-12 small card alert-warning p-0 mb-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u>
                </h2>
            </div> -->
            <div class="col-md-12 small card alert-info p-0 mb-3 shadow shadow-sm card-shadow-info border border-white bg-night-sky">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0 border border-white">
                    <u class="text-capitalize small font-weight-bold" style="color: white"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        public function main_content(int $account_id = 0, $account_status, $tf, $ccApi)
        { ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Details of Visitor."); ?>
                    <div class="col-lg-4 col-md-6">
                        <?php
                            $tittle_placeholder = "Enter Full Name";
                            $id_name = "visitor_full_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_name"])) ? $this->data["pdov_name"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Enter Phone Number";
                            $id_name = "visitor_phone_number";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_contact"])) ? $this->data["pdov_contact"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-call icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"phone" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Enter E-mail Address";
                            $id_name = "visitor_email_address";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_email"])) ? $this->data["pdov_email"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"email" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Gender";
                            $id_name = "gender";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_gender"])) ? $this->data["pdov_gender"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $mSelected = ((int)$input_value === 1)? 'selected': '';
                            $fSelected = ((int)$input_value === 2)? 'selected': '';

                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                <option value="1" '.$mSelected.'>Male</option>
                                <option value="2" '.$fSelected.'>Female</option>
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
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Visitors’ Address/place of Location";
                            $id_name = "visitor_location_address";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_location"])) ? $this->data["pdov_location"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Status";
                            $id_name = "visit_status";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_status_of_visit"])) ? $this->data["pdov_status_of_visit"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $get_string = "office/visitors/visit_statuses_client?client-id=".AccountInfoId;
                            $visitStatusList = $ccApi->fetch_from($get_string=$get_string, function($statuses) use($input_value) {
                                $at = '';
                                if (is_array($statuses)) {
                                    foreach ($statuses as $key => $status) {
                                        $selected = ((int)$input_value === (int)$status['pdd_id']) ? "selected": "";
                                        $at .= '<option value="'.$status['pdd_id'].'" '.$selected.'>'.$status['pdd_info'].'</option>';
                                    }
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$visitStatusList.'
                                <option>Others</option>
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6" select-show="<?= $id_name; ?>">
                        <?php 
                            $tittle_placeholder = "Other Status of Visit";
                            $id_name = "visit_status_other";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = 'value=""';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Visitor Description";
                            $id_name = "visitor_description";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_visitor_description"])) ? $this->data["pdov_visitor_description"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $get_string = "office/visitors/visitor_descriptions_client?client-id=".AccountInfoId;
                            $visitStatusList = $ccApi->fetch_from($get_string=$get_string, function($statuses) use($input_value) {
                                $at = '';
                                if (is_array($statuses)) {
                                    foreach ($statuses as $key => $status) {
                                        $selected = ((int)$input_value === (int)$status['pdd_id']) ? "selected": "";
                                        $at .= '<option value="'.$status['pdd_id'].'" '.$selected.'>'.$status['pdd_info'].'</option>';
                                    }
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$visitStatusList.'
                                <option>Others</option>
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6" select-show="<?= $id_name; ?>">
                        <?php 
                            $tittle_placeholder = "Other Visitor Description";
                            $id_name = "visitor_description_other";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = 'value=""';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Any specific reasons for the visit?";
                            $id_name = "reason_for_visit";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_reason_for_visit"])) ? $this->data["pdov_reason_for_visit"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="3"';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Entered By";
                            $id_name = "entered_by";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_entered_by"])) ? $this->data["pdov_entered_by"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Date";
                            $id_name = "visit_date";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_visit_date"])) ? $this->data["pdov_visit_date"] : date("Y-m-d");
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"datepicker-here" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Is the visitor here to see any particular person/officer?";
                            $id_name = "to_see_officer";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_to_see_officer"])) ? $this->data["pdov_to_see_officer"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $ySelected = ((int)$input_value === 1)? 'selected': '';
                            $nSelected = ((int)$input_value === 2)? 'selected': '';

                            $input_value = '
                                <option value=""> - Select - </option>
                                <option value="1" '.$ySelected.'>Yes</option>
                                <option value="2" '.$nSelected.'>No</option>
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
                        $forceShowto_see_officer = isset($this->data['pdov_to_see_officer']) ? $this->data['pdov_to_see_officer']: "";
                        $forceShowto_see_officer = ((int)$forceShowto_see_officer === 1) ? "force-show" : "";
                    ?>
                    <div class="col-lg-12 col-md-12" <?= $forceShowto_see_officer; ?> select-show="<?= $id_name; ?>" select-show-alt--4="<?= $id_name; ?>">
                        <div class="row justify-content-center">
                            <?= $this->header("Details of officer being visited."); ?>
                            <div class="col-lg-6 col-md-6">
                                <?php
                                    $tittle_placeholder = "Name of Officer";
                                    $id_name = "officer_name";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $input_value = (isset($this->data["pdov_host"])) ? $this->data["pdov_host"] : "";
                                    $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                                    $input_value = 'value="'.$input_value.'"';
                                    $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                                    echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                        [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"type", "value"=>"text" ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                    ]);
                                ?>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <?php 
                                    $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Department": "Select Group";
                                    $id_name = "visitor_group_id";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $input_value = (isset($this->data["pdov_host_group"])) ? $this->data["pdov_host_group"] : "";
                                    $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                                    $groupList = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($input_value) {
                                        $at = '';
                                        foreach ($groups as $key => $group) {
                                            $selected = ((int)$input_value === (int)$group['pdmg_id']) ? "selected": "";
                                            $at .= '<option value="'.$group['pdmg_id'].'" '.$selected.'>'.$group['pdmg_group'].'</option>';
                                        }
                                        return @$at;
                                    });
                                    $input_value = '
                                        <option value="">'.$tittle_placeholder.'</option>
                                        '.$groupList.'
                                    ';
                                    $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                                    echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                        [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                        [ "name"=>"options", "value"=>$input_value ],
                                    ]);
                                ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Visitor’s Action";
                            $id_name = "visitor_action";
                            $visitor_action = "$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdov_visitor_action"])) ? $this->data["pdov_visitor_action"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            // print_r(['$visitor_action' => $input_value]);

                            $get_string = "office/visitors/visitor_actions";
                            $visitorActionList = $ccApi->fetch_from($get_string=$get_string, function($statuses) use($input_value) {
                                $at = '';
                                if (is_array($statuses)) {
                                    foreach ($statuses as $key => $status) {
                                        $selected = ((int)$input_value === (int)$status['pdd_id']) ? "selected": "";
                                        $at .= '<option value="'.$status['pdd_id'].'" '.$selected.'>'.$status['pdd_info'].'</option>';
                                    }
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$visitorActionList.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <?php 
                        $forceShowAppointmentForm = isset($this->data['pdov_visitor_action']) ? $this->data['pdov_visitor_action']: "";
                        $forceShowAppointmentForm = ((int)$forceShowAppointmentForm === 3) ? "force-show" : "";
                    ?>
                    <div class="col-lg-8 col-md-8" <?= $forceShowAppointmentForm; ?> select-show="<?= $visitor_action; ?>" select-show-alt--3="<?= $visitor_action; ?>">
                        <?php 
                            $tittle_placeholder = "Enter visitor’s note? -> 200 words.";
                            $id_name = "visitor_note";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                           $input_value = (isset($this->data["pdov_note"])) ? $this->data["pdov_note"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.' -> 200 words." rows="3" maxlength="250"';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Did the visitor drop any letter/Document?";
                            $id_name = "hasFileToAttach";
                            $hasFileToAttach = $id_name;
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : "2";

                            $ySelected = ((int)$input_value === 1)? 'selected': '';
                            $nSelected = ((int)$input_value === 0)? 'selected': '';

                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                <option value="1" '.$ySelected.'>Yes</option>
                                <option value="0" '.$nSelected.'>No</option>
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
                        $forceShowAppointmentForm = isset($this->data['pdov_visitor_action']) ? $this->data['pdov_visitor_action']: "";
                        $forceShowAppointmentForm = ((int)$forceShowAppointmentForm === 4) ? "force-show" : "";
                    ?>
                    <div class="col-md-12 card shadow shadow-lg py-3 mt-3 mb-5 border border-warning" <?= $forceShowAppointmentForm; ?> select-show="<?= $visitor_action; ?>" select-show-alt--4="<?= $visitor_action; ?>">
                        <div class="row justify-content-center">
                            <?= $this->header("APPOINTMENT FORM."); ?>
                        </div>
                        <?= $this->appointmentForm->main_content(AccountInfoId, $account_status, $tf, $ccApi); ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <select name="mAttachment[]" class="no-select2 d-none" multiple="true"></select>
                    </div>
                    <div class="col-lg-4 col-md-6" select-show="<?= $hasFileToAttach; ?>"></div>
                    <div class="col-md-12" select-show="<?= $hasFileToAttach; ?>">
                        <?= $this->header("Attach File."); ?>
                        <?= $this->attachments(AccountInfoId, $tf); ?>
                    </div>
                </div>
            </div>
        <?php }
    }
?>
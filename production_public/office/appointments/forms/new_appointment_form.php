<?php
    namespace AppointmentForm;
    class AppointmentForm
    {
        public $data = [];
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
            <div class="col-md-12 small card alert-warning p-0 mb-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        private function sms_notification(int $account_id = 0, $account_status, $tf, $ccApi)
        { ?>
            <div class="container px-0 px-md-5">
                <div class="row justify-content-center px-0 px-md-5">
                    <?= $this->header("SMS Notification."); ?>
                    <div class="col-lg-6 col-md-6">
                        <?php
                        
                            $account_sms_id = $ccApi->account_sms_id($all="id", $id=$account_id, function ($account_sms_ids) {
                                return @$account_sms_ids[0];
                            });
                        ?>
                        <?php
                            $tittle_placeholder = "Enter Your SMS ID";
                            $id_name = "account_sms_id";
                        ?>
                        <?php
                            $input_value = (isset($account_sms_id['pdcc_sms_id'])) ? $account_sms_id['pdcc_sms_id'] : "";
                            $input_value = (isset($_POST['account_sms_id'])) ? $_POST['account_sms_id'] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-tools icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $tittle_placeholder = "Subject";
                            $id_name = "subject";
                        ?>
                        <?php
                            $input_value = (isset($_POST['subject'])) ? $_POST['subject'] : null;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" ';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-heading fa-1x icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div><?php /*
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $tittle_placeholder = "Recipient SMS Alert [100 characters]:";
                            $id_name = "mIntro";
                        ?>
                        <?php
                            $input_value = (isset($_POST['mIntro'])) ? $_POST['mIntro'] : null;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" maxlength="90" ';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-info fa-1x icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div> */ ?>
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $tittle_placeholder = "Message";
                            $id_name = "message";
                        ?>
                        <?php
                            $input_value = (isset($_POST['message'])) ? $_POST['message'] : "";

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6"';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="main_class">
                            <div class="form-group">
                                <div class="input-group mb-4">
                                    <div class="btn-actions-pane-right px-1">
                                        <span class="card p-2 fa pull-right">Available Credit: <?= $account_status['credit_balance'][0]['pdccmc_units']; ?> Units</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php }

        public function main_content(int $account_id = 0, $account_status, $tf, $ccApi)
        { 
            // Array ( [pdoa_attachments] =>)

            ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Details of person arranging the meeting."); ?>
                    <div class="col-lg-4 col-md-6">
                        <?php
                            $tittle_placeholder = "Enter Full Name";
                            $id_name = "full_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_name"])) ? $this->data["pdoa_name"] : "";
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
                            $id_name = "phone_number";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_contact"])) ? $this->data["pdoa_contact"] : "";
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
                            $id_name = "email_address";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_email"])) ? $this->data["pdoa_email"] : "";
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
                            $tittle_placeholder = "Enter Address";
                            $id_name = "location_address";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_address"])) ? $this->data["pdoa_address"] : "";
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
                            $tittle_placeholder = "Enter Name of Organization";
                            $id_name = "name_of_organization";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_name_of_organiztion"])) ? $this->data["pdoa_name_of_organiztion"] : "";
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
                    <div class="col-lg-4 col-md-6"></div>
                    <?= $this->header("Details of officer hosting the meeting."); ?>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Department": "Select Group";
                            $id_name = "group_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_host_group"])) ? $this->data["pdoa_host_group"] : "";
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
                            $rowsperpage = 10000;
                            // $get_url = API_BASE_URL."/membership-filter/groups?currentpage=1&rowsperpage=$rowsperpage&client_id=" . AccountInfoId . "&group_id=";
                            $get_url = CLIENT_BASE_URL."/assets/php/custom/fetch_reply.php?fetch=client-members-list-by-group&currentpage=1&rowsperpage=$rowsperpage&client_id=" . AccountInfoId . "&group_id=";
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" form_change_to_show="members" url="'.$get_url.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Host/ Official": "Select Host/ User";
                            $id_name = "members";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span class="text-warning">[Optional]</span></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_host"])) ? $this->data["pdoa_host"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $members = explode(",", trim($input_value, ","));
                            $_members = '';
                            foreach ($members as $key => $member_id) {
                                if (!empty($member_id)) {
                                    $_members .= $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
                                        return '<option value="'.$members['pdm_id'].'" selected>'.$members['pdm_firstname'].' '.$members['pdm_surname'].'</option>';
                                    }, $debug = false); 
                                }
                            }
                                
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$_members.'
                            ';
                            $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" form_got_from="group_id" input_title="All"
                                id_getter="pdm_id" name_getter="pdm_firstname" name_getter_1="pdm_surname" multiple';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = ((int)AccountInfoType === 10) ? "Enter Other Host/ Official Contact": "Enter Other Host/ User Contact";
                            $id_name = "other_members";
                        ?>
                        <h6><?= $tittle_placeholder; ?> - Seperated by linebreak/ commas <span class="text-warning">[Optional]</span></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_host_others"])) ? $this->data["pdoa_host_others"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            $input_value = str_replace(",", "\n", rtrim($input_value, ","));

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.' - Seperated by linebreak/ commas:" rows="3"';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Appointment Date";
                            $id_name = "appointment_date";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_date"])) ? $this->data["pdoa_date"] : "";
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
                            $tittle_placeholder = "Select Appointment Start Time";
                            $id_name = "appointment_start_time";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_start_time"])) ? date("H:i", strtotime($this->data["pdoa_start_time"])) : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-clock icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"time" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Appointment End Time";
                            $id_name = "appointment_end_time";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_end_time"])) ? date("H:i", strtotime($this->data["pdoa_end_time"])) : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-clock icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"time" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Appointment Status";
                            $id_name = "appointment_status";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_appointment_status"])) ? $this->data["pdoa_appointment_status"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $get_string = "office/appointments/appointment_statuses";
                            $appointmentStatusList = $ccApi->fetch_from($get_string=$get_string, function($statuses) use($input_value) {
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
                                '.$appointmentStatusList.'
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
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Enter Meeting Agenda";
                            $id_name = "meeting_agender";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdoa_meeting_agenda"])) ? $this->data["pdoa_meeting_agenda"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-info icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Send SMS notification?";
                            $id_name = "sms_notification";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <div class="main_class">
                            <div class="form-group">
                                <div class="input-group mb-4">
                                    <div class="custom-checkbox custom-control pl-5 w-100"
                                        style="padding: .375rem .75rem; font-size: 1rem; font-weight: 400;
                                        line-height: 1.5; color: #495057; background-color: #fff;
                                        background-clip: padding-box; border: 1px solid #ced4da; border-radius: .25rem;
                                        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;">
                                        <input class="custom-control-input" name="<?= $id_name; ?>" id="<?= $id_name; ?>" checkifchecked="<?= $id_name; ?>" type="checkbox">
                                        <label class="custom-control-label w-100" for="<?= $id_name; ?>">
                                            Do You want To Send SMS Notifications?
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <?= $this->header("Attach File."); ?>
                    <?= $this->attachments(AccountInfoId, $tf); ?>
                    <div class="col-md-12" select-show="<?= $id_name; ?>">
                        <?= $this->sms_notification($account_id, $account_status, $tf, $ccApi); ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <select name="mAttachment[]" class="no-select2 d-none" multiple="true"></select>
                    </div>
                </div>
            </div>
        <?php }
    }
    
?>
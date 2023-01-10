<?php
    namespace ReminderForm;
    
    use AudioRecorder\AudioRecorder;
    $ALLOW_AUDIO_RECORDING = true;

    class ReminderForm
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

        private function repeat_reminder($tf)
        { ?>
            <div class="container px-0 px-md-5">
                <div class="row justify-content-center px-0 px-md-5">
                    <?= $this->header("Repeat Reminder."); ?>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Repeat Date 1";
                            $id_name = "reminder_date_1";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_repeat_date_1"])) ? $this->data["pdor_repeat_date_1"] : "";
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
                            $tittle_placeholder = "Select Repeat Time 1";
                            $id_name = "reminder_time_1";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_repeat_time_1"])) ? date("H:i", strtotime($this->data["pdor_repeat_time_1"])) : "";
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
                    </div><div class="col-lg-12 col-md-12"></div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Repeat Date 2";
                            $id_name = "reminder_date_2";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_repeat_date_2"])) ? $this->data["pdor_repeat_date_2"] : "";
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
                            $tittle_placeholder = "Select Repeat Time 2";
                            $id_name = "reminder_time_2";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_repeat_time_2"])) ? date("H:i", strtotime($this->data["pdor_repeat_time_2"])) : "";
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
                    </div><div class="col-lg-12 col-md-12"></div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Repeat Date 3";
                            $id_name = "reminder_date_3";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_repeat_date_3"])) ? $this->data["pdor_repeat_date_3"] : "";
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
                            $tittle_placeholder = "Select Repeat Time 3";
                            $id_name = "reminder_time_3";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_repeat_time_3"])) ? date("H:i", strtotime($this->data["pdor_repeat_time_3"])) : "";
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
                    </div><div class="col-lg-12 col-md-12"></div>
                </div>
            </div>
        <?php }
        
        private function reminder_forms(int $account_id = 0, $reminder_medium_form, $account_status, $tf, $ccApi)
        { 
            $reminder_id = isset($this->data["pdor_id"])? (int)$this->data["pdor_id"]: 0;
            $get_string = "office/reminders/message?reminder_id=".(int)$reminder_id."&client_id=".AccountInfoId;
            $reminderMsg = $ccApi->fetch_from($get_string=$get_string, function($messages) {
                return isset($messages[0]) ? $messages[0]: [];
            }, $debug = false);
            // print_r($reminderMsg);
            $forceShowMsgMediumForm = (isset($reminderMsg["pdors_medium_id"])) ? $reminderMsg["pdors_medium_id"] : 0;
            $forceShowMsgMediumFormEmail = ((int)$forceShowMsgMediumForm === 1) ? "force-show" : "";
            $forceShowMsgMediumFormSMS = ((int)$forceShowMsgMediumForm === 2) ? "force-show" : "";
            $forceShowMsgMediumFormVoice = ((int)$forceShowMsgMediumForm === 3) ? "force-show" : "";
            ?>
            <div class="container px-0 px-md-5">
                <div class="row justify-content-center px-0 px-md-5">
                    <?= $this->header("Reminder Notification."); ?>
                    <div class="col-lg-12 col-md-12" <?= $forceShowMsgMediumFormEmail; ?> select-show="<?= $reminder_medium_form; ?>" select-show-alt--email="<?= $reminder_medium_form; ?>">
                        <?= $this->header("Attach File."); ?>
                        <?= $this->attachments(AccountInfoId, $tf); ?>
                    </div>
                    <div class="col-lg-6 col-md-6" <?= $forceShowMsgMediumFormEmail; ?> <?= $forceShowMsgMediumFormSMS; ?> select-show="<?= $reminder_medium_form; ?>" 
                        select-show-alt--sms="<?= $reminder_medium_form; ?>" select-show-alt--email="<?= $reminder_medium_form; ?>">
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
                            $input_value = (isset($reminderMsg['pdors_sms_id'])) ? $reminderMsg['pdors_sms_id'] : $input_value;
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
                            $input_value = (isset($reminderMsg['pdors_subject'])) ? $reminderMsg['pdors_subject'] : "";
                            $input_value = (isset($_POST['subject'])) ? $_POST['subject'] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" ';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-heading fa-1x icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12" <?= $forceShowMsgMediumFormEmail; ?> select-show="<?= $reminder_medium_form; ?>" select-show-alt--email="<?= $reminder_medium_form; ?>">
                        <?php
                            $tittle_placeholder = "Recipient SMS Alert [100 characters]:";
                            $id_name = "mIntro";
                        ?>
                        <?php
                            $input_value = (isset($reminderMsg['pdors_sms_intro'])) ? $reminderMsg['pdors_sms_intro'] : null;
                            $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" maxlength="100" ';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"fa fa-info fa-1x icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12 my-2" <?= $forceShowMsgMediumFormVoice; ?> select-show="<?= $reminder_medium_form; ?>" select-show-alt--voice="<?= $reminder_medium_form; ?>">
                        <?php
                            $tittle_placeholder = "Record Voice Message";
                            $id_name = "voice_audio";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        
                        <div id="recorder_1">
                            <?php
                                $aR = new AudioRecorder();
                                echo $aR->show();
                            ?>
                        </div>
                    </div>
                    <div class="container text-center px-0" <?= $forceShowMsgMediumFormVoice; ?> select-show="<?= $reminder_medium_form; ?>" select-show-alt--voice="<?= $reminder_medium_form; ?>">
                        <hr class="my-1">
                        <h6 class="font-weight-bold m-0">OR</h6>
                        <hr class="my-1">
                    </div>
                    <div class="col-lg-12 col-md-12 card shadow shadow-lg my-2" <?= $forceShowMsgMediumFormVoice; ?> select-show="<?= $reminder_medium_form; ?>" select-show-alt--voice="<?= $reminder_medium_form; ?>">
                        <?php
                            $tittle_placeholder = "Select Voice Message";
                            $id_name = "voice_audio_file";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = 'value=""';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" accept=".mp3" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-volume font-weight-bold fa-1x icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"file" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                        <ul class="d-block text-warning">
                            <li class="nav-item">You can only send .mp3</li>
                            <li class="nav-item">File size should be less than 20mb</li>
                            <li class="nav-item">Audio Duration: 1:15 sec maximum</li>
                            <li class="nav-item">File size should be less than 20mb</li>
                            <li class="nav-item">Maximum Contacts: 1000 per a blast</li>
                        </ul>
                    </div>
                    <div class="col-lg-12 col-md-12" <?= $forceShowMsgMediumFormSMS; ?> select-show="<?= $reminder_medium_form; ?>" select-show-alt--sms="<?= $reminder_medium_form; ?>">
                        <?php
                            $tittle_placeholder = "Message";
                            $id_name = "sms_message";
                        ?>
                        <?php
                            $input_value = (isset($reminderMsg['pdors_messages'])) ? $reminderMsg['pdors_messages'] : "";
                            $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;
                            $input_value = str_replace("'", "&#39;", ($input_value));

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6"';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12" <?= $forceShowMsgMediumFormEmail; ?> select-show="<?= $reminder_medium_form; ?>" select-show-alt--email="<?= $reminder_medium_form; ?>">
                        <?php
                            $tittle_placeholder = "Message";
                            $id_name = "email_message";
                        ?>
                        <?php
                            $input_value = (isset($reminderMsg['pdors_messages'])) ? $reminderMsg['pdors_messages'] : "";
                            $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;
                            $input_value = str_replace("'", "&#39;", multilineText($input_value));

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6" awesome_text_box';
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
        { //print_r($this->data); ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Details of Reminder."); ?>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Reminder Date";
                            $id_name = "reminder_date";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_date"])) ? $this->data["pdor_date"] : "";
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
                            $tittle_placeholder = "Select Reminder Time";
                            $id_name = "reminder_time";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_time"])) ? date("H:i", strtotime($this->data["pdor_time"])) : "";
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
                            $tittle_placeholder = "Repeat Reminder?";
                            $id_name = "repeat_reminder";
                            $repeat_reminder = "$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_repeat"])) ? $this->data["pdor_repeat"] : 0;
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            $input_value = ((int)$input_value === 0) ? "": "checked=true";
                        ?>
                        <div class="main_class">
                            <div class="form-group">
                                <div class="input-group mb-4">
                                    <div class="custom-checkbox custom-control pl-5 w-100"
                                        style="padding: .375rem .75rem; font-size: 1rem; font-weight: 400;
                                        line-height: 1.5; color: #495057; background-color: #fff;
                                        background-clip: padding-box; border: 1px solid #ced4da; border-radius: .25rem;
                                        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;">
                                        <input class="custom-control-input" name="<?= $id_name; ?>" <?= $input_value; ?> id="<?= $id_name; ?>" checkifchecked="<?= $id_name; ?>" type="checkbox">
                                        <label class="custom-control-label w-100" for="<?= $id_name; ?>">
                                            Do You want To Repeat Reminder?
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <?php 
                        $forceShowReminderRepeatForm = (isset($this->data["pdor_repeat"])) ? $this->data["pdor_repeat"] : 0;
                        $forceShowReminderRepeatForm = ((int)$forceShowReminderRepeatForm === 1) ? "force-show" : "";
                    ?>
                    <div class="col-md-12" <?= $forceShowReminderRepeatForm; ?> select-show="<?= $id_name; ?>">
                        <?= $this->repeat_reminder($tf); ?>
                    </div>
                    <?= $this->header("Details of department/ officers to be Reminded."); ?>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Department": "Select Group";
                            $id_name = "group_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_group"])) ? $this->data["pdor_group"] : "";
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
                            $get_url = API_BASE_URL."/membership-filter/groups?currentpage=1&rowsperpage=$rowsperpage&client_id=" . AccountInfoId . "&group_id=";
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
                        <h6><?= $tittle_placeholder; ?> <span class="text-warning"></span></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_members"])) ? $this->data["pdor_members"] : "";
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
                            $tittle_placeholder = ((int)AccountInfoType === 10) ? "Enter Other Host/ Official": "Enter Other Host/ User";
                            $id_name = "other_members";
                        ?>
                        <h6><?= $tittle_placeholder; ?> - Seperated by linebreak/ commas <span class="text-warning">[Optional]</span></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_other_contacts"])) ? $this->data["pdor_other_contacts"] : "";
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
                            $tittle_placeholder = "Reminder Medium";
                            $id_name = "reminder_medium";
                            $reminder_medium_form = "reminder_medium";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdor_medium"])) ? $this->data["pdor_medium"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $get_string = "office/reminders/reminder_mediums";
                            $reminderMediumList = $ccApi->fetch_from($get_string=$get_string, function($mediums) use($input_value) {
                                $at = '';
                                if (is_array($mediums)) {
                                    foreach ($mediums as $key => $medium) {
                                        $selected = ((int)$input_value === (int)$medium['pdorm_id']) ? "selected": "";
                                        $at .= '<option value="'.$medium['pdorm_id'].'" '.$selected.'>'.$medium['pdorm_medium'].'</option>';
                                    }
                                }
                                return @$at;
                            });
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$reminderMediumList.'
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
                        if (isset($this->data["pdor_medium"])) { ?>
                            <div class="col-lg-4 col-md-6">
                                <?php 
                                    $tittle_placeholder = "Send Notification Message?";
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
                                                    Do You want To Send Notification Message?
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>	
                            </div> <?php
                            $notificationFormShower = "select-show=\"$id_name\""; 
                        } else {
                            $notificationFormShower = "";
                        }
                    ?>
                    <div class="col-md-12" <?= $notificationFormShower; ?> >
                        <?= $this->reminder_forms($account_id, $reminder_medium_form, $account_status, $tf, $ccApi); ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <select name="mAttachment[]" class="no-select2 d-none" multiple="true"></select>
                    </div>
                </div>
            </div>
        <?php }
    }
?>
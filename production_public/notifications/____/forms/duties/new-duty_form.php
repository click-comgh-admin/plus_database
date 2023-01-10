<?php
    namespace SetupDuty;

    function delete_btn($name, $source_id, $attachment_id, $account_id, $user_id, $class) { ?>
        <button class="<?= $class; ?>"
            btn-submit-post=<?= json_encode(["attachment_id"=>$attachment_id,
                "client_id"=>$account_id, "source_id"=>$source_id,
                "admin_user_id"=>$user_id]); ?>
            btn-submit-post--confirm="Delete Attachment?"
            btn-submit-post--url="<?= API_BASE_URL."duty-tracker/clients/duties/delete-attachment"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="mx-1">Delete <?= $name; ?> </span>
        </button>
    <?php }

    class SetupDuty
    {
        public $data = [];
        public function __construct() {}
        public $MailAttachment;

        public function attachments(int $account_id = 0, $tf)
        { ?>
            <div upload_attachment="multiple" class="container" method="POST" action="<?= API_BASE_URL."duty-tracker-uploads/"; ?>">
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
            <div class="col-md-12 small card alert-info p-0 mb-3 shadow shadow-sm card-shadow-info border border-white bg-night-sky">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0 border border-white">
                    <u class="text-capitalize small font-weight-bold" style="color: white"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        public function main_content($tf, $ccApi)
        { ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Create New Duty."); ?>
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Create New Duty";
                            $id_name = "duty";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            // print_r($this->data);
                            $input_value = (isset($this->data['duty']["pdt_duty"])) ? $this->data['duty']["pdt_duty"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'"
                                placeholder="'.$tittle_placeholder.'" maxlength="18"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-portfolio icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Overtime";
                            $id_name = "overtime";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["duty"]["pdt_overtime"]))
                                ? (int)$this->data["duty"]["pdt_overtime"] : 0;
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            
                            $get_string = "duty-tracker/overtime/overtime-list?client_id=".AccountInfoId;
                            $overtimeList = $ccApi->fetch_from($get_string=$get_string, function($overtime) {
                                return isset($overtime[0])? $overtime: [];
                            }, $debug = false);
                            $_ovt = '';
                            foreach ($overtimeList as $key => $ovti) {
                                if (isset($ovti['pdt_id'])) {
                                    $ovti_selected = @(strtolower($input_value) == strtolower($ovti['pdt_id'])) ? "selected": "";
                                    $_ovt .= "<option value='".$ovti['pdt_id']."' ".$ovti_selected.">".getHoursFromMins($ovti['pdt_max_minutes'])."</option>";
                                }
                            }
                            $input_value = '
                                <option value="0">No Overtime</option>
                                '.@$_ovt.'
                            ';
                            $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-clock icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12"></div>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "Start Date";
                            $id_name = "start_date";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data['duty']["pdt_start_date"]))
                                ? $this->data['duty']["pdt_start_date"] : date("Y-m-d");
                            $input_value = 'value="'.date("m/d/Y", strtotime($input_value)).'"';
                        
                            $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'"
                                placeholder="'.@$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"datepicker-here " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "End Date";
                            $id_name = "end_date";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data['duty']["pdt_end_date"]))
                                ? $this->data['duty']["pdt_end_date"] : date("Y-m-d");
                            $input_value = 'value="'.date("m/d/Y", strtotime($input_value)).'"';
                        
                            $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'"
                                placeholder="'.@$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"datepicker-here " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12"></div>
                    <div class="col-lg-8 col-md-8">
                        <?php 
                            $tittle_placeholder = "Duty Details";
                            $id_name = "duty_details";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data['duty']["pdt_duty_details"])) 
                                ? multilineText($this->data['duty']["pdt_duty_details"]) : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="3" awesome_text_box';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <?= $this->header("Attach File."); ?>
                        <?= $this->attachments(AccountInfoId, $tf); ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $input_value = (isset($this->data['duty']["pdt_attachment"]))
                                ? $this->data['duty']["pdt_attachment"] : "";
                        ?>
                        <select name="mAttachment[]" class="no-select2 d-none" multiple="true">
                            <?php
                                $list = explode(",", $input_value);
                                foreach ($list as $key => $item) { ?>
                                    <option selected="true" value="<?= (int)trim($item); ?>">
                                        <?= (int)trim($item); ?>
                                    </option>
                                <?php }
                            ?>
                        </select>
                    </div>
                    <?php
                        if (isset($this->data["attachments"])) { 
                            $attachments = json_encode($this->data['attachments']);
                            $attachments = str_replace("pdt_", "pdccmc_", $attachments);
                            $attachments = json_decode($attachments, 1);
                            if (!empty($attachments)) { ?>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-12 col-md-12">
    
                                            <?= $this->header("Attached File."); ?>
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <?php
                                                        $this->MailAttachment->files($attachments, 10000, ["col"=>"col-md-3", "width"=>"50%"], true, false);
                                                    ?>
                                                </div>
                                            </div><hr/>
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <?php
                                                        foreach ($attachments as $key => $attachment) {
                                                            $source_id = (isset($this->data['duty']["pdt_id"]))
                                                                ? $this->data['duty']["pdt_id"] : 0;
                                                            $attachment_id = (int)$attachment['pdccmc_id']; ?>
                                                            <div class="col-md-3 w-50 my-1">
                                                                <?= delete_btn(
                                                                    "Attachment ".((int)$key + 1), $source_id,
                                                                    $attachment_id, AccountInfoId, AccountInfoUserId,
                                                                    "ml-2 p-1 btn btn-sm btn-danger shadow w-100"
                                                                ); ?>
                                                            </div>
                                                        <?php }
                                                    ?>
                                                </div>
                                            </div>
    
                                        </div>
                                    </div> 
                                </div>
                            <?php }
                        }
                    ?>
                </div>
            </div>
        <?php }
    }
?>
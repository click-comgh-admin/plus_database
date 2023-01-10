<?php
    namespace MemberReport;

    function delete_btn($name, $source_id, $attachment_id, $account_id, $user_id, $class) { ?>
        <button class="<?= $class; ?>"
            btn-submit-post=<?= json_encode(["attachment_id"=>$attachment_id,
                "client_id"=>$account_id, "source_id"=>$source_id,
                "admin_user_id"=>$user_id]); ?>
            btn-submit-post--confirm="Delete Attachment?"
            btn-submit-post--url="<?= API_BASE_URL."duty-tracker/clients/member/delete-attachment"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="mx-1">Delete <?= $name; ?> </span>
        </button>
    <?php }

    class MemberReport
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
                    <?= $this->header("My Report."); ?>
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Report Title";
                            $id_name = "report_title";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            // print_r($this->data);
                            $input_value = (isset($this->data["pdt_report_title"])) ? $this->data["pdt_report_title"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'"
                                placeholder="'.$tittle_placeholder.'"';
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
                            $tittle_placeholder = "Work Done (0% - 100%)";
                            $id_name = "report_work_done";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            // print_r($this->data);
                            $input_value = (isset($this->data["pdt_work_done"])) ? $this->data["pdt_work_done"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'"
                                placeholder="'.$tittle_placeholder.'" step="1" max="100" maxlength="3"
                                min="0" minlength="0"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-portfolio icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"number" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Intended Completion Date";
                            $id_name = "intended_completion_date";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span class="text-info"> (Optional)</span></h6>
                        <?php
                            // print_r($this->data);
                            $input_value = (isset($this->data["pdt_intended_completion_date"])) 
                                ? date("Y-m-d", strtotime($this->data["pdt_intended_completion_date"])) : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'"
                                placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"date" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Intended Completion Hours";
                            $id_name = "intended_completion_hours";
                        ?>
                        <h6><?= $tittle_placeholder; ?> <span class="text-info"> (Optional)</span></h6>
                        <?php
                            // print_r($this->data);
                            $input_value = (isset($this->data["pdt_intended_completion_hours"])) 
                                ? $this->data["pdt_intended_completion_hours"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'"
                                placeholder="'.$tittle_placeholder.'" step="1" min="0" ';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-clock icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"number" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12"></div>
                    <div class="col-lg-12 col-md-12">
                        <?php 
                            $tittle_placeholder = "Report Details";
                            $id_name = "report_details";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdt_report"])) 
                                ? multilineText($this->data["pdt_report"]) : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="3" awesome_text_box';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <?= $this->header("Attach File."); ?>
                        <?= $this->attachments(AccountInfoId, $tf); ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $input_value = (isset($this->data["pdt_attachment"]))
                                ? $this->data["pdt_attachment"] : "";
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
                        if (isset($this->data["pdt_report_attachment"])) { 
                            $attachments = json_encode($this->data['pdt_report_attachment']);
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
                                                            $source_id = (isset($this->data["pdt_id"]))
                                                                ? $this->data["pdt_id"] : 0;
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
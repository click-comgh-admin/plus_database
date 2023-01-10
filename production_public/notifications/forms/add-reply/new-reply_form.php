<?php
    namespace AddReply;

    class AddReply
    {
        public $data = [];
        public function __construct() {}
        public $MailAttachment;

        public function attachments(int $account_id = 0, $tf)
        { ?>
            <div upload_attachment="multiple" class="container" method="POST" action="<?= API_BASE_URL."notifications-uploads/"; ?>">
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
                    <?= $this->header("Create New Reply."); ?>
                    <div class="col-lg-8 col-md-8">
                        <?php 
                            $tittle_placeholder = "Reply Details";
                            $id_name = "reply_content";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data['reply']["pdt_reply_content"])) 
                                ? multilineText($this->data['reply']["pdt_reply_content"]) : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="5" ';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12"></div>
                    <div class="col-lg-8 col-md-8">
                        <?= $this->header("Attach File."); ?>
                        <?= $this->attachments(AccountInfoId, $tf); ?>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $input_value = (isset($this->data['reply']["pdt_attachment"]))
                                ? $this->data['reply']["pdt_attachment"] : "";
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
                </div>
            </div>
        <?php }
    }
?>
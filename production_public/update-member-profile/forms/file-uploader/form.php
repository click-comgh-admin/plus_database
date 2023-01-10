<?php
    namespace FormFileUploader;
    use MailAttachment;

    function delete_btn($name, $member_id, $attachment_id,
        $account_id, $question_id, $member_response_id, $class) { ?>
        <button class="<?= $class; ?>"
            btn-submit-post=<?= json_encode([
                "attachment_id"=>$attachment_id,
                "client_id"=>$account_id,
                "member_id"=>$member_id,
                "question_id"=>$question_id,
                "member_response_id"=>$member_response_id,
            ]); ?>
            btn-submit-post--confirm="Delete Attachment?"
            btn-submit-post--url="<?= API_BASE_URL."/system-questions/form/delete-attachment"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="mx-1">Delete <?= $name; ?> </span>
        </button>
    <?php }

    class FormFileUploader
    {
        private $question;
        private $memberResponse;
        private $memberId;
        private $attachments;
        private $memberResponseId;
        
        public $MailAttachment;

        public function __construct($memberId,
            $memberResponseId, $question, $memberResponse) {
            $this->memberId = $memberId;
            $this->memberResponseId = $memberResponseId;
            // $this->question = isset($question[0]) ? $question[0] : [];
            $this->question = $question;
            $this->memberResponse = isset($memberResponse[0]) ? $memberResponse : [];
            
            $attachments = [];
            foreach ($this->memberResponse as $key => $mR) {
                $attachment = [];
                $attachment['pdccmc_id'] = $mR['id'];
                $attachment['pdccmc_attachment'] = $mR['attachment'];
                
                if (!in_array($attachment, $attachments)) {
                    array_push($attachments, $attachment);
                }
            }
            $this->attachments = $attachments;
            
            $this->MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
        }

        public function attachments(int $account_id = 0, $tf)
        { ?>
            <div upload_attachment="multiple" class="container" method="POST" action="<?= API_BASE_URL."system-questions-uploads/"; ?>">
                <div class="col-md-12 card mb-3 shadow shadow-lg">
                    <label>Attach Media [<small class="text-warning">Select multiple attachments if neccessary</small>]: </label>
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-12">
                            <?php
                                $titlePlaceholder = "Add {$this->question['name']} File(s)";
                                $id_name = "attachments";
                            ?>
                            <h6><?= $titlePlaceholder; ?></h6>
                            <?php
                                // print_r($this->question);
                                $input_value = 'value=""';

                                if ((int)$this->question['type']["id"] === 11) {
                                    $input_attributes = ''.$input_value.' name="'.$id_name.'[]"
                                    accept="*" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'" multiple="true"';
                                } else {
                                    $input_attributes = ''.$input_value.' name="'.$id_name.'"
                                    accept="*" id="'.$id_name.'" placeholder="'.$titlePlaceholder.'" single="true"';
                                }
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
                    <input type="hidden" name="client_id" value="<?= $this->question['clientId']; ?>" />
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
        { 
            $this->header("Select File To Download"); 
            echo $this->attachments(AccountInfoId, $tf);
            $input_value = (isset($this->data['comment']["pdt_attachment"]))
                ? $this->data['comment']["pdt_attachment"] : ""; 
                
            if ((int)$this->question['type']["id"] === 11) { ?>
                <select name="mAttachment[]" class="no-select2 d-none" multiple="true">
                    <?php
                        $list = explode(",", $input_value);
                        foreach ($this->attachments as $key => $item) { ?>
                            <option selected="true" value="<?= (int)trim($item['pdccmc_id']); ?>">
                                <?= (int)trim($item['pdccmc_id']); ?>
                            </option>
                        <?php }
                    ?>
            </select>
            <?php } else { ?>
                <select name="mAttachment" class="no-select2 d-none">
                    <?php
                        $list = explode(",", $input_value);
                        foreach ($this->attachments as $key => $item) { ?>
                            <option selected="true" value="<?= (int)trim($item['pdccmc_id']); ?>">
                                <?= (int)trim($item['pdccmc_id']); ?>
                            </option>
                        <?php }
                    ?>
                </select>
            <?php }

            $id_name = str_replace(" ", "_", strtolower($this->question['name'])); ?>
            <input type="text" class="no-select2 d-none" name="<?= $id_name; ?>">
            
            <?php if (isset($this->memberResponse[0])) { 
                // print_r($attachments); 
                if (!empty($this->attachments)) { ?>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 col-md-12">

                                <?= $this->header("Attached File."); ?>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <?php
                                            $this->MailAttachment->files($this->attachments, 10000, ["col"=>"col-md-3", "width"=>"50%"], true, false);
                                        ?>
                                    </div>
                                </div><hr/>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <?php
                                            foreach ($this->attachments as $key => $attachment) {
                                                $attachment_id = (int)$attachment['pdccmc_id']; ?>
                                                <div class="col-md-3 w-50 my-1">
                                                    <?= delete_btn(
                                                        "Attachment ".((int)$key + 1), $this->memberId,
                                                        $attachment_id, AccountInfoId, $this->question['id'],
                                                        $this->memberResponseId,
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
        }
    }
?>
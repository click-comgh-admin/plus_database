<?php
    namespace SetupOvertime;

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

    class SetupOvertime
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
                    <?= $this->header("Create New Overtime."); ?>
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Create New Overtime";
                            $id_name = "overtime";
                        ?>
                        <h6>
                            <?= $tittle_placeholder; ?>
                            <span class="text-warning">In minutes</span>
                            <span class="text-info">(60 mins = 1 hour)</span>
                        </h6>
                        <?php
                            // print_r($this->data);
                            $input_value = (isset($this->data["pdt_max_minutes"])) ? $this->data["pdt_max_minutes"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'"
                                placeholder="'.$tittle_placeholder.'" min="1" ';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-clock icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"number" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "Enter Overtime Fee per minute";
                            $id_name = "fee";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdt_baseline_fee_per_minute"])) ? $this->data["pdt_baseline_fee_per_minute"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-cash fa-1x icon-gradient bg-grow-early text-success" ],
                                [ "name"=>"type", "value"=>"number" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Currency";
                            $id_name = "currency";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdt_currency"])) ? (int)$this->data["pdt_currency"] : 0;
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            
                            $get_string = "duty-tracker/overtime/currencies?account_id=".AccountInfoId;
                            $currency = $ccApi->fetch_from($get_string, function($currency)
                            {
                                return isset($currency[0])? $currency: [];
                            }, $debug = false);
                            $_curs = '';
                            foreach ($currency as $key => $cur) {
                                if (isset($cur['pdt_id'])) {
                                    $cur_selected = @(strtolower($input_value) == strtolower($cur['pdt_id'])) ? "selected": "";
                                    $_curs .= "<option value='".$cur['pdt_id']."' ".$cur_selected.">".$cur['pdt_currency']."</option>";
                                }
                            }
                            $input_value = '
                                <option value="">'.@$tittle_placeholder.'</option>
                                '.@$_curs.'
                            ';
                            $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-cash icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                </div>
            </div>
        <?php }
    }
?>
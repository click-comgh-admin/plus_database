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
                    <?= $this->header("Supervisor Remarks."); ?>
                    <div class="col-lg-12 col-md-12">
                        <?php 
                            $tittle_placeholder = "Supervisor Remarks";
                            $id_name = "supervisor_remarks";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdt_remarks"])) 
                                ? multilineText($this->data["pdt_remarks"]) : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;

                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="3" awesome_text_box';
                            echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>$input_value ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                </div>
            </div>
        <?php }
    }
?>
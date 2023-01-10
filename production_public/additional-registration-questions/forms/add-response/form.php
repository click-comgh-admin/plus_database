<?php
    namespace AddQuestionResponse;

    class AddQuestionResponse
    {
        public $data = [];

        public function __construct() {}

        public function main_content($tf, $ccApi)
        { 
            ?>
            <div class="col-lg-12 col-md-12">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Enter Response";
                            $id_name = "response";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data['name'])) ? multilineText($this->data['name']) : null;
                            $idSuffix = (isset($this->data['id'])) ? $this->data['id'] :0;
                            $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'_'.$idSuffix.'" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
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
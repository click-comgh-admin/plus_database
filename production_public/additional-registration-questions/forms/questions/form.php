<?php
    namespace QuestionsForm;

    class QuestionsForm
    {
        public $data = [];
        private $questionTypes = [];

        public function __construct(?array $questionTypes) {
            $this->questionTypes = $questionTypes;
        }

        public function main_content($tf, $ccApi)
        { 
            ?>
            <div class="col-lg-12 col-md-12">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-7">
                        <?php
                            $tittle_placeholder = "Enter Question";
                            $id_name = "question_name";
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
                    <div class="col-lg-5 col-md-5">
                        <?php
                            $tittle_placeholder = "Select Question Response Type";
                            $id_name = "question_type";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = @(isset($this->data['type']['id'])) ? $this->data['type']['id'] : 0;
                            $input_value = (isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;

                            $questionTypes = "";
                            foreach ($this->questionTypes as $key => $questionType) {
                                // print_r($questionType);
                                $selected = ((int)$input_value === (int)$questionType['id'])?"selected":"";
                                $questionTypes .= '<option value="'.$questionType['id'].'" '.$selected.'>
                                    '.$questionType['type'].'</option>';
                            }
                            $input_value = '
                            <option value="">Select Question Response Type</option>
                                '.$questionTypes.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'_'.$idSuffix.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit- super-selector-selectNew" ],
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
<?php
    namespace QuestionResponse;

    class QuestionResponse
    {
        public $data = [];
        private $questionId = 0;
        private $responses = [];

        public function __construct(?array $responses, ?int $questionId) {
            $this->questionId = $questionId;
            $this->responses = $responses;
        }

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-warning p-0 mb-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u> 
                    <a class="btn btn-outline-success btn-sm" target="_blank" type="button"
                        href="<?= Current_BaseUrl; ?>add-response?question-id=<?= $this->questionId; ?>&client-id=<?= AccountInfoId; ?>">Add Response</a>
                </h2>
            </div>
        <?php }

        public function main_content($tf, $ccApi)
        { 
            ?>
            <div class="col-lg-12 col-md-12">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-7">
                        <?php
                            $tittle_placeholder = "Eg. ".$this->data['name'];
                            $id_name = "_";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            // print_r($this->data);
                            $responses = "";
                            foreach ($this->responses as $key => $response) {
                                // print_r($response);
                                $responses .= '<option value="'.$response['id'].'">
                                    '.$response['response'].'</option>';
                            }
                            $input_value = '
                            <option value="">Select Response</option>
                                '.$responses.'
                            ';

                            $multiple = ((int)$this->data['type']['id'] === 5)? "multiple": "";
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" '.$multiple;
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                            $this->header("Responses!");
                        ?>
                    </div>
                </div>
            </div>
        <?php }
    }

    class QuestionResponseList
    {
        public $data = [];

        public function __construct() {}

        public function main_content($tf, $ccApi)
        { 
            ?>
            <div class="col-lg-12 col-md-12">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-7">
                        <?php
                            $tittle_placeholder = "Enter Response";
                            $id_name = "response";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data['response'])) ? multilineText($this->data['response']) : null;
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
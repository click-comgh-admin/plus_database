<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "form--edit") {
            define("POST_URL", API_BASE_URL."custom-form/clients/form/question/edit");
            require_once 'edit_form - processing.php';
        }
    }
?>
<form role="form" action="<?= customForms_BaseUrl . "questions/create-form?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="form--edit" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Question";
                        $id_name = "question";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($question['pdcqq_question'])) ? $question['pdcqq_question'] : null;
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Question Type";
                        $id_name = "question_type";
                        
                        $get_string = "question_types";

                        $input_value = (isset($question['pdcqq_type'])) ? $question['pdcqq_type'] : "";
                        $question_types = $ccApi->custom_form($get_string, function($question_types) use($id_name, $input_value) {
                            $at = '';
                            $selectedQt = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            if (!empty($question_types)) {
                                foreach ($question_types as $key => $question_type) {
                                    $thisSelected = ((int)$question_type['pdcqq_id'] == (int)$selectedQt) ? "selected" : "";
                                    $at .= '<option value="'.$question_type['pdcqq_id'].'" '.$thisSelected.'>'.$question_type['pdcqq_type'].'</option>';
                                }
                            }
                            return @$at;
                        }, $debug = 0);
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="all"> --Select '.$tittle_placeholder.'-- </option>
                            '.@$question_types.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Question Number";
                        $id_name = "question_number";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($question['pdcqq_question_number'])) ? $question['pdcqq_question_number'] : null;
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" max="20" min="1"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"type", "value"=>"number" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                    <input type="hidden" name="form_id" value="<?= $_GET['form']; ?>" />
                    <input type="hidden" name="question_id" value="<?= $_GET['edit']; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Question</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "due-record--pay") {
            define("POST_URL", API_BASE_URL."dues/clients/due-record/pay-bulk");
            require_once 'due_record_pay - processing.php';
        }
    }
?>

<form role="form" action="<?= dues_BaseUrl . "bulk-pay?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="due-record--pay" />
        <div class="col-md-10">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6">
                    <?php 
                        $tittle_placeholder = "Year";
                        $id_name = "due_year";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = @(isset($_POST[$id_name])) ? $_POST[$id_name] : null;

                        $input_value = @(is_null($input_value)) ? date("Y") : @date("Y", strtotime("1/1/$input_value"));
                        $years = range(((int)date("Y")-20), ((int)date("Y")+20));
                        $_years = '';

                        foreach ($years as $key => $year) {
                            $year_selected = @((int)$input_value == (int)$year) ? "selected": "";
                            $_years .= '<option value="'.@$year.'" '.@$year_selected.'>'.@$year.' => Year</option>';
                        }
                        
                        $input_value = '
                            <option value="">'.$tittle_placeholder.' => Year</option>
                            '.$_years.'
                        ';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php 
                        $tittle_placeholder = "Date";
                        $id_name = "due_date";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = @(isset($_POST[$id_name])) ? $_POST[$id_name] : null;

                        $input_value = @(is_null($input_value)) ? date("m/d/Y") : date("m/d/Y", strtotime(@$input_value));
                        $input_value = 'value="'.$input_value.'"';
                                
                        $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"datepicker-here " ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Enter Member ID(s)";
                        $id_name = "member_ids";
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : "";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6"';
                        echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                    <input type="hidden" name="due_id" value="<?= $_GET['dues']; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Make Payment</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

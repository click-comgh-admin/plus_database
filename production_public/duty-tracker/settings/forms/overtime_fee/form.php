<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "duty_tracker_fee_info") {
            define("POST_URL", API_BASE_URL."duty-tracker/clients/settings/overtime/fee");
            require_once 'form - processing.php';
        }
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="duty_tracker_fee_info" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Enter Overtime Fee per minute";
                        $id_name = "fee";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($fee[0]['pdt_baseline_fee_per_minute'])) ? $fee[0]['pdt_baseline_fee_per_minute']: $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-cash fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Enter Maximum overtime minutes";
                        $id_name = "max_minutes";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($fee[0]['pdt_max_minutes'])) ? $fee[0]['pdt_max_minutes']: $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" min="1"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-clock fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"type", "value"=>"number" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Select Currency";
                        $id_name = "currency";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($fee[0]['pdt_currency'])) ? $fee[0]['pdt_currency']: $input_value;
                        
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
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Set fee</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

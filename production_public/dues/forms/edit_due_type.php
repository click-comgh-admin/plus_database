<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "due-type--edit") {
            define("POST_URL", API_BASE_URL."dues/clients/due-type/edit");
            require_once 'edit_due_type - processing.php';
        }
    }
?>
<form role="form" action="<?= dues_BaseUrl . "due-types?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="due-type--edit" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Due Name";
                        $id_name = "due_name";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($type['pddt_type'])) ? $type['pddt_type'] : null;
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
                        $tittle_placeholder = "Due Amount";
                        $id_name = "due_amount";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($type['pddt_amount'])) ? $type['pddt_amount'] : null;
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
                        $tittle_placeholder = "Due Payment Interval";
                        $id_name = "payment_interval";
                        
                        $set_payment_interval = (isset($type['pddt_payment_intervals'])) ? $type['pddt_payment_intervals'] : null;
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                        $_payment_intervals = '';
                        foreach ($payment_intervals as $key => $payment_interval) {
                            if (isset($payment_interval['pddt_id'])) {
                                $payment_interval_selected = @(strtolower($set_payment_interval) == strtolower($payment_interval['pddt_id'])) ? "selected": "";
                                $_payment_intervals .= "<option value='".$payment_interval['pddt_id']."' ".$payment_interval_selected.">".$payment_interval['pddt_intervals']."</option>";
                            }
                        }
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            '.@$_payment_intervals.'
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
                        $tittle_placeholder = "Due Currency";
                        $id_name = "due_currency";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($type['pddt_currency'])) ? $type['pddt_currency'] : null;
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
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Due Info";
                        $id_name = "due_info";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($type['pddt_info'])) ? $type['pddt_info'] : "";
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="4"';
                        echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                    <input type="hidden" name="due_id" value="<?= $_GET['edit']; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Due Type</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

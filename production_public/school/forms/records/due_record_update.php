<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "due-record--pay") {
            define("POST_URL", API_BASE_URL."dues/clients/due-record/edit");
            require_once 'due_record_update - processing.php';
        }
    }
?>

<form role="form" action="<?= dues_BaseUrl . "records?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="due-record--pay" />
        <div class="col-md-10">
            <?php
                $_due_members = '';
                foreach ($all_members as $key => $member) {
                    if (isset($member['pdm_id'])) {
                        $member_selected = ($member['pdm_id'] == $input_value) ? "selected": "";
                        $_due_members .= "<option value='".$member['pdm_id']."' ".$member_selected.">".$member['pdm_firstname']." ".$member['pdm_surname']."</option>";
                    }
                }
            ?>
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Amount Paid";
                        $id_name = "amount_paid";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;

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
                        $tittle_placeholder = "Payment Method";
                        $id_name = "payment_method";

                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        
                        $get_string = "payment_methods";
                        $payment_methods = $ccApi->dues($get_string, function($payment_methods) use($input_value) {
                            $at = '';
                            foreach ($payment_methods as $key => $payment_method) {
                                $payment_method_selected = @((int)$input_value == $payment_method['pddt_id']) ? "selected": "";
                                $at .= '<option value="'.$payment_method['pddt_id'].'" '.$payment_method_selected.'>'.$payment_method['pddt_method'].'</option>';
                            }
                            return @$at;
                        });
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="" >'.@$tittle_placeholder.'</option>
                            '.$payment_methods.'
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
            </div>
        </div>
        <div class="col-md-10">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                    <input type="hidden" name="member_id" value="<?= $_GET['member']; ?>" />
                    <input type="hidden" name="due_id" value="<?= $_GET['dues']; ?>" />
                    <input type="hidden" name="record_id" value="<?= $_GET['record']; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Make Payment</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

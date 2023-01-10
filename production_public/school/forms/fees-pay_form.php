<form role="form" action="<?= API_BASE_URL."school/clients/student/fees/pay"; ?>" method="POST"
    make-general-posts="<?= $confirm_msg; ?><span class=d-none><?= $fee_id; ?><?= $member_id; ?></span>">
    <div class="row align-items-center justify-content-center">
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
        <div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-3 col-md-8">
            <input type="hidden" name="fee_id" value="<?= $fee_id; ?>" />
            <input type="hidden" name="member_id" value="<?= $member_id; ?>" />
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-6 col-md-8">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Pay</button>
        </div>
        <div class="col-lg-3 col-md-8"></div>
    </div>
</form>
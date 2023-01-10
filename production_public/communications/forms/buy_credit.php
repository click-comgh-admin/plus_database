<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."communications/clients/credit/buy");
        require_once 'buy_credit - processing.php';
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data" make-gen eral-posts="Update Contact?">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="buy_credit" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Select Amount";
                        $id_name = "credit_amount";
                    ?>
                    <?php
                        $set_unit = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;

                        $get_string = "credit/units?account_id=$account_id";
                        $units = $ccApi->communications($type="clients", $get_string, function($units)
                        {
                            return $units;
                        }, $debug = false);

                        $_units = '';
                        foreach ($units as $key => $unit) {
                            if (isset($unit['pdccmc_id'])) {
                                $unit_selected = @(strtolower($set_unit) == strtolower($unit['pdccmc_id'])) ? "selected": "";
                                $_units .= "<option value='".$unit['pdccmc_id']."' ".$unit_selected.">".$unit['pdccmc_amount']."</option>";
                            }
                        }
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            '.@$_units.'
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
                    <div class="card mb-3">
						<p class="font-weight-bold text-info my-0"> 
							<span class="ml-2" credit_in_units="credit_amount" per_unit="<?= $units['per_unit_cost']; ?>"></span> Units
						</p>
					</div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Buy Credit</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

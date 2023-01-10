<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "update_subscription") {
            define("POST_URL", API_BASE_URL."subscription/pay_contact_bank");
            require_once 'contact_bank_edit_add - processing.php';
        }
    }
?>
<form role="form" action="<?= currentPageUrl . "?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="update_subscription" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div>
                    <?php
                        $get_string = 'special_users';
                        $special_users = $ccApi->subscription($get_string, function($special_users) {
                            return @$special_users;
                        });

                        $is_special = false;
                        foreach ($special_users as $key => $special_user) {
                            if ((int)$special_user['pdd_client'] == (int)$account_id) {
                                $is_special = true;
                            }
                        }
                    ?>
                </div>
				<div class="col-lg-8">
					<?php 
						$tittle_placeholder = "Activation Fee";
                        $id_name = "client_subscription_fee";
                        
                        if ($is_special) {
                            $get_string = 'subscription/contact-bank-special?client_id='.AccountInfoId;
                            $activation_fees = $ccApi->fetch_from($get_string, function($activation_fees) {
                                return isset($activation_fees[0])? (float)$activation_fees[0]['pdd_fee'].".00": "00.00";
                            },false);
                        } else {
                            $get_string = 'subscription/contact-bank-fee?client_id='.AccountInfoId;
                            $activation_fees = $ccApi->fetch_from($get_string, function($activation_fees) {
                                return isset($activation_fees[0])? (float)$activation_fees[0]['pdd_fee'].".00": "00.00";
                            },false);
                        }
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="GHC '.$activation_fees.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'_contact_bank" disabled="true" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-dollar icon-gradient bg-warm-flame text-success" ],
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
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Subscribe/ Pay</button>
                </div>
            </div>
        </div>
    </div>
    
</form>
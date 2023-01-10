<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "update_subscription_initial") {
            define("POST_URL", API_BASE_URL."subscription/pay_trial_district");
            require_once 'district_edit_add_initial - processing.php';
        }
    }
?>
<form role="form" action="<?= currentPageUrl . "?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="update_subscription_initial" />
        <div class="col-md-12">
            <div class="row justify-content-center">
				<div class="col-lg-12 col-md-12">
                    <?php 
						$tittle_placeholder = "Select Account Type";
						$id_name = "account_type";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <input type="hidden" name="client_id" value="<?= (int)$account_id; ?>" />
                    <?php
                        $default_account_type = isset($_POST[$id_name]) ? $_POST[$id_name]: (int)AccountInfoType;
                        $account_types = $ccApi->account_type($all=true, $id=1, function($account_types) use($default_account_type) {
                            $at = '';
                            foreach ($account_types as $key => $account_type) {
                                $selected = ((int)$account_type['pdd_id'] == (int)$default_account_type) ? "selected" : "";
                                $at .= '<option value="'.$account_type['pdd_id'].'" '.$selected.'>'.$account_type['pdd_info'].'</option>';
                            }
                            return @$at;
                        }, $debug=false);
      
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.@$account_types.'
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" no-duration="false"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-users icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
                    <?php 
						$tittle_placeholder = "District Type";
						$id_name = "client_membership_size";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php         
                        $default_membership_size = @$account_info['trial_district_type']['pdcms_district_type'];
                        $GLOBALS['_membership_size_'] = [];
                        $get_string = 'district-status/trial_district';
                        $membership_size = $ccApi->fetch_from($get_string, function($district_types) use($default_membership_size, $ccApi) {
                            $at = '';
                            foreach ($district_types as $key => $district_type) {
                                if ((int)$district_type['pdd_id'] == (int)$default_membership_size) {
                                    $get_string = 'district-status/one?id='.$district_type['pdd_info'];
                                    $district_type_name = $ccApi->fetch_from($get_string, function($district_type) {
                                        return isset($district_type[0]['pdd_info'])? $district_type[0]['pdd_info']: "-";
                                    }, $debug = false);

                                    $GLOBALS['_membership_size_'] = $district_type;
                                    $selected = ((int)$district_type['pdd_id'] == (int)$default_membership_size) ? "selected" : "";
                                    $at .= '<option value="'.$district_type['pdd_id'].'" '.$selected.'>'.$district_type_name.'</option>';
                                }
                            }
                            return @$at;
                        });
                        $input_value = $membership_size;
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'_" default-value="'.$default_membership_size.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-users icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
                    <?php 
						$tittle_placeholder = "Subscrition Duration";
						$id_name = "client_subscription_duration";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $get_string = 'trial_duration';
                        $subscription_duration = $ccApi->subscription($get_string, function($subscription_durations) {
                            return @$subscription_durations[0];
                        });
                        
                        $input_value = '
							<option value="'.$subscription_duration['pdd_id'].'" selected>'.$subscription_duration['pdd_info'].'</option>
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'_"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-portfolio icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-8">
					<?php 
						$tittle_placeholder = "Activation Fee";
						$id_name = "client_subscription_fee";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $get_string = "trial_duration_fee?duration_id=".$subscription_duration['pdd_id'];
                        $subscription_fee = $ccApi->subscription($get_string, function($fee) {
                            return @$fee[0];
                        }, $debug = false);
                        
                        $_membership_sizeCost = isset($GLOBALS['_membership_size_']['pdd_cost'])
                        ? $GLOBALS['_membership_size_']['pdd_cost']: 0;
                        $subscription_feeInfo = isset($subscription_fee['pdd_info']) ? $subscription_fee['pdd_info']: 0;
                        $cost = floatval($_membership_sizeCost) * floatval($subscription_feeInfo);

                        $input_value = 'value="GHC '.ceil($cost).'.00"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" disabled="true" placeholder="'.$tittle_placeholder.'"';
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
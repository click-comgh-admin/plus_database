<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "update_subscription") {
            define("POST_URL", API_BASE_URL."subscription/pay");
            require_once 'edit_add - processing.php';
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
						$tittle_placeholder = "Select Membership Size";
						$id_name = "client_membership_size";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $default_membership_size = @$account_subscriptions[0]['pdcp_membership_size'];
                        if ($is_special) {
                            $get_string = 'clients_all_sizes?client_id='.$account_id;
                            $membership_size = $ccApi->membership_sizes($get_string, function($membership_sizes) use($default_membership_size) {
                                $at = '';
                                foreach ($membership_sizes as $key => $membership_size) {
                                    $selected = ((int)$membership_size['pdd_id'] == (int)$default_membership_size) ? "selected" : "";
                                    $at .= '<option value="'.$membership_size['pdd_id'].'" '.$selected.'>'.$membership_size['pdd_info'].'</option>';
                                }
                                return @$at;
                            });
                        } else {
                            $membership_size = $ccApi->membership_size($all=true, $id=1, function($membership_sizes) use($default_membership_size) {
                                $at = '';
                                foreach ($membership_sizes as $key => $membership_size) {
                                    $selected = ((int)$membership_size['pdd_id'] == (int)$default_membership_size) ? "selected" : "";
                                    $at .= '<option value="'.$membership_size['pdd_id'].'" '.$selected.'>'.$membership_size['pdd_info'].'</option>';
                                }
                                return @$at;
                            });
                        }
      
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.@$membership_size.'
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" default-value="'.$default_membership_size.'"';
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
						$tittle_placeholder = "Select Subscrition Duration";
						$id_name = "client_subscription_duration";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $default_duration = @$account_subscriptions[0]['pdcp_duration'];
						
                        if ($is_special) {
                            $get_string = 'client_all_durations?client_id='.$account_id;
                            $subscription_duration = $ccApi->subscription($get_string, function($subscription_durations) use($default_duration) {
                                $at = '';
                                foreach ($subscription_durations as $key => $subscription_duration) {
                                    $selected = ((int)$subscription_duration['pdd_id'] == (int)$default_duration) ? "selected" : "";
                                    $at .= '<option value="'.$subscription_duration['pdd_id'].'" '.$selected.'>'.$subscription_duration['pdd_info'].'</option>';
                                }
                                return @$at;
                            });
                        } else {
                            $subscription_duration = $ccApi->subscription_duration($all=true, $id=1, function($subscription_durations) use($default_duration) {
                                $at = '';
                                foreach ($subscription_durations as $key => $subscription_duration) {
                                    $selected = ((int)$subscription_duration['pdd_id'] == (int)$default_duration) ? "selected" : "";
                                    $at .= '<option value="'.$subscription_duration['pdd_id'].'" '.$selected.'>'.$subscription_duration['pdd_info'].'</option>';
                                }
                                return @$at;
                            });
                        }
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.@$subscription_duration.'
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" default-value="'.$default_duration.'"';
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
						$tittle_placeholder = "Subscription Fee";
						$id_name = "client_subscription_fee";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = 'value="GHC 00.00"';
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
<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "update_subscription_initial") {
            define("POST_URL", API_BASE_URL."subscription/pay_trial");
            require_once 'edit_add_initial - processing.php';
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
						$tittle_placeholder = "Membership Size";
						$id_name = "client_membership_size";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $get_string = 'trial_size';
                        $membership_size = $ccApi->membership_sizes($get_string, function($membership_sizes) {
                            return @$membership_sizes[0];
                        });
                        $input_value = '
							<option value="'.$membership_size['pdd_id'].'" selected>'.$membership_size['pdd_info'].'</option>
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'_"';
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
                        $cost = floatval($membership_size['pdd_cost']) * floatval($subscription_fee['pdd_info']);
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
<?php
    if (isset($_POST) && !empty($_POST)) {
        require_once 'subscription-renewal_form - processing.php';
    }
?>
<form role="form" action="<?= CLIENT_BASE_URL; ?>reset-password?email_token=<?= @$_GET["email_token"]; ?>" method="POST">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php 
				$tittle_placeholder = "Select Subscrition Duration";
				$id_name = "subscrition_duration";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
			<?php
				$subscription_duration = $ccApi->subscription_duration($all=true, $id=1, function($subscription_durations) {
					$at = '';
					foreach ($subscription_durations as $key => $subscription_duration) {
						$at .= '<option value="'.$subscription_duration['pdd_id'].'">'.$subscription_duration['pdd_info'].'</option>';
					}
					return @$at;
				});
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$subscription_duration.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-portfolio icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
		</div>
		<div class="col-lg-12 col-md-12">
			<?php 
				$tittle_placeholder = "Subscription Fee";
				$id_name = "subscription_fee";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
			<?php
                $input_value = 'value="0.00"';
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
</form>
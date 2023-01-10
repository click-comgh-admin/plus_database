<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."school/clients/pick-up/add_school_pickup");
        require_once 'school-create_form - processing.php';
    }
?>
<form role="form" action="<?= schoolPickup_BaseUrl; ?>school-pickup?<?= $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 col-md-6">
			<?php 
				$tittle_placeholder = "Select Class";
				$id_name = "class_id";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php

                $selected = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                $get_string = "class/classes?client_id=$account_id";
                $classList = $ccApi->school($get_string, function($classes) use($selected)
                {
                    $at = '';
                    
					foreach ($classes as $key => $class) {
                        $isSelected =  ((int)$selected == (int)$class['pdsc_id']) ? "selected" : "";
						$at .= '<option value="'.$class['pdsc_id'].'" '.$isSelected.'>'.$class['pdsc_class'].'</option>';
					}
					return @$at;
                }, $debug = false);
				
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$classList.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
		</div>
        <div class="col-lg-6 col-md-6">
            <?php
				$tittle_placeholder = "Pick-up By";
				$id_name = "pickup_by";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
		</div>
        <div class="col-lg-12 col-md-12">
            <?php
				$tittle_placeholder = "Pick-up Person's Contact";
				$id_name = "pickup_by_contact";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-phone icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"phone" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8">
            <input type="hidden" name="member_id" value="<?= $member_id; ?>" />
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-6 col-md-8">
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Create New</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>

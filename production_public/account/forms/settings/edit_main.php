<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "update_settings") {
            define("POST_URL", API_BASE_URL."client-membership/update_client");
            require_once 'edit_main - processing.php';
        }
    }
?>
<form role="form" action="<?= settings_BaseUrl . "settings?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="update_settings" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <?php
					$id_name = "account_name";
                    if (AccountInfoCategory === 10) { ?>
                        <input type="hidden" name="<?= $id_name; ?>" value='<?= $account_info['district_name']; ?>' />
                    <?php } else { ?>
                        <div class="col-lg-12 col-md-12">
                            <?php 
                                $tittle_placeholder = "Enter Name of Organization/ Group";
                            ?>
                            <h6><?= $tittle_placeholder; ?></h6>
                            <?php
                                $input_value = 'value="'.@$account_info['pdc_name'].'"';
                                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                    [ "name"=>"icon", "value"=>"pe-7s-culture icon-gradient bg-warm-flame text-success" ],
                                    [ "name"=>"type", "value"=>"text" ],
                                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                ]);
                            ?>
                        </div>
                    <?php }
                ?>
                <div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Select Country";
						$id_name = "country";
					?>
					<?php
                        $set_country = @$account_info['pdc_country'];
                        $countries = '';
                        foreach ($load_countries as $key => $country) {
                            $country_selected = @(strtolower($set_country) == strtolower($country->Name)) ? "selected": "";
                            $countries .= "<option value='".$country->Name."' ".$country_selected.">".$country->Name."</option>";
                        }
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$countries.'
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-flag icon-gradient bg-warm-flame text-success" ],
							[ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12"  <?= (strtolower($set_country) == "ghana") ? 'select-show="country" select-show-alt="country"' : ''; ?>>
					<?php 
						$tittle_placeholder = "Enter State/ Province";
						$id_name = "state_province";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_info['pdc_state_province'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12"  <?= (strtolower($set_country) == "ghana") ? '' : 'select-show="country"'; ?>>
					<?php 
						$tittle_placeholder = "Select Region";
						$id_name = "region";
					?>
					<h6><?= $tittle_placeholder; ?> <span id="region_loading"></span></h6>
					<?php
                        $set_location = @$account_info['pdc_region'];
                        $location = $ccApi->get_location($type=$id_name."s", $get_string = "", function($locations) use($set_location) {
                            $at = '';
                            foreach ($locations as $key => $location) {
                                $location_selected = @((int)$set_location == $location['id']) ? "selected": "";
                                $at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['Region'].'</option>';
                            }
                            return @$at;
                        });
                        $input_value = '
                            <option>'.$tittle_placeholder.'</option>
                            '.$location.'
                        ';
				   		$input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" no-ajax';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12"  <?= (strtolower($set_country) == "ghana") ? '' : 'select-show="country"'; ?>>
					<?php 
						$tittle_placeholder = "Select District";
						$id_name = "district";
					?>
					<h6><?= $tittle_placeholder; ?> <span id="district_loading"></span></h6>
					<?php
                        $_region_ = @$account_info['pdc_region'];
                        $set_location = @$account_info['pdc_district'];
                        $location = $ccApi->get_location($type="$id_name", $get_string = "region=$_region_", function($locations) use($set_location) {
                            $at = '';
                            foreach ($locations as $key => $location) {
                                $location_selected = @((int)$set_location == @$location['id']) ? "selected": "";
                                $at .= '<option value="'.@$location['id'].'" '.$location_selected.'>'.@$location['District'].'</option>';
                            }
                            return @$at;
                        });
                        $input_value = '
                            <option>'.$tittle_placeholder.'</option>
                            '.$location.'
                        ';
				   		$input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12"  <?= (strtolower($set_country) == "ghana") ? '' : 'select-show="country"'; ?>>
					<?php 
						$tittle_placeholder = "Select Constituency";
						$id_name = "constituency";
					?>
					<h6><?= $tittle_placeholder; ?> <span id="constituency_loading"></span></h6>
					<?php
                        $_district_ = @$account_info['pdc_district'];
                        $set_location = @$account_info['pdc_constituency'];
                        $location = $ccApi->get_location($type="$id_name", $get_string = "region=$_region_&district=$_district_", function($locations) use($set_location) {
                            $at = '';
                            foreach ($locations as $key => $location) {
                                $location_selected = @((int)$set_location == @$location['id']) ? "selected": "";
                                $at .= '<option value="'.@$location['id'].'" '.$location_selected.'>'.@$location['Constituency'].'</option>';
                            }
                            return @$at;
                        });
                        $input_value = '
                            <option>'.$tittle_placeholder.'</option>
                            '.$location.'
                        ';
				   		$input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12"  <?= (strtolower($set_country) == "ghana") ? '' : 'select-show="country"'; ?>>
					<?php 
						$tittle_placeholder = "Enter Community";
						$id_name = "community";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.@$account_info['pdc_community'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
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
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update</button>
                </div>
            </div>
        </div>
    </div>
    
</form>
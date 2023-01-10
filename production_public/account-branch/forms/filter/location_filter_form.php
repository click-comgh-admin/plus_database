<form class="container" role="form" action="<?= $page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php 
				$tittle_placeholder = "Select Country of Residence";
				$id_name = "country";
			?>
            <?php
                $set_country = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
				$countries = '';
				foreach ($load_countries as $key => $country) {
                    $country_selected = @(strtolower($set_country) == strtolower($country->Name)) ? "selected": "";
					$countries .= "<option value='".$country->Name."' ".$country_selected.">".$country->Name."</option>";
				}
			?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
				$input_value = '
					<option value="">All</option>
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
        <div class="col-lg-6 col-md-6" <?= (strtolower($set_country) == "ghana") ? '' : 'select-show="country"'; ?>>
            <?php 
				$tittle_placeholder = "Select Region";
				$id_name = "region";
			?>
            <h6><?= $tittle_placeholder; ?> <span id="region_loading"></span></h6>
            <?php
                $set_location = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
                $location = $ccApi->get_location($type=$id_name."s", $get_string = "", function($locations) use($set_location) {
                    $at = '';
                    foreach ($locations as $key => $location) {
                        $location_selected = @((int)$set_location == $location['id']) ? "selected": "";
                        $at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['Region'].'</option>';
                    }
                    return @$at;
                });
                $input_value = '
                    <option value="">All</option>
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
        <div class="col-lg-6 col-md-6" <?= (strtolower($set_country) == "ghana") ? '' : 'select-show="country"'; ?>>
            <?php 
				$tittle_placeholder = "Select District";
				$id_name = "district";
			?>
            <h6><?= $tittle_placeholder; ?> <span id="district_loading"></span></h6>
            <?php
                $set_location = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
                $location = $ccApi->get_location($type="$id_name", $get_string = "region=" . @$_GET["region"], function($locations) use($set_location) {
                    $at = '';
                    if (is_array($locations) && isset($locations[0]['id'])) {
						foreach ($locations as $key => $location) {
                            $location_selected = @((int)$set_location == $location['id']) ? "selected": "";
                            $at .= '<option value="'.$location['id'].'" '.$location_selected.'>'.$location['District'].'</option>';
                        }
					}
                    return @$at;
                });
                $input_value = '
                    <option value="">All</option>
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
        <div class="col-md-12"></div>
        <div class="col-lg-4 col-md-6"></div>
        <div class="col-lg-4 col-md-6 text-center">
            <button type="submit" class="btn btn-sm bg-grow-early text-light text-white font-weight-bold ">Search</button>
		</div>
        <div class="col-lg-4 col-md-6"></div>
	</div>
</form>

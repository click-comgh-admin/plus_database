<form role="form" action="<?= API_BASE_URL."communications/clients/contacts/location"; ?>" method="POST" enctype="multipart/form-data" make-general-posts="Update Contact Location?">
    <hr>
    <div class="row justify-content-center p-0 m-0">
        <div class="col-md-6 col-lg-6">
            <?php 
                $tittle_placeholder = "Select Region";
                $id_name = "region";
            ?>
            <h6><?= $tittle_placeholder; ?> <span id="region_loading"></span></h6>
            <?php
				$region_location =@$contact['location']['pdccc_region'];
				$location = $ccApi->get_location($type=$id_name."s", $get_string = "", function($locations) use($region_location) {
					$at = '';
					foreach ($locations as $key => $location) {
						$location_selected = @((int)$region_location == $location['id']) ? "selected": "";
						$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Region'].'</option>';
					}
					return @$at;
				});
				$input_value = '
					<option value="">'.@$tittle_placeholder.'</option>
					'.@$location.'
				';
				$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" no-ajax';
				echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
					[ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
					[ "name"=>"type", "value"=>"text" ],
					[ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
				]);
            ?>
        </div>
		<div class="col-md-6 col-lg-6">
            <?php 
                $tittle_placeholder = "Select District";
                $id_name = "district";
            ?>
            <h6><?= $tittle_placeholder; ?> <span id="district_loading"></span></h6>
            <?php
				$district_location = @$contact['location']['pdccc_district'];
				$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location, function($locations) use($district_location) {
					$at = '';

					if (is_array($locations)) {
						foreach ($locations as $key => $location) {
							$location_selected = @((int)$district_location == $location['id']) ? "selected": "";
							$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['District'].'</option>';
						}
					}
					return @$at;
				});
				$input_value = '
					<option value="">'.@$tittle_placeholder.'</option>
					'.@$location.'
				';
				$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
				echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
					[ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
					[ "name"=>"type", "value"=>"text" ],
					[ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
				]);
            ?>
        </div>
		<div class="col-md-6 col-lg-6">
            <?php 
                $tittle_placeholder = "Select Constituency";
                $id_name = "constituency";
            ?>
            <h6><?= $tittle_placeholder; ?> <span id="constituency_loading"></span></h6>
            <?php
				$constituency_location = @$contact['location']['pdccc_constituency'];
				$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location . "&district=" . $district_location,
					function($locations) use($constituency_location) {
					$at = '';

					if (is_array($locations)) {
						foreach ($locations as $key => $location) {
							$location_selected = @((int)$constituency_location == $location['id']) ? "selected": "";
							$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Constituency'].'</option>';
						}
					}
					return @$at;
				});
				$input_value = '
					<option value="">'.@$tittle_placeholder.'</option>
					'.@$location.'
				';
				$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
				echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
					[ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
					[ "name"=>"type", "value"=>"text" ],
					[ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
				]);
            ?>
        </div>
		<div class="col-md-6 col-lg-6">
            <?php 
                $tittle_placeholder = "Select Electoral Area";
                $id_name = "electoral_area";
            ?>
            <h6><?= $tittle_placeholder; ?> <span id="electoral_area_loading"></span></h6>
            <?php
				$electoral_area_location = @$contact['location']['pdccc_electoral_area'];
				$location = $ccApi->get_location($type="$id_name", $get_string = "region=" . $region_location . "&district=" . $district_location,
					function($locations) use($electoral_area_location) {
					$at = '';

					if (is_array($locations)) {
						foreach ($locations as $key => $location) {
							$location_selected = @((int)$electoral_area_location == $location['id']) ? "selected": "";
							$at .= '<option value="'.@$location['id'].'" '.@$location_selected.'>'.@$location['Electoral_Area'].'</option>';
						}
					}
					
					return @$at;
				});
				$input_value = '
					<option value="">'.@$tittle_placeholder.'</option>
					'.@$location.'
				';
				$input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
				echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
					[ "name"=>"icon", "value"=>"pe-7s-map-marker icon-gradient bg-warm-flame text-success" ],
					[ "name"=>"type", "value"=>"text" ],
					[ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
				]);
            ?>
		</div>
		<div class="col-lg-12 col-md-12">
            <input type="hidden" name="contact_id" value="<?= $contact['pdccc_id']; ?>" />
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
		<div class="col-md-6 col-lg-6">
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Contact Location</button>
        </div>
    </div>
</form>
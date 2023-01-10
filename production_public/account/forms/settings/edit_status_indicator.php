<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "update_status-indicator") {
            define("POST_URL", API_BASE_URL."active_status/client-indicator");
            require_once 'edit_status_indicator - processing.php';
        }
    }
?>
<form role="form" action="<?= settings_BaseUrl . "status-indicator?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="update_status-indicator" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <?php
					$id_name = "status_indicator";
                ?>
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Select Status Indicator";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($status_indicator['pdad_is_active_staus_by'])) ? $status_indicator['pdad_is_active_staus_by']: $input_value;
                        
                        $get_string = "active_status/indicators";
                        $_status_indicator = $ccApi->fetch_from($get_string, function($status_indicators) use($input_value)
                        {
                            $at = '';
							foreach ($status_indicators as $key => $status_indicator) {
                                $selected = ((int)$input_value === (int)$status_indicator['pdad_id']) 
                                    ? "selected": "";
                                $at .= '<option value="'.$status_indicator['pdad_id'].'" '.$selected.'>
                                    '.$status_indicator['pdad_active_staus'].'</option>';
							}
							return @$at;
                        }, $debug = false);
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$_status_indicator.'
						';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'" min="1"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-note2 icon-gradient bg-warm-flame text-success" ],
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
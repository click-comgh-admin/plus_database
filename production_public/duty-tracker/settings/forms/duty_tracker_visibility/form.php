<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "duty_tracker_visibility_info") {
            define("POST_URL", API_BASE_URL."duty-tracker/clients/settings/visibility");
            require_once 'form - processing.php';
        }
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="duty_tracker_visibility_info" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Select Visibility";
                        $id_name = "visibility";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($visibility['pdt_is_visible'])) ? $visibility['pdt_is_visible']: $input_value;
                        
                        $visibility_1_selected = ((int)$input_value == 1) ? "selected": "";
                        $visibility_2_selected = ((int)$input_value == 2) ? "selected": "";
                        $input_value = '
                            <option value="">Not Selected!</option>
                            <option value=1 '.$visibility_1_selected.'>Visible</option>
                            <option value=2 '.$visibility_2_selected.'>Not Visible</option>
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
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Set visibility</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

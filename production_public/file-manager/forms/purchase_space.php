<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."file-manager/clients/space/buy");
        require_once 'purchase_space - processing.php';
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data" make-gen eral-posts="Purchase Space?">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="purchase_space" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Select Space To Buy";
                        $id_name = "space";
                    ?>
                    <?php
                        $set_space = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;

                        $get_string = "spaces";
                        $spaces = $ccApi->file_manager($get_string, function($spaces)
                        {
                            return $spaces;
                        }, $debug = false);

                        $_spaces = '';
                        foreach ($spaces as $key => $space) {
                            if (isset($space['pdcfmf_id'])) {
                                $space_selected = @(strtolower($set_space) == strtolower($space['pdcfmf_id'])) ? "selected": "";
                                $_spaces .= "<option value='".$space['pdcfmf_id']."' ".$space_selected.">".@$space['pdcfmf_space']."</option>";
                            }
                        }
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            '.@$_spaces.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-file icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit- no-select2" ],
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
                    <div class="card mb-3">
						<p class="font-weight-bold text-info my-0"> 
							<span class="ml-2" space_purchase="space_cost"></span>
						</p>
					</div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Buy Space</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

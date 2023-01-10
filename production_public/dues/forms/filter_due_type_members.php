<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "due-type--assign-members") {
            define("POST_URL", API_BASE_URL."dues/clients/due-type/assign-members");
            require_once 'filter_due_type_members - processing.php';
        }
    }
?>
<form role="form" action="<?= dues_BaseUrl . "assign-members?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="due-type--assign-members" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Select Due Member(s)";
                        $id_name = "due_members";
                        
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                        $_due_members = '';
                        foreach ($client_members as $key => $client_member) {
                            if (isset($client_member['pdm_id'])) {
                                $client_member_selected = @(in_array($client_member['pdm_id'], $members)) ? "selected": "";
                                $_due_members .= "<option value='".$client_member['pdm_id']."' ".$client_member_selected.">".$client_member['pdm_firstname']." ".$client_member['pdm_surname']."</option>";
                            }
                        }
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            <option value="all">All Members</option>
                            '.@$_due_members.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
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
                    <input type="hidden" name="due_id" value="<?= $_GET['dues']; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Assign Member(s)</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

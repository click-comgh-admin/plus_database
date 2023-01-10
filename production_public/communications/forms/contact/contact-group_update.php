<?php
    if (isset($_POST) && !empty($_POST) && ($_POST['add-form'] == "contact-group--edit")) {
        define("POST_URL_EDIT", API_BASE_URL."communications/clients/contacts/edit_group");
        require_once 'contact-group_update - processing.php';
    }
?>
<form role="form" action="<?= ComBaseUrlAlt . "?" . $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="contact-group--edit" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Group Name";
                        $id_name = "group_name";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($group['pdccc_name'])) ? $group['pdccc_name'] : null;
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
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
                    <?php 
                        $tittle_placeholder = "Group Info";
                        $id_name = "group_about";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($group['pdccc_info'])) ? $group['pdccc_info'] : "";
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" rows="5"';
                        echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="group_id" value="<?= $group['pdccc_id']; ?>" />
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Group</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

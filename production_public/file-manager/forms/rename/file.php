<form role="form" action="<?= API_BASE_URL."file-manager/clients/file/rename"; ?>" method="POST"
    make-general-posts="Rename This File?">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "New Filename";
                $id_name = "file_name";
            ?>
            <?php
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $filename;

                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"fa fa-heading fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="file_id" value="<?= $fileid; ?>" />
        </div>
        <div class="col-lg-12 col-md-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Rename File</button>
        </div>
    </div>

</form>
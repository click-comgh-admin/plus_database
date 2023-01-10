<form role="form" action="<?= API_BASE_URL."file-manager/clients/file/create_subfolder"; ?>" method="POST"
    make-general-posts="Create Sub-Folder?">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Select Folder";
                $id_name = "account_folder";
            ?>
            <?php
                $set_folder = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;

                $get_string = "clients/folders/all_folders?account_id=$account_id";
                $folders = $ccApi->file_manager($get_string, function($folders)
                {
                    return $folders;
                }, $debug = false);

               $_folders = '';
                foreach ($folders as $key => $folder) {
                    if (isset($folder['pdcfmf_id'])) {
                        $folder_selected = @(strtolower($set_folder) == strtolower($folder['pdcfmf_id'])) ? "selected": "";
                        $_folders .= "<option value='".$folder['pdcfmf_id']."' ".$folder_selected.">".$folder['pdcfmf_folder']."</option>";
                    }
                }
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $firstOption = (empty($folders))? "Create Folder To Upload File": @$tittle_placeholder;
                $input_value = '
                    <option value="">'.$firstOption.'</option>
                    '.@$_folders.'
                ';
                $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-folder icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Enter Sub-Folder Name";
                $id_name = "subfolder_name";
            ?>
            <?php
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;

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
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-12 col-md-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Create Sub-Folder</button>
        </div>
    </div>

</form>
<form upload_file="multiple" method="POST" action="<?= API_BASE_URL."file-manager-uploads/"; ?>"
    email-post-attachments="true" enctype="multipart/form-data">
    <div class="col-md-12 card mb-3 shadow shadow-lg">
        <label>Attach Media [<small class="text-warning">Select multiple attachments if neccessary</small>]: </label>
        <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12">
                <?php
                    $tittle_placeholder = "Add Attachment";
                    $id_name = "attachments";
                ?>
                <?php
                    $input_value = 'value=""';
                    $input_attributes = ''.$input_value.' name="'.$id_name.'[]" accept=".doc,.docx,.xls,.xlsx,.pdf,.mp4,.mp3,.jpg,.jpeg,.png,.gif" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" multiple="true"';
                    echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                        [ "name"=>"icon", "value"=>"pe-7s-file icon-gradient bg-warm-flame text-success" ],
                        [ "name"=>"type", "value"=>"file" ],
                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    ]);
                ?>
            </div>
        </div>
        <input type="hidden" value="" name="file" />
        <input type="hidden" value="" name="file_extention" />
        <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
        <input type="hidden" name="file_api_location" id="file_api_location" value="<?= FILE_BUCKET_BASE_URL; ?>files/" />
        <label>[<small class="text-warning"> word, pdf, excel, MP4, MP3, Jpg, Png, Gif </small>]: </label>
    </div>
    <div myProgress style="display: none;" class="my-2">
        <div myBar>0</div>
    </div>
</form>
<form role="form" action="<?= API_BASE_URL."file-manager/clients/file/add"; ?>" method="POST"
    make-general-posts="Upload File(s)?">
    <div class="row justify-content-center">
        <div upload_file="display" class="w-100"></div>
        <div class="col-lg-12 col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "File/ Doc(s) Source";
                        $id_name = "file_source";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" ';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-heading fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Select Folder";
                        $id_name = "folder";
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
                        $tittle_placeholder = "Select Sub-Folder";
                        $id_name = "subfolder";
                    ?>
                    <?php
                        $set_subfolder = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;

                        $subfolders = [];
                        foreach ($folders as $key => $folder) {

                            $get_string = "clients/subfolders/all_subfolders?account_id=$account_id&folder_id=".$folder['pdcfmf_id'];
                            $SF = $ccApi->file_manager($get_string, function($subfolders)
                            {
                                return $subfolders;
                            }, $debug = false);

                            foreach ($SF as $sf_key => $sf) {
                                $_sf = [
                                    "folder"=>$folder['pdcfmf_folder'],
                                    "subfolder"=>$sf
                                ];
                                if (!in_array($_sf, $subfolders)) {
                                    array_push($subfolders, $_sf);
                                }
                            }
                        }

                        $_subfolders = '';
                        foreach ($subfolders as $key => $subfolder) {
                            if (isset($subfolder['subfolder']['pdcfmf_id'])) {
                                $subfolder_selected = @(strtolower($set_subfolder) == strtolower($subfolder['subfolder']['pdcfmf_id'])) ? "selected": "";
                                $_subfolders .= "<option value='".$subfolder['subfolder']['pdcfmf_id']."' ".$subfolder_selected.">".
                                    $subfolder['folder']." => ".$subfolder['subfolder']['pdcfmf_subfolder'].
                                "</option>";
                            }
                        }
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            <option value="this">Current Directory/ Selected Folder</option>
                            '.@$_subfolders.'
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
                        $tittle_placeholder = "File/ Doc(s) Description";
                        $id_name = "file_description";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : "";

                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="3"';
                        echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <select name="mAttachment[]" class="no-select2 d-none" multiple="true"></select>
        </div>
        <div class="col-lg-12 col-md-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Upload File(s)</button>
        </div>
    </div>

</form>
<form class="container" role="form" action="<?= $page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Select Folder";
                $id_name = "folder";
            ?>
            <?php
                $set_folder = (isset($_GET[$id_name])) ? $_GET[$id_name] : null;

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
                $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'_get"';
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
                $set_subfolder = (isset($_GET[$id_name])) ? $_GET[$id_name] : null;

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
                $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'_get"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-folder icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-6"></div>
        <div class="col-lg-6 col-md-4">
            <button type="submit" class="btn btn-sm bg-grow-early text-light text-white font-weight-bold ">Search</button>
		</div>
	</div>
</form>

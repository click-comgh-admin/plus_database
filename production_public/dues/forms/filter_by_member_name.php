<form role="form" class="my-1" action="<?= dues_BaseUrl . "records?" . $_SERVER['QUERY_STRING']; ?>" method="GET" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="dues" value="<?= $_GET['dues']; ?>" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Filter Member(s)";
                        $id_name = "due_members";
                        
                        $selected_members = [];
                        foreach (((isset($_COOKIE[$id_name])) ? json_decode($_COOKIE[$id_name], 1) : []) as $c_key => $cookieArray) {
                            if (is_numeric($cookieArray)) {
                                if (!in_array($cookieArray, $selected_members)) {
                                    array_push($selected_members, $cookieArray);
                                }
                            }
                        }

                        $input_value = @(isset($_COOKIE[$id_name])) ? $selected_members : null;
                        $input_value = (isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;

                        $_due_members = '';
                        foreach ($all_members as $key => $member) {
                            if (isset($member['pdm_id'])) {
                                $get_string = "identity?client_id=$account_id&member_id=".$member['pdm_id'];
                                $member_id = $ccApi->membership($get_string, function ($member_ids) {
                                    return @$member_ids[0];
                                }, $debug = false);
                                $member_id = isset($member_id['pdm_identity']) ? ">> ID: ".$member_id['pdm_identity']."": "";
                                $member_selected = @(in_array($member['pdm_id'], $selected_members)) ? "selected": "";
                                $_due_members .= "<option value='".$member['pdm_id']."' ".$member_selected.">".$member['pdm_firstname']." ".$member['pdm_surname']." ".$member_id."</option>";
                            }
                        }
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="" >'.@$tittle_placeholder.'</option>
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
                    <button type="submit"
                        class="btn btn-sm bg-grow-early text-light btn-block text-white font-weight-bold">Filter</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

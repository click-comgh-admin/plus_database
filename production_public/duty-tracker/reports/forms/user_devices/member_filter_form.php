<form role="form" class="my-1" action="<?= $page_url . "?" . $_SERVER['QUERY_STRING']; ?>" method="GET" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php
                        $tittle_placeholder = "Filter Member(s)";
                        $id_name = "member_id";

                        $get_string = "currentpage=1&rowsperpage=100000&client_id=".AccountInfoId;
                        $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members) {
                            return @$members['data'];
                        }, $debug = false);

                        $input_value = @(isset($_COOKIE[$id_name])) ? $_COOKIE[$id_name] : "all";
                        $input_value = (isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;
                        $selectedMember = $encryptor->decrypt($input_value);

                        $_members = '';
                        foreach ($client_members as $key => $member) {
                            if (isset($member['pdm_id'])) {
                                $get_string = "identity?client_id=$account_id&member_id=".$member['pdm_id'];
                                $member_id = $ccApi->membership($get_string, function ($member_ids) {
                                    return isset($member_ids[0])? $member_ids[0]: [];
                                }, $debug = false);
                                $member_id = isset($member_id['pdm_identity']) ? ">> ID: ".$member_id['pdm_identity']."": "";
                                $member_selected = @((int)$member['pdm_id'] === (int)$selectedMember) ? "selected": "";

                                $Uid = $encryptor->encrypt($member['pdm_id']);
                                $_members .= "<option value='".$Uid."' ".$member_selected.">".$member['pdm_firstname']." ".$member['pdm_surname']." ".$member_id."</option>";
                            }
                        }
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="all">All Members</option>
                            '.@$_members.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
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

<form role="form" class="my-1" action="<?= $page_url . "?" . $_SERVER['QUERY_STRING']; ?>" method="GET" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6">
                    <?php
                        $tittle_placeholder = "Filter Member(s)";
                        $id_name = "member_id";

                        $get_string = "membership-filter/members?currentpage=1&rowsperpage=100000&client_id=".AccountInfoId;
                        // $get_string = "attendance/members/member-list?currentpage=1&rowsperpage=100000&client_id=".AccountInfoId;
                        $client_members = $ccApi->fetch_from($get_string = $get_string, function ($members) {
                            // print_r($members);
                            return isset($members[0])? $members: [];
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
                </div><?php /*
                <div class="col-lg-6 col-md-6">
                    <?php 
                        $tittle_placeholder = "Select Group";
                        $id_name = "group_id";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $currentGroup = isset($_GET[$id_name])? $_GET[$id_name]: 0;
                        $get_string = "client-membership/all_client_groups?client_id=".AccountInfoId;
                        // $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                        $groupList = $ccApi->fetch_from($get_string=$get_string, function($groups) use($currentGroup) {
                            $groups = isset($groups[0])? $groups: [];
                            $at = '';
                            foreach ($groups as $key => $group) {
                                $selected = ((int)$group['pdmg_id'] === (int)$currentGroup)? "selected": "";
                                $at .= '<option value="'.$group['pdmg_id'].'" '.$selected.'>'.$group['pdmg_group'].'</option>';
                            }
                            return @$at;
                        }, $debug = false);
                        $input_value = '
                            <option value="">'.$tittle_placeholder.'</option>
                            '.$groupList.'
                        ';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
					<?php 
						$tittle_placeholder = "Select Sub-Group";
						$id_name = "subgroup_id";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $currentSubGroup = isset($_GET[$id_name])? $_GET[$id_name]: 0;
                        $get_string = "client-membership/all_client_groups?client_id=".AccountInfoId;
                        // $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                        $subgroups = $ccApi->fetch_from($get_string=$get_string, function($groups) use($ccApi, $currentSubGroup) {
							$at = '';
                            $groups = isset($groups[0])? $groups: [];

                            foreach ($groups as $group_key => $group) {
                                $group_id = $group['pdmg_id'];
								$group_name = $group['pdmg_group'];
                                $get_string = "attendance/members/all_subgroups?group_id=$group_id&client_id=".AccountInfoId;
                                $at .= $ccApi->fetch_from($get_string=$get_string, function($subgroups) use($group_name, $currentSubGroup) {
                                    $subgroups = isset($subgroups[0])? $subgroups: [];
                                    $sg = '';
									foreach ($subgroups as $key => $subgroup) {
                                        $selected = ((int)$subgroup['pdmg_id'] === (int)$currentSubGroup)? "selected": "";
										$sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$selected.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
									}
									return @$sg;
                                }, $debug = false);
                            }
                            return @$at;
                        }, $debug = false);

						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$subgroups.'
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div> */ ?>
                <div class="col-lg-12 col-md-12"></div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6"></div>
                <div class="col-lg-6 col-md-6">
                    <button type="submit"
                        class="btn btn-sm bg-grow-early text-light btn-block text-white font-weight-bold">Filter</button>
                </div>
            </div>
        </div>
    </div>
</form>

<?php
    namespace AssignDuty;

    class AssignDuty
    {
        public $data = [];
        public function __construct() {}

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-info p-0 mb-3 shadow shadow-sm card-shadow-info border border-white bg-night-sky">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0 border border-white">
                    <u class="text-capitalize small font-weight-bold" style="color: white"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        public function main_content($tf, $ccApi)
        { ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Assign Duty."); ?>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Official": "Select Member";
                            $id_name = "member_ids";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdad_member_id"])) ? $this->data["pdad_member_id"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            $selectedMember = (int)$input_value;
                            
                            $_saved_members = isset($this->data['member_assignment'])
                                ? $this->data['member_assignment']: [];
                            // echo "<pre>";
                            // print_r($_saved_members);
                            // echo "</pre>";
                            $saved_members = [];
                            foreach ($_saved_members as $key => $_sm) {
                                // if (!in_array($_sm['pdama_assign_id'], $saved_members)) {
                                //     array_push($saved_members, $_sm['pdama_assign_id']);
                                // }
                                if (!in_array($_sm['pdt_assign_id'], $saved_members)) {
                                    array_push($saved_members, $_sm['pdt_assign_id']);
                                }
                            }

                            $get_string = "membership-filter/members?currentpage=1&rowsperpage=100000&client_id=".AccountInfoId;
                            // $get_string = "attendance/members/member-list?currentpage=1&rowsperpage=100000&client_id=".AccountInfoId;
                            $client_members = $ccApi->fetch_from($get_string = $get_string, function ($members) {
                                // print_r($members);
                                return isset($members[0])? $members: [];
                            }, $debug = false);

                            $_members = '';
                            foreach ($client_members as $key => $member) {
                                if (isset($member['pdm_id'])) {
                                    $get_string = "identity?client_id=".AccountInfoId."&member_id=".$member['pdm_id'];
                                    $member_id = $ccApi->membership($get_string, function ($member_ids) {
                                        return isset($member_ids[0])? $member_ids[0]: [];
                                    }, $debug = false);
                                    $member_id = isset($member_id['pdm_identity']) ? ">> ID: ".$member_id['pdm_identity']."": "";

                                    $selected = "";
                                    if (in_array($member['pdm_id'], $saved_members)) {
                                        $selected = "selected";
                                    }

                                    $Uid = $member['pdm_id'];
                                    $_members .= "<option value='".$Uid."' ".$selected.">
                                        ".$member['pdm_firstname']." ".$member['pdm_surname']." ".$member_id."</option>";
                                }
                            }
                                
                            $input_value = '
                                <option value="" selected>'.$tittle_placeholder.'</option>
                                '.$_members.'
                            ';
                            $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple="true"';
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
                            $tittle_placeholder = "Select Group";
                            $id_name = "group_ids";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $_saved_groups = isset($this->data['group_assignment'])
                                ? $this->data['group_assignment']: [];
                            // echo "<pre>";
                            // print_r($_saved_groups);
                            // echo "</pre>";
                            $saved_groups = [];
                            foreach ($_saved_groups as $key => $_sg) {
                                // if (!in_array($_sg['pdama_assign_id'], $saved_groups)) {
                                //     array_push($saved_groups, $_sg['pdama_assign_id']);
                                // }
                                if (!in_array($_sg['pdt_assign_id'], $saved_groups)) {
                                    array_push($saved_groups, $_sg['pdt_assign_id']);
                                }
                            }
                            $get_string = "client-membership/all_client_groups?client_id=".AccountInfoId;
                            // $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                            $groupList = $ccApi->fetch_from($get_string=$get_string, function($groups) use($saved_groups) {
                                $groups = isset($groups[0])? $groups: [];
                                $at = '';
                                foreach ($groups as $key => $group) {
                                    $selected = "";
                                    if (in_array($group['pdmg_id'], $saved_groups)) {
                                        $selected = "selected";
                                    }
                                    $at .= '<option value="'.$group['pdmg_id'].'" '.$selected.'>
                                        '.$group['pdmg_group'].'</option>';
                                }
                                return @$at;
                            }, $debug = false);
                            $input_value = '
                                <option value="" selected>'.$tittle_placeholder.'</option>
                                '.$groupList.'
                            ';
                            $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple="true"';
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
                            $id_name = "subgroup_ids";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $_saved_subgroups = isset($this->data['subgroup_assignment'])
                                ? $this->data['subgroup_assignment']: [];
                            $saved_subgroups = [];
                            foreach ($_saved_subgroups as $key => $_ssg) {
                                if (!in_array($_ssg['pdt_assign_id'], $saved_subgroups)) {
                                    array_push($saved_subgroups, $_ssg['pdt_assign_id']);
                                }
                                // if (!in_array($_ssg['pdama_assign_id'], $saved_subgroups)) {
                                //     array_push($saved_subgroups, $_ssg['pdama_assign_id']);
                                // }
                            }
                            $get_string = "client-membership/all_client_groups?client_id=".AccountInfoId;
                            // $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                            $subgroups = $ccApi->fetch_from($get_string=$get_string, function($groups) use($ccApi, $saved_subgroups) {
                                $at = '';
                                $groups = isset($groups[0])? $groups: [];

                                foreach ($groups as $group_key => $group) {
                                    $group_id = $group['pdmg_id'];
                                    $group_name = $group['pdmg_group'];
                                    $get_string = "client-membership/all_client_subgroups?client_id=".AccountInfoId."&group_id=$group_id";
                                    // $get_string = "attendance/members/all_subgroups?group_id=$group_id&client_id=".AccountInfoId;
                                    $at .= $ccApi->fetch_from($get_string=$get_string, function($subgroups) use($group_name, $saved_subgroups) {
                                        $subgroups = isset($subgroups[0])? $subgroups: [];
                                        $sg = '';
                                        foreach ($subgroups as $key => $subgroup) {
                                            $selected = "";
                                            if (in_array($subgroup['pdmg_id'], $saved_subgroups)) {
                                                $selected = "selected";
                                            }
                                            $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$selected.'>
                                                '.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
                                        }
                                        return @$sg;
                                    }, $debug = false);
                                }
                                return @$at;
                            }, $debug = false);

                            $input_value = '
                                <option value="" selected>'.$tittle_placeholder.'</option>
                                '.$subgroups.'
                            ';
                            $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple="true"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-12 col-md-12"></div>
                </div>
            </div>
        <?php }
    }
?>
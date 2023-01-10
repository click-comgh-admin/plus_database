<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."membership/edit/subgroups");
        require_once 'edit_pages-subgroups - processing.php';
    }
?>
<form class="container" role="form" action="<?= CLIENT_BASE_URL; ?>members?<?= $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <?php 
				$tittle_placeholder = "Select $page";
                $id_name = "user_subgroup";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_subgroups = @$member['member_subgroups'];
                $subgroups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($ccApi, $account_id, $set_subgroups) {
                    $at = '';
                    foreach ($groups as $key => $group) {
                        $group_id = $group['pdmg_id'];
                        $group_name = $group['pdmg_group'];
                        $at .= $ccApi->subgroups($all=true, $account_id, $group_id, $id=1, function($subgroups) use($group_name, $set_subgroups) {
                            $sg = '';

                            $_set_subgroups = $set_subgroups;
                            $set_subgroups = [];

                            foreach ($_set_subgroups as $key => $set_subgroup) {
                                if (!in_array($set_subgroup['pdmms_subgroup_id'], $set_subgroups)) {
                                    array_push($set_subgroups, $set_subgroup['pdmms_subgroup_id']);
                                }
                            }
        
                            foreach ($subgroups as $key => $subgroup) {
                                $selected_subgroups = (in_array($subgroup['pdmg_id'], $set_subgroups)) ? "selected" : "";
                                $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$selected_subgroups.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
                            }
                            return @$sg;
                        });
                    }
                    return @$at;
                });
                $input_value = '
                    <option value="">'.$tittle_placeholder.'</option>
                    '.$subgroups.'
                ';
                $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div>
            <input type="hidden" name="member_id" value="<?= $member_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Save</button>
        </div>
    </div>
</form>
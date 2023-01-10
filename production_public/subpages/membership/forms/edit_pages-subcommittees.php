<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."membership/edit/subcommittees");
        require_once 'edit_pages-subcommittees - processing.php';
    }
?>
<form class="container" role="form" action="<?= CLIENT_BASE_URL; ?>members?<?= $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <?php 
				$tittle_placeholder = "Select Sub-Committee";
                $id_name = "user_subcommittee";
            ?>
            <h6 class="font-italic card-title"><?= $tittle_placeholder; ?></h6>
            <?php
                $set_subcommittees = @$member['staff_subcommittees'];
                $subcommittees = $ccApi->committees($all=true, $account_id, $id=1, function($committees) use($ccApi, $account_id, $set_subcommittees) {
                    $at = '';
                    foreach ($committees as $key => $group) {
                        $group_id = $group['pdmg_id'];
                        $group_name = $group['pdmg_group'];
                        $at .= $ccApi->subcommittees($all=true, $account_id, $group_id, $id=1, function($subcommittees) use($group_name, $set_subcommittees) {
                            $sg = '';

                            $_set_subcommittees = $set_subcommittees;
                            $set_subcommittees = [];

                            foreach ($_set_subcommittees as $key => $set_subcommittee) {
                                if (!in_array($set_subcommittee['pdmms_subcommittee_id'], $set_subcommittees)) {
                                    array_push($set_subcommittees, $set_subcommittee['pdmms_subcommittee_id']);
                                }
                            }
        
                            foreach ($subcommittees as $key => $subgroup) {
                                $selected_subcommittees = (in_array($subgroup['pdmg_id'], $set_subcommittees)) ? "selected" : "";
                                $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$selected_subcommittees.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
                            }
                            return @$sg;
                        });
                    }
                    return @$at;
                });
                $input_value = '
                    <option value="">'.$tittle_placeholder.'</option>
                    '.$subcommittees.'
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
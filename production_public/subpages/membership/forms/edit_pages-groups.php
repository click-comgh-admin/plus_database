<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."membership/edit/groups");
        require_once 'edit_pages-groups - processing.php';
    }
?>
<form class="container" role="form" action="<?= CLIENT_BASE_URL; ?>members?<?= $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <?php 
				$tittle_placeholder = "Select $page";
				$id_name = "user_group";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_groups = @$member['member_groups'];
                $groups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($set_groups) {
                    $at = '';

                    $_set_groups = $set_groups;
                    $set_groups = [];

                    foreach ($_set_groups as $key => $set_group) {
                        if (!in_array($set_group['pdmmg_group_id'], $set_groups)) {
                            array_push($set_groups, $set_group['pdmmg_group_id']);
                        }
                    }

                    foreach ($groups as $group_key => $group) {
                        $selected_group = (in_array($group['pdmg_id'], $set_groups)) ? "selected" : "";
                        $at .= '<option value="'.$group['pdmg_id'].'" '.$selected_group.'>'.$group['pdmg_group'].'</option>'; 
                    }

                    return @$at;
                });
                $input_value = '
                    <option value="">'.$tittle_placeholder.'</option>
                    '.$groups.'
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
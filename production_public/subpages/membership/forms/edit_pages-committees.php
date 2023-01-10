<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."membership/edit/committees");
        require_once 'edit_pages-committees - processing.php';
    }
?>
<form class="container" role="form" action="<?= CLIENT_BASE_URL; ?>members?<?= $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <?php 
				$tittle_placeholder = "Select Committee";
				$id_name = "user_committee";
            ?>
            <h6 class="font-italic card-title"><?= $tittle_placeholder; ?></h6>
            <?php
                $set_committees = @$member['staff_committees'];
                $committees = $ccApi->committees($all=true, $account_id, $id=1, function($committees) use($set_committees) {
                    $at = '';

                    $_set_committees = $set_committees;
                    $set_committees = [];

                    foreach ($_set_committees as $key => $set_committee) {
                        if (!in_array($set_committee['pdmmc_committee_id'], $set_committees)) {
                            array_push($set_committees, $set_committee['pdmmc_committee_id']);
                        }
                    }

                    foreach ($committees as $committee_key => $committee) {
                        $selected_group = (in_array($committee['pdmg_id'], $set_committees)) ? "selected" : "";
                        $at .= '<option value="'.$committee['pdmg_id'].'" '.$selected_group.'>'.$committee['pdmg_group'].'</option>'; 
                    }

                    return @$at;
                });
                $input_value = '
                    <option value="">'.$tittle_placeholder.'</option>
                    '.$committees.'
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
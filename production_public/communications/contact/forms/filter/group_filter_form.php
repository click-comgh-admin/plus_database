<form class="container" role="form" action="<?= $page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php 
                $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Department": "Select Group";
                $id_name = "group_id";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = @(isset($_COOKIE[$id_name])) ? $_COOKIE[$id_name] : "";
                $selectedGroup = isset($_GET[$id_name]) ? $_GET[$id_name] : $input_value;
                $groupList = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($selectedGroup) {
                    $at = '';
                    foreach ($groups as $key => $group) {
                        $thisSelected = ((int)$group['pdmg_id'] == (int)$selectedGroup) ? "selected" : "";
                        $at .= '<option value="'.$group['pdmg_id'].'" '.$thisSelected.'>'.$group['pdmg_group'].'</option>';
                    }
                    return @$at;
                });
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
        <div class="col-lg-6 col-md-6"></div>
        <div class="col-lg-6 col-md-4">
            <button type="submit" class="btn btn-sm bg-grow-early text-light text-white font-weight-bold ">Search</button>
		</div>
	</div>
</form>

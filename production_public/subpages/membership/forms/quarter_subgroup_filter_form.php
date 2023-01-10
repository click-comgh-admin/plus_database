<form class="nav" role="form" action="<?= CLIENT_BASE_URL.$page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-6">
            <input type="hidden" name="subgroup" />
            <?php 
				$tittle_placeholder = "Select Gender";
				$id_name = "gender";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $gender_1_selected = @(isset($_GET['gender']) && @(int)$_GET['gender'] == 1) ? "selected": "";
                $gender_2_selected = @(isset($_GET['gender']) && @(int)$_GET['gender'] == 2) ? "selected": "";
				$input_value = '
					<option value="">All</option>
					<option value=1 '.$gender_1_selected.'>Male</option>
					<option value=2 '.$gender_2_selected.'>Female</option>
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6">
            <?php 
				$tittle_placeholder = "Select Satatus";
				$id_name = "status";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_status = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
                $active_status = $ccApi->active_status($all=true, $id=1, function($active_statuses) use($set_status) {
                    $at = '';
                    foreach ($active_statuses as $key => $active_status) {
                        $status_selected = @((int)$set_status == $active_status['pdd_id']) ? "selected": "";
                        $at .= '<option value="'.$active_status['pdd_id'].'" '.$status_selected.'>'.$active_status['pdd_info'].'</option>';
                    }
                    return @$at;
                });
                $input_value = '
                    <option value="">All</option>
                    '.$active_status.'
                ';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                     [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6">
            <?php 
				$tittle_placeholder = "Select subgroup";
				$id_name = "subgroup_id";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_subgroup = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
                $subgroups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($ccApi, $account_id, $set_subgroup) {
                    $at = '';
                    foreach ($groups as $key => $group) {
                        $group_id = $group['pdmg_id'];
                        $group_name = $group['pdmg_group'];
                        $at .= $ccApi->subgroups($all=true, $account_id, $group_id, $id=1, function($subgroups) use($group_name, $set_subgroup) {
                            $sg = '';
                            foreach ($subgroups as $key => $subgroup) {
                                $subgroup_selected = @((int)$set_subgroup == $subgroup['pdmg_id']) ? "selected": "";
                                $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$subgroup_selected.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
                            }
                            return @$sg;
                        });
                    }
                    return @$at;
                });
                
                $input_value = '
                    <option value="all">All</option>
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
        </div>
        <div class="col-lg-6">
            <?php 
				$tittle_placeholder = "Select Quarter";
				$id_name = "quarter";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $quarters = range(1, 4);
                $_quarters = '';
                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;

                foreach ($quarters as $key => $quarter) {
                    $quarter_selected = @((int)$input_value == (int)$quarter) ? "selected": "";
                    $_quarters .= '<option value="'.@$quarter.'" '.@$quarter_selected.'>Quarter '.@$quarter.'</option>';
                }
				$input_value = '
                    <option value="">'.$tittle_placeholder.'</option>
                    '.$_quarters.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 text-center mb-2">
            <a href="<?= CLIENT_BASE_URL.$page_reset; ?>"
                class="btn btn-sm bg-sunny-morning text-light text-white font-weight-bold">Reset</a>
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light text-white font-weight-bold">Filter</button>
        </div>
    </div>
</form>
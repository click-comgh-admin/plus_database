<form class="nav" role="form" action="<?= CLIENT_BASE_URL.$page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-4">
            <input type="hidden" name="group" />
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
        <div class="col-lg-4">
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
        <div class="col-lg-4">
            <?php 
				$tittle_placeholder = "Select Group";
				$id_name = "group_id";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_group = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
                $groups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($set_group) {
                    $at = '';
                    foreach ($groups as $key => $group) {
                        $group_selected = @((int)$set_group == $group['pdmg_id']) ? "selected": "";
                        $at .= '<option value="'.$group['pdmg_id'].'" '.$group_selected.'>'.$group['pdmg_group'].'</option>';
                    }
                    return @$at;
                });
                $input_value = '
                    <option value="all">All</option>
                    '.$groups.'
                ';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                     [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div><?php /* Below is New; */; ?>
        <div class="col-lg-6">
            <?php 
				$tittle_placeholder = "Select Registration Status ";
				$id_name = "reg_status";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_reg_status = (isset($_GET['reg_status'])) ? (int)$_GET['reg_status']: "all";
                
                $reg_statuses = [
                    ["id"=>1, "type"=>"Uncompleted"],
                    ["id"=>2, "type"=>"Completed"],
                ];
                $at = '';
                foreach ($reg_statuses as $key => $active_reg_status) {
                    $reg_status_selected = ($set_reg_status === (int)$active_reg_status['id']) ? "selected": "";
                    $at .= '<option value="'.$active_reg_status['id'].'" '.$reg_status_selected.'>'.$active_reg_status['type'].'</option>';
                }

                $input_value = '
                    <option value="all">All</option>
                    '.$at.'
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
        <div class="col-lg-12 col-md-12 text-center mb-2">
            <a href="<?= CLIENT_BASE_URL.$page_reset; ?>"
                class="btn btn-sm bg-sunny-morning text-light text-white font-weight-bold">Reset</a>
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light text-white font-weight-bold">Filter</button>
        </div>
    </div>
</form>
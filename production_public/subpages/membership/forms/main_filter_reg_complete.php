<form class="nav" role="form" action="<?= CLIENT_BASE_URL.$page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-6">
            <?php 
				$tittle_placeholder = "Filter By Registration Status";
            ?>
            <h6 class="fa font-weight-bold"><?= $tittle_placeholder; ?></h6>
        </div>
        <div class="col-lg-6">
            <?php 
				$tittle_placeholder = "Select Registration Status ";
				$id_name = "reg_status";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_reg_status = @(isset($_GET['reg_status'])) ? $_GET['reg_status']: "";
                
                $reg_statuses = [
                    ["id"=>0, "type"=>"Uncompleted"],
                    ["id"=>1, "type"=>"Completed"],
                ];
                $at = '';
                foreach ($reg_statuses as $key => $active_reg_status) {
                    $reg_status_selected = @((int)$set_reg_status == $active_reg_status['id']) ? "selected": "";
                    $at .= '<option value="'.$active_reg_status['id'].'" '.$reg_status_selected.'>'.$active_reg_status['type'].'</option>';
                }

                $input_value = '
                    <option value="">All</option>
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
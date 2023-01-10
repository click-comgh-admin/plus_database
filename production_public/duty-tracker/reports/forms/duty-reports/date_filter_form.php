<form class="container" role="form" action="<?= $page_url . "?" . $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <input type="hidden" name="duty_id" value="<?= isset($_GET["duty_id"])
            ? $_GET["duty_id"]: "all"; ?>" />
        <input type="hidden" name="member_id" value="<?= isset($_GET["member_id"])
            ? $_GET["member_id"]: "all"; ?>" />
        <div class="col-lg-6">
			<?php 
				$tittle_placeholder = "Start Date";
				$id_name = "start_date";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = @(isset($_COOKIE[$id_name])) ? $_COOKIE[$id_name] : null;
                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;

                $input_value = @(is_null($input_value)) ? $start_date : date("Y/m/d", strtotime(@$input_value));
                $input_value = 'value="'.$input_value.'"';
                        
                $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"datepicker-here " ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-6">
			<?php 
				$tittle_placeholder = "End Date";
				$id_name = "end_date";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = @(isset($_COOKIE[$id_name])) ? $_COOKIE[$id_name] : null;
                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;

                $input_value = @(is_null($input_value)) ? $end_date : date("Y/m/d", strtotime(@$input_value));
                $input_value = 'value="'.$input_value.'"';
                        
                $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"datepicker-here " ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 text-center">
            <a type="button" href="<?= $page_url . "?" . $_SERVER['QUERY_STRING']."&start_date=".$fiveDaysBefore; ?>"
                class="btn btn-sm bg-midnight-bloom text-light text-white font-weight-bold m-1">Reset Start Date</a>
            <a type="button" href="<?= $page_url . "?" . $_SERVER['QUERY_STRING']."&end_date=".$today; ?>"
                class="btn btn-sm bg-midnight-bloom text-light text-white font-weight-bold m-1">Reset End Date</a>
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light text-white font-weight-bold m-1">Filter</button>
        </div>
    </div>
</form>
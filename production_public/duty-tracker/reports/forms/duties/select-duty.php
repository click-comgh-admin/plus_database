<form role="form" action="<?= $page_url; ?>?<?= $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
			<?php 
				$tittle_placeholder = "Select Duty";
				$id_name = "show-duty";
			?>
			<h6></h6>
			<?php
                $currentDuty = isset($_GET['show-duty']) ? (int)$_GET['show-duty']: 0;
                $get_string = "duty-tracker/duties/all-duties?client_id=".AccountInfoId;
                $dutyList = $ccApi->fetch_from($get_string=$get_string, function($duties) use($currentDuty) {
                    $duties = isset($duties[0])? $duties: [];
                    $at = '';
					foreach ($duties as $key => $duty) {
                        $selected = ((int)$currentDuty === (int)$duty['pdt_id']) ? "selected": "";
						$at .= '<option value="'.$duty['pdt_id'].'" '.$selected.'>'.$duty['pdt_duty'].'</option>';
					}
					return @$at;
                }, $debug = false);
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$dutyList.'
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
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-6 col-md-8">
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Select Duty</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>

<form role="form" action="<?= $page_url; ?>?<?= $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
    <input type="hidden" name="show-duty" value="<?= isset($_GET['show-duty'])
        ? (int)$_GET['show-duty']: 0; ?>" />
        <div class="col-lg-12 col-md-12">
			<?php 
				$tittle_placeholder = "View Reports By";
				$id_name = "admin_report";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $__LIST__ = [
                    [ "id"=>0, "name"=>"Both Admin & Members", ],
                    [ "id"=>1, "name"=>"Admin Only", ],
                    [ "id"=>2, "name"=>"Members Only", ]
                ];
                $selectedItem = isset($_GET[$id_name]) ? (int)$_GET[$id_name] : "";

                $__ITEMS__ = "";
                foreach ($__LIST__ as $key => $_list_) {
                    $thisSelected = ((int)$_list_['id'] === $selectedItem) ? "selected" : "";
                    $__ITEMS__ .= '<option value="'.((int)$_list_['id']).'" '.$thisSelected.'>
                        '.$_list_['name'].'
                    </option>';
                }
				
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$__ITEMS__.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
		</div>
        <div class="col-lg-12 col-md-12 text-center">
            <a type="button" href="?show-duty=<?= isset($_GET['show-duty'])
                ? (int)$_GET['show-duty']: 0; ?>" 
                class="btn btn-sm bg-sunny-morning text-white font-weight-bold w-25">Reset</a>
            <button type="submit" 
                class="btn btn-sm bg-grow-early text-white font-weight-bold w-25">Filter</button>
		</div>
	</div>
</form>

<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));
?>
<form role="form" action="?verification" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="verification"; ?>
			<?php 
				$tittle_placeholder = "Select Member";
				$id_name = "identity";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" search_member_byname_for_list="'.$id_name.'" account_id="'.$account_id.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-8"></div>
        <div class="col-lg-6 col-md-4">
            <button type="submit" class="btn btn-sm btn-success text-light bg-grow-early btn-block font-weight-bold rounded-pill">Search</button>
		</div>
	</div>
</form>

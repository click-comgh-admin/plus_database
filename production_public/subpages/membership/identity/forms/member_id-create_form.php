<?php
    if (isset($_POST) && !empty($_POST) && isset($_POST['create'])) {
        define("POST_URL", API_BASE_URL."membership/identity/add");
        require_once 'member_id-create_form - processing.php';
    }
?>
<form role="form" action="<?= memberIds_BaseUrl; ?>" method="POST">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
			<?php 
				$tittle_placeholder = "Select Memebr";
				$id_name = "member_id";
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
        <div class="col-lg-12 col-md-12">
            <?php
				$tittle_placeholder = "Create New ID";
				$id_name = "member_identity";
			?>
			<h6></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8">
            <input type="hidden" name="create" />
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-6 col-md-8">
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Add</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>

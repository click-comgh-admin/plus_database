<?php
    if (isset($_POST) && !empty($_POST) && isset($_POST['create'])) {
        define("POST_URL", API_BASE_URL."client-membership/committee/add");
        require_once 'committee-create_form - processing.php';
    }
?>
<form role="form" action="<?= CLIENT_BASE_URL; ?>committees?<?= $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php
				$tittle_placeholder = "Create New Committee";
				$id_name = "group";
			?>
			<h6></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
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

<?php
    if (isset($_POST) && !empty($_POST)) {
        require_once 'forgot-password_form - processing.php';
    }
?>
<form role="form" action="<?= CLIENT_BASE_URL; ?>forgot-password" method="POST">
    <div class="row align-items-center justify-content-center">
		<div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-6 col-md-8">
            <h4 class="text-center">Reset Password</h4>
            <?php
				$tittle_placeholder = "Enter Your E-mail Address";
				$id_name = "email";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($_POST['email'])) ? $_POST['email'] : null;
                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"email" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-6 col-md-8">
            <button type="submit" class="btn btn-sm bg-warm-flame text-light btn-block">Reset</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-6 col-md-8">
			<hr class="mb-1 mt-3 shadow shadow-lg">
			<a href="<?= ClientBaseUrl; ?>login" class="icon-gradient bg-night-sky pull-right">login?</a>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>
<?php
    if (isset($_POST) && !empty($_POST)) {
        require_once 'login - processing.php';
    }
?>
<form role="form" action="<?= CLIENT_BASE_URL; ?>login" method="POST">
    <div class="row align-items-center justify-content-center">
		<div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-6 col-md-8">
            <h4 class="text-center">Enter Login Details</h4>
            <?php
				$tittle_placeholder = "Enter Your E-mail Address";
				$id_name = "email";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-night-sky text-success" ],
                    [ "name"=>"type", "value"=>"email" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-6 col-md-8">
            <?php
				$tittle_placeholder = "Enter Your Password";
				$id_name = "password";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" show-password="input" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--both.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-key icon-gradient bg-night-sky text-success" ],
                    [ "name"=>"icon_other", "value"=>"pe-7s-unlock icon-gradient bg-night-sky text-success" ],
                    [ "name"=>"icon_attributes__other", "value"=>'show-password="icon"' ],
                   	[ "name"=>"type", "value"=>"password" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block">Login</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-6 col-md-8">
			<hr class="mb-1 mt-3 shadow shadow-lg">
			<a href="<?= ClientBaseUrl; ?>forgot-password" class="icon-gradient bg-warm-flame pull-right">forgot-password?</a>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>
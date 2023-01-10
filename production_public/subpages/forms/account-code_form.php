<?php
    if (isset($_POST) && !empty($_POST)) {
        require_once 'account-code_form - processing.php';
    }
?>
<form role="form" action="<?= CLIENT_BASE_URL."account-code"; ?>" method="POST">
    <div class="row align-items-center justify-content-center">
		<div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-6 col-md-8">
            <h4 class="text-center">Set Account Code</h4>
            <?php
				$tittle_placeholder = "Enter Your Account Code";
				$id_name = "account_code";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($account_code['pdcc_code'])) ? $account_code['pdcc_code'] : null;
                $input_value = (isset($_POST['account_code'])) ? $_POST['account_code'] : $input_value;

                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-tools icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8">
        <input type="hidden" name="id" value="<?= (isset($account_code['pdcu_id'])) ? $account_code['pdcu_id'] : ""; ?>" />
        <input type="hidden" name="user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-6 col-md-8">
            <div account-code="status"></div><br/>
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Set New Code</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>

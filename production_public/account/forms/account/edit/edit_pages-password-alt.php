<form role="form" action="<?= API_BASE_URL; ?>client-membership/user/edit_password-alt" make-general-posts="Update Password">
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <?php 
				$tittle_placeholder = "Set Password";
				$id_name = "password";
			?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" show-password="input" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--both.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-key icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"icon_other", "value"=>"pe-7s-unlock icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"icon_attributes__other", "value"=>'show-password="icon"' ],
                    [ "name"=>"type", "value"=>"password" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-6">
            <?php 
				$tittle_placeholder = "Confirm Password";
				$id_name = "confirm_password";
			?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" show-password="input" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--both.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-key icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"icon_other", "value"=>"pe-7s-unlock icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"icon_attributes__other", "value"=>'show-password="icon"' ],
                    [ "name"=>"type", "value"=>"password" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                    <input type="hidden" name="user_id" value="<?= @$client_user['pdcu_id']; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit"
                        class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Password
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>
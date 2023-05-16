<?php
    global $UserLoginInfo_I;
    define("POST_URL", API_V2_BASE_URL."clients/account/".$UserLoginInfo_I->user->accountId);
    // print_r(['$UserLoginInfo_I'=> $UserLoginInfo_I->token]);
?>
<form class="container" role="form" action="<?= POST_URL; ?>" permissionKey="<?= base64_encode($UserLoginInfo_I->token ?? ""); ?>" method="POST" enctype="multipart/form-data"
    crop-upload-posts="Update Client Logo?">
    <div class="row justify-content-center">
        
        <div class="col-lg-12">
            <?php 
				$tittle_placeholder = "Upload Logo";
				$id_name = "profile_img";
			?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" accept=".jpg,.jpeg,.png,.gif" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" upload-preview-crop--input="profile-picture"';
	    		echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-photo icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"file" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>

        <div>
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="filename" value="<?= @$user_info['pdcu_profile_picture']; ?>" />
            <input type="hidden" name="photo-x" />
            <input type="hidden" name="photo-y" />
            <input type="hidden" name="photo-width" />
            <input type="hidden" name="photo-height" />
        </div>
        <div class="col-lg-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Upload Image</button>
        </div>
    </div>
</form>
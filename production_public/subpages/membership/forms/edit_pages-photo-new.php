<?php
    define("POST_URL", API_BASE_URL."membership/edit/photo-new");
    $fileName = "member.png";
    if (isset($member['pdm_profile_picture'])) {
        $profile_picture = (string)$member['pdm_profile_picture'];
        $profile_picture = explode('/', $profile_picture);
        $fileName = end($profile_picture);
    }
?>
<form class="container" role="form" action="<?= POST_URL; ?>" method="POST" enctype="multipart/form-data"
    make-general-posts="Update Member's Profile Picture?">
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <?php 
				$tittle_placeholder = "Upload Image";
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
            <input type="hidden" name="member_id" value="<?= $member_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="filename" value="<?= $fileName; ?>" />
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
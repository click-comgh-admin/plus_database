<form role="form" action="<?= API_BASE_URL."membership/identity/prefix_edit"; ?>" method="POST"
    make-general-posts="<?= $confirm_msg; ?> (<?= $prefix_name; ?>)">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php
				$tittle_placeholder = "Edit ID Prefix";
				$id_name = "id_prefix";
			?>
            <h6></h6>
            <?php
                $input_value = 'value="'.$prefix_name.'"';
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
            <input type="hidden" name="prefix_id" value="<?= $prefix_id; ?>" />
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-6 col-md-8">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Edit</button>
        </div>
        <div class="col-lg-3 col-md-8"></div>
    </div>
</form>
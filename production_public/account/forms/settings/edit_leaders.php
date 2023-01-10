<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "update_leaders") {
            define("POST_URL", API_BASE_URL."client-membership/update_client_leaders");
            require_once 'edit_leaders - processing.php';
        }
    }
?>
<form role="form" action="<?= settings_BaseUrl . "leaders?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="update_leaders" />
        <div class="col-md-12">
            <div class="">
            <h4>First Leader</h4>
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Name";
						$id_name = "leader_1_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader1_name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Phone";
						$id_name = "leader_1_phone";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader1_phone'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call  icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "E-mail";
						$id_name = "leader_1_email";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader1_email'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"email" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Designation/ Role";
						$id_name = "leader_1_designation_role";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $default = $account_infoLeaders['pdcl_leader1_role'];
						$designation = $ccApi->designation($all=true, $id=1, function($designations) use($default) {
							$at = '';
							foreach ($designations as $key => $designation) {
                                $selected = @((int)$default == (int)$designation['coc_leadership_id']) ? "selected" : "";
								$at .= '<option value="'.@$designation['coc_leadership_id'].'" '.$selected.'>'.@$designation['coc_leader'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$designation.'
							<option>Others</option>
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12" select-show="leader_1_designation_role">
					<?php 
						$tittle_placeholder = "Other Designation/ Role";
						$id_name = "other_leader_1_designation_role";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
			</div>
			<h4>Second Leader</h4>
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Name";
						$id_name = "leader_2_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader2_name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Phone";
						$id_name = "leader_2_phone";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader2_phone'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call  icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "E-mail";
						$id_name = "leader_2_email";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader2_email'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"email" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Designation/ Role";
						$id_name = "leader_2_designation_role";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $default = $account_infoLeaders['pdcl_leader2_role'];
						$designation = $ccApi->designation($all=true, $id=1, function($designations) use($default) {
							$at = '';
							foreach ($designations as $key => $designation) {
                                $selected = @((int)$default == (int)$designation['coc_leadership_id']) ? "selected" : "";
								$at .= '<option value="'.@$designation['coc_leadership_id'].'" '.$selected.'>'.@$designation['coc_leader'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$designation.'
							<option>Others</option>
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12" select-show="leader_2_designation_role">
					<?php 
						$tittle_placeholder = "Other Designation/ Role";
						$id_name = "other_leader_2_designation_role";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
			</div>
			<h4>Third Leader</h4>
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Name";
						$id_name = "leader_3_name";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader3_name'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Phone";
						$id_name = "leader_3_phone";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader3_phone'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" maxlength="10"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-call  icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"phone" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "E-mail";
						$id_name = "leader_3_email";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value="'.$account_infoLeaders['pdcl_leader3_email'].'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"fa fa-at icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"email" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12">
					<?php 
						$tittle_placeholder = "Designation/ Role";
						$id_name = "leader_3_designation_role";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $default = $account_infoLeaders['pdcl_leader3_role'];
						$designation = $ccApi->designation($all=true, $id=1, function($designations) use($default) {
							$at = '';
							foreach ($designations as $key => $designation) {
                                $selected = @((int)$default == (int)$designation['coc_leadership_id']) ? "selected" : "";
								$at .= '<option value="'.@$designation['coc_leadership_id'].'" '.$selected.'>'.@$designation['coc_leader'].'</option>';
							}
							return @$at;
						});
						$input_value = '
							<option value="">'.$tittle_placeholder.'</option>
							'.$designation.'
							<option>Others</option>
						';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
							[ "name"=>"input_attributes", "value"=>$input_attributes ],
							[ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-12 col-md-12" select-show="leader_3_designation_role">
					<?php 
						$tittle_placeholder = "Other Designation/ Role";
						$id_name = "other_leader_3_designation_role";
					?>
					<h6><?= $tittle_placeholder; ?></h6>
					<?php
                        $input_value = 'value=""';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-study icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
			</div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update</button>
                </div>
            </div>
        </div>
    </div>
    
</form>
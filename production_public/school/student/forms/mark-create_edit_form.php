<?php $random = rand(1, 90); ?>
<form role="form" class="container" action="<?= API_BASE_URL."school/clients/subject/mark"; ?>" method="POST"
    make-noswal-posts="Save Mark? <span class=text-white><?= $subject['pdsc_id'].$random; ?></span>" 
    make-noswal-posts--id="edit-<?= $subject['pdsc_id'].$random; ?>-mark">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-4 col-md-6">
            <?php 
                $tittle_placeholder = "Mark";
                $id_name = "mark";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($mark) && !empty($mark)) ? $mark[0]['pdsc_mark'] : null;
                $input_value = 'value="'.@$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-check icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-4 col-md-6">
            <?php 
                $tittle_placeholder = "Grade";
                $id_name = "grade";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($mark) && !empty($mark)) ? $mark[0]['pdsc_grade'] : null;
                $input_value = 'value="'.@$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-check icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-4 col-md-6">
            <?php 
                $tittle_placeholder = "Percentage";
                $id_name = "percentage";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($mark) && !empty($mark)) ? $mark[0]['pdsc_percentage'] : null;
                $input_value = 'value="'.@$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-check icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-4 col-md-6">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <?php
                if (isset($mark) && !empty($mark)) { ?>
                    <input type="hidden" name="mark_id" value="<?= @$mark[0]['pdsc_id']; ?>" />
                <?php }
            ?>
            <input type="hidden" name="student_subject_id" value="<?= $subject['pdsc_id']; ?>" />
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Save</button>
        </div>
        <div class="col-lg-12 col-md-12" make-noswal-posts--response="edit-<?= $subject['pdsc_id'].$random; ?>-mark"></div>
	</div>
</form>
<form role="form" action="<?= API_BASE_URL."school/clients/student/report/edit"; ?>" method="POST"
    make-general-posts="<?= $confirm_msg; ?> <span class=text-white><?= $report_id; ?></span>">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php 
                $tittle_placeholder = "Assessment Type";
                $id_name = "assessment_type_id";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $get_string = "assessment_types?client_id=$account_id";
                $assessment_type = $ccApi->school($get_string, function($assessment_type) use($report_assessment_type) {
                    $at = '';
                    foreach ($assessment_type as $key => $ass_type) {
                        $thisSelected = ((int)$ass_type['pdsc_id'] == (int)$report_assessment_type) ? "selected" : "";
                        $at .= '<option value="'.$ass_type['pdsc_id'].'" '.$thisSelected.'>'.$ass_type['pdsc_assessment_type'].'</option>';
                    }
                    return @$at;
                }, $debug = false);
                
                $input_value = '
                    <option value=""> --Select '.$tittle_placeholder.'-- </option>
                    '.$assessment_type.'
                ';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.$report_id.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php 
                $tittle_placeholder = "Position";
                $id_name = "position";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value="'.$report_position.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Remarks";
                $id_name = "remarks";
            ?>
            <?php
                $input_value = $report_remarks;
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6"';
                echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                    [ "name"=>"default_value", "value"=>$input_value ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-3 col-md-8">
            <input type="hidden" name="report_id" value="<?= $report_id; ?>" />
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-6 col-md-8">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Save Report</button>
        </div>
        <div class="col-lg-3 col-md-8"></div>
    </div>
</form>
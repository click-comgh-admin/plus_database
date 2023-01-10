<form role="form" action="<?= API_BASE_URL."school/clients/student/report/add"; ?>" method="POST"
    make-general-posts="Create Report?">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 col-md-6">
            <?php
                $tittle_placeholder = "Member";
                $id_name = "member_id";
                
                $get_string = "currentpage=1&rowsperpage=100000&client_id=$account_id";
                $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members)
                    use($encryptor, $id_name, $account_id, $ccApi) {
                    $members = @$members['data'];
                    $at = '';
                    $selectedMember = isset($_POST[$id_name]) ? $_POST[$id_name] : "";
                    $selectedMember = (int)$encryptor->decrypt($selectedMember);
                    if (!empty($members)) {
                        foreach ($members as $key => $member) {
                            $user_id = (int)$member['pdm_id'];
                            $thisSelected = ($user_id == $selectedMember) ? "selected" : "";
                            
                            $get_string = "student/index_number?client_id=$account_id&member_id=$user_id";
                            $index_number = $ccApi->school($get_string, function($index_numbers)
                            {
                                return @$index_numbers[0]['pdsc_index_number'];
                            }, $debug = false);

                            $at .= '<option value="'.$user_id.'" '.$thisSelected.'>
                                '.$member['pdm_firstname'].' '.$member['pdm_surname'].' :: '.$index_number.'
                            </option>';
                        }
                    }
                    return @$at;
                }, $debug = 0);
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = '
                    <option value="" > --Select '.@$tittle_placeholder.'-- </option>
                    '.@$client_members.'
                ';
                $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-6">
            <?php
                $tittle_placeholder = "Term";
                $id_name = "term_id";
                
                $get_string = "terms";
                $terms = $ccApi->school($get_string, function($terms) use($id_name) {
                    $at = '';
                    $selectedTerm = isset($_POST[$id_name]) ? $_POST[$id_name] : "";
                    if (!empty($terms)) {
                        foreach ($terms as $key => $term) {
                            $thisSelected = ((int)$term['pdsc_id'] == (int)$selectedTerm) ? "selected" : "";
                            $at .= '<option value="'.$term['pdsc_id'].'" '.$thisSelected.'>'.$term['pdsc_term'].'</option>';
                        }
                    }
                    return @$at;
                }, $debug = 0);
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = '
                    <option value=""> --Select Term-- </option>
                    '.@$terms.'
                ';
                $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-6">
            <?php 
                $tittle_placeholder = "Class";
                $id_name = "class_id";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $get_string = "class/classes?client_id=$account_id";
                $classList = $ccApi->school($get_string, function($classes)
                {
                    $at = '';
                    foreach ($classes as $key => $class) {
                        $at .= '<option value="'.$class['pdsc_id'].'">'.$class['pdsc_class'].'</option>';
                    }
                    return @$at;
                }, $debug = false);
                
                $input_value = '
                    <option value=""> --Select '.$tittle_placeholder.'-- </option>
                    '.$classList.'
                ';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-6">
            <?php 
                $tittle_placeholder = "Assessment Type";
                $id_name = "assessment_type_id";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $get_string = "assessment_types?client_id=$account_id";
                $assessment_type = $ccApi->school($get_string, function($assessment_type) use($id_name) {
                    $at = '';
                    $selectedTerm = isset($_POST[$id_name]) ? $_POST[$id_name] : "";
                    foreach ($assessment_type as $key => $ass_type) {
                        $thisSelected = ((int)$ass_type['pdsc_id'] == (int)$selectedTerm) ? "selected" : "";
                        $at .= '<option value="'.$ass_type['pdsc_id'].'" '.$thisSelected.'>'.$ass_type['pdsc_assessment_type'].'</option>';
                    }
                    return @$at;
                }, $debug = false);
                
                $input_value = '
                    <option value=""> --Select '.$tittle_placeholder.'-- </option>
                    '.$assessment_type.'
                ';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-6">
            <?php 
                $tittle_placeholder = "Date";
                $id_name = "date";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = @(isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                $input_value = @(is_null($input_value)) ? date("m/d/Y") : date("m/d/Y", strtotime(@$input_value));
                $input_value = 'value="'.$input_value.'"';
                        
                $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"datepicker-here " ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-6">
            <?php 
                $tittle_placeholder = "Year";
                $id_name = "year";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = @(isset($_COOKIE[$id_name])) ? $_COOKIE[$id_name] : null;
                $input_value = @(isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                $input_value = @(is_null($input_value)) ? date("Y") : @date("Y", strtotime("1/1/$input_value"));
                $years = range(((int)date("Y")-20), ((int)date("Y")+20));
                $_years = '';

                foreach ($years as $key => $year) {
                    $year_selected = @((int)$input_value == (int)$year) ? "selected": "";
                    $_years .= '<option value="'.@$year.'" '.@$year_selected.'>'.@$year.' => Year</option>';
                }
                
                $input_value = '
                    <option value=""> --Select '.$tittle_placeholder.' => Year-- </option>
                    '.$_years.'
                ';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-6">
            <?php 
                $tittle_placeholder = "Position";
                $id_name = "position";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                $input_value = 'value="'.@$input_value.'"';
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
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : "";

                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6"';
                echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                    [ "name"=>"default_value", "value"=>$input_value ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12 text-center">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Save Report</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>
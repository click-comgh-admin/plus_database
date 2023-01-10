<form role="form" action="<?= API_BASE_URL."school/clients/student/fees/add"; ?>" method="POST"
    make-general-posts="Upload Bill?">
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
                $tittle_placeholder = "Terms";
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
                    <option value="" > --Select Term-- </option>
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
                $tittle_placeholder = "Enter Fee";
                $id_name = "fee";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" accept="*" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-cash font-weight-bold fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-6">
            <?php 
                $tittle_placeholder = "Bill Attachment";
                $id_name = "bill_attachment";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" accept="*" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-file font-weight-bold fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"file" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php 
                $tittle_placeholder = "SMS Message";
                $id_name = "sms_message";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($_POST['sms_message'])) ? $_POST['sms_message'] : "";

                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.' 240 Characters Only:" rows="2" maxlength="240"';
                echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                    [ "name"=>"default_value", "value"=>$input_value ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php 
                $tittle_placeholder = "Note/ Remarks";
                $id_name = "message";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = (isset($_POST['message'])) ? $_POST['message'] : "";

                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="4"';
                echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                    [ "name"=>"default_value", "value"=>$input_value ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-6 col-md-8">
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Upload Bill</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>
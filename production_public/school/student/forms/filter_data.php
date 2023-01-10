<form role="form" class="my-1" action="<?= schoolStudent_BaseUrl . "?" . $_SERVER['QUERY_STRING']; ?>" method="GET" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <div class="col-md-2"></div>
        <div class="col-md-10">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6">
                    <?php
                        $tittle_placeholder = "Member";
                        $id_name = "member";
                        
                        $get_string = "currentpage=1&rowsperpage=100000&client_id=$account_id";
                        $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members)
                            use($encryptor, $id_name, $account_id, $ccApi) {
                            $members = @$members['data'];
                            $at = '';
                            $selectedMember = isset($_GET[$id_name]) ? $_GET[$id_name] : "";
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

                                    $user_id = $encryptor->encrypt($user_id);
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
                            <option value="all"> --Select '.@$tittle_placeholder.'-- </option>
                            <option value="all" >All</option>
                            '.@$client_members.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php 
                        $tittle_placeholder = "Class";
                        $id_name = "class";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $get_string = "class/classes?client_id=$account_id";
                        $input_value = isset($_GET[$id_name]) ? $_GET[$id_name] : "";
                        $classList = $ccApi->school($get_string, function($classes) use($input_value)
                        {
                            $at = '';
                            foreach ($classes as $key => $class) {
                                $selectedClass = ((int)$class['pdsc_id'] == (int)$input_value) ? "selected" : "";
                                $at .= '<option value="'.$class['pdsc_id'].'" '.$selectedClass.'>'.$class['pdsc_class'].'</option>';
                            }
                            return @$at;
                        }, $debug = false);
                        
                        $input_value = '
                            <option value="all"> --Select '.$tittle_placeholder.'-- </option>
                            <option value="all" >All</option>
                            '.$classList.'
                        ';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php 
                        $tittle_placeholder = "Year";
                        $id_name = "years";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = @(isset($_COOKIE[$id_name])) ? $_COOKIE[$id_name] : null;
                        $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;

                        $input_value = @(is_null($input_value)) ? date("Y") : @date("Y", strtotime("1/1/$input_value"));
                        $years = range(((int)date("Y")-20), ((int)date("Y")+20));
                        $_years = '';

                        foreach ($years as $key => $year) {
                            $year_selected = @((int)$input_value == (int)$year) ? "selected": "";
                            $_years .= '<option value="'.@$year.'" '.@$year_selected.'>'.@$year.' => Year</option>';
                        }
                        
                        $input_value = '
                            <option value="all"> --Select '.$tittle_placeholder.' => Year-- </option>
                            '.$_years.'
                        ';
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-9">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 text-center">
                    <button type="submit"
                        class="btn btn-sm bg-grow-early text-light text-white font-weight-bold">Filter</button>
                    <a href="<?= schoolStudent_BaseUrl; ?>"
                        class="btn btn-sm bg-sunny-morning text-light text-white font-weight-bold">Reset</a>
                </div>
            </div>
        </div>
    </div>
    
</form>
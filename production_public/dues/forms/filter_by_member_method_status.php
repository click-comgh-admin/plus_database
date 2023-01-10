<form role="form" class="my-1" action="<?= dues_BaseUrl . "records?" . $_SERVER['QUERY_STRING']; ?>" method="GET" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="dues" value="<?= $_GET['dues']; ?>" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6">
                    <?php
                        $tittle_placeholder = "Payment Method";
                        $id_name = "payment_method";

                        $input_value = @(isset($_COOKIE[$id_name])) ? $_COOKIE[$id_name] : null;
                        $input_value = (isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;
                        
                        $get_string = "payment_methods";
                        $payment_methods = $ccApi->dues($get_string, function($payment_methods) use($input_value) {
                            $at = '';
                            foreach ($payment_methods as $key => $payment_method) {
                                $payment_method_selected = @((int)$input_value == $payment_method['pddt_id']) ? "selected": "";
                                $at .= '<option value="'.$payment_method['pddt_id'].'" '.$payment_method_selected.'>'.$payment_method['pddt_method'].'</option>';
                            }
                            return @$at;
                        });
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="" >'.@$tittle_placeholder.'</option>
                            <option value="all" '.((strtolower($input_value)=="all") ? "selected": "").'>All</option>
                            '.$payment_methods.'
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
                        $tittle_placeholder = "Payment Status";
                        $id_name = "payment_status";

                        $input_value = @(isset($_COOKIE[$id_name])) ? $_COOKIE[$id_name] : null;
                        $input_value = (isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;
                        
                        $get_string = "payment_statuses";
                        $payment_statuses = $ccApi->dues($get_string, function($payment_statuses) use($input_value) {
                            $at = '';
                            foreach ($payment_statuses as $key => $payment_status) {
                                $payment_status_selected = @((int)$input_value == $payment_status['pddt_id']) ? "selected": "";
                                $at .= '<option value="'.$payment_status['pddt_id'].'" '.$payment_status_selected.'>'.$payment_status['pddt_status'].'</option>';
                            }
                            return @$at;
                        });
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = '
                            <option value="" >'.@$tittle_placeholder.'</option>
                            <option value="all" '.((strtolower($input_value)=="all") ? "selected": "").'>All</option>
                            '.$payment_statuses.'
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
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <button type="submit"
                        class="btn btn-sm bg-grow-early text-light btn-block text-white font-weight-bold">Filter</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

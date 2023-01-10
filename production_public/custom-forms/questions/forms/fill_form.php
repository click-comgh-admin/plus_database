<div class="container">
    <?php
        if (isset($_POST) && !empty($_POST)) {
            define("POST_URL", API_BASE_URL."custom-form/clients/data/add");
            require_once 'fill_form - processing.php';
        }
    ?>
</div>
<form role="form" action="<?= API_BASE_URL."custom-form/clients/data/add"; ?>" method="POST" enctype="multipart/form-data" make-general-posts="Submit Response?">
<!-- <form role="form" action="<?= customForms_BaseUrl . "questions/custom-form?" . $_SERVER['QUERY_STRING']; ?>" method="POST" enctype="multipart/form-data"> -->
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="row justify-content-center">
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
                            $selectedMember = (int)$selectedMember;
                            if (!empty($members)) {
                                foreach ($members as $key => $member) {
                                    $user_id = (int)$member['pdm_id'];
                                    $thisSelected = ($user_id == $selectedMember) ? "selected" : "";

                                    $at .= '<option value="'.$user_id.'" '.$thisSelected.'>
                                        '.$member['pdm_firstname'].' '.$member['pdm_surname'].'
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
                            [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <?php
                    foreach ($questions as $question_key => $question) {
                        $get_string = "question/responses?client_id=$account_id&question_id=".$question['pdcqq_id'];
                        $responses = $ccApi->custom_form($get_string, function($responses)
                        {
                            return @$responses;
                        }, $debug = false);

                        $options = [];
                        foreach ($responses as $response_key => $response) {
                            $option = ["id"=>$response['pdcqq_id'], "name"=>$response['pdcqq_response']];
                            if (!in_array($option, $options)) {
                                array_push($options, $option);
                            }
                        }
                        $cf->options = $options; ?>
                        <div class="col-lg-6 col-md-6">
                            <?= $cf->makeInput($question['pdcqq_question'], $question['pdcqq_type']); ?>
                        </div>
                    <?php }
                ?>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="form_id" value="<?= $_GET['form']; ?>" />
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Submit</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

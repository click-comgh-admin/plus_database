<?php
    namespace ContactBankAgent;

    class ContactBankAgent
    {
        public $data = [];
        public $user_id;
        public $encryptor;
        public $assigned_group = [];
        private $assign_group;

        public function __construct(bool $assign_group = false) {
            $this->assign_group = $assign_group;
        }

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-warning p-0 mb-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        public function main_content(int $account_id = 0, $account_status, $tf, $ccApi)
        { ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <?php
                    if ((bool)$this->assign_group === true) { ?>
                        <div class="row justify-content-center">
                            <?= $this->header("Select Groups to Assign to Agent."); ?>
                            <div class="col-lg-12 col-md-12">
                                <?php
                                    $tittle_placeholder = "Select Groups to Assign to Agent";
                                    $id_name = "assign_group_to_agent";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $get_string = "communications/clients/contact/access-code?account_id=" . AccountInfoId . "&user=" . $this->user_id;
                                    $access_code = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                        return (isset($access_code[0]))? $access_code[0]['pdccac_id']: 0;
                                    }, $debug=false);
                                    if ((bool)MyAppAccess['unlimited'] === true) {
                                        $get_string = "communications/clients/contact/groups?account_id=" . AccountInfoId;
                                        $groups = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                            return $access_code;
                                        }, $debug=false);
                                    } else {
                                        $get_string = "communications/clients/contact/group?account_id=" . AccountInfoId . "&code=" . $access_code;
                                        $groups = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                            return $access_code;
                                        }, $debug=false);
                                    }

                                    $assigned_group = [];

                                    foreach ($this->assigned_group as $key => $group) {
                                        if (!in_array($group['pdccag_group_id'], $assigned_group)) {
                                            array_push($assigned_group, $group['pdccag_group_id']);
                                        }
                                    }

                                    $agent_groups = '';
                                    if (isset($groups[0])) {
                                        foreach ($groups as $key => $group) {
                                            $group_id = (int)$group['pdccc_id'];
                                            $thisSelected = in_array($group_id, $assigned_group) ? "selected" : "";
                            
                                            $agent_groups .= '<option value="'.$group_id.'" '.$thisSelected.'>
                                                '.$group['pdccc_name'].'
                                            </option>';
                                        }
                                    }
                                    
                                    $input_value = '
                                        <option value="">'.$tittle_placeholder.'</option>
                                        '.$agent_groups.'
                                    ';
                                    $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple=""';
                                    echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                        [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                        [ "name"=>"options", "value"=>$input_value ],
                                    ]);
                                ?>
                            </div>
                        </div>
                    <?php } else { ?>
                        <div class="row justify-content-center">
                            <?= $this->header("Select Member to Assign as Agent."); ?>
                            <div class="col-lg-4 col-md-6">
                                <?php
                                    $tittle_placeholder = "Select Member to Assign as Agent";
                                    $id_name = "assign_as_agent";
                                ?>
                                <h6><?= $tittle_placeholder; ?></h6>
                                <?php
                                    $get_string = "currentpage=1&rowsperpage=100000&client_id=$account_id";
                                    $encryptor = $this->encryptor;
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
                                
                                                $at .= '<option value="'.$user_id.'" '.$thisSelected.'>
                                                    '.$member['pdm_firstname'].' '.$member['pdm_surname'].'
                                                </option>';
                                            }
                                        }
                                        return @$at;
                                    }, $debug = 0);
                                    
                                    $input_value = '
                                        <option value="">'.$tittle_placeholder.'</option>
                                        '.$client_members.'
                                    ';
                                    $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                                    echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                        [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                        [ "name"=>"options", "value"=>$input_value ],
                                    ]);
                                ?>
                            </div>
                        </div>
                    <?php }
                ?>
            </div>
        <?php }
    }
?>
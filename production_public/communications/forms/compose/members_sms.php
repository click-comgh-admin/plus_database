<form role="form" action="<?= API_BASE_URL."communications/clients/mailer/members/sms"; ?>" method="POST"
    make-general-posts="Send SMS?">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-5">
                    <?php
                        $tittle_placeholder = "Select Recipient(s) Type";
                        $id_name = "contact_type";
                    ?>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            <option value="1">Members</option>
                            <option value="2">Member Groups</option>
                            <option value="3">Member Sub-Groups</option>
                            <option value="4">Registration Status</option>
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'_sms" select_show_type="members" acc_id="'.$account_id.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type_sms" select-show-alt--1="contact_type_sms">
                    <?php
                        $tittle_placeholder = "Select Member(s)";
                        $id_name = "members";
                    ?>
                    <?php
                        $_contacts = '';
                        foreach ($client_members as $contact_key => $contact) {
                            $_contacts .= "<option value='".$contact['pdm_id']."'>".$contact['pdm_firstname']." ".$contact['pdm_surname']."</option>";
                        }
                        $input_value = '
                            <option value="" selected>'.@$tittle_placeholder.'</option>
                            <option value="all">All</option>
                            '.$_contacts.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'_sms" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type_sms" select-show-alt--2="contact_type_sms">
                    <?php
                        $tittle_placeholder = "Select Group(s)";
                        $id_name = "groups";
                    ?>
                    <?php
                        $_groups = '';
                        foreach ($groups as $group_key => $group) {
                            $_groups .= "<option value='".$group['pdmg_id']."'>".$group['pdmg_group']."</option>";
                        }
                        $input_value = '
                            <option value="" selected>'.@$tittle_placeholder.'</option>
                            <option value="all">All</option>
                            '.$_groups.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'_sms" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type_sms" select-show-alt--3="contact_type_sms">
                    <?php
                        $tittle_placeholder = "Select Sub-Group(s)";
                        $id_name = "subgroups";
                    ?>
                    <?php
                        $_subgroups = '';
                        foreach ($subgroups as $group_key => $subgroup) {
                            $sgs = $subgroup['data'];
                            $group_name = $subgroup['group'];

                            foreach ($sgs as $key => $sg) {
                                $_subgroups .= "<option value='".$sg['pdmg_id']."'>".$group_name." => ".$sg['pdmg_subgroup']."</option>";
                            }
                        }
                        $input_value = '
                            <option value="" selected>'.@$tittle_placeholder.'</option>
                            <option value="all">All</option>
                            '.$_subgroups.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'_sms" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type_sms" select-show-alt--4="contact_type_sms">
                    <?php
                        $tittle_placeholder = "Select Registration Status";
                        $id_name = "reg_status";
                    ?>
                    <?php
                        $reg_statuses = [
                            ["id"=>0, "type"=>"Uncompleted"],
                            ["id"=>1, "type"=>"Completed"],
                        ];
                        $at = '';
                        foreach ($reg_statuses as $key => $active_reg_status) {
                            $at .= '<option value="'.$active_reg_status['id'].'" >'.$active_reg_status['type'].'</option>';
                        }
                        $input_value = '
                            <option value="" selected>'.@$tittle_placeholder.'</option>
                            '.$at.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'_sms"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php
                    
                        $account_sms_id = $ccApi->account_sms_id($all="id", $id=$account_id, function ($account_sms_ids) {
                            return @$account_sms_ids[0];
                        });
                        function make_sms_id($account_name)
                        {
                            $an_parts = explode(" ", $account_name);

                            if (isset($an_parts[1])) {
                                $part_1 = $an_parts[0];
                                $part_2 = $an_parts[1];
                                return substr($part_1, 0, 5)."-".substr($part_2, 0, 5);
                            } else {
                                return substr($account_name, 0, 10);
                            }
                        }
                    ?>
                    <?php
                        $tittle_placeholder = "Enter Your SMS ID";
                        $id_name = "account_sms_id";
                    ?>
                    <?php
                        $input_value = (isset($account_sms_id['pdcc_sms_id'])) ? $account_sms_id['pdcc_sms_id'] : make_sms_id($account_info['pdc_name']);
                        $input_value = (isset($_POST['account_sms_id'])) ? $_POST['account_sms_id'] : $input_value;

                        $input_value = 'value="'.$input_value.'"';
                        $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-tools icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Subject";
                $id_name = "subject";
            ?>
            <?php
                $input_value = (isset($_POST['subject'])) ? $_POST['subject'] : null;

                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"fa fa-heading fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Message";
                $id_name = "message";
            ?>
            <?php
                $input_value = (isset($_POST['message'])) ? $_POST['message'] : "";

                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6"';
                echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                    [ "name"=>"default_value", "value"=>$input_value ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
            <p class="fa pull-right card" style="padding: 3px; font-weight: bold;"><span characters-remaining="<?= $id_name; ?>"></span></p>
        </div>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <select name="mAttachment[]" class="no-select2 d-none" multiple="true"></select>
        </div>
        <div class="col-lg-12 col-md-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Send Message</button>
        </div>
    </div>
</form>
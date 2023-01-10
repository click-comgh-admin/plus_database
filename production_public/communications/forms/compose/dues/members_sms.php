<form role="form" action="<?= API_BASE_URL."communications/clients/mailer/members/dues/sms"; ?>" method="POST"
    make-general-posts="Send SMS?">
    <div class="row justify-content-center">
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
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Subject";
                $id_name = "subject";
            ?>
            <?php
                $input_value = (empty($absentee)) ? null : $absentee['pdad_followup_subject'];
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

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
                $input_value = (empty($absentee)) ? "" : $absentee['pdad_followup'];
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

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
            <input type="hidden" name="date" value="<?= $get_date; ?>" />
            <input type="hidden" name="year" value="<?= $get_year; ?>" />
            <?php
                foreach ($message_members as $key => $message_member) { ?>
                    <input type="hidden" name="member_id[]" value="<?= $message_member['pdm_id']; ?>" />
                <?php }
            ?>
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="due_id" value="<?= $_GET['dues']; ?>" />
            <select name="mAttachment[]" class="no-select2 d-none" multiple="true"></select>
        </div>
        <div class="col-lg-12 col-md-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Send Message</button>
        </div>
    </div>

</form>
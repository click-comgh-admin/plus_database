<form upload_file="multiple" method="POST"  old-action="<?= API_BASE_URL."communications/clients/attachments/"; ?>" 
    action="<?= API_BASE_URL."mail-attachment/"; ?>"
    email-post-attachments="true" enctype="multipart/form-data">
    <div class="col-md-12 card mb-3 shadow shadow-lg">
        <label>Attach Media [<small class="text-warning">Select multiple attachments if neccessary</small>]: </label>
        <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12">
                <?php
                    $tittle_placeholder = "Add Attachment";
                    $id_name = "attachments";
                ?>
                <?php
                    $input_value = 'value=""';
                    $input_attributes = ''.$input_value.' name="'.$id_name.'[]" accept=".doc,.docx,.xls,.xlsx,.pdf,.mp4,.mp3,.jpg,.jpeg,.png,.gif" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" multiple="true"';
                    echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                        [ "name"=>"icon", "value"=>"pe-7s-file icon-gradient bg-warm-flame text-success" ],
                        [ "name"=>"type", "value"=>"file" ],
                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    ]);
                ?>
            </div>
        </div>
        <input type="hidden" value="" name="file" />
        <input type="hidden" value="" name="file_extention" />
        <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
        <input type="hidden" name="file_api_location" id="file_api_location" value="<?= FILE_BUCKET_BASE_URL; ?>files/" />
        <label>[<small class="text-warning"> word, pdf, excel, MP4, MP3, Jpg, Png, Gif </small>]: </label>
    </div>
    <div myProgress style="display: none;" class="my-2">
        <div myBar>0</div>
    </div>
</form>
<form role="form" action="<?= API_BASE_URL."communications/clients/mailer/email"; ?>" method="POST"
    make-general-posts="Send Email?">
    <div class="row justify-content-center">
        <div upload_file="display" class="w-100"></div>
        <div class="col-lg-12 col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-5">
                    <?php
                        $tittle_placeholder = "Select Contact Type";
                        $id_name = "contact_type";
                    ?>
                    <?php
                        $input_value = '
                            <option value="">'.@$tittle_placeholder.'</option>
                            <option value="1">Contact Book</option>
                            <option value="2">Contact Group</option>
                            <option value="3">New Contact</option>
                        ';
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" select_show_type="contacts" acc_id="'.$account_id.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type" select-show-alt--1="contact_type">
                    <?php
                        $tittle_placeholder = "Select Contact(s)";
                        $id_name = "contacts";
                    ?>
                    <?php
                        $_contacts = '';
                        foreach ($contacts as $contact_key => $contact) {
                            $_contacts .= "<option value='".$contact['pdccc_id']."'>".$contact['pdccc_name']."</option>";
                        }
                        $input_value = '
                            <option value="" selected>'.@$tittle_placeholder.'</option>
                            <option value="all">All</option>
                            '.$_contacts.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type" select-show-alt--2="contact_type">
                    <?php
                        $tittle_placeholder = "Select Group(s)";
                        $id_name = "groups";
                    ?>
                    <?php
                        $_groups = '';
                        foreach ($groups as $group_key => $group) {
                            $_groups .= "<option value='".$group['pdccc_id']."'>".$group['pdccc_name']."</option>";
                        }
                        $input_value = '
                            <option value="" selected>'.@$tittle_placeholder.'</option>
                            <option value="all">All</option>
                            '.$_groups.'
                        ';
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type" select-show-alt--3="contact_type">
                    <?php
                        $tittle_placeholder = "To: (Enter Phone Number(s))";
                        $id_name = "new_contacts";
                    ?>
                    <?php
                        $input_value = (isset($_POST['contacts'])) ? $_POST['contacts'] : "";

                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="4"';
                        echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-6 col-md-6">
                    <?php
                    
                        $account_sms_id = $ccApi->account_sms_id($all="id", $id=$account_id, function ($account_sms_ids) {
                            return @$account_sms_ids[0];
                        });
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
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" ';
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
                $tittle_placeholder = "Recipient SMS Alert [100 characters]:";
                $id_name = "mIntro";
            ?>
            <?php
                $input_value = (isset($_POST['mIntro'])) ? $_POST['mIntro'] : null;

                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" maxlength="90" ';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"fa fa-info fa-1x icon-gradient bg-warm-flame text-success" ],
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
<form upload_file="multiple" method="POST" action="<?= API_BASE_URL."communications/clients/attachments/"; ?>"
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
<form role="form" action="<?= API_BASE_URL."communications/clients/mailer/peers/email"; ?>" method="POST"
    make-general-posts="Send Email?">
    <div class="row justify-content-center">
        <div upload_file="display" class="w-100"></div>
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Select Recipient(s)";
                $id_name = "recipients";
            ?>
            <?php
                $_contacts = '';
                foreach ($all_client_users as $contact_key => $contact) {
                    $_contacts .= "<option value='".$contact['pdcu_id']."'>".$contact['pdcu_firstname']." ".$contact['pdcu_surname']."</option>";
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
                $tittle_placeholder = "Message";
                $id_name = "message";
            ?>
            <?php
                $input_value = (isset($_POST['message'])) ? $_POST['message'] : "";

                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="6" awesome_text_box';
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
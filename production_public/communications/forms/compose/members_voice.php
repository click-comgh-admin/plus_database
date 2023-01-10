<form role="form" action="<?= API_BASE_URL."communications/clients/mailer/members/voice"; ?>" method="POST"
    enctype="multipart/form-data" make-general-posts--voice="Send Voice Alert?">
<!-- <form role="form" action="<?= API_BASE_URL."communications/clients/mailer/members/voice"; ?>" method="POST" -->
    <!-- enctype="multipart/form-data" make-general-posts="Send Voice Alert?"> -->
    <?php $ALLOW_AUDIO_RECORDING = true; ?>
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
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'_voice" select_show_type="members" acc_id="'.$account_id.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type_voice" select-show-alt--1="contact_type_voice">
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
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'_voice" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type_voice" select-show-alt--2="contact_type_voice">
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
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'_voice" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type_voice" select-show-alt--3="contact_type_voice">
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
                        $input_attributes = 'name="'.@$id_name.'[]" id="'.@$id_name.'_voice" multiple="true"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-7 col-md-7" select-show="contact_type_voice" select-show-alt--4="contact_type_voice">
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
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'_voice"';
                        echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-user fa-1x icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            [ "name"=>"options", "value"=>$input_value ],
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
        </div> <?php /*
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Message";
                $id_name = "message";
            ?>
            <?php
                $input_value = (isset($_POST['message'])) ? $_POST['message'] : "";

                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="4"';
                echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                    [ "name"=>"default_value", "value"=>$input_value ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div> */ ?>
        <div class="col-lg-12 col-md-12 my-2">
            <?php
                $tittle_placeholder = "Record Voice Message";
                $id_name = "voice_audio";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <div id="recorder_1">
            <?php
                use AudioRecorder\AudioRecorder;
                $aR = new AudioRecorder();
                echo $aR->show();
            ?>
                <!-- <h5 class="h5 fa">Preview</h5> -->
                <!-- <div class="btn-group-sm nav btn-group" role="group">
                    <button class="btn-shadow btn-sm btn btn-danger p-0 record_container" style="width: 80%" type="button">
                        <audio id="recording" class="recording container" style="height: 35px; margin: -12px 0;" controls></audio>
                        <audio id="preview" class="preview container" style="height: 35px; margin: -12px 0;" autoplay muted controls="true"></audio>
                        <div id="recorder_log" class="recorder_log"></div>
                    </button>
                    <button class="btn-shadow btn btn-danger startButton" type="button" style="width:50px">
                        <span class="shadow">
                            <span class="fa fa-play icon-gradient bg-happy-green fa-1x my-2"></span>
                        </span>
                    </button>
                    <button class="btn-shadow btn btn-danger stopButton" type="button" style="width:50px">
                        <span class="shadow">
                            <span class="fa fa-stop icon-gradient bg-sunny-morning fa-1x my-2"></span>
                        </span>
                    </button>
                </div>
                 -->
                <!-- <div>
                    <button id="startButton" class="startButton btn btn-success btn-sm" type="button">
                        Start
                    </button>
                    <button id="stopButton" class="stopButton btn btn-warning btn-sm" type="button">
                        Stop
                    </button>
                </div> -->
                
                <!-- <a id="downloadButton" class="downloadButton button fa fa-download">
                    Download
                </a> -->
            </div>
        </div>
        <?php /*
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Select Voice Message";
                $id_name = "voice_audio";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" accept=".mp3" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-volume font-weight-bold fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"file" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
            <ul class="d-block text-warning">
                <li class="nav-item">You can only send .mp3</li>
                <li class="nav-item">File size should be less than 20mb</li>
                <li class="nav-item">Audio Duration: 1:15 sec maximum</li>
                <li class="nav-item">File size should be less than 20mb</li>
                <li class="nav-item">Maximum Contacts: 1000 per a blast</li>
            </ul>
        </div> */ ?>
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
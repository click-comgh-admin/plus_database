<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));

    define("memberIdPrefix_BaseUrl", CLIENT_BASE_URL."members?member-id-prefix");
                                
    $get_string = "id_prefix?client_id=$account_id";
    $id_prefix = $ccApi->membership($get_string, function ($id_prefix) {
        return @$id_prefix;
    }, $debug = false);

    function edit_btn($identityInfo, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
        <button class="<?= $class; ?>" type="button" data-toggle="modal"
            open-modal--id="edit_class-<?= $identityInfo['pdm_id']; ?>-<?= $type; ?>"
            open-modal--title="Edit ID Prefix" open-modal--html='<?php 
                $prefix_id = $identityInfo['pdm_id']; 
                $prefix_name = $identityInfo['pdm_id_prefix']; 
                require 'identity/forms/id_prefix-edit_form.php'; 
            ?>' open-modal--buttons='
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            '>
            <span class="pe-7s-edit"></span>
            <span class="d-none d-sm-block">Edit</span>
        </button>
    <?php }
                            
    function show_info_btn($identityInfo, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
        <button class="<?= $class; ?>" type="button" data-toggle="modal"
            open-modal--id="info_class-<?= $identityInfo['pdm_id']; ?>" open-modal--title="Member ID Info"
            open-modal--html='<?php 
                $created_by = !empty($identityInfo['pdm_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                $date = date('Y/ m/ d', strtotime(@$identityInfo['_date_']));
                $timeAgo = !empty($identityInfo) ? @$TimeAgo->get(): "-";
                            
                $updated_by = !empty($identityInfo['pdm_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                $updated_date = date('Y/ m/ d', strtotime(@$identityInfo['_update_date_']));
                $updated_timeAgo = !empty($identityInfo) ? @$updated_TimeAgo->get(): "-";
                            
                show_info(
                    $created_by = $created_by, $date = $date, $timeAgo = $timeAgo,
                    $updated_by = $updated_by, $updated_date = $updated_date,
                    $updated_timeAgo = $updated_timeAgo
                ); 
            ?>' open-modal--buttons='
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            '>
            <span class="pe-7s-info"></span>
            <span class="d-none d-sm-block">Info</span>
        </button>
    <?php }
                            
    function show_info($created_by, $date, $timeAgo, $updated_by, $updated_date, $updated_timeAgo) { ?>
        <table class="align-middle mb-1 table table-bor derless table-striped table-hover">
            <tbody>
                <tr>
                    <th>Created By</th>
                    <td><?= $created_by; ?></td>
                </tr>
                <tr>
                    <th>Creation Time</th>
                    <td>
                        <u>
                            <?= $date; ?>
                        </u>
                        <br class="m-0" />
                        <i><?= $timeAgo; ?></i>
                    </td>
                </tr>
            </tbody class="my-1">
        </table>
        <table class="align-middle mt-1 mb-0 table table-bor derless table-striped table-hover">
            <tbody>
                <tr>
                    <th>Updated By</th>
                    <td><?= $updated_by; ?></td>
                </tr>
                <tr>
                    <th>Updated Time</th>
                    <td>
                        <u>
                            <?= $updated_date; ?>
                        </u>
                        <br class="m-0" />
                        <i><?= $updated_timeAgo; ?></i>
                    </td>
                </tr>
            </tbody>
        </table>
    <?php }
                            
    function delete_btn($member_id_id, $account_id, $user_id, $class) { ?>
        <button class="<?= $class; ?>"
            btn-submit-post=<?= json_encode(["identity_id"=>$member_id_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
            btn-submit-post--confirm="Delete ID Prefix?"
            btn-submit-post--url="<?= API_BASE_URL."membership/identity/prefix_delete"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="d-none d-sm-block">Delete</span>
        </button>
    <?php }
?>
<div class="row justify-content-center">
    <?php
        if (!isset($id_prefix[0]['pdm_id'])) { ?>
            <div class="col-sm-12 col-md-5 col-lg-4">
                <div class="main-card mb-3 card shadow">
                    <div class="card-body">
                        <h5 class="card-title">Create ID Prefix</h5>
                        <?php require 'identity/forms/id_prefix-create_form.php'; ?>
                    </div>
                </div>
            </div>
        <?php }
    ?>
    <div class="col-sm-12 col-md-7 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <div class="card-body">
                <h5 class="card-title">ID Prefix</h5>
                <div class="d-none d-lg-block table-responsive">
                    <table
                        class="align-middle mb-0 table table-bor derless table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style="white-space: nowrap;">ID Prefix</th>
                                <th style="white-space: nowrap;" class="text-center">Actions</th>
                                <th style="white-space: nowrap;">By</th>
                                <th style="white-space: nowrap;">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach ($id_prefix as $key => $_mid_) { 
                                    if (!empty($_mid_)) {
                                        $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$_mid_['_date_'])));

                                        $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$_mid_['pdm_created_by'],
                                        function ($info) {
                                            return @$info[0];
                                        });

                                        $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$_mid_['_update_date_'])));

                                        $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$_mid_['pdm_updated_by'],
                                        function ($info) {
                                            return @$info[0];
                                        });
                                    } ?>
                                    <tr>
                                        <th><?= (int)$key + 1; ?></th>
                                        <td style="white-space: nowrap;">
                                            <?= $_mid_['pdm_id_prefix']; ?>
                                        </td>
                                        <td style="white-space: nowrap;" class="text-center">
                                            <?= edit_btn($_mid_, $account_id, $user_id, "Edit ID Prefix", "ml-2 p-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                            <?php 
                                                $member_id_id = $_mid_['pdm_id']; 
                                                delete_btn($member_id_id, $account_id, $user_id, "ml-2 p-1 btn btn-sm btn-danger shadow"); 
                                            ?>
                                        </td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th style="white-space: nowrap">Created By</th>
                                                        <td style="white-space: nowrap">
                                                            <?= !empty($_mid_['pdm_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th style="white-space: nowrap">Updated By</th>
                                                        <td style="white-space: nowrap">
                                                            <?= !empty($_mid_['pdm_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th style="white-space: nowrap">Creation Time</th>
                                                        <td style="white-space: nowrap">
                                                            <u> <?= date('Y/ m/ d', strtotime(@$_mid_['_date_'])); ?> </u>
                                                            <br class="m-0" />
                                                            <i><?= !empty($_mid_) ? @$TimeAgo->get(): "-"; ?></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th style="white-space: nowrap">Update Time</th>
                                                        <td style="white-space: nowrap">
                                                            <u> <?= date('Y/ m/ d', strtotime(@$_mid_['_update_date_'])); ?> </u>
                                                            <br class="m-0" />
                                                            <i><?= !empty($_mid_) ? @$updated_TimeAgo->get(): "-"; ?></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                            <?php }
                                ?>
                        </tbody>
                    </table>
                </div>
                <div class="d-block d-lg-none table-responsive">
                    <table
                        class="align-middle mb-0 table table-bor derless table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style="white-space: nowrap;">Member ID</th>
                                <th style="white-space: nowrap;" class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach ($id_prefix as $key => $mid) { 
                                    if (!empty($mid)) {
                                        $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$mid['_date_'])));

                                        $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$mid['pdm_created_by'],
                                        function ($info) {
                                            return @$info[0];
                                        });

                                        $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$mid['_update_date_'])));

                                        $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$mid['pdm_updated_by'],
                                        function ($info) {
                                            return @$info[0];
                                        });
                                    } ?>
                                    <tr>
                                        <th><?= (int)$key + 1; ?></th>
                                        <td style="white-space: nowrap;">
                                            <?= $_mid_['pdm_id_prefix']; ?>
                                        </td>
                                        <td class="text-center">
                                            <?= show_info_btn($mid, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                            <?= edit_btn($mid, $account_id, $user_id, "Edit This Member ID", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                                            <?php 
                                                $member_id_id = $mid['pdm_id']; 
                                                delete_btn($member_id_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
                                            ?>
                                        </td>
                                    </tr>
                                <?php }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
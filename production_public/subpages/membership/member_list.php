<?php
    use Encryptor\Encryptor;

    function open_modal_groups($groups, $account_id, $ccApi)
    {
        $groupList = "<ul class='d-block'>";
        foreach ($groups as $key => $group) {
            $groups = $ccApi->groups($all="one", $account_id, $id=$group['pdmmg_group_id'], function($groups)
            {
                return @$groups[0];
            });
            $groupList .= "<li class=''>".@$groups['pdmg_group']."</li>";
        }
        return $groupList .= "</ul>";
    }

    function open_modal_subgroups($subgroups, $account_id, $ccApi)
    {
        $subgroupList = "<ul class='d-block'>";
        foreach ($subgroups as $key => $subgroup) {                                
            $subgroups = $ccApi->subgroups($all="one", $account_id, $group_id = null, $id=$subgroup['pdmms_subgroup_id'],
            function($subgroups) {
                return @$subgroups[0];
            });
            $subgroupList .= "<li class=''>".@$subgroups['pdmg_subgroup']."</li>";
        }
        return $subgroupList .= "</ul>";
    }

    function open_modal_reg_status($areas)
    {
        $areaList = "<ul class=\"d-block\">";
        foreach ($areas as $a_key => $area) {   
            $area = $area['msg'];
            $areaList .= "<li>$area</li>";
        }
        return $areaList .= "</ul>";
    }

?>
<pre><?php //print_r($client_members); ?></pre>

<?php
    if ($client_members['error'] === false) { 
        if (empty($client_members['data'])) { ?>
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <h3 class="text-muted">No Members Found!</h3>
                </div>
            </div>
        <?php } else { ?>
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <div class="table-responsive">
                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th>Member Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    $members = $client_members['data'];
                                    foreach ($members as $key => $member) { ?>
                                        <tr>
                                            <td style="text-align: center;" class="p-0" background-image="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                                                <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-center ml-auto mr-auto">
                                                            <div class="widget-content-center">
                                                                <img width="100" height="100" class="rounded-circle shadow" alt="Contact Image"
                                                                    src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="p-0">
                                                <table class="align-middle mb-0 table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-justify"><?= $member['pdm_firstname'] ." ". $member['pdm_surname']; ?></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-center">
                                                                <button class="btn bg-night-sky text-white btn-sm my-1" type="button" data-toggle="modal" open-modal--id="member_groups<?= $member['pdm_id']; ?>"
                                                                    open-modal--title="Chapter/ Group(s)"
                                                                    open-modal--html="<h3><?= open_modal_groups($member['member_groups'], $account_id, $ccApi); ?></h3>"
                                                                    open-modal--buttons='
                                                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                                                    ' >Chapter/ Group(s)</button>
                                                                <button class="btn btn-primary btn-sm my-1" type="button" data-toggle="modal" open-modal--id="member_subgroups<?= $member['pdm_id']; ?>"
                                                                    open-modal--title="Subgroup(s)"
                                                                    open-modal--html="<h3><?= open_modal_subgroups($member['member_subgroups'], $account_id, $ccApi); ?></h3>"
                                                                    open-modal--buttons='
                                                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                                                    ' >Subgroup(s)</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-center">
                                                                <?php
                                                                    $user_id = $member['pdm_id'];
                                                                    $encryptor = new Encryptor("members", md5("members"));
                                                                    $_user_id = $encryptor->encrypt($user_id);
                                                                    $user_id = isset($user_info['identity']['pdm_identity']) && ($user_info['identity']['pdm_identity'] !== "_")
                                                                        ? $member['identity']['pdm_identity']: $encryptor->encrypt($user_id);
                                                                ?>
                                                                <button class="btn badge bg-sunny-morning text-white btn-sm my-1" type="button" data-toggle="modal" open-modal--id="member_id<?= $member['pdm_id']; ?>"
                                                                    open-modal--title="Member ID"
                                                                    open-modal--html="<h1 class='badge bg-sunny-morning text-white m-1 p-2 text-center'><?= $user_id; ?></h1>"
                                                                    open-modal--buttons='
                                                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                                                    ' >Member ID</button>

                                                                <?php
                                                                    if (isset($member['verified']['pdm_member_id'])) { ?>
                                                                        <button class="btn badge bg-grow-early text-white btn-sm my-1" type="button">Verified</button>
                                                                    <?php } else { ?>
                                                                        <button class="ml-2 p-1 btn btn-sm btn-danger shadow"
                                                                            btn-submit-post=<?= json_encode(["id"=>$member['pdm_id']]); ?>
                                                                            btn-submit-post--confirm="Verify User?"
                                                                            btn-submit-post--url="<?= API_BASE_URL."membership/verify"; ?>">
                                                                            <span class="d-none d-sm-block">Verify</span>
                                                                        </button>
                                                                    <?php }
                                                                ?>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-center">
                                                            <!-- open_modal_reg_status -->
                                                                <?php 
                                                                    $member_id = $member['pdm_id'];
                                                                    $open_modal_reg_status = htmlentities(open_modal_reg_status($member['registration_status']['areas']));
                                                                ?>
                                                                <?=
                                                                    (isset($member['registration_status']['completed']) && (bool)$member['registration_status']['completed'] === true) ? 
                                                                        "<button class=\"btn badge bg-grow-early text-white btn-sm my-1\" type=\"button\">
                                                                            <i class=\"fa fa-check\"> Completed</i>
                                                                        </button>":
                                                                        "<button class=\"btn badge bg-secondary text-white btn-sm my-1\" type=\"button\" data-toggle=\"modal\"
                                                                            open-modal--id=\"member_reg_status$member_id\" open-modal--title=\"Incomplete Registration\"
                                                                            open-modal--html=\"<h6>$open_modal_reg_status</h6>\" open-modal--buttons='
                                                                                <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Close</button>
                                                                            ' >
                                                                            <i class=\"fa fa-remove\"> Uncompleted</i>
                                                                        </button>";
                                                                ?>
                                                                <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $_user_id; ?>" class="btn btn-success btn-sm" type="button">Profile Details</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-center">
                                                                <b>Status: </b> 
                                                                <span class="badge badge-info">
                                                                    <?=  
                                                                        $active_status = $ccApi->active_status($all="one", $id=$member['pdm_status'],function($active_status) {
                                                                            return @$active_status[0]['pdd_info'];
                                                                        });
                                                                    ?>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr><td class="pt-1 pb-0 bg-light"></td><td class="pt-1 pb-0 bg-light"></td></tr>
                                    <?php }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        <?php } ?>
    <?php } else { ?>
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <h3 class="text-muted"><?= $client_members['msg']; ?></h3>
            </div>
        </div>
    <?php }

?>
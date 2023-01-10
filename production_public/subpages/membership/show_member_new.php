<?php
    use Encryptor\Encryptor;
    global $ccApi;

    $member_id = (int)base64_decode(@$_GET['view']);

    $encryptor = new Encryptor("members", md5("members"));
    $member_id_encrypted = $encryptor->encrypt(@$member_id);

    $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
        return $members;
    }, $debug = false); 
    
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

    function get_languages($languages, $account_id, $ccApi)
    {
        $languages = explode(",", $languages);
        $languageList = "<ul class='d-block'>";
        foreach ($languages as $key => $language) {                                
            $languages = $ccApi->languages($all="one", $id=$language, function($languages) {
                return @$languages[0];
            });
            $languageList .= "<li class=''>".@$languages['pdd_info']."</li>";
        }
        return $languageList .= "</ul>";
    }
    
?>

<!-- <pre><?php //print_r(@$member); ?></pre> -->

<div class="row justify-content-center">
    <?php
        // if (empty($member['info_statuses'])) {    
        if (!isset($member['pdm_id'])) { ?>
            <div class="col-md-6 col-lg-4">
                <div class="main-card m-0 mb-5 p-2 card shadow">
                    <h5 class="card-title m-1">Nothing To Show</h5>
                </div>
            </div>
        <?php } else { ?>
            <div class="col-md-4 col-lg-4">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card shadow">
                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                <div class="card-header-title">
                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                    <?= @$member['pdm_firstname'] . " " . @$member['pdm_middlename'] . " " . @$member['pdm_surname']; ?>'s Photo
                                </div>
                            </div>
                            <?php 
                                $setUpMemberImage = setUpMemberImage(@$member['pdm_profile_picture']);
                                // setUpMemberImage(@$member['pdm_profile_picture'], 1);
                            ?>
                            <div class="card-body p-0"
                                background-image="<?= $setUpMemberImage; ?>">
                                <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-c enter ml-auto mr-auto">
                                            <div class="widget-content-ce nter">
                                                <img width="150" height="150" class="rounded-circle shadow" alt="Member Image"
                                                    src="<?= $setUpMemberImage; ?>">
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <h5 class="card-title mb-0"><?= @$member['pdm_firstname'] . " " . @$member['pdm_middlename'] . " " . @$member['pdm_surname']; ?>
                                </h5>
                                <a class="btn-actions-pane-right btn btn-warning"
                                    href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$member_id_encrypted; ?>&type=photo-new">Edit</a>
                            </div>
                        </div>
                    </div>
                    <?php
                        if (AccountInfoCategory === 10) { ?>
                            <div class="col-md-12">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-header-tab card-header-tab-animation card-header h-25">
                                        <div class="card-header-title">
                                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Staff Departments
                                        </div>
                                    </div>
                                    <div class="card-body py-0">
                                        <div class="collapse py-2" id="member_groups">
                                            <h5 class="card-title">Departments</h5>
                                            <?= @open_modal_groups(@$member['member_groups'], $account_id, $ccApi); ?>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                            type="button" data-toggle="collapse" href="#member_groups">View Departments</button>
                                        <a class="btn-wide btn btn-warning mx-1"
                                            href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=groups">Update
                                            Departments</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-header-tab card-header-tab-animation card-header h-25">
                                        <div class="card-header-title">
                                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Staff Units
                                        </div>
                                    </div>
                                    <div class="card-body py-0">
                                        <div class="collapse py-2" id="member_subgroups">
                                            <h5 class="card-title">Units</h5>
                                            <?= @open_modal_subgroups(@$member['member_subgroups'], $account_id, $ccApi); ?>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                            type="button" data-toggle="collapse" href="#member_subgroups">View Units</button>
                                        <a class="btn-wide btn btn-warning mx-1"
                                            href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=subgroups">Update
                                            Units</a>
                                    </div>
                                </div>
                            </div>
                            <?php 
                                if (isset($member['staff_committees'])) { 

                                    function open_modal_committees($committees, $account_id, $ccApi)
                                    {
                                        $committeeList = "<ul class='d-block'>";
                                        foreach ($committees as $key => $committee) {
                                            $committees = $ccApi->committees($all="one", $account_id, $id=$committee['pdmmc_committee_id'], function($committees)
                                            {
                                                return @$committees[0];
                                            });
                                            $committeeList .= "<li class=''>".@$committees['pdmg_group']."</li>";
                                        }
                                        return $committeeList .= "</ul>";
                                    }
                                
                                    function open_modal_subcommittees($subcommittees, $account_id, $ccApi)
                                    {
                                        $subcommitteeList = "<ul class='d-block'>";
                                        foreach ($subcommittees as $key => $subcommittee) {                                
                                            $subcommittees = $ccApi->subcommittees($all="one", $account_id, $committee_id = null, $id=$subcommittee['pdmms_subcommittee_id'],
                                            function($subcommittees) {
                                                return @$subcommittees[0];
                                            });
                                            $subcommitteeList .= "<li class=''>".@$subcommittees['pdmg_subgroup']."</li>";
                                        }
                                        return $subcommitteeList .= "</ul>";
                                    } ?>
                                    <div class="col-md-12">
                                        <div class="main-card mb-3 card shadow">
                                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                                <div class="card-header-title">
                                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Staff Committees & Sub-Committees
                                                </div>
                                            </div>
                                            <div class="card-body p-0">
                                                <div class="collapse py-2" id="staffcommittees_subCommittees">
                                                    <div class="border border-success px-2 py-1 mx-2 mb-1">
                                                        <h5 class="card-title">Committees</h5>
                                                        <?= @open_modal_committees(@$member['staff_committees'], $account_id, $ccApi); ?>
                                                    </div>
                                                    <div class="border border-success px-2 py-1 mx-2 mt-2">
                                                        <h5 class="card-title">Sub-Committees</h5>
                                                        <?= @open_modal_subcommittees(@$member['staff_subcommittees'], $account_id, $ccApi); ?>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                    type="button" data-toggle="collapse" href="#staffcommittees_subCommittees">View</button>
                                                <a class="btn-wide btn btn-warning mx-1"
                                                    href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=committees">Update Committee</a>
                                                <a class="btn-wide btn btn-warning mx-1"
                                                    href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=subcommittees">Update Subcommittee</a>
                                            </div>
                                        </div>
                                    </div>
                                <?php }
                            ?>
                            
                        <?php } else { ?>
                            <div class="col-md-12">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-header-tab card-header-tab-animation card-header h-25">
                                        <div class="card-header-title">
                                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Member Groups
                                        </div>
                                    </div>
                                    <div class="card-body py-0">
                                        <div class="collapse py-2" id="member_groups">
                                            <h5 class="card-title">Groups</h5>
                                            <?= @open_modal_groups(@$member['member_groups'], $account_id, $ccApi); ?>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                            type="button" data-toggle="collapse" href="#member_groups">View Groups</button>
                                        <a class="btn-wide btn btn-warning mx-1"
                                            href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=groups">Update
                                            Groups</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-header-tab card-header-tab-animation card-header h-25">
                                        <div class="card-header-title">
                                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Member Subgroups
                                        </div>
                                    </div>
                                    <div class="card-body py-0">
                                        <div class="collapse py-2" id="member_subgroups">
                                            <h5 class="card-title">Subgroups</h5>
                                            <?= @open_modal_subgroups(@$member['member_subgroups'], $account_id, $ccApi); ?>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                            type="button" data-toggle="collapse" href="#member_subgroups">View Subgroups</button>
                                        <a class="btn-wide btn btn-warning mx-1"
                                            href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=subgroups">Update
                                            Subgroups</a>
                                    </div>
                                </div>
                            </div>
                        <?php }
                    ?>
                </div>
            </div>
            <div class="col-md-8 col-lg-8">
                <div class="main-card mb-3 card">
                    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                        About <?= @$member['pdm_firstname'] . " " . @$member['pdm_middlename'] . " " . @$member['pdm_surname']; ?>
                        <div class="btn-actions-pane-right">
                            <div class="btn-group-sm nav btn-group" role="group">
                                <a class="btn-shadow btn btn-info show active" href="#main_details_tab" data-toggle="tab">Main
                                    Details</a>
                                <a class="btn-shadow btn btn-info show" href="#statuses_tab" data-toggle="tab">Statuses</a>
                                <a class="btn-shadow btn btn-info show" href="#extra_info_tab" data-toggle="tab">Extra Info</a>
                                <?php
                                    if (AccountInfoCategory === 10) { ?>
                                        <a class="btn-shadow btn btn-success show" href="#staff_info_tab" data-toggle="tab">Staff Details</a>
                                    <?php }
                                ?>
                                <button class="btn btn-sm btn-outline-danger"
                                    btn-submit-post=<?= json_encode(["member_id"=>@$member['pdm_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete User?"
                                    btn-submit-post--url="<?= API_BASE_URL."membership/delete_member"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-inline">Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane show active" id="main_details_tab" role="tabpanel">
                                <h4 class="card-title">Main Details</h4>
                                <div class="row justify-content-center">
                                    <div class="col-md-12 col-lg-6">
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Reference ID</th>
                                                        <th><?= @$member['pdm_ref_id']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Gender</th>
                                                        <th><?= (@$member['pdm_gender'] == 1) ? "Male" : "Female"; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Date of Birth</th>
                                                        <th><?= date("Y-m-d", strtotime(@$member['pdm_date_of_birth'])); ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Religion</th>
                                                        <th>
                                                            <?= $ccApi->religion($all=false, $id=@$member['pdm_religion'], function($religion)
                                                            {
                                                                return @$religion[0]['pdd_info'];
                                                            }, $debug = false); ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Nationality</th>
                                                        <th><?= @$member['pdm_nationality']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Phone</th>
                                                        <th><a
                                                                href="tel:<?= @$member['pdm_phone']; ?>"><?= @$member['pdm_phone']; ?></a>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>E-mail</th>
                                                        <th><a
                                                                href="mailto:<?= @$member['pdm_email']; ?>"><?= @$member['pdm_email']; ?></a>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Country</th>
                                                        <th><?= @$member['pdm_country_of_residence']; ?></th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                        <th class="text-white text-center"><span
                                                                class="pe-7s-date fa-2x font-weight-bold"></span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Last Updated By</th>
                                                        <th><?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=@$member['last_updated_by']['pdm_admin_user_id'], function ($info)
                                                            {
                                                                if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                                    return "Self";
                                                                } else {
                                                                    return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                                                }
                                                            }); ?>
                                                        </th>
                                                        <?php
                                                            $dateIsValid = empty($member['last_updated_by'])? false: $member['last_updated_by'];
                                                        ?>
                                                        <th><?= $dateIsValid? date("Y-m-d @ H:i A", strtotime(@$member['last_updated_by']['_date_'])): "--"; ?>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6">
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>State/ Province</th>
                                                        <th><?= @$member['pdm_state_province']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Region</th>
                                                        <th>
                                                            <?php $region = @$member['pdm_region']; ?>
                                                            <?= $ccApi->get_location($type="regions", $get_string=$region, function($locations)
                                                            use($region) {
                                                                $at = '';
                                                                foreach ($locations as $key => $location) {
                                                                    if (@(int)$location['id'] == $region) {
                                                                        $at = @$location['Region'];
                                                                    }
                                                                }
                                                                return @$at;
                                                            }, $debug = false); ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>District</th>
                                                        <th>
                                                            <?php $district = @$member['pdm_district']; ?>
                                                            <?= $ccApi->get_location($type="district", $get_string="region=$region", function($locations)
                                                            use($district) {
                                                                $at = '';
                                                                foreach ($locations as $key => $location) {
                                                                    if (@(int)$location['id'] == $district) {
                                                                        $at = @$location['District'];
                                                                    }
                                                                }
                                                                return @$at;
                                                            }, $debug = false); ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Constituency</th>
                                                        <th>
                                                            <?php $constituency = @$member['pdm_constituency']; ?>
                                                            <?= $ccApi->get_location($type="constituency", $get_string="region=$region&district=$district", function($locations)
                                                            use($constituency) {
                                                                $at = '';
                                                                foreach ($locations as $key => $location) {
                                                                    if (@(int)$location['id'] == $constituency) {
                                                                        $at = @$location['Constituency'];
                                                                    }
                                                                }
                                                                return @$at;
                                                            }, $debug = false); ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Electoral Area</th>
                                                        <th>
                                                            <?php $electoral_area = @$member['pdm_electoral_area']; ?>
                                                            <?= $ccApi->get_location($type="electoral_area", $get_string="region=$region&district=$district", function($locations)
                                                            use($electoral_area) {
                                                                $at = '';
                                                                foreach ($locations as $key => $location) {
                                                                    if (@(int)$location['id'] == $electoral_area) {
                                                                        $at = @$location['Electoral_Area'];
                                                                    }
                                                                }
                                                                return @$at;
                                                            }, $debug = false); ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Community</th>
                                                        <th><?= @$member['pdm_community']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Hometown</th>
                                                        <th><?= @$member['pdm_hometown']; ?></th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Registed By</th>
                                                        <th><?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=@$member['registered_by']['pdm_admin_user_id'], function ($info)
                                                            {
                                                                if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                                    return "Self";
                                                                } else {
                                                                    return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                                                }
                                                            }); ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Verified</th>
                                                        <th><?= (isset($member['verified']['pdm_member_id'])) ? "Verified" : "Not Verified"; ?>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane show" id="statuses_tab" role="tabpanel">
                                <h4 class="card-title">Statuses</h4>
                                <div class="row justify-content-center">
                                    <div class="col-md-12 col-lg-6">
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Disability</th>
                                                        <th><?= (@$member['info_statuses']['pdm_disability'] == 1) ? "Yes" : "No"; ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Language(s)</th>
                                                        <th>
                                                            <?= get_languages(@$member['info_statuses']['pdm_languages'], $account_id, $ccApi); ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Marital Status</th>
                                                        <th>
                                                            <?= $ccApi->marital_status($all="one", $id=@$member['info_statuses']['pdm_marital_status'], function($marital_status)
                                                            {
                                                                return @$marital_status[0]['pdd_info'];
                                                            }, $debug = false); ?>
                                                        </th>
                                                    </tr>
                                                    <?php
                                                        if (AccountInfoCategory !== 10) { ?>
                                                            <tr>
                                                                <th>Occupational Status</th>
                                                                <th>
                                                                    <?= $ccApi->occupation($all="one", $id=@$member['info_statuses']['pdm_occupational_status'], function($occupation)
                                                                    {
                                                                        return @$occupation[0]['pdd_info'];
                                                                    }, $debug = false); ?>
                                                                </th>
                                                            </tr>
                                                        <?php }
                                                    ?>
                                                    <tr>
                                                        <th>Educational Status</th>
                                                        <th>
                                                            <?= $ccApi->education($all="one", $id=@$member['info_statuses']['pdm_educational_status'], function($education)
                                                            {
                                                                return @$education[0]['pdd_info'];
                                                            }, $debug = false); ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Field of Study</th>
                                                        <th>
                                                            <?= @$member['info_extra']['pdm_field_of_study']; ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Name of Institution</th>
                                                        <th><?= @$member['info_extra']['pdm_name_of_institution']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Date of Marriage</th>
                                                        <?php
                                                            $_date = @$member['info_extra']['pdm_date_of_marriage'];
                                                            $_date = (empty($_date)) ? "": date("Y-m-d", strtotime($_date));
                                                        ?>
                                                        <th><?= $_date; ?></th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6">
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Mother's Name</th>
                                                        <th><?= @$member['info_extra']['pdm_mother_name']; ?></th>
                                                    </tr>
                                                    <tr>
                                                    <tr>
                                                        <th>Mother's Living Status</th>
                                                        <th>
                                                            <?php
                                                                $livingStatus = is_null(@$member['info_extra']['pdm_mother_living_status']) ? "--" : "Deceased";
                                                                $livingStatus = (@$member['info_extra']['pdm_mother_living_status'] == 1) ? "Alive" : $livingStatus;
                                                            ?> <?= $livingStatus; ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Mother's Occupation</th>
                                                        <th><?= @$member['info_extra']['pdm_mother_occupation']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Father's Name</th>
                                                        <th><?= @$member['info_extra']['pdm_father_name']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Father's Living Status</th>
                                                        <th><?php
                                                                $livingStatus = is_null(@$member['info_extra']['pdm_father_living_status']) ? "--" : "Deceased";
                                                                $livingStatus = (@$member['info_extra']['pdm_father_living_status'] == 1) ? "Alive" : $livingStatus;
                                                            ?> <?= $livingStatus; ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Father's Occupation</th>
                                                        <th><?= @$member['info_extra']['pdm_father_occupation']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Guardian Name</th>
                                                        <th><?= @$member['info_extra']['pdm_guardian_name']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Guardian Occupation</th>
                                                        <th><?= @$member['info_extra']['pdm_guardian_occupation']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Next of Kin Name</th>
                                                        <th><?= @$member['info_extra']['pdm_next_of_kin_name']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Next of Kin Contact</th>
                                                        <th>
                                                            <a
                                                                href="tel:<?= @$member['info_extra']['pdm_next_of_kin_contact']; ?>">
                                                                <?= @$member['info_extra']['pdm_next_of_kin_contact']; ?>
                                                            </a>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane show" id="extra_info_tab" role="tabpanel">
                                <h4 class="card-title">Extra Info</h4>
                                <div class="row justify-content-center">
                                    <div class="col-md-12 col-lg-6">
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Travel Experience</th>
                                                        <th><?= (@$member['info_more']['pdm_traveling_experience'] == 1) ? "Yes" : "No"; ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Passport Number</th>
                                                        <th><?= @$member['info_more']['pdm_passport_number']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Passport Issue Date</th>
                                                        <?php
                                                            $_date = @$member['info_more']['pdm_passport_date_issued'];
                                                            $_date = (empty($_date)) ? "": date("Y-m-d", strtotime($_date));
                                                        ?>
                                                        <th><?= $_date; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Passport Expiry Date</th>
                                                        <?php
                                                            $_date = @$member['info_more']['pdm_passport_expiry_date'];
                                                            $_date = (empty($_date)) ? "": date("Y-m-d", strtotime($_date));
                                                        ?>
                                                        <th><?= $_date; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Training Course Attended</th>
                                                        <th><?= (@$member['info_more']['pdm_training_course_attended'] == 1) ? "Yes" : "No"; ?>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Training Organization Name</th>
                                                        <th><?= @$member['info_more']['pdm_training_organization_name']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Training Course Name</th>
                                                        <th><?= @$member['info_more']['pdm_training_course_name']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Training Course Duration</th>
                                                        <th><?= @$member['info_more']['pdm_training_course_duration']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Current Postal Address</th>
                                                        <th><?= @$member['info_more']['pdm_current_postal_address']; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Residential Address</th>
                                                        <th><?= @$member['info_more']['pdm_residential_address']; ?></th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6">
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                    </tr>
                                                </thead>
                                                <tr>
                                                    <th>Address Landmarks</th>
                                                    <th><?= @$member['info_more']['pdm_provide_landmarks']; ?></th>
                                                </tr>
                                                <tr>
                                                    <th>Digital Address</th>
                                                    <th><?= @$member['info_more']['pdm_digital_address']; ?></th>
                                                </tr>
                                                <tr>
                                                    <th>references</th>
                                                    <th><?= (@$member['info_more']['pdm_references'] == 1) ? "Yes" : "No"; ?>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>Referee 1's Name</th>
                                                    <th><?= @$member['info_more']['pdm_referee_1_name']; ?></th>
                                                </tr>
                                                <tr>
                                                    <th>Referee 1's Contact</th>
                                                    <th>
                                                        <a href="tel:<?= @$member['info_more']['pdm_referee_1_contact']; ?>">
                                                            <?= @$member['info_more']['pdm_referee_1_contact']; ?>
                                                        </a>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>Referee 1's Address</th>
                                                    <th><?= @$member['info_more']['pdm_referee_1_address']; ?></th>
                                                </tr>
                                                <tr>
                                                    <th>Referee 2's Name</th>
                                                    <th><?= @$member['info_more']['pdm_referee_2_name']; ?></th>
                                                </tr>
                                                <tr>
                                                    <th>Referee 2's Contact</th>
                                                    <th>
                                                        <a href="tel:<?= @$member['info_more']['pdm_referee_2_contact']; ?>">
                                                            <?= @$member['info_more']['pdm_referee_2_contact']; ?>
                                                        </a>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>Referee 2's Address</th>
                                                    <th><?= @$member['info_more']['pdm_referee_2_address']; ?></th>
                                                </tr>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                                if (AccountInfoCategory === 10) { ?>
                                    <div class="tab-pane show" id="staff_info_tab" role="tabpanel">
                                        <h4 class="card-title">Staff Details</h4>
                                        <div class="row justify-content-center">
                                            <div class="col-md-12 col-lg-6">
                                                <div class="table-responsive">
                                                    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                        <thead class="shadow bg-grow-early">
                                                            <tr>
                                                                <th class="text-white">Query</th>
                                                                <th class="text-white">Info</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>Staff Status</th>
                                                                <th><?= $ccApi->staff_status($all=false, $id=@$member['info_statuses']['pdm_occupational_status'], function($designation) {
                                                                        return @$designation[0]['pdd_info'];
                                                                    }); ?>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>Department(s)</th>
                                                                <th><?= open_modal_groups(@$member['member_groups'], AccountInfoId, $ccApi); ?></th>
                                                            </tr>
                                                            <tr>
                                                                <th>Unit(s)</th>
                                                                <th><?= @open_modal_subgroups(@$member['member_subgroups'], AccountInfoId, $ccApi); ?></th>
                                                            </tr>
                                                            <tr>
                                                                <th>Committee(s)</th>
                                                                <th><?= (isset($member['staff_committees'])) ? 
                                                                    @open_modal_committees(@$member['staff_committees'], AccountInfoId, $ccApi) : "-"; ?></th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-6">
                                                <div class="table-responsive">
                                                    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                        <thead class="shadow bg-grow-early">
                                                            <tr>
                                                                <th class="text-white">Query</th>
                                                                <th class="text-white">Info</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>Sub-Committee(s)</th>
                                                                <th><?= (isset($member['staff_committees'])) ? 
                                                                    @open_modal_subcommittees(@$member['staff_subcommittees'], AccountInfoId, $ccApi) : "-"; ?></th>
                                                            </tr>
                                                            <tr>
                                                                <th>Appointment Status</th>
                                                                <th><?= @$ccApi->fetch_from($get_string="staff-assembly-member/appointment_status?id=".$member['info_district']['pdm_user_status'], function($status) {
                                                                        return isset($status[0]['pdd_info']) ? $status[0]['pdd_info']: "-";
                                                                    }); ?>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>Terms Served</th>
                                                                <th><?= @$ccApi->fetch_from($get_string="staff-assembly-member/term_served?id=".$member['info_district']['pdm_user_termsserved'], function($status) {
                                                                        return isset($status[0]['pdd_info']) ? $status[0]['pdd_info']: "-";
                                                                    }); ?></th>
                                                            </tr>
                                                            <tr>
                                                                <th>Last Year of Appointment</th>
                                                                <th><?= isset($member['info_district']['pdm_last_appointment_year']) ? $member['info_district']['pdm_last_appointment_year'] : "-"; ?>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>All Communities Entered</th>
                                                                <th><?= isset($member['info_district']['pdm_all_communities_entered']) ? $member['info_district']['pdm_all_communities_entered'] : "-"; ?>
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php }
                            ?>
                        </div>
                    </div>
                    <div class="d-block text-right card-footer">
                        <a class="btn-wide btn btn-warning"
                            href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=main">Edit
                            Main Details</a>
                        <a class="btn-wide btn btn-warning"
                            href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=statuses">Edit
                            Statuses</a>
                        <a class="btn-wide btn btn-warning"
                            href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=extra">Edit
                            Extra Info</a>
                        <?php 
                            if (AccountInfoCategory === 10) { ?>
                                <a class="btn-wide btn bg-grow-early text-white"
                                    href="<?= CLIENT_BASE_URL; ?>members?edit-member&member=<?= @$_GET['member']; ?>&type=district">Edit
                                    Staff Details</a>
                            <?php }
                        ?>
                        <?= show_reset_password_btn((int)$member['pdm_id'], $user_id, "btn-wide btn btn-danger"); ?>
                    </div>
                </div>
            </div>
        <?php }
    ?>
</div>
<?php
    function show_reset_password_btn($member_id, $user_id, $class) { ?>
        <button class="<?= $class; ?>"
            btn-submit-post=<?= json_encode(["member_id"=>$member_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]); ?>
            btn-submit-post--confirm="Reset Member's Password?"
            btn-submit-post--url="<?= API_BASE_URL; ?>membership/edit/reset-password" >
            <span class="">Reset Password</span>
        </button>
    <?php }
?>
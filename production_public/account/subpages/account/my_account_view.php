<?php
    use Encryptor\Encryptor;

    // $encryptor = new Encryptor("members", md5("members"));
    // $user_info_id = (int)$encryptor->decrypt(@$_GET['member']);
    
?>

<pre><?php //print_r(@$user_info); ?></pre>

<div class="row justify-content-center">
    <div class="col-md-4 col-lg-4">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="main-card mb-3 card shadow">
                    <div class="card-header-tab card-header-tab-animation card-header h-25">
                        <div class="card-header-title">
                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                            <?= @$user_info['pdcu_firstname'] . " " . @$user_info['pdcu_surname']; ?>'s Photo
                        </div>
                    </div>
                    <div class="card-body p-0"
                        background-image="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= @$user_info['pdcu_profile_picture']; ?>">
                        <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-c enter ml-auto mr-auto">
                                    <div class="widget-content-ce nter">
                                        <img width="150" height="150" class="rounded-circle shadow" alt="Member Image"
                                            src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= @$user_info['pdcu_profile_picture']; ?>">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <h5 class="card-title mb-0"><?= @$user_info['pdcu_firstname'] . " " . @$user_info['pdcu_surname']; ?>
                        </h5>
                        <a class="btn-actions-pane-right btn btn-warning"
                            href="<?= account_BaseUrl; ?>my-account?edit=photo">Edit</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8 col-lg-8">
        <div class="main-card mb-3 card">
            <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                About <?= @$user_info['pdcu_firstname'] . " " . @$user_info['pdcu_surname']; ?>
                <div class="btn-actions-pane-right">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <a class="btn-shadow btn btn-info show active" href="#main_details_tab" data-toggle="tab">Main
                            Details</a>
                        <a class="btn-shadow btn btn-primary show" href="#user_details_tab" data-toggle="tab">User
                            Info</a>
                        <a class="btn-shadow btn btn-info show" href="#access_level_tab" data-toggle="tab">Access Level</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="tab-content">
                    <div class="tab-pane show active" id="main_details_tab" role="tabpanel">
                        <h4 class="card-title">My Details</h4>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-12">
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
                                                <th>Gender</th>
                                                <th><?= (@$user_info['pdcu_gender'] == 1) ? "Male" : "Female"; ?></th>
                                            </tr>
                                            <tr>
                                                <th>Date of Birth</th>
                                                <th><?= date("Y-m-d", strtotime(@$user_info['pdcu_date_of_birth'])); ?></th>
                                            </tr>
                                            <tr>
                                            <tr>
                                                <th>Phone</th>
                                                <th><a
                                                        href="tel:<?= @$user_info['pdcu_phone']; ?>"><?= @$user_info['pdcu_phone']; ?></a>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>E-mail</th>
                                                <th><a
                                                        href="mailto:<?= @$user_info['pdcu_email']; ?>"><?= @$user_info['pdcu_email']; ?></a>
                                                </th>
                                            </tr>
                                                <?php
                                                    if ((int)AccountInfoType !== 10) { ?>
                                                        <tr>
                                                            <th>Role</th>
                                                            <th>
                                                                <?= $ccApi->designation($all=false, $id=@$user_info['pdcu_role'], function($designation) {
                                                                    return @$designation[0]['coc_leader'];
                                                                }); ?>
                                                            </th>
                                                        </tr>
                                                    <?php }
                                                ?>
                                            <tr>
                                                <th>Access</th>
                                                <th>
                                                    <?php 
                                                        // $ccApi->client_levels($all="one", $id=$user_info['pdcu_level'], function($active_status) {
                                                        //     return @$active_status[0]['pdd_info'];
                                                        // });
                                                        if (count($appPages) === count($my_access_levels)) {
                                                            echo "Unlimited";
                                                        } else {
                                                            echo "Limited";
                                                        }
                                                    ?>
                                                </th>
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
                                                <th><?php
                                                    $pdcu_admin_user_id = isset($client_user['last_updated_by']['pdcu_admin_user_id'])
                                                    ? (int)$client_user['last_updated_by']['pdcu_admin_user_id']: 0;
                                                    echo $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=$pdcu_admin_user_id, function ($info)
                                                    {
                                                        if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                            return "Self";
                                                        } else {
                                                            return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                                        }
                                                    }); ?>
                                                </th>
                                                <th class="text-center"><?= date("Y-m-d @ H:i A", strtotime(@$user_info['_date_'])); ?>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div class="tab-pane show" id="user_details_tab" role="tabpanel">
                                <h4 class="card-title">User Info</h4>
                                <div class="row justify-content-center">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead class="shadow bg-primary">
                                                    <tr>
                                                        <th class="text-white">Query</th>
                                                        <th class="text-white">Info</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        function show_groups($groups, $account_id, $ccApi)
                                                        {
                                                            $groupList = "<ul class='d-block'>";
                                                            $groups = explode(",", $groups);
                                                            foreach ($groups as $key => $group) {
                                                                $groups = $ccApi->groups($all="one", $account_id, $id=$group, function($groups)
                                                                {
                                                                    return @$groups[0];
                                                                });
                                                                if (isset($groups['pdmg_group'])) {
                                                                    $groupList .= "<li class=''>".@$groups['pdmg_group']."</li>";
                                                                }
                                                            }
                                                            return $groupList .= "</ul>";
                                                        }

                                                        function show_subgroups($subgroups, $account_id, $ccApi)
                                                        {
                                                            $subgroupList = "<ul class='d-block'>";
                                                            $subgroups = explode(",", $subgroups);
                                                            foreach ($subgroups as $key => $subgroup) {                                
                                                                $subgroups = $ccApi->subgroups($all="one", $account_id, $group_id = null, $id=$subgroup,
                                                                function($subgroups) {
                                                                    return @$subgroups[0];
                                                                });
                                                                if (isset($subgroups['pdmg_subgroup'])) {
                                                                    $subgroupList .= "<li class=''>".@$subgroups['pdmg_subgroup']."</li>";
                                                                }
                                                            }
                                                            return $subgroupList .= "</ul>";
                                                        }

                                                        function show_committees($committees, $account_id, $ccApi)
                                                        {
                                                            $committeeList = "<ul class='d-block'>";
                                                            $committees = explode(",", $committees);
                                                            foreach ($committees as $key => $committee) {
                                                                $committees = $ccApi->committees($all="one", $account_id, $id=$committee, function($committees)
                                                                {
                                                                    return @$committees[0];
                                                                });
                                                                if (isset($committees['pdmg_group'])) {
                                                                    $committeeList .= "<li class=''>".@$committees['pdmg_group']."</li>";
                                                                }
                                                            }
                                                            return $committeeList .= "</ul>";
                                                        }
                                                    
                                                        function show_subcommittees($subcommittees, $account_id, $ccApi)
                                                        {
                                                            $subcommitteeList = "<ul class='d-block'>";
                                                            $subcommittees = explode(",", $subcommittees);
                                                            foreach ($subcommittees as $key => $subcommittee) {                                
                                                                $subcommittees = $ccApi->subcommittees($all="one", $account_id, $committee_id = null, $id=$subcommittee,
                                                                function($subcommittees) {
                                                                    return @$subcommittees[0];
                                                                });
                                                                if (isset($subcommittees['pdmg_subgroup'])) {
                                                                    $subcommitteeList .= "<li class=''>".@$subcommittees['pdmg_subgroup']."</li>";
                                                                }
                                                            }
                                                            return $subcommitteeList .= "</ul>";
                                                        } 
                                                        if ((int)AccountInfoType == 10) { ?>
                                                            <tr>
                                                                <th>Staff Status</th>
                                                                <th><?= $ccApi->staff_status($all=false, $id=@$user_info['pdcu_role'], function($designation) {
                                                                        return @$designation[0]['pdd_info'];
                                                                    }); ?>
                                                                </th>
                                                            </tr>
                                                        <?php }
                                                    ?>
                                                    <tr>
                                                        <th><?= ((int)AccountInfoType == 10) ? "Department": "Group"; ?></th>
                                                        <th><?= show_groups(@$user_info['user_info']['pdcud_group'], AccountInfoId, $ccApi); ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th><?= ((int)AccountInfoType == 10) ? "Unit": "Sub-Group"; ?></th>
                                                        <th><?= show_subgroups(@$user_info['user_info']['pdcud_subgroup'], AccountInfoId, $ccApi); ?></th>
                                                    </tr>
                                                    <?php
                                                        if ((int)AccountInfoType == 10) { ?>
                                                            <tr>
                                                                <th>Committee</th>
                                                                <th><?= show_committees(@$user_info['user_info']['pdcud_committee'], AccountInfoId, $ccApi); ?></th>
                                                            </tr>
                                                            <tr>
                                                                <th>Sub-Committee</th>
                                                                <th><?= show_subcommittees(@$user_info['user_info']['pdcud_subcommittee'], AccountInfoId, $ccApi); ?></th>
                                                            </tr>
                                                            <tr>
                                                                <th>Appointment Status</th>
                                                                <th><?= @$ccApi->fetch_from($get_string="staff-assembly-member/appointment_status?id=".$user_info['user_info']['pdcud_appointement_status'], function($status) {
                                                                        return isset($status[0]['pdd_info']) ? $status[0]['pdd_info']: "-";
                                                                    }); ?>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>Terms Served</th>
                                                                <th><?= @$ccApi->fetch_from($get_string="staff-assembly-member/term_served?id=".$user_info['user_info']['pdcud_terms_served'], function($status) {
                                                                        return isset($status[0]['pdd_info']) ? $status[0]['pdd_info']: "-";
                                                                    }); ?></th>
                                                            </tr>
                                                            <tr>
                                                                <th>Last Year of Appointment</th>
                                                                <th><?= isset($user_info['user_info']['pdcud_last_appointment_year']) ? $user_info['user_info']['pdcud_last_appointment_year'] : "-"; ?>
                                                                </th>
                                                            </tr>
                                                        <?php }
                                                    ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div class="tab-pane show" id="access_level_tab" role="tabpanel">
                        <h4 class="card-title">My Access Levels</h4>
                        <div class="row justify-content-center">
                            <div class="col-md-8 col-lg-8">
                                <div class="table-responsive">
                                    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                        <thead class="shadow bg-primary">
                                            <tr>
                                                <th class="text-white">Page Level</th>
                                                <th class="text-white text-center">Access</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php 
                                                foreach ($appPages as $key => $page) { ?>
                                                    <tr>
                                                        <th><?= $page['pdpc_page']; ?></th>
                                                        <td class="text-center p-0">
                                                            <?php
                                                                $isChecked = (in_array($page['pdpc_id'], $my_access_levels)) ? 'checked="true"' : "";
                                                            ?>
                                                            <div class="custom-checkbox custom-control">
                                                                <input class="custom-control-input" disabled type="checkbox" name="page_check_<?= $page['pdpc_id']; ?>" id="page_check_<?= $page['pdpc_id']; ?>" <?= $isChecked; ?> />
                                                                <label class="custom-control-label" for="page_check_<?= $page['pdpc_id']; ?>">~</label>
                                                            </div>	
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
            </div>
            <div class="d-block text-right card-footer">
                <a class="btn-wide btn btn-warning" href="<?= account_BaseUrl; ?>my-account?edit=info">Edit User Info</a>
                <a class="btn-wide btn btn-warning" href="<?= account_BaseUrl; ?>my-account?edit=password">Edit User Password</a>
            </div>
        </div>
    </div>
</div>
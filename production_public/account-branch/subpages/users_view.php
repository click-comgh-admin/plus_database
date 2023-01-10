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
?>
<div class="card">
    <div class="card-header">
        <i class="lnr-license icon-gradient bg-plum-plate"> Branch </i> // <?= @$branch['pdc_name']; ?> // 
        <i class="lnr-license icon-gradient bg-plum-plate"> Users </i>
        <div class="btn-actions-pane-right">
            <a href="<?= Current_BaseUrl; ?>add-user?branch=<?= @$branch['pdc_id']; ?>" 
                class="btn btn-sm btn-success" target="_blank" class="btn btn-sm btn-info">Add User</a>
        </div>
    </div>
    <div class="card-body bg-light">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-12 px-md-0 px-1">
                <div class="px-0">
                    <?php 
                        foreach ($client_users as $key => $client_user) { ?>
                            <div class="card shadow shadow-lg p-1 mt-2 mb-2">
                                <div class="container-fluid p-0">
                                    <div class="row justify-content-center">
                                        <div class="col-md-12 border border-top-0 border-left-0 border-right-0 mb-1">
                                            <div class="btn-actions-pane-right text-right m-1">
                                                <a href="<?= Current_BaseUrl; ?>update-user?branch=<?= @$branch['pdc_id']; ?>&user=<?= @$client_user['pdcu_id']; ?>" 
                                                    class="btn btn-sm btn-warning" target="_blank" >Update User</a>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-6">
                                            <div class="table-responsive">
                                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                    <thead class="shadow bg-primary">
                                                        <tr>
                                                            <th class="text-white">Query</th>
                                                            <th class="text-white">
                                                                Info
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>User Name</th>
                                                            <th>
                                                                <div style="text-align: center;" class="p-0" background-image="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= $client_user['pdcu_profile_picture']; ?>">
                                                                    <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                                        <div class="widget-content-wrapper">
                                                                            <div class="widget-content-center ml-auto mr-auto">
                                                                                <div class="widget-content-center">
                                                                                    <img width="100" height="100" class="rounded-circle shadow" alt="Contact Image"
                                                                                        src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= $client_user['pdcu_profile_picture']; ?>">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="shadow shadow-lg my-2 btn-block p-1 bg-white font-weight-bold rounded text-dark">
                                                                    <?= $client_user['pdcu_firstname'] ." ". $client_user['pdcu_surname']; ?>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th>Phone</th>
                                                            <th>
                                                                <a href="tel:<?= @$client_user['pdcu_phone']; ?>"><?= @$client_user['pdcu_phone']; ?></a>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th>E-mail</th>
                                                            <th>
                                                                <a href="mailto:<?= @$client_user['pdcu_email']; ?>"><?= @$client_user['pdcu_email']; ?></a>
                                                            </th>
                                                        </tr>
                                                        <?php
                                                            if ((int)AccountInfoType !== 10) { ?>
                                                                <tr>
                                                                    <th>Role</th>
                                                                    <th>
                                                                        <?= $ccApi->designation($all=false, $id=@$client_user['pdcu_role'], function($designation) {
                                                                            return @$designation[0]['coc_leader'];
                                                                        }); ?>
                                                                    </th>
                                                                </tr>
                                                            <?php }
                                                        ?>
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
                                                            <th>Gender</th>
                                                            <th>
                                                                <?= (@$client_user['pdcu_gender'] == 1) ? "Male" : "Female"; ?>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th>Date of Birth</th>
                                                            <th>
                                                                <?= date("Y-m-d", strtotime(@$client_user['pdcu_date_of_birth'])); ?>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th>Access</th>
                                                            <th>
                                                                <?php
                                                                    $get_string = "page-access-levels/client_level?client_id=".$branch['pdc_id']."&user_id=".$client_user['pdcu_id'];
                                                                    $user_access_levels = $ccApi->fetch_from($get_string, function($pages)
                                                                    {
                                                                        $access_levels = [];
                                                                        foreach ($pages as $key => $page) {
                                                                            if (!in_array($page['pdpcl_page_id'], $access_levels)) {
                                                                                array_push($access_levels, $page['pdpcl_page_id']);
                                                                            }
                                                                        }
                                                                        return $access_levels;
                                                                    }, $debug=false);	
                                                                    if (count($appPages) === count($user_access_levels)) {
                                                                        echo "Unlimited";
                                                                    } else {
                                                                        echo "Limited";
                                                                    }
                                                                ?>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th>Last Updated By</th>
                                                            <th><?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=@$client_user['last_updated_by']['pdcu_admin_user_id'], function ($info)
                                                                {
                                                                    if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                                        return "Self";
                                                                    } else {
                                                                        return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                                                    }
                                                                }); ?>
                                                                <hr class="my-1"><?= date("Y-m-d @ H:i A", strtotime(@$client_user['_date_'])); ?>
                                                            </th>
                                                        </tr>
                                                        <?php
                                                            if ((int)AccountInfoType == 10) { ?>
                                                                <tr>
                                                                    <th>Staff Status</th>
                                                                    <th><?= $ccApi->staff_status($all=false, $id=@$client_user['pdcu_role'], function($designation) {
                                                                            return @$designation[0]['pdd_info'];
                                                                        }); ?>
                                                                    </th>
                                                                </tr>
                                                            <?php }
                                                        ?>
                                                        <tr>
                                                            <th><?= ((int)AccountInfoType == 10) ? "Department": "Group"; ?></th>
                                                            <th><?= show_groups(@$client_user['user_info']['pdcud_group'], AccountInfoId, $ccApi); ?></th>
                                                        </tr>
                                                        <tr>
                                                            <th><?= ((int)AccountInfoType == 10) ? "Unit": "Sub-Group"; ?></th>
                                                            <th><?= show_subgroups(@$client_user['user_info']['pdcud_subgroup'], AccountInfoId, $ccApi); ?></th>
                                                        </tr>
                                                        <?php
                                                            if ((int)AccountInfoType == 10) { ?>
                                                                <tr>
                                                                    <th>Committee</th>
                                                                    <th><?= show_committees(@$client_user['user_info']['pdcud_committee'], AccountInfoId, $ccApi); ?></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Sub-Committee</th>
                                                                    <th><?= show_subcommittees(@$client_user['user_info']['pdcud_subcommittee'], AccountInfoId, $ccApi); ?></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Appointment Status</th>
                                                                    <th><?= @$ccApi->fetch_from($get_string="staff-assembly-member/appointment_status?id=".$client_user['user_info']['pdcud_appointement_status'], function($status) {
                                                                            return isset($status[0]['pdd_info']) ? $status[0]['pdd_info']: "-";
                                                                        }); ?>
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Terms Served</th>
                                                                    <th><?= @$ccApi->fetch_from($get_string="staff-assembly-member/term_served?id=".$client_user['user_info']['pdcud_terms_served'], function($status) {
                                                                            return isset($status[0]['pdd_info']) ? $status[0]['pdd_info']: "-";
                                                                        }); ?></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Last Year of Appointment</th>
                                                                    <th><?= isset($client_user['user_info']['pdcud_last_appointment_year']) ? $client_user['user_info']['pdcud_last_appointment_year'] : "-"; ?>
                                                                    </th>
                                                                </tr>
                                                            <?php }
                                                        ?>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="col-md-12 border border-bottom-0 border-left-0 border-right-0">
                                            <div class="btn-actions-pane-right text-right m-1">
                                                <a href="<?= Current_BaseUrl; ?>update-user?branch=<?= @$branch['pdc_id']; ?>&user=<?= @$client_user['pdcu_id']; ?>" 
                                                    class="btn btn-sm btn-warning" target="_blank" >Update User</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        <?php }
                    ?>
                </div>
            </div>
        </div>
    </div>
    <div class="card-footer">

    </div>
</div>

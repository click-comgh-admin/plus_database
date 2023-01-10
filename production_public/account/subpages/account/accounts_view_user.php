<?php
    use Encryptor\Encryptor;

    $encryptor = new Encryptor("clients", md5("clients"));
    $client_user_id = @$_GET['user'];
    $user_id = (int)$encryptor->decrypt($client_user_id);

    $client_user = $ccApi->user_info($type = "client", $account_id = $account_id, $all="one_client_user", $id=$user_id, function ($info)
	{
		return isset($info[0]) ? @$info[0] : [];
	});
    
?>

<pre><?php //print_r(@$client_user); ?></pre>

<div class="row justify-content-center">
    <?php
        if (empty($client_user)) { ?>
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
                                    <?= @$client_user['pdcu_firstname'] . " " . @$client_user['pdcu_surname']; ?>'s Photo
                                </div>
                            </div>
                            <div class="card-body p-0"
                                background-image="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= @$client_user['pdcu_profile_picture']; ?>">
                                <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-c enter ml-auto mr-auto">
                                            <div class="widget-content-ce nter">
                                                <img width="150" height="150" class="rounded-circle shadow" alt="Member Image"
                                                    src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= @$client_user['pdcu_profile_picture']; ?>">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <h5 class="card-title mb-0"><?= @$client_user['pdcu_firstname'] . " " . @$client_user['pdcu_surname']; ?>
                                </h5>
                                <a class="btn-actions-pane-right btn btn-warning"
                                    href="<?= account_BaseUrl; ?>accounts?edit=photo&user=<?= $client_user_id; ?>">Edit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-lg-8">
                <div class="main-card mb-3 card">
                    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                        About <?= @$client_user['pdcu_firstname'] . " " . @$client_user['pdcu_surname']; ?>
                        <div class="btn-actions-pane-right">
                            <div class="btn-group-sm nav btn-group" role="group">
                                <a class="btn-shadow btn btn-info show active" href="#main_details_tab" data-toggle="tab">Main
                                    Details</a>
                                <a class="btn-shadow btn btn-primary show" href="#user_details_tab" data-toggle="tab">User
                                    Info</a>
                                <a class="btn-shadow btn btn-info show" href="#access_level_tab" data-toggle="tab">Access Level</a>
                                <button class="btn btn-sm btn-outline-danger"
                                    btn-submit-post=<?= json_encode(["user_id"=>@$client_user['pdcu_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete User?"
                                    btn-submit-post--url="<?= API_BASE_URL."client-membership/user/delete"; ?>">
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
                                                        <th><?= (@$client_user['pdcu_gender'] == 1) ? "Male" : "Female"; ?></th>
                                                    </tr>
                                                    <tr>
                                                        <th>Date of Birth</th>
                                                        <th><?= date("Y-m-d", strtotime(@$client_user['pdcu_date_of_birth'])); ?></th>
                                                    </tr>
                                                    <tr>
                                                    <tr>
                                                        <th>Phone</th>
                                                        <th><a
                                                                href="tel:<?= @$client_user['pdcu_phone']; ?>"><?= @$client_user['pdcu_phone']; ?></a>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>E-mail</th>
                                                        <th><a
                                                                href="mailto:<?= @$client_user['pdcu_email']; ?>"><?= @$client_user['pdcu_email']; ?></a>
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
                                                    <tr>
                                                        <th>Access</th>
                                                        <th>
                                                            <?php
                                                                $get_string = "page-access-levels/client_level?client_id=".AccountInfoId."&user_id=".$client_user['pdcu_id'];
                                                                $user_access_levels = $ccApi->fetch_from($get_string, function($pages)
                                                                {
                                                                    $access_levels = [];
                                                                    if (is_array($pages)) {
                                                                        foreach ($pages as $key => $page) {
                                                                            if (!in_array($page['pdpcl_page_id'], $access_levels)) {
                                                                                array_push($access_levels, $page['pdpcl_page_id']);
                                                                            }
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
                                                        <th class="text-center"><?= date("Y-m-d @ H:i A", strtotime(@$client_user['_date_'])); ?>
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
                                </div>
                            </div>
                            <div class="tab-pane show" id="access_level_tab" role="tabpanel">
                                <h4 class="card-title">User Access Levels</h4>
                                <div class="row justify-content-center">
                                    <div class="col-md-8 col-lg-8">
                                        <form role="form" action="<?= API_BASE_URL; ?>page-access-levels/update_client" make-general-posts="Update Access Level(s)">
                                            <div class="table-responsive">
                                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                    <thead class="shadow bg-primary">
                                                        <tr>
                                                            <th class="text-white">Page Level</th>
                                                            <th class="text-white text-center">Access</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <?php require_once(BASE_DIRECTORY."/account/forms/account/edit/edit_pages-access-level.php"); ?>
                                                    </tbody>
                                                </table>
                                                <div class="col-md-12">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-12 col-md-12">
                                                            <input type="hidden" name="client_id" value="<?= $account_info['pdc_id']; ?>" />
                                                            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                                                            <input type="hidden" name="user_id" value="<?= @$client_user['pdcu_id']; ?>" />
                                                        </div>
                                                        <div class="col-lg-6 col-md-6">
                                                            <button type="submit"
                                                                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Access Level(s)
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-block text-right card-footer">
                        <a class="btn-wide btn btn-warning" href="<?= account_BaseUrl; ?>accounts?edit=info&user=<?= $client_user_id; ?>">Edit User Info</a>
                        <a class="btn-wide btn btn-warning" href="<?= account_BaseUrl; ?>accounts?edit=password&user=<?= $client_user_id; ?>">Reset Password</a>
                    </div>
                </div>
            </div>
        <?php }
    ?>
    
</div>
<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Sub-Committees");
    define('PAGE_DESC', "View All Sub-Committees Belonging To Created Committees.");
?>
<!doctype html>
<html lang="en">
    <?php require_once 'assets/php/page_components/header/head.php'; ?>

    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once 'assets/php/page_components/header/navbar.php'; ?>
            <?php require_once 'assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once 'assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-share icon-gradient bg-mean-fruit">
                                        </i>
                                    </div>
                                    <div>
                                        <?= PAGE_TITLE; ?>
                                        <div class="page-title-subheading"><?= PAGE_DESC; ?></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                                // if ($account_status['is_active'] === false) {
                                //     require_once 'assets/php/page_components/account_inactive.php';
                                //     require_once 'assets/php/page_components/footer/close.php';
                                //     die();
                                // }
                                // $_appPage = 0;
                                // foreach ($appPages as $key => $page) {
                                //     if ((string)strtolower($page['pdpc_page']) === "membership data") {
                                //         $_appPage = $page['pdpc_id'];
                                //     }
                                // }
                                // if (in_array($_appPage, $my_access_levels) === false) {
                                //     require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                                //     require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                                //     die();
                                // }

                                $subgroupList = $ccApi->committees($all=true, $account_id, $id=1, function($groups) use($ccApi, $account_id) {
                                    $subgroupList = [];
                                    foreach ($groups as $group_key => $group) {
                                        $subgroups = $ccApi->subcommittees($all=true, $account_id, $group_id = $group['pdmg_id'], $id=1,
                                        function($subgroups) {
                                            return $subgroups;
                                        });
                                        $data = ["group" => $group, "subgroups" => $subgroups];
                                        if (!in_array($data, $subgroupList)) {
                                            array_push($subgroupList, $data);
                                        }
                                    }
                                    return  $subgroupList;
                                });
                                // echo "<pre>";
                                // print_r($subgroupList);
                                // echo "</pre>";

                                function show_subgroups($group, $account_id, $ccApi) { ?>
                                    <a href="#" data-toggle="modal" open-modal--id="subgroups-<?= $group['pdmg_id']; ?>"
                                        open-modal--title="<?= $group['pdmg_group']; ?> Sub-Committees" open-modal--html='<?php 
                                            $group_id = $group['pdmg_id']; 
                                            
                                            $subgroups = $ccApi->subcommittees($all=true, $account_id, $group_id, $id=1, function($subgroups) {
                                                return @$subgroups;
                                            });

                                            if (!empty($subgroups)) {
                                                $subgroupList = '<ul class="d-block">';
                                                foreach ($subgroups as $key => $subgroup) {                                
                                                    $subgroupList .= '<li>'.@$subgroup['pdmg_subgroup'].'</li>';
                                                }
                                                echo $subgroupList .= '</ul>';
                                            } else {
                                                echo "No Sub-Committee(s) Created";
                                            }
                                        ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                        '>
                                        <?= $group['pdmg_group']; ?>
                                    </a>
                                <?php }
                                
                                function edit_btn($group, $subgroup, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                    <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                        open-modal--id="edit_group-<?= $group['pdmg_id']; ?>-<?= $type; ?>-<?= $subgroup['pdmg_id']; ?>"
                                        open-modal--title="Edit Sub-Committee of [<?= $group['pdmg_group']; ?>]" open-modal--html='<?php 
                                            $group_id = $group['pdmg_id']; 
                                            $group_name = $group['pdmg_group']; 
                                            $subgroup_id = $subgroup['pdmg_id']; 
                                            $subgroup_name = $subgroup['pdmg_subgroup']; 
                                            require 'subpages/forms/groups.subgroups/subcommittee-edit_form.php'; 
                                        ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                        '>
                                        <span class="pe-7s-edit"></span>
                                        <span class="d-none d-sm-block">Edit</span>
                                    </button>
                                <?php }

                                function show_info_btn($group, $group_TimeAgo, $group_created_by, $group_updated_TimeAgo, $group_updated_by, $subgroup, $created_by, $updated_TimeAgo, $updated_by, $TimeAgo, $class) { ?>
                                    <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                        open-modal--id="info_subgroup-<?= $group['pdmg_id']; ?>-<?= $subgroup['pdmg_id']; ?>" open-modal--title="Sub-Committee Info"
                                        open-modal--html='<?php 
                                            $created_by = !empty($subgroup['pdmg_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                            $date = date('Y/ m/ d', strtotime(@$subgroup['_date_']));
                                            $timeAgo = !empty($subgroup) ? @$TimeAgo->get(): "-";

                                            $updated_by = !empty($subgroup['pdmg_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                            $updated_date = date('Y/ m/ d', strtotime(@$subgroup['_update_date_']));
                                            $updated_timeAgo = !empty($subgroup) ? @$updated_TimeAgo->get(): "-";

                                            $group_created_by = !empty($group['pdmg_created_by']) ? @$group_created_by['pdcu_firstname'] ." ". @$group_created_by['pdcu_surname']: "-";
                                            $group_date = date('Y/ m/ d', strtotime(@$group['_date_']));
                                            $group_timeAgo = !empty($group) ? @$group_TimeAgo->get(): "-";

                                            $group_updated_by = !empty($group['pdmg_created_by']) ? @$group_updated_by['pdcu_firstname'] ." ". @$group_updated_by['pdcu_surname']: "-";
                                            $group_updated_date = date('Y/ m/ d', strtotime(@$group['_update_date_']));
                                            $group_updated_timeAgo = !empty($group) ? @$group_updated_TimeAgo->get(): "-";

                                            show_info(
                                                $created_by = $created_by, $date = $date, $timeAgo = $timeAgo,
                                                $updated_by = $updated_by, $updated_date = $updated_date,
                                                $updated_timeAgo = $updated_timeAgo
                                            );
                                            echo '<h3 class="card-title my-2">Committee ('.@$group['pdmg_group'].')</h3>';
                                            show_info(
                                                $created_by = $group_created_by, $date = $group_date, $timeAgo = $group_timeAgo,
                                                $updated_by = $group_updated_by, $updated_date = $group_updated_date,
                                                $updated_timeAgo = $group_updated_timeAgo
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

                                function delete_btn($group_id, $subgroup_id, $account_id, $user_id, $class) { ?>
                                    <button class="<?= $class; ?>"
                                        btn-submit-post=<?= json_encode(["group_id"=>$group_id, "subgroup_id"=>$subgroup_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                        btn-submit-post--confirm="Delete Sub-Committee?"
                                        btn-submit-post--url="<?= API_BASE_URL."client-membership/subcommittee/delete"; ?>">
                                        <span class="pe-7s-trash"></span>
                                        <span class="d-none d-sm-block">Delete</span>
                                    </button>
                                <?php }
                            ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Create Sub-Committee</h5>
                                        <?php require_once 'subpages/forms/groups.subgroups/subcommittee-create_form.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Sub-Committees</h5>
                                        <div class="d-none d-lg-block table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">Committee</th>
                                                        <th style="white-space: nowrap;">Sub-Committee</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                        <th style="white-space: nowrap;">By</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($subgroupList as $sL_key => $sL) {
                                                            $group = @$sL['group'];
                                                            $subgroups = @$sL['subgroups'];
                                                            
                                                            // echo "<pre>";
                                                            // print_r($subgroups);
                                                            // echo "</pre>"; 

                                                            if (!empty($group)) {
                                                                $group_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$group['_date_'])));

                                                                $group_created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$group['pdmg_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $group_updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$group['_update_date_'])));

                                                                $group_updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$group['pdmg_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            }

                                                            foreach ($subgroups as $key => $subgroup) {
                                                                if (!empty($subgroup)) {
                                                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subgroup['_date_'])));

                                                                    $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subgroup['pdmg_created_by'],
                                                                    function ($info) {
                                                                        return @$info[0];
                                                                    });

                                                                    $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subgroup['_update_date_'])));

                                                                    $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subgroup['pdmg_updated_by'],
                                                                    function ($info) {
                                                                        return @$info[0];
                                                                    });
                                                                } ?>
                                                                <tr>
                                                                    <th>-</th>
                                                                    <td style="white-space: nowrap">
                                                                        <?= show_subgroups(@$group, $account_id, $ccApi); ?>
                                                                    </td>
                                                                    <td style="white-space: nowrap">
                                                                        <?= @$subgroup['pdmg_subgroup']; ?>
                                                                    </td>
                                                                    <td class="text-center" style="white-space: nowrap">
                                                                        <?= show_info_btn($group, $group_TimeAgo, $group_created_by, $group_updated_TimeAgo, $group_updated_by, $subgroup, $created_by, $updated_TimeAgo, $updated_by, $TimeAgo, "btn btn-sm btn-info shadow"); ?>
                                                                        <?= edit_btn($group, $subgroup, $account_id, $user_id, "Edit Sub-Committee", "ml-2 p-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                        <?php 
                                                                            $group_id = $group['pdmg_id']; 
                                                                            $subgroup_id = $subgroup['pdmg_id']; 
                                                                            delete_btn($group_id, $subgroup_id, $account_id, $user_id, "ml-2 p-1 btn btn-sm btn-danger shadow"); 
                                                                        ?>
                                                                    </td>
                                                                    <td>
                                                                        <table>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th style="white-space: nowrap">Created By</th>
                                                                                    <td style="white-space: nowrap">
                                                                                        <?= !empty($subgroup['pdmg_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th style="white-space: nowrap">Updated By</th>
                                                                                    <td style="white-space: nowrap">
                                                                                        <?= !empty($subgroup['pdmg_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            <?php }
                                                        }
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
                                                        <th style="white-space: nowrap;">Sub-Committee</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($subgroupList as $sL_key => $sL) {
                                                            $group = @$sL['group'];
                                                            $subgroups = @$sL['subgroups'];
                                                            
                                                            // echo "<pre>";
                                                            // print_r($subgroups);
                                                            // echo "</pre>"; 

                                                            if (!empty($group)) {
                                                                $group_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$group['_date_'])));

                                                                $group_created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$group['pdmg_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $group_updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$group['_update_date_'])));

                                                                $group_updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$group['pdmg_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            }

                                                            foreach ($subgroups as $key => $subgroup) {
                                                                if (!empty($subgroup)) {
                                                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subgroup['_date_'])));

                                                                    $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subgroup['pdmg_created_by'],
                                                                    function ($info) {
                                                                        return @$info[0];
                                                                    });

                                                                    $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$subgroup['_update_date_'])));

                                                                    $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$subgroup['pdmg_updated_by'],
                                                                    function ($info) {
                                                                        return @$info[0];
                                                                    });
                                                                } ?>
                                                                <tr>
                                                                    <th>-</th>
                                                                    <td style="white-space: nowrap">
                                                                        <?= @$subgroup['pdmg_subgroup']; ?>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <?= show_info_btn($group, $group_TimeAgo, $group_created_by, $group_updated_TimeAgo, $group_updated_by, $subgroup, $created_by, $updated_TimeAgo, $updated_by, $TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                        <?= edit_btn($group, $subgroup, $account_id, $user_id, "Edit Sub-Committee", "m-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                        <?php 
                                                                            $group_id = $group['pdmg_id']; 
                                                                            $subgroup_id = $subgroup['pdmg_id']; 
                                                                            delete_btn($group_id, $subgroup_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
                                                                        ?>
                                                                    </td>
                                                                </tr>
                                                            <?php }
                                                        }
                                                        
                                                    ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php require_once 'assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once 'assets/php/page_components/footer/js.php'; ?>
    </body>

</html>
<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Committees");
    define('PAGE_DESC', "View All Committees");
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
                                        <i class="pe-7s-vector icon-gradient bg-mean-fruit">
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
                                //     require_once 'assets/php/page_components/no_page_access.php';
                                //     require_once 'assets/php/page_components/footer/close.php';
                                //     die();
                                // }
                                
                                $groups = $ccApi->committees($all=true, $account_id, $id=1, function($groups) {
                                    return @$groups;
                                });

                                function show_subgroups($group, $account_id, $ccApi) { ?>
                                    <a href="#" data-toggle="modal" open-modal--id="subgroups-<?= $group['pdmg_id']; ?>"
                                        open-modal--title="<?= $group['pdmg_group']; ?> Sub-Committees" open-modal--html='<?php 
                                            $group_id = $group['pdmg_id']; 
                                            
                                            $subgroups = $ccApi->subgroups($all=true, $account_id, $group_id, $id=1, function($subgroups) {
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
                                
                                function edit_btn($group, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
                                    <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                        open-modal--id="edit_group-<?= $group['pdmg_id']; ?>-<?= $type; ?>"
                                        open-modal--title="Edit Committee" open-modal--html='<?php 
                                            $group_id = $group['pdmg_id']; 
                                            $group_name = $group['pdmg_group']; 
                                            require 'subpages/forms/groups.subgroups/committee-edit_form.php'; 
                                        ?>' open-modal--buttons='
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                        '>
                                        <span class="pe-7s-edit"></span>
                                        <span class="d-none d-sm-block">Edit</span>
                                    </button>
                                <?php }

                                function show_info_btn($group, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, $class) { ?>
                                    <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                        open-modal--id="info_group-<?= $group['pdmg_id']; ?>" open-modal--title="Committee Info"
                                        open-modal--html='<?php 
                                            $created_by = !empty($group['pdmg_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-";
                                            $date = date('Y/ m/ d', strtotime(@$group['_date_']));
                                            $timeAgo = !empty($group) ? @$TimeAgo->get(): "-";

                                            $updated_by = !empty($group['pdmg_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-";
                                            $updated_date = date('Y/ m/ d', strtotime(@$group['_update_date_']));
                                            $updated_timeAgo = !empty($group) ? @$updated_TimeAgo->get(): "-";

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

                                function delete_btn($group_id, $account_id, $user_id, $class) { ?>
                                    <button class="<?= $class; ?>"
                                        btn-submit-post=<?= json_encode(["group_id"=>$group_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                        btn-submit-post--confirm="Delete Committee?"
                                        btn-submit-post--url="<?= API_BASE_URL."client-membership/committee/delete"; ?>">
                                        <span class="pe-7s-trash"></span>
                                        <span class="d-none d-sm-block">Delete</span>
                                    </button>
                                <?php }
                            ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Create Committee</h5>
                                        <?php require_once 'subpages/forms/groups.subgroups/committee-create_form.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Committees</h5>
                                        <div class="d-none d-lg-block table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">Committee</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                        <th style="white-space: nowrap;">By</th>
                                                        <th style="white-space: nowrap;">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($groups as $key => $group) { 
                                                            if (!empty($group)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$group['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$group['pdmg_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$group['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$group['pdmg_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;">
                                                                    <?= show_subgroups($group, $account_id, $ccApi); ?>
                                                                </td>
                                                                <td style="white-space: nowrap;" class="text-center">
                                                                    <?= edit_btn($group, $account_id, $user_id, "Edit Committee", "ml-2 p-1 btn btn-sm btn-warning shadow", $tf=$tf, $type = "md"); ?>
                                                                    <?php 
                                                                        $group_id = $group['pdmg_id']; 
                                                                        delete_btn($group_id, $account_id, $user_id, "ml-2 p-1 btn btn-sm btn-danger shadow"); 
                                                                    ?>
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Created By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($group['pdmg_created_by']) ? @$created_by['pdcu_firstname'] ." ". @$created_by['pdcu_surname']: "-"; ?>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Updated By</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <?= !empty($group['pdmg_updated_by']) ? @$updated_by['pdcu_firstname'] ." ". @$updated_by['pdcu_surname']: "-"; ?>
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
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$group['_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($group) ? @$TimeAgo->get(): "-"; ?></i>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="white-space: nowrap">Update Time</th>
                                                                                <td style="white-space: nowrap">
                                                                                    <u> <?= date('Y/ m/ d', strtotime(@$group['_update_date_'])); ?> </u>
                                                                                    <br class="m-0" />
                                                                                    <i><?= !empty($group) ? @$updated_TimeAgo->get(): "-"; ?></i>
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
                                                        <th style="white-space: nowrap;">Committee</th>
                                                        <th style="white-space: nowrap;" class="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        foreach ($groups as $key => $group) { 
                                                            if (!empty($group)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$group['_date_'])));

                                                                $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$group['pdmg_created_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });

                                                                $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$group['_update_date_'])));

                                                                $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$group['pdmg_updated_by'],
                                                                function ($info) {
                                                                    return @$info[0];
                                                                });
                                                            } ?>
                                                            <tr>
                                                                <th><?= (int)$key + 1; ?></th>
                                                                <td style="white-space: nowrap;"><?= show_subgroups($group, $account_id, $ccApi); ?></td>
                                                                <td class="text-center">
                                                                    <?= show_info_btn($group, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "m-1 btn btn-sm btn-info shadow"); ?>
                                                                    <?= edit_btn($group, $account_id, $user_id, "Edit This Committee", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                                                                    <?php 
                                                                        $group_id = $group['pdmg_id']; 
                                                                        delete_btn($group_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
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
                    </div>
                    <?php require_once 'assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once 'assets/php/page_components/footer/js.php'; ?>
    </body>

</html>
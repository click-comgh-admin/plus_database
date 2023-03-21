<?php
	require_once '../../assets/php/include.php';
	require_once '../../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Branch Communications");
    define('PAGE_DESC', "Send & View Messages From Head Office.");
?>
<!doctype html>
<html lang="en">
    <?php require_once '../../assets/php/page_components/header/head.php'; ?>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once '../../assets/php/page_components/header/navbar.php'; ?>
            <?php require_once '../../assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once '../../assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon small p-2">
                                        <i class="small pe-7s-mail-open icon-gradient bg-night-sky">
                                            <i class="small pe-7s-share icon-gradient bg-night-sky"></i>
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
                            //     require_once '../../assets/php/page_components/account_inactive.php';
                            //     require_once '../../assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            // $_appPage = 0;
                            // foreach ($appPages as $key => $page) {
                            //     if ((string)strtolower($page['pdpc_page']) === "communication") {
                            //         if ((string)strtolower($page['pdpc_page']) === "communication") {
                            //             $_appPage = $page['pdpc_id'];
                            //         }
                            //     }
                            // }
                            // if (in_array($_appPage, $my_access_levels) === false) {
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            define("Current_BaseUrl", CLIENT_BASE_URL."account-branch/communications");
                            define("Current_BaseDir", BASE_DIRECTORY."/account-branch/communications");
                            $account_code = $ccApi->account_code($all="id", $id=$account_id, function ($account_codes) {
                                return @$account_codes[0];
                            });
                            if (!empty($account_code)) {
                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($account_code['_date_'])));

                                $update_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$user_id, function ($info) {
                                    return @$info[0];
                                });
                            }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-4">
                                <div class="row justify-content-center">
                                    <?php /* <div class="col-md-12 col-lg-12">
                                        <?php
                                            $tittle_placeholder = "Search...";
                                            $id_name = "query";
                                            $input_value = (isset($_GET['query'])) ? $_GET['query'] : null;

                                            $input_value = 'value="'.$input_value.'"';
                                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" comms-search--at="members"
                                                comms-search="'.CLIENT_BASE_URL.'communications/members" comms-search--aid="'.$account_id.'"
                                                comms-search--acc_name="'.$account_info['pdc_name'].'" placeholder="'.$tittle_placeholder.'"';
                                            echo $tf->use(DIRECTORY."/templates/form/input-icon--right.tmpl", [
                                                [ "name"=>"icon", "value"=>"fa fa-search fa-1x icon-gradient bg-warm-flame text-success btn btn-sm shadow" ],
                                                [ "name"=>"type", "value"=>"text" ],
                                                [ "name"=>"input_class", "value"=>"shadow bg-transparent" ],
                                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                            ]);
                                        ?>
                                    </div> */ ?>
                                    <div class="col-md-12 col-lg-12">
                                        <div class="mb-3">
                                            <div class="card-body m-0 p-0">
                                                <ul email-tabs="nav">
                                                    <?php 
                                                        $head_account_id = isset($is_branch_account['pdcbl_client']) ? $is_branch_account['pdcbl_client'] : 0;
                                                        $branch_account_id = isset($is_branch_account['pdcbl_branch']) ? $is_branch_account['pdcbl_branch'] : 0;

                                                        $get_string = "client-membership/branch/communications/client_to_branch_acc?branch_id=$branch_account_id&account_id=$head_account_id&user_id=$user_id";
                                                        $inbox_msg_count = $ccApi->fetch_from($get_string=$get_string, function($messages)
                                                        {
                                                            return isset($messages['inbox_msg_count'])? $messages['inbox_msg_count']: 0;
                                                        }, $debug = false);
                                                    ?>
                                                    <li email-tabs="nav-item" <?= (isset($_GET['inbox']) || !isset($_GET['inbox']) && !isset($_GET['outbox']) && !isset($_GET['compose']) && !isset($_GET['show']) ) ? 'class="active"' : ""; ?> >
                                                        <a href="?inbox">Inbox <?= ($inbox_msg_count === 0) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right">'. $inbox_msg_count .'</span>'; ?></a>
                                                    </li>
                                                    <li email-tabs="nav-item" <?= isset($_GET['outbox']) ? 'class="active"' : ""; ?> >
                                                        <a href="?outbox">Outbox</a>
                                                    </li>
                                                    <li email-tabs="nav-item" <?= isset($_GET['compose']) ? 'class="active"' : ""; ?> >
                                                        <a href="?compose">Compose</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-8">
                                <div class="mb-3 card shadow">
                                    <?php
                                        function delete_btn($account_id, $user_id, $class, $type) { 
                                            if ($_SERVER['QUERY_STRING'] == "outbox") {?>
                                                <div class="<?= $type; ?>">
                                                    <div class="btn-actions-pane-right">
                                                        <button class="<?= $class; ?> mx-1" style="padding: .25rem .5rem !important"
                                                            btn-submit-multiple=<?= json_encode(["client_id"=>$account_id, "user_id"=>$user_id, "entire"=>1]); ?>
                                                            btn-submit-multiple--confirm="Delete Message(s)?"
                                                            btn-submit-multiple--url="<?= API_BASE_URL."client-membership/branch/communications/delete"; ?>">
                                                            <span class="pe-7s-trash"></span>
                                                            <span class="d-none d-sm-block">Delete</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            <?php }
                                        }
                                    ?>
                                    <?= delete_btn($head_account_id, $user_id, "btn btn-sm bg-love-kiss text-white font-weight-bold", "card-header"); ?>
                                    <div class="card-body <?= ($_SERVER['QUERY_STRING'] == "outbox")?"scroll-area-xl": "";?>" email-tabs="container">
                                        <?php 
                                            if (isset($_GET['inbox'])) {
                                                require_once 'subpages/inbox/clients_inbox.php';
                                            } else if (isset($_GET['outbox'])) {
                                                require_once 'subpages/outbox/clients_outbox.php';
                                            } else if (isset($_GET['compose'])) {
                                                require_once 'subpages/compose/clients_compose.php';
                                            } else if (isset($_GET['show'])) {
                                                if (isset($_GET['reply'])) {
                                                    require_once 'subpages/compose/clients_compose_reply.php';
                                                } else {
                                                    require_once 'subpages/show/clients_show.php';
                                                }
                                            } else {
                                                require_once 'subpages/inbox/clients_inbox.php';
                                            }
                                        ?>
                                    </div>
                                    <?= delete_btn($head_account_id, $user_id, "btn btn-sm bg-love-kiss text-white font-weight-bold", "card-footer"); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php require_once '../../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
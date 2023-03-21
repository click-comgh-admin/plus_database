<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "SMS ID");
    define('PAGE_DESC', "Set SMS ID For Out Going Messages.");
?>
<!doctype html>
<html lang="en">
    <?php require_once '../assets/php/page_components/header/head.php'; ?>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once '../assets/php/page_components/header/navbar.php'; ?>
            <?php require_once '../assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once '../assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-id icon-gradient bg-happy-green">
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
                            //     if ((string)strtolower($page['pdpc_page']) === "communication") {
                            //         $_appPage = $page['pdpc_id'];
                            //     }
                            // }
                            // if (in_array($_appPage, $my_access_levels) === false) {
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            $account_sms_id = $ccApi->account_sms_id($all="id", $id=$account_id, function ($account_sms_ids) {
                                return @$account_sms_ids[0];
                            });
                            if (!empty($account_sms_id)) {
                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($account_sms_id['_date_'])));

                                $update_by = $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=$user_id, function ($info) {
                                    return @$info[0];
                                });
                            }

                            function make_sms_id($account_name)
                            {
                                $an_parts = explode(" ", $account_name);

                                if (isset($an_parts[1])) {
                                    $part_1 = $an_parts[0];
                                    $part_2 = $an_parts[1];
                                    return substr($part_1, 0, 5)."-".substr($part_2, 0, 5);
                                } else {
                                    return substr($account_name, 0, 10);
                                }
                            }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-8">
                                <div class="mb-3 card shadow">
                                    <div class="card-body">
                                        <?php 
                                            if (empty($account_sms_id)) {
                                                define('ACTION_URL', false);
                                            } else {
                                                define('ACTION_URL', true);
                                            }
                                            require_once 'forms/sms-id_form.php';
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Account SMS ID</h5>
                                        <table class="mb-0 table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Code</th>
                                                    <th style="white-space: nowrap;">Updated By</th>
                                                    <th style="white-space: nowrap;">Last Updated</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><?= !empty($account_sms_id) ? @$account_sms_id['pdcc_sms_id']: make_sms_id($account_info['pdc_name']); ?></td>
                                                    <td><?= !empty($account_sms_id) ? @$update_by['pdcu_firstname'] ." ". @$update_by['pdcu_surname']: "-"; ?></td>
                                                    <td>
                                                        <?= !empty($account_sms_id) ? date('Y/ m/ d', strtotime(@$account_sms_id['_date_'])) : "-"; ?>
                                                        <hr class="m-0"/>
                                                        <i><?= !empty($account_sms_id) ? @$TimeAgo->get(): "-"; ?></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php require_once '../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Account Code");
    define('PAGE_DESC', "Set Account Code To Enable External Registration");
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
                                        <i class="pe-7s-tools icon-gradient bg-mean-fruit">
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
                            if ($account_status['is_active'] === false) {
                                require_once 'assets/php/page_components/account_inactive.php';
                                require_once 'assets/php/page_components/footer/close.php';
                                die();
                            }
                            $_appPage = 0;
                            foreach ($appPages as $key => $page) {
                                if ((string)strtolower($page['pdpc_page']) === "membership data") {
                                    $_appPage = $page['pdpc_id'];
                                }
                            }
                            if (in_array($_appPage, $my_access_levels) === false) {
                                require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                                require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                                die();
                            }
                            $account_code = $ccApi->account_code($all="id", $id=$account_id, function ($account_codes) {
                                return @$account_codes[0];
                            });
                            if (!empty($account_code)) {
                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($account_code['_date_'])));

                                $update_by = $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=$user_id, function ($info) {
                                    return @$info[0];
                                });
                            }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-8">
                                <div class="mb-3 card shadow">
                                    <div class="card-body">
                                        <?php 
                                            if (empty($account_code)) {
                                                define('ACTION_URL', false);
                                            } else {
                                                define('ACTION_URL', true);
                                            }
                                            require_once 'subpages/forms/account-code_form.php';
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-8">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Account Code</h5>
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
                                                    <td><?= !empty($account_code) ? @$account_code['pdcc_code']: "-"; ?></td>
                                                    <td><?= !empty($account_code) ? @$update_by['pdcu_firstname'] ." ". @$update_by['pdcu_surname']: "-"; ?></td>
                                                    <td>
                                                        <?= date('Y/ m/ d', strtotime(@$account_code['_date_'])); ?>
                                                        <hr class="m-0"/>
                                                        <i><?= !empty($account_code) ? @$TimeAgo->get(): "-"; ?></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
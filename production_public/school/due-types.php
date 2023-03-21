<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Dues => Types");
    define('PAGE_DESC', "View, Create & Delete Due Types");
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
                                        <i class="pe-7s-menu icon-gradient bg-love-kiss">
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
                            //     require_once '../assets/php/page_components/account_inactive.php';
                            //     require_once '../assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            // $_appPage = 0;
                            // foreach ($appPages as $key => $page) {
                            //     if ((string)strtolower($page['pdpc_page']) === "school") {
                            //         $_appPage = $page['pdpc_id'];
                            //     }
                            // }
                            // if (in_array($_appPage, $my_access_levels) === false) {
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            define("dues_BaseUrl", CLIENT_BASE_URL."dues/");
                            $get_string = "payment_intervals";
                            $payment_intervals = $ccApi->dues($get_string, function($payment_intervals)
                            {
                                return @$payment_intervals;
                            }, $debug = false);

                        ?>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="main-card mb-3 card shadow">
                                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                                <div class="card-header-title">
                                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Add Due Type
                                                </div>
                                            </div>
                                            <div class="card-body py-0">
                                                <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "due-type"))? "show": ""; ?> py-2" id="add_due_type">
                                                    <?php require_once "forms/add_due_type.php"; ?>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <?php
                                                    if (isset($_POST['add-form'])) {
                                                        if ($_POST['add-form'] == "due-type") { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                                                type="button" data-toggle="collapse" href="#add_due_type">Add Due Type Form</button>
                                                        <?php } else { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                                type="button" data-toggle="collapse" href="#add_due_type">Add Due Type Form</button>
                                                        <?php }
                                                    } else { ?>
                                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                            type="button" data-toggle="collapse" href="#add_due_type">Add Due Type Form</button>
                                                    <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                                if (isset($_GET['edit'])) {
                                    if (isset($_GET['edit']) && !empty($_GET['edit'])) {
                                        require_once "subpages/dues_edit.php";
                                    } else {
                                        require_once "subpages/dues.php";
                                    }
                                } else {
                                    require_once "subpages/dues.php";
                                }
                            ?>
                        </div>
                    </div>
                    <?php require_once '../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
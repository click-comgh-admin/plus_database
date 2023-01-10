<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "My Account");
    define('PAGE_DESC', "User Account");
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
                                        <i class="pe-7s-id icon-gradient bg-malibu-beach">
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
                                require_once '../assets/php/page_components/account_inactive.php';
                                require_once '../assets/php/page_components/footer/close.php';
                                die();
                            }
                            define("account_BaseUrl", CLIENT_BASE_URL."account/");
                        ?>
                        <?php
                            if (isset($_GET['edit']) && !empty($_GET['edit'])) {
                                require_once "subpages/account/my_account_edit.php";
                            } else {
                                require_once "subpages/account/my_account_view.php";
                            }
                        ?>
                    </div>
                    <?php require_once '../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
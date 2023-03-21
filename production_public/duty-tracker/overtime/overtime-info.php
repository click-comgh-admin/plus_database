<?php
	require_once '../../assets/php/include.php';
	require_once '../../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Duty Tracker => Overtime");
    define('PAGE_DESC', "View Overtime");
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
                                    <div class="page-title-icon w-25">
                                        <i class="pe-7s-portfolio icon-gradient bg-grow-early">
                                        </i>
                                        <i class="pe-7s-clock icon-gradient bg-grow-early">
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
                            //     if ((string)strtolower($page['pdpc_page']) === "duty tracker") {
                            //         $_appPage = $page['pdpc_id'];
                            //     }
                            // }
                            // if (in_array($_appPage, $my_access_levels) === false) {
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            define("Current_BaseUrl", CLIENT_BASE_URL."duty-tracker/overtime/");
                            define("Current_BaseDir", BASE_DIRECTORY."/duty-tracker/overtime/");
                            
                            
                        ?>
                        <?php
                            require_once('subpages/overtime-info/view.php');
                        ?>
                    </div>
                    <?php require_once '../../assets/php/page_components/footer/footer.php'; ?>
                </div>
            </div>
        </div>
        <?php require_once '../../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Update Member Account");
    define('PAGE_DESC', "Update Member Account");

    define("_Webpack_Pack_", Get_Webpack_Tags(
        'membership/members/select-member-type', prefix: IN_PRODUCTION_MODE_PREFIX)
    );
?>
<!doctype html>
<html lang="en">
    <?php 
        $cssFiles = '';
        foreach (_Webpack_Pack_['css'] as $key => $cssFile) {
            $cssFiles .= $cssFile;
        }
        define('WEB_PACK_CSS_FILES', $cssFiles);
        require_once '../assets/php/page_components/header/head.php';
    ?>
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
                                        <i class="pe-7s-note icon-gradient bg-mean-fruit">
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
                            //     if ((string)strtolower($page['pdpc_page']) === "membership data") {
                            //         $_appPage = $page['pdpc_id'];
                            //     }
                            // }
                            define("Current_BaseUrl", CLIENT_BASE_URL."update-member-profile/");
                            define("Current_BaseDir", BASE_DIRECTORY."/update-member-profile/");                            
                        ?>
                        <?php
                            require_once('subpages/member-account/view.php');
                        ?>
                    </div>
                    <?php require_once '../assets/php/page_components/footer/footer.php'; ?>
                </div>
            </div>
        </div>
        <?php 
            $jsFiles = '';
            foreach (_Webpack_Pack_Shared_['js'] as $key => $jsFile) {
                $jsFiles .= $jsFile;
            }
            foreach (_Webpack_Pack_['js'] as $key => $jsFile) {
                $jsFiles .= $jsFile;
            }
            define('WEB_PACK_JS_FILES', $jsFiles);

            require_once '../assets/php/page_components/footer/js.php';
        ?>
    </body>
</html>
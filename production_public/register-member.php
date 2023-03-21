<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    if (AccountInfoCategory === 10) {
        define('PAGE_TITLE', "Register New Staff");
        define('PAGE_DESC', "Create Accounts For New Staff");
    } else if (AccountInfoCategory === 12) {
        define('PAGE_TITLE', "Register New Agent");
        define('PAGE_DESC', "Create Accounts For New Agent");
    } else {
        define('PAGE_TITLE', "Register New Member");
        define('PAGE_DESC', "Create Accounts For New Members");
    }

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
        require_once 'assets/php/page_components/header/head.php';
    ?>
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
                                        <i class="pe-7s-users icon-gradient bg-mean-fruit">
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
                            //     if ((string)strtolower($page['pdpc_page']) === "registration") {
                            //         $_appPage = $page['pdpc_id'];
                            //     }
                            // }
                            // if (in_array($_appPage, $my_access_levels) === false) {
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                        ?>
                        <div class="row">
                            <div class="col-md-12 col-lg-12">
                                <div class="mb-3 card shadow">
                                    <div class="card-body">
                                        <?php 
                                            if (AccountInfoCategory === 10) {
                                                require_once 'custom_dashboard/district_dashboard/forms/registration_form - member.php';
                                            } else if (AccountInfoCategory === 12) {
                                                require_once 'subpages/forms/registration_form - member - contact_bank.php';
                                            } else {
                                                require_once 'subpages/forms/registration_form - member.php';
                                            }
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php require_once 'assets/php/page_components/footer/footer.php'; ?>
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
            require_once 'assets/php/page_components/footer/js.php';
        ?>
    </body>
</html>
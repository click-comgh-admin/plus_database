<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';
	require_once 'assets/v2/php/webpack.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Register New Organization Via Excel");
    define('PAGE_DESC', "Create Accounts For New Organization Via Excel");

    define("_Webpack_Pack_", Get_Webpack_Tags(
        'membership/registration/organization-excel', prefix: IN_PRODUCTION_MODE_PREFIX)
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
        require_once 'assets/php/page_components/header/v2/head.php';
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
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-12">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body px-2">
                                        <membership-registration-excel-organization email="<?= $user_info['pdcu_email']; ?>" 
                                            mid="<?= $user_info['pdcu_id']; ?>" clientId="<?= $user_info['pdcu_account_id']; ?>">
                                        </membership-registration-excel-organization>
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
            require_once 'assets/php/page_components/footer/v2/js.php';
        ?>
    </body>
</html>
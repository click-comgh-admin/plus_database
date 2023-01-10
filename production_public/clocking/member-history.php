<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';
	require_once '../assets/v2/php/webpack.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Attendance V2 => Clocking");
    define('PAGE_DESC', "Meeting/ Event(s) Attendance History");

    define("_Webpack_Pack_", Get_Webpack_Tags(
        'attendance/clocking/history-one', prefix: IN_PRODUCTION_MODE_PREFIX)
    );
?>
<!doctype html>
<html lang="en">
    <?php 
        $cssFiles = '<link rel="stylesheet" href="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/datatables.min.css">
            <link rel="stylesheet" href="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/select/css/select.dataTables.min.css">
            <link rel="stylesheet" href="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/responsive/css/responsive.dataTables.min.css">';
        foreach (_Webpack_Pack_['css'] as $key => $cssFile) {
            $cssFiles .= $cssFile;
        }
        define('WEB_PACK_CSS_FILES', $cssFiles);
        require_once '../assets/php/page_components/header/head.php';
    ?>
    <body class="overflow-y-scroll">
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
                                        <i class="pe-7s-note2 icon-gradient bg-grow-early">
                                        </i>
                                    </div>
                                    <div>
                                        <?= PAGE_TITLE; ?>
                                        <div class="page-title-subheading"><?= PAGE_DESC; ?></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pdb-attendance-clocking-history-one></pdb-attendance-clocking-history-one>
                    </div>
                    <?php require_once '../assets/php/page_components/footer/footer.php'; ?>
                </div>
            </div>
        </div>
        <?php         
        // $jsFiles = '<script type="text/javascript" src="'.CLIENT_BASE_URL.'assets/js/datatables.min.js"></script>';
        $jsFiles = '<script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/datatables.min.js"></script>
            <script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/buttons/datatables.min.js"></script>
            <script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/select/js/select.dataTables.min.js"></script>
            <script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/buttons/js/buttons.dataTables.min.js"></script>
            <script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/pdfmake/pdfmake.min.js"></script>
            <script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/pdfmake/vfs_fonts.js"></script>
            <script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/jszip/jszip.min.js"></script>
            <script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/responsive/datatables.min.js"></script>
            <script src="'.CLIENT_BASE_URL.'assets/v2/3rd-party/datatables/extensions/responsive/js/responsive.dataTables.min.js"></script>';
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
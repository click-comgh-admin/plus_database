<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    use FileManager\FileManager;
    $fM = new FileManager();

    define('PAGE_TITLE', "File Manager => Files");
    define('PAGE_DESC', "Save And View Files/ Documents");
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
                                        <i class="pe-7s-wristwatch icon-gradient bg-sunny-morning">
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
                            $_appPage = 0;
                            foreach ($appPages as $key => $page) {
                                if ((string)strtolower($page['pdpc_page']) === "file manager") {
                                    $_appPage = $page['pdpc_id'];
                                }
                            }
                            if (in_array($_appPage, $my_access_levels) === false) {
                                require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                                require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                                die();
                            }
                            define("FM_BaseUrl", CLIENT_BASE_URL."file-manager/");
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-4">
                                <div class="row mb-2">
                                    <div class="col-md-6 my-1">
                                        <button class="btn-block btn bg-night-sky collapsed text-white" aria-expanded="false"
                                            type="button" data-toggle="collapse" href="#create_folder">Create Folder</button>
                                    </div>
                                    <div class="col-md-6 my-1">
                                        <button class="btn-block btn bg-midnight-bloom collapsed text-white" aria-expanded="false"
                                            type="button" data-toggle="collapse" href="#create_subfolder">Create Sub-Folder</button>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="main-card mb-2 px-0">
                                            <div class="card-body p-0">
                                                <div class="collapse px-0 <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "create_folder"))? "show": ""; ?> py-1" id="create_folder">
                                                    <div class="card shadow p-3">
                                                        <h5 class="card-title">Create Folder</h5>
                                                        <?php require_once "forms/create_folder.php"; ?>
                                                    </div>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12">
                                        <div class="main-card mb-2 px-0">
                                            <div class="card-body p-0">
                                                <div class="collapse px-0 <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "create_subfolder"))? "show": ""; ?> py-1" id="create_subfolder">
                                                    <div class="card shadow p-3">
                                                        <h5 class="card-title">Create Sub-Folder</h5>
                                                        <?php require_once "forms/create_subfolder.php"; ?>
                                                    </div>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12">
                                        <div class="main-card mb-3 card shadow">
                                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                                <div class="card-header-title">
                                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Upload File(s)
                                                </div>
                                            </div>
                                            <div class="card-body py-0">
                                                <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "upload_file"))? "show": ""; ?> py-2" id="upload_file">
                                                    <?php require_once "forms/upload_general.php"; ?>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <?php
                                                    if (isset($_POST['add-form'])) {
                                                        if ($_POST['add-form'] == "upload_file") { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                                                type="button" data-toggle="collapse" href="#upload_file">Upload File(s)</button>
                                                        <?php } else { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                                type="button" data-toggle="collapse" href="#upload_file">Upload File(s)</button>
                                                        <?php }
                                                    } else { ?>
                                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                            type="button" data-toggle="collapse" href="#upload_file">Upload File(s)</button>
                                                    <?php }
                                                ?>
                                            </div>
                                        </div>
                                        <div class="main-card mb-3 card shadow">
                                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                                <div class="card-header-title">
                                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Purchase Space
                                                </div>
                                            </div>
                                            <div class="card-body py-0">
                                                <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "purchase_space"))? "show": ""; ?> py-2" id="purchase_space">
                                                    <?php require_once "forms/purchase_space.php"; ?>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <?php
                                                    if (isset($_POST['add-form'])) {
                                                        if ($_POST['add-form'] == "purchase_space") { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                                                type="button" data-toggle="collapse" href="#purchase_space">Purchase Space</button>
                                                        <?php } else { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                                type="button" data-toggle="collapse" href="#purchase_space">Purchase Space</button>
                                                        <?php }
                                                    } else { ?>
                                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                            type="button" data-toggle="collapse" href="#purchase_space">Purchase Space</button>
                                                    <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-8">
                                <div class="mb-3 card shadow">
                                    <div class="card-body px-0">
                                        <div class="container">
                                            <div class="card-shadow-danger mb-2 widget-chart widget-chart2 text-left card">
                                                <div class="widget-content py-1">
                                                    <div class="widget-content-outer">
                                                        <?php
                                                            $get_string = "clients/spaces/all?account_id=$account_id";
                                                            $spaces = $ccApi->file_manager($get_string, function($spaces)
                                                            {
                                                                return @$spaces[0];
                                                            }, $debug = false);
                                                            $pdcfmf_space = isset($spaces['pdcfmf_space'])? $spaces['pdcfmf_space']: 1;
                                                            $pdcfmf_space_used = isset($spaces['pdcfmf_space_used'])? $spaces['pdcfmf_space_used']: 1;
                                                            $fmSpacePercent = @(int)((floatval($pdcfmf_space_used)*100)/floatval($pdcfmf_space));
                                                            $progressBarVar = ($fmSpacePercent <= 25) ? "success": "danger";
                                                            $progressBarVar = ($fmSpacePercent > 25 && $fmSpacePercent <= 50) ? "info": $progressBarVar;
                                                            $progressBarVar = ($fmSpacePercent > 50 && $fmSpacePercent <= 75) ? "warning": $progressBarVar;

                                                            // $progressBarVar = ($fmSpacePercent <= 25) ? "success": 
                                                            //     ($fmSpacePercent > 25 && $fmSpacePercent <= 50) ? "info":
                                                            //         ($fmSpacePercent > 50 && $fmSpacePercent <= 75) ? "warning": "danger";
                                                            if ($fmSpacePercent <= 25) {
                                                                $progressBarVar = "love-kiss";
                                                                $progressTxt = "danger";
                                                            } else if ($fmSpacePercent > 25 && $fmSpacePercent <= 50) {
                                                                $progressBarVar = "sunny-morning";
                                                                $progressTxt = "warning";
                                                            } else if ($fmSpacePercent > 50 && $fmSpacePercent <= 75) {
                                                                $progressBarVar = "malibu-beach";
                                                                $progressTxt = "info";
                                                            } else {
                                                                $progressBarVar = "happy-green";
                                                                $progressTxt = "success";
                                                            }
                                                        ?>
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left pr-2 fsize-1">
                                                                <div class="widget-numbers mt-0 fsize-3 text-<?= $progressTxt; ?>"><?= $fmSpacePercent; ?>%</div>
                                                            </div>
                                                            <div class="widget-content-right w-100">
                                                                <div class="progress-bar-xs progress">
                                                                    <div class="progress-bar bg-<?= $progressBarVar ?>" role="progressbar" aria-valuenow="<?= $fmSpacePercent; ?>" aria-valuemin="0" aria-valuemax="100" style="width: <?= $fmSpacePercent; ?>%;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="widget-content-left fsize-1">
                                                            <div class="text-muted opacity-6">File Manager Space <i>// <?= $fM->storage_space($spaces['pdcfmf_space_used']); ?> of <?= $fM->storage_space($spaces['pdcfmf_space']); ?></i></div>
                                                        </div
                                                        ><div class="ml-auto">
                                                            <a href="<?= CLIENT_BASE_URL."file-manager/finder"; ?>" 
                                                                class="form-control form-control-sm btn-outline-success text-decoration-none rounded">File Finder <span class="pe-7s-search"></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <?php
                                            if (isset($_GET['id']) && !empty($_GET['id'])) {
                                                require_once "subpages/archive/file.php";
                                            } else { ?>
                                                <script>
                                                    history.back();
                                                </script>
                                            <?php die(); }
                                        ?>
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
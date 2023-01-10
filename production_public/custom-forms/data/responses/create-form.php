<?php
	require_once '../../../assets/php/include.php';
    require_once '../../../defs.php';
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Custom Forms => Question Response(s)");
    define('PAGE_DESC', "Create Response(s)");
?>
<!doctype html>
<html lang="en">
    <?php require_once '../../../assets/php/page_components/header/head.php'; ?>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once '../../../assets/php/page_components/header/navbar.php'; ?>
            <?php require_once '../../../assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once '../../../assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-note icon-gradient bg-sunny-morning">
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
                            define("customForms_BaseUrl", CLIENT_BASE_URL."custom-forms/");
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="main-card mb-3 card shadow">
                                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                                <div class="card-header-title">
                                                    <i class="header-icon lnr-apartment icon-gradient bg-sunny-morning"> </i>Add Response
                                                </div>
                                            </div>
                                            <div class="card-body py-0">
                                                <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "new-response"))? "show": ""; ?> py-2" id="add_new_response">
                                                    <?php require_once "forms/add_new_response.php"; ?>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <?php
                                                    if (isset($_POST['add-form'])) {
                                                        if ($_POST['add-form'] == "new-response") { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                                                type="button" data-toggle="collapse" href="#add_new_response">Add Response</button>
                                                        <?php } else { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                                type="button" data-toggle="collapse" href="#add_new_response">Add Response</button>
                                                        <?php }
                                                    } else { ?>
                                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                            type="button" data-toggle="collapse" href="#add_new_response">Add Response</button>
                                                    <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                                if (isset($_GET['question'])) {
                                    if (isset($_GET['question']) && !empty($_GET['question'])) {
                                        if (isset($_GET['edit'])) {
                                            if (isset($_GET['edit']) && !empty($_GET['edit'])) {
                                                require_once "subpages/edit_response.php";
                                            } else {
                                                require_once "subpages/view_question.php";
                                            }
                                        } else {
                                            require_once "subpages/view_question.php";
                                        }
                                    } else { ?>
                                        <script>
                                            history.back();
                                        </script>
                                    <?php die(); }
                                } else { ?>
                                    <script>
                                        history.back();
                                    </script>
                                <?php die(); }
                            ?>
                        </div>
                    </div>
                    <?php require_once '../../../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../../../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
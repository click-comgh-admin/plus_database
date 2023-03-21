<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Communications Center");
    define('PAGE_DESC', "Send And View Messages");
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
                                        <i class="pe-7s-mail-open-file icon-gradient bg-happy-green">
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
                            //     if ((string)strtolower($page['pdpc_page']) === "contacts") {
                            //         $_appPage = $page['pdpc_id'];
                            //     }
                            // }
                            // if (in_array($_appPage, $my_access_levels) === false) {
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                            //     require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                            //     die();
                            // }
                            define("ComBaseUrl", CLIENT_BASE_URL."communications/");
                            define("ComBaseUrlAlt", CLIENT_BASE_URL."communication");
                            
                        ?>
                        <div class="row">
                            <div class="col-md-6 col-lg-3">
                                <a href="<?= ComBaseUrl; ?>members" class="card btn btn-block mb-3 widget-content bg-night-sky">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Members</div>
                                            <div class="widget-subheading">Send & View Messages From Members.</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white">
                                                <div class="card shadow p-1">
                                                    <h4 class="pe-7s-users fa-1x icon-gradient bg-night-sky">
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <a href="<?= ComBaseUrl; ?>contacts" class="card btn btn-block mb-3 widget-content bg-midnight-bloom">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Contact Book</div>
                                            <div class="widget-subheading">Send & View Messages From Contacts.</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white">
                                                <div class="card shadow p-1">
                                                    <h4 class="pe-7s-phone fa-1x icon-gradient bg-midnight-bloom">
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <a href="<?= ComBaseUrl; ?>customer-care" class="card btn btn-block mb-3 widget-content bg-royal">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Customer Care</div>
                                            <div class="widget-subheading">Interact With AKWAABA Customer Care</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white">
                                                <div class="card shadow p-1">
                                                    <h4 class="pe-7s-headphones fa-1x icon-gradient bg-royal">
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <a href="<?= ComBaseUrl; ?>peers" class="card btn btn-block mb-3 widget-content bg-asteroid">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Peers</div>
                                            <div class="widget-subheading">Message Other Administrative Members.</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white">
                                                <div class="card shadow p-1">
                                                    <h4 class="pe-7s-id fa-1x icon-gradient bg-asteroid">
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-4">
                                <div class="row justify-content-center">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="main-card mb-3 card shadow">
                                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                                <div class="card-header-title">
                                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Add Contact
                                                </div>
                                            </div>
                                            <div class="card-body py-0">
                                                <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact"))? "show": ""; ?> py-2" id="add_contact_form">
                                                    <?php require_once "communications/subpages/contacts/contact_add.php"; ?>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <?php
                                                    if (isset($_POST['add-form'])) {
                                                        if ($_POST['add-form'] == "contact") { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                                                type="button" data-toggle="collapse" href="#add_contact_form">Add Contact Form</button>
                                                        <?php } else { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                                type="button" data-toggle="collapse" href="#add_contact_form">Add Contact Form</button>
                                                        <?php }
                                                    } else { ?>
                                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                            type="button" data-toggle="collapse" href="#add_contact_form">Add Contact Form</button>
                                                    <?php }
                                                ?>
                                            </div>
                                        </div>
                                        <div class="main-card mb-3 card shadow">
                                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                                <div class="card-header-title">
                                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Add Contact Group
                                                </div>
                                            </div>
                                            <div class="card-body py-0">
                                                <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact-group"))? "show": ""; ?> py-2" id="add_group_form">
                                                    <?php require_once "communications/forms/contact/contact-group_add.php"; ?>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <?php
                                                    if (isset($_POST['add-form'])) {
                                                        if ($_POST['add-form'] == "contact-group") { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                                                type="button" data-toggle="collapse" href="#add_group_form">Add Contact Group Form</button>
                                                        <?php } else { ?>
                                                            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                                type="button" data-toggle="collapse" href="#add_group_form">Add Contact Group Form</button>
                                                        <?php }
                                                    } else { ?>
                                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                            type="button" data-toggle="collapse" href="#add_group_form">Add Contact Group Form</button>
                                                    <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                                if (isset($_GET['contacts'])) {
                                    if (isset($_GET['contact']) && !empty($_GET['contact'])) {
                                        require_once "communications/subpages/contacts/contact.php";
                                    } else {
                                        require_once "communications/subpages/contacts/contacts.php";
                                    }
                                } else if (isset($_GET['groups'])) {
                                    if (isset($_GET['group']) && !empty($_GET['group'])) {
                                        require_once "communications/subpages/contacts/group.php";
                                    } else {
                                        require_once "communications/subpages/contacts/groups.php";
                                    }
                                } else if (isset($_GET['group-contacts'])) {
                                    require_once "communications/subpages/contacts/group-contacts.php";
                                } else {
                                    require_once "communications/subpages/contacts/groups_contacts-combo.php";
                                }
                            ?>
                        </div>
                    </div>
                    <?php require_once 'assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once 'assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';
	require_once 'assets/v2/php/webpack.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Members");
    define('PAGE_DESC', "View ".$account_info['pdc_name']." Members");

    define("_Webpack_Pack_", Get_Webpack_Tags(
        'membership/members/profile_photo', prefix: IN_PRODUCTION_MODE_PREFIX)
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
                                        <i class="pe-7s-users fa-1x icon-gradient bg-mean-fruit">
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
                                require_once 'assets/php/page_components/account_inactive.php';
                                require_once 'assets/php/page_components/footer/close.php';
                                die();
                            }
                            $_appPage = 0;
                            foreach ($appPages as $key => $page) {
                                if ((string)strtolower($page['pdpc_page']) === "membership data") {
                                    $_appPage = $page['pdpc_id'];
                                }
                            }
                            if (in_array($_appPage, $my_access_levels) === false) {
                                require_once 'assets/php/page_components/no_page_access.php';
                                require_once 'assets/php/page_components/footer/close.php';
                                die();
                            }
                        ?>
                        <?php
                            if (isset($_GET['show-member'])) { ?>
                                <?php require_once('subpages/membership/show_member.php');
                            } else if (isset($_GET['edit-member'])) { ?>
                                <?php require_once('subpages/membership/edit_member.php');
                            } else if (isset($_GET['member-ids'])) { ?>
                                <?php require_once('subpages/membership/member_ids.php');
                            } else if (isset($_GET['member-id-prefix'])) { ?>
                                <?php require_once('subpages/membership/member_id_prefix.php');
                            } else if (isset($_GET['verification'])) { ?>
                                <?php require_once('subpages/membership/verification.php');
                            } else {
                                if (isset($_GET['location'])) { ?>
                                    <div class="row">
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?group" class="card btn btn-block mb-3 widget-content bg-midnight-bloom">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Group</div>
                                                        <div class="widget-subheading">Filter Members Based on their group.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-vector fa-1x icon-gradient bg-midnight-bloom">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?subgroup" class="card btn btn-block mb-3 widget-content bg-arielle-smile">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Subgroup</div>
                                                        <div class="widget-subheading">Filter Members Based on their subgroup.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-share fa-1x icon-gradient bg-arielle-smile">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members" class="card btn btn-block mb-3 widget-content bg-sunny-morning">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">All Members</div>
                                                        <div class="widget-subheading">View All Members.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-users fa-1x icon-gradient bg-sunny-morning">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <?php require_once('subpages/membership/datatable/members_location.php');
                                } else if (isset($_GET['group'])) { ?>
                                    <div class="row">
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members" class="card btn btn-block mb-3 widget-content bg-sunny-morning">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">All Members</div>
                                                        <div class="widget-subheading">View All Members.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-users fa-1x icon-gradient bg-sunny-morning">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?subgroup" class="card btn btn-block mb-3 widget-content bg-arielle-smile">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Subgroup</div>
                                                        <div class="widget-subheading">Filter Members Based on their subgroup.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-share fa-1x icon-gradient bg-arielle-smile">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?location" class="card btn btn-block mb-3 widget-content bg-grow-early">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Location</div>
                                                        <div class="widget-subheading">Filter Members Based on their location.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-map-marker fa-1x icon-gradient bg-grow-early">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <?php require_once('subpages/membership/datatable/members_group.php');
                                } else if (isset($_GET['subgroup'])) { ?>
                                    <div class="row">
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?group" class="card btn btn-block mb-3 widget-content bg-midnight-bloom">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Group</div>
                                                        <div class="widget-subheading">Filter Members Based on their group.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-vector fa-1x icon-gradient bg-midnight-bloom">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members" class="card btn btn-block mb-3 widget-content bg-sunny-morning">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                    <div class="widget-heading">All Members</div>
                                                        <div class="widget-subheading">View All Members.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-users fa-1x icon-gradient bg-sunny-morning">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?location" class="card btn btn-block mb-3 widget-content bg-grow-early">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Location</div>
                                                        <div class="widget-subheading">Filter Members Based on their location.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-map-marker fa-1x icon-gradient bg-grow-early">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <?php require_once('subpages/membership/datatable/members_subgroup.php');
                                } else if (isset($_GET['search'])) { ?>
                                    <div class="row">
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members" class="card btn btn-block mb-3 widget-content bg-sunny-morning">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                    <div class="widget-heading">All Members</div>
                                                        <div class="widget-subheading">View All Members.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-users fa-1x icon-gradient bg-sunny-morning">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <?php require_once('subpages/membership/datatable/members_search.php');
                                } else { ?>
                                    <div class="row">
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?group" class="card btn btn-block mb-3 widget-content bg-midnight-bloom">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Group</div>
                                                        <div class="widget-subheading">Filter Members Based on their group.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-vector fa-1x icon-gradient bg-midnight-bloom">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?subgroup" class="card btn btn-block mb-3 widget-content bg-arielle-smile">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Subgroup</div>
                                                        <div class="widget-subheading">Filter Members Based on their subgroup.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-share fa-1x icon-gradient bg-arielle-smile">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <a href="<?= CLIENT_BASE_URL; ?>members?location" class="card btn btn-block mb-3 widget-content bg-grow-early">
                                                <div class="widget-content-wrapper text-white">
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Members By Location</div>
                                                        <div class="widget-subheading">Filter Members Based on their location.</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="widget-numbers text-white">
                                                            <div class="card shadow p-1">
                                                                <h4 class="pe-7s-map-marker fa-1x icon-gradient bg-grow-early">
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <?php require_once('subpages/membership/datatable/members.php');
                                }
                            }
                        ?>
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
            require_once 'assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
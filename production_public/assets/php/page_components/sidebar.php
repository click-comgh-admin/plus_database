        <?php
            global $ccApi;
            global $BranchInfo_I;
            $AccountInfoType = isset($__SYSTEM_VARIABLES['AccountInfoType'])? AccountInfoType: 0;
            define('AccountInfoTypeName', $account_type = $ccApi->account_type($all="one",
                $id=(int)$AccountInfoType, function($account_type) {
                    return isset($account_type[0]['pdd_info'])? $account_type[0]['pdd_info'] : "... Account";
                }, false)
            );
            
            
                //require_once "sidebar-contact_bank.php"; /* ?>               
                <div class="app-sidebar sidebar-shadow">
                    <div class="app-header__logo">
                        <div class="logo-src"></div>
                        <div class="header__pane ml-auto">
                            <div>
                                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="app-header__mobile-menu">
                        <div>
                            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="app-header__menu">
                        <span>
                            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span class="btn-icon-wrapper">
                                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                        </button>
                        </span>
                    </div>
                    <div class="scrollbar-sidebar">
                        <div class="app-sidebar__inner" style="margin-bottom: 100px;">
                            <ul class="vertical-nav-menu">
                                <li class="app-sidebar__heading mb-0 pb-0">
                                    <span>
                                        <?= isset($account_info['pdc_name'])? $account_info['pdc_name']: "-"; ?> 
                                    </span>
                                </li>
                                <li class="app-sidebar__heading mb-0 pb-0">
                                    <span>
                                        <b>Branch:</b> <?= isset($BranchInfo_I->name)? $BranchInfo_I->name: "-"; ?> 
                                    </span>
                                </li>
                                <li class="app-sidebar__heading mt-0 pt-0"><hr class="my-1 mx-0">
                                    <i class="text-warning" style="font-size: .75rem !important;">
                                        <?= AccountInfoTypeName; ?>
                                    </i>
                                </li>
                                <?php require_once "sidebar/home_module.php"; ?>
                                <?php require_once "sidebar/membership-data_module.php"; ?>
                                <?php require_once "sidebar/user_connections.php"; ?>
                                <?php require_once "sidebar/notifications_module.php"; ?>
                                <?php require_once "sidebar/groupings_module.php"; ?>
                            </ul>
                        </div>
                    </div>
                </div>
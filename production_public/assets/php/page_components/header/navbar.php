            <div class="app-header header-shadow">
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
                    <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav" style="background-color: #3f6ad8 !important;">
                        <span class="btn-icon-wrapper">
                            <i class="fa fa-ellipsis-v fa-w-6"></i>
                        </span>
                    </button>
                    </span>
                </div>
                <div class="app-header__content">
                    <div class="app-header-left">
                    <?php /** 
                        <div class="search-wrapper">
                            <div class="input-holder">
                                <div class="search-input" style="margin-top: -10px">
                                    <?php
                                        $srchLlist = [
                                            ["name"=>"Home", "id"=>CLIENT_BASE_URL],
                                            ["name"=>"New Registration", "id"=>CLIENT_BASE_URL."register-member"],
                                            ["name"=>"Public Registration (Code)", "id"=>CLIENT_BASE_URL."account-code"],
                                            ["name"=>"Custom Forms", "id"=>CLIENT_BASE_URL."custom-forms/custom-form"],
                                            ["name"=>"Create Custom Form(s)", "id"=>CLIENT_BASE_URL."custom-forms/create-form"],
                                            ["name"=>"Members", "id"=>CLIENT_BASE_URL."members"],
                                            ["name"=>"Search Member", "id"=>CLIENT_BASE_URL."members?search"],
                                            ["name"=>"Member IDs", "id"=>CLIENT_BASE_URL."members?member-ids"],
                                            ["name"=>"Member ID Prefix", "id"=>CLIENT_BASE_URL."members?member-id-prefix"],
                                            ["name"=>"Groups/ Chapters/ Classes", "id"=>CLIENT_BASE_URL."groups"],
                                            ["name"=>"Sub-Groups", "id"=>CLIENT_BASE_URL."subgroups"],
                                            ["name"=>"Attendance: Attendees", "id"=>CLIENT_BASE_URL."attendance/attendees"],
                                            ["name"=>"Attendance: Absentees", "id"=>CLIENT_BASE_URL."attendance/absentees"],
                                            ["name"=>"Attendance: Records", "id"=>CLIENT_BASE_URL."attendance/attendance-records"],
                                            ["name"=>"Attendance: Settings", "id"=>CLIENT_BASE_URL."attendance/settings"],
                                            ["name"=>"Communications: Home", "id"=>CLIENT_BASE_URL."communication"],
                                            ["name"=>"Member Mail: Inbox", "id"=>CLIENT_BASE_URL."communications/members?inbox"],
                                            ["name"=>"Member Mail: Outbox", "id"=>CLIENT_BASE_URL."communications/members?outbox"],
                                            ["name"=>"Member Mail: Compose", "id"=>CLIENT_BASE_URL."communications/members?compose"],
                                            ["name"=>"Contact Book Mail: Inbox", "id"=>CLIENT_BASE_URL."communications/contacts?inbox"],
                                            ["name"=>"Contact Book Mail: Outbox", "id"=>CLIENT_BASE_URL."communications/contacts?outbox"],
                                            ["name"=>"Contact Book Mail: Compose", "id"=>CLIENT_BASE_URL."communications/contacts?compose"],
                                            ["name"=>"Peer Mail: Messages", "id"=>CLIENT_BASE_URL."communications/peers?messages"],
                                            ["name"=>"Peer Mail: Inbox", "id"=>CLIENT_BASE_URL."communications/peers?inbox"],
                                            ["name"=>"Peer Mail: Outbox", "id"=>CLIENT_BASE_URL."communications/peers?outbox"],
                                            ["name"=>"Peer Mail: Compose", "id"=>CLIENT_BASE_URL."communications/peers?compose"],
                                            ["name"=>"Customer Care: User Messages", "id"=>CLIENT_BASE_URL."communications/customer-care?messages"],
                                            ["name"=>"Customer Care: Inbox", "id"=>CLIENT_BASE_URL."communications/customer-care?inbox"],
                                            ["name"=>"Customer Care: Outbox", "id"=>CLIENT_BASE_URL."communications/customer-care?outbox"],
                                            ["name"=>"Customer Care: Compose", "id"=>CLIENT_BASE_URL."communications/customer-care?compose"],
                                            ["name"=>"Credit", "id"=>CLIENT_BASE_URL."communications/credit"],
                                            ["name"=>"SMS ID", "id"=>CLIENT_BASE_URL."communications/sms-id"],
                                            ["name"=>"Records", "id"=>CLIENT_BASE_URL."dues/records"],
                                            ["name"=>"Bulk Payment", "id"=>CLIENT_BASE_URL."dues/bulk-pay"],
                                            ["name"=>"Due Types", "id"=>CLIENT_BASE_URL."dues/due-types"],
                                            ["name"=>"Assign Members", "id"=>CLIENT_BASE_URL."dues/assign-members"],
                                        ];
                                        if (isset($__SYSTEM_VARIABLES['AccountInfoCategory']) && AccountInfoCategory == 4) {
                                            array_push($srchLlist, ["name"=>"Student Report", "id"=>CLIENT_BASE_URL."school/student/student-report"]);
                                            array_push($srchLlist, ["name"=>"Student Marks", "id"=>CLIENT_BASE_URL."school/student/student-mark"]);
                                            array_push($srchLlist, ["name"=>"Student Subject", "id"=>CLIENT_BASE_URL."school/student/student-subject"]);
                                            array_push($srchLlist, ["name"=>"Fees", "id"=>CLIENT_BASE_URL."school/fees"]);
                                            array_push($srchLlist, ["name"=>"Home Pick-up", "id"=>CLIENT_BASE_URL."school/pick-up/home-pickup"]);
                                            array_push($srchLlist, ["name"=>"School Pick-up", "id"=>CLIENT_BASE_URL."school/pick-up/school-pickup"]);
                                            array_push($srchLlist, ["name"=>"Class(es)", "id"=>CLIENT_BASE_URL."school/class"]);
                                            array_push($srchLlist, ["name"=>"Sub-Class(es)", "id"=>CLIENT_BASE_URL."school/subclass"]);
                                            array_push($srchLlist, ["name"=>"Exam Type(s)", "id"=>CLIENT_BASE_URL."school/exam-type"]);
                                            array_push($srchLlist, ["name"=>"Assessment Type(s)", "id"=>CLIENT_BASE_URL."school/assessment-type"]);
                                            array_push($srchLlist, ["name"=>"Index Number(s)", "id"=>CLIENT_BASE_URL."school/index-number"]);
                                            array_push($srchLlist, ["name"=>"Subject(s)", "id"=>CLIENT_BASE_URL."school/subjects"]);
                                        }
                                    ?>
                                    <select class="form-control isSearch--true w-100">
                                        <option>Type to search</option>
                                        <?php foreach ($srchLlist as $key => $sl) { ?>
                                            <option value="<?= $sl['id']; ?>"><?= $sl['name']; ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <button class="search-icon"><span></span></button>
                            </div>
                            <button class="close"></button>
                        </div> */ ?>
                        <ul class="header-menu nav">
                            <?php
                                if (isset($__SYSTEM_VARIABLES['AccountInfoId']) && AccountInfoId === _AccountInfoId) { ?>
                                    <li class="btn-group nav-item">
                                        <a href="<?= CLIENT_BASE_URL; ?>account/subscription" type="button" class="nav-link">
                                            <i class="nav-link-icon fa fa-shopping-cart"></i> Subscription
                                        </a>
                                    </li>
                                <?php }
                            ?>
                            <li class="btn-group nav-item">
                                <a href="<?= CLIENT_BASE_URL; ?>admin/user/accounts" type="button" class="nav-link">
                                    <i class="nav-link-icon fa fa-users"></i> Accounts
                                </a>
                            </li>
                            <li class="dropdown nav-item">
                                <a href="<?= CLIENT_BASE_URL; ?>account/settings/settings" type="button" class="nav-link">
                                    <i class="nav-link-icon fa fa-cog"></i> Settings
                                </a>
                            </li>
                            <li class="dropdown nav-item">
                                <div branch_button_selector></div>
                                <!-- <pdb-branch-button></pdb-branch-button> -->
                            </li>
                        </ul>
                    </div>
                    <div class="app-header-right">
                        <div class="header-btn-lg pr-0">
                            <div class="widget-content p-0">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="btn-group">
                                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn" style="display: flex; justify-content: center; align-items: center">
                                                <img width="42" class="rounded-circle shadow shadow-sm" no-popup="true" src="<?= setUpClientImage(@$user_info['pdcu_profile_picture']); ?>" alt="Profile Picture">
                                                <i class="fa fa-angle-down ml-2 opacity-8"></i>
                                            </a>
                                            <?php
                                                $url_endpoint = $_SERVER['REQUEST_URI'];
                                                $url_endpoint = explode('/', $url_endpoint);
                                                $url_endpoint = strtolower(trim(end($url_endpoint), '/'));
                                            ?>
                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                                <a href="<?= CLIENT_BASE_URL; ?>admin/user/my-account" type="button" tabindex="0" class="dropdown-item <?= ($url_endpoint == "my-account") ? "active": ""; ?>">User Account</a>
                                                <a href="<?= CLIENT_BASE_URL; ?>admin/user/accounts" type="button" tabindex="0" class="dropdown-item <?= ($url_endpoint == "accounts") ? "active": ""; ?>">Accounts</a>
                                                <!-- <pdb-branch-button></pdb-branch-button> -->
                                                <div branch_button_selector></div>
                                                <div tabindex="-1" class="dropdown-divider"></div>
                                                <a href="<?= CLIENT_BASE_URL; ?>account/settings/settings" type="button" tabindex="0" class="dropdown-item <?= ($url_endpoint == "settings" || $url_endpoint == "logo" || $url_endpoint == "leaders") ? "active": ""; ?>">Settings</a>
                                                <?php
                                                    if (isset($__SYSTEM_VARIABLES['AccountInfoId']) && AccountInfoId === _AccountInfoId) { ?>
                                                        <a href="<?= CLIENT_BASE_URL; ?>account/subscription" type="button" tabindex="0" class="dropdown-item <?= ($url_endpoint == "subscription") ? "active": ""; ?>">Subscription</a>
                                                    <?php }
                                                ?>
                                                <?php /** <a href="<?= CLIENT_BASE_URL; ?>logout" type="button" tabindex="0" class="dropdown-item <?= ($url_endpoint == "logout") ? "active": ""; ?>">Logout</a> */ ?>
                                                <div logout_button_selector></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget-content-left  ml-3 header-user-info">
                                        <div class="widget-heading">
                                            <?= (isset($user_info) ? $user_info['pdcu_firstname'] : "-") . " " . (isset($user_info) ? $user_info['pdcu_surname'] : "-"); ?> 
                                        </div>
                                        <div class="widget-subheading">
                                            <?= isset($account_info) ? $account_info['pdc_name'] : "-"; ?>
                                        </div>
                                    </div>
                                    <!-- <div class="widget-content-right header-user-info ml-3 scroll-area-xl" style="height: 10px;"> -->
                                    <div class="widget-content-right header-user-info ml-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<?php
            if ((int)AccountInfoType === 12) {
                require_once "sidebar-contact_bank.php";
            } else { ?>               
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
                        <div class="app-sidebar__inner">
                            <ul class="vertical-nav-menu">
                                <li class="app-sidebar__heading"><?= $account_info['pdc_name']; ?></li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>" mm-active="|index">
                                        <i class="metismenu-icon pe-7s-home"></i> Home
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">Membership Data</li>
                                <li>
                                    <a href="#" mm-active="register-member|account-code">
                                        <i class="metismenu-icon pe-7s-note2"></i> Registration
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>register-member" mm-active="register-member">
                                                <i class="metismenu-icon"></i> New Registration
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>excel-registration" mm-active="excel-registration">
                                                <i class="metismenu-icon"></i> Excel Registration
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>account-code" mm-active="account-code">
                                                <i class="metismenu-icon">
                                                </i>Public Registration <small class="small">(Code)</small>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="create-form|custom-form">
                                        <i class="metismenu-icon pe-7s-note"></i> Custom Registration
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>custom-forms/custom-form" mm-active="custom-form">
                                                <i class="metismenu-icon"></i> Forms
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>custom-forms/create-form" mm-active="create-form">
                                                <i class="metismenu-icon"></i> Create Form(s)
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="members|groups|subgroups">
                                        <i class="metismenu-icon pe-7s-users"></i> Membership Data
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>members" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Members
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>members?search" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Search Member
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>groups" mm-active="groups">
                                                <i class="metismenu-icon"></i>
                                                <?= (AccountInfoCategory === 10) ? "Department(s)": "Groups/ Chapters/ Classes"; ?>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>subgroups" mm-active="subgroups">
                                                <i class="metismenu-icon"></i>
                                                <?= (AccountInfoCategory === 10) ? "Unit(s)": "Sub-Groups"; ?>
                                            </a>
                                        </li>
                                        <?php
                                            if (AccountInfoCategory === 10) { ?>
                                                <li>
                                                    <a href="<?= CLIENT_BASE_URL; ?>committees" mm-active="committees">
                                                        <i class="metismenu-icon"></i>
                                                        Committee(s)
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="<?= CLIENT_BASE_URL; ?>subcommittees" mm-active="subcommittees">
                                                        <i class="metismenu-icon"></i>
                                                        Sub-Committee(s)
                                                    </a>
                                                </li>
                                            <?php }
                                        ?>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>members?member-id-prefix" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Member ID Prefix
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>members?member-ids" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Member IDs
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <?php
                                    $get_string = "client-membership/branch/branch?client_id=".AccountInfoId;
                                    $branch_account = $ccApi->fetch_from($get_string = $get_string, function ($branch_account)
                                    {
                                        return isset($branch_account[0])? $branch_account[0]: [];
                                    }, $debug=false);

                                    if (!empty($branch_account)) { ?>
                                        <li>
                                            <?php
                                                $head_account_id = isset($is_branch_account['pdcbl_client']) ? $is_branch_account['pdcbl_client'] : 0;
                                                $branch_account_id = isset($is_branch_account['pdcbl_branch']) ? $is_branch_account['pdcbl_branch'] : 0;
        
                                                $get_string = "client-membership/branch/communications/from_branch?account_id=$account_id&user_id=$user_id";
                                                $inbox_msg_count = $ccApi->fetch_from($get_string=$get_string, function($messages)
                                                {
                                                    return isset($messages['inbox_msg_count'])? $messages['inbox_msg_count']: 0;
                                                }, $debug = false); 
                                            ?>
                                            <a href="#" mm-active="add-branch|view-branches|branch|update-branch|users|branch-messages">
                                                <i class="metismenu-icon pe-7s-share"></i> Account Branches
                                                <?= ($inbox_msg_count === 0) ? '': '<span class="badge badge-danger mx-2">'. $inbox_msg_count .'</span>'; ?>
                                                <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="<?= CLIENT_BASE_URL; ?>account-branch/add-branch" mm-active="add-branch">
                                                        <i class="metismenu-icon">
                                                        </i>Add Branch
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="<?= CLIENT_BASE_URL; ?>account-branch/view-branches" mm-active="view-branches">
                                                        <i class="metismenu-icon">
                                                        </i>View Branches
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="<?= CLIENT_BASE_URL; ?>account-branch/communications/branch-messages" mm-active="branch-messages">
                                                        <i class="metismenu-icon"></i>Branch Communications
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    <?php }
                                ?>
                                <li class="app-sidebar__heading">Attendance</li>
                                <li>
                                    <?php
                                        $get_string = "attendance/clocking/web-clocking-count?account_id=".AccountInfoId;
                                        $web_clocking_count = $ccApi->fetch_from($get_string=$get_string, function($web_clocking_count)
                                        {
                                            return isset($web_clocking_count[0]['total_count'])? (int)$web_clocking_count[0]['total_count']: 0;
                                        }, $debug = false);
                                    ?>
                                    <a href="#" mm-active="attendance-clocking|attendance-approvals">
                                        <i class="metismenu-icon pe-7s-check"></i> Attendance Clocking
                                        <?= $hasApprovals = ($web_clocking_count > 0)? 
                                            '<span class="badge badge-warning">'.$web_clocking_count.'</span>': ""; ?>
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/attendance-clocking" mm-active="attendance-clocking">
                                                <i class="metismenu-icon pe-7s-check"></i> Attendance Clocking
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/attendance-approvals" mm-active="attendance-approvals">
                                                <i class="metismenu-icon pe-7s-check"></i> Attendance Approvals <?= $hasApprovals; ?>
                                            </a>
                                        </li>
                                    </ul>
                                </li> <?php /*
                                <li>
                                    <a href="#" mm-active="attendees|absentees">
                                        <i class="metismenu-icon pe-7s-note2"></i> Attendance List
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/attendees" mm-active="attendees">
                                                <i class="metismenu-icon pe-7s-note2"></i> Attendees
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/absentees" mm-active="absentees">
                                                <i class="metismenu-icon pe-7s-note2"></i> Absentees
                                            </a>
                                        </li>
                                    </ul>
                                </li> */ ?>
                                <li>
                                    <a href="#" mm-active="attendees|absentees">
                                        <i class="metismenu-icon pe-7s-note2"></i> Attendance List
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/results/attendees" mm-active="attendees">
                                                <i class="metismenu-icon pe-7s-note2"></i> Attendees
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/results/absentees" mm-active="absentees">
                                                <i class="metismenu-icon pe-7s-note2"></i> Absentees
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>attendance/attendance-records" mm-active="attendance-records">
                                        <i class="metismenu-icon pe-7s-display2"></i> Attendance Records
                                    </a>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>attendance/results/attendance-results" mm-active="attendance-results">
                                        <i class="metismenu-icon pe-7s-display2"></i> Attendance Results
                                    </a>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>attendance/results/attendance-report" mm-active="attendance-report">
                                        <i class="metismenu-icon pe-7s-note2"></i> Attendance Report
                                    </a>
                                </li>
                                <li>
                                    <a href="#" mm-active="meeting-days|location-settings|user-devices|user-device-request|clocking-time">
                                        <i class="metismenu-icon pe-7s-config"></i> Settings
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/meeting-days" mm-active="meeting-days">
                                                <i class="metismenu-icon pe-7s-config"></i> Meeting Days
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/location-settings" mm-active="location-settings">
                                                <i class="metismenu-icon pe-7s-note2"></i> Attendance Location Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/clocking-time" mm-active="clocking-time">
                                                <i class="metismenu-icon pe-7s-ckock"></i> Clocking Time (In/ Out)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/attendance-visibility" mm-active="attendance-visibility">
                                                <i class="metismenu-icon pe-7s-eye"></i> Attendance Visibility
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/user-devices" mm-active="user-devices">
                                                <i class="metismenu-icon pe-7s-config"></i> User Devices
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/user-device-request" mm-active="user-device-request">
                                                <i class="metismenu-icon pe-7s-config"></i> User Device Requests
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/attendance-status" mm-active="attendance-status">
                                                <i class="metismenu-icon pe-7s-config"></i> Attendance Status
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/attendance-status-assign" mm-active="attendance-status-assign">
                                                <i class="metismenu-icon pe-7s-config"></i> Assign Attendance Status
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/clocking-agent" mm-active="clocking-agent">
                                                <i class="metismenu-icon pe-7s-config"></i> Mobile App Admins
                                            </a>
                                        </li>
                                <?php /* <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>attendance/attendance-clocking" mm-active="attendance-clocking">
                                        <i class="metismenu-icon pe-7s-check"></i> Attendance Clocking
                                    </a>
                                </li>
                                <li>
                                    <a href="#" mm-active="attendees|absentees">
                                        <i class="metismenu-icon pe-7s-note2"></i> Attendance List
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/attendees" mm-active="attendees">
                                                <i class="metismenu-icon pe-7s-note2"></i> Attendees
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>attendance/absentees" mm-active="absentees">
                                                <i class="metismenu-icon pe-7s-note2"></i> Absentees
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>attendance/attendance-records" mm-active="attendance-records">
                                        <i class="metismenu-icon pe-7s-display2"></i> Attendance Records
                                    </a>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>attendance/settings" mm-active="settings">
                                        <i class="metismenu-icon pe-7s-config"></i> Settings
                                    </a>
                                </li> */ ?>
                            </ul>
                                <li class="app-sidebar__heading">Communications</li>
                                <li>
                                    <a href="#" mm-active="contact-access-code|contact-group">
                                        <i class="metismenu-icon pe-7s-phone pe-7s-notebook"></i> Contact Bank 
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communication" mm-active="communication">
                                                <i class="metismenu-icon pe-7s-mail-open-file"></i> Contacts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contact/contact-agent" mm-active="contact-agent">
                                                <i class="metismenu-icon">
                                                </i> Contact Agent(s)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contact/contact-access-code" mm-active="contact-access-code">
                                                <i class="metismenu-icon">
                                                </i> Contact Form Access Code
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contact/contact-group" mm-active="contact-group">
                                                <i class="metismenu-icon">
                                                </i> Contact Groups
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contact/connect-to-nstacom" mm-active="connect-to-nstacom">
                                                <i class="metismenu-icon">
                                                </i> Connect to Nstacom
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://app.nstacom.com/" target="_blank">
                                                <i class="metismenu-icon">
                                                </i> Go to Nstacom
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <?php
                                        $get_string = "mailer/members/new_count?account_id=$account_id";
                                        $message_count = $ccApi->communications($type="clients", $get_string, function($messages)
                                        {
                                            return $messages;
                                        }, $debug = false);
                                    ?>
                                    <a href="#" mm-active="members">
                                        <i class="metismenu-icon pe-7s-users"></i> Member Mail
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        <?= empty($message_count) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'. count($message_count) .'</span>'; ?>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/members?inbox" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Inbox <?= empty($message_count) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'. count($message_count) .'</span>'; ?>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/members?outbox" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Outbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/members?compose" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Compose
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="contacts">
                                        <i class="metismenu-icon pe-7s-phone"></i> Contact Book Mail
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contacts?inbox" mm-active="contacts">
                                                <i class="metismenu-icon">
                                                </i>Inbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contacts?outbox" mm-active="contacts">
                                                <i class="metismenu-icon">
                                                </i>Outbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contacts?compose" mm-active="contacts">
                                                <i class="metismenu-icon">
                                                </i>Compose
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="peers">
                                        <i class="metismenu-icon pe-7s-id"></i> Peer Mail
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/peers?messages" mm-active="peers">
                                                <i class="metismenu-icon">
                                                </i>Messages
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/peers?inbox" mm-active="peers">
                                                <i class="metismenu-icon">
                                                </i>Inbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/peers?outbox" mm-active="peers">
                                                <i class="metismenu-icon">
                                                </i>Outbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/peers?compose" mm-active="peers">
                                                <i class="metismenu-icon">
                                                </i>Compose
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <?php
                                        $get_string = "mailer/customer-care/new_count?type=2&client_id=$account_id";
                                        $message_count_cc = $ccApi->communications($type="clients", $get_string, function($messages)
                                        {
                                            return $messages;
                                        }, $debug = false);

                                        $get_string = "mailer/customer-care/new_count?type=1&client_id=$account_id";
                                        $message_count_alt_cc = $ccApi->communications($type="clients", $get_string, function($messages)
                                        {
                                            return $messages;
                                        }, $debug = false);
                                    ?>
                                    <a href="#" mm-active="customer-care">
                                        <i class="metismenu-icon pe-7s-headphones"></i> Customer Care
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        <?= empty($message_count) ? '': empty($message_count_alt_cc) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'. (count($message_count_cc) + count($message_count_alt_cc)) .'</span>'; ?>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/customer-care?messages" mm-active="customer-care">
                                                <i class="metismenu-icon">
                                                </i>User Messages <?= empty($message_count_alt_cc) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'. count($message_count_alt_cc) .'</span>'; ?>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/customer-care?inbox" mm-active="customer-care">
                                                <i class="metismenu-icon">
                                                </i>Account Inbox <?= empty($message_count_cc) ? '': '<span class="badge badge-danger ml-3 d-f lex pu ll-right my-2">'. count($message_count_cc) .'</span>'; ?>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/customer-care?outbox" mm-active="customer-care">
                                                <i class="metismenu-icon">
                                                </i>Account Outbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/customer-care?compose" mm-active="customer-care">
                                                <i class="metismenu-icon">
                                                </i>Account Compose
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <?php
                                    $get_string = "client-membership/branch/is_branch?client_id=".AccountInfoId;
                                    $is_branch_account = $ccApi->fetch_from($get_string = $get_string, function ($is_branch_account)
                                    {
                                        return isset($is_branch_account[0])? $is_branch_account[0]: [];
                                    }, $debug=false); 
                                    if (!empty($is_branch_account)) {
                                        $head_account_id = isset($is_branch_account['pdcbl_client']) ? $is_branch_account['pdcbl_client'] : 0;
                                        $branch_account_id = isset($is_branch_account['pdcbl_branch']) ? $is_branch_account['pdcbl_branch'] : 0;

                                        $get_string = "client-membership/branch/communications/client_to_branch_acc?branch_id=$branch_account_id&account_id=$head_account_id&user_id=$user_id";
                                        $inbox_msg_count = $ccApi->fetch_from($get_string=$get_string, function($messages)
                                        {
                                            return isset($messages['inbox_msg_count'])? $messages['inbox_msg_count']: 0;
                                        }, $debug = false); ?>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>account-branch/communications/branch-message" mm-active="branch-message">
                                                <i class="metismenu-icon pe-7s-share"></i> Branch Messages
                                                <?= ($inbox_msg_count === 0) ? '': '<span class="badge badge-danger mx-2">'. $inbox_msg_count .'</span>'; ?>
                                            </a>
                                        </li>
                                    <?php }
                                ?>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>communications/credit" mm-active="credit">
                                        <i class="metismenu-icon pe-7s-wallet"></i> Credit
                                    </a>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>communications/sms-id" mm-active="sms-id">
                                        <i class="metismenu-icon pe-7s-id"></i> SMS ID
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">Office</li>
                                <li>
                                    <a href="#" mm-active="new-visitor|view-visitors|print-visitors">
                                        <i class="metismenu-icon pe-7s-users"></i> Visitors
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/visitors/new-visitor" mm-active="new-visitor">
                                                <i class="metismenu-icon"></i> New Visitor
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/visitors/view-visitors" mm-active="view-visitors">
                                                <i class="metismenu-icon"></i> View Visitors
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/visitors/print-visitors" mm-active="print-visitors">
                                                <i class="metismenu-icon"></i> Print Visitors
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="new-appointment|view-appointments|print-appointments">
                                        <i class="metismenu-icon pe-7s-albums"></i> Appointments
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/appointments/new-appointment" mm-active="new-appointment">
                                                <i class="metismenu-icon"></i> New Appointment
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/appointments/view-appointments" mm-active="view-appointments">
                                                <i class="metismenu-icon"></i> View Appointments
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/appointments/print-appointments" mm-active="print-appointments">
                                                <i class="metismenu-icon"></i> Print Appointments
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="new-reminder|view-reminders|print-reminders">
                                        <i class="metismenu-icon pe-7s-alarm"></i> Reminders
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/reminders/new-reminder" mm-active="new-reminder">
                                                <i class="metismenu-icon"></i> New Reminder
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/reminders/view-reminders" mm-active="view-reminders">
                                                <i class="metismenu-icon"></i> View Reminders
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>office/reminders/print-reminders" mm-active="print-reminders">
                                                <i class="metismenu-icon"></i> Print Reminders
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="app-sidebar__heading">File Manager</li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>file-manager/folder" mm-active="folder|subfolder|file">
                                        <i class="metismenu-icon pe-7s-folder"></i> Home
                                    </a>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>file-manager/finder" mm-active="finder">
                                        <i class="metismenu-icon pe-7s-search"></i> File Finder
                                    </a>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>file-manager/archive" mm-active="archive">
                                        <i class="metismenu-icon pe-7s-wristwatch"></i> File Archive
                                    </a>
                                </li>
                                
                                <?php if (AccountInfoCategory == 4) { ?>
                                    <li class="app-sidebar__heading">School</li>
                                    <li>
                                        <a href="#" mm-active="student-report|student-mark|student-subject">
                                            <i class="metismenu-icon pe-7s-id"></i> Student
                                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/student/student-report" mm-active="student-report">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Student Report
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/student/student-mark" mm-active="student-mark">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Student Marks
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/student/student-subject" mm-active="student-subject">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Student Subject
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="<?= CLIENT_BASE_URL; ?>school/fees" mm-active="fees">
                                            <i class="metismenu-icon pe-7s-cash"></i> Fees
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" mm-active="home-pickup|school-pickup">
                                            <i class="metismenu-icon pe-7s-bicycle"></i> Pick-up
                                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/pick-up/home-pickup" mm-active="home-pickup">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Home Pick-up
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/pick-up/school-pickup" mm-active="school-pickup">
                                                    <i class="metismenu-icon pe-7s-note2"></i> School Pick-up
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" mm-active="class|subclass|exam-type|assessment-type|index-number|subjects">
                                            <i class="metismenu-icon pe-7s-config"></i> Settings
                                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/class" mm-active="class">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Class(es)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/subclass" mm-active="subclass">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Sub-Class(es)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/exam-type" mm-active="exam-type">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Exam Type(s)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/assessment-type" mm-active="assessment-type">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Assessment Type(s)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/index-number" mm-active="index-number">
                                                    <i class="metismenu-icon pe-7s-note2"></i> Index Number(s)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?= CLIENT_BASE_URL; ?>school/subjects" mm-active="subjects">
                                                    <i class="metismenu-icon pe-7s-news-paper"></i> Subject(s)
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                <?php } ?>

                                <li class="app-sidebar__heading">Dues</li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>dues/records" mm-active="records">
                                        <i class="metismenu-icon pe-7s-server"></i> Records
                                    </a>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>dues/bulk-pay" mm-active="bulk-pay">
                                        <i class="metismenu-icon pe-7s-cash"></i> Bulk Payment
                                    </a>
                                </li>
                                <li>
                                    <a href="#" mm-active="due-types|assign-members">
                                        <i class="metismenu-icon pe-7s-config"></i> Settings
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>dues/due-types" mm-active="due-types">
                                                <i class="metismenu-icon pe-7s-note2"></i> Due Types
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>dues/assign-members" mm-active="assign-members">
                                                <i class="metismenu-icon pe-7s-note2"></i> Assign Members
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                        </div>
                    </div>
                </div>
            <?php }
<?PHP
    if (isset($__SYSTEM_VARIABLES['AccountInfoType']) && (int)AccountInfoType === 6) {
        $MEMBERSHIP = "Agent";
    } else {
        $MEMBERSHIP = "Membership";
    }
    
    if (isset($__SYSTEM_VARIABLES['AccountInfoCategory']) && (int)AccountInfoCategory === 12) {
        $MEMBERSHIP = "Agent";
    } else if (isset($__SYSTEM_VARIABLES['AccountInfoCategory']) && (int)AccountInfoCategory === 10) {
        $MEMBERSHIP = "Staff";
    } else {
        $MEMBERSHIP = "Membership";
    }
?>
<!-- <li class="app-sidebar__heading"><?= $MEMBERSHIP; ?> Data</li> -->
<li class="app-sidebar__heading">DATA MANAGEMENT</li>
<?php require_once "registration_module.php"; ?>
<?php require_once "custom-forms_module.php"; ?>
<li>
    <a href="#" mm-active="members">
        <i class="metismenu-icon pe-7s-users"></i> <?= $MEMBERSHIP; ?> Data
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>/member/members" mm-active="members">
                <i class="metismenu-icon">
                </i>View Members
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/verifications" mm-active="verifications">
                <i class="metismenu-icon">
                </i>Member Verifications
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>/member/organization/members" mm-active="members">
                <i class="metismenu-icon">
                </i>View Organizations
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>/member/organization/verifications" mm-active="verifications">
                <i class="metismenu-icon">
                </i>Organization Verifications
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="#" mm-active="member-prefix|branch-prefix|category-prefix">
        <i class="metismenu-icon pe-7s-id"></i> Member Identification
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/id-prefix/member-prefix" mm-active="member-prefix">
                <i class="metismenu-icon">
                </i>Member ID Prefix
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/id-prefix/branch-prefix" mm-active="branch-prefix">
                <i class="metismenu-icon">
                </i>Branch ID Prefix
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/id-prefix/category-prefix" mm-active="category-prefix">
                <i class="metismenu-icon">
                </i>Member Category ID Prefix
            </a>
        </li>
        <?php /** <li>
            <a href="<?= CLIENT_BASE_URL; ?>members?member-ids" mm-active="members">
                <i class="metismenu-icon">
                </i>Member IDs
            </a>
        </li> */ ?>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>member/access-restriction/restrictions" mm-active="restrictions">
        <i class="metismenu-icon pe-7s-id"></i> Access Restriction
    </a>
</li>
<li>
    <a href="https://www.youtube.com/playlist?list=PL94Wg7vEQie4EojeY5BGDkR2I0Zyy9Ufa" target="_blank">
        <i class="metismenu-icon pe-7s-study"></i> System Video Tutorials
    </a>
</li>

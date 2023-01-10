<li>
    <a href="#" class="text-primary" 
        mm-active="register-member|account-code|excel-registration">
        <i class="metismenu-icon pe-7s-note2"></i><i class="pe-7s-users"></i> Registration
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <?php /**
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>register-member" mm-active="register-member">
                <i class="metismenu-icon"></i> New Registration
            </a>
        </li> */ ?>
        <li registration_menu_selector></li>
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
    <a href="<?= CLIENT_BASE_URL; ?>additional-registration-questions/questions" mm-active="questions">
        <i class="metismenu-icon pe-7s-note2"></i> Additional Reg. Questions
    </a>
</li>
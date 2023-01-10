<li>
    <a href="#" class="text-primary" 
        mm-active="attendance-register-member|attendance-excel-registration">
        <i class="metismenu-icon pe-7s-note2"></i> <i class="pe-7s-check"></i> Registration
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/members/attendance-register-member"
                mm-active="attendance-register-member">
                <i class="metismenu-icon"></i> New Registration
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/members/attendance-excel-registration"
                mm-active="attendance-excel-registration">
                <i class="metismenu-icon"></i> Excel Registration
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/members/clocking-members" mm-active="clocking-members">
        <i class="metismenu-icon pe-7s-user"></i> Clocking Members
    </a>
</li>
<li class="app-sidebar__heading">DUES MANAGEMENT <!-- Dues --></li>
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
<li class="app-sidebar__heading">User Connections</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>member/connections/connection-accounts" mm-active="connection-accounts">
        <i class="metismenu-icon pe-7s-server"></i> Connections
    </a>
</li>
<li>
    <a href="#" mm-active="connection-members|connections">
        <i class="metismenu-icon pe-7s-search"></i> Member/ Connection
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/connections/connection-members" mm-active="connection-members">
                <i class="metismenu-icon pe-7s-server"></i> Member
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/connections/connections" mm-active="connections">
                <i class="metismenu-icon pe-7s-server"></i> Connection
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="#" mm-active="unassigned-connections|rejected-connections">
        <i class="metismenu-icon pe-7s-search"></i> Unassigned/ Rejected Connections
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/connections/unassigned-connections" mm-active="unassigned-connections">
                <i class="metismenu-icon pe-7s-server"></i> Unassigned Connections
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/connections/rejected-connections" mm-active="rejected-connections">
                <i class="metismenu-icon pe-7s-server"></i> Rejected Connections
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>member/connections/connection-types" mm-active="connection-types">
        <i class="metismenu-icon pe-7s-config"></i> Types
    </a>
</li>
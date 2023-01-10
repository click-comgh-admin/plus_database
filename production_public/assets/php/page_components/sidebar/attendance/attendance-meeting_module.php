<li class="app-sidebar__heading">Meetings</li>
<li>
    <?php
        $get_string = "attendance/meeting/web-clocking-count?account_id=".AccountInfoId;
        $web_clocking_count = $ccApi->fetch_from($get_string=$get_string, function($web_clocking_count)
        {
            return isset($web_clocking_count[0]['total_count'])? (int)$web_clocking_count[0]['total_count']: 0;
        }, $debug = false);
    ?>
    <a href="#" mm-active="meeting-clocking|meeting-approvals">
        <i class="metismenu-icon pe-7s-check"></i> Meetings Clocking
        <?= $hasApprovals = ($web_clocking_count > 0)? 
        '<span class="badge badge-warning">'.$web_clocking_count.'</span>': ""; ?>
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/meeting-clocking" mm-active="meeting-clocking">
                <i class="metismenu-icon pe-7s-check"></i> Meetings Clocking
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/meeting-approvals" mm-active="meeting-approvals">
                <i class="metismenu-icon pe-7s-check"></i> Meetings Approvals
                <?= $hasApprovals; ?>
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="#" mm-active="meeting-attendees|meeting-absentees">
        <i class="metismenu-icon pe-7s-note2"></i> Attendance List
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/results/meeting-attendees" mm-active="meeting-attendees">
                <i class="metismenu-icon pe-7s-note2"></i> Attendees
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/results/meeting-absentees" mm-active="meeting-absentees">
                <i class="metismenu-icon pe-7s-note2"></i> Absentees
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/results/meeting-report" mm-active="meeting-report">
        <i class="metismenu-icon pe-7s-note2"></i> Meeting Report
    </a>
</li>
<li>
    <a class="text-primary" href="#"
        mm-active="create-meeting|set-meeting-time">
        <i class="metismenu-icon pe-7s-info"></i> Meeting Info
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/meeting/create-meeting"
                mm-active="create-meeting">
                <i class="metismenu-icon"></i> Create Meeting
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/meeting/set-meeting-time"
                mm-active="set-meeting-time">
                <i class="metismenu-icon"></i> Set Meeting Time
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/members/clocking-members" mm-active="clocking-members">
        <i class="metismenu-icon pe-7s-user"></i> Clocking Members
    </a>
</li>
<li>
    <a href="#"
        mm-active="attendance-group|attendance-subgroup|assign-attendance">
        <i class="metismenu-icon pe-7s-vector"></i> <i class="pe-7s-check"></i> Meeting Group/ Subgroup
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/members/attendance-group"
                mm-active="attendance-group">
                <i class="metismenu-icon"></i> Create Meeting Group
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/members/attendance-subgroup"
                mm-active="attendance-subgroup">
                <i class="metismenu-icon"></i> Create Meeting Subgroup
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/members/assign-attendance"
                mm-active="assign-attendance">
                <i class="metismenu-icon"></i> Assign Meeting Group
            </a>
        </li>
    </ul>
</li>
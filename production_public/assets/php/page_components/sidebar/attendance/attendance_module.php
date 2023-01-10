<li>
    <a href="<?= CLIENT_BASE_URL; ?>settings/schedules" mm-active="schedules|schedule">
        <i class="metismenu-icon pe-7s-check"></i> Scheduled Meetings/Events
    </a>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>settings/schedule-form" mm-active="schedule-form">
        <i class="metismenu-icon pe-7s-check"></i> Create Meetings/Events
    </a>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>clocking/clocker" mm-active="clocker">
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
            <a href="<?= CLIENT_BASE_URL; ?>clocking/attendees" mm-active="attendees">
                <i class="metismenu-icon pe-7s-note2"></i> Attendees
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>clocking/absentees" mm-active="absentees">
                <i class="metismenu-icon pe-7s-note2"></i> Absentees
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>clocking/history" mm-active="history">
        <i class="metismenu-icon pe-7s-clock"></i> Attendance History
    </a>
</li>
<li>
    <a href="#" mm-active="view-al-status|add-al-status|view-al-assignment|assign-al-status">
        <i class="metismenu-icon pe-7s-clock"></i> Absent/ Leave Status
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>absent-leave/view-al-status" mm-active="view-al-status">
                <i class="metismenu-icon pe-7s-clock"></i> View Status
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>absent-leave/add-al-status" mm-active="add-al-status">
                <i class="metismenu-icon pe-7s-clock"></i> Create Status
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>absent-leave/view-al-assignment" mm-active="view-al-assignment">
                <i class="metismenu-icon pe-7s-clock"></i> View Assignments
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>absent-leave/assign-al-status" mm-active="assign-al-status">
                <i class="metismenu-icon pe-7s-clock"></i> Assign Status
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="#" mm-active="device-requests|device-settings">
        <i class="metismenu-icon pe-7s-phone"></i> Clocking Devices
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>devices/device-requests" mm-active="device-requests">
                <i class="metismenu-icon pe-7s-phone"></i> Device Requests
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>devices/device-settings" mm-active="device-settings">
                <i class="metismenu-icon pe-7s-phone"></i> User Devices
            </a>
        </li>
    </ul>
</li>
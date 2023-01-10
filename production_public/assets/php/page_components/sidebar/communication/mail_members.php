
<li>
    <?php
        $get_string = "mailer/members/new_count?account_id=$account_id";
        $message_count = $ccApi->communications($type="clients", $get_string, function($messages)
        {
            return $messages;
        }, $debug = false);
    ?>
    <a href="#" mm-active="members">
        <i class="metismenu-icon pe-7s-users"></i> Message Members
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
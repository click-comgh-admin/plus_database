
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
        <?php 
            $mCount = empty($message_count_alt_cc) 
                ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'
                . (count($message_count_cc) + count($message_count_alt_cc)) .'</span>';
            echo empty($message_count) ? '': $mCount;
        ?>
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
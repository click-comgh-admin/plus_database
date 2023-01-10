
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
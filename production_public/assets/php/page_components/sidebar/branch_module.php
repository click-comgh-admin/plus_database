
<?php
    $get_string = "client-membership/branch/branch?client_id=".AccountInfoId;
    $branch_account = $ccApi->fetch_from($get_string = $get_string, function ($branch_account)
    {
        return isset($branch_account[0])? $branch_account[0]: [];
    }, $debug=false);

    if (!empty($branch_account)) { ?>
        <li>
            <?php
                $head_account_id = isset($is_branch_account['pdcbl_client']) ? $is_branch_account['pdcbl_client'] : 0;
                $branch_account_id = isset($is_branch_account['pdcbl_branch']) ? $is_branch_account['pdcbl_branch'] : 0;

                $get_string = "client-membership/branch/communications/from_branch?account_id=$account_id&user_id=$user_id";
                $inbox_msg_count = $ccApi->fetch_from($get_string=$get_string, function($messages)
                {
                    return isset($messages['inbox_msg_count'])? $messages['inbox_msg_count']: 0;
                }, $debug = false); 
            ?>
            <a href="#" mm-active="add-branch|view-branches|branch|update-branch|users|branch-messages">
                <i class="metismenu-icon pe-7s-share"></i> Account Branches
                <?= ($inbox_msg_count === 0) ? '': '<span class="badge badge-danger mx-2">'. $inbox_msg_count .'</span>'; ?>
                <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
            </a>
            <ul>
                <li>
                    <a href="<?= CLIENT_BASE_URL; ?>account-branch/add-branch" mm-active="add-branch">
                        <i class="metismenu-icon">
                        </i>Add Branch
                    </a>
                </li>
                <li>
                    <a href="<?= CLIENT_BASE_URL; ?>account-branch/view-branches" mm-active="view-branches">
                        <i class="metismenu-icon">
                        </i>View Branches
                    </a>
                </li>
                <li>
                    <a href="<?= CLIENT_BASE_URL; ?>account-branch/communications/branch-messages" mm-active="branch-messages">
                        <i class="metismenu-icon"></i>Branch Communications
                    </a>
                </li>
            </ul>
        </li>
    <?php }
?>
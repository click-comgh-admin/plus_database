<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="card">
            <?php
                $_page = (AccountInfoCategory === 10) ? "Department(s)":"Group(s)";
                $page = (AccountInfoCategory === 10) ? "Unit(s)":"Sub-Group(s)";
            ?>
            <div class="card-header">
                <i>Update <?= @$member['pdm_firstname'] . " " . @$member['pdm_surname']; ?>'s <?= $page; ?></i>
            </div>
            <div class="card-body">
                <div class="card-title">
                    <i>Current <?= $_page; ?>: <u><?= @open_modal_groups(@$member['member_groups'], $account_id, $ccApi); ?></u></i>
                </div>
                <div class="card-title">
                    <i>Current <?= $page; ?>: <u><?= @open_modal_subgroups(@$member['member_subgroups'], $account_id, $ccApi); ?></u></i>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <?php require_once(BASE_DIRECTORY."/subpages/membership/forms/edit_pages-subgroups.php"); ?>
                    </div>
                </div>
            </div>
            <div class="card-footer d-block">
            </div>
        </div>
    </div>
</div>
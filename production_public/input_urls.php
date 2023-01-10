<input type="hidden" name="BASE_URL" value="<?= CLIENT_BASE_URL; ?>" />
<input type="hidden" name="API_BASE_URL" value="<?= API_BASE_URL; ?>" />
<input type="hidden" name="PUBLIC_BASE_URL" value="<?= PUBLIC_BASE_URL; ?>" />
<input type="hidden" name="CLIENT_BASE_URL" value="<?= CLIENT_BASE_URL; ?>" />
<input type="hidden" name="MEMBER_BASE_URL" value="<?= MEMBER_BASE_URL; ?>" />
<input type="hidden" name="FILE_BUCKET_BASE_URL" value="<?= FILE_BUCKET_BASE_URL; ?>" />
<?php
    if (isset($_COOKIE['pdb-branch-page'])) { ?>
        <input type="hidden" name="PDB_BRANCH_PAGE" value='<?= $_COOKIE['pdb-branch-page']; ?>' />
    <?php }
?>
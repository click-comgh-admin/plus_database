<?php
    if (isset($_POST) && !empty($_POST)) {
        define("POST_URL", API_BASE_URL."membership/download/$endpoint");
        require_once 'download - processing.php';
    }
?>
<div class="d-flex">
    <form role="form" class="mx-1" action="" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="query_string" value="<?= $encQueryStr; ?>" />
        <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
        <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        <input type="hidden" name="download_type" value="excel" />
        <button type="submit" class="btn btn-sm bg-grow-early text-light font-weight-bold rounded-pill">Download In Excel <i class="fa fa-file-excel"></i></button>
    </form>
    <form role="form" class="mx-1" action="" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="query_string" value="<?= $encQueryStr; ?>" />
        <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
        <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        <input type="hidden" name="download_type" value="pdf" />
        <button type="submit" class="btn btn-sm bg-strong-bliss text-light font-weight-bold rounded-pill">Download In PDF <i class="fa fa-file-pdf"></i></button>
    </form>
</div>

<?php
    $get_string = "clients/folders/all_folders?account_id=$account_id";
    $folders = $ccApi->file_manager($get_string, function($folders)
    {
        return $folders;
    }, $debug = false);

    function loading($text)
    {
        return "<div class=\"card p-2 mx-auto my-3 border border-info\">$text</div>";
    }
    // print_r($folders);
?>
<div class="container-fluid">
    <h5 class="card-title card p-2">Folders</h5>
    <div class="row justify-content-left" none-table-pagin="folders" pt_c_cid="<?= $account_id; ?>"
        pt_c_loading='<?= loading("Content(s) Loading..."); ?>' pt_c_emptyMsg='<?= loading("Nothing To Show..."); ?>'>
        <!-- <div load-here="true"></div> -->
        <?php
            /* foreach ($folders as $folder_key => $folder) { ?>
                <div class="col-sm-6 col-md-4 col-lg-3" style="width: 50%">
                    <div class="card rounded shadow shadow-lg my-2">
                        <div class="card-header py-1">
                            <div class="card-header-title small text-center w-100">
                                <b><?= $folder['pdcfmf_folder']; ?></b>
                            </div>
                        </div>
                        <div class="card-body p-1 text-center">
                            <span class="pe-7s-folder icon-gradient bg-sunny-morning font-weight-bold fa-3x"></span>
                        </div>
                        <div class="card-footer d-block p-1 text-center">
                            <a href="<?= FM_BaseUrl; ?>folder?id=<?= $folder['pdcfmf_id']; ?>"
                                class="d-block btn-btn-link btn-sm icon-gradient bg-sunny-morning font-weight-bold">OPEN</a>
                        </div>
                        <?php //print_r($folder); ?>
                    </div>
                </div>
            <?php } */
        ?>
    </div>
</div>
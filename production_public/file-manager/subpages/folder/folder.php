<?php
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    $get_string = "clients/folders/folder?account_id=$account_id&id=".$_GET['id'];
    $folder = $ccApi->file_manager($get_string, function($folder)
    {
        return @$folder;
    }, $debug = false);

    function loading($text)
    {
        return "<div class=\"card p-2 mx-auto my-3\">$text</div>";
    }

    // print_r($folder);

    $foldername = $folder['pdcfmf_folder'];
    $folderid = $folder['pdcfmf_id'];
    
    $get_string = "clients/subfolders/all_subfolders?account_id=$account_id&folder_id=".$_GET['id'];
    $subfolders = $ccApi->file_manager($get_string, function($subfolders)
    {
        return @$subfolders;
    }, $debug = false);

    // print_r($subfolders);
    
    $get_string = "clients/files/all_files?account_id=$account_id&folder_id=".$_GET['id'];
    $files = $ccApi->file_manager($get_string, function($files)
    {
        return @$files;
    }, $debug = false);

    // print_r($files);
?>
<div class="container-fluid">
    <div class="card p-2 mb-2">
        <h5 class="card-title m-0">Sub-Folders</h5>
        <div class="btn-actions-pane-right">
            <button class="btn btn-primary collapsed" aria-expanded="false"
                type="button" data-toggle="collapse" href="#upload_folder_file">Upload File(s) Here</button>
            <button class="btn btn-warning collapsed" aria-expanded="false"
                type="button" data-toggle="collapse" href="#rename_this_folder">Rename Folders</button>
        </div>
    </div>
    <div>
        <div class="card-header-tab card-header-tab-animation card-header h-25"></div>
        <div class="card-body py-0">
            <div class="collapse py-2" id="upload_folder_file">
                <h5 class="card-title m-0">Upload File(s) To This Folder</h5>
                <?php require_once "forms/upload_folder.php"; ?>
            </div>
            <div class="collapse py-2" id="rename_this_folder">
                <h5 class="card-title m-0">Rename This Folder</h5>
                <?php require_once "forms/rename/folder.php"; ?>
            </div>
        </div>
        <div class="card-footer"> </div>
    </div>
    <div class="row justify-content-left">
        <?php
            foreach ($subfolders as $subfolder_key => $subfolder) { ?>
                <div class="col-sm-6 col-md-4 col-lg-3" style="width: 50%">
                    <div class="card rounded shadow shadow-lg my-2">
                        <div class="card-header py-1">
                            <div class="card-header-title small text-center w-100">
                                <b><?= $subfolder['pdcfmf_subfolder']; ?></b>
                            </div>
                        </div>
                        <div class="card-body p-1 text-center">
                            <span class="pe-7s-folder icon-gradient bg-sunny-morning font-weight-bold fa-3x"></span>
                        </div>
                        <div class="card-footer d-block p-1 text-center">
                            <a href="<?= FM_BaseUrl; ?>subfolder?id=<?= $subfolder['pdcfmf_id']; ?>&folder=<?= $_GET['id']; ?>"
                                class="d-block btn-btn-link btn-sm icon-gradient bg-sunny-morning font-weight-bold">OPEN</a>
                        </div>
                        <?php //print_r($subfolder); ?>
                    </div>
                </div>
            <?php }
        ?>
    </div>
</div><hr>
<div class="container-fluid">
    <h5 class="card-title card p-2">Files</h5>
    <div class="row justify-content-left" none-table-pagin="folder-files" pt_c_cid="<?= $account_id; ?>"
        pt_c_loading='<?= loading("Content(s) Loading..."); ?>' pt_c_emptyMsg='<?= loading("Nothing To Show..."); ?>' pt_c_folder_id='<?= $_GET['id']; ?>'>
        <?php /*
            foreach ($files as $file_key => $file) {
                $file_name = explode("/", $file['pdcfmf_filename']);
                $file_name = end($file_name);
                $file_name = explode(".", $file_name)[0]; ?>
                <div class="col-sm-6 col-md-4 col-lg-3 py-2" style="width: 50%">
                    <div class="card rounded shadow shadow-lg">
                        <div class="card-header p-1">
                            <div class="card-header-title small text-center w-100">
                                <b><?= $file_name; ?></b>
                            </div>
                        </div>
                        <div class="card-body p-1 text-center">
                            <?php $fileIcon = $MailAttachment->get_file_icon($file['pdccmc_attachment']); ?>
                            <span class="fa <?= $fileIcon; ?> icon-gradient bg-sunny-morning fa-3x"></span>
                        </div>
                        <div class="card-footer d-block p-1 text-center">
                            <a href="<?= FM_BaseUrl; ?>file?id=<?= $file['pdccmc_id']; ?>"
                                class="d-block btn-btn-link btn-sm icon-gradient bg-sunny-morning font-weight-bold">OPEN</a>
                        </div>
                        <?php //print_r($file); ?>
                    </div>
                </div>
            <?php } */
        ?>
    </div>
</div>
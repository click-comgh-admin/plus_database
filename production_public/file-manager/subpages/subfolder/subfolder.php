<?php
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    $get_string = "clients/folders/folder?account_id=$account_id&id=".$_GET['folder'];
    $folder = $ccApi->file_manager($get_string, function($folder)
    {
        return @$folder;
    }, $debug = false);

    function loading($text)
    {
        return "<div class=\"card p-2 mx-auto my-3\">$text</div>";
    }

    // print_r($folder);
    
    $get_string = "clients/subfolders/subfolder?account_id=$account_id&folder_id=".$_GET['folder']."&id=".$_GET['id'];
    $subfolders = $ccApi->file_manager($get_string, function($subfolders)
    {
        return @$subfolders;
    }, $debug = false);

    // print_r($subfolders);

    $subfoldername = $subfolders['pdcfmf_subfolder'];
    $subfolderid = $subfolders['pdcfmf_id'];
    
    // $get_string = "clients/files/all_files?account_id=$account_id&folder_id=".$_GET['folder']."&subfolder_id=".$_GET['id'];
    // $files = $ccApi->file_manager($get_string, function($files)
    // {
    //     return @$files;
    // }, $debug = false);

    // print_r($files);
?>
<div class="container-fluid">
    <div class="card p-2 mb-2">
        <h5 class="card-title m-0 d-flex">
            <span class="my-1">Files</span>
        </h5>
        <div class="btn-actions-pane-right">
            <button class="btn btn-primary collapsed" aria-expanded="false"
                type="button" data-toggle="collapse" href="#upload_folder_file">Upload File(s) Here</button>
            <button class="btn btn-warning collapsed" aria-expanded="false"
                type="button" data-toggle="collapse" href="#rename_this_subfolder">Rename Sub-Folders</button>
        </div>
    </div>
    <div>
        <div class="card-header-tab card-header-tab-animation card-header h-25"></div>
        <div class="card-body py-0">
            <div class="collapse py-2" id="upload_subfolder_file">
                <h5 class="card-title m-0">Upload File(s) To This Sub-Folder</h5>
                <?php require_once "forms/upload_subfolder.php"; ?>
            </div>
            <div class="collapse py-2" id="rename_this_subfolder">
                <h5 class="card-title m-0">Rename This Folder</h5>
                <?php require_once "forms/rename/subfolder.php"; ?>
            </div>
        </div>
        <div class="card-footer"> </div>
    </div>
    <div class="row justify-content-left" none-table-pagin="subfolder-files" pt_c_cid="<?= $account_id; ?>"
        pt_c_loading='<?= loading("Content(s) Loading..."); ?>' pt_c_emptyMsg='<?= loading("Nothing To Show..."); ?>' pt_c_folder_id='<?= $_GET['folder']; ?>'
        pt_c_subfolder_id='<?= $_GET['id']; ?>'>
        <?php
            /*if (!empty($files)) {
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
                <?php }
            } else { ?>
                <div class="col-md-12">
                    <h5 class="card-title card p-2">No Files Here</h5>
                </div>
            <?php } */
        ?>
    </div>
</div>
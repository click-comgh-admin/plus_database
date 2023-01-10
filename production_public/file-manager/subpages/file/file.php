<?php    
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");

    $get_string = "clients/files/file?account_id=$account_id&id=".$_GET['id'];
    $file = $ccApi->file_manager($get_string, function($file)
    {
        return @$file;
    }, $debug = false);

    // print_r($file);

    if (empty($file)) { ?>
        <script>
            // history.back();
            window.location = "<?= CLIENT_BASE_URL."file-manager/folder"; ?>"
        </script>
    <?php die(); }

    $fileid = $_GET['id'];

    $filename = explode("/", $file['pdcfmf_filename']);
    $filename = end($filename);
    $filename = @explode(".", $filename)[0];

    $get_string = "clients/folders/folder?account_id=$account_id&id=".$file['pdcfmf_folder_id'];
    $folder = $ccApi->file_manager($get_string, function($folder)
    {
        return @$folder;
    }, $debug = false);

    // print_r($folder);
    
    if ($file['pdcfmf_subfolder_id'] != 0) {
        $get_string = "clients/subfolders/subfolder?account_id=$account_id&folder_id=".$file['pdcfmf_folder_id']."&id=".$file['pdcfmf_subfolder_id'];
        $subfolder = $ccApi->file_manager($get_string, function($subfolder)
        {
            return @$subfolder;
        }, $debug = false);
    }

    // print_r($subfolder);
    
    function delete_btn($file_id, $account_id, $user_id, $class) { ?>
        <button class="<?= $class; ?>" style="padding: .25rem .5rem !important"
            btn-submit-post=<?= json_encode(["file_id"=>$file_id, "client_id"=>$account_id, "admin_user_id"=>$user_id, "entry"=>1]); ?>
            btn-submit-post--confirm="Delete File?"
            btn-submit-post--url="<?= API_BASE_URL."file-manager/clients/file/delete"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="d-none d-sm-block">Delete</span>
        </button>
    <?php }

    $uploadedBy = $ccApi->user_info($type = "client", $account_id = null, $all="one_user", 
        $id=(isset($file['pdcfmf_created_by'])? $file['pdcfmf_created_by']: 0), function ($info) {
        if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
            return "Unknown??";
        } else {
            return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'] . ", / <span class=\"p-2 shadow shadow-lg\">Phone: <a class=\"p-2\" href=\"tel:".$info[0]['pdcu_phone']."\">".$info[0]['pdcu_phone']."</a></span>";
        }
    }); 
    $uploadDate = isset($file['pdcfmf_date'])? date("Y-m-d @ H:i A", strtotime($file['pdcfmf_date'])): '-- @ : ';
    $fileInfo = "
        <div class=\"table-responsive\">
            <table class=\"table table-striped table-hover\">
                <thead class=\"bg-primary text-white\">
                    <tr>
                        <th>-<th><th>--</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>File Name<th><td>".$filename."</td>
                    </tr>
                    <tr>
                        <th>File Source<th><td>".$file['pdcfmf_source']."</td>
                    </tr>
                    <tr>
                        <th>File Size<th><td>".$fM->storage_space($file['pdcfmf_size'])."</td>
                    </tr>
                    <tr>
                        <th>Uploaded By<th><td>".$uploadedBy."</td>
                    </tr>
                    <tr>
                        <th>Date<th><td>".$uploadDate."</td>
                    </tr>
                </tbody>
            </table>
            <table class=\"table table-striped table-hover\">
                <thead class=\"bg-primary text-white\">
                    <tr>
                        <th>File Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>".str_replace("'", "&#39;", multilineText($file['pdcfmf_file_description']))."</td>
                    </tr>
                </tbody>
            </table>
        </div>
    ";
?>

<div class="container-fluid">
    <div class="card p-2 mb-2">
        <h5 class="card-title m-0 d-flex">
            <span class="my-1">
                <?= ($file['pdcfmf_folder_id'] == 0) ? "": '>> <a href="'.FM_BaseUrl.'folder?id='.$file['pdcfmf_folder_id'].'" >'.$folder['pdcfmf_folder'].'</a>'; ?> 
                <?= ($file['pdcfmf_subfolder_id'] == 0) ? "": '>> <a href="'.FM_BaseUrl.'subfolder?id='.$file['pdcfmf_subfolder_id'].'&folder='.$file['pdcfmf_folder_id'].'" >'.$subfolder['pdcfmf_subfolder'].'</a>'; ?>
                >> <?= $filename; ?>
            </span>
        </h5>
        <div class="btn-actions-pane-right">
            <button class="btn btn-sm m-1 btn-outline-info shadow" type="button" data-toggle="modal"
                open-modal--id="view_group-info_<?= $file['pdccmc_id']; ?>" open-modal--type="modal-md"
                open-modal--title="View File Info" open-modal--html='<?= $fileInfo; ?>' open-modal--buttons='
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                File Info <span class="ml-1 pe-7s-info"></span>
            </button>
            <button class="btn btn-warning collapsed" aria-expanded="false"
                type="button" data-toggle="collapse" href="#rename_this_file">Rename File</button>
            <?= delete_btn($file['pdccmc_id'], AccountInfoId, $user_id, "btn btn-sm bg-love-kiss text-white font-weight-bold"); ?>
        </div>
    </div>
    <div>
        <div class="card-header-tab card-header-tab-animation card-header h-25"></div>
        <div class="card-body py-0">
            <div class="collapse py-2" id="rename_this_file">
                <h5 class="card-title m-0">Rename This File</h5>
                <?php require_once "forms/rename/file.php"; ?>
            </div>
        </div>
        <div class="card-footer"> </div>
    </div>
    <div class="row justify-content-left" >
        <?= $MailAttachment->display_file($file['pdccmc_attachment']); ?>
    </div>
</div>
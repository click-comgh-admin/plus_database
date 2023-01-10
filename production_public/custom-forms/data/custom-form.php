<?php
	require_once '../../assets/php/include.php';
    require_once '../../defs.php';
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Custom Forms => View Data");
    define('PAGE_DESC', "View Data");
?>
<!doctype html>
<html lang="en">
    <?php require_once '../../assets/php/page_components/header/head.php'; ?>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once '../../assets/php/page_components/header/navbar.php'; ?>
            <?php require_once '../../assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once '../../assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-note icon-gradient bg-sunny-morning">
                                        </i>
                                    </div>
                                    <div>
                                        <?= PAGE_TITLE; ?>
                                        <div class="page-title-subheading"><?= PAGE_DESC; ?></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                            if ($account_status['is_active'] === false) {
                                require_once '../assets/php/page_components/account_inactive.php';
                                require_once '../assets/php/page_components/footer/close.php';
                                die();
                            }
                            $_appPage = 0;
                            foreach ($appPages as $key => $page) {
                                if ((string)strtolower($page['pdpc_page']) === "membership data") {
                                    $_appPage = $page['pdpc_id'];
                                }
                            }
                            if (in_array($_appPage, $my_access_levels) === false) {
                                require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                                require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                                die();
                            }
                            define("customForms_BaseUrl", CLIENT_BASE_URL."custom-forms/");

                            function show_data_btn($response, $member_id, $form_id, $account_id, $user_id, $ccApi, $class) { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal" open-modal--type="modal-lg"
                                    open-modal--id="view_response_class-<?= rand(0, 999999999); ?>" open-modal--title="Member Data"
                                    open-modal--html='<?php                         
                                        show_data($response, $member_id, $form_id, $account_id, $user_id, $ccApi); 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-note2"></span>
                                    <span class="d-none d-sm-block">View Data</span>
                                </button>
                            <?php }

                            function show_data($response, $member_id, $form_id, $account_id, $user_id, $ccApi) { ?>
                                <div class="mt-3">
                                    <div class="card shadow">
                                        <div class="card-header">Download
                                            <div class="container" btn-submit-post--display="download-attachment"></div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-sm bg-grow-early text-light font-weight-bold rounded-pill"
                                                btn-submit-download=<?= json_encode(["member_id"=>$member_id, "form_id"=>$form_id, "download_type"=>"excel", "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Download In Excel?" btn-submit-post--download="download-attachment"
                                                btn-submit-post--url="<?= API_BASE_URL."custom-form/clients/data/download"; ?>">
                                                Download In Excel <i class="fa fa-file-excel"></i>
                                            </button>
                                            <button class="btn btn-sm bg-strong-bliss text-light font-weight-bold rounded-pill"
                                                btn-submit-download=<?= json_encode(["member_id"=>$member_id, "form_id"=>$form_id, "download_type"=>"pdf", "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Download In PDF?" btn-submit-post--download="download-attachment"
                                                btn-submit-post--url="<?= API_BASE_URL."custom-form/clients/data/download"; ?>">
                                                Download In PDF <i class="fa fa-file-pdf"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table
                                        class="align-middle mb-0 table table-bordered table-striped table-hover col-md-12">
                                        <thead>
                                            <tr>
                                                <th>Query</th>
                                                <!-- <th style="white-space: nowrap;">Response</th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                foreach ($response as $key => $res) { ?>
                                                    <tr class="card m-1 p-1">
                                                        <td class="p-0">
                                                            <table class="align-middle mb-0 table table-bordered table-striped table-hover w-100">
                                                                <tr>
                                                                    <th><?= $res['question']; ?></th>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <ul class="mb-0">
                                                                            <?php
                                                                                foreach ($res['member_response'] as $mr_key => $mr) {
                                                                                    if (isset($res['member_response']['file_info'])) {
                                                                                        $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
                                                                                        echo $MailAttachment->files([$mr], 10000, ["col"=>"col-md-3", "width"=>"33%"], true, false);
                                                                                    } else {
                                                                                        if (is_string($mr)) {
                                                                                            echo '<li>'.str_replace("'", "&#39;", multiline_text($mr)).'</li>';
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ?>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                <?php }
                                            ?>
                                        </tbody>
                                    </table>
                                </div>
                            <?php }

                            function edit_data_btn($responseInfo, $questions, $member_id, $account_id, $user_id, $confirm_msg, $ccApi, $class, $tf, $type = "md") { ?>
                                <button class="<?= $class; ?>" type="button" data-toggle="modal"
                                    open-modal--id="edit_response_class-<?= rand(0, 999999999); ?>-<?= $type; ?>"
                                    open-modal--title="Edit Report" open-modal--html='<?php 
                                        require 'forms/edit_form.php'; 
                                    ?>' open-modal--buttons='
                                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                    '>
                                    <span class="pe-7s-edit"></span>
                                    <span class="d-none d-sm-block">Edit</span>
                                </button>
                            <?php }

                            function delete_btn($form_id, $member_id, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["form_id"=>$form_id, "member_id"=>$member_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                    btn-submit-post--confirm="Delete Data?"
                                    btn-submit-post--url="<?= API_BASE_URL."custom-form/clients/data/delete"; ?>">
                                    <span class="pe-7s-trash"></span>
                                    <span class="d-none d-sm-block">Delete</span>
                                </button>
                            <?php }
                        ?>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-12 col-lg-4">
                                <div class="main-card mb-3 card shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Enter Member Name</h5>
                                        <?php require_once BASE_DIRECTORY.'/custom-forms/data/forms/filter_members.php'; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-8">
                                <?php
                                    if (isset($_GET['form']) && !empty($_GET['form'])) {
                                        if (isset($_GET["member"])) {
                                            if (isset($_GET['edit']) && !empty($_GET['edit'])) {
                                                require_once "subpages/edit_data.php";
                                            } else {
                                                require_once "subpages/view_data.php";
                                            }
                                        } else {
                                            require_once "subpages/view_data_all.php";
                                        }
                                    } else { ?>
                                        <script>
                                            history.back();
                                        </script>
                                    <?php die(); }
                                ?>
                            </div>
                        </div>
                    </div>
                    <?php require_once '../../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>
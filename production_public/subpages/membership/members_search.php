<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <?php
                $member_search = @(isset($_GET['search']) && !empty($_GET['search'])) ? $_GET['search']: "";

                $_GET['currentpage'] = @(isset($_GET['currentpage']) && !empty($_GET['currentpage'])) ? $_GET['currentpage']: 1;

                $page_url = "members?search&search=".@$_GET['search'];
                $page_reset = "members?search";
            ?>
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Filter Members
                </div>
                <?php require_once('forms/search_filter_form.php'); ?>
            </div>
            <div class="card-body">
                <h5 class="card-title">Members</h5>

                <div>
                    <?php
                        $rowsperpage = 10;
                        $member_id = $encryptor->decrypt($member_search);
                        $get_string = "currentpage=" . $_GET['currentpage'] . "&rowsperpage=$rowsperpage&client_id=$account_id" . (($member_search == "") ? "" : "&member_id=$member_id");

                        $client_members = $ccApi->client_members($type="search_member_name", $get_string = $get_string, function ($members) {
                            return $members;
                        }, $debug = 0);  

                        $encryptor = new Encryptor("members-data--download", md5("members-data--download"));
                        $queryArray = [
                            "client_id"=>$account_id,
                            "member_id"=>$member_id,
                        ];
                        $queryStr = json_encode($queryArray);
                        $encQueryStr = $encryptor->encrypt($queryStr);
                        $endpoint = "members";
                        require_once(BASE_DIRECTORY.'/subpages/membership/forms/download.php');
                                                 
                        require_once "member_list.php";
                    ?>
                </div>
            </div>
            <div class="card-footer">
                <?php require_once "member_pagi_btn.php"; ?>
            </div>
        </div>
    </div>
</div>
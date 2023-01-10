<?php
    use Encryptor\Encryptor;
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <?php
                $gender = @(isset($_GET['gender']) && !empty($_GET['gender'])) ? $_GET['gender']: null;
                $status = @(isset($_GET['status']) && !empty($_GET['status'])) ? $_GET['status']: null;
                $group_id = @(isset($_GET['group_id']) && !empty($_GET['group_id'])) ? $_GET['group_id']: "all";
                $reg_status = @(isset($_GET['reg_status']) && !empty($_GET['reg_status'])) ? $_GET['reg_status']: null;//new
                $reg_status = ((int)$reg_status === 1) ? 0: $reg_status;//new
                $reg_status = ((int)$reg_status === 2) ? 1: $reg_status;//new
                $_GET['currentpage'] = @(isset($_GET['currentpage']) && !empty($_GET['currentpage'])) ? $_GET['currentpage']: 1;

                $page_url = "members?group&gender=".@$_GET['gender']."&status=".@$_GET['status'] . "&group_id=$group_id"."&reg_status=".@$_GET['reg_status'];
                $page_url = htmlentities($page_url);
                $page_reset = "members?group";
            ?>
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Filter Members
                </div>
                <?php require_once('forms/group_filter_from.php'); ?>
            </div>
            <div class="card-body">
                <h5 class="card-title">Members</h5>

                <div>
                    <?php
                        $rowsperpage = 10;
                        $get_string = "currentpage=" . $_GET['currentpage'] . "&rowsperpage=$rowsperpage&client_id=$account_id" . ((is_null($gender)) ? "" : "&gender=$gender") 
                            . ((is_null($status)) ? "" : "&status=$status") . "&group_id=$group_id" . ((is_null($reg_status)) ? "" : "&reg_status=$reg_status");//NEW;

                        $client_members = $ccApi->client_members($type="groups", $get_string = $get_string, function ($members) {
                            return $members;
                        }, $debug = 0);   

                        $encryptor = new Encryptor("members-data--download", md5("members-data--download"));
                        $queryArray = [
                            "client_id"=>$account_id,
                            "gender"=>$gender,
                            "status"=>$status,
                            "group_id"=>$group_id
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
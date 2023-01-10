<?php 
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));
    $this_filter_type = "location";
    
    $gender = @(isset($_GET['gender']) && !empty($_GET['gender'])) ? $_GET['gender']: null;
    $status = @(isset($_GET['status']) && !empty($_GET['status'])) ? $_GET['status']: null;
    $selected_country = @(isset($_GET['country']) && !empty($_GET['country'])) ? $_GET['country']: "all";
    $region = @(isset($_GET['region']) && !empty($_GET['region'])) ? $_GET['region']: null;
    $district = @(isset($_GET['district']) && !empty($_GET['district'])) ? $_GET['district']: null;
    $reg_status = @(isset($_GET['reg_status']) && !empty($_GET['reg_status'])) ? $_GET['reg_status']: null;//new

    $page_url = "members?location&country=" . @$selected_country."&region=" . @$region."&district=" . @$district . "&gender=$gender" . "&status=$status"."&reg_status=".@$_GET['reg_status'];
    $page_url = htmlentities($page_url);
    $page_reset = "members?location";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-5">
                    </div>
                    <div class="col-md-12 col-lg-7">
                        <?php require_once BASE_DIRECTORY."/subpages/membership/forms/location_filter_from.php"; ?>
                    </div>
                    <div class="col-md-12 col-lg-12"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2 bg-white" enable-fullscreen="membership-data">
                <h5 class="card-title">Membership Data/ Location</h5>
                <div class="">
                    <?php 
                        require_once "filtered_results.php";
                        $encryptor = new Encryptor("members-data--download", md5("members-data--download"));
                        $queryArray = [
                            "client_id"=>AccountInfoId,
                            "gender"=>$this_gender,
                            "status"=>$this_status,
                            "country"=>$this_country,
                            "region"=>$this_region,
                            "district"=>$this_district,
                        ];
                        $queryStr = json_encode($queryArray);
                        $encQueryStr = $encryptor->encrypt($queryStr);
                        $endpoint = "members";
                        require_once(BASE_DIRECTORY.'/subpages/membership/forms/download.php');
                        require_once BASE_DIRECTORY."/subpages/membership/datatable/table.php";
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
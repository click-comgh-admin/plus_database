<?php
    $page = "view-branches";
    $page_url = Current_BaseUrl."$page";

    // country
    // region
    // district

    $_by_country = "by_country";
    $_country = "country";
    if (isset($_GET[$_country])) { 
        $by_country = $_GET[$_country];
        $this_country = ($by_country == '') ? "all": $by_country;
        $by_country = ($by_country == '') ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_country; ?>", "<?= $this_country; ?>", $time = 2); </script>
    <?php } else {
        $by_country = @(isset($_COOKIE[$_by_country])) ? $_COOKIE[$_by_country] : 'all';
        $this_country = @(isset($_COOKIE[$_country])) ? $_COOKIE[$_country] : "all"; 
        $by_country = ($by_country == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_country; ?>", "<?= (strtolower($this_country) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_region = "by_region";
    $_region = "region";
    if (isset($_GET[$_region])) { 
        $by_region = (int)$_GET[$_region];
        $this_region = ($by_region == 0) ? "all": $by_region;
        $by_region = ($by_region == 0) ? 0: 1;
        $by_region = ($by_country == 0) ? 0: $by_region;
        ?>
        <script> __set_cookies__("<?= $_region; ?>", "<?= $this_region; ?>", $time = 2); </script>
    <?php } else {
        $by_region = @(isset($_COOKIE[$_by_region])) ? $_COOKIE[$_by_region] : 0;
        $this_region = @(isset($_COOKIE[$_region])) ? $_COOKIE[$_region] : "all"; 
        $by_region = ($by_region == 0) ? 0: 1;
        $by_region = ($by_country == 0) ? 0: $by_region; ?>
        <script> __set_cookies__("<?= $_by_region; ?>", "<?= (strtolower($this_region) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_district = "by_district";
    $_district = "district";
    if (isset($_GET[$_district])) { 
        $by_district = (int)$_GET[$_district];
        $this_district = ($by_district == 0) ? "all": $by_district;
        $by_district = ($by_district == 0) ? 0: 1;
        $by_district = ($by_country == 0) ? 0: $by_district;
        ?>
        <script> __set_cookies__("<?= $_district; ?>", "<?= $this_district; ?>", $time = 2); </script>
    <?php } else {
        $by_district = @(isset($_COOKIE[$_by_district])) ? $_COOKIE[$_by_district] : 0;
        $this_district = @(isset($_COOKIE[$_district])) ? $_COOKIE[$_district] : "all"; 
        $by_district = ($by_district == 0) ? 0: 1;
        $by_district = ($by_country == 0) ? 0: $by_district; ?>
        <script> __set_cookies__("<?= $_by_district; ?>", "<?= (strtolower($this_district) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-6"></div>
                    <div class="col-md-12 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/filter/location_filter_form.php"; ?>
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
            <div class="card-body px-2">
                <h5 class="card-title">Branch(es)</h5>
                <div class="d-none d-lg-block table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="account_branches" pt_c_user="<?= $user_id; ?>" pt_c_cid="<?= AccountInfoId; ?>"
                        pt_c_by_region="<?= $by_region; ?>" pt_c_region="<?= $this_region; ?>" pt_c_by_district="<?= $by_district; ?>"
                        pt_c_district="<?= $this_district; ?>" pt_c_by_country="<?= $by_country; ?>" pt_c_country="<?= $this_country; ?>">
                        <thead>
                            <tr>
                                <th>No#</th>
                                <th style="white-space: nowrap;">Branch Name</th>
                                <th style="white-space: nowrap;">Membership</th>
                                <th style="white-space: nowrap;">Last Seen</th>
                                <th style="white-space: nowrap;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
                <div class="d-block d-lg-none table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="account_branches_sm" pt_c_user="<?= $user_id; ?>" pt_c_cid="<?= AccountInfoId; ?>"
                        pt_c_by_region="<?= $by_region; ?>" pt_c_region="<?= $this_region; ?>" pt_c_by_district="<?= $by_district; ?>"
                        pt_c_district="<?= $this_district; ?>" pt_c_by_country="<?= $by_country; ?>" pt_c_country="<?= $this_country; ?>">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Branch Name</th>
                                <th style="white-space: nowrap;">Membership</th>
                                <th style="white-space: nowrap;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
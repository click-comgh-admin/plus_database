<!-- gender -->
<!-- status -->
<!-- group_id -->
<!-- subgroup_id -->
<!-- reg_status -->
<!-- location -->
<!-- country -->
<!-- region -->
<!-- district -->
<!-- search -->
<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    $_by_group_id = "by_group_id";
    $_group_id = "group_id";
    if (isset($_GET[$_group_id])) { 
        $by_group_id = (int)$_GET[$_group_id];
        $this_group_id = ($by_group_id == 0) ? "all": $by_group_id;
        $by_group_id = ($by_group_id == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_group_id = @(isset($_COOKIE[$_by_group_id])) ? $_COOKIE[$_by_group_id] : 0;
        $this_group_id = @(isset($_COOKIE[$_group_id])) ? $_COOKIE[$_group_id] : "all"; 
        $by_group_id = ($by_group_id == 0) ? 0: 1;?>
        <?php
    }

    $_by_subgroup_id = "by_subgroup_id";
    $_subgroup_id = "subgroup_id";
    if (isset($_GET[$_subgroup_id])) { 
        $by_subgroup_id = (int)$_GET[$_subgroup_id];
        $this_subgroup_id = ($by_subgroup_id == 0) ? "all": $by_subgroup_id;
        $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_subgroup_id = @(isset($_COOKIE[$_by_subgroup_id])) ? $_COOKIE[$_by_subgroup_id] : 0;
        $this_subgroup_id = @(isset($_COOKIE[$_subgroup_id])) ? $_COOKIE[$_subgroup_id] : "all"; 
        $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;?>
        <?php
    }

    $_by_gender = "by_gender";
    $_gender = "gender";
    if (isset($_GET[$_gender])) { 
        $by_gender = (int)$_GET[$_gender];
        $this_gender = ($by_gender == 0) ? "all": $by_gender;
        $by_gender = ($by_gender == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_gender = @(isset($_COOKIE[$_by_gender])) ? $_COOKIE[$_by_gender] : 0;
        $this_gender = @(isset($_COOKIE[$_gender])) ? $_COOKIE[$_gender] : "all"; 
        $by_gender = ($by_gender == 0) ? 0: 1;?>
        <?php
    }

    $_by_status = "by_status";
    $_status = "status";
    if (isset($_GET[$_status])) { 
        $by_status = (int)$_GET[$_status];
        $this_status = ($by_status == 0) ? "all": $by_status;
        $by_status = ($by_status == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_status; ?>", "<?= $this_status; ?>", $time = 2); </script> -->
    <?php } else {
        $by_status = @(isset($_COOKIE[$_by_status])) ? $_COOKIE[$_by_status] : 0;
        $this_status = @(isset($_COOKIE[$_status])) ? $_COOKIE[$_status] : "all"; 
        $by_status = ($by_status == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_status; ?>", "<?= (strtolower($this_status) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    $_by_reg_status = "by_reg_status";
    $_reg_status = "reg_status";
    if (isset($_GET[$_reg_status])) { 
        $by_reg_status = (int)$_GET[$_reg_status];
        $this_reg_status = ($by_reg_status == 0) ? "all": $by_reg_status;
        $by_reg_status = ($by_reg_status == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_reg_status = @(isset($_COOKIE[$_by_reg_status])) ? $_COOKIE[$_by_reg_status] : 0;
        $this_reg_status = @(isset($_COOKIE[$_reg_status])) ? $_COOKIE[$_reg_status] : "all"; 
        $by_reg_status = ($by_reg_status == 0) ? 0: 1;?>
        <?php
    }

    $_by_location = "by_location";
    $_location = "location";
    if (isset($_GET[$_location])) { 
        $by_location = (int)$_GET[$_location];
        $this_location = ($by_location == 0) ? "all": $by_location;
        $by_location = ($by_location == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_location = @(isset($_COOKIE[$_by_location])) ? $_COOKIE[$_by_location] : 0;
        $this_location = @(isset($_COOKIE[$_location])) ? $_COOKIE[$_location] : "all"; 
        $by_location = ($by_location == 0) ? 0: 1;?>
        <?php
    }
    
    $_by_country = "by_country";
    $_country = "country";
    if (isset($_GET[$_country])) { 
        $by_country = $_GET[$_country];
        $this_country = ($by_country === 0) ? "all": $by_country;
        $by_country = ($by_country === 0) ? 0: 1;
        ?>
    <?php } else {
        $by_country = @(isset($_COOKIE[$_by_country])) ? $_COOKIE[$_by_country] : 0;
        $this_country = @(isset($_COOKIE[$_country])) ? $_COOKIE[$_country] : "all"; 
        $by_country = ($by_country == 0) ? 0: 1;?>
        <?php
    }

    $_by_region = "by_region";
    $_region = "region";
    if (isset($_GET[$_region])) { 
        $by_region = (int)$_GET[$_region];
        $this_region = ($by_region == 0) ? "all": $by_region;
        $by_region = ($by_region == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_region = @(isset($_COOKIE[$_by_region])) ? $_COOKIE[$_by_region] : 0;
        $this_region = @(isset($_COOKIE[$_region])) ? $_COOKIE[$_region] : "all"; 
        $by_region = ($by_region == 0) ? 0: 1;?>
        <?php
    }

    $_by_district = "by_district";
    $_district = "district";
    if (isset($_GET[$_district])) { 
        $by_district = (int)$_GET[$_district];
        $this_district = ($by_district == 0) ? "all": $by_district;
        $by_district = ($by_district == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_district = @(isset($_COOKIE[$_by_district])) ? $_COOKIE[$_by_district] : 0;
        $this_district = @(isset($_COOKIE[$_district])) ? $_COOKIE[$_district] : "all"; 
        $by_district = ($by_district == 0) ? 0: 1;?>
        <?php
    }

    $_by_search = "by_search";
    $_search = "search";
    if (isset($_GET[$_search])) { 
        $by_search = $_GET[$_search];

        if(strlen($by_search)===0) {
            $by_search = @(isset($_COOKIE[$_by_search])) ? $_COOKIE[$_by_search] : 0;
            $this_search = "all"; 
            $by_search = 0; 
        } else {
            $encryptor = new Encryptor("members", md5("members"));
            $by_search = $encryptor->decrypt($by_search);
            $this_search = ($by_search === 0) ? "all": $by_search;
            $by_search = ($by_search === 0) ? 0: 1;
        }
        ?>
    <?php } else {
        $by_search = @(isset($_COOKIE[$_by_search])) ? $_COOKIE[$_by_search] : 0;
        $this_search = @(isset($_COOKIE[$_search])) ? $_COOKIE[$_search] : "all"; 
        $by_search = ($by_search == 0) ? 0: 1;?>
        <?php
    }
    
?>
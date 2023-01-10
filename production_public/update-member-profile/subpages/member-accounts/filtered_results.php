<?php
    $_by_registration_status = "registration-status";
    if (isset($_GET[$_by_registration_status])) { 
        $by_registration_status = @(isset($_GET[$_by_registration_status])) ? $_GET[$_by_registration_status] : 0;
        $this_registration_status = ($by_registration_status == 0) ? "all": $by_registration_status;
        $by_registration_status = ((int)$this_registration_status == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_registration_status = @(isset($_GET[$_by_registration_status])) ? $_GET[$_by_registration_status] : 0;
        $this_registration_status = @(isset($_GET["registration-status"])) ? $_GET["registration-status"] : "all"; 
        $by_registration_status = ((int)$this_registration_status == 0) ? 0: 1;?>
        <?php
    }
?>
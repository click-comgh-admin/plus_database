<?php
    $page = "finder";
    $page_url = CLIENT_BASE_URL."file-manager/$page";

    $_start_date = "start_date";
    $_end_date = "end_date";

    if (isset($_GET[$_start_date])) { ?>
        <script> __set_cookies__("<?= $_start_date; ?>", "<?= $_GET[$_start_date]; ?>", $time = 2); </script>
    <?php }
    if (isset($_GET[$_end_date])) { ?>
        <script> __set_cookies__("<?= $_end_date; ?>", "<?= $_GET[$_end_date]; ?>", $time = 2); </script>
    <?php }

    $fiveDaysBefore = date("Y/m/").((int)date("d")-5);
    $today = date("Y/m/d");
    $start_date = @(isset($_COOKIE[$_start_date])) ? date("Y/m/d", strtotime($_COOKIE[$_start_date])) : $fiveDaysBefore;
    $end_date = @(isset($_COOKIE[$_end_date])) ? date("Y/m/d", strtotime($_COOKIE[$_end_date])) :$today;

    $_by_subfolder = "by_subfolder";
    $_subfolder = "subfolder";
    if (isset($_GET[$_subfolder])) { 
        $by_subfolder = (int)$_GET[$_subfolder];
        $this_subfolder = ($by_subfolder == 0) ? "all": $by_subfolder;
        $by_subfolder = ($by_subfolder == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_subfolder; ?>", "<?= $this_subfolder; ?>", $time = 2); </script>
    <?php } else {
        $by_subfolder = @(isset($_COOKIE[$_by_subfolder])) ? $_COOKIE[$_by_subfolder] : 0;
        $this_subfolder = @(isset($_COOKIE[$_subfolder])) ? $_COOKIE[$_subfolder] : "all"; 
        $by_subfolder = ($by_subfolder == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_subfolder; ?>", "<?= (strtolower($this_subfolder) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_folder = "by_folder";
    $_folder = "folder";
    if (isset($_GET[$_folder])) { 
        $by_folder = (int)$_GET[$_folder];
        $this_folder = ($by_folder == 0) ? "all": $by_folder;
        $by_folder = ($by_folder == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_folder; ?>", "<?= $this_folder; ?>", $time = 2); </script>
    <?php } else {
        $by_folder = @(isset($_COOKIE[$_by_folder])) ? $_COOKIE[$_by_folder] : 0;
        $this_folder = @(isset($_COOKIE[$_folder])) ? $_COOKIE[$_folder] : "all"; 
        $by_folder = ($by_folder == 0) ? 0: 1; ?>
        <script> __set_cookies__("<?= $_by_folder; ?>", "<?= (strtolower($this_folder) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    function loading($text)
    {
        return "<div class=\"card p-2 mx-auto my-3\">$text</div>";
    }
    // print_r($folders);
?>
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-12 col-lg-12">
            <div class="mb-3 card shadow">
                <div class="card-body p-0">
                    <div class="row align-items-center justify-content-center my-2">
                        <div class="col-md-12 col-lg-12"></div>
                        <div class="col-md-12 col-lg-6">
                            <?php require_once "filter/date_filter_form.php";?>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <?php require_once "filter/folders_filter_form.php";?>
                        </div>
                        <div class="col-md-12 col-lg-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-left" none-table-pagin="file-finder" pt_c_cid="<?= AccountInfoId; ?>"
        pt_c_loading='<?= loading("Content(s) Loading..."); ?>' pt_c_emptyMsg='<?= loading("Nothing To Show..."); ?>' pt_c_by_date="1" pt_c_start_date="<?= $start_date; ?>"
        pt_c_end_date="<?= $end_date; ?>" pt_c_by_folder_id="<?= $by_folder; ?>" 
        pt_c_folder_id="<?= $this_folder; ?>" pt_c_by_subfolder_id="<?= $by_subfolder; ?>" 
        pt_c_subfolder_id="<?= $this_subfolder; ?>">
    </div>
</div>
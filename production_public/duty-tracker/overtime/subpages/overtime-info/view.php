<?php
    $page = "overtime-info";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <?php
                    if (isset($_GET['show-overtime']) || !empty(@$_GET['show-overtime'])) {
                        require_once "overtime.php";
                    } else { ?>
                        <script>
                            history.back();
                        </script>
                    <?php die(); }
                ?>
            </div>
        </div>
    </div>
</div>
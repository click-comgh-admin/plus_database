<?php
    $page = "update-duty";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                        <h5 class="card-title">Select Duty<hr/></h5>
                        <?php 
                            require_once Current_BaseDir."/forms/duties/select-duty.php";
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <?php 
                    if (isset($_GET['show-duty']) && !empty(@$_GET['show-duty'])) {
                        require_once "setup-duty.php";
                    } else {
                        require_once "all-duties.php";
                    }
                ?>
            </div>
        </div>
    </div>
</div>
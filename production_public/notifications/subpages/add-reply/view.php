<?php
require_once Current_BaseDir."subpages/add-reply/setup.php";

?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php
                            require_once Current_BaseDir."/forms/$page/new-reply.php";
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
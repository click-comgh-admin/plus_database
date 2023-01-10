<div class="row justify-content-center">
    <div class="col-md-12 col-lg-4">
        <div class="mb-3 main-card card shadow">
            <div class="card-header h-25">
                <div class="card-header-title">
                    Overtime Fee Settings. 
                    <i class="text-info small"> Set "Overtime Fee".</i>
                </div>
            </div>
            <div class="card-body">
                <?php
                    require_once Current_BaseDir."subpages/overtime_fee/setup.php";
                ?>
            </div>
            <div class="card-footer">
                <div class="btn btn-actions-pane-right">--</div>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-lg-8">
        <div class="mb-3 main-card card shadow">
            <div class="card-header">
                <div class="card-header-title">
                    Overtime Fee...
                </div>
            </div>
            <div class="card-body">
                <?php
                    require_once Current_BaseDir."subpages/overtime_fee/page.php";
                ?>
            </div>
            <div class="card-footer">
                <div class="btn btn-actions-pane-right">--</div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <i>Add User</i>
            </div>
            <div class="card-body">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <?php 
                            if (AccountInfoCategory === 10) {
                                require_once(BASE_DIRECTORY."/account/forms/account/add-district_pages-main.php");
                            } else {
                                require_once(BASE_DIRECTORY."/account/forms/account/add_pages-main.php");
                            }
                        ?>
                    </div>
                </div>
            </div>
            <div class="card-footer d-block">
            </div>
        </div>
    </div>
</div>
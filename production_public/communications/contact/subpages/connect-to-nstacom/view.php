<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12 p-0">
                        <?php
                            $get_string = "communications/clients/contact/sync-nstacom?account_id=" . AccountInfoId;
                            $sync_nstacom = $ccApi->fetch_from($get_string=$get_string, function($sync_nstacom) {
                                return (isset($sync_nstacom[0]))? $sync_nstacom[0]: [];
                            }, $debug=false);

                            if (isset($sync_nstacom['pdccsn_id']) && !empty($sync_nstacom)) {
                                require_once Current_BaseDir."/subpages/connect-to-nstacom/unsync.php";
                            } else {
                                require_once Current_BaseDir."/subpages/connect-to-nstacom/sync.php";
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
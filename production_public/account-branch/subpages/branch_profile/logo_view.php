<?php
    // print_r($branch);
    $logoUrl = strtolower($branch['pdc_logo']);
    $logoUrl = ($logoUrl == "logo.png") ? "files/$logoUrl" : "files/clients/logo/$account_id/$logoUrl";
?>
<div class="col-md-12 col-lg-2"></div>
<div class="col-md-12 col-lg-8">
    <div
        background-image="<?= FILE_BUCKET_BASE_URL; ?><?= @$logoUrl; ?>">
        <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
            <div class="widget-content-wrapper">
                <div class="widget-content-c enter ml-auto mr-auto">
                    <div class="widget-content-ce nter">
                        <img width="150" height="150" class="rounded-circle shadow shadow-lg"
                            alt="Member Image"
                            src="<?= FILE_BUCKET_BASE_URL; ?><?= @$logoUrl; ?>">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-md-12 col-lg-2"></div>
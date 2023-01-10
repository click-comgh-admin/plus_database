<?php
    $page = "connect-to-nstacom";
    $page_url = Current_BaseUrl."$page";
?>
<div class="mb-4">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                Not Connected!!
            </div>
        </div>
    </div>
    <div class="card-body text-center">
        <div class="tab-content row text-center">
            <div class="col-md-3 col-lg-3"></div>
            <div class="col-md-6 col-lg-6">
                <h4>Account Not Connected to Nstacom</h4>
                <button class="btn btn-success btn-lg btn-block mx-1 font-weight-bold" style="padding: .25rem .5rem !important"
                    type="button" btn-submit-post=<?= json_encode(["client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                    btn-submit-post--confirm="Generate Account ID?" 
                    btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/contact/new-nstacom-account-id"; ?>">
                    <span class="pe-7s-link font-weight-bold"> </span> Click To Generate Account ID for Nstacom
                </button>
            </div>
            <div class="col-md-3 col-lg-3"></div>
        </div>
    </div>
    <div class="card-footer">
        <div class="btn-actions-pane-right px-1">
            <span class="p-2 fa pull-right">Save New Visitor</span>
        </div>
    </div>
</div>
<?php
    $page = "connect-to-nstacom";
    $page_url = Current_BaseUrl."$page";
?>
<div class="mb-4">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                Account ID Created!!
            </div>
        </div>
    </div>
    <div class="card-body text-center p-0 py-2">
        <div class="tab-content row text-center">
            <div class="col-md-3 col-lg-3"></div>
            <div class="col-md-6 col-lg-6">
                <h4>Account ID Created To Connect to Nstacom</h4>
                <div class="table-responsive text-justify">
                    <table class="table table-lg table-striped table-hover">
                        <tbody>
                            <tr> <th class="p-1"></th></tr>
                            <tr>
                                <th>
                                    Account ID
                                    <div class="text-muted" style="background-color: #e9ecef; border: 1px solid #ced4da;
                                        opacity: 1; padding: .25rem .5rem; font-size: .875rem; line-height: 1.5; border-radius: .2rem;"
                                        disabled="true" ><?= $sync_nstacom['pdccsn_code']; ?> </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    ID Info
                                    <div class="" style="background-color: #e9ecef; border: 1px solid #ced4da;
                                        opacity: 1; padding: .25rem .5rem; font-size: .875rem; line-height: 1.5; border-radius: .2rem;"
                                        disabled="true" >
                                        Generated On: <?= isset($sync_nstacom['pdccsn_date'])? date("Y-m-d @ H:i A", strtotime($sync_nstacom['pdccsn_date'])): "-- @ : "; ?><br class="m-0 p-0">
                                        By: <?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", 
                                        $id=(isset($sync_nstacom['pdccsn_synced_by'])? $sync_nstacom['pdccsn_synced_by']: 0), function ($info)
                                        {
                                            if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                return "Unknown??";
                                            } else {
                                                return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                            }
                                        }); 
                                    ?>
                                    </div>
                                </th>
                            </tr>
                            <tr> <th class="p-1"></th></tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-2">
                    <button class="btn btn-danger btn-lg btn-block mx-1 font-weight-bold" style="padding: .25rem .5rem !important"
                        type="button" btn-submit-post=<?= json_encode(["client_id"=>AccountInfoId, "admin_user_id"=>$user_id]); ?>
                        btn-submit-post--confirm="Delete Account ID?" 
                        btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/contact/delete-nstacom-account-id"; ?>">
                        <span class="pe-7s-trash font-weight-bold"> </span> Delete Generated Account ID for Nstacom
                    </button>
                </div>
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
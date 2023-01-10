<div class="col-md-12 col-lg-8">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Contact</div>
        <div class="card-body">
            <?php
                $get_string = "one_contact?account_id=$account_id&code=".$_GET['contact'];
                $contact = $ccApi->communications($type="clients", $get_string, function($contact)
                {
                    return @$contact[0];
                }, $debug = false);
            ?>
            <pre><?php //print_r($contact); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <div class="">
                        <?php
                            if (empty($contact)) { ?>
                                <h4 class="text-muted">No Contact.</h4>
                            <?php } else {
                                require_once BASE_DIRECTORY.'/communications/forms/contact/contact_update.php'; 
                                if (strtolower($contact['pdccc_country']) == "ghana") { ?>
                                    <div class="col-md-12 px-0">
                                        <div class="card-header-tab card-header-tab-animation card-header">
                                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Update Contact Location Data
                                        </div>
                                        <div class="card-body p-0">
                                            <div class="collapse py-2" id="add_contact_location_data">
                                                <div class="row justify-content-center">
                                                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact_location_details_update.php'; ?>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                                type="button" data-toggle="collapse" href="#add_contact_location_data">Update Location Data</button>
                                        </div>
                                    </div>
                                <?php }
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
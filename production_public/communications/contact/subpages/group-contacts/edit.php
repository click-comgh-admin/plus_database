<?php
    $page = "update-contact";
    $page_url = Current_BaseUrl."$page";
?>
<div class="card mb-4">
    <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
        <div class="btn-actions-pane-right px-1">
            <div class="btn-group-sm nav btn-group" role="group">
                Edit Contact Entry
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="tab-content">
            <?php 
                if (isset($_GET['contact']) && !empty($_GET["contact"])) {
                    $get_string = "communications/clients/contact/contact?account_id=" . AccountInfoId . "&contact_code=" . $_GET['contact'];
                    $contact = $ccApi->fetch_from($get_string=$get_string, function($contact) {
                        return isset($contact[0])? $contact[0]: [];
                    }, $debug=false);

                    if (empty($contact)) { ?>
                        <h5 class="card-title">Invalid Contact</h5>
                    <?php } else {
                        require_once Current_BaseDir."/forms/group-contacts/update.php"; 
                    }
                } else { ?>
                    <h5 class="card-title">Undefined Contact</h5>
                <?php }
            ?>
        </div>
    </div>
    <div class="card-footer">
        <div class="btn-actions-pane-right px-1">
            <span class="p-2 fa pull-right">Save Update</span>
        </div>
    </div>
</div>
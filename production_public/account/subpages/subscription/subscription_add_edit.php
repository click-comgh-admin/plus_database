<?php //if (AccountInfoCategory == 10) { ?>
<?php if ((int)$account_info['pdc_account_category'] == 10) { ?>
    <div class="card mb-3">
        <div class="card-header bg-info">
            Account <i class="ml-1"> Subscription</i>
        </div>
        <div class="card-body py-0">
            <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription"))? "show": ""; ?> py-2" id="update_subscription">
                <?php 
                    define('currentPageUrl', subscription_BaseUrl . "subscription");                    
                    require_once(BASE_DIRECTORY."/account/forms/subscription/district_edit_add.php");
                ?>
            </div>
        </div>
        <div class="card-footer">
            <?php
                if (isset($_POST['add-form'])) {
                    if ($_POST['add-form'] == "contact") { ?>
            <button class="btn-actions-pane-right btn btn-info" aria-expanded="true" type="button"
                data-toggle="collapse" href="#update_subscription">Account Subscription</button>
            <?php } else { ?>
            <button class="btn-actions-pane-right btn btn-info collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_subscription">Account Subscription</button>
            <?php }
                } else { ?>
            <button class="btn-actions-pane-right btn btn-info collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_subscription">Account Subscription</button>
            <?php } ?>
        </div>
    </div>
<?php //} else if (AccountInfoCategory == 12) { ?>
<?php } else if ((int)$account_info['pdc_account_category'] == 10) { ?>
    <div class="card mb-3">
        <div class="card-header bg-info">
            Account <i class="ml-1"> Yearly Activation</i>
        </div>
        <div class="card-body py-0">
            <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription"))? "show": ""; ?> py-2" id="update_subscription">
                <?php 
                    define('currentPageUrl', subscription_BaseUrl . "subscription");                    
                    require_once(BASE_DIRECTORY."/account/forms/subscription/contact_bank_edit_add.php");
                ?>
            </div>
        </div>
        <div class="card-footer">
            <?php
                if (isset($_POST['add-form'])) {
                    if ($_POST['add-form'] == "contact") { ?>
            <button class="btn-actions-pane-right btn btn-info" aria-expanded="true" type="button"
                data-toggle="collapse" href="#update_subscription">Yearly Activation</button>
            <?php } else { ?>
            <button class="btn-actions-pane-right btn btn-info collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_subscription">Yearly Activation</button>
            <?php }
                } else { ?>
            <button class="btn-actions-pane-right btn btn-info collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_subscription">Yearly Activation</button>
            <?php } ?>
        </div>
    </div>
<?php } else { ?> 
    <div class="card mb-3">
        <div class="card-header bg-info">
            Account <i class="ml-1"> Subscription</i>
        </div>
        <div class="card-body py-0">
            <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription"))? "show": ""; ?> py-2" id="update_subscription">
                <?php 
                    define('currentPageUrl', subscription_BaseUrl . "subscription");                    
                    require_once(BASE_DIRECTORY."/account/forms/subscription/edit_add.php");
                ?>
            </div>
        </div>
        <div class="card-footer">
            <?php
                if (isset($_POST['add-form'])) {
                    if ($_POST['add-form'] == "contact") { ?>
            <button class="btn-actions-pane-right btn btn-info" aria-expanded="true" type="button"
                data-toggle="collapse" href="#update_subscription">Account Subscription</button>
            <?php } else { ?>
            <button class="btn-actions-pane-right btn btn-info collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_subscription">Account Subscription</button>
            <?php }
                } else { ?>
            <button class="btn-actions-pane-right btn btn-info collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#update_subscription">Account Subscription</button>
            <?php } ?>
        </div>
    </div>
<?php }
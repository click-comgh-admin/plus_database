
<?php if (AccountInfoCategory != 10 && AccountInfoCategory != 12) { ?>
    <div class="card mb-3">
        <div class="card-header bg-success">
            Account <i class="ml-1"> Subscription</i>
        </div>
        <div class="card-body py-0">
            <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "upgrade_subscription"))? "show": ""; ?> py-2" id="upgrade_subscription">
                <?php 
                    require_once(BASE_DIRECTORY."/account/forms/subscription/upgrade.php");
                ?>
            </div>
        </div>
        <div class="card-footer">
            <?php
                if (isset($_POST['add-form'])) {
                    if ($_POST['add-form'] == "membership_size") { ?>
            <button class="btn-actions-pane-right btn btn-success" aria-expanded="true" type="button"
                data-toggle="collapse" href="#upgrade_subscription">Upgrade Membership Size</button>
            <?php } else { ?>
            <button class="btn-actions-pane-right btn btn-success collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#upgrade_subscription">Upgrade Membership Size</button>
            <?php }
                } else { ?>
            <button class="btn-actions-pane-right btn btn-success collapsed" aria-expanded="false" type="button"
                data-toggle="collapse" href="#upgrade_subscription">Upgrade Membership Size</button>
            <?php } ?>
        </div>
    </div>
<?php }
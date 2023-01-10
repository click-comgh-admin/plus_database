<?php 
    $message_types = $ccApi->message_types(function($message_types)
    {
        return $message_types;
    }, $debug = false);

    $get_string = "contacts?account_id=$account_id";
    $contacts = $ccApi->communications($type="clients", $get_string, function($contacts)
    {
        return $contacts;
    }, $debug = false);

    $get_string = "groups?account_id=$account_id";
    $groups = $ccApi->communications($type="clients", $get_string, function($groups)
    {
        return $groups;
    }, $debug = false);
?>
<div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
    <div class="btn-actions-pane-right px-1">
        <div class="btn-group-sm nav btn-group" role="group">
            <?php
                foreach ($message_types as $ms_key => $ms) { 
                    $active = ($ms_key == 0) ? "active" : ""; ?>
                    <a class="btn-shadow btn btn-primary show <?= $active; ?>" href="#show_compose_form_<?= (int)$ms_key+1; ?>" data-toggle="tab"><?= @$ms['pdccmc_type']; ?></a>
                <?php }
            ?>
        </div>
    </div>
</div>
<div class="card-body">
    <div class="tab-content">
        <?php
            foreach ($message_types as $ms_key => $ms) { 
                $active = ($ms_key == 0) ? "active" : "";
                $form = str_replace("-", "", strtolower($ms['pdccmc_type'])); ?>
                <div class="tab-pane show  <?= $active; ?> p-0" id="show_compose_form_<?= (int)$ms_key+1; ?>" role="tabpanel">
                    <?php require_once BASE_DIRECTORY."/communications/forms/compose/".$form.".php"; ?>
                </div>
            <?php }
        ?>
    </div>
</div>
<div class="card-footer">
    <div class="btn-actions-pane-right px-1">
    <span class="card p-2 fa pull-right">Available Credit: <?= $account_status['credit_balance'][0]['pdccmc_units']; ?> Units</span>
    </div>
</div>
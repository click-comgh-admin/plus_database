<?php 
    $message_types = $ccApi->message_types(function($message_types)
    {
        return $message_types;
    }, $debug = false);
?>
<div class="card-header">
    <i class="header-icon lnr-license icon-gradient bg-plum-plate small">Reply Message</i>
</div>
<div class="card-body">
    <?php require_once BASE_DIRECTORY."/communications/forms/compose/reply/peers_mail.php"; ?>
</div>
<div class="card-footer">
    <div class="btn-actions-pane-right px-1">
    <span class="card p-2 fa pull-right">Available Credit: <?= $account_status['credit_balance'][0]['pdccmc_units']; ?> Units</span>
    </div>
</div>
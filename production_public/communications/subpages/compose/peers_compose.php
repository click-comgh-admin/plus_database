<?php 
    $get_string = "currentpage=1&rowsperpage=10000&client_id=$account_id";
    $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members) {
        return @$members['data'];
    }, $debug = 0);

    $all_client_users = $ccApi->user_info($type = "client", $account_id, $all="all_client_users", $id=1, function ($info)
	{
		return @$info;
    });
    
    // print_r($all_client_users);
?>
<div class="card-header">
    <i class="header-icon lnr-license icon-gradient bg-plum-plate small">Send Message</i>
</div>
<div class="card-body">
    <?php require_once BASE_DIRECTORY."/communications/forms/compose/peers_mail.php"; ?>
</div>
<div class="card-footer">
    <div class="btn-actions-pane-right px-1">
    <span class="card p-2 fa pull-right">Available Credit: <?= $account_status['credit_balance'][0]['pdccmc_units']; ?> Units</span>
    </div>
</div>
<?php 
    $message_types = $ccApi->message_types(function($message_types)
    {
        return $message_types;
    }, $debug = false);
?>
<div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
    <div class="btn-actions-pane-left px-1" style="height: 33px; width: 33px;">
        <div class="btn-group-sm nav btn-group" role="group">
            <a class="btn-shadow btn btn-outline-danger show rounded rounded-circle p-1" style="height: 33px; width: 33px;"
                href="<?= Current_BaseUrl."/branch-messages?show=".$_GET['show']; ?>"> <span class="fa fa-arrow-circle-left fa-2x"></span>
            </a>
        </div>
    </div>
    <div class="btn-actions-pane-right px-1">
        <div class="btn-group-sm nav btn-group" role="group">
            <?php
                $composePage = isset($_GET['send']) ? $_GET['send']: $message_types[0]['pdccmc_type'];
                $composePage = strtolower($composePage);

                foreach ($message_types as $ms_key => $ms) { 
                    $type = strtolower($ms['pdccmc_type']);
                    $active = ($type === $composePage) ? "active" : "";
                    $senderUrl = Current_BaseUrl."/branch-messages?show=".$_GET['show']."&reply&send=$type"; ?>
                    <a class="btn-shadow btn btn-primary show <?= $active; ?>" href="<?= $senderUrl ?>">
                        <?= (strtolower($ms['pdccmc_type']) === "e-mail")? "Webmail": $ms['pdccmc_type']; ?>
                    </a>
                <?php }
            ?>
        </div>
    </div>
</div>
<div class="card-body">
    <div class="tab-content">
        <div class="tab-pane show active p-0" role="tabpanel">
            <?php 
                $composePage = str_replace("-", "", $composePage);
                require_once Current_BaseDir."/forms/compose/reply/members_".$composePage.".php";
            ?>
        </div>
    </div>
</div>
<div class="card-footer">
    <div class="btn-actions-pane-right px-1">
    <span class="card p-2 fa pull-right">Available Credit: <?= $account_status['credit_balance'][0]['pdccmc_units']; ?> Units</span>
    </div>
</div>
<?php 
    $message_types = $ccApi->message_types(function($message_types)
    {
        return $message_types;
    }, $debug = false);

    $get_string = "currentpage=1&rowsperpage=100000&client_id=$account_id";
    $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members) {
        return @$members['data'];
    }, $debug = 0);
    // print_r($client_members);

    $groups = $ccApi->groups($all=true, $account_id, $id=1, function($groups){
        return @$groups;
    }, $debug = 0);
    // print_r($groups);

    $subgroups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($ccApi, $account_id) {
        $SGS = [];
        foreach ($groups as $key => $group) {
            $group_id = $group['pdmg_id'];
            $group_name = $group['pdmg_group'];
            $sgs = $ccApi->subgroups($all=true, $account_id, $group_id, $id=1, function($subgroups) {
                $SGS = [];
                foreach ($subgroups as $key => $subgroup) {
                    if (!in_array($subgroup, $SGS)) {
                        array_push($SGS, $subgroup);
                    }
                }
                return $SGS;
            }, $debug = 0);
            if (!empty($sgs)) {
                $sgData = [
                    "data" => $sgs,
                    "group" => $group_name,
                ];
                if (!in_array($sgData, $SGS)) {
                    array_push($SGS, $sgData);
                }
            }
            
        }
        return @$SGS;
    }, $debug = 0);
    // print_r($subgroups);
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
                    <?php require_once BASE_DIRECTORY."/communications/forms/compose/members_".$form.".php"; ?>
                </div>
            <?php }
        ?>
    </div>
</div>
<div class="card-footer">
    <div class="btn-actions-pane-right px-1">
    <?php
        $get_string = "credit/units?account_id=".AccountInfoId;
        echo $per_unit_cost = $ccApi->communications($type="clients", $get_string, function($units)
        {
            return isset($units['per_unit_cost'])? $units['per_unit_cost']: 0;
        }, $debug = false);
    ?>
    <span class="card p-2 fa pull-right">
        Available Credit: GHC <?= creditUnitToAmount(
            $account_status['credit_balance'][0]['pdccmc_units'],
            $per_unit_cost
        ); ?><hr class="m-1">
        Available Credit: <?= $account_status['credit_balance'][0]['pdccmc_units']; ?> Units
    </span>
    </div>
</div>
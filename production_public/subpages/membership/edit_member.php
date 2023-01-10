<?php
    use Encryptor\Encryptor;

    $encryptor = new Encryptor("members", md5("members"));
    $member_id = (int)$encryptor->decrypt(@$_GET['member']);

    $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
        return $members;
    }, $debug = 0); 
    
    function open_modal_groups($groups, $account_id, $ccApi)
    {
        $groupList = "<ul class='d-block'>";
        foreach ($groups as $key => $group) {
            $groups = $ccApi->groups($all="one", $account_id, $id=$group['pdmmg_group_id'], function($groups)
            {
                return @$groups[0];
            });
            $groupList .= "<li class=''>".@$groups['pdmg_group']."</li>";
        }
        return $groupList .= "</ul>";
    }

    function open_modal_subgroups($subgroups, $account_id, $ccApi)
    {
        $subgroupList = "<ul class='d-block'>";
        foreach ($subgroups as $key => $subgroup) {                                
            $subgroups = $ccApi->subgroups($all="one", $account_id, $group_id = null, $id=$subgroup['pdmms_subgroup_id'],
            function($subgroups) {
                return @$subgroups[0];
            });
            $subgroupList .= "<li class=''>".@$subgroups['pdmg_subgroup']."</li>";
        }
        return $subgroupList .= "</ul>";
    }
    function open_modal_committees($committees, $account_id, $ccApi)
    {
        $committeeList = "<ul class='d-block'>";
        foreach ($committees as $key => $committee) {
            $committees = $ccApi->committees($all="one", $account_id, $id=$committee['pdmmc_committee_id'], function($committees)
            {
                return @$committees[0];
            });
            $committeeList .= "<li class=''>".@$committees['pdmg_group']."</li>";
        }
        return $committeeList .= "</ul>";
    }
                                
    function open_modal_subcommittees($subcommittees, $account_id, $ccApi)
    {
        $subcommitteeList = "<ul class='d-block'>";
        foreach ($subcommittees as $key => $subcommittee) {                                
            $subcommittees = $ccApi->subcommittees($all="one", $account_id, $committee_id = null, $id=$subcommittee['pdmms_subcommittee_id'],
            function($subcommittees) {
                return @$subcommittees[0];
            });
            $subcommitteeList .= "<li class=''>".@$subcommittees['pdmg_subgroup']."</li>";
        }
        return $subcommitteeList .= "</ul>";
    }
?>

<pre><?php //print_r(@$member); ?></pre>

<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <?php
            if (isset($_GET['type'])) {
                $_GET['type'] = strtolower($_GET['type']);
                if ($_GET['type'] == "photo") {
                    require_once("edit_pages/photo.php");
                } else if ($_GET['type'] == "photo-new") {
                    require_once("edit_pages/photo-new.php"); 
                } else if ($_GET['type'] == "groups") {
                    require_once("edit_pages/groups.php"); 
                } else if ($_GET['type'] == "subgroups") {
                    require_once("edit_pages/subgroups.php");
                } else if ($_GET['type'] == "committees") {
                    require_once("edit_pages/committees.php");
                } else if ($_GET['type'] == "subcommittees") {
                    require_once("edit_pages/subcommittees.php");
                } else if ($_GET['type'] == "district") {
                    require_once("edit_pages/district.php");
                } else if ($_GET['type'] == "main") {
                    require_once("edit_pages/main.php");
                } else if ($_GET['type'] == "statuses") {
                    require_once("edit_pages/statuses.php");
                } else if ($_GET['type'] == "extra") {
                    require_once("edit_pages/extra.php");
                } else { ?>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="text-muted card-title">Invalid Edit Page</h4>
                        </div>
                    </div>
                <?php }
            } else { ?>
                <div class="card">
                    <div class="card-body">
                        <h4 class="text-muted card-title">Unknown Edit Page</h4>
                    </div>
                </div>
            <?php }
        ?>
    </div>
</div>
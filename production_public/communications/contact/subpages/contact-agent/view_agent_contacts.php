<?php
    use Encryptor\Encryptor;
    $page = "contact-agent-group";
    $page_url = Current_BaseUrl."$page";
?>
<?php 
    if (isset($_GET['agent']) && !empty($_GET["agent"])) {
        $encryptor = new Encryptor("members", md5("members"));
        $_user_id = $encryptor->decrypt($_GET["agent"]);
        $get_string = "communications/clients/contact/contact-agent?account_id=" . AccountInfoId."&member_id=$_user_id";
        $agent = $ccApi->fetch_from($get_string = $get_string, function ($agent)
        {
            return isset($agent[0])? $agent[0]: [];
        }, $debug = false);

        if (empty($agent)) { ?>
            <h5 class="card-title">Invalid Agent</h5>
        <?php } else {
            if (isset($_GET['group']) && !empty($_GET["group"])) {
                $get_string = "communications/clients/contact/group?account_id=" . AccountInfoId . "&id=" . $_GET["group"];
                $thisGroup = $ccApi->fetch_from($get_string=$get_string, function($group) {
                    return isset($group[0])? $group[0]: [];
                }, $debug=false);
            
                if (empty($thisGroup)) { ?>
                    <h5 class="card-title">Invalid Group</h5>
                <?php } else {
                    if (isset($thisGroup['pdccc_id'])) {
                        $get_string = "communications/clients/contact/contact-agent-group?account_id=" . AccountInfoId.
                            "&agent_id=".$agent['pdcca_id']."&group_id=".$thisGroup['pdccc_id'];
                        $agent_has_access = $ccApi->fetch_from($get_string = $get_string, function ($agent_groups)
                        {
                            return isset($agent_groups[0])? $agent_groups: [];
                        }, $debug = false);
                        if (empty($agent_has_access)) { ?>
                            <h5 class="card-title">Agent Does Not Have Access To This Group</h5>
                        <?php } else {
                            require_once Current_BaseDir."/subpages/contact-agent/agent_contacts.php"; 
                        }
                    } else { ?>
                        <h5 class="card-title">Group Error</h5>
                    <?php }
                }
            } else { ?>
                <h5 class="card-title">Undefined Group</h5>
            <?php }
        }
    } else { ?>
        <h5 class="card-title">Undefined Agent</h5>
    <?php }
?>
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
            if (isset($agent['pdcca_id'])) {
                $get_string = "communications/clients/contact/contact-agent-groups?account_id=" . AccountInfoId."&agent_id=".$agent['pdcca_id'];
                $agent_groups = $ccApi->fetch_from($get_string = $get_string, function ($agent_groups)
                {
                    return isset($agent_groups[0])? $agent_groups: [];
                }, $debug = false);
            } else {
                $agent_groups = [];
            }
            require_once Current_BaseDir."/subpages/contact-agent/agent_group.php"; 
        }
    } else { ?>
        <h5 class="card-title">Undefined Agent</h5>
    <?php }
?>
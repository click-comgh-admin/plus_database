<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php
                            require_once Current_BaseDir."/forms/contact-agent/assign_groups.php";
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <?php 
                    $member_info = $ccApi->user_info($type = "member", $account_id, $all="one_user", 
                        $id=$_user_id, function ($info) {
                        return isset($info['pdm_firstname'])? $info: [];
                    }, $debug = false); 
                ?>
                <h5 class="card-title">Contact Agent [ <i><b><?= $member_info['pdm_firstname']. " " .$member_info['pdm_surname']; ?></b></i> ] Group(s)</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="random-access">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Assigned Groups</th>
                                <th style="white-space: nowrap;">Total Entry</th>
                                <th style="white-space: nowrap;">
                                    <span>Actions</span>
                                    <span class="fa">Date/ Time</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                use Encryptor\Encryptor;
                                foreach ($agent_groups as $key => $agent_group) { ?>
                                    <tr>
                                        <td style="white-space: nowrap;">
                                            <?php
                                                $get_string = "communications/clients/contact/group?account_id=" . AccountInfoId . "&id=" . $agent_group['pdccag_group_id'];
                                                $thisGroup = $ccApi->fetch_from($get_string=$get_string, function($group) {
                                                    return isset($group[0])? $group[0]: [];
                                                }, $debug=false);
                                            ?>
                                            <div class="shadow shadow-lg m-1 d-md-block d-inline-block p-1 px-3 bg-white font-weight-bold rounded text-dark">
                                                <?= $thisGroup['pdccc_name']; ?>
                                            </div>
                                        </td>
                                        <td>
                                            <?php
                                                $get_string = "communications/clients/contact/contact-agent-contacts?account_id=" . AccountInfoId."&agent_id=".$agent['pdcca_id']."&group_id=".$agent_group['pdccag_group_id'];
                                                $group_contacts = $ccApi->fetch_from($get_string = $get_string, function ($group_contacts)
                                                {
                                                    return isset($group_contacts[0])? $group_contacts: [];
                                                }, $debug = false);
                                                $encryptor = new Encryptor("members", md5("members"));
                                                $_user_id_ = $encryptor->encrypt($_user_id);
                                            ?>
                                            <div class="shadow shadow-lg m-1 d-block d-inline-block p-1 px-3 bg-white font-weight-bold rounded text-dark text-center">
                                                <?= count($group_contacts); ?> 
                                                <a href="<?= Current_BaseUrl; ?>contact-agent-contacts?agent=<?= $_user_id_; ?>&group=<?= $agent_group['pdccag_group_id']; ?>" 
                                                    class="btn btn-success btn-sm" type="button" target="_blank"> - Open - </a>
                                            </div>
                                        </td>
                                        <td styl e="white-space: nowrap;">
                                            <div class="d-block m-1">
                                                <span class="shadow shadow-lg p-1 bg-white rounded text-dark d-inline-block">
                                                    <?= date('Y/ m/ d @ H:i A', strtotime($agent_group['pdccag_date'])); ?>
                                                    <?php
                                                        if (!empty($agent_group)) {
                                                            $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($agent_group['pdccag_date'])));
                                                        }
                                                    ?>
                                                    <i><?= !empty($agent_group) ? @$TimeAgo->get(): "-"; ?></i><br>
                                                </span>
                                            </div>
                                            <button type="button" class="btn btn-sm m-1 btn-danger shadow"
                                                btn-submit-post=<?= json_encode(["agent_id"=>$agent['pdcca_id'], "group_id"=>$agent_group['pdccag_group_id'], "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Remove Agent Group?"
                                                btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/contact/delete-contact-agent-group"; ?>">
                                                <span class="pe-7s-trash"> Remove</span>
                                            </button>
                                        </td>
                                    </tr>
                                <?php }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
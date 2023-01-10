<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php
                            require_once Current_BaseDir."/forms/contact-agent/new.php";
                            
                            $get_string = "communications/clients/contact/contact-agents?account_id=" . AccountInfoId;
                            $contact_agents = $ccApi->fetch_from($get_string=$get_string, function($contact_agent) {
                                return $contact_agent;
                            }, $debug=false);
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
                <h5 class="card-title">Contact Agents</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="random-access">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Agent Info</th>
                                <th>
                                    <span>Assigned</span> <span class="fa">Contact Groups</span>
                                </th>
                                <th style="white-space: nowrap;">
                                    <span>Actions</span>
                                    <span class="fa">Date/ Time</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                use Encryptor\Encryptor;
                                foreach ($contact_agents as $key => $contact_agent) {
                                    $_user_id = (isset($contact_agent['pdcca_member_id'])? $contact_agent['pdcca_member_id']: 0);
                                    $agent_id = (isset($contact_agent['pdcca_id'])? $contact_agent['pdcca_id']: 0);
                                    ?>
                                    <tr>
                                        <td style="white-space: nowrap;">
                                            <?php $member_info = $ccApi->user_info($type = "member", $account_id = null, $all="one_user", 
                                                $id=$_user_id, function ($info)
                                                {
                                                    return isset($info['pdm_firstname'])? $info: [];
                                                }, $debug = false); 
                                            ?>
                                            <div class=" my-1">
                                                <?php
                                                    $encryptor = new Encryptor("members", md5("members"));
                                                    $_user_id_ = $encryptor->encrypt($_user_id);
                                                ?>
                                                <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $_user_id_; ?>" class="btn btn-success btn-sm btn-block"
                                                    type="button" target="_blank"><?= $member_info['pdm_firstname']. " " .$member_info['pdm_surname']; ?></a>
                                            </div>
                                            <div class=" my-1">
                                                <a href="tel:+<?= $member_info['pdm_phone']; ?>" class="btn btn-success btn-sm btn-block" type="button">
                                                    <?= $member_info['pdm_phone']; ?></a>
                                            </div>
                                        </td>
                                        <td style="white-space: nowrap;">
                                            <a href="<?= Current_BaseUrl; ?>contact-agent-group?agent=<?= $_user_id_; ?>" target="_blank"
                                                class="btn btn-info btn-sm btn-block" type="button"> Assign/ View <span class="ml-1 fa fa-eye"></span>
                                            </a>
                                        </td>
                                        <td sty le="white-space: nowrap;">
                                            <?php
                                                $contact_agent_status = (int)$contact_agent['pdcca_status'];
                                                $agentStatusBtn = ($contact_agent_status == 1) ? "btn-outline-success" : "btn-outline-danger";
                                                $agentStatusTittle = ($contact_agent_status == 1) ? "Active: Deactivate" : "Inactive: Activate";

                                                $postData = json_encode(["agent_id"=>$agent_id, "member_id"=>$_user_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]);
                                                $url = API_BASE_URL."communications/clients/contacts/contact/update-contact-agent-status"
                                            ?>
                                            <button type="button" class="btn btn-sm m-1 <?= $agentStatusBtn; ?> shadow"
                                                btn-submit-post='<?= $postData; ?>' btn-submit-post--confirm="Update Agent Status?"
                                                btn-submit-post--url="<?= $url; ?>">
                                                <span class="pe-7s-compass"> <?= $agentStatusTittle; ?></span>
                                            </button>
                                            <div class="d-block m-1">
                                                <span class="shadow shadow-lg p-1 bg-white rounded text-dark d-inline-block">
                                                    <?= date('Y/ m/ d @ H:i A', strtotime($contact_agent['pdcca_date'])); ?>
                                                    <?php
                                                        if (!empty($contact_agent)) {
                                                            $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($contact_agent['pdcca_date'])));
                                                        }
                                                    ?>
                                                    <i><?= !empty($contact_agent) ? @$TimeAgo->get(): "-"; ?></i><br>
                                                </span>
                                            </div>
                                            <button type="button" class="btn btn-sm m-1 btn-danger shadow"
                                                btn-submit-post=<?= json_encode(["agent_id"=>$agent_id, "member_id"=>$_user_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Remove Contact Agent?"
                                                btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/contact/delete-contact-agent"; ?>">
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
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <?php 
                    $member_info = $ccApi->user_info($type = "member", $account_id, $all="one_user", 
                        $id=$_user_id, function ($info) {
                        return isset($info['pdm_firstname'])? $info: [];
                    }, $debug = false); 
                ?>
                <h5 class="card-title">
                    Agent [ <i><b><?= $member_info['pdm_firstname']. " " .$member_info['pdm_surname']; ?></b></i> ] 
                    Group ( <i><b><?= $thisGroup['pdccc_name']; ?></b></i> ) Contacts
                </h5>
                <form role="form" action="<?= API_BASE_URL."communications/clients/contacts/groups/delete-contact"; ?>" method="POST"
                    make-general-posts="Delete Selected Contacts?" >
                    <div class="table-responsive">
                        <table class="align-middle mb-0 table table-borderless table-striped table-hover" pagin_table="agent-group-contacts-admin" pt_c_id="<?= $account_id; ?>"
                            pt_c_page="<?= Current_BaseUrl; ?>" pt_c_user="<?= $_user_id; ?>" admin_user="<?= $user_id; ?>" group_id="<?= $_GET['group']; ?>"
                            pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
                            <thead>
                                <tr>
                                    <th class="text-center"># <b class="pe-7s-check font-weight-bold"></b>
                                    </th>
                                    <th style="white-space: nowrap;">
                                        Contact Info 
                                        <button type="submit" class="btn btn-sm btn-outline-danger">Delete Selected</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody> </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="1">
                                        <input type="hidden" name="group_id" value="<?= $_GET['group']; ?>" />
                                        <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                                        <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                                    </th>
                                    <th colspan="1">
                                        <button type="submit" class="btn btn-sm btn-outline-danger">Delete Selected</button>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-4">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-12">
                <div class="main-card mb-3 card shadow">
                    <div class="card-header-tab card-header-tab-animation card-header">
                        <div class="card-header-title">
                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Add Contact Group
                        </div>
                    </div>
                    <div class="card-body py-0">
                        <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact-group"))? "show": ""; ?> py-2" id="add_group_form">
                            <?php require_once Current_BaseDir."/forms/group/new.php"; ?>
                        </div>
                    </div>
                    <div class="card-footer">
                        <?php
                            if (isset($_POST['add-form'])) {
                                if ($_POST['add-form'] == "contact-group") { ?>
                                    <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                        type="button" data-toggle="collapse" href="#add_group_form">Add Contact Group Form</button>
                                <?php } else { ?>
                                    <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                        type="button" data-toggle="collapse" href="#add_group_form">Add Contact Group Form</button>
                                <?php }
                            } else { ?>
                                <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                    type="button" data-toggle="collapse" href="#add_group_form">Add Contact Group Form</button>
                            <?php }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-lg-8">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-12">
                <div class="main-card mb-3 card shadow">
                    <div class="card-header-tab card-header-tab-animation card-header">
                        <div class="card-header-title">
                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Contact Groups
                        </div>
                    </div>
                    <div class="card-body">
                        <?php
                            $get_string = "communications/clients/contact/access-code?account_id=" . AccountInfoId . "&user=" . $user_id;
                            $access_code = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                return (isset($access_code[0]))? $access_code[0]['pdccac_id']: 0;
                            }, $debug=false);
                            if ((bool)MyAppAccess['unlimited'] === true) {
                                $get_string = "communications/clients/contact/groups?account_id=" . AccountInfoId;
                                $groups = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                    return $access_code;
                                }, $debug=false);
                            } else {
                                $get_string = "communications/clients/contact/group?account_id=" . AccountInfoId . "&code=" . $access_code;
                                $groups = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                    return $access_code;
                                }, $debug=false);
                            }
                        ?>
                        <pre><?php //print_r($groups); ?></pre>
                        
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-12">
                                <div class="table-responsive">
                                    <?php
                                        if (empty($groups)) { ?>
                                            <h4 class="text-muted">No Contact Groups Created.</h4>
                                        <?php } else { ?>
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover" pagin_table="group-contacts-groups" pt_c_id="<?= $account_id; ?>"
                                                pt_c_page="<?= Current_BaseUrl; ?>" pt_c_user="<?= $user_id; ?>" group_id="0" user_limit="<?= (bool)MyAppAccess['unlimited']; ?>" access_code="<?= $access_code; ?>"
                                                pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center">#</th>
                                                        <th style="white-space: nowrap;">Contact Group</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                        function getCommunity($ea, $group, $ccApi)
                                                        {
                                                            $get_string = "location/community-one?ea_id=$ea&id=".(int)@$group['pdccc_community'];
                                                            return $ccApi->fetch_from($get_string=$get_string, function($community)
                                                            {
                                                                return isset($community[0]['pdeac_community'])? $community[0]['pdeac_community']: '--';
                                                            }, $debug = false);
                                                        }
                                                         /*foreach ($groups as $group_key => $group) { ?>
                                                            <tr>
                                                                <td class="p-0">
                                                                    <div class="widget-content p-3">
                                                                        <div class="widget-content-wrapper">
                                                                            <div class="widget-content-center ml-auto mr-auto">
                                                                                <div class="widget-content-center">
                                                                                    <span class="pe-7s-notebook fa-3x"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="p-0">
                                                                    <table class="align-middle mb-0 table table-borderless">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="text-justify">
                                                                                    <?= $group['pdccc_name']; ?>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="text-center">
                                                                                    <a href="<?= Current_BaseUrl; ?>contact-group-contacts?group=<?= $group['pdccc_id']; ?>" class="btn btn-info btn-sm" type="button">
                                                                                        Open <span class="ml-1 fa fa-eye"></span>
                                                                                    </a>
                                                                                    <?php
                                                                                        $group_id = isset($group['pdccc_id'])? $group['pdccc_id']: 0;
                                                                                        $region = (int)@$group['pdccc_region'];
                                                                                        $region = $ccApi->get_location($type="regions", $get_string=$region, function($locations)
                                                                                            use($region) {
                                                                                            $at = '';
                                                                                            if (is_array($locations)) {
                                                                                                foreach ($locations as $key => $location) {
                                                                                                    if (@(int)$location['id'] == $region) {
                                                                                                        $at = @$location['Region'];
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            return @$at;
                                                                                        }, $debug = false); 
                                                                                        $district = (int)@$group['pdccc_district'];
                                                                                        $district = $ccApi->get_location($type="district", $get_string="region=$region", function($locations)
                                                                                            use($district) {
                                                                                            $at = '';
                                                                                            if (is_array($locations)) {
                                                                                                foreach ($locations as $key => $location) {
                                                                                                    if (@(int)$location['id'] == $district) {
                                                                                                        $at = @$location['District'];
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            return @$at;
                                                                                        }, $debug = false);
                                                                                        $constituency = (int)@$group['pdccc_constituency'];
                                                                                        $constituency = $ccApi->get_location($type="constituency", $get_string="region=$region&district=$district", function($locations)
                                                                                            use($constituency) {
                                                                                            $at = '';
                                                                                            if (is_array($locations)) {
                                                                                                foreach ($locations as $key => $location) {
                                                                                                    if (@(int)$location['id'] == $constituency) {
                                                                                                        $at = @$location['Constituency'];
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            return @$at;
                                                                                        }, $debug = false);
                                                                                        $_electoral_area = (int)@$group['pdccc_electoral_area'];
                                                                                        $electoral_area = $ccApi->get_location($type="electoral_area", $get_string="region=$region&district=$district", function($locations)
                                                                                            use($_electoral_area) {
                                                                                            $at = '';
                                                                                            if (is_array($locations)) {
                                                                                                foreach ($locations as $key => $location) {
                                                                                                    if (@(int)$location['id'] == $_electoral_area) {
                                                                                                        $at = @$location['Electoral_Area'];
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            return @$at;
                                                                                        }, $debug = false);
                                                                                        $groupInfo = "
                                                                                            <table class=\"table table-striped table-hover\">
                                                                                                <thead class=\"bg-primary text-white\">
                                                                                                    <tr>
                                                                                                        <th>Query<th><th>Response</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <th>Group Name<th><td>".$group['pdccc_name']."</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Country<th><td>".$group['pdccc_country']."</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>State/ Province<th><td>".$group['pdccc_state_province']."</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Region<th><td>".$region."</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>District<th><td>".$district."</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Constituency<th><td>".$constituency."</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Electoral Area<th><td>".$electoral_area."</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Community<th><td>".getCommunity($_electoral_area, $group, $ccApi)."</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Last Updated<th><td>".date("Y-m-d @ H:i A", strtotime($group['_date']))."</td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                            <table class=\"table table-striped table-hover\">
                                                                                                <thead class=\"bg-primary text-white\">
                                                                                                    <tr>
                                                                                                        <th>About Group</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td>".str_replace("'", "&#39;", multilineText($group['pdccc_info']))."</td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        ";
                                                                                    ?>
                                                                                    <button class="btn btn-sm m-1 btn-outline-info shadow" type="button" data-toggle="modal"
                                                                                        open-modal--id="view_group-info_<?= $group_id; ?>" open-modal--type="modal-md"
                                                                                        open-modal--title="View Group Info [ <?= $group['pdccc_name']; ?> ]" open-modal--html='<?= $groupInfo; ?>' open-modal--buttons='
                                                                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                                                                        Group Info <span class="ml-1 pe-7s-info"></span>
                                                                                    </button>
                                                                                    <button class="btn btn-sm m-1 btn-outline-warning shadow" type="button" data-toggle="modal"
                                                                                        open-modal--id="view_group-edit_<?= $group_id; ?>" open-modal--type="modal-md"
                                                                                        open-modal--title="Update Group [ <?= $group['pdccc_name']; ?> ]" open-modal--html='<?php require Current_BaseDir."/forms/group/update.php"; ?>' open-modal--buttons='
                                                                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>'>
                                                                                        Edit Group <span class="ml-1 pe-7s-edit"></span>
                                                                                    </button>
                                                                                    <button type="button" class="btn btn-danger btn-sm"
                                                                                        btn-submit-post=<?= json_encode(["group_id"=>$group['pdccc_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                                                        btn-submit-post--confirm="Delete Group?"
                                                                                        btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/delete_group"; ?>">
                                                                                        Delete <span class="ml-1 pe-7s-trash"></span>
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        <?php } */
                                                    ?>
                                                </tbody>
                                            </table>
                                        <?php }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        -
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
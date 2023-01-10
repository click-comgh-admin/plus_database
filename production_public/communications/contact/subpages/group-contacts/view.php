<?php
    if (isset($_GET['group']) && !empty($_GET['group'])) {
        $get_string = "communications/clients/contact/group?account_id=" . AccountInfoId . "&id=" . $_GET['group'];
        $group = $ccApi->fetch_from($get_string=$get_string, function($group) {
            return isset($group[0])? $group[0]: [];
        }, $debug=false);

        if (empty($group)) {
            groupErrorHere("Invalid Group");
        } else { ?>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-4">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-12">
                            <div class="main-card mb-3 card shadow">
                                <div class="card-header-tab card-header-tab-animation card-header">
                                    <div class="card-header-title">
                                        <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Add Contact Group
                                    </div>
                                    <div class="btn-actions-pane-right">
                                        <div class="btn-group-sm nav btn-group" role="group">
                                            <?php
                                                $isIndividual = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "individual-group"))? "active" : "";
                                                $isIndividual = (!isset($_POST['add-contact-form-type']) || empty(@$_POST['add-contact-form-type']))? "active": $isIndividual;
                                                $isExcel = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "excel-group"))? "active": "";
                                                $isBulk = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "bulk-group"))? "active": "";
                                            ?>
                                            <a class="btn-shadow btn btn-outline-primary show <?= $isIndividual; ?>" href="#add_individual_group" data-toggle="tab">Individual</a>
                                            <a class="btn-shadow btn btn-outline-primary show <?= $isExcel; ?>" href="#add_excel_group" data-toggle="tab">Excel</a>
                                            <a class="btn-shadow btn btn-outline-primary show <?= $isBulk; ?>" href="#add_bulk_group" data-toggle="tab">Bulk</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body py-0">
                                    <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact-group"))? "show": ""; ?> py-2" id="add_group_form">
                                        <?php
                                            if (!function_exists("instructions")) {
                                                function instructions($load_countries)
                                                {     
                                                    if (!function_exists("countries_loader")) {                
                                                        function countries_loader($cc)
                                                        {
                                                            $qust = '<option value="Select Your Country">';
                                                            foreach ($cc as $c) {
                                                                $qust .= '<option value="'.str_replace("'", "~", $c->Name).'">'.$c->Short.'</option>';
                                                            }
                                                            return $qust;
                                                        }
                                                    } ?>
                                                    <div class="container fa">
                                                        <p>
                                                            Upload <span class="fa fa-file-excel-o"> Excel File </span>. [ <a href="<?= CLIENT_BASE_URL."assets/excel/bulk%20contact%20upload.xlsx"; ?>" download="">Download Template File</a>. ]
                                                        </p>
                                                        <div class="d-block">
                                                            <div class="col-lg-12 px-0">
                                                                <label for="membershipinput15_1">Check Country Name</label>
                                                                <div class="input-group mb-3">
                                                                    <div class="input-group-append ms-input-icon">
                                                                        <span class="input-group-text" style="font-weight: 700;">
                                                                            <i class="fa fa-flag"></i>
                                                                        </span>
                                                                    </div>
                                                                    <input list="data-quest-2" type="text" id="country" class="form-control p-2 __f-c__ p-2" style="padding-top: 5px; padding-bottom: 5px;height: 38px;border-top-right-radius: 30px;border-bottom-right-radius: 30px;" placeholder="Country" required="" />
                                                                    <datalist class="" id="data-quest-2">
                                                                        <?= countries_loader($load_countries); ?>
                                                                    </datalist>
                                                                </div>
                                                            </div>
                                                            <p class="text-warning">Please Enter Country Name as it appears in the list above.</p>
                                                        </div>
                                                        <div class="table-responsive">
                                                            <table class="table table-sm">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Columns</th>
                                                                        <th align="center"><span class="fa fa-info"></span></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>1</th>
                                                                        <td>
                                                                            <p class="my-1">Contact Name => Required</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>2</th>
                                                                        <td>
                                                                            <p class="my-1">Contact Phone => Required</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>3</th>
                                                                        <td>
                                                                            <p class="my-1">Contact Description => Optional</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>4</th>
                                                                        <td>
                                                                            <p class="my-1">Contact Country => Optional </p>
                                                                            <p class="my-1">[ If country is left blank default country will be set, i.e to account country ].</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>  
                                                <?php }
                                            }
                                        ?>
                                        <div class="tab-content">
                                            <div class="tab-pane show p-0 <?= $isIndividual; ?>" id="add_individual_group" role="tabpanel">
                                                <?php require_once Current_BaseDir."/forms/group-contacts/new.php"; ?>
                                            </div>
                                            <div class="tab-pane show p-0 <?= $isExcel; ?> " id="add_excel_group" role="tabpanel">
                                                <?php require_once Current_BaseDir."/forms/group-contacts/new-excel.php"; ?>
                                            </div>
                                            <div class="tab-pane show p-0 <?= $isBulk; ?> " id="add_bulk_group" role="tabpanel">
                                                <?php require_once Current_BaseDir."/forms/group-contacts/new-bulk.php"; ?>
                                            </div>
                                        </div>
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
                                    <div class="btn-actions-pane-right">
                                        <div class="btn-group-sm nav btn-group" role="group">
                                            <a class="btn-shadow btn btn-warning show" aria-expanded="true" type="button" data-toggle="collapse" href="#emptyGroupContent">Empty Group Contents</a><hr class="m-0">
                                            <a class="btn-shadow btn btn-danger show" aria-expanded="true" type="button" data-toggle="collapse" href="#removeGroupContent">Remove Group Contents</a><hr class="m-0">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body mb-2 container">
                                    <div class="btn-actions-pane-right row">
                                        <div class="collapse py-1 col-md-6" id="emptyGroupContent">
                                            <i>[
                                                <small class="small text-warning text-wrap">
                                                    <i>Only removes contacts from group, they still exist in contact book</i>
                                                </small>
                                                ]
                                            </i>
                                            <button type="button" class="btn btn-warning btn-sm btn-block"
                                                btn-submit-post=<?= json_encode(["group_id"=>$_GET['group'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Empty Group Contents?"
                                                btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/empty_group"; ?>">
                                                <span class="pe-7s-magic-wand">Empty Group Contents</span>
                                            </button>
                                        </div>
                                        <div class="collapse py-1 col-md-6" id="removeGroupContent">
                                            <i>[
                                                <small class="small text-danger text-wrap">
                                                    <i>Deletes contacts from group and contact book</i>
                                                </small>
                                                ]
                                            </i>
                                            <button type="button" class="btn btn-danger btn-sm btn-block"
                                                btn-submit-post=<?= json_encode(["group_id"=>$_GET['group'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Remove Group Contents?"
                                                btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/delete_group_contacts"; ?>">
                                                <span class="pe-7s-trash"> Remove Group Contents</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="card-footer"></div>
                                </div>
                                <div class="card-body">
                                    <?php
                                        $get_string = "communications/clients/contact/access-code?account_id=" . AccountInfoId . "&user=" . $user_id;
                                        $access_code = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                            return (isset($access_code[0]))? $access_code[0]['pdccac_id']: 0;
                                        }, $debug=false);
                                        if ((bool)MyAppAccess['unlimited'] === false) {
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
                                            <form role="form" action="<?= API_BASE_URL."communications/clients/contacts/groups/delete-contact"; ?>" method="POST"
                                                make-general-posts="Delete Selected Contacts?" >
                                                <div class="table-responsive">
                                                    <?php
                                                        if (empty($groups)) { ?>
                                                            <h4 class="text-muted">No Contact Groups Created.</h4>
                                                        <?php } else { ?>
                                                        
                                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover" pagin_table="group-contacts-alt" pt_c_id="<?= $account_id; ?>"
                                                                pt_c_page="<?= Current_BaseUrl; ?>" pt_c_user="<?= $user_id; ?>" group_id="<?= $_GET['group']; ?>"
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
                                                                <tbody>
                                                                    <?php ?>
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <th colspan="1">
                                                                            <input type="hidden" name="group_id" value="<?= $group['pdccc_id']; ?>" />
                                                                            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                                                                            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                                                                        </th>
                                                                        <th colspan="1">
                                                                            <button type="submit" class="btn btn-sm btn-outline-danger">Delete Selected</button>
                                                                        </th>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        <?php }
                                                    ?>
                                                </div>
                                            </form>
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
        <?php }
    } else {
        groupErrorHere("Undefined Group");   
    }

    function groupErrorHere($msg)
    { ?>
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-4">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <div class="main-card mb-3 card shadow">
                            <div class="card-header-tab card-header-tab-animation card-header">
                                <div class="card-header-title">
                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Add Contact to Group
                                </div>
                            </div>
                            <div class="card-body py-0">
                                <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact-group"))? "show": ""; ?> py-2" id="add_group_form">
                                </div>
                            </div>
                            <div class="card-footer">
                                <?php
                                    if (isset($_POST['add-form'])) {
                                        if ($_POST['add-form'] == "contact-group") { ?>
                                            <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                                type="button" data-toggle="collapse" href="#add_group_form">Add Contact to Group Form</button>
                                        <?php } else { ?>
                                            <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                                type="button" data-toggle="collapse" href="#add_group_form">Add Contact to Group Form</button>
                                        <?php }
                                    } else { ?>
                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                            type="button" data-toggle="collapse" href="#add_group_form">Add Contact to Group Form</button>
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
                                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> <?= $msg; ?>
                                </div>
                            </div>
                            <div class="card-body">
                                <?= $msg; ?>
                            </div>
                            <div class="card-footer">
                                -
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php }
?>
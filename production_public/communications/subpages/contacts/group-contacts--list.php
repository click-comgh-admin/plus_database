<?php
    $get_string = "group-contacts?account_id=$account_id&group_id=".$_GET['group'];
    $group_contacts = $ccApi->communications($type="clients", $get_string, function($group_contacts)
    {
        return @$group_contacts;
    }, $debug = false);

    $get_string = "one_group?account_id=$account_id&id=".$_GET['group'];
    $group = $ccApi->communications($type="clients", $get_string, function($groups)
    {
        return @$groups[0];
    }, $debug = false);
?>
<pre><?php //print_r($group_contacts); ?></pre>
<div class="card-header">OPTIONS
    <div class="btn-actions-pane-right">
        <div class="btn-group-sm nav btn-group" role="group">
            <a class="btn-shadow btn btn-warning show" aria-expanded="true" type="button" data-toggle="collapse" href="#emptyGroupContent">Empty Group Contents</a><hr class="m-0">
            <a class="btn-shadow btn btn-danger show" aria-expanded="true" type="button" data-toggle="collapse" href="#removeGroupContent">Remove Group Contents</a><hr class="m-0">
        </div>
    </div>
</div>
<div class="card-body p-0 mb-4">
    <div class="collapse py-2" id="emptyGroupContent">
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
    <div class="collapse py-2" id="removeGroupContent">
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
    <div class="card-footer"></div>
</div>

<div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
    <?= @$group['pdccc_name']; ?> Group
    <div class="btn-actions-pane-right">
        <div class="btn-group-sm nav btn-group" role="group">
            <a class="btn-shadow btn btn-primary show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "add-contact--to---group")) ? "" : " active"; ?>" href="#list_group_contacts_tab" data-toggle="tab">Group Contacts</a>
            <a class="btn-shadow btn btn-primary show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "add-contact--to---group")) ? " active" : ""; ?>" href="#add_contact_to_group_tab" data-toggle="tab">Add Contact to Group</a>
        </div>
    </div>
</div>
<div class="card-body p-0 mb-4">
    <div class="tab-content">
        <div class="tab-pane show  <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "add-contact--to---group")) ? "" : " active"; ?>" id="list_group_contacts_tab" role="tabpanel">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-6">
                    <?php
                        if (empty($group_contacts)) { ?>
                            <div class="card-body">
                                <h4 class="text-muted">No Group Contacts Added.</h4>
                            </div>
                        <?php } else { ?>
                            <h4 class="card-title px-3">Group Contacts</h4>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover" pagin_table="group-contacts" pt_c_id="<?= $account_id; ?>"
                                    pt_c_page="<?= ComBaseUrlAlt; ?>" pt_c_user="<?= $user_id; ?>" group_id="<?= $_GET['group']; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th style="white-space: nowrap;">Contact Info</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php /*
                                            foreach ($group_contacts as $contact_key => $group_contact) { 
                                                $get_string = "one_contact?account_id=$account_id&id=".$group_contact['pdccc_contact_id'];
                                                $contact = $ccApi->communications($type="clients", $get_string, function($contact)
                                                {
                                                    return @$contact[0];
                                                }, $debug = false); ?>
                                                <tr>
                                                    <td class="p-0" background-image="<?= FILE_BUCKET_BASE_URL; ?>files/clients/contact-picture/<?= @$contact['pdccc_photo']; ?>">
                                                        <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                            <div class="widget-content-wrapper">
                                                                <div class="widget-content-center ml-auto mr-auto">
                                                                    <div class="widget-content-center">
                                                                        <img width="100" height="100" class="rounded-circle shadow" alt="Contact Image"
                                                                            src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/contact-picture/<?= @$contact['pdccc_photo']; ?>">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="p-0">
                                                        <table class="align-middle mb-0 table table-borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-justify"><?= $contact['pdccc_name']; ?></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-justify">
                                                                        <a href="<?= ComBaseUrlAlt; ?>?contacts&contact=<?= $contact['pdccc_code']; ?>" class="btn btn-info btn-sm" type="button">
                                                                            <?= $contact['pdccc_contact']; ?>
                                                                            <span class="ml-1 fa fa-eye"></span>
                                                                        </a>
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
                            </div>
                        <?php }
                    ?>
                </div>
            </div>
        </div>
        <div class="tab-pane show  <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "add-contact--to---group")) ? " active" : ""; ?>" id="add_contact_to_group_tab" role="tabpanel">
            <h4 class="card-title px-3">Add Contact to Group</h4>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact-add_to_group.php';; ?>
                </div>
            </div>
        </div>
    </div>
</div>
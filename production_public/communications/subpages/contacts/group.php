<div class="col-md-12 col-lg-8">
    <div class="main-card mb-3 card shadow">
        <?php
            $get_string = "one_group?account_id=$account_id&id=".$_GET['group'];
            $group = $ccApi->communications($type="clients", $get_string, function($groups)
            {
                return @$groups[0];
            }, $debug = false);
        ?>
        <pre><?php //print_r($group); ?></pre>
        <?php                
            if (empty($group)) { ?>
                <div class="card-body">
                    <h4 class="text-muted">No Such Group.</h4>
                </div>
            <?php } else { ?>
                <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                    <?= @$group['pdccc_name']; ?> Group
                    <div class="btn-actions-pane-right">
                        <div class="btn-group-sm nav btn-group" role="group">
                            <a class="btn-shadow btn btn-secondary show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact-group--edit")) ? "" : " active"; ?>" href="#group_contacts_tab" data-toggle="tab">Group Contacts</a>
                            <a class="btn-shadow btn btn-secondary show" href="#group_info_tab" data-toggle="tab">Group Info</a>
                            <a class="btn-shadow btn btn-secondary show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact-group--edit")) ? " active" : ""; ?>" href="#edit_group_info_tab" data-toggle="tab">Edit Group Info</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="main-card mb-3">
                        <div class="card-header-tab card-header-tab-animation card-header h-25">
                            <div class="card-header-title">
                                <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Add Contact To Group
                            </div>
                        </div>
                        <div class="card-body py-0">
                            <div class="collapse <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact_group"))? "show": ""; ?> py-2" id="add_contact_form_to_group">
                                <?php require_once "communications/subpages/contacts/contact_add_group.php"; ?>
                            </div>
                        </div>
                        <div class="card-footer">
                            <?php
                                if (isset($_POST['add-form'])) {
                                    if ($_POST['add-form'] == "contact_group") { ?>
                                        <button class="btn-actions-pane-right btn btn-primary" aria-expanded="true"
                                            type="button" data-toggle="collapse" href="#add_contact_form_to_group">Add Contact Form</button>
                                    <?php } else { ?>
                                        <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                            type="button" data-toggle="collapse" href="#add_contact_form_to_group">Add Contact Form</button>
                                    <?php }
                                } else { ?>
                                    <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                                        type="button" data-toggle="collapse" href="#add_contact_form_to_group">Add Contact Form</button>
                                <?php }
                            ?>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane show  <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact-group--edit")) ? "" : " active"; ?>" id="group_contacts_tab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12">
                                    <?php require_once "group-contacts--list.php"; ?>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane show" id="group_info_tab" role="tabpanel">
                            <h4 class="card-title">Group Info</h4>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12">
                                    <div class="table-responsive">
                                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th class="">#</th>
                                                    <th style="white-space: nowrap;">Contact Group</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th class="p-0">
                                                        <span class="pe-7s-notebook fa-3x"></span>
                                                    </th>
                                                    <th class="text-justify"><?= $group['pdccc_name']; ?></th>
                                                </tr>
                                                <tr>
                                                    <th class="p-0">Group Info</th>
                                                    <td class="text-justify"><?= multiline_text($string = $group['pdccc_info']); ?></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane show  <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "contact-group--edit")) ? " active" : ""; ?>" id="edit_group_info_tab" role="tabpanel">
                            <h4 class="card-title">Edit Group Info</h4>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12">
                                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact-group_update.php';; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-block text-right card-footer">
                    <a class="btn-wide btn btn-warning"
                        href="<?= ComBaseUrlAlt . "?group-contacts&group=" . $_GET['group']; ?>">Group Contacts</a>
                </div>
            <?php }
        ?>
        
    </div>
</div>

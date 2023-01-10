<div class="">
    <div class="mb-3">
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            <div class="btn-actions-pane-right">
                <div class="btn-group-sm nav btn-group" role="group">
                    <?php
                        $add_contact_form_individual = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "individual-group"))? "active" : "";
                        $add_contact_form_individual = (!isset($_POST['add-contact-form-type']) || empty(@$_POST['add-contact-form-type']))?"active": $add_contact_form_individual;

                        $add_contact_form_excel = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "excel-group"))? "active": "";
                   
                        $add_contact_form_bulk = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "bulk-group"))? "active": "";
                    ?>
                    <a class="btn-shadow btn btn-outline-success show <?= $add_contact_form_individual; ?>" href="#add_individual_group" data-toggle="tab">Individual</a>
                    <a class="btn-shadow btn btn-outline-success show <?= $add_contact_form_excel; ?>" href="#add_excel_group" data-toggle="tab">Excel</a>
                    <a class="btn-shadow btn btn-outline-success show <?= $add_contact_form_bulk; ?>" href="#add_bulk_group" data-toggle="tab">Bulk</a>
                </div>
            </div>
        </div>
        <div class="card-body p-0 mb-4">
            <div class="tab-content">
                <div class="tab-pane show p-0 <?= $add_contact_form_individual; ?>" id="add_individual_group" role="tabpanel">
                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact_add_group.php'; ?>
                </div>
                <div class="tab-pane show p-0 <?= $add_contact_form_excel; ?> " id="add_excel_group" role="tabpanel">
                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact_add_excel_group.php'; ?>
                </div>
                <div class="tab-pane show p-0 <?= $add_contact_form_bulk; ?> " id="add_bulk_group" role="tabpanel">
                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact_add_bulk_group.php'; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="">
    <div class="mb-3">
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            <div class="btn-actions-pane-right">
                <div class="btn-group-sm nav btn-group" role="group">
                    <?php
                        $add_contact_form_individual = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "individual"))? "active" : "";
                        $add_contact_form_individual = (!isset($_POST['add-contact-form-type']) || empty(@$_POST['add-contact-form-type']))?"active": $add_contact_form_individual;
                    ?>
                    <a class="btn-shadow btn btn-outline-success show <?= $add_contact_form_individual; ?>" href="#add_individual" data-toggle="tab">Individual</a>
                    <?php
                        $add_contact_form_excel = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "excel"))? "active": "";
                    ?>
                    <a class="btn-shadow btn btn-outline-success show <?= $add_contact_form_excel; ?>" href="#add_excel" data-toggle="tab">Excel</a>
                    <?php
                        $add_contact_form_bulk = (isset($_POST['add-contact-form-type']) && ($_POST['add-contact-form-type'] == "bulk"))? "active": "";
                    ?>
                    <a class="btn-shadow btn btn-outline-success show <?= $add_contact_form_bulk; ?>" href="#add_bulk" data-toggle="tab">Bulk</a>
                </div>
            </div>
        </div>
        <div class="card-body p-0 mb-4">
            <div class="tab-content">
                <div class="tab-pane show p-0 <?= $add_contact_form_individual; ?>" id="add_individual" role="tabpanel">
                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact_add.php'; ?>
                </div>
                <div class="tab-pane show p-0 <?= $add_contact_form_excel; ?> " id="add_excel" role="tabpanel">
                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact_add_excel.php'; ?>
                </div>
                <div class="tab-pane show p-0 <?= $add_contact_form_bulk; ?> " id="add_bulk" role="tabpanel">
                    <?php require_once BASE_DIRECTORY.'/communications/forms/contact/contact_add_bulk.php'; ?>
                </div>
            </div>
        </div>
    </div>
</div>
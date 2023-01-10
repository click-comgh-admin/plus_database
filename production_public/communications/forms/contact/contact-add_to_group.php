<?php
    if (isset($_POST) && !empty($_POST) && ($_POST['add-form'] == "add-contact--to---group")) {
        define("POST_URL_ADD", API_BASE_URL."communications/clients/contacts/add_to_group");
        require_once 'contact-add_to_group - processing.php';
    }
?>
<form role="form" action="<?= ComBaseUrlAlt . "?" . $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="add-contact--to---group" />
        <?php
            $get_string = "contacts?account_id=$account_id";
            $GC = [];
            foreach ($group_contacts as $key => $group_contact) {;
                if (!in_array($group_contact['pdccc_contact_id'], $GC)) {
                    array_push($GC, $group_contact['pdccc_contact_id']);
                }
            }
            // print_r($GC);

            $contacts = $ccApi->communications($type="clients", $get_string, function($contacts)
            {
                return $contacts;
            }, $debug = false);

            // print_r($contacts);

            if (empty($contacts)) { ?>
                <h4 class="text-muted">No Contacts Created.</h4>
            <?php } else { ?>
                <div class="col-md-6 px-0 table-responsive">
                    <table class="align-middle mb-0 table table-borderless table-striped table-hover" pagin_table="group-contacts-add" pt_c_id="<?= $account_id; ?>"
                        pt_c_page="<?= ComBaseUrlAlt; ?>" pt_c_user="<?= $user_id; ?>" group_id="<?= $_GET['group']; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th style="white-space: nowrap;" class="text-center"><span class="pe-7s-check"></span></th>
                                <th style="white-space: nowrap;">Contact Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php /*
                                foreach ($contacts as $contact_key => $contact) { ?>
                                    <tr>
                                        <td class="p-0" background-image="<?= FILE_BUCKET_BASE_URL; ?>files/clients/contact-picture/<?= @$contact['pdccc_photo']; ?>">
                                            <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-center ml-auto mr-auto">
                                                        <div class="widget-content-center">
                                                            <img width="90" height="90" class="rounded-circle shadow" alt="Contact Image"
                                                                src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/contact-picture/<?= @$contact['pdccc_photo']; ?>">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-center p-0">
                                            <?php
                                                $isChecked = (in_array($contact['pdccc_id'], $GC)) ? 'checked="true"' : "";
                                            ?>
                                            <div class="custom-checkbox custom-control">
                                                <input class="custom-control-input" type="checkbox" name="contact_check_<?= $contact['pdccc_id']; ?>" id="contact_check_<?= $contact['pdccc_id']; ?>" <?= $isChecked; ?> />
                                                <label class="custom-control-label" for="contact_check_<?= $contact['pdccc_id']; ?>">Select</label>
                                            </div>	
                                            <input type="hidden" name="contact_id[]" value="<?= $contact['pdccc_id']; ?>" />
                                        </td>
                                        <td class="p-0">
                                            <table class="align-middle mb-0 table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th class="text-left"><?= $contact['pdccc_name']; ?></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-left">
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
        <div class="col-md-12 mt-2">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="group_id" value="<?= $group['pdccc_id']; ?>" />
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" 
                        class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill shadow"
                        style="position: fixed;bottom: 150px;width: 150px;right: 100px;z-index: 999;">Update Group</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

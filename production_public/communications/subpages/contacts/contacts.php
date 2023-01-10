<div class="col-md-12 <?= isset($_GET['contacts']) ? 'col-lg-8' : 'col-lg-12'; ?>">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Contacts</div>
        <div class="card-body">
            <?php
                $get_string = "contacts?account_id=$account_id";
                $contacts = $ccApi->communications($type="clients", $get_string, function($contacts)
                {
                    return $contacts;
                }, $debug = false);
            ?>
            <pre><?php //print_r($contacts); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <div class="table-responsive">
                        <?php
                            if (empty($contacts)) { ?>
                                <h4 class="text-muted">No Contacts Created.</h4>
                            <?php } else { ?>
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover" pagin_table="contacts" pt_c_id="<?= $account_id; ?>"
                                    pt_c_page="<?= ComBaseUrlAlt; ?>" pt_c_user="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
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
                                                                    <td class="text-center">
                                                                        <a href="<?= ComBaseUrlAlt; ?>?contacts&contact=<?= $contact['pdccc_code']; ?>" class="btn btn-info btn-sm" type="button">
                                                                            <?= $contact['pdccc_contact']; ?>
                                                                            <span class="ml-1 fa fa-eye"></span>
                                                                        </a>
                                                                        <button type="button" class="btn btn-danger btn-sm"
                                                                            btn-submit-post=<?= json_encode(["contact_id"=>$contact['pdccc_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                                            btn-submit-post--confirm="Delete Contact?"
                                                                            btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/delete"; ?>">
                                                                            <span class="pe-7s-trash"></span>
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
        <div class="card-footer">-</div>
    </div>
</div>
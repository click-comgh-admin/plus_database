<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Due Types</div>
        <div class="card-body">
            <?php
                $get_string = "types?account_id=$account_id";
                $types = $ccApi->dues($get_string, function($types)
                {
                    return @$types;
                }, $debug = false);
            ?>
            <pre><?php //print_r($types); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <div class="table-responsive">
                        <?php
                            if (empty($types)) { ?>
                                <h4 class="text-muted">No Due Type(s) Created.</h4>
                            <?php } else { ?>
                                <table class="align-middle mb-0 table table-b orderless table-bordered table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th style="white-space: nowrap;">Due Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                            foreach ($types as $type_key => $type) { ?>
                                                <tr>
                                                    <td class="p-0">
                                                        <div class="widget-content p-3">
                                                            <div class="widget-content-wrapper">
                                                                <div class="widget-content-center ml-auto mr-auto">
                                                                    <div class="widget-content-center">
                                                                        <span class="pe-7s-cash fa-2x"></span>
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
                                                                        <?= $type['pddt_type']; ?>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="text-center">
                                                                        <div class="container">
                                                                            <div class="row">
                                                                                <div class="col-md-4">
                                                                                    <span class="badge p-2 my-1 small badge-info bg-slick-carbon shadow w-100"><?= $type['pddt_currency']; ?> <?= $type['pddt_amount']; ?></span>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <a href="<?= dues_BaseUrl; ?>due-types?edit=<?= $type['pddt_id']; ?>" class="btn my-1 btn-warning btn-sm w-100" type="button">
                                                                                        Edit <span class="ml-1 pe-7s-edit"></span>
                                                                                    </a>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <button type="button" class="btn my-1 btn-danger btn-sm w-100"
                                                                                        btn-submit-post=<?= json_encode(["due_id"=>$type['pddt_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                                                        btn-submit-post--confirm="Delete Due?"
                                                                                        btn-submit-post--url="<?= API_BASE_URL."dues/clients/due-type/delete"; ?>">
                                                                                        Delete <span class="pe-7s-trash"></span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            <?php }
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
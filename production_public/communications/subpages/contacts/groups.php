<div class="col-md-12 <?= isset($_GET['contacts']) ? 'col-lg-8' : 'col-lg-12'; ?>">
    <div class="main-card mb-3 card shadow">
        <div class="card-header">Groups</div>
        <div class="card-body">
            <?php
                $get_string = "groups?account_id=$account_id";
                $groups = $ccApi->communications($type="clients", $get_string, function($groups)
                {
                    return $groups;
                }, $debug = false);
            ?>
            <pre><?php //print_r($groups); ?></pre>
            
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <div class="table-responsive">
                        <?php
                            if (empty($groups)) { ?>
                                <h4 class="text-muted">No Contact Groups Created.</h4>
                            <?php } else { ?>
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th style="white-space: nowrap;">Contact Group</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                            foreach ($groups as $group_key => $group) { ?>
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
                                                                        <a href="<?= ComBaseUrlAlt; ?>?groups&group=<?= $group['pdccc_id']; ?>" class="btn btn-info btn-sm" type="button">
                                                                            Open
                                                                            <span class="ml-1 fa fa-eye"></span>
                                                                        </a>
                                                                        <button type="button" class="btn btn-danger btn-sm"
                                                                            btn-submit-post=<?= json_encode(["group_id"=>$group['pdccc_id'], "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
                                                                            btn-submit-post--confirm="Delete Group?"
                                                                            btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/delete_group"; ?>">
                                                                            <span class="pe-7s-trash"></span>
                                                                        </button>
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
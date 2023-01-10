
<?php
    $account_infoLeaders = @$account_info['leaders'];
    // print_r($account_infoLeaders);
?>
<div class="row justify-content-center">
    <?php require_once BASE_DIRECTORY."/account/subpages/settings/leaders_edit.php"; ?>
    <div class="col-md-12 col-lg-7">
        <div class="card">
            <div class="card-header">
                <i>Leaders</i> // <?= @$account_info['pdc_name']; ?>
                <div class="btn-actions-pane-right">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>settings">Main</a>
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>logo">Logo</a>
                        <a class="btn-shadow btn btn-danger show active" href="<?= settings_BaseUrl; ?>leaders">Leaders</a>
                        <a class="btn-shadow btn btn-info show" href="<?= settings_BaseUrl; ?>status-indicator">Status Indicator</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-6">
                        <div class="table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead class="shadow bg-primary">
                                    <tr>
                                        <th class="text-white">Query</th>
                                        <th class="text-white">Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Leader 1 Name</th>
                                        <th>
                                            <?= $account_infoLeaders['pdcl_leader1_name']; ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 1 Phone</th>
                                        <th><a
                                                href="tel:<?= @$account_infoLeaders['pdcl_leader1_phone']; ?>"><?= @$account_infoLeaders['pdcl_leader1_phone']; ?></a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 1 E-mail</th>
                                        <th><a
                                                href="mailto:<?= @$account_infoLeaders['pdcl_leader1_email']; ?>"><?= @$account_infoLeaders['pdcl_leader1_email']; ?></a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 1 Role</th>
                                        <th>
                                            <?php
                                                if (AccountInfoCategory !== 10) {
                                                    echo $ccApi->designation($all=false, $id=@$account_infoLeaders['pdcl_leader1_role'], function($designation) {
                                                        return @$designation[0]['coc_leader'];
                                                    });
                                                } else {
                                                    echo $ccApi->staff_status($all=false, $id=@$account_infoLeaders['pdcl_leader1_role'], function($designation) {
                                                        return @$designation[0]['pdd_info'];
                                                    });
                                                }
                                            ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 2 Name</th>
                                        <th>
                                            <?= $account_infoLeaders['pdcl_leader2_name']; ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 2 Phone</th>
                                        <th><a
                                                href="tel:<?= @$account_infoLeaders['pdcl_leader2_phone']; ?>"><?= @$account_infoLeaders['pdcl_leader2_phone']; ?></a>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead class="shadow bg-primary">
                                    <tr>
                                        <th class="text-white">Query</th>
                                        <th class="text-white">Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Leader 2 E-mail</th>
                                        <th><a
                                                href="mailto:<?= @$account_infoLeaders['pdcl_leader2_email']; ?>"><?= @$account_infoLeaders['pdcl_leader2_email']; ?></a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 2 Role</th>
                                        <th>
                                            <?php
                                                if (AccountInfoCategory !== 10) {
                                                    echo $ccApi->designation($all=false, $id=@$account_infoLeaders['pdcl_leader2_role'], function($designation) {
                                                        return @$designation[0]['coc_leader'];
                                                    });
                                                } else {
                                                    echo $ccApi->staff_status($all=false, $id=@$account_infoLeaders['pdcl_leader2_role'], function($designation) {
                                                        return @$designation[0]['pdd_info'];
                                                    });
                                                }
                                            ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 3 Name</th>
                                        <th>
                                            <?= $account_infoLeaders['pdcl_leader3_name']; ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 3 Phone</th>
                                        <th><a
                                                href="tel:<?= @$account_infoLeaders['pdcl_leader3_phone']; ?>"><?= @$account_infoLeaders['pdcl_leader3_phone']; ?></a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 3 E-mail</th>
                                        <th><a
                                                href="mailto:<?= @$account_infoLeaders['pdcl_leader3_email']; ?>"><?= @$account_infoLeaders['pdcl_leader3_email']; ?></a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Leader 3 Role</th>
                                        <th>
                                            <?php
                                                if (AccountInfoCategory !== 10) {
                                                    echo $ccApi->designation($all=false, $id=@$account_infoLeaders['pdcl_leader3_role'], function($designation) {
                                                        return @$designation[0]['coc_leader'];
                                                    });
                                                } else {
                                                    echo $ccApi->staff_status($all=false, $id=@$account_infoLeaders['pdcl_leader3_role'], function($designation) {
                                                        return @$designation[0]['pdd_info'];
                                                    });
                                                }
                                            ?>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-block">
            </div>
        </div>
    </div>
</div>
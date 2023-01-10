
<?php
    $branchLeaders = @$branch['leaders'];
    // print_r($branchLeaders);
?>
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
                        <?= @$branchLeaders['pdcl_leader1_name']; ?>
                    </th>
                </tr>
                <tr>
                    <th>Leader 1 Phone</th>
                    <th><a
                            href="tel:<?= @$branchLeaders['pdcl_leader1_phone']; ?>"><?= @$branchLeaders['pdcl_leader1_phone']; ?></a>
                    </th>
                </tr>
                <tr>
                    <th>Leader 1 E-mail</th>
                    <th><a
                            href="mailto:<?= @$branchLeaders['pdcl_leader1_email']; ?>"><?= @$branchLeaders['pdcl_leader1_email']; ?></a>
                    </th>
                </tr>
                <tr>
                    <th>Leader 1 Role</th>
                    <th>
                        <?php
                            if ((int)$branch['pdc_account_type'] !== 10) {
                                echo $ccApi->designation($all=false, $id=@$branchLeaders['pdcl_leader1_role'], function($designation) {
                                    return @$designation[0]['coc_leader'];
                                });
                            } else {
                                echo $ccApi->staff_status($all=false, $id=@$branchLeaders['pdcl_leader1_role'], function($designation) {
                                    return @$designation[0]['pdd_info'];
                                });
                            }
                        ?>
                    </th>
                </tr>
                <tr>
                    <th>Leader 2 Name</th>
                    <th>
                        <?= @$branchLeaders['pdcl_leader2_name']; ?>
                    </th>
                </tr>
                <tr>
                    <th>Leader 2 Phone</th>
                    <th><a
                            href="tel:<?= @$branchLeaders['pdcl_leader2_phone']; ?>"><?= @$branchLeaders['pdcl_leader2_phone']; ?></a>
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
                            href="mailto:<?= @$branchLeaders['pdcl_leader2_email']; ?>"><?= @$branchLeaders['pdcl_leader2_email']; ?></a>
                    </th>
                </tr>
                <tr>
                    <th>Leader 2 Role</th>
                    <th>
                        <?php
                            if ((int)$branch['pdc_account_type'] !== 10) {
                                echo $ccApi->designation($all=false, $id=@$branchLeaders['pdcl_leader2_role'], function($designation) {
                                    return @$designation[0]['coc_leader'];
                                });
                            } else {
                                echo $ccApi->staff_status($all=false, $id=@$branchLeaders['pdcl_leader2_role'], function($designation) {
                                    return @$designation[0]['pdd_info'];
                                });
                            }
                        ?>
                    </th>
                </tr>
                <tr>
                    <th>Leader 3 Name</th>
                    <th>
                        <?= @$branchLeaders['pdcl_leader3_name']; ?>
                    </th>
                </tr>
                <tr>
                    <th>Leader 3 Phone</th>
                    <th><a
                            href="tel:<?= @$branchLeaders['pdcl_leader3_phone']; ?>"><?= @$branchLeaders['pdcl_leader3_phone']; ?></a>
                    </th>
                </tr>
                <tr>
                    <th>Leader 3 E-mail</th>
                    <th><a
                            href="mailto:<?= @$branchLeaders['pdcl_leader3_email']; ?>"><?= @$branchLeaders['pdcl_leader3_email']; ?></a>
                    </th>
                </tr>
                <tr>
                    <th>Leader 3 Role</th>
                    <th>
                        <?php
                            if ((int)$branch['pdc_account_type'] !== 10) {
                                echo $ccApi->designation($all=false, $id=@$branchLeaders['pdcl_leader3_role'], function($designation) {
                                    return @$designation[0]['coc_leader'];
                                });
                            } else {
                                echo $ccApi->staff_status($all=false, $id=@$branchLeaders['pdcl_leader3_role'], function($designation) {
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

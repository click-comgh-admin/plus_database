<div class="row justify-content-center">
    <?php require_once BASE_DIRECTORY."/account/subpages/settings/main_settings_edit.php"; ?>
    <div class="col-md-12 col-lg-7">
        <div class="card">
            <div class="card-header">
                <i>Main Settings</i> // <?= @$account_info['pdc_name']; ?>
                <div class="btn-actions-pane-right">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <a class="btn-shadow btn btn-danger show active" href="<?= settings_BaseUrl; ?>settings">Main</a>
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>logo">Logo</a>
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>leaders">Leaders</a>
                        <a class="btn-shadow btn btn-info show" href="<?= settings_BaseUrl; ?>status-indicator">Status Indicator</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <?php
                    // print_r($account_info);
                ?>
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
                                        <th>Account Category</th>
                                        <th>
                                            <?php 
                                                $default = (int)$account_info['pdc_account_category']; 
                                                $get_string = "account_type/one-category?id=".(int)$default;
                                            ?>
                                            <?= $account_category = $ccApi->fetch_from($get_string=$get_string, function($account_category) {
                                                return $account_category[0]['pdd_info'];
                                            }); ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Account Type</th>
                                        <th>
                                            <?php $default = AccountInfoCategory; ?>
                                            <?= $account_type = $ccApi->account_type($all="one", $id=(int)$default, function($account_type) {
                                                return $account_type[0]['pdd_info'];
                                            }); ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Applicant Name</th>
                                        <th><?= @$account_info['pdc_applicant_first_name']; ?> <?= @$account_info['pdc_applicant_surname']; ?></th>
                                    </tr>
                                    <tr>
                                        <th>Applicant Gender</th>
                                        <th><?= (@$account_info['pdc_applicant_gender'] == 1) ? "Male" : "Female"; ?></th>
                                    </tr>
                                    <tr>
                                        <th>Applicant Phone</th>
                                        <th><a
                                                href="tel:<?= @$account_info['pdc_applicant_phone']; ?>"><?= @$account_info['pdc_applicant_phone']; ?></a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Applicant E-mail</th>
                                        <th><a
                                                href="mailto:<?= @$account_info['pdc_applicant_email']; ?>"><?= @$account_info['pdc_applicant_email']; ?></a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Applicant Role</th>
                                        <th>
                                            <?php
                                                if (AccountInfoCategory !== 10) {
                                                    echo $ccApi->designation($all=false, $id=@$account_info['pdc_applicant_designation_role'], function($designation) {
                                                        return @$designation[0]['coc_leader'];
                                                    });
                                                } else {
                                                    echo $ccApi->staff_status($all=false, $id=@$account_info['pdc_applicant_designation_role'], function($designation) {
                                                        return @$designation[0]['pdd_info'];
                                                    });
                                                }
                                            ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Country</th>
                                        <th><?= $account_info['pdc_country']; ?></th>
                                    </tr>
                                    <tr>
                                        <th>State/ Province</th>
                                        <th>
                                            <?= $account_info['pdc_state_province']; ?>
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
                                        <th>Region</th>
                                        <th>
                                            <?php $region = @$account_info['pdc_region']; ?>
                                            <?= $ccApi->get_location($type="regions", $get_string=$region, function($locations) use($region) {
                                                    $at = '';
                                                    foreach ($locations as $key => $location) {
                                                        if (@(int)$location['id'] == $region) {
                                                            $at = @$location['Region'];
                                                        }
                                                    }
                                                    return @$at;
                                                }, $debug = false);
                                            ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>District</th>
                                        <th>
                                            <?php $district = @$account_info['pdc_district']; ?>
                                            <?= $ccApi->get_location($type="district", $get_string="region=$region", function($locations) use($district) {
                                                     $at = '';
                                                    foreach ($locations as $key => $location) {
                                                        if (@(int)$location['id'] == $district) {
                                                            $at = @$location['District'];
                                                        }
                                                    }
                                                    return @$at;
                                                }, $debug = false);
                                            ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Constituency</th>
                                        <th>
                                            <?php $constituency = @$account_info['pdc_constituency']; ?>
                                            <?= $ccApi->get_location($type="constituency", $get_string="region=$region&district=$district", function($locations) use($constituency) {
                                                    $at = '';
                                                    foreach ($locations as $key => $location) {
                                                        if (@(int)$location['id'] == $constituency) {
                                                            $at = @$location['Constituency'];
                                                        }
                                                    }
                                                    return @$at;
                                                }, $debug = false);
                                            ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Community</th>
                                        <th><?= @$account_info['pdc_community']; ?></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                                        <th>Subscrition Duration</th>
                                        <th>
                                            <?php $default = (int)$account_info['pdc_subscription_duration']; ?>
                                            <?= $ccApi->subscription_duration($all=false, $id=$default, function($subscription_duration) {
                                                    return @$subscription_duration[0]['pdd_info'];
                                                });
                                            ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Subscrition Date</th>
                                        <th><?= date("Y-m-d", strtotime($account_info['pdc_subscription_date'])); ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Subscrition Fee</th>
                                        <th><?= $account_info['pdc_subscription_fee']; ?>
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
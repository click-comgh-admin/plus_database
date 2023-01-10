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
                    <th>Account Type</th>
                    <th>
                        <?php $default = (int)$branch['pdc_account_type']; ?>
                        <?= $account_type = $ccApi->account_type($all="one", $id=(int)$branch['pdc_account_type'], function($account_type) {
                            return $account_type[0]['pdd_info'];
                        }); ?>
                    </th>
                </tr>
                <tr>
                    <th>Applicant Name</th>
                    <th><?= @$branch['pdc_applicant_first_name']; ?> <?= @$branch['pdc_applicant_surname']; ?></th>
                </tr>
                <tr>
                    <th>Applicant Gender</th>
                    <th><?= (@$branch['pdc_applicant_gender'] == 1) ? "Male" : "Female"; ?></th>
                </tr>
                <tr>
                    <th>Applicant Phone</th>
                    <th><a
                            href="tel:<?= @$branch['pdc_applicant_phone']; ?>"><?= @$branch['pdc_applicant_phone']; ?></a>
                    </th>
                </tr>
                <tr>
                    <th>Applicant E-mail</th>
                    <th><a
                            href="mailto:<?= @$branch['pdc_applicant_email']; ?>"><?= @$branch['pdc_applicant_email']; ?></a>
                    </th>
                </tr>
                <tr>
                    <th>Applicant Role</th>
                    <th>
                        <?php
                            if ((int)$branch['pdc_account_type'] !== 10) {
                                echo $ccApi->designation($all=false, $id=@$branch['pdc_applicant_designation_role'], function($designation) {
                                    return @$designation[0]['coc_leader'];
                                });
                            } else {
                                echo $ccApi->staff_status($all=false, $id=@$branch['pdc_applicant_designation_role'], function($designation) {
                                    return @$designation[0]['pdd_info'];
                                });
                            }
                        ?>
                    </th>
                </tr>
                <tr>
                    <th>Country</th>
                    <th><?= $branch['pdc_country']; ?></th>
                </tr>
                <tr>
                    <th>State/ Province</th>
                    <th>
                        <?= $branch['pdc_state_province']; ?>
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
                        <?php $region = @$branch['pdc_region']; ?>
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
                        <?php $district = @$branch['pdc_district']; ?>
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
                        <?php $constituency = @$branch['pdc_constituency']; ?>
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
                    <th><?= @$branch['pdc_community']; ?></th>
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
                        <?php $default = (int)$branch['pdc_subscription_duration']; ?>
                        <?= $ccApi->subscription_duration($all=false, $id=$default, function($subscription_duration) {
                                return @$subscription_duration[0]['pdd_info'];
                            });
                        ?>
                    </th>
                </tr>
                <tr>
                    <th>Subscrition Date</th>
                    <th><?= date("Y-m-d", strtotime($branch['pdc_subscription_date'])); ?>
                    </th>
                </tr>
                <tr>
                    <th>Subscrition Fee</th>
                    <th><?= $branch['pdc_subscription_fee']; ?>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="row justify-content-center">
    <?php require_once BASE_DIRECTORY."/account/subpages/settings/status_indicator_edit.php"; ?>
    <div class="col-md-12 col-lg-7">
        <div class="card">
            <div class="card-header">
                <i>Status Indicator</i> // <?= @$account_info['pdc_name']; ?>
                <div class="btn-actions-pane-right">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>settings">Main</a>
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>logo">Logo</a>
                        <a class="btn-shadow btn btn-danger show" href="<?= settings_BaseUrl; ?>leaders">Leaders</a>
                        <a class="btn-shadow btn btn-success show active" href="<?= settings_BaseUrl; ?>status-indicator">Status Indicator</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <?php
                    // print_r($account_info);
                ?>
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php //print_r($status_indicator); ?>
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
                                        <th>Status Indicator</th>
                                        <th>
                                            <?php 
                                                $get_string = "active_status/indicator?id=".$status_indicator['pdad_is_active_staus_by'];
                                                echo $_status_indicator = $ccApi->fetch_from($get_string, function($status_indicator)
                                                {
                                                    return isset($status_indicator[0]['pdad_active_staus'])
                                                        ? $status_indicator[0]['pdad_active_staus']: "";
                                                }, $debug = false);
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
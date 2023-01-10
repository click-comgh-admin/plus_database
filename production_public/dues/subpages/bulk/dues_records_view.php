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
                                                    <td>
                                                        <a href="<?= dues_BaseUrl; ?>bulk-pay?dues=<?= $type['pddt_id']; ?>" class="btn btn-info btn-block btn-sm" type="button">
                                                            <span class="font-weight-bold">View <?= $type['pddt_type']; ?> Records</span>
                                                        </a>
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
<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="card">
            <div class="card-header">
                <i>Update <?= @$member['pdm_firstname'] . " " . @$member['pdm_surname']; ?>'s Committees/ Sub-Committee</i>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row justify-content-center">
                            <div class="col-md-12">
                                <div class="card-title">
                                    <i>Current Subcommittee(s): <u><?= @open_modal_subcommittees(@$member['staff_subcommittees'], $account_id, $ccApi); ?></u></i>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <?php require_once(BASE_DIRECTORY."/subpages/membership/forms/edit_pages-subcommittees.php"); ?>
                            </div>
                        </div>
                    </div>
                    <div class="border border-primary shadow shadow-lg p-0 pt-1 col-md-12 my-2"></div>
                </div>
            </div>
            <div class="card-footer d-block">
            </div>
        </div>
    </div>
</div>
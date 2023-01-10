<div class="col-md-12 px-0 table-responsive">
    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
        <thead>
            <tr>
                <th style="white-space: nowrap;"><span class="pe-7s-check"></span></th>
                <th style="white-space: nowrap;">Overtime Currency</th>
                <th style="white-space: nowrap;">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
                foreach ($currency as $key => $cur) { ?>
                    <tr>
                        <th>#</th>
                        <td>
                            <?= (isset($cur['pdt_currency']))? $cur['pdt_currency']: "--"; ?>
                        </td>
                        <td>
                            <?= edit_btn($cur, $account_id, $user_id, "Edit This Currency", "btn btn-sm m-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                            <?php 
                                $cur_id = $cur['pdt_id'];
                                delete_btn($cur_id, $account_id, $user_id, "m-1 btn btn-sm btn-danger shadow"); 
                            ?>
                        </td>
                    </tr>
                <?php }
            ?>
        </tbody>
    </table>
</div>
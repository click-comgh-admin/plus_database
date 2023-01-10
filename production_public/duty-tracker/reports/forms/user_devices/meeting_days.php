<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "meeting_days") {
            define("POST_URL_ALT", API_BASE_URL."attendance/clients/settings/meeting_days");
            require_once 'meeting_days - processing.php';
        }
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="meeting_days" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Set Meeting Day(s)";
                        $id_name = "meeting_day";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        if (empty($days)) { ?>
                            <h4 class="text-muted">No Days Entered.</h4>
                        <?php } else { ?>
                            <div class="col-md-12 px-0 table-responsive">
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th style="white-space: nowrap;">Days</th>
                                            <th style="white-space: nowrap;" class="text-center"><span class="pe-7s-check"></span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                            foreach ($days as $day_key => $day) { ?>
                                                <tr>
                                                    <td class="text-center p-0">
                                                        <?= (int)$day_key + 1; ?>
                                                    </td>
                                                    <td class="p-0">
                                                        <?= $day['pdad_day']; ?>
                                                    </td>
                                                    <td class="text-center">
                                                        <?php
                                                            $isChecked = (in_array($day['pdad_id'], $MD)) ? 'checked="true"' : "";
                                                        ?>
                                                        <div class="custom-checkbox custom-control">
                                                            <input class="custom-control-input" type="checkbox" name="day_check_<?= $day['pdad_id']; ?>" id="day_check_<?= $day['pdad_id']; ?>" <?= $isChecked; ?> />
                                                            <label class="custom-control-label" for="day_check_<?= $day['pdad_id']; ?>">Select</label>
                                                        </div>	
                                                        <input type="hidden" name="<?= $id_name; ?>[]" value="<?= $day['pdad_id']; ?>" />
                                                    </td>
                                                </tr>
                                            <?php }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        <?php }
                    ?>
                </div>
            </div>
        </div>
        <div class="col-md-12 mt-3">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Set Meeting Days</button>
                </div>
            </div>
        </div>
    </div>
    
</form>

                                        <!--  -->
<?php
    $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
        return $members;
    }, $debug = 0); 
    // print_r($member);
    if (empty($pickupInfo)) { ?>
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            No Pickup Record Found for <span class="text-info ml-1"> <?= $member['pdm_firstname']; ?> <?= $member['pdm_surname']; ?> </span>, Create New.
        </div>
        <div class="card-body mb-4">
            <?php require_once BASE_DIRECTORY.'/school/pick-up/forms/home-create_form.php'; ?>
        </div>
    <?php } else {
        $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$pickupInfo['_date_'])));

        $created_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$pickupInfo['pdsc_created_by'],
        function ($info) {
            return @$info[0];
        });

        $updated_TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime(@$pickupInfo['_update_date_'])));

        $updated_by = $ccApi->user_info($type = "client", $account_id, $all="one_user", $id=$pickupInfo['pdsc_updated_by'],
        function ($info) {
            return @$info[0];
        }); ?>
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            <span class="text-info"> <?= $member['pdm_firstname']; ?> <?= $member['pdm_surname']; ?> </span>' Pickup Data
            <div class="btn-actions-pane-right">
                <div class="btn-group-sm nav btn-group" role="group">
                    <a class="btn-shadow btn btn-info show active" href="#pickup_data_info_tab" data-toggle="tab">Pickup Data</a>
                    <?= show_info_btn($pickupInfo, $created_by, $TimeAgo, $updated_by, $updated_TimeAgo, "btn-shadow btn btn-info"); ?>
                    <a class="btn-shadow btn btn-warning show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_pickup_data")) ? " active" : ""; ?>" href="#edit_pickup_data_tab" data-toggle="tab">Edit</a>
                    <?= delete_btn($pickupInfo['pdsc_id'], $member_id, $account_id, $user_id, "btn-shadow btn btn-danger"); ?>
                </div>
            </div>
        </div>
        <div class="card-body p-0 mb-4">
            <div class="tab-content">
                <div class="tab-pane show active" id="pickup_data_info_tab" role="tabpanel">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-6">
                            <div class="table-responsive">
                                <table
                                    class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="white-space: nowrap;">-</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="p-0 w-25"
                                                background-image="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= @$member['pdm_profile_picture']; ?>">
                                                <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-c enter ml-auto mr-auto">
                                                            <div class="widget-content-ce nter">
                                                                <img width="150" height="150" class="rounded-circle shadow" alt="Member Image"
                                                                    src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= @$member['pdm_profile_picture']; ?>">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="p-0">
                                                <table class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <th><?= $member['pdm_firstname']; ?> <?= $member['pdm_surname']; ?></th>
                                                        </tr>
                                                        <tr>
                                                            <th><b>ID: </b> 
                                                                <?php
                                                                    $get_string = "student/index_number?client_id=$account_id&member_id=$member_id";
                                                                    echo $index_number = $ccApi->school($get_string, function($index_numbers)
                                                                    {
                                                                        return @$index_numbers[0]['pdsc_index_number'];
                                                                    }, $debug = false);
                                                                ?>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th><b>Class: </b> 
                                                                <?php
                                                                    $get_string = "class/class?client_id=$account_id&id=".$pickupInfo['pdsc_class_id'];
                                                                    echo $class = $ccApi->school($get_string, function($class)
                                                                    {
                                                                        return @$class[0]['pdsc_class'];
                                                                    }, $debug = false);
                                                                ?>
                                                            </th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Pick-Up By
                                            </th>
                                            <td>
                                                <?= $pickupInfo['pdsc_pick_up_by']; ?>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Pick-Up Person's Contact
                                            </th>
                                            <td>
                                                <a href="tel:<?= $pickupInfo['pdsc_pick_up_contact']; ?>"><?= $pickupInfo['pdsc_pick_up_contact']; ?></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane show <?= (isset($_POST['add-form']) && ($_POST['add-form'] == "edit_pickup_data")) ? " active" : ""; ?>" id="edit_pickup_data_tab" role="tabpanel">
                    <h4 class="card-title px-3">Edit Pickup Info</h4>
                    <!-- <div class="row justify-content-center"> -->
                        <div class="container">
                            <?php require_once BASE_DIRECTORY.'/school/pick-up/forms/home-edit_form.php'; ?>
                        </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    <?php }
?>

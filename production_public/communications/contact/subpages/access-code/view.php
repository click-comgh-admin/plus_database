<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php
                            $get_string = "communications/clients/contact/access-code?account_id=" . AccountInfoId . "&user=" . $user_id;
                            $access_code = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                return (isset($access_code[0]))? $access_code[0]: [];
                            }, $debug=false);

                            if (isset($access_code['pdccac_id']) && !empty($access_code)) {
                                require_once Current_BaseDir."/forms/access-code/update.php";
                            } else {
                                require_once Current_BaseDir."/forms/access-code/new.php";
                            }

                            if ((bool)MyAppAccess['unlimited'] === true) {
                                $get_string = "communications/clients/contact/access-codes?account_id=" . AccountInfoId;
                                $access_codes = $ccApi->fetch_from($get_string=$get_string, function($access_code) {
                                    return $access_code;
                                }, $debug=false);
                            } else {
                                $access_codes = [$access_code];
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Contact Access Codes</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="random-access">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Admin User</th>
                                <th style="white-space: nowrap;">Access Code</th>
                                <th style="white-space: nowrap;">
                                    <span>Code Details</span>
                                    <span class="fa">Date/ Time</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach ($access_codes as $key => $access_code) {
                                    $_user_id = (isset($access_code['pdccac_user_id'])? $access_code['pdccac_user_id']: 0);
                                    $code_id = (isset($access_code['pdccac_id'])? $access_code['pdccac_id']: 0);
                                    ?>
                                    <tr class="<?= ((int)$_user_id === (int)$user_id) ? "bg-info text-white": ""; ?>" >
                                        <td style="white-space: nowrap;">
                                            <?= $ccApi->user_info($type = "client", $account_id = null, $all="one_user", 
                                                $id=$user_id, function ($info)
                                                {
                                                    if (empty($info) || (isset($info['error']) && ($info['error'] == 1))) {
                                                        return "Unknown??";
                                                    } else {
                                                        return @$info[0]['pdcu_firstname'] . " " . @$info[0]['pdcu_surname'];
                                                    }
                                                }); 
                                            ?>
                                        </td>
                                        <td style="white-space: nowrap;">
                                            <?= !empty($access_code) ? @$access_code['pdccac_code']: "-"; ?>
                                        </td>
                                        <td styl e="white-space: nowrap;">
                                            <?= date('Y/ m/ d @ H:i A', strtotime(@$access_code['pdccac_update'])); ?>
                                            <?php
                                                if (!empty($access_code)) {
                                                    $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($access_code['pdccac_update'])));
                                                }
                                            ?>
                                            <i><?= !empty($access_code) ? @$TimeAgo->get(): "-"; ?></i><br>
                                            <button type="button" class="btn btn-sm m-1 btn-danger shadow"
                                                btn-submit-post=<?= json_encode(["access_code_id"=>$code_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Delete Contact Access Code?"
                                                btn-submit-post--url="<?= API_BASE_URL."communications/clients/contacts/contact/delete-access-code"; ?>">
                                                <span class="pe-7s-trash"> Remove</span>
                                            </button>
                                        </td>
                                    </tr>
                                <?php }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
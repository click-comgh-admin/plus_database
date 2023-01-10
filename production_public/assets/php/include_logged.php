<?php
use Subscriber\Subscriber;

global $UserLoginInfo_I;
// print_r(['$UserLoginInfo_I'=> $UserLoginInfo_I]);
$user_id = $UserLoginInfo_I->user->id ?? 0;
// print_r(['$user_id'=> $user_id]);

/** @var ClickComApi $ccApi */

$__SYSTEM_VARIABLES = [];
$ccApi->user_info($type = "client", $account_id = null,
    $all = "one_user", $id = $user_id, function ($info) use ($ccApi, $user_id) {
        global $__SYSTEM_VARIABLES;
        if (isset($info[0])) {
            $user_info = $info[0];
            $__SYSTEM_VARIABLES["user_info"] = $user_info;
            // print_r(['$__SYSTEM_VARIABLES'=>$__SYSTEM_VARIABLES]);

            if (isset($_COOKIE['pdb-branch-page']) && !empty($_COOKIE['pdb-branch-page'])) {
                // print_r($_COOKIE['pdb-branch-page']);
                $pdb_branch_page = json_decode($_COOKIE['pdb-branch-page'], 1);
                $account_id = isset($pdb_branch_page['branch_id'])
                ? $pdb_branch_page['branch_id'] : 0;
            } else {
                $account_id = $user_info['pdcu_account_id'];
            }
            $__SYSTEM_VARIABLES["account_id"] = $account_id;
            // echo $account_id;
            // print_r($user_info);

            return $ccApi->user_info($type = "client", $account_id, $all = "one_client", $id = 1,
                function ($account_info) use ($ccApi, $user_id) {
                    global $__SYSTEM_VARIABLES;
                    // print_r(['$account_info' => $account_info]);

                    if (isset($account_info['pdc_id'])) {
                        $__SYSTEM_VARIABLES["account_info"] = $account_info;
						$account_name = $account_info['pdc_name'];
                        $_account_name = json_decode($account_name, 1);

                        if (isset($_account_name['district_id'])) {
                            $get_string = "client-membership/get_district_name?did=" . $_account_name['district_id'];

                            $account_name = $ccApi->fetch_from($get_string = $get_string, function ($info) {
                                return isset($info[0]['District']) ? $info[0]['District'] : "";
                            }, $debug = false);
                        }
                        $account_info['pdc_name'] = $account_name;
                        $__SYSTEM_VARIABLES["account_name"] = $account_name;

                        define('AccountInfoId', (int) $account_info['pdc_id']);
                        $__SYSTEM_VARIABLES["AccountInfoId"] = AccountInfoId;
                        define('AccountInfoUserId', $user_id);
                        $__SYSTEM_VARIABLES["AccountInfoUserId"] = AccountInfoUserId;
                        define('AccountInfoType', (int) $account_info['pdc_account_type']);
                        $__SYSTEM_VARIABLES["AccountInfoType"] = AccountInfoType;
                        define('AccountInfoCategory', (int) $account_info['pdc_account_category']);
                        $__SYSTEM_VARIABLES["AccountInfoCategory"] = AccountInfoCategory;

                        $client_user_id = $GLOBALS['user_id'];
                        if (isset($_COOKIE['pdb-branch-page']) && !empty($_COOKIE['pdb-branch-page'])) {
                            $get_string = "page-access-levels/client_level_alt?user_id=$client_user_id";
                        } else {
                            $get_string = "page-access-levels/client_level?client_id=" . AccountInfoId . "&user_id=$client_user_id";
                        }
                        $my_access_levels = $ccApi->fetch_from($get_string, function ($pages) {
                            $access_levels = [];
                            foreach ($pages as $key => $page) {
                                if (!in_array($page['pdpcl_page_id'], $access_levels)) {
                                    array_push($access_levels, $page['pdpcl_page_id']);
                                }
                            }
                            return $access_levels;
                        }, $debug = false);

                        $get_string = "page-access-levels/clients";
                        $appPages = $ccApi->fetch_from($get_string, function ($pages) {
                            return $pages;
                        }, $debug = false);
                        define('MyAccessLevels', $my_access_levels);
                        $__SYSTEM_VARIABLES["my_access_levels"] = MyAccessLevels;
                        $__SYSTEM_VARIABLES["MyAccessLevels"] = MyAccessLevels;
                        define('AppPages', $appPages);
                        $__SYSTEM_VARIABLES["AppPages"] = AppPages;
                        $__SYSTEM_VARIABLES["appPages"] = AppPages;
                        define('MyAppAccess', (count(AppPages) === count(MyAccessLevels)) ? ([
                            "unlimited" => true, "access" => "unlimited"]) : ([
                            "unlimited" => false, "access" => "limited"])
                        );
                        $__SYSTEM_VARIABLES["MyAppAccess"] = AppPages;

                        $get_string = "client-membership/branch/is_branch?client_id=" . AccountInfoId;
                        $is_branch = $ccApi->fetch_from($get_string = $get_string, function ($is_branch) use ($ccApi) {
                            $_is_branch = isset($is_branch[0]) ? true : false;

                            $get_string = "client-membership/branch/branch?client_id=" . AccountInfoId;
                            $branch = $ccApi->fetch_from($get_string = $get_string, function ($branch) {
                                $branch_account = isset($branch[0]) ? true : false;
                                return [
                                    "branch_account" => $branch_account,
                                    "account" => isset($branch[0]) ? $branch[0] : [],
                                ];
                            }, $debug = false);
                            return [
                                "is_branch" => $_is_branch,
                                "branch_account" => isset($is_branch[0]['pdcbl_client']) ? $is_branch[0]['pdcbl_client'] : AccountInfoId,
                                "branch" => $branch,
                            ];
                        }, $debug = false);
                        $__SYSTEM_VARIABLES["is_branch"] = $is_branch;

                        $_account_id = isset($is_branch['branch']['account']['pdcb_client'])
                        ? $is_branch['branch']['account']['pdcb_client'] : $is_branch['branch_account'];
                        // define('_AccountInfoId', $_account_id);

                        $_account_id = (int) $account_info['pdc_id']; //Added because above was muted
                        define('_AccountInfoId', $_account_id); //Changed because above was muted
                        $__SYSTEM_VARIABLES["_AccountInfoId"] = _AccountInfoId;

                        $ccApi->client_status($all = "one", $id = $_account_id,
                            function ($acc_info) use ($account_info, $_account_id, $ccApi) {
                                global $__SYSTEM_VARIABLES;
                                if (isset($acc_info[0])) {
                                    $info = @$acc_info[0];
                                    // print_r($info);

                                    $s = new Subscriber($info, $account_info, $ccApi);
                                    $s->get();
                                    $expireDateStr = strtotime($s->expireDate);
                                    // $expireDateStr = strtotime(date("Y-m-d"));
                                    $today = date("Y-m-d");
                                    $todayStr = strtotime($today);

                                    $dateStrDiff = ($expireDateStr - $todayStr);

                                    if ($dateStrDiff <= 0) {
                                        $is_active = false;
                                    } else {
                                        $is_active = true;
                                    }

                                    $get_string = "credit/balance?account_id=$_account_id";
                                    $balance = $ccApi->communications($type = "clients", $get_string, function ($balance) {
                                        return $balance;
                                    }, $debug = false);

                                    $account_status = [
                                        "expires_in" => $s->TimeAgo->get(),
                                        "is_active" => $is_active,
                                        "subscription" => $acc_info,
                                        "credit_balance" => $balance,
                                        "upgrade" => [
                                            "month_diffs" => $s->MonthDiff,
                                            "duration" => isset($acc_info[0]['pdcp_duration']) ? $acc_info[0]['pdcp_duration'] : 0,
                                        ],
                                    ];
                                } else {
                                    $account_status = [
                                        "expires_in" => "",
                                        "is_active" => false,
                                        "subscription" => [],
                                        "credit_balance" => [],
                                        "upgrade" => [
                                            "month_diffs" => 0,
                                            "duration" => 0,
                                        ],
                                    ];
                                }
                                $__SYSTEM_VARIABLES["account_status"] = $account_status;
                            }
                        );
                    }
                }, false
            );
        }
    }
, false);
// print_r($__SYSTEM_VARIABLES);
$appPages = isset($__SYSTEM_VARIABLES['appPages'])? $__SYSTEM_VARIABLES['appPages']: [];
$user_info = isset($__SYSTEM_VARIABLES['user_info'])? $__SYSTEM_VARIABLES['user_info']: [];
$account_id = isset($__SYSTEM_VARIABLES['account_id'])? $__SYSTEM_VARIABLES['account_id']: 0;
$account_info = isset($__SYSTEM_VARIABLES['account_info'])? $__SYSTEM_VARIABLES['account_info']: [];
$account_status = isset($__SYSTEM_VARIABLES['account_status'])? $__SYSTEM_VARIABLES['account_status']: [];
$my_access_levels = isset($__SYSTEM_VARIABLES['my_access_levels'])? $__SYSTEM_VARIABLES['my_access_levels']: [];

$account_name = isset($__SYSTEM_VARIABLES['account_name'])? $__SYSTEM_VARIABLES['account_name']: "";
$AccountInfoId = isset($__SYSTEM_VARIABLES['AccountInfoId'])? $__SYSTEM_VARIABLES['AccountInfoId']: 0;
$AccountInfoUserId = isset($__SYSTEM_VARIABLES['AccountInfoUserId'])? $__SYSTEM_VARIABLES['AccountInfoUserId']: 0;
$AccountInfoType = isset($__SYSTEM_VARIABLES['AccountInfoType'])? $__SYSTEM_VARIABLES['AccountInfoType']: 0;
$AccountInfoCategory = isset($__SYSTEM_VARIABLES['AccountInfoCategory'])? $__SYSTEM_VARIABLES['AccountInfoCategory']: 0;
$MyAccessLevels = isset($__SYSTEM_VARIABLES['MyAccessLevels'])? $__SYSTEM_VARIABLES['MyAccessLevels']: [];
$AppPages = isset($__SYSTEM_VARIABLES['AppPages'])? $__SYSTEM_VARIABLES['AppPages']: [];
$MyAppAccess = isset($__SYSTEM_VARIABLES['MyAppAccess'])? $__SYSTEM_VARIABLES['MyAppAccess']: [];
$is_branch = isset($__SYSTEM_VARIABLES['is_branch'])? $__SYSTEM_VARIABLES['is_branch']: [];
$_AccountInfoId = isset($__SYSTEM_VARIABLES['_AccountInfoId'])? $__SYSTEM_VARIABLES['_AccountInfoId']: 0;
// echo "<pre>";
// print_r(['$account_status'=>$account_status]);
// echo "</pre>";

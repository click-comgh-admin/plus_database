<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';    

    global $ccApi;

    use Encryptor\Encryptor;
    use FileManager\FileManager;
    $fM = new FileManager();
    
    define('PAGE_TITLE', "Home");
    define('PAGE_DESC', "Home Page.");

    define("_Webpack_Pack_", Get_Webpack_Tags(
        'home/dashboard', prefix: IN_PRODUCTION_MODE_PREFIX)
    );
?>
<!doctype html>
<html lang="en">
    <?php 
        $cssFiles = '';
        foreach (_Webpack_Pack_['css'] as $key => $cssFile) {
            $cssFiles .= $cssFile;
        }
        define('WEB_PACK_CSS_FILES', $cssFiles);
        require_once 'assets/php/page_components/header/head.php';
    ?>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once 'assets/php/page_components/header/navbar.php'; ?>
            <?php require_once 'assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once 'assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-car icon-gradient bg-mean-fruit">
                                        </i>
                                    </div>
                                    <div>
                                        <?= PAGE_TITLE; ?>
                                        <div class="page-title-subheading"><?= PAGE_DESC; ?></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pdb-dashboard-index></pdb-dashboard-index>
                        <?php /** <div class="row">
                            <div class="col-md-12 col-xl-4">
                                <div class="card mb-3 widget-content bg-midnight-bloom">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Members</div>
                                            <div class="widget-subheading">Total Members</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <?php   
                                                @$get_string = @"client_id=$account_id";
                                                // print_r(['$get_string' => $get_string]);
                                                @$total_members = @$ccApi->client_members($type="count", $get_string = $get_string, function ($members) {
                                                        
                                                    // print_r(['$members' => $members]);
                                                    return @$members;
                                                }, $debug = false); 
                                                // print_r(['$total_members' => $total_members]);
                                                $number_of_members = isset($total_members['data'][0]['total_members'])? @$total_members['data'][0]['total_members']: 0;
                                                // print_r(['$number_of_members' => $number_of_members]);
                                            ?>
                                            <div class="widget-numbers text-white"><span><?= $number_of_members > 99? $number_of_members: $number_of_members; ?></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-arielle-smile">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Contacts</div>
                                            <div class="widget-subheading">Total Contacts</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <?php
                                                $get_string = @"contacts?account_id=$account_id";
                                                $total_contacts = @$ccApi->communications($type="clients", $get_string, function($contacts)
                                                {
                                                    return @$contacts;
                                                }, $debug = false);
                                            ?>
                                            <div class="widget-numbers text-white"><span><?= is_array(@$total_contacts)? count(@$total_contacts): 0; ?></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-grow-early">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Administrative Users</div>
                                            <div class="widget-subheading">Total Administrative Users</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <?php
                                                $client_users = @$ccApi->user_info($type = "client", $account_id = $account_id,
                                                    $all="all_client_users", $id=1, function ($info) {
                                                    return @$info;
                                                });
                                            ?>
                                            <div class="widget-numbers text-white"><span><?= count(@$client_users); ?></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-6">
                                <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <?php
                                                $get_string = "clients/spaces/all?account_id=$account_id";
                                                $spaces = $ccApi->file_manager($get_string, function($spaces)
                                                {
                                                    return isset($spaces[0])? $spaces[0]: [];
                                                }, $debug = false);
                                                $pdcfmf_space = @isset($spaces['pdcfmf_space'])? $spaces['pdcfmf_space']: 1;
                                                $pdcfmf_space_used = @isset($spaces['pdcfmf_space_used'])? $spaces['pdcfmf_space_used']: 1;
                                                $fmSpacePercent = @(int)((floatval($pdcfmf_space_used)*100)/floatval($pdcfmf_space));
                                                $progressBarVar = ($fmSpacePercent <= 25) ? "success": "danger";
                                                $progressBarVar = ($fmSpacePercent > 25 && $fmSpacePercent <= 50) ? "info": $progressBarVar;
                                                $progressBarVar = ($fmSpacePercent > 50 && $fmSpacePercent <= 75) ? "warning": $progressBarVar;

                                                if ($fmSpacePercent <= 25) {
                                                    $progressBarVar = "love-kiss";
                                                    $progressTxt = "danger";
                                                } else if ($fmSpacePercent > 25 && $fmSpacePercent <= 50) {
                                                    $progressBarVar = "sunny-morning";
                                                    $progressTxt = "warning";
                                                } else if ($fmSpacePercent > 50 && $fmSpacePercent <= 75) {
                                                    $progressBarVar = "malibu-beach";
                                                    $progressTxt = "info";
                                                } else {
                                                    $progressBarVar = "happy-green";
                                                    $progressTxt = "success";
                                                }
                                            ?>
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left pr-2 fsize-1">
                                                    <div class="widget-numbers mt-0 fsize-3 text-<?= $progressTxt; ?>"><?= $fmSpacePercent; ?>%</div>
                                                </div>
                                                <div class="widget-content-right w-100">
                                                    <div class="progress-bar-xs progress">
                                                        <div class="progress-bar bg-<?= $progressBarVar ?>" role="progressbar" aria-valuenow="<?= $fmSpacePercent; ?>" aria-valuemin="0" aria-valuemax="100" style="width: <?= $fmSpacePercent; ?>%;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-left fsize-1">
                                                <?php
                                                    $pdcfmf_space_used = isset($spaces['pdcfmf_space_used'])? $spaces['pdcfmf_space_used']: 0;
                                                    $pdcfmf_space = isset($spaces['pdcfmf_space'])? $spaces['pdcfmf_space']: 0;
                                                ?>
                                                <div class="text-muted opacity-6">File Manager Space <i>// <?= $fM->storage_space($pdcfmf_space_used); ?> of <?= $fM->storage_space($pdcfmf_space); ?></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                                <div class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <?php
                                                $account_subscriptions = @$account_status['subscription'];
                                                $membershipMax = @$account_subscriptions[0]['pdcp_membership_size'];
                                                $membershipMax = @$ccApi->membership_size($all=false, $id=$membershipMax, function($membership_size) {
                                                    return @$membership_size[0]['pdd_info'];
                                                });
                                                $membershipMax = explode("-", $membershipMax);
                                                $membershipMax = end($membershipMax);
                                                $membershipMax = trim($membershipMax);
                                                $membershipRegPercent = @(int)(((int)$number_of_members*100)/(int)$membershipMax);
                                                
                                                if ($membershipRegPercent <= 25) {
                                                    $progressBarVar = "happy-green";
                                                    $progressTxt = "success";
                                                } else if ($membershipRegPercent > 25 && $membershipRegPercent <= 50) {
                                                    $progressBarVar = "malibu-beach";
                                                    $progressTxt = "info";
                                                } else if ($membershipRegPercent > 50 && $membershipRegPercent <= 75) {
                                                    $progressBarVar = "sunny-morning";
                                                    $progressTxt = "warning";
                                                } else {
                                                    $progressBarVar = "love-kiss";
                                                    $progressTxt = "danger";
                                                }
                                            ?>
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left pr-2 fsize-1">
                                                    <div class="widget-numbers mt-0 fsize-3 text-<?= $progressTxt; ?>"><?= $membershipRegPercent; ?>%</div>
                                                </div>
                                                <div class="widget-content-right w-100">
                                                    <div class="progress-bar-xs progress">
                                                        <div class="progress-bar bg-<?= $progressBarVar ?>" role="progressbar" aria-valuenow="<?= $membershipRegPercent; ?>" aria-valuemin="0" aria-valuemax="100" style="width: <?= $membershipRegPercent; ?>%;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-left fsize-1">
                                                <div class="text-muted opacity-6">Member Registration Space <i>// <?= $number_of_members; ?> of <?= $membershipMax; ?></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-6">
                                <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <?php
                                                $get_string = "clients/spaces/all?account_id=$account_id";
                                                $spaces = $ccApi->file_manager($get_string, function($spaces)
                                                {
                                                    return @$spaces[0];
                                                }, $debug = false);
                                                $account_subscriptions = @$account_status['subscription'][0];
                                            ?>
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left pr-2 fsize-1">
                                                    <div class="text-muted">
                                                        <?= (@$account_subscriptions['pdcc_is_trial'] == 1) ? "Trial Activation" : "Subscription"; ?> Fee
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-left fsize-1">
                                                <div class="text-muted opacity-6">GHC <?= @$account_subscriptions['pdcp_amount']; ?></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                                <div class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="row">
                                                <div class="col-md-3 pr-2 fsize-1">
                                                    <input type="hidden" getClock__="<?= date("m/d/Y H:i", strtotime($account_subscriptions['pdcp_expire_date'])); ?>" name="">
                                                    <div class="text-muted">
                                                        <?= (@$account_subscriptions['pdcc_is_trial'] == 1) ? "Trial" : "Subscription"; ?> Period Ends In:
                                                    </div>
                                                </div>
                                                <div class="col-md-9">
                                                    <ul class="countdown">
                                                        <li> <span style="background-color: #eee" class="days">00</span>
                                                            <p class="days_ref">days</p>
                                                        </li>
                                                        <li class="seperator">|</li>
                                                        <li> <span style="background-color: #eee" class="hours">00</span>
                                                            <p class="hours_ref">hours</p>
                                                        </li>
                                                        <li class="seperator">|</li>
                                                        <li> <span style="background-color: #eee" class="minutes">00</span>
                                                            <p class="minutes_ref">minutes</p>
                                                        </li>
                                                        <li class="seperator">|</li>
                                                        <li> <span style="background-color: #eee" class="seconds">00</span>
                                                            <p class="seconds_ref">seconds</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="main-card mb-3 card">
                                    <div class="card-header">Recent Users 
                                    </div>
                                    <pdb-dashboard-index></pdb-dashboard-index>
                                    <div class="d-block text-center card-footer">                                      
                                        <a href="<?= CLIENT_BASE_URL; ?>member/members" class="btn-wide btn btn-success">Members</a>
                                    </div>
                                </div>
                            </div>
                        </div> */ ?>
                    </div>
                    <?php require_once 'assets/php/page_components/footer/footer.php'; ?>
                </div>
            </div>
        </div>
        <?php 
            $jsFiles = '';
            foreach (_Webpack_Pack_Shared_['js'] as $key => $jsFile) {
                $jsFiles .= $jsFile;
            }
            foreach (_Webpack_Pack_['js'] as $key => $jsFile) {
                $jsFiles .= $jsFile;
            }
            define('WEB_PACK_JS_FILES', $jsFiles);
            require_once 'assets/php/page_components/footer/js.php';
        ?>
    </body>
</html>
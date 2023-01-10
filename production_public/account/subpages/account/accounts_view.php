<?php
    use Encryptor\Encryptor;

    $encryptor = new Encryptor("clients", md5("clients"));

    $client_users = $ccApi->user_info($type = "client", $account_id = $account_id, $all="all_client_users", $id=$user_id, function ($info)
	{
		return @$info;
	});
    
?>

<pre><?php //print_r(@$client_users); ?></pre>
<div class="card">
    <div class="card-header">
        Account Users
        <div class="btn-actions-pane-right">
            <a href="<?= account_BaseUrl; ?>accounts?add" class="btn btn-sm btn-info">Add User</a>
        </div>
    </div>
    <div class="card-body">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <div class="table-responsive">
                    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th>Member Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach ($client_users as $key => $client_user) { ?>
                                    <tr>
                                        <td style="text-align: center;" class="p-0" background-image="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= $client_user['pdcu_profile_picture']; ?>">
                                            <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-center ml-auto mr-auto">
                                                        <div class="widget-content-center">
                                                            <img width="100" height="100" class="rounded-circle shadow" alt="Contact Image"
                                                                src="<?= FILE_BUCKET_BASE_URL; ?>files/clients/profile-picture/<?= $client_user['pdcu_profile_picture']; ?>">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-0">
                                            <table class="align-middle mb-0 table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th class="text-justify"><?= $client_user['pdcu_firstname'] ." ". $client_user['pdcu_surname']; ?></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <?php
                                                                $user_id = $client_user['pdcu_id'];
                                                                $user_id = $encryptor->encrypt($user_id);
                                                            ?>
                                                            <a href="<?= account_BaseUrl; ?>accounts?user=<?= $user_id; ?>" class="btn btn-success btn-sm" type="button">Profile Details</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <b>Status: </b> 
                                                            <span class="badge badge-info">
                                                                <?=  
                                                                    $active_status = $ccApi->active_status($all="one", $id=$client_user['pdcu_status'],function($active_status) {
                                                                        return @$active_status[0]['pdd_info'];
                                                                    });
                                                                ?>
                                                            </span><br class="m-0 p-0">
                                                            <b>Access: </b> 
                                                            <span class="badge badge-warning">
                                                                <?php
                                                                    $get_string = "page-access-levels/client_level?client_id=".AccountInfoId."&user_id=".$client_user['pdcu_id'];
                                                                    $user_access_levels = $ccApi->fetch_from($get_string, function($pages)
                                                                    {
                                                                        $access_levels = [];
                                                                        foreach ($pages as $key => $page) {
                                                                            if (!in_array($page['pdpcl_page_id'], $access_levels)) {
                                                                                array_push($access_levels, $page['pdpcl_page_id']);
                                                                            }
                                                                        }
                                                                        return $access_levels;
                                                                    }, $debug=false);
                                                                    if (count($appPages) === count($user_access_levels)) {
                                                                        echo "Unlimited";
                                                                    } else {
                                                                        echo "Limited";
                                                                    }
                                                                ?>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr><td class="pt-1 pb-0 bg-light"></td><td class="pt-1 pb-0 bg-light"></td></tr>
                                <?php }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="card-footer">

    </div>
</div>

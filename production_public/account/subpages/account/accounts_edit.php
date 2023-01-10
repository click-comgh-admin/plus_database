<?php
    // use Encryptor\Encryptor;

    // $encryptor = new Encryptor("clients", md5("clients"));
    // $client_user_id = @$_GET['user'];
    // $user_id_ = (int)$encryptor->decrypt($client_user_id);
    $client_user_id = $_GET['user'] | "";
    $user_id_ = base64_decode($client_user_id);

    $client_user = $ccApi->user_info($type = "client", $account_id = $account_id, $all="one_client_user", $id=$user_id_, function ($info)
	{
		return isset($info[0]) ? @$info[0] : [];
	});
    // print_r(['$user_id_'=> $user_id_, '$client_user'=>$client_user]);
    
?>
<div class="row justify-content-center">
    <?php
        if (strtolower($_GET['edit']) == "photo") { ?>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-muted card-title"><i>Crop <?= @$client_user['pdcu_firstname'] . " " . @$client_user['pdcu_surname']; ?>'s Image</i></h5>
                        <div class="row justify-content-center p-0 m-0" upload-preview-crop--preview="profile-picture">
                            <img class="container img-fluid" src="<?= setUpClientImage(@$client_user['pdcu_profile_picture']); ?>"/>
                        </div>
                    </div>
                    <div class="card-footer d-block">
                        <?php require_once(BASE_DIRECTORY."/account/forms/account/edit/edit_pages-photo-alt.php"); ?>
                    </div>
                </div>
            </div>
        <?php } else if (strtolower($_GET['edit']) == "info") { ?>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <i>Update <?= @$client_user['pdcu_firstname'] . " " . @$client_user['pdcu_surname']; ?>'s Main Info</i>
                    </div>
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <?php 
                                    if (AccountInfoCategory === 10) {
                                        require_once(BASE_DIRECTORY."/account/forms/account/edit/edit-district_pages-main-alt.php");
                                    } else {
                                        require_once(BASE_DIRECTORY."/account/forms/account/edit/edit_pages-main-alt.php");
                                    }
                                ?>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-block">
                    </div>
                </div>
            </div>
        <?php } else if (strtolower($_GET['edit']) == "password") { ?>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <i>Update <?= @$client_user['pdcu_firstname'] . " " . @$client_user['pdcu_surname']; ?>'s Password</i>
                    </div>
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <?php require_once(BASE_DIRECTORY."/account/forms/account/edit/edit_pages-password-alt.php"); ?>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-block">
                    </div>
                </div>
            </div>
        <?php }
    ?>
</div>
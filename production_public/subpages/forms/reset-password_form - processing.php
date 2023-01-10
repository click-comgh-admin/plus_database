<?php
    // print_r($_POST);
	$reset_password = $ccApi->reset_password($all="client", $post=$_POST, function($reset_password) {
		return $reset_password;
    });

    // print_r($reset_password);
    
    if ($reset_password['error'] == true) { ?>
        <div class="alert alert-warning alert-dismissible fade show shadow shadow-lg pb-0" role="alert">
            <strong class="text-danger">MSG!</strong>
            <?php 
                if (isset($reset_password['data'])) {
                    $data = $reset_password['data'];
                    echo "<ul class='mb-0'>";
                    foreach ($data as $key => $list) {
                        echo "<li>".$list['msg']."</li>";
                    }
                    echo "</ul>";
                } else {
                    echo $reset_password['msg'];
                }
            ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <?php } else { ?>
        <div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
            <strong class="text-success">MSG!</strong> <?= $reset_password['msg']; ?>.
            <a href="<?= ClientBaseUrl; ?>login" class="icon-gradient bg-night-sky font-weight-bold">login!</a>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <?php }
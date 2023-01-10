<?php
    global $ccApi;
	$account_login = $ccApi->account_login($all="clients/login", $post=$_POST, function($account_login) {
		return $account_login;
	}, $debug = false);
	// print_r($account_login);

	if ($account_login['error'] == true) { ?>
        <div class="alert alert-warning alert-dismissible fade show shadow shadow-lg pb-0" role="alert">
            <strong class="text-danger">MSG!</strong>
            <?php 
                if (isset($account_login['data'])) {
                    $data = $account_login['data'];
                    echo "<ul class='mb-0'>";
                    foreach ($data as $key => $list) {
                        echo "<li>".$list['msg']."</li>";
                    }
                    echo "</ul>";
                } else {
                    echo $account_login['msg'];
                }
            ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <?php } else { 
        if (!isset($_COOKIE['pdb-client-user'])) {
            @setcookie("pdb-client-user", $account_login['user'], time() + 60 + 60 * 2400 * 1400, '/', NULL, NULL, TRUE);
            ob_end_flush();
        } ?>
        <div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
            <strong class="text-success">MSG!</strong> <?= $account_login['msg']; ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <script>
            setTimeout(() => {
                window.location = './';
            }, 1500);
        </script>
    <?php }
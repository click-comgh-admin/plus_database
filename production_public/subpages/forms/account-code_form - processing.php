<?php

    $account_code_post = $ccApi->account_code_post($update=ACTION_URL, $post=$_POST, function($account_code_post) {
		return $account_code_post;
	});

	if ($account_code_post['error'] == true) { ?>
        <div class="alert alert-warning alert-dismissible fade show shadow shadow-lg pb-0" role="alert">
            <strong class="text-danger">MSG!</strong>
            <?php 
                if (isset($account_code_post['data'])) {
                    $data = $account_code_post['data'];
                    echo "<ul class='mb-0'>";
                    foreach ($data as $key => $list) {
                        echo "<li>".$list['msg']."</li>";
                    }
                    echo "</ul>";
                } else {
                    echo $account_code_post['msg'];
                }
            ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <?php } else { ?>
        <div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
            <strong class="text-success">MSG!</strong> <?= $account_code_post['msg']; ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <script>
            setTimeout(() => {
                window.location = './account-code';
            }, 1500);
        </script>
    <?php }
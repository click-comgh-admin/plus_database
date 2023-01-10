<?php

    $sms_id_post = $ccApi->account_sms_id_post($update=ACTION_URL, $post=$_POST, function($sms_id_post) {
		return $sms_id_post;
	});

	if ($sms_id_post['error'] == true) { ?>
        <div class="alert alert-warning alert-dismissible fade show shadow shadow-lg pb-0" role="alert">
            <strong class="text-danger">MSG!</strong>
            <?php 
                if (isset($sms_id_post['data'])) {
                    $data = $sms_id_post['data'];
                    echo "<ul class='mb-0'>";
                    foreach ($data as $key => $list) {
                        echo "<li>".$list['msg']."</li>";
                    }
                    echo "</ul>";
                } else {
                    echo $sms_id_post['msg'];
                }
            ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <?php } else { ?>
        <div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
            <strong class="text-success">MSG!</strong> <?= $sms_id_post['msg']; ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <script>
            setTimeout(() => {
                window.location = '<?= CLIENT_BASE_URL; ?>communications/sms-id';
            }, 1500);
        </script>
    <?php }
<?php

    $post_response = $ccApi->action_post($url=POST_URL, $post=$_POST, function($post_response) {
        return $post_response;
    }, $debug=true);
    
	if ($post_response['error'] == true) { ?>
        <div class="alert alert-warning alert-dismissible fade show shadow shadow-lg pb-0" role="alert">
            <strong class="text-danger">MSG!</strong>
            <?php 
                if (isset($post_response['data'])) {
                    $data = $post_response['data'];
                    echo "<ul class='mb-0'>";
                    foreach ($data as $key => $list) {
                        echo "<li>".$list['msg']."</li>";
                    }
                    echo "</ul>";
                } else {
                    echo $post_response['msg'];
                }
            ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <?php } else { ?>
        <div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
            <a class="btn btn-info btn-sm btn-block" target="_blank" href="<?= FILE_BUCKET_BASE_URL; ?>files/<?= $post_response['msg']; ?>">
                <strong class="text-white">Download File</strong>
            </a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <?php }
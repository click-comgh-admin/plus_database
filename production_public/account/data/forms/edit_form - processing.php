<?php

    $post_response = $ccApi->action_post($url=POST_URL, $post=$_POST, function($post_response) {
        return $post_response;
    }, $debug=false);

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
            <strong class="text-success">MSG!</strong> <?= $post_response['msg']; ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <script>
            setTimeout(() => {
                window.location = '<?= customForms_BaseUrl . "data/custom-form?" . $_SERVER['QUERY_STRING']; ?>';
            }, 1500);
        </script>
    <?php }
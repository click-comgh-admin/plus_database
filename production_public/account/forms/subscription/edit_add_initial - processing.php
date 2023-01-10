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
        <div class="alert alert-success alert-dismissible fade show shadow shadow-lg pb-5" role="alert">
            <strong class="text-success">MSG!</strong> <?= $post_response['msg']; ?>.<hr>
            <a type="button" class="btn btn-lg btn-success shadow shadow-lg fa pull-right"
                href="javascript:window.open('<?= PUBLIC_BASE_URL; ?>pay?pay_token=<?= $post_response['url']; ?>', '
                    Pay On Slydepay', 'width=640, height=480, resizable, status, scrollbars=1, location')">
                Click Here To Pay
            </a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <!-- <div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
            <strong class="text-success">MSG!</strong> <?= $post_response['msg']; ?>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div> -->
        <script>
            setTimeout(() => {
                // window.location = '<?= currentPageUrl . "?" . $_SERVER['QUERY_STRING']; ?>';
            }, 1500);
        </script>
    <?php }
<?php
    $page = "add-response";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-8 col-lg-8">
                        <?php             
                            $questionId = isset($_GET['question-id'])? (int)$_GET['question-id']: 0;                
                            $get_string = "system-questions/question?question-id=$questionId&client-id=".AccountInfoId;
                            $question = $ccApi->fetch_from($get_string, function ($questions) {
                                return isset($questions[0]) ? $questions : [];
                            }, $debug = false);
                            
                            $get_string = "system-questions/responses?question-id=$questionId&client-id=".AccountInfoId;
                            $responses = $ccApi->fetch_from($get_string, function ($responses) {
                                return isset($responses[0]) ? $responses : [];
                            }, $debug = false);
                            
                            require_once Current_BaseDir."/forms/$page/new-form.php";
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
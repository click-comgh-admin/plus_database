<?php
    $page = "questions";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-8 col-lg-8">
                        <?php                            
                            // $get_string = "system-questions/questions?client-id=".AccountInfoId;
                            $get_string = "system-questions/registration/questions?client-id=".AccountInfoId;
                            $questions = $ccApi->fetch_from($get_string, function ($notification) {
                                return isset($notification[0]) ? $notification : [];
                            }, $debug = false);
                            
                            $get_string = "system-questions/types";
                            $question_types = $ccApi->fetch_from($get_string, function ($notification) {
                                return isset($notification[0]) ? $notification : [];
                            }, $debug = false);
                            
                            require_once Current_BaseDir."/forms/$page/new-form.php";
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
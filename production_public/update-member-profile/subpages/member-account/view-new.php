<?php
    $memberId = (int)base64_decode(@$_GET['edit']);
    // print_r(['memberId'=>$memberId]);

    $page = "member-account";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php             
                            $get_string = "membership/app/member?id=$memberId";
                            $member = $ccApi->fetch_from($get_string, function ($member) {
                                return isset($member[0]) ? $member : [];
                            }, $debug = false);

                            if (isset($member[0])) {                     
                                // $get_string = "system-questions/questions?client-id=".AccountInfoId;
                                $get_string = "system-questions/registration/questions?client-id=".AccountInfoId;
                                $questions = $ccApi->fetch_from($get_string, function ($questions) {
                                    return isset($questions[0]) ? $questions : [];
                                }, $debug = false);
                                
                                require_once Current_BaseDir."/forms/$page/new-form.php";
                            } else { ?>
                                <h1 class="fa fa-2x">No Member Data Found</h1>
                            <?php }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
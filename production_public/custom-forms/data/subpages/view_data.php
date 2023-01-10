<?php
    use CustomForm\CustomForm;
    
    $member_id = isset($_GET["member"]) ? $_GET["member"] : "";
    $member_id = $encryptor->decrypt($member_id);

    $get_string = "question_types";
    $ques_types = $ccApi->custom_form($get_string, function($question_types) {
        return @$question_types;
    }, $debug = 0);
    $cf = new CustomForm($tf, DIRECTORY, $ques_types, $method = "post");
?>
<div class="">
    <div class="main-card mb-3 card shadow">
        <?php
            $get_string = "question/form?client_id=$account_id&id=".$_GET['form'];
            $form = $ccApi->custom_form($get_string, function($form)
            {
                return @$form;
            }, $debug = false);
        ?>
        <div class="card-header">
            Form => <?= @$form[0]['pdcqq_form']; ?>
            <div class="btn-actions-pane-right">
                <a class="btn-shadow btn btn-success" href="<?= customForms_BaseUrl; ?>/data/custom-form?form=<?= $_GET['form']; ?>">Reset Data</a>
            </div>
        </div>
        <div class="card-body">
            <?php
                $get_string = "question/questions?client_id=$account_id&form_id=".$_GET['form'];
                $questions = $ccApi->custom_form($get_string, function($questions)
                {
                    return @$questions;
                }, $debug = false);
                
                $get_string = "response/response?client_id=$account_id&form_id=".$_GET['form']."&member_id=$member_id";
                $responses = $ccApi->custom_form($get_string, function($response)
                {
                    return (isset($response['error'])) ? "Enter Member Name" : @$response;
                }, $debug = false);
            ?>
            <!-- <pre><?php //print_r($responses); ?></pre> -->
            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <div class="row justify-content-center">
                        <?php
                            if (empty($responses)) { ?>
                                <h4 class="text-muted">No Data Found.</h4>
                            <?php } else {
                                if (is_array($responses)) { ?>
                                    <div class="col-md-12 col-lg-8">
                                        <div class="table-responsive">
                                            <table
                                                class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th style="white-space: nowrap;">-</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php foreach ($responses as $response_key => $response) {
                                                        $member_id = (int)$response['member'];
                                                        $response = $response['response'];
                                                        $member = $ccApi->user_info($type = "member", $account_id, $all="one_client_member", $id=$member_id, function ($members) {
                                                            return $members;
                                                        }, $debug = 0);
                                                        $member_user = $encryptor->encrypt($member_id); ?>
                                                        <tr>
                                                            <th class="p-0 w-25"
                                                                background-image="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= @$member['pdm_profile_picture']; ?>">
                                                                <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                                    <div class="widget-content-wrapper">
                                                                        <div class="widget-content-c enter ml-auto mr-auto">
                                                                            <div class="widget-content-ce nter">
                                                                                <img width="130" height="130" class="rounded-circle shadow" alt="Member Image"
                                                                                    src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= @$member['pdm_profile_picture']; ?>">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td class="p-0">
                                                                <table class="align-middle mb-0 table table-bor derless table-striped table-hover">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th><?= $member['pdm_firstname']; ?> <?= $member['pdm_surname']; ?></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th class="p-1">
                                                                                <?php 
                                                                                    $form_id = (int)$_GET['form']; 
                                                                                ?>
                                                                                <?= show_data_btn($response, $member_id, $form_id, $account_id, $user_id, $ccApi, "mx-0 ml-1 btn btn-sm btn-success shadow"); ?>
                                                                                <?php //edit_data_btn($response, $questions, $member_id, $account_id, $user_id, "Edit This Data", $ccApi, "btn btn-sm mx-0 ml-1 btn-warning shadow", $tf=$tf, $type = "sm"); ?>
                                                                                <a href="<?= customForms_BaseUrl; ?>data/custom-form?form=<?= $_GET['form']; ?>&member=<?= $member_user; ?>&edit=<?= $_GET['form']; ?>" class="btn btn-sm mx-0 ml-1 btn-warning shadow" type="button">
                                                                                    <span class="pe-7s-edit"></span>
                                                                                    <span class="d-none d-sm-block">Edit</span>
                                                                                </a>
                                                                                <?php 
                                                                                    $form_id = (int)$_GET['form']; 
                                                                                    delete_btn($form_id, $member_id, $account_id, $user_id, "mx-0 ml-1 btn btn-sm btn-danger shadow"); 
                                                                                ?>
                                                                            </th>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr><td class="pt-1 pb-0 bg-light"></td><td class="pt-1 pb-0 bg-light"></td></tr>
                                                    <?php } ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                <?php } else { ?>
                                    <h5 class="card-title text-muted mt-3 ml-3"><?= $responses; ?></h5>
                                <?php }
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
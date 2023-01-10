<?php
require_once "form.php";

$mpuForm = new MemberProfileUpdate\MemberProfileUpdate($member, $questions);
$mpuForm->loadCountries = $load_countries;
?>

<form role="form" action="<?=API_BASE_URL . "membership/app/update-member";?>" method="POST"
    make-general-posts="Update Member Profile?">
    <div class="container-fluid p-0">
        <?=$mpuForm->main_content($tf, $ccApi);?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?=AccountInfoId;?>" />
            <input type="hidden" name="member_id" value="<?=isset($member[0]['id']) ? $member[0]['id'] : 0;?>" />
        </div>
        <div class="col-lg-12 col-md-12 text-right">
            <button type="submit" class="btn btn-sm bg-night-sky text-light font-weight-bold rounded-pill">
                Update Member Profile
            </button>
        </div>
    </div>
    <hr>
</form>
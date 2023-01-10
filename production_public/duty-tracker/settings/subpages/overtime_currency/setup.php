<?php
    $get_string = "duty-tracker/overtime/currencies?account_id=".AccountInfoId;
    $currency = $ccApi->fetch_from($get_string, function($currency)
    {
        return isset($currency[0])? $currency: [];
    }, $debug = false);
                                
    function edit_btn($currency, $account_id, $user_id, $confirm_msg, $class, $tf, $type = "md") { ?>
        <button class="<?= $class; ?>" type="button" data-toggle="modal"
            open-modal--id="edit_currency-<?= $currency['pdt_id']; ?>-<?= $type; ?>"
            open-modal--title="Edit <?= ((int)AccountInfoType === 10) ? "Department": "Group"; ?>" open-modal--html='<?php 
                $currency_id = $currency['pdt_id']; 
                $currency_name = $currency['pdt_currency']; 
                require Current_BaseDir."forms/overtime_currency/edit.php";
            ?>' open-modal--buttons='
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            '>
            <span class="pe-7s-edit"></span>
            <span class="d-none d-sm-block">Edit</span>
        </button>
    <?php }

    function delete_btn($currency_id, $account_id, $user_id, $class) { ?>
        <button class="<?= $class; ?>"
            btn-submit-post=<?= json_encode(["currency_id"=>$currency_id, "client_id"=>$account_id, "admin_user_id"=>$user_id]); ?>
            btn-submit-post--confirm="Delete Currency?"
            btn-submit-post--url="<?= API_BASE_URL."duty-tracker/clients/settings/overtime/delete-currency"; ?>">
            <span class="pe-7s-trash"></span>
            <span class="d-none d-sm-block">Delete</span>
        </button>
    <?php }

    require_once Current_BaseDir."forms/overtime_currency/form.php";
?>
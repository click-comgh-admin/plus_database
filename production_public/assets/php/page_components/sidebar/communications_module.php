<li class="app-sidebar__heading">Communications</li>
<?php 
    if ((int)AccountInfoType === 5) {
        require_once "communication/mail_members.php";
        require_once "communication/mail_contacts.php";
        require_once "communication/mail_customer_care.php";
        require_once "communication/mail_branch.php";
        require_once "communication/communications_module.php";
    } else {
        require_once "communication/contact-bank_module.php";
        require_once "communication/mail_members.php";
        require_once "communication/mail_contacts.php";
        require_once "communication/mail_peers.php";
        require_once "communication/mail_customer_care.php";
        require_once "communication/mail_branch.php";
        require_once "communication/communications_module.php";
    }
?>


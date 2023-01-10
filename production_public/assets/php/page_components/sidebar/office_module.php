<li class="app-sidebar__heading"><!-- Office --> OFFICE MANAGEMENT</li>
<?PHP
    if ((int)AccountInfoType === 5) {
        require_once "office/reminder_module.php";
    } else {
        require_once "office/visitors_module.php";
        require_once "office/appointment_module.php";
        require_once "office/reminder_module.php";
    }
?>
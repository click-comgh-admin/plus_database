<?PHP
    if ((int)AccountInfoType === 1 || (int)AccountInfoType === 3) { ?>
        <li class="app-sidebar__heading">Duty Tracker</li>
        <?php require_once "duty_tracker/duty_tracker_module.php";
    }
?>
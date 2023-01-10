<?php
    $page = "print-appointments";
    $page_url = Current_BaseUrl."$page";

    $_start_date = "start_date";
    $_end_date = "end_date";

    if (isset($_GET[$_start_date])) { ?>
        <script> __set_cookies__("<?= $_start_date; ?>", "<?= $_GET[$_start_date]; ?>", $time = 2); </script>
    <?php }
    if (isset($_GET[$_end_date])) { ?>
        <script> __set_cookies__("<?= $_end_date; ?>", "<?= $_GET[$_end_date]; ?>", $time = 2); </script>
    <?php }

    $fiveDaysBefore = date("Y/m/").((int)date("d")-5);
    $today = date("Y/m/d");
    $start_date = @(isset($_COOKIE[$_start_date])) ? date("Y/m/d", strtotime($_COOKIE[$_start_date])) : $fiveDaysBefore;
    $end_date = @(isset($_COOKIE[$_end_date])) ? date("Y/m/d", strtotime($_COOKIE[$_end_date])) :$today;

    $_by_group_id = "by_group_id";
    $_group_id = "group_id";
    if (isset($_GET[$_group_id])) { 
        $by_group_id = (int)$_GET[$_group_id];
        $this_group_id = ($by_group_id == 0) ? "all": $by_group_id;
        $by_group_id = ($by_group_id == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_group_id; ?>", "<?= $this_group_id; ?>", $time = 2); </script>
    <?php } else {
        $by_group_id = @(isset($_COOKIE[$_by_group_id])) ? $_COOKIE[$_by_group_id] : 0;
        $this_group_id = @(isset($_COOKIE[$_group_id])) ? $_COOKIE[$_group_id] : "all"; 
        $by_group_id = ($by_group_id == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_group_id; ?>", "<?= (strtolower($this_group_id) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_appointment_status = "by_appointment_status";
    $_appointment_status = "appointment_status";
    if (isset($_GET[$_appointment_status])) { 
        $by_appointment_status = (int)$_GET[$_appointment_status];
        $this_appointment_status = ($by_appointment_status == 0) ? "all": $by_appointment_status;
        $by_appointment_status = ($by_appointment_status == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_appointment_status; ?>", "<?= $this_appointment_status; ?>", $time = 2); </script>
    <?php } else {
        $by_appointment_status = @(isset($_COOKIE[$_by_appointment_status])) ? $_COOKIE[$_by_appointment_status] : 0;
        $this_appointment_status = @(isset($_COOKIE[$_appointment_status])) ? $_COOKIE[$_appointment_status] : "all"; 
        $by_appointment_status = ($by_appointment_status == 0) ? 0: 1; ?>
        <script> __set_cookies__("<?= $_by_appointment_status; ?>", "<?= (strtolower($this_appointment_status) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/filter/date_filter_form.php";?>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/filter/group_filter_form.php";?>
                    </div>
                    <div class="col-md-12 col-lg-12"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Appointments</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="office_appointments_print" pt_c_by_date="1" pt_c_user="<?= $user_id; ?>"
                        pt_c_start_date="<?= $start_date; ?>" pt_c_end_date="<?= $end_date; ?>" pt_c_cid="<?= AccountInfoId; ?>" 
                        pt_c_by_appointment_status="<?= $by_appointment_status; ?>" pt_c_appointment_status="<?= $this_appointment_status; ?>" 
                        pt_c_by_group_id="<?= $by_group_id; ?>" pt_c_group_id="<?= $this_group_id; ?>">
                        <thead>
                            <tr>
                                <th>No#</th>
                                <th style="white-space: nowrap;">Name</th>
                                <th style="white-space: nowrap;">Contact</th>
                                <th style="white-space: nowrap;">E-mail</th>
                                <th style="white-space: nowrap;">Address</th>
                                <th style="white-space: nowrap;">Organization</th>
                                <th style="white-space: nowrap;"><sapn class="d-none">Host(s)</sapn></th>
                                <th style="white-space: nowrap;"><sapn class="d-none">Other Hosts</sapn></th>
                                <th style="white-space: nowrap;">Host Department</th>
                                <th style="white-space: nowrap;">Appointment Status</th>
                                <th style="white-space: nowrap;">Date</th>
                                <th style="white-space: nowrap;">Start Time</th>
                                <th style="white-space: nowrap;">End Time</th>
                                <th style="white-space: nowrap;"><sapn class="d-none">Meeting Agenda</sapn></th>
                                <th style="white-space: nowrap;"><sapn class="d-none">Entered By</sapn></th>
                                <th style="white-space: nowrap;"><sapn class="d-none">Entry Date</sapn></th>
                                <th style="white-space: nowrap;"><sapn class="d-none">Updated By</sapn></th>
                                <th style="white-space: nowrap;"><sapn class="d-none">Update Date</sapn></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
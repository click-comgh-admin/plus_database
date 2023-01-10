<div class="d-flex justify-content-between">
    <h5 class="card-title pt-2 mb-0">View Duty Info</h5>
</div>
<?php 
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    define('AccountDutyId', (int)@$_GET['show-duty']);
    
    $get_string = "duty-tracker/duties/duty-info?client_id=".AccountInfoId."&id=".AccountDutyId;
    $dutyInfo = $ccApi->fetch_from($get_string=$get_string, function($dutys) {
        return isset($dutys['duty'])? $dutys: [];
    }, $debug = false);
    // print_r($dutyInfo);
?>
<div class="card my-2">
    <div class="card-header p-1 h-25">
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Duty</th>
                    <th style="white-space: nowrap;">Created On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="white-space: nowrap;">
                            <?= isset($dutyInfo['duty']['pdt_duty'])
                                ? $dutyInfo['duty']['pdt_duty']: ""; ?>
                        </th>
                        <th style="white-space: nowrap;">
                            <?= isset($dutyInfo['duty']['pdt_date'])
                                ? date("Y-m-d", strtotime($dutyInfo['duty']['pdt_date'])): ""; ?>
                        </th>
                    </tr>
                    <tr>
                        <th style="white-space: nowrap;" colspan="2">
                            <?php
                                $overtime = isset($dutyInfo['duty']['pdt_overtime']) 
                                    ? (int)$dutyInfo['duty']['pdt_overtime']: 0;

                                $get_string = "duty-tracker/overtime/this-overtime?client_id=".AccountInfoId."&id=$overtime";
                                $overtime = $ccApi->fetch_from($get_string=$get_string, function($overtime) {
                                    return isset($overtime[0])? $overtime[0]: [];
                                }, $debug = false);
                                
                                $overtime = isset($overtime['pdt_max_minutes'])
                                    ? getHoursFromMins($overtime['pdt_max_minutes']): "No Overtime";
                            ?>
                            Overtime => <?= $overtime; ?>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="card-body p-1">
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Duty Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="white-space: nowrap;">
                            <?= isset($dutyInfo['duty']['pdt_duty_details'])
                                ? multilineText($dutyInfo['duty']['pdt_duty_details']): ""; ?>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="card-body p-1">
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Start Date</th>
                        <th style="white-space: nowrap;">End Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="white-space: nowrap;">
                            <?= isset($dutyInfo['duty']['pdt_start_date'])
                                ? date("Y-m-d", strtotime($dutyInfo['duty']['pdt_start_date'])): ""; ?>
                        </th>
                        <th style="white-space: nowrap;">
                            <?= isset($dutyInfo['duty']['pdt_end_date'])
                                ? date("Y-m-d", strtotime($dutyInfo['duty']['pdt_end_date'])): ""; ?>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <?php
        if (isset($dutyInfo['attachments'])) {
            $attachments = json_encode($dutyInfo['attachments']);
            $attachments = str_replace("pdt_", "pdccmc_", $attachments);
            $attachments = json_decode($attachments, 1); ?>
            <div class="card-body p-1">
                <div class="table-responsive">
                    <table class="mb-0 table table-striped table-hover">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th style="white-space: nowrap;">Attachments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style="white-space: nowrap;">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <?php
                                                $MailAttachment->files($attachments, 10000, ["col"=>"col-md-3", "width"=>"50%"], true, false);
                                            ?>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        <?php }
    ?>
    <?php /*
    <div class="card-footer p-1">
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Group</th>
                        <th style="white-space: nowrap;">Sub-Group</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-0" style="white-space: nowrap;">
                            <?php
                                $_saved_groups = isset($dutyInfo['group_assignment'])
                                    ? $dutyInfo['group_assignment']: [];
                                $saved_groups = [];
                                foreach ($_saved_groups as $key => $_sg) {
                                    if (!in_array($_sg['pdama_assign_id'], $saved_groups)) {
                                        array_push($saved_groups, $_sg['pdama_assign_id']);
                                    }
                                }
                                $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                                echo $ccApi->fetch_from($get_string=$get_string, function($groups) use($saved_groups) {
                                    $groups = isset($groups[0])? $groups: [];
                                    $at = '<ul>';
                                    foreach ($groups as $key => $group) {
                                        if (in_array($group['pdmg_id'], $saved_groups)) {
                                            $at .= '<li>'.$group['pdmg_group'].'</li>';
                                        }
                                    }
                                    $at .= '</ul>';
                                    return @$at;
                                }, $debug = false); 
                            ?>
                        </td>
                        <td class="px-0" style="white-space: nowrap;">
                            <?php
                                
                            $_saved_subgroups = isset($dutyInfo['subgroup_assignment'])
                                ? $dutyInfo['subgroup_assignment']: [];
                            $saved_subgroups = [];
                            foreach ($_saved_subgroups as $key => $_ssg) {
                                if (!in_array($_ssg['pdama_assign_id'], $saved_subgroups)) {
                                    array_push($saved_subgroups, $_ssg['pdama_assign_id']);
                                }
                            }
                            $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                            echo $ccApi->fetch_from($get_string=$get_string, function($groups) use($ccApi, $saved_subgroups) {
                                $at = '<ul>';
                                $groups = isset($groups[0])? $groups: [];

                                foreach ($groups as $group_key => $group) {
                                    $group_id = $group['pdmg_id'];
                                    $group_name = $group['pdmg_group'];
                                    $get_string = "attendance/members/all_subgroups?group_id=$group_id&client_id=".AccountInfoId;
                                    $at .= $ccApi->fetch_from($get_string=$get_string, function($subgroups) use($group_name, $saved_subgroups) {
                                        $subgroups = isset($subgroups[0])? $subgroups: [];
                                        $sg = '';
                                        foreach ($subgroups as $key => $subgroup) {
                                            if (in_array($subgroup['pdmg_id'], $saved_subgroups)) {
                                                $sg .= '<li>'.$group_name.': '.$subgroup['pdmg_subgroup'].'</li>';
                                            }
                                        }
                                        return @$sg;
                                    }, $debug = false);
                                }
                                $at .= '</ul>';
                                return @$at;
                            }, $debug = false); 
                            ?>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> */ ?>
</div>
<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <?php
            $get_string = "type?account_id=$account_id&id=".$_GET['dues'];
            $type = $ccApi->dues($get_string, function($type)
            {
                return @$type;
            }, $debug = false);
            if (!empty($type)) {
                $get_string = "members?account_id=$account_id&due_id=".$_GET['dues'];
                $due_members = $ccApi->dues($get_string, function($due_members)
                {
                    return @$due_members;
                }, $debug = 0);
                
                $members = [];
                foreach ($due_members as $key => $due_member) {
                    if (!in_array($due_member['pddt_member_id'], $members)) {
                        array_push($members, $due_member['pddt_member_id']);
                    }
                }

                $get_string = "currentpage=1&rowsperpage=100000&client_id=$account_id";
                $client_members = $ccApi->client_members("members", $get_string = $get_string, function ($members) {
                    return @$members['data'];
                }, $debug = 0);

                $all_members = [];
                foreach ($client_members as $key => $client_member) {
                    if (in_array($client_member['pdm_id'], $members)) {
                        if (!in_array($client_member, $all_members)) {
                            array_push($all_members, $client_member);
                        }
                    }
                }
            }
        ?>
        <pre><?php //print_r($type); ?></pre>
        <div class="card-header h-25">
            Make Payment For <?= $type['pddt_type']; ?> Due
        </div>
        <div class="card-body">            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($type)) { ?>
                            <h4 class="text-muted">Due Type Does Not Exist.</h4>
                        <?php } else {
                            require_once(BASE_DIRECTORY."/dues/forms/records/due_record_pay.php");
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
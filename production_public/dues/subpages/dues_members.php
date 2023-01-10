<div class="col-md-12 col-lg-7">
    <div class="main-card mb-3 card shadow">
        <?php
            $get_string = "type?account_id=$account_id&id=".$_GET['dues'];
            $type = $ccApi->dues($get_string, function($type)
            {
                return @$type;
            }, $debug = false);
        ?>
        <pre><?php //print_r($types); ?></pre>
        <div class="card-header">Assign Members to <?= $type['pddt_type']; ?></div>
        <div class="card-body">            
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <?php
                        if (empty($type)) { ?>
                            <h4 class="text-muted">Due Type Does Not Exist.</h4>
                        <?php } else {
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
                            $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members) {
                                return @$members['data'];
                            }, $debug = 0);

                            require_once BASE_DIRECTORY."/dues/forms/filter_due_type_members.php";
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="card-footer">-</div>
    </div>
</div>
<form class="container" role="form" action="<?= $page_url . "?" . $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="start_date" value="<?= $start_date; ?>" />
            <input type="hidden" name="end_date" value="<?= $end_date; ?>" />
			<?php 
				$tittle_placeholder = "Select Duty";
				$id_name = "duty_id";
			?>
            <h6><?= $tittle_placeholder; ?></h6>
			<?php
                $currentDuty = isset($_GET[$id_name]) ? (int)$_GET[$id_name]: 0;
                $get_string = "duty-tracker/duties/all-duties?client_id=".AccountInfoId;
                $dutyList = $ccApi->fetch_from($get_string=$get_string, function($duties) use($currentDuty) {
                    $duties = isset($duties[0])? $duties: [];
                    $at = '';
					foreach ($duties as $key => $duty) {
                        $selected = ((int)$currentDuty === (int)$duty['pdt_id']) ? "selected": "";
						$at .= '<option value="'.$duty['pdt_id'].'" '.$selected.'>'.$duty['pdt_duty'].'</option>';
					}
					return @$at;
                }, $debug = false);
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$dutyList.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-coffee icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
		</div>
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Staff": "Select Member";
                $id_name = "member";

                $get_string = "currentpage=1&rowsperpage=100000&client_id=".AccountInfoId;
                $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members) {
                    return @$members['data'];
                }, $debug = false);

                $input_value = (isset($_GET[$id_name])) ? $_GET[$id_name] : 0;
                $selectedMember = $encryptor->decrypt($input_value);

                $_members = '';
                foreach ($client_members as $key => $member) {
                    if (isset($member['pdm_id'])) {
                        $get_string = "identity?client_id=$account_id&member_id=".$member['pdm_id'];
                        $member_id = $ccApi->membership($get_string, function ($member_ids) {
                            return isset($member_ids[0])? $member_ids[0]: [];
                        }, $debug = false);
                        $member_id = isset($member_id['pdm_identity']) ? ">> ID: ".$member_id['pdm_identity']."": "";
                        $member_selected = @((int)$member['pdm_id'] === (int)$selectedMember) ? "selected": "";

                        $Uid = $encryptor->encrypt($member['pdm_id']);
                        $_members .= "<option value='".$Uid."' ".$member_selected.">".$member['pdm_firstname']." ".$member['pdm_surname']." ".$member_id."</option>";
                    }
                }
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = '
                    <option value="all">All Members</option>
                    '.@$_members.'
                ';
                $rowsperpage = 10000;
                $get_url = API_BASE_URL."/membership-filter/members?currentpage=1&rowsperpage=$rowsperpage&client_id=" . AccountInfoId;
                $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" filterForms-ids="gender"
                    filterForms-url="'.$get_url.'" filterForms-input_title="All" filterForms-id_getter="pdm_id"
                    filterForms-name_getter="pdm_firstname" filterForms-name_getter_1="pdm_surname"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 text-center">
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light btn-block text-white font-weight-bold m-1">Filter</button>
        </div>
    </div>
</form>
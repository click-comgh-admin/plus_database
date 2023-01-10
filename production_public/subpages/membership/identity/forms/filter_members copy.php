<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));
?>
<form role="form" action="?member-ids" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="member-ids"; ?>
			<?php 
				$tittle_placeholder = "Select Member";
				$id_name = "identity";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $get_string = "currentpage=1&rowsperpage=100000&client_id=$account_id";
                $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members)
                    use($encryptor, $id_name, $account_id, $ccApi) {
                    $members = @$members['data'];
                    $at = '';
                    $selectedMember = isset($_GET[$id_name]) ? $_GET[$id_name] : "";
                    $selectedMember = (int)$encryptor->decrypt($selectedMember);
                    if (!empty($members)) {
                        foreach ($members as $key => $member) {
                            $user_id = (int)$member['pdm_id'];
                            $thisSelected = ($user_id == $selectedMember) ? "selected" : "";
                            $user_id = $encryptor->encrypt($user_id);
                            $at .= '<option value="'.$user_id.'" '.$thisSelected.'>
                                '.$member['pdm_firstname'].' '.$member['pdm_surname'].'
                            </option>';
                        }
                    }
                    return @$at;
                }, $debug = 0);
				
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$client_members.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 col-md-8"></div>
        <div class="col-lg-6 col-md-4">
            <button type="submit" class="btn btn-sm btn-success text-light bg-grow-early btn-block font-weight-bold rounded-pill">Search</button>
		</div>
	</div>
</form>

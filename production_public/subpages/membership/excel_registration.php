<?php

    function load_countries($load_countries)
    {
        $qust="<option value=\"Select Your Country\">";
        foreach ($load_countries as $c) {
			$qust .= "<option value=\"".str_replace("'", "~", $c->Name)."\">".$c->Short."</option>";
		}
		return $qust;
    }

    function register_add_members_excel($cid, $user_id, $load_countries)
	{ 
		$title = 'Add Excel <span class="fa fa-file-excel-o"></span> Member(s)';
		$closeBtn = "<button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Close</button>";
        $modalData = AddExcelRegistrationRules($load_countries); ?>
		<div class="container fa my-2">
            Click <a href="#" data-toggle="modal" open-modal--id="AddExcelRegistrationRules"
				open-modal--title='<?= $title; ?>' open-modal--html='<?= $modalData; ?>'
				open-modal--buttons='<?= $closeBtn; ?>' class="btn btn-sm btn-outline-info"
				style="white-space: nowrap;"> 
				<span class="fa fa-arrow-right"></span>
                Here
                <span class="fa fa-arrow-left"></span>
			</a> to read instructions.
        </div>
        <form submit_members_excel_registration="submit" action="" method="POST" autocomplete="">

            <div class="d-block justify-content-between">

                <fieldset class="mb-0">
                    <div class="row">
                        <div class="col-md-12 container" align="center">
                            <label>Choose Excel File</label>
                            <input type="file" name="xls_file" class="form-control mb-2 btn btn-simple btn-info container ml-0" accept=".xls,.xlsx" lang="en">
                        </div>
                        <div myProgress style="display: none;">
                            <div myBar>0</div>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-group mt-1 mb-0" submit_contact_list_group_bulk_contacts="error_msg"
                    style="display: none;">
                    <div class="mb-0">
                        <input type="hidden" hidden="" name="this_id" value="<?= $cid; ?>">
						<input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
						<input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                        <input type="text" class="form-control text-warning" readonly="" name="error_msg">
                    </div>
                </fieldset>

                <div class="container" id="show_con_success_message_<?= $cid; ?>">
                    
                </div>
                <div class="card-footer d-sm-flex justify-content-between">
                    <button type="submit" class="btn btn-success btn-sm btn-block"><i class="fa fa-upload"> </i>
                        Upload Member(s) Info </button>
                </div>
            </div>
        </form>

	<?php }

    function AddExcelRegistrationRules($load_countries)
    {
		return "<div class=\"container fa\">
			<p>
				Upload <span class=\"fa fa-file-excel-o\"> Excel File </span>. [
				<a href=\"assets/excel/client membership upload.xlsx\"
					download=\"Client Membership Excel Registration.xlsx\">Download Template File</a>.
				]
			</p>
			<div class=\"d-block\">
				<div class=\"col-lg-12 px-0\">
					<label for=\"membershipinput15_1\">Check Country Name</label>
					<div class=\"input-group mb-3\">
						<div class=\"input-group-append ms-input-icon\">
							<span class=\"input-group-text\" style=\"font-weight: 700;\">
								<i class=\"fa fa-flag\"></i>
							</span>
						</div>
						<input list=\"data-quest-2\" type=\"text\" id=\"country\" class=\"form-control\"
							style=\"padding-top: 5px; padding-bottom: 5px;height: 38px;border-top-right-radius: 30px;border-bottom-right-radius: 30px;\"
							placeholder=\"Country\" name=\"country\" required=\"\" />
						<datalist class=\"\" id=\"data-quest-2\">
							".load_countries($load_countries)."
						</datalist>
					</div>
				</div>
				<p class=\"text-warning\">Please Enter Country Name as it appears in the list above.</p>
			</div>
			<div class=\"table-responsive\">
				<table class=\"table table-sm\">
					<thead>
						<tr>
							<th>Columns</th>
							<th align=\"center\"><span class=\"fa fa-info\"></span></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>
								<p class=\"my-1\">Follow the link below for the correct selection of region,
									district, constituency and electoral area!</p>
								<p class=\"my-1\"><a href=\"http://con.actionvoices.com\">con.actionvoices.com</a>
								</p>
							</td>
						</tr>
						<tr>
							<th>2</th>
							<td>
								<p class=\"my-1\">All Fields are Required</p>
							</td>
						</tr>
						<tr>
							<th>3</th>
							<td>
								<p class=\"my-1\">Region, district, constituency, electoral area] are only to be
									entered when country is Ghana.</p>
								<p class=\"my-1\">Otherwise, leave blank and enter state/ province.</p>
							</td>
						</tr>
						<tr>
							<th>4</th>
							<td>
								<p class=\"my-1\">Rows with errors will not be entered!</p>
								<p class=\"my-1\">They will be grouped into a new downladable excel file for
									corrections.</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>";
	}
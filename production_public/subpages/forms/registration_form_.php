<form role="form" action="<?= ApiBaseUrl; ?>click_com__submit___registration/" click-com-wizard="form-container">
	<div click-com-wizard="container">
		<div click-com-wizard="pages"></div>
		<div class="pb-0" click-com-wizard-title="Basic Info" click-com-wizard="step">
			<h4>Basic Info</h4>
			<div class="row">
				<div class="col-lg-6">
					<h6>Select Category</h6>
					<?php
                        $input_value = 'value="'.((@$form_type=='update') ? @$page_details['moa_page_name'] : '').'"';
                        $input_attributes = ''.$input_value.' name="page_name" id="page_name" placeholder="Enter Page Name"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"--icons icon-simple-add text-success" ],
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Select User Type:</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select User Type:", "main_class"=>"",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"user_type", 
							"input_id"=>"user_type" 
						], $data = $ccApi->user_types($all=true, $id=1, function($user_types)
						    {
						    	$options = '';
						    	foreach ($user_types as $user_type) {
						    		$options .= '<option value="'.$user_type['sb_cc_religious_user_type_id'].'">
						    			'.$user_type['sb_cc_religious_user_type'].'
						    		</option>';
						    	}
						    	return $options;
						    }), $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Which Denomination/Christian Body?</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Which Denomination/Christian Body?", "main_class"=>"",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"denomination", 
							"input_id"=>"denomination", "input_class"=>"selectpicker show-tick" 
						], $data = "<option>Church of Christ</option>
									<option>Pentecost</option>
									<option>ICGC</option>
									<option>Others</option>", $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category-other">
					<h6>Other Denomination/Christian Body</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Other Denomination/Christian Body", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"other_denomination", "input_id"=>"other_denomination" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Select membership range /size of local congregation</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select membership range /size of local congregation", 
							"main_class"=>"", "icon"=>"ni ni-ic_format_line_spacing_48px", 
							"input_name"=>"membership_size", "input_id"=>"membership_size" 
						], $data = $ccApi->congregation_membership_size($all=true, $id=1, function($congregation_membership_size)
						    {
						    	$options = '';
						    	foreach ($congregation_membership_size as $size) {
						    		$options .= '<option value="'.$size['sb_cc_congregation_membership_size_id'].'">
						    			'.$size['sb_cc_congregation_membership_size'].'
						    		</option>';
						    	}
						    	return $options;
						    }), $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Enter Average Males</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Enter Average Males", 
							"main_class"=>"", "icon"=>"ni ni-ic_format_line_spacing_48px", 
							"input_name"=>"average_male", "input_id"=>"average_male" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Enter Average Females</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Enter Average Females", 
							"main_class"=>"", "icon"=>"ni ni-ic_format_line_spacing_48px", 
							"input_name"=>"average_female", "input_id"=>"average_female" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Enter Average Aged(60+)</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Enter Average Aged(60+)", 
							"main_class"=>"", "icon"=>"ni ni-ic_format_line_spacing_48px", 
							"input_name"=>"average_aged_over_60", "input_id"=>"average_aged_over_60" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Enter Average Children(below 15)</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Enter Average Children(below 15)", 
							"main_class"=>"", "icon"=>"ni ni-ic_format_line_spacing_48px", 
							"input_name"=>"average_children_below_15", "input_id"=>"average_children_below_15" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Select Description</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select Description", "main_class"=>"",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"church_description", 
							"input_id"=>"church_description" 
						], $data = $ccApi->congregation_description($all=true, $id=1, function($congregation_description)
						    {
						    	$options = '';
						    	foreach ($congregation_description as $description) {
						    		$options .= '<option value="'.$description['sb_cc_congregation_description_id'].'">
						    			'.$description['sb_cc_congregation_description'].'
						    		</option>';
						    	}
						    	return $options;
						    }), $debug=false);
					?>
				</div>
			</div>
		</div>
		<div class="pt-4 pb-0" click-com-wizard-title="Location" click-com-wizard="step">
			<h4>Location of Organization/Business/Church</h4>
			<div class="row">
				<div class="col-lg-6">
					<h6>Select Region <span id="region_loading"></span></h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select Region", "main_class"=>"bg-odd",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"location_region", 
							"input_id"=>"location_region" 
						], $data = "", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Select District <span id="district_loading"></span></h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select District", "main_class"=>"bg-odd",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"location_district", 
							"input_id"=>"location_district" 
						], $data = "", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Select Constituency <span id="constituency_loading"></span></h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select Constituency", "main_class"=>"bg-odd",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"location_constituency", 
							"input_id"=>"location_constituency" 
						], $data = "", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Enter Community</h6>
					<?= 
					  	@$formField->input_field($settings = [
					  		"placeholder"=>"Enter Community", "main_class"=>"bg-odd", 
					  		"icon"=>"ni ni-world-3", "input_name"=>"location_community", "input_id"=>"location_community" 
					  	], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category">
					<h6>Select Congregation</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select Congregation", "main_class"=>"bg-odd",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"coc_congregation", 
							"input_id"=>"coc_congregation", "input_class"=>"selectpicker show-tick" 
						], $data = "<others></others>", $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category_name">
					<h6>Other Congregation Name</h6>
					<?= 
					  	@$formField->input_field($settings = [
					  		"placeholder"=>"Other Church of Christ Congregation Name", "main_class"=>"bg-odd", 
					  		"icon"=>"ni ni-world-3", "input_name"=>"other_coc_congregation", "input_id"=>"other_coc_congregation" 
					  	], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Enter name of Organization/ local Church/ Group/ Ministry/ Business </h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Enter name of Organization/ local Church/ Group/ Ministry/ Business ", "main_class"=>"bg-odd", 
							"icon"=>"ni ni-world-3", "input_name"=>"non_coc_congregation_name", "input_id"=>"non_coc_congregation_name" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Enter Website of Organization/ local Church/ Group/ Ministry/ Business <i class="text-info">if any</i></h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Enter Website of Organization/ local Church/ Group/ Ministry/ Business ", "main_class"=>"bg-odd", 
							"icon"=>"ni ni-world-3", "input_name"=>"account_website", "input_id"=>"accunt_website" 
						], $type = "text", $debug=false);
					?>
				</div>
			</div>
		</div>
		<div class="pt-4 pb-0" click-com-wizard-title="Contacts" click-com-wizard="step">
			<h4>Applicant's Details</h4>
			<div class="row">
				<div class="col-lg-6">
					<h6>Full Name</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Full Name", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"applicant_full_name", "input_id"=>"applicant_full_name" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Mobile Phone number</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Mobile Phone number", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"applicant_mobile_phone_number", "input_id"=>"applicant_mobile_phone_number" 
						], $type = "phone", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Email</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Email", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"applicant_email", "input_id"=>"applicant_email" 
						], $type = "email", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Select Designation/Position</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select Designation/Position", "main_class"=>"",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"applicant_designation_position", 
							"input_id"=>"applicant_designation_position" 
						], $data = $ccApi->position_in_church($all=true, $id=1, function($position_in_church)
						    {
						    	$options = '';
						    	foreach ($position_in_church as $position) {
						    		$options .= '<option value="'.$position['coc_leadership_id'].'">
						    			'.$position['coc_leader'].'
						    		</option>';
						    	}
						    	$options .= '<option>Others</option>';
						    	return $options;
						    }), $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category_applicant_designation_position">
					<h6>Other Designation/Position</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Other Designation/Position", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"other_applicant_designation_position", "input_id"=>"other_applicant_designation_position" 
						], $type = "text", $debug=false);
					?>
				</div>
			</div>
			<h4 select-show="church_category">Details of 3 decision making leaders of church/group/organization</h4>
			<div class="row" select-show="church_category">
				<h5 class="col-lg-12">Leader 1 details</h5>
				<div class="col-lg-6">
					<h6>Full Name</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Full Name", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader1_full_name", "input_id"=>"leader1_full_name" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Mobile Phone number</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Mobile Phone number", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader1_mobile_phone_number", "input_id"=>"leader1_mobile_phone_number" 
						], $type = "phone", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Email (optional)</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Email (optional)", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader1_email", "input_id"=>"leader1_email" 
						], $type = "email", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Select Designation/Position</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select Designation/Position", "main_class"=>"",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"leader1_designation_position", 
							"input_id"=>"leader1_designation_position" 
						], $data = $ccApi->position_in_church($all=true, $id=1, function($position_in_church)
						    {
						    	$options = '';
						    	foreach ($position_in_church as $position) {
						    		$options .= '<option value="'.$position['coc_leadership_id'].'">
						    			'.$position['coc_leader'].'
						    		</option>';
						    	}
						    	$options .= '<option>Others</option>';
						    	return $options;
						    }), $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category_leader1_designation_position">
					<h6>Other Designation/Position</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Other Designation/Position", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"other_leader1_designation_position", "input_id"=>"other_leader1_designation_position" 
						], $type = "text", $debug=false);
					?>
				</div>
			</div>
			<div class="row" select-show="church_category">
				<h5 class="col-lg-12">Leader 2 details</h5>
				<div class="col-lg-6">
					<h6>Full Name</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Full Name", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader2_full_name", "input_id"=>"leader2_full_name" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Mobile Phone number</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Mobile Phone number", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader2_mobile_phone_number", "input_id"=>"leader2_mobile_phone_number" 
						], $type = "phone", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Email (optional)</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Email (optional)", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader2_email", "input_id"=>"leader2_email" 
						], $type = "email", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Select Designation/Position</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select Designation/Position", "main_class"=>"",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"leader2_designation_position", 
							"input_id"=>"leader2_designation_position" 
						], $data = $ccApi->position_in_church($all=true, $id=1, function($position_in_church)
						    {
						    	$options = '';
						    	foreach ($position_in_church as $position) {
						    		$options .= '<option value="'.$position['coc_leadership_id'].'">
						    			'.$position['coc_leader'].'
						    		</option>';
						    	}
						    	$options .= '<option>Others</option>';
						    	return $options;
						    }), $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category_leader2_designation_position">
					<h6>Other Designation/Position</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Other Designation/Position", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"other_leader2_designation_position", "input_id"=>"other_leader2_designation_position" 
						], $type = "text", $debug=false);
					?>
				</div>
			</div>
			<div class="row" select-show="church_category">
				<h5 class="col-lg-12">Leader 3 details</h5>
				<div class="col-lg-6">
					<h6>Full Name</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Full Name", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader3_full_name", "input_id"=>"leader3_full_name" 
						], $type = "text", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Mobile Phone number</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Mobile Phone number", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader3_mobile_phone_number", "input_id"=>"leader3_mobile_phone_number" 
						], $type = "phone", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Email (optional)</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Email (optional)", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"leader3_email", "input_id"=>"leader3_email" 
						], $type = "email", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Select Designation/Position</h6>
					<?= 
						@$formField->select_field($settings = [
							"placeholder"=>"Select Designation/Position", "main_class"=>"",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"leader3_designation_position", 
							"input_id"=>"leader3_designation_position" 
						], $data = $ccApi->position_in_church($all=true, $id=1, function($position_in_church)
						    {
						    	$options = '';
						    	foreach ($position_in_church as $position) {
						    		$options .= '<option value="'.$position['coc_leadership_id'].'">
						    			'.$position['coc_leader'].'
						    		</option>';
						    	}
						    	$options .= '<option>Others</option>';
						    	return $options;
						    }), $debug=false);
					?>
				</div>
				<div class="col-lg-6" select-show="church_category_leader3_designation_position">
					<h6>Other Designation/Position</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Other Designation/Position", "main_class"=>"", 
							"icon"=>"ni ni-world-3", "input_name"=>"other_leader3_designation_position", "input_id"=>"other_leader3_designation_position" 
						], $type = "text", $debug=false);
					?>
				</div>
			</div>
		</div>
		<div class="pt-4 pb-0" click-com-wizard-title="Final" click-com-wizard="step">
			<h4>Final Page</h4>
			<div class="row">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<h6>Remarks [Optional]</h6>
					<?= 
						@$formField->textarea_field($settings = [
							"placeholder"=>"Remarks [Optional]", "main_class"=>"bg-odd",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"remarks", 
							"input_id"=>"remarks" 
						], $debug=false);
					?>
				</div>
				<div class="col-lg-2"></div>
				<div class="col-lg-6">
					<h6>Create Password</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Create Password", "main_class"=>"bg-odd",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"password", 
							"input_id"=>"user_type" 
						], $type = "password", $debug=false);
					?>
				</div>
				<div class="col-lg-6">
					<h6>Confirm Password</h6>
					<?= 
						@$formField->input_field($settings = [
							"placeholder"=>"Confirm Password", "main_class"=>"bg-odd",
							"icon"=>"ni ni-ic_format_line_spacing_48px", "input_name"=>"confirm_password", 
							"input_id"=>"confirm_password" 
						], $type = "password", $debug=false);
					?>
				</div>
			</div>
		</div>
		<div click-com-wizard="buttons"></div>
	</div>
</form>
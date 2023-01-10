<?php
    if (strtolower(@$_GET['gender'])==="all") {
        $members   = $db->query('SELECT new_member_id AS '.strtoupper('id').',
            new_member_congregation AS '.strtoupper('congregation').',
            new_member_congregation_id AS '.strtoupper('congregation_id').',
            new_member_first_name AS '.strtoupper('first_name').',
            new_member_surname AS '.strtoupper('surname').',
            new_member_othername AS '.strtoupper('othername').',
            new_member_photo AS '.strtoupper('photo').',
            new_member_phone AS '.strtoupper('phone').',
            new_member_phone_alt AS '.strtoupper('phone_alt').',
            new_member_email AS '.strtoupper('email').',
            new_member_status AS '.strtoupper('member_status').',
            new_member_gender AS '.strtoupper('gender').',
            new_member_dateofbirth AS '.strtoupper('dateofbirth').',
            new_member_house_address AS '.strtoupper('house_address').',
            new_member_education AS '.strtoupper('education').',
            new_member_marital_status AS '.strtoupper('marital_status').',
            new_member_spouse_name AS '.strtoupper('spouse_name').',
            new_member_spouse_phone AS '.strtoupper('spouse_phone').',
            new_member_spouse_baptised_member AS '.strtoupper('spouse_baptised_member').',
            new_member_occupation AS '.strtoupper('occupation').',
            new_member_artisan AS '.strtoupper('artisan').',
            new_member_artisan_skill AS '.strtoupper('artisan_skill').',
            new_member_business_owner AS '.strtoupper('business_owner').',
            new_member_business_type AS '.strtoupper('business_type').',
            new_member_professional AS '.strtoupper('professional').',
            new_member_profession AS '.strtoupper('profession').',
            new_member_has_family_member_inchurch AS '.strtoupper('has_family_member_inchurch').',
            new_member_baptized AS '.strtoupper('baptized').',
            new_member_dateof_baptism AS '.strtoupper('dateof_baptism').',
            new_member_congregationof_baptism AS '.strtoupper('congregationof_baptism').',
            new_member_nationality AS '.strtoupper('nationality').',
            new_member_country AS '.strtoupper('country').',
            new_member_state_province AS '.strtoupper('state_province').',
            new_member_region AS '.strtoupper('region').',
            new_member_district AS '.strtoupper('district').',
            new_member_community AS '.strtoupper('community').',
            new_member_nextofkin AS '.strtoupper('nextofkin').',
            new_member_nextofkin_phone AS '.strtoupper('nextofkin_phone').',
            new_member_additional_family_member AS '.strtoupper('additional_family_member').',
            new_member_additional_family_member_phone AS '.strtoupper('additional_family_member_phone').',
            new_member_join_ministry AS '.strtoupper('join_ministry').',reg_date,
            l.name AS '.strtoupper('Entered_by').' FROM church_plus_membership_new_member_programming LEFT JOIN church_admin_users l ON church_plus_membership_new_member_programming.entBy = l.admin_usersid WHERE new_member_congregation=:cpasc AND growth=:g AND new_member_congregation_id=:nmcid AND new_member_user_status=1 ORDER BY new_member_first_name ASC', array(':cpasc'=>$_COOKIE['church_name'], ':g'=>"Adult", ':nmcid'=>$_COOKIE['church_id']));
    } else {
        $members   = $db->query('SELECT new_member_id AS '.strtoupper('id').',
            new_member_congregation AS '.strtoupper('congregation').',
            new_member_congregation_id AS '.strtoupper('congregation_id').',
            new_member_first_name AS '.strtoupper('first_name').',
            new_member_surname AS '.strtoupper('surname').',
            new_member_othername AS '.strtoupper('othername').',
            new_member_photo AS '.strtoupper('photo').',
            new_member_phone AS '.strtoupper('phone').',
            new_member_phone_alt AS '.strtoupper('phone_alt').',
            new_member_email AS '.strtoupper('email').',
            new_member_status AS '.strtoupper('member_status').',
            new_member_gender AS '.strtoupper('gender').',
            new_member_dateofbirth AS '.strtoupper('dateofbirth').',
            new_member_house_address AS '.strtoupper('house_address').',
            new_member_education AS '.strtoupper('education').',
            new_member_marital_status AS '.strtoupper('marital_status').',
            new_member_spouse_name AS '.strtoupper('spouse_name').',
            new_member_spouse_phone AS '.strtoupper('spouse_phone').',
            new_member_spouse_baptised_member AS '.strtoupper('spouse_baptised_member').',
            new_member_occupation AS '.strtoupper('occupation').',
            new_member_artisan AS '.strtoupper('artisan').',
            new_member_artisan_skill AS '.strtoupper('artisan_skill').',
            new_member_business_owner AS '.strtoupper('business_owner').',
            new_member_business_type AS '.strtoupper('business_type').',
            new_member_professional AS '.strtoupper('professional').',
            new_member_profession AS '.strtoupper('profession').',
            new_member_has_family_member_inchurch AS '.strtoupper('has_family_member_inchurch').',
            new_member_baptized AS '.strtoupper('baptized').',
            new_member_dateof_baptism AS '.strtoupper('dateof_baptism').',
            new_member_congregationof_baptism AS '.strtoupper('congregationof_baptism').',
            new_member_nationality AS '.strtoupper('nationality').',
            new_member_country AS '.strtoupper('country').',
            new_member_state_province AS '.strtoupper('state_province').',
            new_member_region AS '.strtoupper('region').',
            new_member_district AS '.strtoupper('district').',
            new_member_community AS '.strtoupper('community').',
            new_member_nextofkin AS '.strtoupper('nextofkin').',
            new_member_nextofkin_phone AS '.strtoupper('nextofkin_phone').',
            new_member_additional_family_member AS '.strtoupper('additional_family_member').',
            new_member_additional_family_member_phone AS '.strtoupper('additional_family_member_phone').',
            new_member_join_ministry AS '.strtoupper('join_ministry').',reg_date,
            l.name AS '.strtoupper('Entered_by').' FROM church_plus_membership_new_member_programming LEFT JOIN church_admin_users l ON church_plus_membership_new_member_programming.entBy = l.admin_usersid WHERE new_member_congregation=:cpasc AND new_member_congregation_id=:nmcid AND new_member_gender=:nmg AND growth=:g AND new_member_user_status=1 ORDER BY new_member_first_name ASC', array(':cpasc'=>$_COOKIE['church_name'], ':g'=>"Adult", ':nmg'=>@$_GET['gender'], ':nmcid'=>$_COOKIE['church_id']));
    }
    if (strtolower($_GET['date'])==="all") {
        if (strtolower($_GET['zone'])==="all") : 
            if (strtolower($_GET['status'])==="all") : 
                $total_members = count($members);
            else :
                $mem_count_s = [];

                foreach ($members as $member) : 
                    $__members__=$db->query('SELECT * FROM church_plus_member_status WHERE church_plus_attendance_sheet_church_id=:cid AND church_plus_attendance_sheet_member_id=:cpashmid AND church_plus_member_status=:cpcz ORDER BY church_plus_member_status ASC', array(':cid'=>$_COOKIE['church_id'], ':cpcz'=>@$_GET['status'], ':cpashmid'=>$member[strtoupper('id')]));
                    if (count($__members__)!==0) {
                        array_push($mem_count_s, $__members__);
                    }
                endforeach;
                $total_members = count($mem_count_s);
            endif; 
        else :
            $mem_count = [];
            foreach ($members as $member) : 
                $members__=$db->query('SELECT * FROM church_plus_church_zones_assign WHERE church_plus_attendance_sheet_church_id=:cid AND church_plus_attendance_sheet_member_id=:cpashmid AND church_plus_church_zone=:cpcz ORDER BY church_plus_church_zone ASC', array(':cid'=>$_COOKIE['church_id'], ':cpcz'=>$_GET['zone'], ':cpashmid'=>$member[strtoupper('id')]));
                if (count($members__)!==0) {
                    array_push($mem_count, $members__);
                }
            endforeach;
            $mem_count_s = [];
            foreach ($mem_count as $member) : 
                $__members__=$db->query('SELECT * FROM church_plus_member_status WHERE church_plus_attendance_sheet_church_id=:cid AND church_plus_attendance_sheet_member_id=:cpashmid AND church_plus_member_status=:cpcz ORDER BY church_plus_member_status ASC', array(':cid'=>$_COOKIE['church_id'], ':cpcz'=>@$_GET['status'], ':cpashmid'=>@$member[strtoupper('id')]));
                if (count($__members__)!==0) {
                    array_push($mem_count_s, $__members__);
                }
            endforeach;
            if (strtolower($_GET['status'])==="all") :
                $total_members = count($mem_count);
            else :
                $mem_count_s = [];
                foreach ($mem_count as $member) : 
                    $__members__=$db->query('SELECT * FROM church_plus_member_status WHERE church_plus_attendance_sheet_church_id=:cid AND church_plus_attendance_sheet_member_id=:cpashmid AND church_plus_member_status=:cpcz ORDER BY church_plus_member_status ASC', array(':cid'=>$_COOKIE['church_id'], ':cpcz'=>@$_GET['status'], ':cpashmid'=>$member[strtoupper('id')]));
                    if (count($__members__)!==0) {
                        array_push($mem_count_s, $__members__);
                    }
                endforeach;
                $total_members = count($mem_count_s);
            endif;
            $total_members = count($mem_count_s);
        endif; 
    } else {
        $mem_count_date = [];
        foreach ($members as $member) : 
            if (date("Y-m-d", strtotime($member['reg_date']))===date("Y-m-d", strtotime($_GET['date']))) {
                array_push($mem_count_date, $member);
            }
        endforeach;

        if (strtolower($_GET['zone'])==="all") : 
            if (strtolower($_GET['status'])==="all") : 
                $total_members = count($mem_count_date);
            else :
                $mem_count_s = [];

                foreach ($mem_count_date as $member) : 
                    $__members__=$db->query('SELECT * FROM church_plus_member_status WHERE church_plus_attendance_sheet_church_id=:cid AND church_plus_attendance_sheet_member_id=:cpashmid AND church_plus_member_status=:cpcz ORDER BY church_plus_member_status ASC', array(':cid'=>$_COOKIE['church_id'], ':cpcz'=>@$_GET['status'], ':cpashmid'=>$member[strtoupper('id')]));
                    if (count($__members__)!==0) {
                        array_push($mem_count_s, $__members__);
                    }
                endforeach;
                $total_members = count($mem_count_s);
            endif; 
        else :
            $mem_count = [];
            foreach ($mem_count_date as $member) : 
                $members__=$db->query('SELECT * FROM church_plus_church_zones_assign WHERE church_plus_attendance_sheet_church_id=:cid AND church_plus_attendance_sheet_member_id=:cpashmid AND church_plus_church_zone=:cpcz ORDER BY church_plus_church_zone ASC', array(':cid'=>$_COOKIE['church_id'], ':cpcz'=>$_GET['zone'], ':cpashmid'=>$member[strtoupper('id')]));
                if (count($members__)!==0) {
                    array_push($mem_count, $members__);
                }
            endforeach;
            $mem_count_s = [];
            foreach ($mem_count as $member) : 
                $__members__=$db->query('SELECT * FROM church_plus_member_status WHERE church_plus_attendance_sheet_church_id=:cid AND church_plus_attendance_sheet_member_id=:cpashmid AND church_plus_member_status=:cpcz ORDER BY church_plus_member_status ASC', array(':cid'=>$_COOKIE['church_id'], ':cpcz'=>@$_GET['status'], ':cpashmid'=>$member[strtoupper('id')]));
                if (count($__members__)!==0) {
                    array_push($mem_count_s, $__members__);
                }
            endforeach;
            if (strtolower($_GET['status'])==="all") :
                $total_members = count($mem_count);
            else :
                $mem_count_s = [];
                foreach ($mem_count as $member) : 
                    $__members__=$db->query('SELECT * FROM church_plus_member_status WHERE church_plus_attendance_sheet_church_id=:cid AND church_plus_attendance_sheet_member_id=:cpashmid AND church_plus_member_status=:cpcz ORDER BY church_plus_member_status ASC', array(':cid'=>$_COOKIE['church_id'], ':cpcz'=>@$_GET['status'], ':cpashmid'=>$member[strtoupper('id')]));
                    if (count($__members__)!==0) {
                        array_push($mem_count_s, $__members__);
                    }
                endforeach;
                $total_members = count($mem_count_s);
            endif;
            $total_members = count($mem_count_s);
        endif; 
    }

 	$totalNumberOfPages = $total_members/10;
 	//10===rowsPerPage//

 	$totalNumberOfPages = ceil($totalNumberOfPages);
?>
	<div class="pull-right">
		<?php
		 	for ($page=1; $page <= $totalNumberOfPages; $page++) : 
		 		if (@(int)$_GET['currentpage']===(int)$page) : ?>
		 			<a href="<?= BASE_URL; ?>membership-data/<?= $_GET['gender']; ?>/<?= $_GET['date']; ?>/<?= $_GET['zone']; ?>/<?= $_GET['status']; ?>/<?= $page; ?>" type="button" class="btn btn-secondary pt-1 pb-1 pl-2 pr-2 ml-0 mr-0 mt-0" style="font-weight: bold;"><?= $page; ?></a> 
		 		<?php else : ?>
		 			<a href="<?= BASE_URL; ?>membership-data/<?= $_GET['gender']; ?>/<?= $_GET['date']; ?>/<?= $_GET['zone']; ?>/<?= $_GET['status']; ?>/<?= $page; ?>" type="button" class="btn btn-info pt-1 pb-1 pl-2 pr-2 ml-0 mr-0 mt-0" style="font-weight: bold;"><?= $page; ?></a> 
		 		<?php endif; ?>
		 	<?php endfor;

?>
	</div>
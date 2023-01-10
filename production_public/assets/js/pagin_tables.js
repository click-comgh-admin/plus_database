(function(window, document, $, cc, Croppr) {
    document.addEventListener('DOMContentLoaded', function(loaded) {
        cc._s(`[pagin_table="random-access"]`, (random_access) => {
            $(random_access).DataTable({
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
        cc._s(`[pagin_table="contacts"], [pagin_table="group-contacts-groups"], [pagin_table="group-contacts"], [pagin_table="group-contacts-alt"], [pagin_table="agent-group-contacts"], [pagin_table="agent-group-contacts-admin"], [pagin_table="group-contacts-add"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_id']['value'] + "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user=" + contacts.attributes['pt_c_user']['value'] + "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'];
            if ($type !== "contacts") {
                var groupId = "&group_id=" + contacts.attributes['group_id']['value'];
                $params = $params + groupId;
            }
            if ($type === "agent-group-contacts-admin") {
                var admin_user = "&admin_user=" + contacts.attributes['admin_user']['value'];
                $params = $params + admin_user;
            }
            if ($type === "group-contacts-groups") {
                var userLimit = "&user_limit=" + contacts.attributes['user_limit']['value'];
                var accessCode = "&access_code=" + contacts.attributes['access_code']['value'];
                $params = $params + userLimit + accessCode;
            }
            var $columns;
            if ($type === "group-contacts-add") {
                $columns = [
                    { data: 'ID' },
                    { data: 'contact' },
                    { data: 'name' },
                ];
            } else {
                $columns = [
                    { data: 'ID' },
                    { data: 'name' },
                ];
            }
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
        cc._s(`[pagin_table="archived_clients"]`, (archived_clients) => {
            var $params = "page=" + archived_clients.attributes['pt_c_page']['value'] +
                "&user=" + archived_clients.attributes['pt_c_user']['value'] + "&api=" + archived_clients.attributes['pt_c_api']['value'] +
                "&file=" + archived_clients.attributes['pt_c_file']['value'];
            $(archived_clients).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/archived_clients.php?" + $params
                },
                'columns': [
                    { data: 'ID' },
                    { data: 'name' },
                ],
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
        cc._s(`[pagin_table="client_account_type"]`, (client_account_type) => {
            var $params = "page=" + client_account_type.attributes['pt_c_page']['value'] +
                "&user=" + client_account_type.attributes['pt_c_user']['value'] + "&api=" + client_account_type.attributes['pt_c_api']['value'] +
                "&file=" + client_account_type.attributes['pt_c_file']['value'];
            $(client_account_type).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/client_account_type.php?" + $params
                },
                'columns': [
                    { data: 'ID' },
                    { data: 'name' },
                ],
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
        cc._s(`[pagin_table="client_accounts"]`, (client_accounts) => {
            var $params = "page=" + client_accounts.attributes['pt_c_page']['value'] +
                "&user=" + client_accounts.attributes['pt_c_user']['value'] +
                "&api=" + client_accounts.attributes['pt_c_api']['value'] +
                "&region=" + client_accounts.attributes['pt_c_get_region']['value'] +
                "&country=" + client_accounts.attributes['pt_c_get_country']['value'] +
                "&district=" + client_accounts.attributes['pt_c_get_district']['value'] +
                "&constituency=" + client_accounts.attributes['pt_c_get_constituency']['value'] +
                "&account_type=" + client_accounts.attributes['pt_c_get_account_type']['value'] +
                "&account_category=" + client_accounts.attributes['pt_c_get_account_category']['value'] +
                "&account_status=" + client_accounts.attributes['pt_c_get_account_status']['value'] +
                "&file=" + client_accounts.attributes['pt_c_file']['value'];

            $(client_accounts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/client_accounts.php?" + $params
                },
                'columns': [
                    { data: 'ID' },
                    { data: 'name' },
                ],
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
        cc._s(`[pagin_table="credit_purchase_logs"]`, (credit_purchase_logs) => {
            var $params = "acc_id=" + credit_purchase_logs.attributes['pt_c_id']['value'];
            $(credit_purchase_logs).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/credit_purchase_logs_pagin.php?" + $params
                },
                'columns': [
                    { data: 'ID' },
                    { data: 'units_bought' },
                    { data: 'paid' },
                    { data: 'paid_by' },
                ],
                "fnDrawCallback": function() {
                    cc.selectNew();
                    ////
                }
            });
        });
        cc._s(`[pagin_table="credit_purchase_logs_sm"]`, (credit_purchase_logs) => {
            var $params = "acc_id=" + credit_purchase_logs.attributes['pt_c_id']['value'];
            $(credit_purchase_logs).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/credit_purchase_logs_pagin_sm.php?" + $params
                },
                'columns': [
                    { data: 'ID' },
                    { data: 'units_bought' },
                    { data: 'paid' },
                    { data: 'paid_by' },
                ],
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                }
            });
        });
        cc._s(`[pagin_table="credit_usage_logs"]`, (credit_usage_logs) => {
            var $params = "acc_id=" + credit_usage_logs.attributes['pt_c_id']['value'];
            $(credit_usage_logs).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/credit_usage_logs_pagin.php?" + $params
                },
                'columns': [
                    { data: 'ID' },
                    { data: 'message_type' },
                    { data: 'total_cost' },
                    { data: 'date' },
                ],
                "fnDrawCallback": function() {
                    cc.selectNew();
                    ////
                }
            });
        });
        cc._s(`[pagin_table="credit_usage_logs_sm"]`, (credit_usage_logs) => {
            var $params = "acc_id=" + credit_usage_logs.attributes['pt_c_id']['value'];
            $(credit_usage_logs).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/credit_usage_logs_pagin_sm.php?" + $params
                },
                'columns': [
                    { data: 'ID' },
                    { data: 'message_type' },
                    { data: 'communication_type' },
                ],
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                }
            });
        });
        cc._s(`[pagin_table="member_id_sm"], [pagin_table="member_id_md"]`, (member_id) => {
            var $type = member_id.attributes['pagin_table']['value'];
            var $params = "acc_id=" + member_id.attributes['pt_c_id']['value'] +
                "&user=" + member_id.attributes['pt_c_user']['value'] +
                "&member=" + member_id.attributes['pt_c_member']['value'] +
                "&api=" + member_id.attributes['pt_c_api']['value'];
            var $columns;
            if ($type === "member_id_md") {
                $columns = [
                    { data: 'ID' },
                    { data: 'firstname' },
                    { data: 'surname' },
                    { data: 'phone' },
                    { data: 'email' },
                ];
            } else {
                $columns = [
                    { data: 'ID' },
                    { data: 'firstname' },
                    { data: 'surname' },
                ];
            }
            console.log($columns);
            $(member_id).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                    cc._s("[make-general-posts]", function(form) {

                        form.addEventListener('submit', function(fE) {
                            fE.preventDefault();
                            console.log(form)

                            var confirm_msg = form['attributes']['make-general-posts']['value'];
                            cc.submit_form('[make-general-posts="' + confirm_msg + '"]', confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
        cc._s(`[pagin_table="com_report"]`, (com_report) => {
            var $type = com_report.attributes['pagin_table']['value'];
            var $params = "by_date=" + com_report.attributes['pt_c_by_date']['value'] +
                "&start_date=" + com_report.attributes['pt_c_start_date']['value'] +
                "&end_date=" + com_report.attributes['pt_c_end_date']['value'] +
                "&by_type=" + com_report.attributes['pt_c_by_type']['value'] +
                "&type=" + com_report.attributes['pt_c_type']['value'] +
                "&by_client=" + com_report.attributes['pt_c_by_client']['value'] +
                "&client=" + com_report.attributes['pt_c_client']['value'];

            var $columns;
            $columns = [
                { data: 'ID' },
                { data: 'identity' },
                { data: 'response' },
                { data: 'm_phone' },
                { data: 'm_client' },
                { data: 'm_type' },
                { data: 'com_type' },
                { data: 'm_message' },
                { data: '_date_' },
                { data: 'ood1' },
                { data: 'ood2' },
            ];
            console.log($columns);
            $(com_report).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    const $data = e.json.aaData;
                    console.log($data.length, $data, e.json.iTotalRecords, typeof $data[0]);
                    if (typeof $data[0] !== 'undefined') {
                        if (($data[0]['com_type']).toLowerCase() !== "voice") {
                            function getPages(n) {
                                var floor = Math.floor(n);
                                var result = (n - floor) !== 0;
                                if (result) {
                                    return floor + 1;
                                } else {
                                    return floor;
                                }
                            }

                            console.log($data);
                            let total_chars = 0;
                            let total_pages = 0;
                            $data.forEach(element => {
                                let chars = element['m_message'].replace("chars", '');
                                let numbs = new Number(chars);
                                numbs = (numbs < 160) ? 160 : numbs;
                                console.log(numbs);
                                total_chars = total_chars + new Number(chars);
                                let pages = getPages(numbs / 160);
                                total_pages = total_pages + pages;
                            });
                            const total_contacts = e.json.iTotalRecords;
                            console.log(total_chars, total_pages, total_contacts);
                            $('[pagin_load_pages_chars]').html(total_pages + ' pages of ' + total_chars + ' characters');
                            $('[pagin_load_total_contacts]').html('Total Contacts: ' + total_contacts);
                            // console.log($(['pagin_load_pages_chars']).html(total_pages + ' pages of ' + total_chars + ' characters'));
                            // console.log($(['pagin_load_total_contacts']).html('Total Contacts: ' + total_contacts));
                        }
                    }
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="office_appointments"], [pagin_table="office_appointments_sm"]`, (office_appointments) => {

            var $type = office_appointments.attributes['pagin_table']['value'];
            var $params = "by_date=" + office_appointments.attributes['pt_c_by_date']['value'] +
                "&start_date=" + office_appointments.attributes['pt_c_start_date']['value'] +
                "&end_date=" + office_appointments.attributes['pt_c_end_date']['value'] +
                "&client_id=" + office_appointments.attributes['pt_c_cid']['value'] +
                "&user=" + office_appointments.attributes['pt_c_user']['value'] +
                "&by_appointment_status=" + office_appointments.attributes['pt_c_by_appointment_status']['value'] +
                "&appointment_status=" + office_appointments.attributes['pt_c_appointment_status']['value'] +
                "&by_group_id=" + office_appointments.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + office_appointments.attributes['pt_c_group_id']['value'];

            var $columns, $url;
            if ($type === "office_appointments_sm") {
                $columns = [
                    { data: 'name' },
                    { data: 'contact' },
                    { data: 'meeting_agenda' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/office_pagin_appointments_sm.php?" + $params;
            } else {
                $columns = [
                    { data: 'ID' },
                    { data: 'name' },
                    { data: 'contact' },
                    { data: 'name_of_organiztion' },
                    { data: 'date' },
                    { data: 'meeting_agenda' },
                    { data: 'attachments' },
                    { data: 'notification' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/office_pagin_appointments.php?" + $params;
            }
            $(office_appointments).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': $url
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lfrtip',
                "select": true,
            });
        });
        cc._s(`[pagin_table="office_appointments_print"]`, (office_appointments) => {

            var $type = office_appointments.attributes['pagin_table']['value'];
            var $params = "by_date=" + office_appointments.attributes['pt_c_by_date']['value'] +
                "&start_date=" + office_appointments.attributes['pt_c_start_date']['value'] +
                "&end_date=" + office_appointments.attributes['pt_c_end_date']['value'] +
                "&client_id=" + office_appointments.attributes['pt_c_cid']['value'] +
                "&user=" + office_appointments.attributes['pt_c_user']['value'] +
                "&by_appointment_status=" + office_appointments.attributes['pt_c_by_appointment_status']['value'] +
                "&appointment_status=" + office_appointments.attributes['pt_c_appointment_status']['value'] +
                "&by_group_id=" + office_appointments.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + office_appointments.attributes['pt_c_group_id']['value'];

            var $columns, $url;
            $columns = [
                { data: 'ID' },
                { data: 'name' },
                { data: 'contact' },
                { data: 'email' },
                { data: 'address' },
                { data: 'name_of_organiztion' },
                { data: 'host' },
                { data: 'host_others' },
                { data: 'host_group' },
                { data: 'appointment_status' },
                { data: 'date' },
                { data: 'start_time' },
                { data: 'end_time' },
                { data: 'meeting_agenda' },
                { data: 'created_by' },
                { data: 'creation_date' },
                { data: 'update_by' },
                { data: 'update_date' },
            ];
            $url = cc.BASE_URL + "assets/php/custom/office_pagin_appointments_print.php?" + $params;

            $(office_appointments).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': $url
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    //
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="office_visitors"], [pagin_table="office_visitors_sm"]`, (office_visitors) => {

            var $type = office_visitors.attributes['pagin_table']['value'];
            var $params = "by_date=" + office_visitors.attributes['pt_c_by_date']['value'] +
                "&start_date=" + office_visitors.attributes['pt_c_start_date']['value'] +
                "&end_date=" + office_visitors.attributes['pt_c_end_date']['value'] +
                "&client_id=" + office_visitors.attributes['pt_c_cid']['value'] +
                "&user=" + office_visitors.attributes['pt_c_user']['value'] +
                "&by_group_id=" + office_visitors.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + office_visitors.attributes['pt_c_group_id']['value'];

            var $columns, $url;
            if ($type === "office_visitors_sm") {
                $columns = [
                    { data: 'name' },
                    { data: 'contact' },
                    { data: 'status_of_visit' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/office_pagin_visitors_sm.php?" + $params;
            } else {
                $columns = [
                    { data: 'ID' },
                    { data: 'name' },
                    { data: 'contact' },
                    { data: 'status_of_visit' },
                    { data: 'attachments' },
                    { data: 'visitor_action' },
                    { data: 'date' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/office_pagin_visitors.php?" + $params;
            }
            $(office_visitors).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': $url
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lfrtip',
                "select": true,
            });
        });
        cc._s(`[pagin_table="office_visitors_print"]`, (office_visitors) => {

            var $type = office_visitors.attributes['pagin_table']['value'];
            var $params = "by_date=" + office_visitors.attributes['pt_c_by_date']['value'] +
                "&start_date=" + office_visitors.attributes['pt_c_start_date']['value'] +
                "&end_date=" + office_visitors.attributes['pt_c_end_date']['value'] +
                "&client_id=" + office_visitors.attributes['pt_c_cid']['value'] +
                "&user=" + office_visitors.attributes['pt_c_user']['value'] +
                "&by_group_id=" + office_visitors.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + office_visitors.attributes['pt_c_group_id']['value'];

            var $columns, $url;
            $columns = [
                { data: 'ID' },
                { data: 'name' },
                { data: 'contact' },
                { data: 'email' },
                { data: 'gender' },
                { data: 'location' },
                { data: 'status_of_visit' },
                { data: 'visitor_description' },
                { data: 'host' },
                { data: 'host_group' },
                { data: 'reason_for_visit' },
                { data: 'visit_date' },
                { data: 'entered_by' },
                { data: 'visitor_action' },
                { data: 'appointment' },
                { data: 'note' },
                { data: 'by' },
                { data: 'date' },
                { data: 'update_by' },
                { data: 'update_date' },
            ];
            $url = cc.BASE_URL + "assets/php/custom/office_pagin_visitors_print.php?" + $params;

            $(office_visitors).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': $url
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    //
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="office_reminders"], [pagin_table="office_reminders_sm"]`, (office_reminders) => {

            var $type = office_reminders.attributes['pagin_table']['value'];
            var $params = "by_date=" + office_reminders.attributes['pt_c_by_date']['value'] +
                "&start_date=" + office_reminders.attributes['pt_c_start_date']['value'] +
                "&end_date=" + office_reminders.attributes['pt_c_end_date']['value'] +
                "&client_id=" + office_reminders.attributes['pt_c_cid']['value'] +
                "&user=" + office_reminders.attributes['pt_c_user']['value'] +
                "&by_reminder_status=" + office_reminders.attributes['pt_c_by_reminder_status']['value'] +
                "&reminder_status=" + office_reminders.attributes['pt_c_reminder_status']['value'] +
                "&by_group_id=" + office_reminders.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + office_reminders.attributes['pt_c_group_id']['value'];

            var $columns, $url;
            if ($type === "office_reminders_sm") {
                $columns = [
                    { data: 'subject' },
                    { data: 'reminder_status' },
                    { data: 'medium' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/office_pagin_reminders_sm.php?" + $params;
            } else {
                $columns = [
                    { data: 'ID' },
                    { data: 'subject' },
                    { data: 'reminder_status' },
                    { data: 'medium' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/office_pagin_reminders.php?" + $params;
            }
            $(office_reminders).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': $url
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lfrtip',
                "select": true,
            });
        });
        cc._s(`[pagin_table="office_reminders_print"]`, (office_reminders) => {

            var $type = office_reminders.attributes['pagin_table']['value'];
            var $params = "by_date=" + office_reminders.attributes['pt_c_by_date']['value'] +
                "&start_date=" + office_reminders.attributes['pt_c_start_date']['value'] +
                "&end_date=" + office_reminders.attributes['pt_c_end_date']['value'] +
                "&client_id=" + office_reminders.attributes['pt_c_cid']['value'] +
                "&user=" + office_reminders.attributes['pt_c_user']['value'] +
                "&by_reminder_status=" + office_reminders.attributes['pt_c_by_reminder_status']['value'] +
                "&reminder_status=" + office_reminders.attributes['pt_c_reminder_status']['value'] +
                "&by_group_id=" + office_reminders.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + office_reminders.attributes['pt_c_group_id']['value'];

            var $columns, $url;
            $columns = [
                { data: 'ID' },
                { data: 'subject' },
                { data: 'date' },
                { data: 'time' },
                { data: 'repeat' },
                { data: 'repeat_date_1' },
                { data: 'repeat_time_1' },
                { data: 'repeat_date_2' },
                { data: 'repeat_time_2' },
                { data: 'repeat_date_3' },
                { data: 'repeat_time_3' },
                { data: 'reminder_status' },
                { data: 'group' },
                { data: 'members' },
                { data: 'other_contacts' },
                { data: 'medium' },
                { data: 'created_by' },
                { data: 'creation_date' },
                { data: 'update_by' },
                { data: 'update_date' },
            ];
            $url = cc.BASE_URL + "assets/php/custom/office_pagin_reminders_print.php?" + $params;

            $(office_reminders).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': $url
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    //
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[none-table-pagin="folders"], [none-table-pagin="folder-files"], [none-table-pagin="subfolder-files"], [none-table-pagin="file-finder"], [none-table-pagin="file-archived"]`, (load_folders) => {
            console.log(load_folders, $(load_folders));
            var $type = load_folders.attributes['none-table-pagin']['value'];
            var $loading = load_folders.attributes['pt_c_loading']['value'];
            var $loading = load_folders.attributes['pt_c_emptyMsg']['value'];
            var $params = "client_id=" + load_folders.attributes['pt_c_cid']['value'];

            if ($type === "folder-files") {
                var folder_id = "&folder_id=" + load_folders.attributes['pt_c_folder_id']['value'];
                $params = $params + folder_id;
            }
            if ($type === "subfolder-files") {
                var folder_id = "&folder_id=" + load_folders.attributes['pt_c_folder_id']['value'];
                var subfolder_id = "&subfolder_id=" + load_folders.attributes['pt_c_subfolder_id']['value'];
                $params = $params + folder_id + subfolder_id;
            }
            if ($type === "file-finder") {
                var by_date = "&by_date=" + load_folders.attributes['pt_c_by_date']['value'];
                var start_date = "&start_date=" + load_folders.attributes['pt_c_start_date']['value'];
                var end_date = "&end_date=" + load_folders.attributes['pt_c_end_date']['value'];
                var by_folder_id = "&by_folder_id=" + load_folders.attributes['pt_c_by_folder_id']['value'];
                var folder_id = "&folder_id=" + load_folders.attributes['pt_c_folder_id']['value'];
                var by_subfolder_id = "&by_subfolder_id=" + load_folders.attributes['pt_c_by_subfolder_id']['value'];
                var subfolder_id = "&subfolder_id=" + load_folders.attributes['pt_c_subfolder_id']['value'];
                $params = $params + by_date + start_date + end_date + by_folder_id + folder_id + by_subfolder_id + subfolder_id;
            }
            if ($type === "file-archived") {
                var by_date = "&by_date=" + load_folders.attributes['pt_c_by_date']['value'];
                var start_date = "&start_date=" + load_folders.attributes['pt_c_start_date']['value'];
                var end_date = "&end_date=" + load_folders.attributes['pt_c_end_date']['value'];
                $params = $params + by_date + start_date + end_date;
            }
            $url = cc.BASE_URL + "assets/php/custom/file_manager_pagin_" + $type + ".php?" + $params;
            cc.noneTablePagin({
                network: {
                    type: "POST",
                    url: $url,
                },
                search: true,
                locator: "data",
                selector: load_folders,
                params: {
                    pageSize: 12,
                    totalNumber: 1000000,
                },
                beforeSend: $loading,
                emptyMsg: $loading
            }, (response, container, pagination) => {
                console.log({ response, container, pagination });

            });
        });
        cc._s(`[pagin_table="branch_accounts"], [pagin_table="branch_accounts_sm"]`, (branch_accounts) => {

            var $type = branch_accounts.attributes['pagin_table']['value'];
            var $params = "user=" + branch_accounts.attributes['pt_c_user']['value'];

            var $columns, $url;
            if ($type === "branch_accounts_sm") {
                $columns = [
                    { data: 'client' },
                    { data: 'date' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/branch_accounts_pagin_sm.php?" + $params;
            } else {
                $columns = [
                    { data: 'ID' },
                    { data: 'client' },
                    { data: 'by' },
                    { data: 'date' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/branch_accounts_pagin.php?" + $params;
            }
            $(branch_accounts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': $url
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lfrtip',
                "select": true,
            });
        });
        cc._s(`[pagin_table="account_branches"], [pagin_table="account_branches_sm"]`, (account_branches) => {

            var $type = account_branches.attributes['pagin_table']['value'];
            var $params = "user=" + account_branches.attributes['pt_c_user']['value'] +
                "&client_id=" + account_branches.attributes['pt_c_cid']['value'] +
                "&by_region=" + account_branches.attributes['pt_c_by_region']['value'] +
                "&region=" + account_branches.attributes['pt_c_region']['value'] +
                "&by_district=" + account_branches.attributes['pt_c_by_district']['value'] +
                "&district=" + account_branches.attributes['pt_c_district']['value'] +
                "&by_country=" + account_branches.attributes['pt_c_by_country']['value'] +
                "&country=" + account_branches.attributes['pt_c_country']['value'];

            var $columns, $url;
            if ($type === "account_branches_sm") {
                $columns = [
                    { data: 'client' },
                    { data: 'branch' },
                    { data: 'date' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/account_branches_pagin_sm.php?" + $params;
            } else {
                $columns = [
                    { data: 'ID' },
                    { data: 'client' },
                    { data: 'branch' },
                    { data: 'by' },
                    { data: 'date' },
                ];
                $url = cc.BASE_URL + "assets/php/custom/account_branches_pagin.php?" + $params;
            }
            $(account_branches).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': $url
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lfrtip',
                "select": true,
            });
        });
        cc._s(`[pagin_table="user-devices"], [pagin_table="user-devices-requests"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];

            var $columns = [
                { data: 'member_id' },
                { data: 'device_type' },
                { data: 'approved_by' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="user-attendance-status"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];

            var $columns = [
                { data: 'member_id' },
                { data: 'attendance_status' },
                // { data: 'by' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="attendance-results"], [pagin_table="attendance-attendees_absentees"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&by_attendance_status_id=" + contacts.attributes['pt_c_by_attendance_status_id']['value'] +
                "&attendance_status_id=" + contacts.attributes['pt_c_attendance_status_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];

            var $columns;
            if ($type === "attendance-results") {
                $params = $params + "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                    "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                    "&by_time=" + contacts.attributes['pt_c_by_time']['value'] +
                    "&start_time=" + contacts.attributes['pt_c_start_time']['value'] +
                    "&end_time=" + contacts.attributes['pt_c_end_time']['value'] +
                    "&by_check_out_time=" + contacts.attributes['pt_c_by_check_out_time']['value'] +
                    "&check_out_start_time=" + contacts.attributes['pt_c_check_out_start_time']['value'] +
                    "&check_out_end_time=" + contacts.attributes['pt_c_check_out_end_time']['value'] +
                    "&by_user_meeting_day=" + contacts.attributes['pt_c_by_user_meeting_day']['value'] +
                    "&user_meeting_day=" + contacts.attributes['pt_c_user_meeting_day']['value'] +
                    "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                    "&gender=" + contacts.attributes['pt_c_gender']['value'];
                $columns = [
                    { data: 'ID' },
                    { data: 'device_id' },
                ];
            } else if ($type === "attendance-attendees_absentees") {
                console.log({ "we are here": "we are here" });
                $params = $params + "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                    "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                    "&attendance_type_id=" + contacts.attributes['pt_c_attendance_type_id']['value'] +
                    "&by_user_meeting_day=" + contacts.attributes['pt_c_by_user_meeting_day']['value'] +
                    "&user_meeting_day=" + contacts.attributes['pt_c_user_meeting_day']['value'] +
                    "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                    "&gender=" + contacts.attributes['pt_c_gender']['value'];
                $columns = [
                    { data: 'ID' },
                    { data: 'client_id' },
                ];
            } else {
                $params = $params + "&selected_date=" + contacts.attributes['pt_c_selected_date']['value'] +
                    "&by_clocking_medium=" + contacts.attributes['pt_c_by_clocking_medium']['value'] +
                    "&clocking_medium=" + contacts.attributes['pt_c_clocking_medium']['value'] +
                    "&by_web_status=" + contacts.attributes['pt_c_by_web_status']['value'] +
                    "&web_status=" + contacts.attributes['pt_c_web_status']['value'];
                $columns = [
                    { data: 'ID' },
                    { data: 'device_id' },
                ];
            }
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="attendance-attendees_absentees-agents"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                "&attendance_type_id=" + contacts.attributes['pt_c_attendance_type_id']['value'];
            var $columns = [
                { data: 'ID' },
                { data: 'client_id' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="attendance-clocking"], [pagin_table="attendance-approvals"], [pagin_table="attendance-approvals_all"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                "&selected_date=" + contacts.attributes['pt_c_selected_date']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&by_clocking_time=" + contacts.attributes['pt_c_by_clocking_time']['value'] +
                "&clockintime=" + contacts.attributes['pt_c_clockintime']['value'] +
                "&clockouttime=" + contacts.attributes['pt_c_clockouttime']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                "&gender=" + contacts.attributes['pt_c_gender']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'firstname' },
                { data: 'gender' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });


                    const $data = e.json.aaData;
                    console.log($data.length, $data, e.json.totalMemberCount, typeof $data[0]);
                    if (typeof $data[0] === 'object') {
                        const totalMembers = e.json.totalMemberCount;
                        const totalRecords = e.json.iTotalRecords;
                        const $memberPercent = (totalRecords * 100) / totalMembers;
                        var $progressMemberVar = (totalMembers <= 25) ? "success" : "danger";
                        $progressMemberVar = (totalMembers > 25 && totalMembers <= 50) ? "info" : $progressMemberVar;
                        $progressMemberVar = (totalMembers > 50 && totalMembers <= 75) ? "warning" : $progressMemberVar;
                        if ($memberPercent <= 25) {
                            $progressMemberVar = "love-kiss";
                            $progressTxt = "danger";
                        } else if ($memberPercent > 25 && $memberPercent <= 50) {
                            $progressMemberVar = "sunny-morning";
                            $progressTxt = "warning";
                        } else if ($memberPercent > 50 && $memberPercent <= 75) {
                            $progressMemberVar = "malibu-beach";
                            $progressTxt = "info";
                        } else {
                            $progressMemberVar = "happy-green";
                            $progressTxt = "success";
                        }
                        $('[pagin_load_percentage_bar]').html(
                            "<div class=\"widget-content-wrapper\">" +
                            "<div class=\"widget-content-left pr-2 fsize-1\">" +
                            "<div class=\"widget-numbers mt-0 fsize-3 text-" + $progressTxt + "\">" + $memberPercent + "%</div>" +
                            "</div>" +
                            "<div class=\"progress-bar-xs progress\">" +
                            "<div class=\"progress-bar bg-" + $progressMemberVar + "\" role=\"progressbar\"" +
                            "aria-valuenow=\"" + $memberPercent + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + $memberPercent + "%;\">" +
                            "</div> </div> </div>");
                    }
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="attendance-report"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                "&gender=" + contacts.attributes['pt_c_gender']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'] +
                "&by_attendance_status_id=" + contacts.attributes['pt_c_by_attendance_status_id']['value'] +
                "&attendance_status_id=" + contacts.attributes['pt_c_attendance_status_id']['value'] +
                "&by_user_meeting_day_id=" + contacts.attributes['pt_c_by_user_meeting_day_id']['value'] +
                "&user_meeting_day_id=" + contacts.attributes['pt_c_user_meeting_day_id']['value'];
            var $columns = [
                { data: 'ID' },
                { data: 'firstname' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="member-notifications"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];
            var $columns = [
                { data: 'ID' },
                // { data: 'type' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
        cc._s(`[pagin_table="attendance-report-member"],[pagin_table="attendance-report-agent"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params, $columns;

            if ($type === "attendance-report-agent") {
                $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                    "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                    "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                    "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                    "&page=" + contacts.attributes['pt_c_page']['value'] +
                    "&file=" + contacts.attributes['pt_c_file']['value'];
                $columns = [
                    { data: 'ID' },
                    { data: 'firstname' },
                ];
            } else {
                $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                    "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                    "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                    "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                    "&by_clocking_medium_id=" + contacts.attributes['pt_c_by_clocking_medium_id']['value'] +
                    "&clocking_medium_id=" + contacts.attributes['pt_c_clocking_medium_id']['value'] +
                    "&by_web_clocking_status_id=" + contacts.attributes['pt_c_by_web_clocking_status_id']['value'] +
                    "&web_clocking_status_id=" + contacts.attributes['pt_c_web_clocking_status_id']['value'] +
                    "&member_id=" + contacts.attributes['pt_c_member_id']['value'] +
                    "&page=" + contacts.attributes['pt_c_page']['value'] +
                    "&file=" + contacts.attributes['pt_c_file']['value'] +
                    "&by_excuses_remarks_id=" + contacts.attributes['pt_c_by_excuses_remarks_id']['value'] +
                    "&excuses_remarks_id=" + contacts.attributes['pt_c_excuses_remarks_id']['value'] +
                    "&by_user_meeting_day_id=" + contacts.attributes['pt_c_by_user_meeting_day_id']['value'] +
                    "&user_meeting_day_id=" + contacts.attributes['pt_c_user_meeting_day_id']['value'];
                $columns = [
                    { data: 'ID' },
                    { data: 'device_id' },
                ];
            }

            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="membership-data"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                "&gender=" + contacts.attributes['pt_c_gender']['value'] +
                "&by_status=" + contacts.attributes['pt_c_by_status']['value'] +
                "&status=" + contacts.attributes['pt_c_status']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&by_reg_status=" + contacts.attributes['pt_c_by_reg_status']['value'] +
                "&reg_status=" + contacts.attributes['pt_c_reg_status']['value'] +
                "&by_location=" + contacts.attributes['pt_c_by_location']['value'] +
                "&location=" + contacts.attributes['pt_c_location']['value'] +
                "&by_country=" + contacts.attributes['pt_c_by_country']['value'] +
                "&country=" + contacts.attributes['pt_c_country']['value'] +
                "&by_region=" + contacts.attributes['pt_c_by_region']['value'] +
                "&region=" + contacts.attributes['pt_c_region']['value'] +
                "&by_district=" + contacts.attributes['pt_c_by_district']['value'] +
                "&district=" + contacts.attributes['pt_c_district']['value'] +
                "&by_search=" + contacts.attributes['pt_c_by_search']['value'] +
                "&search=" + contacts.attributes['pt_c_search']['value'] +
                "&filter_type=" + contacts.attributes['pt_c_filter_type']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'firstname' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });


                    const $data = e.json.aaData;
                    console.log($data.length, $data, e.json.totalMemberCount, typeof $data[0]);
                    if (typeof $data[0] === 'object') {
                        const totalMembers = e.json.totalMemberCount;
                        const totalRecords = e.json.iTotalRecords;
                        const $memberPercent = (totalRecords * 100) / totalMembers;
                        var $progressMemberVar = (totalMembers <= 25) ? "success" : "danger";
                        $progressMemberVar = (totalMembers > 25 && totalMembers <= 50) ? "info" : $progressMemberVar;
                        $progressMemberVar = (totalMembers > 50 && totalMembers <= 75) ? "warning" : $progressMemberVar;
                        if ($memberPercent <= 25) {
                            $progressMemberVar = "love-kiss";
                            $progressTxt = "danger";
                        } else if ($memberPercent > 25 && $memberPercent <= 50) {
                            $progressMemberVar = "sunny-morning";
                            $progressTxt = "warning";
                        } else if ($memberPercent > 50 && $memberPercent <= 75) {
                            $progressMemberVar = "malibu-beach";
                            $progressTxt = "info";
                        } else {
                            $progressMemberVar = "happy-green";
                            $progressTxt = "success";
                        }
                        $('[pagin_load_percentage_bar]').html(
                            "<div class=\"widget-content-wrapper\">" +
                            "<div class=\"widget-content-left pr-2 fsize-1\">" +
                            "<div class=\"widget-numbers mt-0 fsize-3 text-" + $progressTxt + "\">" + $memberPercent + "%</div>" +
                            "</div>" +
                            "<div class=\"progress-bar-xs progress\">" +
                            "<div class=\"progress-bar bg-" + $progressMemberVar + "\" role=\"progressbar\"" +
                            "aria-valuenow=\"" + $memberPercent + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + $memberPercent + "%;\">" +
                            "</div> </div> </div>");
                    }
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="membership-data-clocking"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                "&gender=" + contacts.attributes['pt_c_gender']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&filter_type=" + contacts.attributes['pt_c_filter_type']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'firstname' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });


                    const $data = e.json.aaData;
                    console.log($data.length, $data, e.json.totalMemberCount, typeof $data[0]);
                    if (typeof $data[0] === 'object') {
                        const totalMembers = e.json.totalMemberCount;
                        const totalRecords = e.json.iTotalRecords;
                        const $memberPercent = (totalRecords * 100) / totalMembers;
                        var $progressMemberVar = (totalMembers <= 25) ? "success" : "danger";
                        $progressMemberVar = (totalMembers > 25 && totalMembers <= 50) ? "info" : $progressMemberVar;
                        $progressMemberVar = (totalMembers > 50 && totalMembers <= 75) ? "warning" : $progressMemberVar;
                        if ($memberPercent <= 25) {
                            $progressMemberVar = "love-kiss";
                            $progressTxt = "danger";
                        } else if ($memberPercent > 25 && $memberPercent <= 50) {
                            $progressMemberVar = "sunny-morning";
                            $progressTxt = "warning";
                        } else if ($memberPercent > 50 && $memberPercent <= 75) {
                            $progressMemberVar = "malibu-beach";
                            $progressTxt = "info";
                        } else {
                            $progressMemberVar = "happy-green";
                            $progressTxt = "success";
                        }
                        $('[pagin_load_percentage_bar]').html(
                            "<div class=\"widget-content-wrapper\">" +
                            "<div class=\"widget-content-left pr-2 fsize-1\">" +
                            "<div class=\"widget-numbers mt-0 fsize-3 text-" + $progressTxt + "\">" + $memberPercent + "%</div>" +
                            "</div>" +
                            "<div class=\"progress-bar-xs progress\">" +
                            "<div class=\"progress-bar bg-" + $progressMemberVar + "\" role=\"progressbar\"" +
                            "aria-valuenow=\"" + $memberPercent + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + $memberPercent + "%;\">" +
                            "</div> </div> </div>");
                    }
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="assign-meeting-group"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'];

            var $columns = [
                { data: 'member_id' },
                { data: 'attendance_group' },
                // { data: 'by' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="view-created-meetings"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'meeting' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="meeting-clocking"], [pagin_table="meeting-approvals"], [pagin_table="meeting-approvals_all"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                "&selected_date=" + contacts.attributes['pt_c_selected_date']['value'] +
                "&by_meeting_id=" + contacts.attributes['pt_c_by_meeting_id']['value'] +
                "&meeting_id=" + contacts.attributes['pt_c_meeting_id']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&by_clocking_time=" + contacts.attributes['pt_c_by_clocking_time']['value'] +
                "&clockintime=" + contacts.attributes['pt_c_clockintime']['value'] +
                "&clockouttime=" + contacts.attributes['pt_c_clockouttime']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                "&gender=" + contacts.attributes['pt_c_gender']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'firstname' },
                { data: 'gender' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function(e) {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });


                    const $data = e.json.aaData;
                    console.log($data.length, $data, e.json.totalMemberCount, typeof $data[0]);
                    if (typeof $data[0] === 'object') {
                        const totalMembers = e.json.totalMemberCount;
                        const totalRecords = e.json.iTotalRecords;
                        const $memberPercent = (totalRecords * 100) / totalMembers;
                        var $progressMemberVar = (totalMembers <= 25) ? "success" : "danger";
                        $progressMemberVar = (totalMembers > 25 && totalMembers <= 50) ? "info" : $progressMemberVar;
                        $progressMemberVar = (totalMembers > 50 && totalMembers <= 75) ? "warning" : $progressMemberVar;
                        if ($memberPercent <= 25) {
                            $progressMemberVar = "love-kiss";
                            $progressTxt = "danger";
                        } else if ($memberPercent > 25 && $memberPercent <= 50) {
                            $progressMemberVar = "sunny-morning";
                            $progressTxt = "warning";
                        } else if ($memberPercent > 50 && $memberPercent <= 75) {
                            $progressMemberVar = "malibu-beach";
                            $progressTxt = "info";
                        } else {
                            $progressMemberVar = "happy-green";
                            $progressTxt = "success";
                        }
                        $('[pagin_load_percentage_bar]').html(
                            "<div class=\"widget-content-wrapper\">" +
                            "<div class=\"widget-content-left pr-2 fsize-1\">" +
                            "<div class=\"widget-numbers mt-0 fsize-3 text-" + $progressTxt + "\">" + $memberPercent + "%</div>" +
                            "</div>" +
                            "<div class=\"progress-bar-xs progress\">" +
                            "<div class=\"progress-bar bg-" + $progressMemberVar + "\" role=\"progressbar\"" +
                            "aria-valuenow=\"" + $memberPercent + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + $memberPercent + "%;\">" +
                            "</div> </div> </div>");
                    }
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="attendance-results-meeting"], [pagin_table="attendance-attendees_absentees-meeting"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&by_attendance_status_id=" + contacts.attributes['pt_c_by_attendance_status_id']['value'] +
                "&attendance_status_id=" + contacts.attributes['pt_c_attendance_status_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];

            var $columns;
            if ($type === "attendance-results-meeting") {
                $params = $params + "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                    "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                    "&by_time=" + contacts.attributes['pt_c_by_time']['value'] +
                    "&start_time=" + contacts.attributes['pt_c_start_time']['value'] +
                    "&end_time=" + contacts.attributes['pt_c_end_time']['value'] +
                    "&by_check_out_time=" + contacts.attributes['pt_c_by_check_out_time']['value'] +
                    "&check_out_start_time=" + contacts.attributes['pt_c_check_out_start_time']['value'] +
                    "&check_out_end_time=" + contacts.attributes['pt_c_check_out_end_time']['value'] +
                    "&by_meeting_id=" + contacts.attributes['pt_c_by_meeting_id']['value'] +
                    "&meeting_id=" + contacts.attributes['pt_c_meeting_id']['value'] +
                    "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                    "&gender=" + contacts.attributes['pt_c_gender']['value'];
                $columns = [
                    { data: 'ID' },
                    { data: 'device_id' },
                ];
            } else if ($type === "attendance-attendees_absentees-meeting") {
                console.log({ "we are here": "we are here" });
                $params = $params + "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                    "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                    "&attendance_type_id=" + contacts.attributes['pt_c_attendance_type_id']['value'] +
                    "&by_meeting_id=" + contacts.attributes['pt_c_by_meeting_id']['value'] +
                    "&meeting_id=" + contacts.attributes['pt_c_meeting_id']['value'] +
                    "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                    "&gender=" + contacts.attributes['pt_c_gender']['value'];
                $columns = [
                    { data: 'ID' },
                    { data: 'client_id' },
                ];
            } else {
                $params = $params + "&selected_date=" + contacts.attributes['pt_c_selected_date']['value'] +
                    "&by_clocking_medium=" + contacts.attributes['pt_c_by_clocking_medium']['value'] +
                    "&clocking_medium=" + contacts.attributes['pt_c_clocking_medium']['value'] +
                    "&by_web_status=" + contacts.attributes['pt_c_by_web_status']['value'] +
                    "&web_status=" + contacts.attributes['pt_c_web_status']['value'];
                $columns = [
                    { data: 'ID' },
                    { data: 'device_id' },
                ];
            }
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="meeting-report"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                "&by_group_id=" + contacts.attributes['pt_c_by_group_id']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&by_subgroup_id=" + contacts.attributes['pt_c_by_subgroup_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&by_gender=" + contacts.attributes['pt_c_by_gender']['value'] +
                "&gender=" + contacts.attributes['pt_c_gender']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'] +
                "&by_meeting_id=" + contacts.attributes['pt_c_by_meeting_id']['value'] +
                "&meeting_id=" + contacts.attributes['pt_c_meeting_id']['value'] +
                "&by_attendance_status_id=" + contacts.attributes['pt_c_by_attendance_status_id']['value'] +
                "&attendance_status_id=" + contacts.attributes['pt_c_attendance_status_id']['value'] +
                "&by_user_meeting_day_id=" + contacts.attributes['pt_c_by_user_meeting_day_id']['value'] +
                "&user_meeting_day_id=" + contacts.attributes['pt_c_user_meeting_day_id']['value'];
            var $columns = [
                { data: 'ID' },
                { data: 'firstname' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="view-created-duties"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'duty' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="assign-duty"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'] +
                "&by_duty_id=" + contacts.attributes['pt_c_by_duty_id']['value'] +
                "&duty_id=" + contacts.attributes['pt_c_duty_id']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'name' },
                // { data: 'by' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="view-duty-reports"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_duty_id=" + contacts.attributes['pt_c_by_duty_id']['value'] +
                "&duty_id=" + contacts.attributes['pt_c_duty_id']['value'] +
                "&by_date=" + contacts.attributes['pt_c_by_date']['value'] +
                "&start_date=" + contacts.attributes['pt_c_start_date']['value'] +
                "&end_date=" + contacts.attributes['pt_c_end_date']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'duty' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="view-created-overtime"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'max_minutes' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="view-duty-member-reports"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_duty_id=" + contacts.attributes['pt_c_by_duty_id']['value'] +
                "&duty_id=" + contacts.attributes['pt_c_duty_id']['value'] +
                "&by_admin_report=" + contacts.attributes['pt_c_by_admin_report']['value'] +
                "&admin_report=" + contacts.attributes['pt_c_admin_report']['value'] +
                "&by_member_id=" + contacts.attributes['pt_c_by_member_id']['value'] +
                "&member_id=" + contacts.attributes['pt_c_member_id']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'report' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="attendance-records"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&group_id=" + contacts.attributes['pt_c_group_id']['value'] +
                "&subgroup_id=" + contacts.attributes['pt_c_subgroup_id']['value'] +
                "&gender=" + contacts.attributes['pt_c_gender']['value'] +
                "&status=" + contacts.attributes['pt_c_status']['value'] +
                "&quarter=" + contacts.attributes['pt_c_quarter']['value'] +
                "&get_date=" + contacts.attributes['pt_c_get_date']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'firstname' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="client-notifications"], [pagin_table="client-notifications-comments"],
            [pagin_table="client-notifications-replies"], [pagin_table="client-notifications-ncr_views"]`, (contacts) => {
            var $type = contacts.attributes['pagin_table']['value'];
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'];

            if ($type === "client-notifications-comments") {
                $params = $params +
                    "&notification_id=" + contacts.attributes['pt_c_notification_id']['value'];
            } else if ($type === "client-notifications-replies") {
                $params = $params +
                    "&comment_id=" + contacts.attributes['pt_c_comment_id']['value'] +
                    "&notification_id=" + contacts.attributes['pt_c_notification_id']['value'];
            } else if ($type === "client-notifications-ncr_views") {
                $params = $params +
                    "&by_comment_id=" + contacts.attributes['pt_c_by_comment_id']['value'] +
                    "&comment_id=" + contacts.attributes['pt_c_comment_id']['value'] +
                    "&by_notification_id=" + contacts.attributes['pt_c_by_notification_id']['value'] +
                    "&notification_id=" + contacts.attributes['pt_c_notification_id']['value'] +
                    "&by_comment_reply_id=" + contacts.attributes['pt_c_by_comment_reply_id']['value'] +
                    "&comment_reply_id=" + contacts.attributes['pt_c_comment_reply_id']['value'] +
                    "&comment_id=" + contacts.attributes['pt_c_comment_id']['value'];
            }



            var $columns = [
                { data: 'ID' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/client-notifications/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    cc.stopAudio();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="member-accounts"]`, (contacts) => {
            var $params = "acc_id=" + contacts.attributes['pt_c_acc_id']['value'] +
                "&page=" + contacts.attributes['pt_c_page']['value'] +
                "&user_id=" + contacts.attributes['pt_c_user_id']['value'] +
                "&api=" + contacts.attributes['pt_c_api']['value'] +
                "&file=" + contacts.attributes['pt_c_file']['value'] +
                "&by_registration_status=" + contacts.attributes['pt_c_by_registration_status']['value'] +
                "&registration_status=" + contacts.attributes['pt_c_registration_status']['value'];

            var $columns = [
                { data: 'ID' },
                { data: 'firstname' },
            ];
            console.log($columns);
            $(contacts).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/members/members_by_registration_complete_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc.bgImg();
                    cc.simpleImgPop();
                    // image_pop($);
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                },
                "dom": 'lBfrtip',
                "select": true,
                "buttons": [
                    'copy', 'csv', 'excel', 'print'
                ]
            });
        });
        cc._s(`[pagin_table="verification_sm"], [pagin_table="verification_md"]`, (verification) => {
            var $type = verification.attributes['pagin_table']['value'];
            var $params = "acc_id=" + verification.attributes['pt_c_id']['value'] +
                "&user=" + verification.attributes['pt_c_user']['value'] +
                "&member=" + verification.attributes['pt_c_member']['value'] +
                "&verified=" + verification.attributes['pt_c_verified']['value'] +
                "&api=" + verification.attributes['pt_c_api']['value'];
            var $columns;
            if ($type === "verification_md") {
                $columns = [
                    { data: 'ID' },
                    { data: 'firstname' },
                    { data: 'surname' },
                    { data: 'phone' },
                ];
            } else {
                $columns = [
                    { data: 'ID' },
                    { data: 'firstname' },
                    { data: 'surname' },
                ];
            }
            console.log($columns);
            $(verification).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/" + $type + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                    cc._s("[make-general-posts]", function(form) {

                        form.addEventListener('submit', function(fE) {
                            fE.preventDefault();
                            console.log(form)

                            var confirm_msg = form['attributes']['make-general-posts']['value'];
                            cc.submit_form('[make-general-posts="' + confirm_msg + '"]', confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
        cc._s(`[pagin_table="clocking-agent-assignments"]`, (assignments) => {
            var $params;
            var $tableType = assignments.attributes['pt_c_table-type']['value'];
            if ($tableType === "clocking-agent-groups") {
                $params = "acc_id=" + assignments.attributes['pt_c_id']['value'] +
                    "&user_id=" + assignments.attributes['pt_c_user']['value'] +
                    "&viewtype=" + assignments.attributes['pt_c_viewtype']['value'] +
                    "&agent=" + assignments.attributes['pt_c_agent']['value'] +
                    "&api=" + assignments.attributes['pt_c_api']['value'];
            } else if ($tableType === "clocking-agent-subgroups") {
                $params = "acc_id=" + assignments.attributes['pt_c_id']['value'] +
                    "&user_id=" + assignments.attributes['pt_c_user']['value'] +
                    "&viewtype=" + assignments.attributes['pt_c_viewtype']['value'] +
                    "&agent=" + assignments.attributes['pt_c_agent']['value'] +
                    "&api=" + assignments.attributes['pt_c_api']['value'];
            } else if ($tableType === "clocking-agent-group-agents") {
                $params = "acc_id=" + assignments.attributes['pt_c_id']['value'] +
                    "&user_id=" + assignments.attributes['pt_c_user']['value'] +
                    "&viewtype=" + assignments.attributes['pt_c_viewtype']['value'] +
                    "&group=" + assignments.attributes['pt_c_group']['value'] +
                    "&api=" + assignments.attributes['pt_c_api']['value'];
            } else if ($tableType === "clocking-agent-subgroup-agents") {
                $params = "acc_id=" + assignments.attributes['pt_c_id']['value'] +
                    "&user_id=" + assignments.attributes['pt_c_user']['value'] +
                    "&viewtype=" + assignments.attributes['pt_c_viewtype']['value'] +
                    "&subgroup=" + assignments.attributes['pt_c_subgroup']['value'] +
                    "&api=" + assignments.attributes['pt_c_api']['value'];
            }

            var $columns = [
                { data: 'ID' },
                { data: 'info' },
            ];
            console.log($columns);
            $(assignments).DataTable({
                'lengthMenu': [10, 25, 50, 100, 500, 1000],
                'processing': true,
                'serverSide': true,
                'serverMethod': 'post',
                'ajax': {
                    'url': cc.BASE_URL + "assets/php/custom/clocking-agents/" + $tableType + "_pagin.php?" + $params
                },
                'columns': $columns,
                "fnDrawCallback": function() {
                    cc.selectNew();
                    cc.openModal();
                    cc._s("[btn-submit-post]", function(button) {
                        button.addEventListener('click', function(fE) {
                            fE.preventDefault();
                            console.log(button)

                            var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                            var url = button['attributes']['btn-submit-post--url']['value'];
                            var data = button['attributes']['btn-submit-post']['value'];

                            cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
                        }, false);

                    });
                    cc._s("[make-general-posts]", function(form) {

                        form.addEventListener('submit', function(fE) {
                            fE.preventDefault();
                            console.log(form)

                            var confirm_msg = form['attributes']['make-general-posts']['value'];
                            cc.submit_form('[make-general-posts="' + confirm_msg + '"]', confirm_msg = confirm_msg);
                        }, false);

                    });
                }
            });
        });
    }, false);
})(window, document, jQuery, new locale(), Croppr);

function image_pop($) {
    $('[img="act"]').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
}
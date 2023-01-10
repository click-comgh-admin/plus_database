(function(window, document, $, cc) {
    document.addEventListener('DOMContentLoaded', function(loaded) {

        function msg_members_list($messages, $aid, $acc_name, $file_url) {
            let $messageList = '';
            for (let i = 0; i < $messages.length; i++) {
                const $message = $messages[i];
                const $has_attachment = ($message.attached.length == 0) ? "" :
                    `<div email-tabs="container-list--item---content----attach">
                    <span class="pe-7s-link"></span>
                </div>`;
                const $sender_id = $message.parties[0].pdccmc_sender_id;
                const $date = new Date($message.pdccmc_date);
                const $today = new Date();
                const $date_time_display = ($date.getFullYear() == $today.getFullYear()) ?
                    (($date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay()) == ($today.getFullYear() + "/" + $today.getMonth() + "/" + $today.getDay())) ?
                    $date.getHours() + "/" + $date.getUTCMinutes() :
                    $date.getMonth() + "/" + $date.getDay() :
                    $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay();
                const $shortMsg = ($message.pdccmc_message.length > 70) ? $message.pdccmc_message.substring(0, 70) + "..." : $message.pdccmc_message;
                let $shortName = $acc_name.split(" ");
                $shortName = $shortName[0].substring(0, 1) + $shortName[1].substring(0, 1);

                let $senderIdentity;
                if (($sender_id == $aid) && ($message.parties[0].pdccmc_sender == 1)) {
                    $senderIdentity = `<h4 email-tabs="container-list--item---content----client_abbr" class="shadow shadow-sm">
                        ${$shortName}
                    </h4>`;
                } else if ($message.parties[0].pdccmc_sender == 2) {
                    cc.fetchRelay({ url: cc.API_BASE_URL + "membership/one_client_member?account_id=" + $aid + "&id=" + $sender_id }, function(response) {
                        window.outbox_image_url = response.data.pdm_profile_picture;
                    });
                    $senderIdentity = `<img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"
                        src="${$file_url}files/members/profile-picture/${window.outbox_image_url}">`;
                }

                $messageList += `<a class="list-group-item" email-tabs="container-list--item" href="members?show=${$message.pdccmc_id}">
                    <div email-tabs="container-list--item---content">
                        ${$senderIdentity}
                        <div email-tabs="container-list--item---content----text">
                            <h6> ${$message.pdccmc_subject} </h6>
                            <h6 class="small">${$shortMsg}</h6>
                        </div>
                        ${$has_attachment}
                    </div>
                    <div email-tabs="container-list--item---others">
                        <div email-tabs="container-list--item---others----date">
                            ${$date_time_display}
                        </div>
                    </div>
                </a>`;
            }
            return `<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">
                ${$messageList}
            </ul>`;
        }

        function msg_cc_list($messages, $type, $acc_name, $file_url) {
            let $messageList = '';
            for (let i = 0; i < $messages.length; i++) {
                const $message = $messages[i];
                const $has_attachment = ($message.attached.length == 0) ? "" :
                    `<div email-tabs="container-list--item---content----attach">
                    <span class="pe-7s-link"></span>
                </div>`;
                const $date = new Date($message.pdccmc_date);
                const $today = new Date();
                const $date_time_display = ($date.getFullYear() == $today.getFullYear()) ?
                    (($date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay()) == ($today.getFullYear() + "/" + $today.getMonth() + "/" + $today.getDay())) ?
                    $date.getHours() + "/" + $date.getUTCMinutes() :
                    $date.getMonth() + "/" + $date.getDay() :
                    $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay();
                const $shortMsg = ($message.pdccmc_message.length > 70) ? $message.pdccmc_message.substring(0, 70) + "..." : $message.pdccmc_message;
                let $shortName = $acc_name.split(" ");
                $shortName = $shortName[0].substring(0, 1) + $shortName[1].substring(0, 1);
                // customer-care?show-messages=<?= $message['pdccmc_id']; ?>#<?= $message['pdccmc_id']; ?>
                // <img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"
                //         src="<?= FILE_BUCKET_BASE_URL; ?>files/admin/logo.png">
                let $senderIdentity = `<img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"
                    src="${$file_url}files/admin/logo.png">`;
                if ($type == 1) {
                    $href = `customer-care?show-messages=${$message.pdccmc_id}#${$message.pdccmc_id}`;
                } else {
                    $href = `customer-care?show=${$message.pdccmc_id}#${$message.pdccmc_id}`;
                }
                $messageList += `<a class="list-group-item" email-tabs="container-list--item" href="${$href}">
                    <div email-tabs="container-list--item---content">
                        ${$senderIdentity}
                        <div email-tabs="container-list--item---content----text">
                            <h6> ${$message.pdccmc_subject} </h6>
                            <h6 class="small">${$shortMsg}</h6>
                        </div>
                        ${$has_attachment}
                    </div>
                    <div email-tabs="container-list--item---others">
                        <div email-tabs="container-list--item---others----date">
                            ${$date_time_display}
                        </div>
                    </div>
                </a>`;
            }
            return `<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">
                ${$messageList}
            </ul>`;
        }

        function msg_peers_list($messages, $type, $uid, $aid, $acc_name, $file_url) {
            let $messageList = '';
            for (let i = 0; i < $messages.length; i++) {
                const $message = $messages[i];
                const $has_attachment = ($message.attached.length == 0) ? "" :
                    `<div email-tabs="container-list--item---content----attach">
                    <span class="pe-7s-link"></span>
                </div>`;
                const $date = new Date($message.pdccmc_date);
                const $today = new Date();
                const $date_time_display = ($date.getFullYear() == $today.getFullYear()) ?
                    (($date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay()) == ($today.getFullYear() + "/" + $today.getMonth() + "/" + $today.getDay())) ?
                    $date.getHours() + "/" + $date.getUTCMinutes() :
                    $date.getMonth() + "/" + $date.getDay() :
                    $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay();
                const $shortMsg = ($message.pdccmc_message.length > 70) ? $message.pdccmc_message.substring(0, 70) + "..." : $message.pdccmc_message;
                let $shortName = $acc_name.split(" ");
                $shortName = $shortName[0].substring(0, 1) + $shortName[1].substring(0, 1);
                let $other_info, $sender_id, $showMemberName;
                if ($type == 1) {
                    $sender_id = ($message.pdccmc_sender_id == $uid) ? $message.pdccmc_recipient_id : $message.pdccmc_sender_id;
                    $href = `customer-care?show-messages=${$message.pdccmc_id}#${$message.pdccmc_id}`;
                } else {
                    $sender_id = $uid;
                    $href = `customer-care?show=${$message.pdccmc_id}#${$message.pdccmc_id}`;
                }
                cc.fetchRelay({ url: cc.API_BASE_URL + "client-membership/one_client_user?account_id=" + $aid + "&id=" + $sender_id }, function(response) {
                    window.senderOtherInfos_rd = response.data[0];
                });
                $other_info = window.senderOtherInfos_rd;
                if ($type == 1) {
                    $showMemberName = `<h6 class="font-weight-bold">${$other_info.pdcu_firstname} ${$other_info.pdcu_surname}</h6>`;
                } else {
                    $showMemberName = "";
                }
                let $senderIdentity = `<img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"
                    src="${$file_url}files/clients/profile-picture/${$other_info.pdcu_profile_picture}">`;
                const $messageId = ($message.pdccmc_thread_id == 0) ? $message.pdccmc_id : $message.pdccmc_thread_id;
                $messageList += `<a class="list-group-item" email-tabs="container-list--item" href="peers?show=${$messageId}#${$messageId}">
                    <div email-tabs="container-list--item---content">
                        ${$senderIdentity}
                        <div email-tabs="container-list--item---content----text">
                            ${$showMemberName}
                            <h6> ${$message.pdccmc_subject} </h6>
                            <h6 class="small">${$shortMsg}</h6>
                        </div>
                        ${$has_attachment}
                    </div>
                    <div email-tabs="container-list--item---others">
                        <div email-tabs="container-list--item---others----date">
                            ${$date_time_display}
                        </div>
                    </div>
                </a>`;
            }
            return `<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">
                ${$messageList}
            </ul>`;
        }

        function msg_list($messages, $aid, $acc_name, $file_url) {
            let $messageList = '';
            for (let i = 0; i < $messages.length; i++) {
                const $message = $messages[i];
                const $has_attachment = ($message.attached.length == 0) ? "" :
                    `<div email-tabs="container-list--item---content----attach">
                    <span class="pe-7s-link"></span>
                </div>`;
                const $sender_id = $message.parties[0].pdccmc_sender_id;
                const $date = new Date($message.pdccmc_date);
                const $today = new Date();
                const $date_time_display = ($date.getFullYear() == $today.getFullYear()) ?
                    (($date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay()) == ($today.getFullYear() + "/" + $today.getMonth() + "/" + $today.getDay())) ?
                    $date.getHours() + "/" + $date.getUTCMinutes() :
                    $date.getMonth() + "/" + $date.getDay() :
                    $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay();
                const $shortMsg = ($message.pdccmc_message.length > 70) ? $message.pdccmc_message.substring(0, 70) + "..." : $message.pdccmc_message;
                let $shortName = $acc_name.split(" ");
                $shortName = $shortName[0].substring(0, 1) + $shortName[1].substring(0, 1);

                let $senderIdentity;
                if (($sender_id == $aid) && ($message.parties[0].pdccmc_sender == 1)) {
                    $senderIdentity = `<h4 email-tabs="container-list--item---content----client_abbr" class="shadow shadow-sm">
                        ${$shortName}
                    </h4>`;
                } else if ($message.parties[0].pdccmc_sender == 2) {
                    cc.fetchRelay({ url: cc.API_BASE_URL + "communications/clients/one_contact?account_id=" + $aid + "&id=" + $sender_id }, function(response) {
                        window.outbox_image_url = response.data[0].pdccc_photo;
                    });
                    $senderIdentity = `<img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"
                        src="${$file_url}files/clients/contact-picture/${window.outbox_image_url}">`;
                }

                $messageList += `<a class="list-group-item" email-tabs="container-list--item" href="contacts?show=${$message.pdccmc_id}">
                    <div email-tabs="container-list--item---content">
                        ${$senderIdentity}
                        <div email-tabs="container-list--item---content----text">
                            <h6> ${$message.pdccmc_subject} </h6>
                            <h6 class="small">${$shortMsg}</h6>
                        </div>
                        ${$has_attachment}
                    </div>
                    <div email-tabs="container-list--item---others">
                        <div email-tabs="container-list--item---others----date">
                            ${$date_time_display}
                        </div>
                    </div>
                </a>`;
            }
            return `<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">
                ${$messageList}
            </ul>`;
        }

        function make_url_call(url, callbackFunc) {
            cc.fetchRelay({ url: cc.API_BASE_URL + "communications/clients/mailer/" + url }, function(response) {
                // console.log(response)
                let list = response.data;
                list = Object.keys(list).map((key) => [key, list[key]])
                $messages = [];
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    if (!$messages.includes(li)) {
                        $messages.push(li);
                    }
                }
                if ($messages.length == 0) {
                    $('[email-tabs="container"]').html('<h5 class="card-title">No Data Found</h5>');
                } else {
                    return callbackFunc($messages);
                }
            });
        }

        cc._s(`[comms-search]`, (cs) => {
            $(cs).on('keyup', function(keyup) {
                console.log(keyup)
                const $url = $(cs).attr('comms-search');
                const $at = $(cs).attr('comms-search--at');
                const $aid = $(cs).attr('comms-search--aid');
                const $acc_name = $(cs).attr('comms-search--acc_name');
                const query = $(cs).val();
                if (query == "") {
                    window.location.reload(true);
                } else {
                    if ($at.toLowerCase() == "members") {
                        const url = $at + "/search?query=" + query + "&account_id=" + $aid;
                        make_url_call(url, function(msg) {
                            $('[email-tabs="container"]').html(msg_members_list(msg, $aid, $acc_name, cc.FILE_BUCKET_BASE_URL));
                        });
                    } else if ($at.toLowerCase() == "customer-care") {
                        const $uid = $(cs).attr('comms-search--uid');
                        const $type = $(cs).attr('comms-search--type');
                        console.log($at)
                        const url = $at + "/search?user_id=" + $uid + "&account_id=" + $aid + "&type=" + $type + "&query=" + query;
                        make_url_call(url, function(msg) {
                            $('[email-tabs="container"]').html(msg_cc_list(msg, $type, $acc_name, cc.FILE_BUCKET_BASE_URL));
                        });
                    } else if ($at.toLowerCase() == "peers") {
                        const $type = $(cs).attr('comms-search--type');
                        const $uid = $(cs).attr('comms-search--uid');
                        const url = $at + "/search?user_id=" + $uid + "&account_id=" + $aid + "&type=" + $type + "&query=" + query;
                        make_url_call(url, function(msg) {
                            $('[email-tabs="container"]').html(msg_peers_list(msg, $type, $uid, $aid, $acc_name, cc.FILE_BUCKET_BASE_URL));
                        });
                    } else {
                        const url = "search?query=" + query + "&account_id=" + $aid;
                        make_url_call(url, function(msg) {
                            $('[email-tabs="container"]').html(msg_list(msg, $aid, $acc_name, cc.FILE_BUCKET_BASE_URL));
                        });
                    }
                }
            })
        });
    }, false);
})(window, document, jQuery, new locale());
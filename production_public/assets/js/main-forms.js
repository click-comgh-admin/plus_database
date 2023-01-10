(function(window, document, $, cc, Croppr) {
    document.addEventListener('DOMContentLoaded', function(loaded) {
        cc._s("[make-general-posts]", function(form) {

            form.addEventListener('submit', function(fE) {
                fE.preventDefault();

                var confirm_msg = form['attributes']['make-general-posts']['value'];
                cc.submit_form('[make-general-posts="' + confirm_msg + '"]', confirm_msg = confirm_msg);
            }, false);

        });
        cc._s("[btn-general-posts--form]", function(postForm) {
            postForm.addEventListener('submit', function(pF) {
                pF.preventDefault();

                // console.log({
                //     "pF": pF,
                //     "submitter": pF.submitter,
                //     "url": pF.submitter['attributes']['btn-general-posts--url']['value']
                // });

                cc._s("[btn-general-posts]", function(button) {
                    var url = pF.submitter['attributes']['btn-general-posts--url']['value'];
                    var title = pF.submitter['attributes']['btn-general-posts']['value'];

                    cc._s('[btn-general-posts--form="' + title + '"]', function(form) {
                        var confirm_msg = form['attributes']['btn-general-posts--form']['value'];
                        cc.submit_form_url('[btn-general-posts--form="' + confirm_msg + '"]', url = url, confirm_msg = confirm_msg);
                    });
                });
            }, false);
        });
        cc._s("[make-noswal-posts]", function(form) {

            form.addEventListener('submit', function(fE) {
                fE.preventDefault();

                var confirm_msg = form['attributes']['make-noswal-posts']['value'];
                var form_id = form['attributes']['make-noswal-posts--id']['value'];
                cc.submit_form('[make-noswal-posts="' + confirm_msg + '"]', confirm_msg = confirm_msg,
                    token = cc.TOKEN, noSwalResponse = true,
                    function(res) {
                        let msg, data;
                        msg = res.msg;
                        data = res.data;
                        const $display = `[make-noswal-posts--response="${form_id}"]`;
                        console.log($display, res, res.error, data,
                            $($display))
                        if (res.error == true) {
                            let ERROR_RESPONSE;
                            if (data != undefined) {
                                ERROR_RESPONSE = "<ul class='mb-0'>";
                                for (let i = 0; i < data.length; i++) {
                                    const list = data[i];
                                    ERROR_RESPONSE += "<li>" + list.msg + "</li>";
                                }
                                ERROR_RESPONSE += "</ul>";
                                console.log(ERROR_RESPONSE)
                            } else {
                                ERROR_RESPONSE = msg;
                            }
                            $($display).html(`<div class="alert alert-warning alert-dismissible fade show shadow shadow-lg pb-0" role="alert">
                                <strong class="text-danger">MSG!</strong> ${ERROR_RESPONSE}.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`);
                        } else {
                            $($display).html(`<div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
                                <strong class="text-success">MSG!</strong> ${msg}.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`);
                        }
                    }
                );
            }, false);

        });
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
        cc._s("[btn-submit-download]", function(button) {
            button.addEventListener('click', function(fE) {
                fE.preventDefault();
                console.log(button)

                var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                var url = button['attributes']['btn-submit-post--url']['value'];
                var data = button['attributes']['btn-submit-download']['value'];
                var download = button['attributes']['btn-submit-post--download']['value'];

                cc.json_form(url = url, data = data, confirm_msg = confirm_msg,
                    token = cc.TOKEN, noSwalResponse = true,
                    function(res) {
                        const url = res.msg;
                        const $display = `[btn-submit-post--display="${download}"]`;
                        $($display).html(`<div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
                            <a class="btn btn-info btn-sm btn-block" target="_blank" href="${cc.FILE_BUCKET_BASE_URL}files/${url}">
                                <strong class="text-white">Download File</strong>
                            </a>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`);
                    }
                );
            }, false);
        });

        cc._s('[name="credit_amount"]', function(select) {
            let $amounts = [];
            cc.fetchRelay({ url: cc.CLIENT_BASE_URL + "assets/php/custom/fetch_reply.php?fetch=communications-clients-credit-units" }, (response) => {
                let list = response.data;
                delete(list['per_unit_cost']);
                list = Object.keys(list).map((key) => [key, list[key]])
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    const _id = li['pdccmc_id'];
                    const _amount = li['pdccmc_amount'];
                    let newData = [];
                    newData['id'] = _id;
                    newData['amount'] = _amount;
                    if (!$amounts.includes(newData)) {
                        $amounts.push(newData);
                    }
                }
            });
            console.log(select);
            $(select).on('change', function(e) {
                var amount = select.value;
                for (let i = 0; i < $amounts.length; i++) {
                    if ($amounts[i]['id'] == amount) {
                        var per_unit = $('[credit_in_units="credit_amount"]').attr('per_unit');
                        var credit_in_units = (new Number($amounts[i]['amount']) / new Number(per_unit));
                        $('[credit_in_units="credit_amount"]').html(parseInt(credit_in_units));
                    }
                }
            });
            select.addEventListener('change', function(fE) {
                fE.preventDefault();
                console.log(fE);
                var amount = select.value;
                for (let i = 0; i < $amounts.length; i++) {
                    if ($amounts[i]['id'] == amount) {
                        var per_unit = $('[credit_in_units="credit_amount"]').attr('per_unit');
                        var credit_in_units = (new Number($amounts[i]['amount']) / new Number(per_unit));
                        $('[credit_in_units="credit_amount"]').html(parseInt(credit_in_units));
                    }
                }
            }, false);
        });
        cc._s("[btn-submit-multiple]", function(button) {
            button.addEventListener('click', function(fE) {
                fE.preventDefault();

                var confirm_msg = button['attributes']['btn-submit-multiple--confirm']['value'];
                var url = button['attributes']['btn-submit-multiple--url']['value'];
                var data = button['attributes']['btn-submit-multiple']['value'];

                let selectedMessages = [];
                cc._s('[name="message_id[]"]', function(inputs) {
                    if ($(inputs).is(":checked")) {
                        if (!selectedMessages.includes(inputs)) {
                            selectedMessages.push(inputs);
                        }
                    }
                });
                if (selectedMessages.length >= 1) {
                    let mids = "[";
                    for (let i = 0; i < selectedMessages.length; i++) {
                        const selectedMessage = selectedMessages[i];
                        const message_id = $(selectedMessage).val();
                        mids += '{"id": "' + message_id + '"},';
                    }
                    mids = mids.substring(0, mids.length - 1) + "]";
                    data = data.substring(0, data.length - 1) + ', "message_id": ' + mids + '}';
                    cc.json_form(url = url, data = data, confirm_msg = confirm_msg)
                }

            }, false);

        });

        cc._s('[name="space"]', function(select) {
            let $costs = [];
            cc.fetchRelay({ url: cc.CLIENT_BASE_URL + "assets/php/custom/fetch_reply.php?fetch=file-manager-spaces" }, function(response) {
                let list = response.data;
                list = Object.keys(list).map((key) => [key, list[key]])
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    if (!$costs.includes(li)) {
                        $costs.push(li);
                    }
                }
            });
            console.log($costs)
            select.addEventListener('change', function(fE) {
                fE.preventDefault();
                var id = select.value;
                for (let i = 0; i < $costs.length; i++) {
                    const _this_ = $costs[i];
                    if (_this_['pdcfmf_id'] == id) {
                        let space = _this_['pdcfmf_space'];
                        let space_cost = _this_['pdcfmf_cost'];
                        let _show_ = space.replace("KB", 'KiloByte(s)').replace("MB", 'MegaByte(s)').replace("GB", 'GigaByte(s)') + " @ GHC " + space_cost + ".00";
                        $('[space_purchase="space_cost"]').html(_show_);
                    }
                }
            }, false);
        });

        $('[submit_members_excel_registration="submit"]').on('submit', function(smm) {
            smm.preventDefault();
            Swal.fire({
                title: `<small><i><strong>Upload Excel File</strong></i></small>`,
                type: 'info',
                html: `<b></b>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Yes',
                showLoaderOnConfirm: true,
                // timer: 2000,
                // timerProgressBar: true,
                preConfirm: (savePackage) => {
                    const submit_form = document.querySelector('[submit_members_excel_registration="submit"]');
                    console.log(submit_form);
                    fetch(cc.API_BASE_URL + 'client-membership/excel-registration', {
                        method: "POST",
                        headers: {
                            "Authorization": "Bearer " + cc.TOKEN,
                            "Accept": "application/json, text/plain, */*"
                        },
                        body: new FormData(submit_form)
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        if (data.error == true) {
                            if (submit_form !== null) {
                                let errorList = '';
                                const processedData = data['data'];
                                // console.log(processedData)
                                if (processedData !== undefined) {
                                    if (processedData.length > 1) {
                                        errorList = '<ul class="list-unstyled my-0">';
                                        processedData.forEach((d) => {
                                            errorList += `<li class="py-2">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="badge badge-circle badge-danger mr-3">
                                                                <i class="pe-7s-junk" style="font-size: 1.5em;"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-0">${d['msg']}</h6>
                                                        </div>
                                                    </div>
                                                </li>`;
                                        });
                                        errorList += `</ul>`;
                                    } else {
                                        errorList = `${processedData[0]['msg']}`;
                                    }
                                } else {
                                    errorList = data['msg'];
                                }
                                Swal.fire({
                                    title: '<strong>Error(s)</strong>',
                                    type: 'error',
                                    html: errorList,
                                    showCloseButton: true,
                                    focusConfirm: false
                                });
                            }
                        } else if (data.error == false) {
                            if (submit_form !== null) {
                                const message = data['msg'];
                                const message_data = data['data'];
                                Swal.fire({
                                    title: `<strong><u><i>${message}</i></u></strong>`,
                                    type: 'success',
                                    focusConfirm: false
                                });
                                setTimeout(function() {
                                    window.location.reload(true);
                                }, 1500);
                            }
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                },
            });
        });

        $('[submit_attendance_members_excel_registration="submit"]').on('submit', function(smm) {
            smm.preventDefault();
            Swal.fire({
                title: `<small><i><strong>Upload Excel File</strong></i></small>`,
                type: 'info',
                html: `<b></b>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Yes',
                showLoaderOnConfirm: true,
                // timer: 2000,
                // timerProgressBar: true,
                preConfirm: (savePackage) => {
                    const submit_form = document.querySelector('[submit_attendance_members_excel_registration="submit"]');
                    console.log(submit_form);
                    fetch(cc.API_BASE_URL + 'attendance/clients/members/registration/excel-registration', {
                        method: "POST",
                        headers: {
                            "Authorization": "Bearer " + cc.TOKEN,
                            "Accept": "application/json, text/plain, */*"
                        },
                        body: new FormData(submit_form)
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        if (data.error == true) {
                            if (submit_form !== null) {
                                let errorList = '';
                                const processedData = data['data'];
                                // console.log(processedData)
                                if (processedData !== undefined) {
                                    if (processedData.length > 1) {
                                        errorList = '<ul class="list-unstyled my-0">';
                                        processedData.forEach((d) => {
                                            errorList += `<li class="py-2">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="badge badge-circle badge-danger mr-3">
                                                                <i class="pe-7s-junk" style="font-size: 1.5em;"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 class="mb-0">${d['msg']}</h6>
                                                        </div>
                                                    </div>
                                                </li>`;
                                        });
                                        errorList += `</ul>`;
                                    } else {
                                        errorList = `${processedData[0]['msg']}`;
                                    }
                                } else {
                                    errorList = data['msg'];
                                }
                                Swal.fire({
                                    title: '<strong>Error(s)</strong>',
                                    type: 'error',
                                    html: errorList,
                                    showCloseButton: true,
                                    focusConfirm: false
                                });
                            }
                        } else if (data.error == false) {
                            if (submit_form !== null) {
                                const message = data['msg'];
                                const message_data = data['data'];
                                Swal.fire({
                                    title: `<strong><u><i>${message}</i></u></strong>`,
                                    type: 'success',
                                    focusConfirm: false
                                });
                                setTimeout(function() {
                                    window.location.reload(true);
                                }, 1500);
                            }
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                },
            });
        });

        cc._s(`[name="account_type"]`, (account_type, i) => {
            const unmutable = (account_type.attributes['unmutable'] == undefined) ?
                "false" : account_type.attributes['unmutable']['value'];
            const isTrial = (account_type.attributes['is-trial'] == undefined) ?
                "false" : account_type.attributes['is-trial']['value'];
            console.log({ unmutable });
            console.log({ account_type, i });
            const append_index = (i + 1) > 1 ? "_" + (i + 1) : "";
            var CLIENT_ID;
            cc._s(`[name="client_id"]`, (client_id) => {
                CLIENT_ID = client_id.value;
            });
            const insert = (({
                response,
                load_selector,
                default_value,
                title,
            }) => {
                // console.log({ response, load_selector });
                let list = response.data;
                list = Object.keys(list).map((key) => [key, list[key]])
                $data = [];
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    if (!$data.includes(li)) {
                        $data.push(li);
                    }
                }
                // console.log($data, load_selector);

                var $selectPlaceholder = title;
                $(load_selector).html('<option value="" selected >' + $selectPlaceholder + '</option>');
                for (let i = 0; i < $data.length; i++) {
                    let li = $data[i];
                    const selected = (default_value == li.pdd_id) ? " selected" : "";
                    var $content = '<option value="' + li.pdd_id + '" ' + selected + '>' + li.pdd_info + '</option>';
                    $(load_selector).html($(load_selector).html() + $content);
                }
            });
            const get_fee = (({
                $duration_id,
                $membership_size_id,
                $account_type_id,
                $no_duration = false,
            }) => {
                console.log({
                    $duration_id,
                    $membership_size_id,
                    $account_type_id,
                    $no_duration
                });
                cc.fetchRelay({
                    url: cc.BASE_URL +
                        "assets/php/custom/fetch_reply.php?fetch=get_subscription_fee&size_id=" +
                        $membership_size_id + "&duration_id=" + $duration_id + "&account_type_id=" +
                        $account_type_id + "&client_id=" + CLIENT_ID + "&no_duration=" + $no_duration,
                }, function(ms_response) {
                    // console.log({ ms_response });
                    try {
                        let ms_cost = ms_response.data['fee'];
                        cc._s('[id="client_subscription_fee' + append_index + '"]', (duration_fee_input) => {

                            // console.log({ ms_cost })
                            $(duration_fee_input).val(ms_cost);
                        });
                        cc._s('[id="client_data_storage_fee"]', (data_storage_fee_input) => {
                            cc._s('[id="client_total_fee"]', (client_total_fee_input) => {
                                const data_storage_fee = data_storage_fee_input["value"];
                                $(client_total_fee_input).val(Math.abs(ms_cost) + Math.abs(data_storage_fee));
                            });
                        });
                    } catch (error) {
                        console.log({ error });
                    }
                });
            })
            const inputBoxActions = (({
                account_type_value,
                no_duration
            }) => {
                cc._s('[id="client_subscription_duration' + append_index + '"]', (duration_input) => {
                    const default_value = (duration_input.attributes['default-value'] == undefined) ?
                        "" : duration_input.attributes['default-value']['value'];
                    const TRIAL = (isTrial === "true") ? "&is-trial=true" : "";
                    cc.fetchRelay({ url: cc.BASE_URL + "assets/php/custom/fetch_reply.php?fetch=get_subscription_durations&account_type_id=" + account_type_value + TRIAL }, function(response) {
                        // console.log(response)
                        insert({
                            response: response,
                            load_selector: duration_input,
                            default_value: default_value,
                            title: "Select Subscrition Duration"
                        });
                        cc._s('[id="client_membership_size' + append_index + '"]', (size_input) => {
                            $(size_input).on("change", (si) => {
                                const size_input_value = si.currentTarget.value;
                                const duration_input_value = duration_input.value;
                                console.log({ duration_input_value, size_input_value, no_duration });
                                get_fee({
                                    $duration_id: duration_input_value,
                                    $membership_size_id: size_input_value,
                                    $account_type_id: account_type_value,
                                    $no_duration: no_duration,
                                });
                            });
                            $(duration_input).on("change", (di) => {
                                const duration_input_value = di.currentTarget.value;
                                const size_input_value = size_input.value;
                                console.log({ duration_input_value, size_input_value });
                                get_fee({
                                    $duration_id: duration_input_value,
                                    $membership_size_id: size_input_value,
                                    $account_type_id: account_type_value,
                                });
                            });
                        });
                    });
                });
                cc._s('[id="client_membership_size' + append_index + '"]', (membership_size_input) => {
                    const default_value = (membership_size_input.attributes['default-value'] == undefined) ?
                        "" : membership_size_input.attributes['default-value']['value'];
                    const TRIAL = (isTrial === "true") ? "&is-trial=true" : "";
                    // console.log({ membership_size_input });
                    cc.fetchRelay({ url: cc.BASE_URL + "assets/php/custom/fetch_reply.php?fetch=get_subscription_sizes&account_type_id=" + account_type_value + TRIAL }, function(response) {
                        // console.log(response)
                        insert({
                            response: response,
                            load_selector: membership_size_input,
                            default_value: default_value,
                            title: "Select Membership Size"
                        });
                        var duration_input_value = "";
                        cc._s('[id="client_subscription_duration' + append_index + '"]', (duration_input) => {
                            $(duration_input).on("change", (di) => {
                                duration_input_value = di.currentTarget.value;
                                const size_input_value = membership_size_input.value;
                                console.log({ duration_input_value, size_input_value });
                                get_fee({
                                    $duration_id: duration_input_value,
                                    $membership_size_id: size_input_value,
                                    $account_type_id: account_type_value,
                                });
                            });
                        });
                        $(membership_size_input).on("change", (si) => {
                            const size_input_value = si.currentTarget.value;
                            console.log({ duration_input_value, size_input_value, no_duration });
                            get_fee({
                                $duration_id: duration_input_value,
                                $membership_size_id: size_input_value,
                                $account_type_id: account_type_value,
                                $no_duration: no_duration,
                            });
                        });
                    });
                });
            });

            if (unmutable === "false") {
                $(account_type).on("change", (at) => {
                    const account_type_value = at.currentTarget.value;
                    // console.log({ at: at.currentTarget['attributes']['no-duration'] });
                    const no_duration = at.currentTarget['attributes']["no-duration"] == undefined ?
                        false : at.currentTarget['attributes']['no-duration']['value'];
                    inputBoxActions({ account_type_value, no_duration });
                });
                const no_duration = account_type['attributes']["no-duration"] == undefined ?
                    false : account_type['attributes']['no-duration']['value'];
                inputBoxActions({
                    account_type_value: account_type.value,
                    no_duration: no_duration,
                });
            }
        });
    }, false);
})(window, document, jQuery, new locale(), Croppr);
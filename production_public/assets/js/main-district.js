(function(window, document, $, cc, Croppr) {
    document.addEventListener('DOMContentLoaded', function(loaded) {
        cc.selectShow({
            id: "group",
            change_selector: '[name="group"]',
        });
        cc.selectShow({
            id: "electoral_area",
            change_selector: '[name="electoral_area"]',
        });
        cc.selectShow({
            id: "community",
            change_selector: '[name="community"]',
        });
        cc.selectShow({
            id: "user_termsserved",
            change_selector: '[name="user_termsserved"]',
        });
        cc.selectShow({
            id: "visit_status",
            change_selector: '[name="visit_status"]',
        });
        cc.selectShow({
            id: "visitor_description",
            change_selector: '[name="visitor_description"]',
        });
        cc.selectShow({
            id: "hasFileToAttach",
            show_value: "1",
            change_selector: '[name="hasFileToAttach"]',
        });

        function removeDisplayNone(selector) {
            console.log(typeof selector.attributes['style'] === "undefined");
            const style = (typeof selector.attributes['style'] === "undefined") ? null : selector.attributes['style']['value'];
            (style === null) ? null: selector.attributes['style']['value'] = style.replace("display:none;", "")
                .replace("display: none;", "");
        }
        cc._s('[select-show="group_individual"],[select-show="group_bulk"],[select-show="group_excel"]', (shower) => {
            console.log(shower);
            const id = shower.attributes['select-show']['value'];
            var change_selector = '[id="' + id + '"]';
            $(change_selector).on('change', function(e) {
                shower.setAttribute('select-show', id);
                shower.removeAttribute('force-show');
                removeDisplayNone(shower)
                if ($(change_selector).val().toLowerCase() == "others") {
                    cc._s('[select-show="' + id + '"]', (shower_this) => {
                        shower_this.removeAttribute('select-show');
                    });
                } else {
                    console.log(shower);
                    shower.setAttribute('select-show', id);
                    console.log(shower);
                }
            });
        });
        cc._s('[select-show="visitor_action"]', (shower) => {
            const id = "visitor_action";
            var change_selector = '[id="' + id + '"]';
            $(change_selector).on('change', function(e) {
                shower.setAttribute('select-show', id);
                shower.removeAttribute('force-show');
                removeDisplayNone(shower)
                if ($(change_selector).val() == "3") {
                    cc._s('[select-show-alt--3="' + id + '"]', (shower_3) => {
                        shower_3.removeAttribute('select-show');
                    });
                } else if ($(change_selector).val() == "4") {
                    cc._s('[select-show-alt--4="' + id + '"]', (shower_4) => {
                        shower_4.removeAttribute('select-show');
                    });
                } else {
                    shower.setAttribute('select-show', id);
                }
            });
        });
        cc._s('[select-show="to_see_officer"]', (shower) => {
            const id = "to_see_officer";
            var change_selector = '[id="' + id + '"]';
            $(change_selector).on('change', function(e) {
                shower.setAttribute('select-show', id);
                shower.removeAttribute('force-show');
                removeDisplayNone(shower)
                if ($(change_selector).val() == "3") {
                    cc._s('[select-show-alt--3="' + id + '"]', (shower_3) => {
                        shower_3.removeAttribute('select-show');
                    });
                } else if ($(change_selector).val() == "4") {
                    cc._s('[select-show-alt--4="' + id + '"]', (shower_4) => {
                        shower_4.removeAttribute('select-show');
                    });
                } else {
                    shower.setAttribute('select-show', id);
                }
            });
        });
        cc._s('[select-show="reminder_medium"]', (shower) => {
            const id = "reminder_medium";
            var change_selector = '[id="' + id + '"]';
            $(change_selector).on('change', function(e) {
                shower.setAttribute('select-show', id);
                shower.removeAttribute('force-show');
                removeDisplayNone(shower)
                console.log({ "$(change_selector).val()": $(change_selector).val() });
                if ($(change_selector).val() == "1") {
                    cc._s('[select-show-alt--email="' + id + '"]', (shower_1) => {
                        shower_1.removeAttribute('select-show');
                    });
                } else if ($(change_selector).val() == "2") {
                    cc._s('[select-show-alt--sms="' + id + '"]', (shower_2) => {
                        shower_2.removeAttribute('select-show');
                    });
                } else if ($(change_selector).val() == "3") {
                    cc._s('[select-show-alt--voice="' + id + '"]', (shower_3) => {
                        shower_3.removeAttribute('select-show');
                    });
                } else {
                    shower.setAttribute('select-show', id);
                }
            });
        });
        cc._s('[select-show="staff_status_changer"]', (shower) => {
            const id = "staff_status_changer";
            var change_selector = '[id="' + id + '"]';
            $(change_selector).on('change', function(e) {
                shower.setAttribute('select-show', id);
                shower.removeAttribute('force-show');
                removeDisplayNone(shower)
                if ($(change_selector).val() == "1") {
                    cc._s('[select-show-alt--1="' + id + '"]', (shower_1) => {
                        shower_1.removeAttribute('select-show');
                    });
                } else if (($(change_selector).val()).toLowerCase() == "others") {
                    cc._s('[select-show-alt--others="' + id + '"]', (shower_others) => {
                        shower_others.removeAttribute('select-show');
                    });
                } else if ($(change_selector).val() != "5") {
                    cc._s('[select-show-alt--committee="' + id + '"]', (shower_committee) => {
                        shower_committee.removeAttribute('select-show');
                    });
                } else {
                    shower.setAttribute('select-show', id);
                }
            });
        });
        // cc._s(`[client_membership_size="district_type"]`, (membership_size_input) => {
        //     console.log(membership_size_input);
        //     cc._s(`#client_subscription_duration`, (duration_input) => {

        //         function get_fee($duration_id, $ms_cost) {
        //             cc.fetchRelay({ url: cc.BASE_URL + "assets/php/custom/fetch_reply.php?fetch=subscription-duration_fee&duration_id=" + $duration_id }, function(d_response) {
        //                 let d_fee;
        //                 try {
        //                     d_fee = d_response.data[0]['pdd_info'];
        //                 } catch (error) {
        //                     d_fee = 0;
        //                     // console.log(error);
        //                 }
        //                 cc.fetchRelay({ url: cc.BASE_URL + "assets/php/custom/fetch_reply.php?fetch=subscription-duration&id=" + $duration_id }, function(ms_response) {
        //                     let d_add;
        //                     try {
        //                         d_add = ms_response.data[0]['pdd_add'];
        //                     } catch (error) {
        //                         d_add = 0;
        //                         // console.log(error);
        //                     }
        //                     let ms_cost = $ms_cost;
        //                     cc._s(`#client_subscription_fee_district`, (duration_fee_input) => {
        //                         let $number = (Number(d_fee) * Number(ms_cost));
        //                         $(duration_fee_input).val("GHC " + Math.round($number) + ".00");
        //                     });
        //                 });
        //             });
        //         }
        //         $(duration_input).on('change', function(change) {
        //             try {
        //                 const value = duration_input['value'];
        //                 const membership_size_value = membership_size_input.attributes['client_membership_size_district_type']['value'];
        //                 if (value == "") {
        //                     cc._s(`#client_subscription_fee`, (duration_fee_input) => { // Check For This in Main.Js
        //                         $(duration_fee_input).val("00.00");
        //                     });
        //                 } else {
        //                     get_fee(value, membership_size_value);
        //                 }
        //             } catch (error) {
        //                 console.log(error);
        //             }
        //         });
        //     });
        // });
        // cc._s(`[upgrade-membership-cost="get"]`, (membership_size_input) => {
        //     console.log(membership_size_input);

        //     function get_fee($membership_size_id, $membership_duration_cost, $membership_duration_number, $membership_month_diffs) {
        //         cc.fetchRelay({ url: cc.BASE_URL + "assets/php/custom/fetch_reply.php?fetch=membership-size-size&id=" + $membership_size_id }, function(ms_response) {
        //             let ms_cost;
        //             try {
        //                 ms_cost = ms_response.data[0]['pdd_cost'];
        //             } catch (error) {
        //                 ms_cost = 0;
        //                 // console.log(error);
        //             }
        //             cc._s(`[upgrade-membership-cost="fee"]`, (duration_fee_input) => {

        //                 let $full_subscription_fee = Number($membership_duration_cost) * Number(ms_cost);
        //                 console.log($full_subscription_fee, " = " + $membership_duration_cost + " * " + ms_cost);
        //                 const $subscription_fee = (Number($full_subscription_fee) / Number($membership_duration_number)) * Number($membership_month_diffs);

        //                 console.log($subscription_fee, " = (" + $full_subscription_fee + " / " + $membership_duration_number + ") * " + $membership_month_diffs);

        //                 $(duration_fee_input).val("GHC " + Math.round($subscription_fee) + ".00");
        //             });
        //         });
        //     }
        //     $(membership_size_input).on('change', function(change) {
        //         try {
        //             const membership_size_value = membership_size_input['value'];
        //             const membership_duration_cost = membership_size_input.attributes['upgrade-duration-cost']['value'];
        //             const membership_duration_number = membership_size_input.attributes['upgrade-duration-number']['value'];
        //             const membership_month_diffs = membership_size_input.attributes['upgrade-month-diffs']['value'];
        //             if (membership_size_value == "") {
        //                 cc._s(`[upgrade-membership-cost="fee"]`, (duration_fee_input) => { // Check For This in Main.Js
        //                     $(duration_fee_input).val("00.00");
        //                 });
        //             } else {
        //                 get_fee(membership_size_value, membership_duration_cost, membership_duration_number, membership_month_diffs);
        //             }
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     });
        // });

        cc._s(`[form_change_to_show]`, (form_change_to_show) => {
            function get_data($name, $value, $url) {
                cc.fetchRelay({ url: $url + $value }, function(response) {
                    let list = response.data;
                    list = Object.keys(list).map((key) => [key, list[key]])
                    $data = [];
                    for (let i = 0; i < list.length; i++) {
                        let li = list[i][1];
                        if (!$data.includes(li)) {
                            $data.push(li);
                        }
                    }
                    cc._s(`[form_got_from="${$name}"], [form_got_from_1="${$name}"]`, (display) => {
                        console.log({ "display": display });
                        try {
                            const input_title = display.attributes['input_title']['value'];
                            const id_getter = display.attributes['id_getter']['value'];
                            const name_getter = display.attributes['name_getter']['value'];
                            const name_getter_1 = (typeof display.attributes['name_getter_1'] === "undefined") ? null : display.attributes['name_getter_1']['value'];
                            const hasOthers = (typeof display.attributes['others'] === "undefined") ? "" : '<option>Others</option>';
                            $(display).html('<option>' + input_title + '</option>');
                            for (let i = 0; i < $data.length; i++) {
                                let li = $data[i];
                                const name = li[name_getter] + ((name_getter_1 == null) ? '' : ' ' + li[name_getter_1]);
                                $(display).html($(display).html() + '<option value="' + li[id_getter] + '">' + name + '</option>');
                            }
                            $(display).html($(display).html() + hasOthers);
                        } catch (error) {
                            console.log(error);
                        }
                    });
                });
            }
            $(form_change_to_show).on('change', function(change) {
                try {
                    const input_value = form_change_to_show['value'];
                    const input_name = form_change_to_show.attributes['id']['value'];
                    const input_url = form_change_to_show.attributes['url']['value'];
                    if (input_value !== "") {
                        get_data(input_name, input_value, input_url);
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        });

        cc._s(`[electoral_area="selected"]`, (ea_selected) => {
            function get_data($name, $value, $url) {
                cc.fetchRelay({ url: $url + $value }, function(response) {
                    let list = response.data;
                    list = Object.keys(list).map((key) => [key, list[key]])
                    $data = [];
                    for (let i = 0; i < list.length; i++) {
                        let li = list[i][1];
                        if (!$data.includes(li)) {
                            $data.push(li);
                        }
                    }
                    cc._s(`[community="show"]`, (display) => {
                        try {
                            const input_title = display.attributes['input_title']['value'];
                            const id_getter = display.attributes['id_getter']['value'];
                            const name_getter = display.attributes['name_getter']['value'];
                            const name_getter_1 = (typeof display.attributes['name_getter_1'] === "undefined") ? null : display.attributes['name_getter_1']['value'];
                            $(display).html('<option>' + input_title + '</option>');
                            for (let i = 0; i < $data.length; i++) {
                                let li = $data[i];
                                const name = li[name_getter] + ((name_getter_1 == null) ? '' : ' ' + li[name_getter_1]);
                                $(display).html($(display).html() + '<option value="' + li[id_getter] + '">' + name + '</option>');
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    });
                });
            }
            $(ea_selected).on('change', function(change) {
                try {
                    const input_value = ea_selected['value'];
                    const input_name = ea_selected.attributes['id']['value'];
                    const input_url = ea_selected.attributes['url']['value'];
                    if (input_value !== "") {
                        get_data(input_name, input_value, input_url);
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        });

        cc._s(`[checkifchecked="sms_notification"]`, (sms_notification) => {
            const id = "sms_notification";
            cc._s('[select-show="' + id + '"]', (shower) => {
                sms_notification.addEventListener("click", (_) => {
                    shower.setAttribute('select-show', id);
                    if ($(sms_notification).is(":checked")) {
                        try {
                            shower.removeAttribute('select-show');
                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        shower.setAttribute('select-show', id);
                    }
                });
            });
        });

        cc._s(`[checkifchecked="repeat_reminder"]`, (repeat_reminder) => {
            const id = "repeat_reminder";
            cc._s('[select-show="' + id + '"]', (shower) => {
                repeat_reminder.addEventListener("click", (_) => {
                    shower.setAttribute('select-show', id);
                    shower.removeAttribute('force-show');
                    removeDisplayNone(shower)
                    if ($(repeat_reminder).is(":checked")) {
                        try {
                            shower.removeAttribute('select-show');
                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        shower.setAttribute('select-show', id);
                    }
                });
            });
        });

        cc._s(`#contact_access_code`, (ac) => {
            $(ac).on('keyup', function(change) {
                const code = ac['value'];
                const client = ac.attributes['client_id']['value'];
                cc.fetchRelay({ url: cc.BASE_URL + "assets/php/custom/fetch_reply.php?fetch=client-membership-contact_access_code&code=" + code }, function(response) {
                    console.log(response, response.data[0]);
                    cc._s(`[contact-access-code="status"]`, (acs) => {
                        if (response.data[0] == undefined) {
                            $(acs).html('<span class="text-success">Code is Available.</span><br/>')
                        } else {
                            $(acs).html('<span class="text-danger">Code is Taken.</span><br/>')
                        }
                    });
                });
            })
        });

        if ($('[upload_attachment="this-form"][role="form"]').length > 0) {
            (function(__BASE_URL__, __FILE_BASE_URL__, form_Data, upload_display, window, $, initMaPop) {
                main_file(__BASE_URL__, __FILE_BASE_URL__, form_Data, upload_display, window, $, initMaPop);
            })($('[upload_attachment="multiple"]').attr("action"), $('[name="file_api_location"][id="file_api_location"]').val(),
                '[upload_attachment="this-form"][role="form"]', '[upload_attachment="display"]', window, jQuery, initMaPop);
        }

        cc._s('[multiple-query="request"]', (shower) => {
            const Options = shower['options'];
            const ClientId = shower['attributes']['client_id']['value'];
            const Dependent = (typeof shower['attributes']['multiple-query--dependent'] === "undefined") ?
                null : shower['attributes']['multiple-query--dependent']['value'];

            function setToAll(checker, dependent) {
                console.log({ Dependent, checker, dependent });
                if (Dependent.toLowerCase() === checker.toLowerCase()) {
                    dependent.innerHTML = '<option value="all" selected>All ' + checker + '</option>';
                }
            }

            function getBranches(country = "", region = "", district = "") {
                let $url = "client_id=" + ClientId;
                if (country !== "") { $url += "&country=" + country; }
                if (region !== "") { $url += "&region=" + region; }
                if (district !== "") { $url += "&district=" + district; }

                cc.fetchRelay({ url: cc.BASE_URL + "assets/php/custom/fetch_reply.php?fetch=branches-by-location&" + $url }, function(response) {
                    cc._s("[id='branches']", (shower) => {
                        shower.innerHTML = '<option value="all" selected>All Branches</option>';
                        const Data = response.data;
                        for (let i = 0; i < Data.length; i++) {
                            const branch = Data[i];
                            shower.innerHTML += '<option value="' + branch['client']['pdc_id'] + '">' + branch['client']['pdc_name'] + '</option>';
                        }
                    });
                });
            }

            function countryChange() {
                cc._s('[id="country"]', (shower) => {
                    $(shower).on("change", function(Evnt) {
                        let $country = $(shower).val();
                        getBranches($country);
                    });
                });
            }
            countryChange();
            $(shower).on("change", function(Evnt) {
                let $selected = [];
                for (let i = 0; i < Options.length; i++) {
                    const Option = Options[i];
                    if (Option.value.toLowerCase() !== "all") {
                        (Option.selected === true) ? $selected.push(Option): null;
                    }
                }

                cc._s('[id="' + Dependent + '"]', (dependent) => {
                    let $country = $('[id="country"]').val();
                    let $_region = $('[id="region"]').val();
                    let $region;
                    for (let i = 0; i < $_region.length; i++) {
                        const Reg = $_region[i];
                        if (Reg.toLowerCase() !== "all") {
                            $region = Reg;
                        }
                    }
                    let $_district = $('[id="district"]').val();
                    let $district;
                    for (let i = 0; i < $_district.length; i++) {
                        const Dist = $_district[i];
                        if (Dist.toLowerCase() !== "all") {
                            $district = Dist;
                        }
                    }
                    setToAll("District", dependent);
                    if ($selected.length > 1) {
                        dependent.setAttribute("disabled", true);
                    } else {
                        dependent.removeAttribute("disabled");
                        if (Dependent.toLowerCase() === "district") {
                            cc.localeD({
                                url: cc.BASE_URL,
                                selector1: "[id='region']",
                                selector2: "[id='district']",
                                region: (typeof $selected[0] === "undefined") ? null : $selected[0]['value'],
                                selectorLoader: "[id='district_loading']"
                            });
                            getBranches($country, $region);
                        } else if (Dependent.toLowerCase() === "branches") {
                            getBranches($country, $region, $district);
                        }
                    }
                });
            });
        });

        cc._s('.app-container>.app-main>.app-main__outer>.app-main__inner', (shower) => {
            const PDB_BRANCH_PAGE = (document.querySelector('[name="PDB_BRANCH_PAGE"]') === null) ?
                null : JSON.parse(document.querySelector('[name="PDB_BRANCH_PAGE"]')['value']);
            if (PDB_BRANCH_PAGE !== null) {
                shower.insertAdjacentHTML('afterBegin', "<div class=\"row justify-content-center mt-0 mb-3\">\
                    <div class=\"col-sm-12 col-md-8 col-lg-6\">\
                        <div class=\"alert alert-info alert-dismissible fade show shadow shadow-lg pb-5 mb-4\" role=\"alert\">\
                            <div class=\"d-flex\">\
                                <h5> <strong>" + PDB_BRANCH_PAGE.client_name + " Branch View =</strong>> " + PDB_BRANCH_PAGE.branch_name + ".</h5>\
                            </div><hr>\
                            <a type=\"button\" class=\"btn btn-lg btn-info shadow shadow-lg fa pull-right\"\
                                href=\"" + cc.BASE_URL + "/account-branch/back-to-main\">\
                                Back To Main Account (<small>Exit Branch Account</small>)\
                            </a>\
                        </div>\
                    </div>\
                ");
            }
        });

        cc._s(`[filterForms-ids]`, (ids) => {
            const _IDs_ = ids['attributes']['filterForms-ids']['value'];
            var idArray = [];
            _IDs_.split(",").forEach((id) => {
                idArray.push('[id="' + id + '"]');
            });
            cc._s(`[filterForms-url]`, (url) => {
                const _URL_ = url['attributes']['filterForms-url']['value'];
                const ID = url['attributes']['id']['value'];
                filterForms(
                    idArray,
                    $shower = '[id="' + ID + '"]',
                    $url = _URL_, cc, $
                );
            });
        });
    }, false);
})(window, document, jQuery, new locale(), Croppr);

function filterForms($selectors, $shower, $url, cc, $) {
    var $urlParams = "",
        $urlArray = [""];
    var _loop_1 = function(i) {
        var selector = $selectors[i];
        cc._s(selector, function(_s) {
            $(selector).on("change", (function() {
                var query = _s.attributes.id.value;
                $urlArray[i] = [query, _s.value];
                var $urlString = "";
                for (var idx = 0; idx < $urlArray.length; idx++) {
                    var urlEl = $urlArray[idx];
                    if ("gender" === urlEl[0] && "all" === urlEl[1])
                    ;
                    else {
                        var thisParam = urlEl[0] + "=" + urlEl[1];
                        void 0 !== urlEl[0] && ($urlString += "&" + thisParam);
                    }
                }
                cc.fetchRelay({
                        url: $url + $urlString
                    }, (function(response) {
                        var list = response.data;
                        list = Object.keys(list).map(function(key) {
                                return [key, list[key]];
                            }),
                            $data = [];
                        for (var i_1 = 0; i_1 < list.length; i_1++) {
                            var li = list[i_1][1];
                            $data.includes(li) || $data.push(li);
                        }
                        cc._s($shower, function(display) {
                            try {
                                var input_title = display.attributes["filterForms-input_title"].value,
                                    id_getter = display.attributes["filterForms-id_getter"].value,
                                    name_getter = display.attributes["filterForms-name_getter"].value,
                                    name_getter_1 = void 0 === display.attributes["filterForms-name_getter_1"] ? null : display.attributes["filterForms-name_getter_1"].value,
                                    hasOthers = void 0 === display.attributes["filterForms-others"] ? "" : "<option>Others</option>";
                                $(display).html("<option>" + input_title + "</option>");
                                for (var i_2 = 0; i_2 < $data.length; i_2++) {
                                    var li = $data[i_2];
                                    var name_1 = li[name_getter] + (null == name_getter_1 ? "" : " " + li[name_getter_1]);
                                    $(display).html($(display).html() + '<option value="' + li[id_getter] + '">' + name_1 + "</option>");
                                }
                                $(display).html($(display).html() + hasOthers);
                            } catch (error) {
                                console.log(error);
                            }
                        });
                    })),
                    $urlParams = $urlString;
            }));
        });
    };
    for (var i = 0; i < $selectors.length; i++) {
        _loop_1(i);
    }
}
/////////////////////WIZARD////////////////////////
try {
    if (document.querySelector('[click-com-wizard="form-container"]') !== null) {
        const $styleHeight = "height: 450px; max-height: 450px; overflow-y: scroll;";
        const $cc_wizard_steps = document.querySelectorAll('[click-com-wizard="step"]');
        const $cc_wizard_pages = document.querySelectorAll('[click-com-wizard="pages"]')[0];
        const $cc_wizard_buttons = document.querySelectorAll('[click-com-wizard="buttons"]')[0];
        let $cc_wizard_pages_list = '';
        let $cc_wizard_buttons_list = '';

        $cc_wizard_pages['className'] = $cc_wizard_pages['className'] + " px-1 py-2 text-center";
        $cc_wizard_buttons['className'] = $cc_wizard_buttons['className'] + " px-1 py-2 text-right";
        $cc_wizard_steps[0]['className'] = $cc_wizard_steps[0]['className'] + " active";

        $cc_wizard_buttons_list = `
            <button class="btn btn-icon my-1 btn-5 btn-danger bg-gradient-danger hidden" click-com-wizard-button="back"
                ccwbb_id="0" type="button" style="border-radius: 2rem">
                <span class="btn-inner--icon"><i class="pe-7s-left-arrow"></i></span>
                <span class="btn-inner--text">Back</span>
            </button>
            <button class="btn btn-icon my-1 btn-5 btn-info bg-gradient-info" click-com-wizard-button="continue" ccwbid="1"
                type="button" style="border-radius: 2rem">
                <span class="btn-inner--text">Continue</span>
                <span class="btn-inner--icon"><i class="pe-7s-right-arrow"></i></span>
            </button>
            <button class="btn btn-icon my-1 btn-5 btn-success bg-night-sky bg-gradient-success hidden" click-com-wizard-button="submit"
                type="button" style="border-radius: 2rem">
                <span class="btn-inner--text">Submit</span>
                <span class="btn-inner--icon"><i class="pe-7s-right-arrow"></i></span>
            </button>
        `;

        for (var i = 0; i < $cc_wizard_steps.length; i++) {
            const $cc_wizard_step = $cc_wizard_steps[i];
            const $title = $cc_wizard_step['attributes']['click-com-wizard-title']['value'];
            $cc_wizard_pages_list += `<button class="btn btn-icon btn-sm my-1 btn-5 btn-primary" ccw-currentPage="${i}" type="button">
                <span class="btn-inner--text m-0"><small>${$title}</small></span><hr class="my-0">
                <span class="btn-inner--icon"><small><i class="pe-7s-check"></i></small></span>
            </button>`;
            $cc_wizard_step.setAttribute('click-com-wizard-index', i);
        }

        $cc_wizard_pages.innerHTML = $cc_wizard_pages_list;
        $cc_wizard_buttons.innerHTML = $cc_wizard_buttons_list;

        document.querySelector('[ccw-currentPage="0"]')['className'] = document.querySelector('[ccw-currentPage="0"]')['className'] + " bg-night-sky bg-gradient-success floating";

        const $cc_wizard_buttons_children = $cc_wizard_buttons['children'];

        function hideBtn(selector) {
            const nxtBtn = document.querySelector(selector);
            if (!nxtBtn['classList'].contains('hidden')) {
                nxtBtn['className'] = nxtBtn['className'] + " hidden";
            }
        }

        function showBtn(selector) {
            const nxtBtn = document.querySelector(selector);
            if (nxtBtn['classList'].contains('hidden')) {
                nxtBtn['className'] = nxtBtn['className'].replace(' hidden', '');
            }
        }
        for (var i = 0; i < $cc_wizard_buttons_children.length; i++) {
            const $cc_wizard_buttons_child = $cc_wizard_buttons_children[i];
            $cc_wizard_buttons_child.addEventListener('click', (click) => {
                click.preventDefault();
                const btn = click['currentTarget']['attributes']['click-com-wizard-button']['value'];

                $cc_wizard_steps_count = $cc_wizard_steps.length;
                $cc_wizard_steps_first = 0;
                $cc_wizard_steps_last = $cc_wizard_steps_count - 1;
                const ccw_currentPage = document.querySelectorAll('[ccw-currentPage]');
                for (var q = 0; q < ccw_currentPage.length; q++) {
                    // console.log(ccw_currentPage[q]['className'])
                    ccw_currentPage[q]['className'] = ccw_currentPage[q]['className'].replace(' bg-night-sky bg-gradient-success floating', '');
                }
                for (var i = 0; i < $cc_wizard_steps_count; i++) {
                    const $cc_wizard_step = $cc_wizard_steps[i];
                    const $currentPage = document.querySelector('[click-com-wizard="step"].active');
                    const $currentPageId = $currentPage['attributes']['click-com-wizard-index']['value'];

                    if ($cc_wizard_step == $currentPage) {
                        if (btn == "continue") {
                            document.querySelector('[ccw-currentPage="' + (new Number(i) + 1) + '"]')['className'] = document.querySelector('[ccw-currentPage="' + (new Number(i) + 1) + '"]')['className'] + " bg-night-sky bg-gradient-success floating";
                            const btnIndex = click['currentTarget']['attributes']['ccwbid']['value'];
                            click['currentTarget']['attributes']['ccwbid']['value'] =
                                new Number(click['currentTarget']['attributes']['ccwbid']['value']) + 1;
                            document.querySelector('[click-com-wizard="buttons"] button[click-com-wizard-button="back"]')['attributes']['ccwbb_id']['value'] =
                                new Number(document.querySelector('[click-com-wizard="buttons"] button[click-com-wizard-button="back"]')['attributes']['ccwbb_id']['value']) + 1;

                            if (btnIndex == $cc_wizard_steps_last) {
                                hideBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="continue"]');
                                showBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="submit"]');
                                showBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="back"]');

                                const $cc_wizard_step_next = $cc_wizard_steps[btnIndex];
                                $currentPage['className'] = $currentPage['className'].replace(' active', '');
                                $cc_wizard_step_next['className'] = $cc_wizard_step_next['className'] + " active";
                                return;
                            } else {
                                showBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="back"]');
                                hideBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="submit"]');
                                showBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="continue"]');

                                const $cc_wizard_step_next = $cc_wizard_steps[btnIndex];
                                $currentPage['className'] = $currentPage['className'].replace(' active', '');
                                $cc_wizard_step_next['className'] = $cc_wizard_step_next['className'] + " active";
                                return;
                            }
                        }
                        if (btn === "submit") {
                            document.querySelector('[ccw-currentPage="' + (new Number(i)) + '"]')['className'] = document.querySelector('[ccw-currentPage="' + (new Number(i)) + '"]')['className'] + " bg-night-sky bg-gradient-success floating";
                            var condition = document.querySelector("[click-com-wizard--condition]") == null ? "By Submitting, you agree to the user terms & conditions" : document.querySelector("[click-com-wizard--condition]")['attributes']['click-com-wizard--condition']['value'];
                            Swal.fire({
                                title: `<small><i><strong>${condition}</strong></i></small>`,
                                type: 'info',
                                html: `<b></b>`,
                                showCloseButton: true,
                                showCancelButton: true,
                                focusConfirm: false,
                                confirmButtonText: 'Yes',
                                showLoaderOnConfirm: true,
                                preConfirm: (savePackage) => {
                                    const wizardForm = document.querySelector('[click-com-wizard="form-container"]');
                                    fetch(wizardForm['attributes']['action']['value'], {
                                        method: "POST",
                                        headers: {
                                            "Authorization": "Bearer oeiodsiosd9403b2bf0b349443j9rjsb4ywfddf8fd9089b",
                                            "Accept": "application/json, text/plain, */*"
                                        },
                                        body: new FormData(wizardForm)
                                    }).then((res) => {
                                        return res.json();
                                    }).then((data) => {
                                        if (data.error == true) {
                                            if (wizardForm !== null) {
                                                let errorList = '';
                                                const processedData = data['data'];
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
                                                Swal.fire({
                                                    title: '<strong>Error(s)</strong>',
                                                    type: 'error',
                                                    html: errorList,
                                                    showCloseButton: true,
                                                    focusConfirm: false
                                                });
                                            }
                                        } else if (data.error == false) {
                                            if (wizardForm !== null) {
                                                const message = data['msg'];
                                                Swal.fire({
                                                    title: `<strong><u><i>${message}</i></u></strong>`,
                                                    type: 'success',
                                                    focusConfirm: false
                                                });
                                                // setTimeout(function() {
                                                //     window.location.reload();
                                                // }, 1500);
                                                setTimeout(function() {
                                                    const reload_to = (document.querySelector('[click-com-wizard="form-container"][reload_to]') === null) ?
                                                        null : document.querySelector('[click-com-wizard="form-container"][reload_to]')['attributes']['reload_to']['value'];
                                                    console.log({ "reload_to": reload_to });
                                                    if (reload_to === null) {
                                                        window.location.reload();
                                                    } else {
                                                        window.location = (reload_to);
                                                    }
                                                }, 1500);
                                            }
                                        }
                                    }).catch((err) => {
                                        console.log(err);
                                    });
                                }
                            });

                        }
                        if (btn === "back") {
                            document.querySelector('[ccw-currentPage="' + (new Number(i) - 1) + '"]')['className'] = document.querySelector('[ccw-currentPage="' + (new Number(i) - 1) + '"]')['className'] + " bg-night-sky bg-gradient-success floating";
                            const btnIndex = click['currentTarget']['attributes']['ccwbb_id']['value'];
                            click['currentTarget']['attributes']['ccwbb_id']['value'] =
                                new Number(click['currentTarget']['attributes']['ccwbb_id']['value']) - 1;
                            document.querySelector('[click-com-wizard="buttons"] button[click-com-wizard-button="continue"]')['attributes']['ccwbid']['value'] =
                                new Number(document.querySelector('[click-com-wizard="buttons"] button[click-com-wizard-button="continue"]')['attributes']['ccwbid']['value']) - 1;

                            if (btnIndex == ($cc_wizard_steps_first + 1)) {
                                showBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="continue"]');
                                hideBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="submit"]');
                                hideBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="back"]');


                                const $cc_wizard_step_next = $cc_wizard_steps[new Number(btnIndex) - 1];
                                $currentPage['className'] = $currentPage['className'].replace(' active', '');
                                $cc_wizard_step_next['className'] = $cc_wizard_step_next['className'] + " active";
                                return;
                            } else {
                                showBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="continue"]');
                                hideBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="submit"]');
                                showBtn('[click-com-wizard="buttons"] button[click-com-wizard-button="back"]');

                                const $cc_wizard_step_next = $cc_wizard_steps[new Number(btnIndex) - 1];
                                $currentPage['className'] = $currentPage['className'].replace(' active', '');
                                $cc_wizard_step_next['className'] = $cc_wizard_step_next['className'] + " active";
                                return;
                            }
                        }
                    }
                }
            }, false);
        }
    }
} catch (error) {
    console.log(error)
}
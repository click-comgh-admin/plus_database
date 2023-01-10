'use strict';

(function(window, document, $, cc, ) {
    document.addEventListener('DOMContentLoaded', function(loaded) {

        const fullScreenOptions = {
            fsBtnTextOpen: "Enter Full Screen",
            fsBtnTextClose: "Exit Full Screen",
            /* Button */
            fsBtn: ((enabledValue, title = "Enter Full Screen") => {
                return "<div class=\"d-flex justify-content-between\"> <div></div>" +
                    "<button type=\"button\" class=\"btn btn-info\"" +
                    "enable-fullscreen-btn=\"" + enabledValue + "\">" + title + "</button>" +
                    "</div>";
            }),

            /* View in fullscreen */
            openFullscreen: ((enabledValue) => {
                cc._s(`[enable-fullscreen="${enabledValue}"]`, (elem) => {
                    if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                    } else if (elem.webkitRequestFullscreen) { /* Safari */
                        elem.webkitRequestFullscreen();
                    } else if (elem.msRequestFullscreen) { /* IE11 */
                        elem.msRequestFullscreen();
                    }
                });
            }),

            /* Close fullscreen */
            closeFullscreen: ((enabledValue) => {
                cc._s(`[enable-fullscreen="${enabledValue}"]`, (elem) => {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) { /* Safari */
                        document.webkitExitFullscreen();
                    } else if (document.msExitFullscreen) { /* IE11 */
                        document.msExitFullscreen();
                    }
                });
            })
        }
        cc._s(`[enable-fullscreen]`, (efs) => {
            console.log({ efs: efs });
            let isFullScreened = false;
            const enabledValue = efs['attributes']['enable-fullscreen']['value'];
            efs.insertAdjacentHTML('afterBegin', fullScreenOptions.fsBtn(enabledValue));
            console.log({ "enabledValue": enabledValue });

            cc._s(`[enable-fullscreen-btn="${enabledValue}"]`, (btn) => {
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    console.log({ e });
                    if (isFullScreened) {
                        btn.innerHTML = fullScreenOptions.fsBtnTextOpen;
                        console.log({ "isFullScreened": isFullScreened });
                        isFullScreened = false;
                        fullScreenOptions.closeFullscreen(enabledValue);
                    } else {
                        btn.innerHTML = fullScreenOptions.fsBtnTextClose;
                        console.log({ "isFullScreened": isFullScreened });
                        isFullScreened = true;
                        fullScreenOptions.openFullscreen(enabledValue);
                    }
                }, false);
            });
        });

        cc._s(`[click-to-copy]`, (ctc) => {
            // console.log({ ctc: ctc });
            const currentBtn = ctc['attributes']['click-to-copy']['value'];
            // console.log({ "currentBtn": currentBtn });
            cc._s(`[click-to-copy="${currentBtn}"] > input`, (input) => {
                input.setAttribute("style", "/*width: 0.1px;*/padding: 0;margin: 0;outline: none;border: 0;");
            });

            cc._s(`[click-to-copy="${currentBtn}"]`, (btn) => {
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    // console.log({ e });

                    cc._s(`[click-to-copy="${currentBtn}"] > input`, (input) => {
                        input.select();
                        input.setSelectionRange(0, 99999);
                        document.execCommand("copy");

                        cc._s(`[click-to-copy="${currentBtn}"] > .customTooltiptext`, (customTooltip) => {
                            customTooltip.innerHTML = "Copied: " + input.value;
                        });
                    });
                    resetTooltip();
                }, false);

                function resetTooltip() {
                    cc._s(`[click-to-copy="${currentBtn}"] > .customTooltiptext`, (customTooltip) => {
                        customTooltip.addEventListener("mouseout", (mouseout) => {
                            mouseout.preventDefault();
                            // console.log({ mouseout });

                            customTooltip.innerHTML = "Copy to clipboard";
                        }, false);
                    });
                }
                resetTooltip();
            });
        });
    }, false);
})(window, document, jQuery, new locale());
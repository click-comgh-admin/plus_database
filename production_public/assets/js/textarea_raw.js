"use strict";
! function(e, n, t) {
    e.addEventListener("DOMContentLoaded", function(e) {
        try {
            n._s("[awesome_text_box]", function(e) {
                new t(e, {
                    enter: t.ENTER_P,
                    placeholderText: null,
                    charCounterMax: "2800",
                    events: {
                        initialized: function() {
                            var e = this;
                            this.el.closest("form").addEventListener("submit", function(n) {
                                    console.log(e.$oel.val()), console.log(e), console.log(e.$oel), console.log(e.$el),
                                        n.preventDefault()
                                }),
                                n._s(".fr-box.fr-basic.fr-top .second-toolbar", function(e) {
                                    for (var n = e.children, t = 0; t < n.length; t++) {
                                        var o = n[t];
                                        "A" == o.nodeName && o.remove()
                                    }
                                    e.className += " p-2",
                                        e.insertAdjacentHTML("beforeend", '<span style="padding: 10px; float: left;color: #999;font-size: 14px;font-family: sans-serif;z-index: 1;-webkit-background-clip: padding-box;background-clip: padding-box;">Click on Horizontal Ellipsis for more Items</span></div>')
                                }),
                                n._s(".fr-element.fr-view", function(e) {
                                    e.style.height = "250px"
                                })
                        }
                    }
                })
            })
        } catch (e) {
            console.log(e)
        }
    }, !1)
}(document, new locale, FroalaEditor)
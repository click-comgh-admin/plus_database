    class locale {
        constructor() {
            this.BASE_URL = document.querySelector('[name="BASE_URL"]')['value'];
            this.API_BASE_URL = document.querySelector('[name="API_BASE_URL"]')['value'];
            this.PUBLIC_BASE_URL = document.querySelector('[name="PUBLIC_BASE_URL"]')['value'];
            this.CLIENT_BASE_URL = document.querySelector('[name="CLIENT_BASE_URL"]')['value'];
            this.MEMBER_BASE_URL = document.querySelector('[name="MEMBER_BASE_URL"]')['value'];
            this.FILE_BUCKET_BASE_URL = document.querySelector('[name="FILE_BUCKET_BASE_URL"]')['value'];
            this.TOKEN = 'oeiodsiosd9403b2bf0b349443j9rjsb4ywfddf8fd9089b';
            this.bgImgUrlList = [];
            this.popImgUrlList = [];
        }

        popupWindow() {
            const _this = this;

            const popupWindowBtn = "popupWindow-btn";
            const popupWindowContent = "popupWindow-content";
            const popupWindowTitle = "popupWindow-title";
            const btns = '[' + popupWindowBtn + ']';

            _this._s(btns, (btn) => {
                var btnVal = $(btn).attr(popupWindowBtn);
                var popupTitle = $(btn).attr(popupWindowTitle);
                const selector = "[" + popupWindowContent + "=\"" + btnVal + "\"]";
                $(selector).hide();
                $(btn).on("click", function(event) {
                    $(selector).show();
                    $(selector).PopupWindow("init", {
                        title: popupTitle,
                        modal: true,
                        autoOpen: true,
                        animationTime: 300,
                        customClass: "",
                        height: (screen.height * 0.8),
                        width: (screen.width * 0.8),
                        statusBar: true,
                        maxHeight: undefined,
                        maxWidth: undefined,
                        minHeight: 100,
                        minWidth: 200,
                        collapsedWidth: undefined,
                        keepInViewport: true,
                        mouseMoveEvents: true
                    });
                    $(selector).PopupWindow("open");
                });
            });
        }

        bgImg() {
            const _this = this;
            const bgs = '[background-image]';

            _this._s(bgs, (bg) => {
                if (!_this.bgImgUrlList.includes(bg)) {
                    const oldHtml = bg.innerHTML;
                    var imgUrl = $(bg).attr("background-image");
                    _this.bgImgUrlList.push(bg);
                    // console.log({ "_this.bgImgUrlList": _this.bgImgUrlList });

                    if ($(bg).attr("style") == undefined) {
                        $(bg).attr("style", "");
                    }
                    // $(bg).attr("style", $(bg).attr("style") + "; background-image: url(" + imgUrl + ");")
                    // $(bg).attr("style", $(bg).attr("style") + "; background-position: 50% 50%;")
                    // $(bg).attr("style", $(bg).attr("style") + "; background-repeat: no-repeat;")
                    bg.innerHTML = "<span img=\"act\"><a href=\"" + imgUrl + "\">" + oldHtml + "</a></span>";
                    // console.log({ _____: $(bg).attr("style") })
                }
            });
            _this._s(bgs + " .widget-content.p-3", (changeBG) => {
                $(changeBG).attr("style", "; background-color: #00000008 !important;")
            });
        }

        simpleImgPop() {
            const _this = this;
            const img = 'img';

            _this._s(img, (bg) => {
                var noPop = $(bg).attr("no-popup");
                // console.log({ noPop })
                if (noPop === false || noPop === undefined) {
                    const oldHtml = bg.parentElement.innerHTML;
                    var imgUrl = $(bg).attr("src");
                    if (!_this.popImgUrlList.includes(imgUrl)) {
                        _this.popImgUrlList.push(imgUrl);
                        // console.log({ "_this.popImgUrlList": _this.popImgUrlList });

                        bg.parentElement.innerHTML = "<span img=\"act\"><a href=\"" + imgUrl + "\">" + oldHtml + "</a></span>";
                        // console.log($(bg).attr("style"));
                    }
                }
            });
        }

        _noneTablePagin(data, callbackFx = false) {

            // console.log({ data: data });
            const _this = this;
            const network = (data.network == undefined) ? { url: "", type: "GET" } : data.network;
            const url = (network.url == undefined) ? "" : network.url;
            const type = (network.type == undefined) ? "GET" : network.type;
            const locator = data.locator;
            const search = (data.search == undefined) ? false : data.search;
            const selector = data.selector;
            const selectorValue = selector.attributes['none-table-pagin']['value'];
            const params = (data.params == undefined) ? { pageSize: 20, totalNumber: 120 } : data.params;
            const totalNumber = (params.totalNumber == undefined) ? 120 : params.totalNumber;
            const pageSize = (params.pageSize == undefined) ? 20 : params.pageSize;
            const beforeSend = data.beforeSend;
            const showIn = "[none-table-pagin=\"" + selectorValue + "\"]>[load-here=\"true\"]";
            const selectorClass = "class=\"" + getStyleClass(selector, "class") + "\"";
            const selectorStyle = "style=\"" + getStyleClass(selector, "style") + "\"";
            selector.setAttribute("class", "");
            selector.setAttribute("style", "");

            function getStyleClass(selector, class_style) {
                return (typeof selector.attributes[class_style] === "undefined") ? "" : selector.attributes[class_style]['value'];
            }

            function searchInput() {
                let searchInput = "";
                if (search === true) {
                    searchInput = "<div " + selectorClass + "  " + selectorStyle + " >\
                        <div class=\"card p-1 shadow shadow-lg w-50 ml-auto mr-3 my-2\" >\
                            <input type=\"search\" noneTablePagin-search=\"true\" class=\"form-control\" placeholder=\"search...\" />\
                        </div>\
                    </div>";
                }
                return searchInput;
            }
            selector.innerHTML = " " + searchInput() + "\
                <div " + selectorClass + "  " + selectorStyle + " ></div>\
                <div " + selectorClass + "  " + selectorStyle + " load-here=\"true\">\</div>\
                <div " + selectorClass + "  " + selectorStyle + " ></div>\
            ";
            let currentPage = 1;
            let searchInputValue = "";

            function fetch(searchValue = null) {
                currentPage = (searchValue === "") ? currentPage : 1;

                let newUrl = url + "&currentPage=" + currentPage + "&rowsPerPage=" + pageSize;
                let searchString = (searchValue !== null) ? "&searchQuery=" + searchValue : "";
                newUrl = (search === true) ? newUrl + searchString : newUrl;

                const container = $(showIn);
                container.pagination({
                    // dataSource: url,
                    dataSource: function(done) {
                        $.ajax({
                            type: type,
                            url: newUrl,
                            beforeSend: function() {
                                container.prev().html(beforeSend);
                                // container.html(beforeSend);
                            },
                            success: function(response, pagination) {
                                response = JSON.parse(response);
                                response = (typeof response['aaData'][0] !== "undefined") ? response['aaData'] : [];
                                // console.log({ response, pagination }, );
                                done(response);
                            }
                        });
                    },
                    className: 'paginationjs-theme-blue paginationjs-small card p-1 shadow shadow-lg ml-auto mt-3 mr-2',
                    locator: "data",
                    // triggerPagingOnInit: true,
                    pageNumber: currentPage,
                    totalNumber: totalNumber,
                    pageSize: pageSize,
                    callback: function(response, pagination) {
                        var dataHtml = '';
                        for (let index = 0; index < response.length; index++) {
                            dataHtml += response[index][locator];

                        }
                        container.prev().html(dataHtml);
                        return callbackFx(response, container, pagination);
                    },
                    afterPreviousOnClick: function(params, y) {
                        // console.log({ afterPreviousOnClick: params, y });
                        let newPage = currentPage - 1;
                        currentPage = newPage;
                        fetch(searchInputValue);
                    },
                    afterPageOnClick: function(params, y) {
                        // console.log({ afterPageOnClick: params, y });
                        let newPage = y;
                        currentPage = newPage;
                        fetch(searchInputValue);
                    },
                    afterNextOnClick: function(params, y) {
                        // console.log({ afterNextOnClick: params, y });
                        let newPage = currentPage + 1;
                        currentPage = newPage;
                        fetch(searchInputValue);
                    },
                    // showPrevious: true,
                    // showNext: true,
                    // showPageNumbers: true,
                    // showGoInput: true,
                    // showGoButton: true,
                    // showFirstOnEllipsisShow: true,
                });
            }
            fetch();
            _this._s("[noneTablePagin-search=\"true\"]", (input) => {
                input.addEventListener("input", (e) => {
                    currentPage = 1;
                    searchInputValue = input.value;
                    (search === true) ? fetch(searchInputValue): null;
                });
            });
            // className: 'paginationjs-theme-blue'
            // className: 'paginationjs-theme-blue paginationjs-small'
            // className: 'paginationjs-theme-blue paginationjs-big'
        }

        noneTablePagin(data, callbackFx = false) {

            // console.log({ data: data });
            const _this = this;
            const network = (data.network == undefined) ? { url: "", type: "GET" } : data.network;
            const url = (network.url == undefined) ? "" : network.url;
            const type = (network.type == undefined) ? "GET" : network.type;
            const locator = data.locator;
            const search = (data.search == undefined) ? false : data.search;
            const selector = data.selector;
            const selectorValue = selector.attributes['none-table-pagin']['value'];
            const params = (data.params == undefined) ? { pageSize: 20, totalNumber: 120 } : data.params;
            const totalNumber = (params.totalNumber == undefined) ? 120 : params.totalNumber;
            const pageSize = (params.pageSize == undefined) ? 20 : params.pageSize;
            const beforeSend = data.beforeSend;
            const emptyMsg = (data.emptyMsg == undefined) ? beforeSend : data.emptyMsg;
            const _show_ = "[none-table-pagin=\"" + selectorValue + "\"]";
            const showIn = _show_ + ">[load-here=\"true\"]";
            const showSrchIn = _show_ + ">[load-here=\"search\"]";
            const showBtnIn = _show_ + ">[load-here=\"btn\"]";
            const selectorClass = "class=\"" + getStyleClass(selector, "class") + "\"";
            const selectorStyle = "style=\"" + getStyleClass(selector, "style") + "\"";
            selector.setAttribute("class", "");
            selector.setAttribute("style", "");

            function getStyleClass(selector, class_style) {
                return (typeof selector.attributes[class_style] === "undefined") ? "" : selector.attributes[class_style]['value'];
            }

            function searchInput() {
                let searchInput = "";
                if (search === true) {
                    searchInput = "<div " + selectorClass + "  " + selectorStyle + " load-here=\"search\">\
                        <div class=\"card p-1 shadow shadow-lg w-50 ml-auto mr-3 my-2\" >\
                            <input type=\"search\" noneTablePagin-search=\"true\" class=\"form-control\" placeholder=\"search...\" />\
                        </div>\
                    </div>";
                }
                return searchInput;
            }
            selector.innerHTML = " " + searchInput() + "\
                <div " + selectorClass + "  " + selectorStyle + " load-here=\"true\">\</div>\
                <div " + selectorClass + "  " + selectorStyle + " load-here=\"btn\"></div>\
            ";
            let currentPage = 1,
                prevPage = 1,
                nextPage = 2;
            let searchInputValue = "";
            let btnListClass = "paginationjs-page J-paginationjs-page",
                btnListFirstClass = "paginationjs-prev J-paginationjs-previous",
                btnListLastClass = "paginationjs-next J-paginationjs-next";
            let btnPageNumberSelector = "pagin-num";

            let pagination = {
                fetch: ((searchValue = null) => {
                    currentPage = (searchValue === "") ? currentPage : 1;
                    let _pagination = pagination;
                    // console.log(_pagination);
                    let newUrl = url + "&currentPage=" + currentPage + "&rowsPerPage=" + pageSize;
                    let searchString = (searchValue !== null) ? "&searchQuery=" + searchValue : "";
                    newUrl = (search === true) ? newUrl + searchString : newUrl;

                    $.ajax({
                        type: type,
                        url: newUrl,
                        beforeSend: function() {
                            _this._s(showIn, (container) => {
                                container.innerHTML = beforeSend;
                            });
                        },
                        success: function(response, pagination) {
                            response = JSON.parse(response);
                            ///
                            _pagination.showBtns(response['iTotalDisplayRecords'], response['iTotalRowperpage'], { currentPage, prevPage, nextPage }, showBtnIn);
                            const numberOfPages = _pagination.getNumberOfPages(response['iTotalDisplayRecords'], response['iTotalRowperpage']);
                            ///
                            response = (typeof response['aaData'][0] !== "undefined") ? response['aaData'] : [];
                            // console.log({ response, pagination }, );
                            (response.length === 0) ? _pagination.drawEmpty(): _pagination.drawContent(response);
                            _pagination.btnClick.click(numberOfPages, (event, btn, clickInfo) => {
                                if (Number(currentPage) !== Number(clickInfo.pages.pageNumber)) {
                                    currentPage = Number(clickInfo.pages.pageNumber);
                                    prevPage = Number(clickInfo.pages.prevPage);
                                    nextPage = Number(clickInfo.pages.nextPage);
                                    _pagination.fetch(searchInputValue);
                                }
                            });
                        }
                    });
                }),
                makeContent: ((response) => {
                    var dataHtml = '';
                    for (let index = 0; index < response.length; index++) {
                        dataHtml += response[index][locator];
                    }
                    return dataHtml;
                }),
                drawContent: ((response) => {
                    let _pagination = pagination;
                    const createdBtns = _pagination.makeContent(response);
                    _this._s(showIn, (container) => {
                        container.innerHTML = createdBtns;
                    });
                }),
                drawEmpty: (() => {
                    _this._s(showIn, (container) => {
                        container.innerHTML = emptyMsg;
                    });
                }),
                createBtns: ((numberOfRows, rowsPerPage, pages) => {
                    let _pagination = pagination;
                    let lists = "";
                    let currentPage = Number(pages.currentPage),
                        prevPage = Number(pages.prevPage),
                        nextPage = Number(pages.nextPage);

                    let numberOfPages = Number(_pagination.getNumberOfPages(numberOfRows, rowsPerPage));
                    let firstBtn = "<li class=\"" + btnListFirstClass + "\" title=\"Previous page\" " + btnPageNumberSelector + "=\"" + prevPage + "\" " + btnPageNumberSelector + "-type=\"prev\">\
                            <a href=\"#\">«</a>\
                        </li>\
                    ";
                    let lastBtn = "<li class=\"" + btnListLastClass + "\" title=\"Next page\" " + btnPageNumberSelector + "=\"" + nextPage + "\" " + btnPageNumberSelector + "-type=\"next\">\
                            <a href=\"#\">»</a>\
                        </li>\
                    ";
                    numberOfPages = numberOfPages + 1;
                    for (let index = 1; index < numberOfPages; index++) {
                        const btn = "<li class=\"" + btnListClass + " " + ((index === currentPage) ?
                            "active" : "") + "\" " + btnPageNumberSelector + "=\"" + index + "\" title=\"Page " + index + "\" " + btnPageNumberSelector + "-type=\"number\">\
                                <a>" + index + "</a>\
                            </li>\
                        ";
                        lists += btn;
                    }

                    let btnList = "<div class=\"paginationjs paginationjs-theme-blue paginationjs-small card p-1 shadow shadow-lg ml-auto mt-3 mr-2\">\
                        <div class=\"paginationjs-pages\">\
                            <ul>" + firstBtn + " " + lists + " " + lastBtn + "</ul>\
                        </div>\
                    </div>";
                    return btnList;
                }),
                showBtns: ((numberOfRows, rowsPerPage, pages, showBtnIn) => {
                    let _pagination = pagination;
                    const createdBtns = _pagination.createBtns(numberOfRows, rowsPerPage, pages);
                    _this._s(showBtnIn, (container) => {
                        container.innerHTML = createdBtns;
                    });
                }),
                btnClick: {
                    page: 1,
                    prevPage: 1,
                    nextPage: 2,
                    type: "prev",
                    prev: (() => {
                        let _pagination = pagination;
                        let _clicker = pagination.btnClick;
                        _this._s(showBtnIn + " [" + btnPageNumberSelector + "-type=\"prev\"]", (btn) => {
                            const pageNumber = _clicker.clickActions.getPageNumber(btn);
                            _clicker.setActive(pageNumber, _clicker.type);
                        });
                    }),
                    next: (() => {
                        let _pagination = pagination;
                        let _clicker = pagination.btnClick;
                        _this._s(showBtnIn + " [" + btnPageNumberSelector + "-type=\"next\"]", (btn) => {
                            const pageNumber = _clicker.clickActions.getPageNumber(btn);
                            _clicker.setActive(pageNumber, _clicker.type);
                        });
                    }),
                    number: (() => {
                        let _pagination = pagination;
                        let _clicker = pagination.btnClick;

                        _clicker.setActive(_clicker.page, _clicker.type);
                    }),
                    setActive: ((number, type) => {
                        let _clicker = pagination.btnClick;
                        _this._s(showBtnIn + " [" + btnPageNumberSelector + "]", (btn) => {
                            btn.classList['value'] = btn.classList['value'].replace("active", "");
                        });
                        _this._s(showBtnIn + " [" + btnPageNumberSelector + "=\"" + number + "\"][" + btnPageNumberSelector + "-type=\"number\"]", (btn) => {
                            btn.classList['value'] = btn.classList['value'] + " active";
                        });
                        _this._s(showBtnIn + " [" + btnPageNumberSelector + "-type=\"prev\"]", (btn) => {
                            let pageNumber = Number(number) - 1;
                            pageNumber = (pageNumber < 1) ? 1 : pageNumber;
                            btn.attributes[btnPageNumberSelector]['value'] = pageNumber;
                            _clicker.prevPage = Number(pageNumber);
                        });
                        _this._s(showBtnIn + " [" + btnPageNumberSelector + "-type=\"next\"]", (btn) => {
                            let pageNumber = Number(number) + 1;
                            pageNumber = (pageNumber > _clicker.numberOfPages) ? _clicker.numberOfPages : pageNumber;
                            btn.attributes[btnPageNumberSelector]['value'] = pageNumber;
                            _clicker.nextPage = Number(pageNumber);
                        });
                    }),
                    clickActions: {
                        getPageNumber: ((btn) => {
                            const page = btn['attributes'][btnPageNumberSelector]['value'];
                            return page;
                        }),
                        getBtnType: ((btn) => {
                            const type = btn['attributes'][btnPageNumberSelector + "-type"]['value'];
                            return type;
                        }),
                    },
                    numberOfPages: 1,
                    click: ((numberOfPages, callbackFx) => {
                        let _pagination = pagination;
                        let _clicker = pagination.btnClick;
                        _clicker.numberOfPages = numberOfPages;
                        _this._s(showBtnIn + " [" + btnPageNumberSelector + "]", (btn) => {
                            btn.addEventListener("click", (event) => {
                                event.preventDefault();
                                const pageNumber = _clicker.clickActions.getPageNumber(btn);
                                _clicker.page = pageNumber;
                                const btnType = _clicker.clickActions.getBtnType(btn);
                                _clicker.type = btnType;
                                _clicker[btnType]();
                                return callbackFx(event, btn, {
                                    pages: {
                                        pageNumber: _clicker.page,
                                        prevPage: _clicker.prevPage,
                                        nextPage: _clicker.nextPage,
                                    },
                                    btnType: _clicker.type
                                });
                            });
                        });
                    }),
                },
                getNumberOfPages: ((numberOfRows, rowsPerPage) => {
                    return Math.ceil(numberOfRows / rowsPerPage);
                })
            };
            pagination.fetch();
            _this._s(showSrchIn + " [noneTablePagin-search=\"true\"]", (input) => {
                input.addEventListener("input", (e) => {
                    currentPage = 1;
                    searchInputValue = input.value;
                    (search === true) ? pagination.fetch(searchInputValue): null;
                });
            });
            // className: 'paginationjs-theme-blue'
            // className: 'paginationjs-theme-blue paginationjs-small'
            // className: 'paginationjs-theme-blue paginationjs-big'
        }

        uploadPreviewCrop() {
            const _this = this;
            const inputs = '[upload-preview-crop--input]';

            function croppr(Croppr, selector, aR = 1) {
                aR = Number(aR);
                var croppr = new Croppr(selector, {
                    onCropEnd: function(data) {
                        $('[name="photo-x"]').val(data.x);
                        $('[name="photo-y"]').val(data.y);
                        $('[name="photo-width"]').val(data.width);
                        $('[name="photo-height"]').val(data.height);
                    },
                    aspectRatio: aR,
                    startSize: [50, 50],
                });
                var value = croppr.getValue();
                $('[name="photo-x"]').val(value.x);
                $('[name="photo-y"]').val(value.y);
                $('[name="photo-width"]').val(value.width);
                $('[name="photo-height"]').val(value.height);
            }

            _this._s(inputs, (input) => {
                var inputVal = $(input).attr("upload-preview-crop--input");
                var previewerSelector = '[upload-preview-crop--preview="' + inputVal + '"]';
                var aspectRatio = $(previewerSelector).attr('upload-preview-crop--preview---aspectRatio');
                var previewer = $(previewerSelector);

                try {
                    if (aspectRatio == undefined) {
                        croppr(Croppr, previewerSelector + ">img");
                    } else {
                        croppr(Croppr, previewerSelector + ">img", aspectRatio);
                    }
                } catch (error) {
                    console.log(error);
                }

                $(input).on('change', function(e) {
                    var fileUrl = window.URL.createObjectURL(input['files'][0]);
                    var fileName = input['files'][0].name;
                    var ext = fileName.substring(fileName.lastIndexOf('.')).split('.')[1].toLowerCase();

                    $(previewer).html('<img class="container img-fluid" src="' + fileUrl + '"/>');

                    if (aspectRatio == undefined) {
                        croppr(Croppr, previewerSelector + ">img");
                    } else {
                        croppr(Croppr, previewerSelector + ">img", aspectRatio);
                    }
                })
            });
        }

        searchMemberNameId() {
            const selector = '[search_member_byname_for_list]';
            const _this = this;

            _this._s(selector, (smbfl) => {
                let $selects = $(smbfl);
                let $selectsList = [];
                const account_id = (typeof smbfl.attributes['account_id'] === "undefined") ?
                    0 : smbfl.attributes['account_id']['value'];
                const placeholder = (typeof smbfl.attributes['placeholder'] === "undefined") ?
                    "Search For" : smbfl.attributes['placeholder']['value'];
                for (let i = 0; i < $selects.length; i++) {
                    const $select = $selects[i];
                    let selectNewExists = false;
                    for (let _ = 0; _ < $select.classList.length; _++) {
                        const classMember = $select.classList[_];
                        if (classMember === 'super-selector-selectNew') {
                            selectNewExists = true;
                        }
                    }
                    if (selectNewExists === false) {
                        if (!$selectsList.includes($select)) {
                            $selectsList.push($select);
                        }
                    }
                }
                for (let i = 0; i < $selectsList.length; i++) {
                    const $select = $selectsList[i];

                    if (!$select.classList.contains('form-control-select2')) {
                        if (!$select.classList.contains('no-select2')) {
                            doS2($select, account_id, placeholder);
                        }
                    } else {
                        $($select).removeClass('select2-hidden-accessible');
                    }

                }
            });

            function doS2($select, account_id, placeholder) {
                // console.log({ "smbfl-doS2": $select });
                const rowsPerPage = 10;
                let totalShowing = 0;

                function _start(params) {
                    let startNumber = isNaN(params.page) ? 0 : params.page;
                    startNumber = startNumber === 0 ? startNumber : startNumber * rowsPerPage;
                    $('.select2-search__field').on('keyup', function($this) {
                        // console.log({ "smbfl-options-1": $select.options });
                        $($select).empty();
                        // console.log({ "smbfl-options-2": $select.options });

                        startNumber = 0
                        totalShowing = 0;
                    });

                    return startNumber;
                }
                $($select).select2({
                    closeOnSelect: false,
                    ajax: {
                        url: _this.API_BASE_URL + "membership/web/find",
                        dataType: 'json',
                        delay: 250,
                        data: function(params) {
                            return {
                                account_id: account_id,
                                nameonly: 1,
                                search: params.term, // search term
                                start: _start(params),
                            };
                        },
                        headers: {
                            "Authorization": "Bearer " + _this.TOKEN,
                            "Access-Control-Allow-Origin": "*/*",
                            "Accept": "application/json, text/plain, */*"
                        },
                        processResults: function(response, params) {
                            params.page = params.page || 0;
                            // console.log({ "smbfl-response": response, "check": response.error === false });

                            let processedData = [];
                            if (response.error === false) {
                                var _data = response['data'];
                                // console.log({ "smbfl-_data": _data });
                                for (let i = 0; i < _data.length; i++) {
                                    const item = _data[i];
                                    const id = item['id'];
                                    const fullName = item['fullName'];
                                    const _new = {
                                        id: id,
                                        text: fullName,
                                    }
                                    if (!processedData.includes(_new)) {
                                        processedData.push(_new)
                                        $($select).append($('<option>', { fullName: id }).text(fullName));
                                    }
                                }
                            }
                            totalShowing += processedData.length;
                            // console.log({
                            //     "smbfl-processedData": processedData,
                            //     "response.total": response.total,
                            //     "totalShowing": totalShowing
                            // });
                            return {
                                results: processedData,
                                pagination: {
                                    more: totalShowing < response.total
                                }
                            };
                        },
                        cache: true
                    },
                    placeholder: placeholder,
                    minimumInputLength: 1,
                    templateResult: formatRepo,
                    templateSelection: formatRepoSelection
                });
                $($select).addClass('form-control-select2');

                $('[data-select2-id]').attr('style', 'width: min-content !important; height: auto;');
                $('[data-select2-id]>.selection>.select2-selection').attr('style', 'border: none; height: auto; overflow: hidden; box-shadow: none; border-bottom: 1px;background: transparent;');

                $('span.select2, span.select2>span>span').addClass('form-control p-0');
                $('span.select2-selection__rendered, span.select2-selection__arrow').attr('style', 'margin-top: 6px;');
                $('select.no-select2').next('span.select2.select2-container.select2-container--default.form-control.p-0').attr("style", "display: none");
            }

            function formatRepo(repo) {
                // console.log({ "smbfl-repo": repo });
                if (repo.loading) {
                    return repo.text;
                }

                var $container = $(
                    '<option value="' + repo.id + '">' + repo.text + '</option>'
                );
                return $container;
            }

            function formatRepoSelection(repo) {
                return repo.full_name || repo.text;
            }
        }

        select2(selector = 'select') {
            const _this = this;
            let $selects = $(selector);
            let $selectsList = [];
            for (let i = 0; i < $selects.length; i++) {
                const $select = $selects[i];
                let selectNewExists = false;
                for (let _ = 0; _ < $select.classList.length; _++) {
                    const classMember = $select.classList[_];

                    // console.log({ classMember, "===": 'super-selector-selectNew' });
                    if (classMember === 'super-selector-selectNew') {
                        selectNewExists = true;
                    }
                }
                if (selectNewExists === false) {
                    if (!$selectsList.includes($select)) {
                        $selectsList.push($select);
                    }
                }
            }
            for (let i = 0; i < $selectsList.length; i++) {
                const $select = $selectsList[i];

                if (typeof $select.attributes['search_member_byname_for_list'] === "undefined") {
                    if (!$select.classList.contains('form-control-select2')) {
                        if (!$select.classList.contains('no-select2')) {
                            doS2($select);
                            // _this._s('[select-count--show_count]', function(counter) {
                            //     const ID = counter.attributes['select-count--show_count']['value'];
                            //     _this._s('[id="' + ID + '"]', function(selector) {
                            //         const ATTRS = selector.attributes;

                            //         if (ATTRS.multiple != undefined) {
                            //             console.log(selector, selector.selectedOptions);
                            //             selector.selectedOptions;

                            //             selector.addEventListener('change', function(e) {
                            //                 e.preventDefault();
                            //                 console.log(e);
                            //                 console.log(selector, selector.selectedOptions);
                            //             });
                            //         }
                            //     });
                            // });
                        }
                    } else {
                        $($select).removeClass('select2-hidden-accessible');
                    }
                }

            }

            function doS2($select) {
                // console.log({ "doS2": $select });
                $($select).select2({ closeOnSelect: false });
                $($select).addClass('form-control-select2');
                // $('[data-select2-id]').attr('style', 'width: auto !important;');

                $('[data-select2-id]').attr('style', 'width: min-content !important; height: auto;');
                $('[data-select2-id]>.selection>.select2-selection').attr('style', 'border: none; height: auto; overflow: hidden; box-shadow: none; border-bottom: 1px;background: transparent;');

                $('span.select2, span.select2>span>span').addClass('form-control p-0');
                $('span.select2-selection__rendered, span.select2-selection__arrow').attr('style', 'margin-top: 6px;');
                $('select.no-select2').next('span.select2.select2-container.select2-container--default.form-control.p-0').attr("style", "display: none");
            }
            return;
        }
        stopAudio() {
            const _this = this;
            const audios = 'audio';
            _this._s(audios, (audio) => {
                audio.pause();
                audio.currentTime = 0;
            });
        }
        selectNew(data = { title: "special", selector: "select", }) {
            // data = { selector, title }
            const title = data.title == undefined ? 'special' : data.title;
            const selector = data.selector == undefined ? 'select' : data.selector;
            const _title = "special";
            const _this = this;
            let $selects = $(selector);
            for (let i = 0; i < $selects.length; i++) {
                const $select = $selects[i];
                // console.log({ "$select.classList -- 222": $select.classList, "": $select });
                if (!$select.classList.contains('form-control-select2')) {
                    $($select).removeClass('select2-hidden-accessible');
                    doS2($select, i + 1);
                }
            }

            function doS2($select, index) {
                const _newClass = _title + '-select-' + index;
                if ($(".this_" + _newClass).length) {
                    $($select).removeClass(_newClass);
                    // console.log({ "$(.this_newClass)": $(".this_" + _newClass) });
                    document.querySelector(".this_" + _newClass).remove();
                }
                const newClass = title + '-select-' + index;
                $($select).addClass(newClass);
                // console.log({ newClass });
                // console.log({ newClass_: document.querySelector("." + newClass).style });
                const bvSelect = new BVSelect({
                    selector: "." + newClass,
                    searchbox: true,
                    search_autofocus: true,
                    offset: true,
                    width: "100%",
                    placeholder: "Select Option",
                    search_placeholder: "Search...",
                    breakpoint: 750
                });
                bvSelect.Update()
            }
            return;
        }
        mm_active() {
            var $menus = $('[mm-active]');
            var $page = document.URL.substring(document.URL.lastIndexOf('/')).split('/')[1].split('?')[0];

            for (let i = 0; i < $menus.length; i++) {
                const $menu = $menus[i];
                var thisPage = $($menu).attr("mm-active");
                var urls = thisPage.split('|');

                for (let u = 0; u < urls.length; u++) {
                    const url = urls[u];
                    if ($page === url) {
                        $($menu).attr('class', 'mm-active');
                    }
                }
            }
        }
        setup_time() {
            const _this = this;
            _this._s('.timepicker-here', (timepicker) => {
                const currentTime = timepicker.attributes['value']['value'];
                let oldHtml, newTime;
                if (currentTime === "") {
                    newTime = currentTime;
                    oldHtml = timepicker.parentElement.innerHTML
                        .replace("timepicker-here", "")
                        .replace("type=\"text\"", "type=\"time\"");

                } else {
                    const parsedTime = Date.parse(currentTime);
                    newTime = currentTime === "" ? moment() : moment(parsedTime);
                    newTime = newTime.format('HH') + ":" + newTime.format('mm');
                    // ":" + newTime.format('ss') + "." + newTime.format('SSS');
                    timepicker.value = newTime;
                    oldHtml = timepicker.parentElement.innerHTML
                        .replace("timepicker-here", "")
                        .replace("type=\"text\"", "type=\"time\"")
                        .replace(currentTime, newTime);
                }
                timepicker.parentElement.innerHTML = oldHtml;
            });

            return;
        }
        date_time() {
            const _this = this;
            _this.setup_time();
            _this._s('.datepicker-here', (datepicker) => {
                const currentDate = datepicker.attributes['value']['value'];
                let oldHtml, newDate;
                if (currentDate === "") {
                    newDate = currentDate;
                    oldHtml = datepicker.parentElement.innerHTML
                        .replace("datepicker-here", "")
                        .replace("type=\"text\"", "type=\"date\"");
                } else {
                    const parsedDate = Date.parse(currentDate);
                    newDate = currentDate === "" ? moment() : moment(parsedDate);
                    // console.log({ currentDate, newDate });
                    newDate = newDate.format('YYYY') + "-" + newDate.format('MM') + "-" + newDate.format('DD');
                    datepicker.value = newDate;
                    oldHtml = datepicker.parentElement.innerHTML
                        .replace("datepicker-here", "")
                        .replace("type=\"text\"", "type=\"date\"")
                        .replace(currentDate, newDate);
                }
                // console.log({ oldHtml, currentDate, newDate });
                datepicker.parentElement.innerHTML = oldHtml;
            });

            return;
        }

        date_time_dep() {
            const _this = this;
            // const opacity = "-khtml-opacity:0;-moz-opacity:0;-ms-filter:'alpha(opacity=0)';" +
            //     "filter:alpha(opacity=0);filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" +
            //     "opacity:0";
            // moment().format('MMMM Do YYYY, h:mm:ss a'); // March 7th 2021, 9:18:18 am
            // moment().format('dddd'); // Sunday
            // moment().format("MMM Do YY"); // Mar 7th 21
            // moment().format('YYYY [escaped] YYYY'); // 2021 escaped 2021
            // moment().format();
            _this._s('.datepicker-here', (datepicker) => {
                $(document).ready(function() {
                    try {
                        datepicker.DatePickerX.init({
                            mondayFirst: true,
                        });
                        datepicker.DatePickerX.setValue(datepicker.attributes['value']['value']);
                    } catch (error) {
                        console.log(error)
                    }
                });
            });

            return;
        }
        date_time_old() {
            const _this = this;
            _this._s('.datepicker-here', (datepicker) => {
                var $el = $(datepicker);
                var currentDate = new Date($el.val());
                // var $dt = $el.datepicker({
                //     language: "en",
                //     autoClose: false
                // });

                // try {
                //     if ($el.attr("set_default").toLowerCase() == "true") {
                //         if ($el.val() !== '') {
                //             $dt.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
                //             // console.log($el.val(), currentDate, currentDate.getDate())
                //         }
                //     }
                // } catch (error) {
                //     console.log(error)
                // }
                // console.log($el)

                $(document).ready(function() {
                    try {
                        let today = '';
                        let todayDate = new Date();
                        // if ($el.attr("set_default").toLowerCase() == "true") {
                        //     if ($el.val() !== '') {
                        //         today = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
                        //         // console.log($el.val(), currentDate, currentDate.getDate())
                        //     } else {
                        //         today = todayDate.getDate() + "/" + todayDate.getMonth() + "/" + todayDate.getFullYear();
                        //     }
                        // }

                        datepicker.DatePickerX.init({
                            mondayFirst: true,
                        });
                        let date = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
                        // console.log(date);

                        datepicker.DatePickerX.setValue($el.val());
                        // console.log($el.val(), today)
                        // let $input = $el.pickadate({
                        //     format: 'dd/mm/yyyy',
                        //     formatSubmit: 'dd/mm/yyyy',
                        //     min: new Date(1910, 1, 1),
                        //     today: "Today",
                        //     // container: '#container',
                        //     editable: true,
                        //     closeOnSelect: true,
                        //     closeOnClear: false,
                        //     labelMonthNext: 'Go to the next month',
                        //     labelMonthPrev: 'Go to the previous month',
                        //     labelMonthSelect: 'Pick a month from the dropdown',
                        //     labelYearSelect: 'Pick a year from the dropdown',
                        //     selectMonths: true,
                        //     selectYears: 250,
                        //     onRender: function() {
                        //         // _this.select2();
                        //     }
                        // });
                        // console.log($input)
                        // var picker = $input.pickadate('picker');
                        // _this.select2();
                        // console.log(picker);
                        // picker.open();
                    } catch (error) {
                        console.log(error)
                    }
                });
            });

            return;
        }
        selectShow(data) {
            const _this = this;
            const id = data.id;
            const change_selector = data.change_selector;
            const show_value = (data.show_value == undefined) ? "Others" : data.show_value;

            _this._s('[select-show="' + id + '"]', (shower) => {
                if (shower['attributes']['force-show'] == undefined) {
                    $('[select-show]').hide('');
                } else {
                    $("[force-show]").show('');
                }
                $(change_selector).on('change', function() {
                    shower.removeAttribute('force-show');
                    $("[force-show]").attr("style", "");
                    if ($(change_selector).val() == show_value) {
                        if (shower.getAttribute('select-show') !== null) {
                            shower.removeAttribute('select-show');
                            _this._s('[select-show-alt="' + id + '"]', (altShower) => {
                                altShower.setAttribute('select-show', id);
                            });
                        }
                    } else {
                        shower.setAttribute('select-show', id);
                        _this._s('[select-show-alt="' + id + '"]', (altShower) => {
                            if (altShower.getAttribute('select-show') !== null) {
                                altShower.removeAttribute('select-show');
                            }
                        });
                    }
                    if (id.toLowerCase() == "country") {
                        shower.removeAttribute('no-ajax');
                    }
                });
            });
        }

        fileView(fileViewId) {
            const _this = this;
            const modal = "fileViewId-" + fileViewId + "-modal";
            const modalBtn = '[file-view="' + fileViewId + '"]';

            _this._s(modalBtn, (button) => {
                button.setAttribute('style', "cursor: pointer; z-index: 999; background: #fff;");
                button.setAttribute('type', "button");
                button.setAttribute('data-toggle', "modal");
                button.setAttribute('data-target', "#" + modal);
                $(button).on('click', function(click) {
                    var fileInput = document.getElementById(fileViewId);
                    var fileUrl = window.URL.createObjectURL(fileInput['files'][0]);
                    var fileName = fileInput['files'][0].name;
                    var ext = fileName.substring(fileName.lastIndexOf('.')).split('.')[1].toLowerCase();

                    if (ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "mp4" || ext === "mp3" || ext === "m4a" || ext === "avi" || ext === "doc" || ext === "docx" || ext === "pdf" || ext === "txt") {
                        if (ext === "mp4" || ext === "avi") {
                            $("#" + modal + ' [file-name]').html("<span class='text-success card shadow p-1' style=''>" + fileName + "</span>")
                            $("#" + modal + ' [file-viewer]').html('<div align="center" class="my-2"><video width="100%" src="' + fileUrl + '" class="card shadow" controls=""></video></div>');
                        } else if (ext === "mp3" || ext === "m4a") {
                            $("#" + modal + ' [file-name]').html("<span class='text-success card shadow p-1' style=''>" + fileName + "</span>")
                            $("#" + modal + ' [file-viewer]').html('<div align="center" class="my-2"><audio width="100%" src="' + fileUrl + '" class="card shadow" controls=""></audio></div>');
                        } else if (ext === "doc" || ext === "docx" || ext === "accdb" || ext === "pptx" || ext === "xlsx" || ext === "csv" || ext === "pdf" || ext === "txt") {
                            $("#" + modal + ' [file-name]').html("<span class='text-success card shadow p-1' style=''>" + fileName + "</span>")
                            $("#" + modal + ' [file-viewer]').html('<div align="center" class="my-2"><h2><p class="card shadow">.' + ext.toUpperCase() + ' File</p></h2></div>');
                        } else {
                            $("#" + modal + ' [file-name]').html("<span class='text-success card shadow p-1' style=''>" + fileName + "</span>")
                            $("#" + modal + ' [file-viewer]').html('<div align="center" class="my-2"><img src="' + fileUrl + '" class="card shadow" style="width:100%; height:auto"></div>');
                        }
                    } else {
                        $("#" + modal + ' [file-name]').html("<span class='text-warning card' style=''>File not supported</span>");
                        $("#" + modal + ' [file-viewer]').html('<div class=""></div>');
                    }
                });
                $('body').append(
                    `<div class="modal fade" tabindex="-1" id="${modal}" role="dialog"
                        aria-labelledby="${modal}" aria-hidden="true" style="z-index: 99999999999">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">File Viewer</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div file-name></div>
                                    <div file-viewer></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-warning text-white" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>`
                );
            });
        }

        openModal() {
            const _this = this;
            const modalBtn = '[open-modal--id]';

            _this._s(modalBtn, (button) => {
                var modal_id = button['attributes']['open-modal--id']['value'];
                var modal = "openModalId-" + modal_id + "-modal";
                var modal_type = (button['attributes']['open-modal--type'] == undefined) ?
                    "" : button['attributes']['open-modal--type']['value'];
                var modal_title = button['attributes']['open-modal--title']['value'];
                var modal_html = button['attributes']['open-modal--html']['value'];
                var modal_buttons = button['attributes']['open-modal--buttons']['value'];
                button.setAttribute('data-target', "#" + modal);

                $('body').append(
                    `<div class="modal fade" tabindex="-1" id="${modal}" role="dialog"
                        aria-labelledby="${modal}" aria-hidden="true" style="z-index: 1060">
                        <div class="modal-dialog ${modal_type}" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">${modal_title}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ${modal_html}
                                </div>
                                <div class="modal-footer">
                                    ${modal_buttons}
                                </div>
                            </div>
                        </div>
                    </div>`
                );
                try {
                    initMaPop(jQuery);
                    // _this.select2();
                    _this.show_password();
                    _this.date_time();
                    _this.mm_active();
                    _this.bgImg();
                    _this.simpleImgPop();
                    _this.uploadPreviewCrop();
                } catch (error) {
                    console.log(error)
                }
            });
        }

        _s(selector, callback) {
            const selectors = document.querySelectorAll(`${selector}`);
            let callbacks = [];
            for (let index = 0; index < selectors.length; index++) {
                const element = selectors[index];
                callbacks.push(callback(element, index, selectors.length));
            }
            return callbacks;
        }
        submit_form(selector, confirm_msg = "continue?", token = this.TOKEN, noSwalResponse = false, callbackFx = false) {
            Swal.fire({
                title: `<small><i><strong>${confirm_msg}</strong></i></small>`,
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
                    const submit_form = document.querySelector(selector);
                    // console.log(submit_form)
                    Swal.fire({
                        title: '<strong>Error(s)</strong>',
                        // type: 'error',
                        html: '<strong>Error(s)</strong>',
                        showCloseButton: true,
                        focusConfirm: false
                    });
                    fetch(submit_form['attributes']['action']['value'], {
                        method: "POST",
                        headers: {
                            // "Authorization": "Bearer " + token,
                            // "Accept": "application/json, text/plain, */*",
                            "Authorization": "Bearer " + token,
                            "Access-Control-Allow-Origin": "*/*",
                            "Accept": "application/json, text/plain, */*"
                        },
                        body: new FormData(submit_form)
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        if (noSwalResponse == true) {
                            return callbackFx(data);
                        } else {
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
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                },
            });
        }
        submit_form_url(selector, url, confirm_msg = "continue?", token = this.TOKEN, noSwalResponse = false, callbackFx = false) {
            Swal.fire({
                title: `<small><i><strong>${confirm_msg}</strong></i></small>`,
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
                    const submit_form = document.querySelector(selector);
                    // console.log(submit_form)
                    Swal.fire({
                        title: '<strong>Error(s)</strong>',
                        // type: 'error',
                        html: '<strong>Error(s)</strong>',
                        showCloseButton: true,
                        focusConfirm: false
                    });
                    fetch(url, {
                        method: "POST",
                        headers: {
                            "Authorization": "Bearer " + token,
                            "Accept": "application/json, text/plain, */*"
                        },
                        body: new FormData(submit_form)
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        if (noSwalResponse == true) {
                            return callbackFx(data);
                        } else {
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
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                },
            });
        }
        submit_form_data(selector, data, confirm_msg = "continue?", token = this.TOKEN, noSwalResponse = false, callbackFx = false) {
            Swal.fire({
                title: `<small><i><strong>${confirm_msg}</strong></i></small>`,
                type: 'info',
                html: `<b></b>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Yes',
                showLoaderOnConfirm: true,
                timerProgressBar: true,
                preConfirm: (savePackage) => {
                    const submit_form = document.querySelector(selector);
                    // console.log(submit_form)
                    Swal.showLoading()
                        // timerInterval = setInterval(() => {
                        //     const content = Swal.getContent();
                        // }, 1000);
                    setTimeout(() => {
                        Swal.showLoading();
                        // Swal.fire({
                        //     title: '<strong>Error(s)</strong>',
                        //     type: 'error',
                        //     html: '<strong>Error(s)</strong>',
                        //     showCloseButton: false,
                        //     showCancelButton: false,
                        //     focusConfirm: false,
                        // });
                    }, 100);
                    fetch(submit_form['attributes']['action']['value'], {
                        method: "POST",
                        headers: {
                            "Authorization": "Bearer " + token,
                            "Accept": "application/json, text/plain, */*"
                        },
                        body: data
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        if (noSwalResponse == true) {
                            return callbackFx(data);
                        } else {
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
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                },
            });
        }
        json_form(url, data, confirm_msg, token = this.TOKEN, noSwalResponse = false, callbackFx = false) {
            Swal.fire({
                title: `<small><i><strong>${confirm_msg}</strong></i></small>`,
                type: 'info',
                html: `<b></b>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Yes',
                showLoaderOnConfirm: true,
                timerProgressBar: true,
                preConfirm: (savePackage) => {
                    fetch(url, {
                        method: "POST",
                        headers: {
                            "Authorization": "Bearer " + token,
                            "Accept": "application/json, text/plain, */*"
                        },
                        mode: "cors",
                        body: data
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        if (noSwalResponse == true) {
                            return callbackFx(data);
                        } else {
                            if (data.error == true) {
                                const errorList = data['msg'];
                                Swal.fire({
                                    title: '<strong>Error(s)</strong>',
                                    type: 'error',
                                    html: errorList,
                                    showCloseButton: true,
                                    focusConfirm: false
                                });
                            } else if (data.error == false) {
                                const message = data['msg'];
                                Swal.fire({
                                    title: `<strong><u><i>${message}</i></u></strong>`,
                                    type: 'success',
                                    focusConfirm: false
                                });
                                setTimeout(function() {
                                    window.location.reload();
                                }, 1500);
                            }
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                },
            });
        }
        json_form_pay(url, data, confirm_msg, token = this.TOKEN) {
            Swal.fire({
                title: `<small><i><strong>${confirm_msg}</strong></i></small>`,
                type: 'info',
                html: `<b>???</b>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Yes',
                showLoaderOnConfirm: true,
                timerProgressBar: true,
                preConfirm: (savePackage) => {
                    fetch(url, {
                        method: "POST",
                        headers: {
                            "Authorization": "Bearer " + token,
                            "Accept": "application/json, text/plain, */*"
                        },
                        mode: "cors",
                        body: data
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        if (data.error == true) {
                            const errorList = data['msg'];
                            Swal.fire({
                                title: '<strong>Error(s)</strong>',
                                type: 'error',
                                html: errorList,
                                showCloseButton: true,
                                focusConfirm: false
                            });
                        } else if (data.error == false) {
                            const message = data['msg'];
                            const url = data['url'];
                            Swal.fire({
                                title: `<strong><u><i>${message}</i></u></strong>`,
                                type: 'success',
                                focusConfirm: false
                            });
                            setTimeout(function() {
                                window.location = "https://plus.saintsbook.org/admin/payment/index.php?pay_token=" + url;
                            }, 1500);
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                },
            });
        }
        fetchRelay(data, callbackFx, method) {
            method = (method == undefined) ? "GET" : method;
            const url = data.url;
            const content = (data.data == undefined) ? "" : data.data;
            const token = (data.token == undefined) ? this.TOKEN : data.token;
            if (method == "GET") {
                fetch(`${url}`, {
                    method: method,
                    headers: {
                        "Authorization": "Bearer " + token,
                        "Access-Control-Allow-Origin": "*/*",
                        "Accept": "application/json, text/plain, */*"
                    },
                    mode: "cors",
                }).then((res) => {
                    return res.json();
                }).then((data) => {
                    return callbackFx(data);
                });
            } else {
                fetch(`${url}`, {
                    method: method,
                    headers: {
                        "Authorization": "Bearer " + token,
                        "Access-Control-Allow-Origin": "*/*",
                        "Accept": "application/json, text/plain, */*"
                    },
                    mode: "cors",
                    body: content,
                }).then((res) => {
                    return res.json();
                }).then((data) => {
                    return callbackFx(data);
                });
            }
        }
        show_password() {
            const _this = this;
            _this._s(`[show-password="icon"]`, (icon) => {
                function changeInput() {
                    _this._s(`[show-password="input"]`, (input) => {
                        if (input.type == "password") {
                            input.type = "text";
                        } else if (input.type == "text") {
                            input.type = "password";
                        }
                    });
                }
                icon.addEventListener('click', (click) => {
                    click.preventDefault();
                    changeInput();
                });
                icon.addEventListener('mouseover', (mouseover) => {
                    mouseover.preventDefault();
                    changeInput();
                });
            });
        }
        disable_and_loader(input, loader, loading, url) {
            // console.log(input, loader, loading)
            if (loading) {
                $(loader).html("<img src='" + url + "spinner.rotate' class='img-responsive'/>");
                $(input).attr("disabled", true);
            } else {
                $(loader).html("");
                $(input).removeAttr("disabled");
            }
        }
        phone(a) {
            let phone = /^\d{10}$/;
            if ((a.match(phone))) {
                return true;
            } else {
                return false;
            }
        }
        localeR(c) {
            let url = c.url;
            let s1 = c.selector;
            let sLoader = c.selectorLoader;
            if ($(s1).attr("no-ajax") == undefined) {
                $(s1).html("<option value=''>Select a Region</option>");
                let _this = this;
                _this.disable_and_loader(s1, sLoader, true, url);
                $.get(url + "assets/php/custom/locale.php?cc=get_regions", function(a) {
                    $(s1).append(a);
                }).done(function(e) {
                    _this.disable_and_loader(s1, sLoader, false, url);
                });
            }
        }
        localeRall(c) {
            let url = c.url;
            let s1 = c.selector;
            let sLoader = c.selectorLoader;
            $(s1).html("<option value='all'>All Regions</option>");
            let _this = this;
            _this.disable_and_loader(s1, sLoader, true, url);
            $.get(url + "assets/php/custom/locale.php?cc=get_regions", function(a) {
                $(s1).append(a);
            }).done(function(e) {
                _this.disable_and_loader(s1, sLoader, false, url);
            });
        }
        localeRallDefault(c) {
            let url = c.url;
            let s1 = c.selector;
            let sLoader = c.selectorLoader;
            let _this = this;
            _this.disable_and_loader(s1, sLoader, true, url);
            $.get(url + "assets/php/custom/locale.php?cc=get_regions", function(a) {
                $(s1).append(a);
            }).done(function(e) {
                _this.disable_and_loader(s1, sLoader, false, url);
            });
        }
        localeE(c) {
            //training-seminar-event
            let url = c.url;
            let r = c.region;
            let s2 = c.selector2;
            let sLoader = c.selectorLoader;
            let _this = this;
            class region {
                venue_date(r) {
                    $(s2).html("<option value=''>Select a Venue/ Date</option>");
                    _this.disable_and_loader(s2, sLoader, true, url);
                    $.get(url + "assets/php/custom/locale.php?cc=get_training_events&region=" + r, function(a) {
                        $(s2).append(a);
                    }).done(function(e) {
                        _this.disable_and_loader(s2, sLoader, false, url);
                    });
                }
            }
            let reg = new region();
            reg.venue_date(r);
        }
        localeD(c) {
            let url = c.url;
            let r = c.region;
            let s2 = c.selector2;
            let sLoader = c.selectorLoader;
            let _this = this;
            class region {
                district(r) {
                    // console.log($(s2));
                    $(s2).html("<option value=''>Select a District</option>");
                    _this.disable_and_loader(s2, sLoader, true, url);
                    $.get(url + "assets/php/custom/locale.php?cc=get_district&region=" + r, function(a) {
                        $(s2).append(a);
                    }).done(function(e) {
                        _this.disable_and_loader(s2, sLoader, false, url);
                    });
                }
            }
            let reg = new region();
            reg.district(r);
        }
        localeC(c) {
            let url = c.url;
            let r = c.region;
            let d = c.district;
            let s1 = c.selector1;
            let s2 = c.selector2;
            let s3 = c.selector3;
            let sLoader = c.selectorLoader;
            let _this = this;
            class region {
                constituency(r, d) {
                    $(s3).html("<option value=''>Select a Constituency</option>");
                    _this.disable_and_loader(s3, sLoader, true, url);
                    $.get(url + "assets/php/custom/locale.php?cc=get_constituency&region=" + r + "&district=" + d, function(a) {
                        $(s3).append(a);
                    }).done(function(e) {
                        _this.disable_and_loader(s3, sLoader, false, url);
                    });
                }
            }
            let reg = new region();
            reg.constituency(r, d);
        }
        localeEA(ea) {
            let url = ea.url;
            let r = ea.region;
            let d = ea.district;
            let s1 = ea.selector1;
            let s2 = ea.selector2;
            let s3 = ea.selector3;
            let sLoader = ea.selectorLoader;
            let _this = this;
            class region {
                electoral_area(r, d) {
                    $(s3).html("<option value=''>Select a Electoral Area</option>");
                    _this.disable_and_loader(s3, sLoader, true, url);
                    $.get(url + "assets/php/custom/locale.php?cc=get_electoral_area&region=" + r + "&district=" + d, function(a) {
                        $(s3).append(a);
                        $(s3).append("<option>Others</option>");
                    }).done(function(e) {
                        _this.disable_and_loader(s3, sLoader, false, url);
                    });
                }
            }
            let reg = new region();
            reg.electoral_area(r, d);
        }
        localeChurch(c) {
            let url = c.url;
            let m_c = c.mother_church;
            let d = c.district;
            let s2 = c.congregation;
            let sLoader = c.selectorLoader;
            let _this = this;
            class region {
                church(m_c, d) {
                    $(s2).html("<option value=''>Select a Congregation</option>");
                    _this.disable_and_loader(s2, sLoader, true, url);
                    $.get(url + "assets/php/custom/locale.php?cc=get_congregation_by_district&mother_church=" + m_c + "&district=" + d, function(a) {
                        $(s2).append(a);
                    }).done(function(e) {
                        _this.disable_and_loader(s2, sLoader, false, url);
                    });
                }
            }
            let reg = new region();
            reg.church(m_c, d);
        }
        mother_church(c) {
            let url = c.url;
            let s1 = c.selector;
            let sLoader = c.selectorLoader;
            $(s1).html("<option value=''>Select Denomination/Christian Body</option>");
            let _this = this;
            _this.disable_and_loader(s1, sLoader, true, url);
            $.get(url + "assets/php/custom/locale.php?cc=get_mother_church", function(a) {
                $(s1).append(a);
            }).done(function(e) {
                _this.disable_and_loader(s1, sLoader, false, url);
                $(s1).append("<option>Others</option>");
            });
        }
        congregation(c) {
            let url = c.url;
            let mc = c.mother_church;
            let s2 = c.selector;
            let sLoader = c.selectorLoader;
            let _this = this;
            class mother_church {
                congregation(mc) {
                    $(s2).html("<option value=''>Select Congregation</option>");
                    _this.disable_and_loader(s2, sLoader, true, url);
                    $.get(url + "assets/php/custom/locale.php?cc=get_congregation&mother_church=" + mc, function(a) {
                        $(s2).append(a);
                    }).done(function(e) {
                        _this.disable_and_loader(s2, sLoader, false, url);
                        $(s2).append("<option>Others</option>");
                    });
                }
            }
            let reg = new mother_church();
            reg.congregation(mc);
        }
        word_count(x, y) {
            $(x).keyup(function() {
                let res = $(x).val().length;
                $(y.display).html(" " + res);
                if (y.console === null || y.console === undefined) {} else {
                    console.log(y.console + ": " + res)
                }
                return res;
            })
        }
        kickOut() {
            // console.log("HOST")
            this.fetchRelay({ url: "./logout" }, function(response) {
                // console.log(response);
            });
        }
    }
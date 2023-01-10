function initMaPop($) {
    'use strict';
    $('img, [img="act"]').magnificPopup({
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
    $('video, [video="act"]').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        tLoading: 'Loading video #%curr%...',
        mainClass: 'mfp-img-mobile mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        preloader: false,
        fixedContentPos: false,
        image: {
            tError: '<a href="%url%">The video #%curr%</a> could not be loaded.'
        }
    });
    $('[custom_iframe="btn"]').on('click', function(e) {
        e.preventDefault();
        $('[custom_iframe_holder="pop"]').attr('class', 'cih_yes');
        var url = $(e.currentTarget).attr('custom_iframe_url'),
            ext = $(e.currentTarget).attr('custom_iframe_ext');
        if (ext === "pdf" || ext === "doc" || ext === "docx" || ext === "xlsx" || ext === "pptx" || ext === "ppt" || ext === "accdb") {
            $('[custom_iframe_holder="pop"]').html('<div class="fa pull-right">' +
                '<button custom_iframe_="show_btn" class="btn btn-info btn-sm"> <b><i class="fa fa-2x fa-close"></i></b></button>' +
                '</div>' +
                '<iframe class="mfp-img-mobile mfp-fade container" custom_iframe_="show" src="https://docs.google.com/gview?url=' + url + '&embedded=true" style="height: 75vh;"></iframe>');
        } else if (ext === "mp4" || ext === "3gp") {
            $('[custom_iframe_holder="pop"]').html('<div class="fa pull-right">' +
                '<button custom_iframe_="show_btn" class="btn btn-info btn-sm"> <b><i class="fa fa-2x fa-close"></i></b></button>' +
                '</div>' +
                '<video src="' + url + '" controls="" class="mfp-img-mobile mfp-fade container pt-4 pb-4" style="background-color: rgba(1, 11, 33, 0.50); padding: 10px;height: 75vh;" custom_video_="show"></video>');
        } else if (ext === "mp3") {
            $('[custom_iframe_holder="pop"]').html('<div class="fa pull-right">' +
                '<button custom_iframe_="show_btn" class="btn btn-info btn-sm"> <b><i class="fa fa-2x fa-close"></i></b></button>' +
                '</div>' +
                '<audio src="' + url + '" autoplay=" " controls="" class="mfp-img-mobile mfp-fade container" style="background-color: #215868 !important; padding: 10px;" custom_video_="show"></audio>');
        }
        $('[custom_iframe_="show_btn"]').on('click', function(e) {
            $('[custom_iframe_holder="pop"]').empty();
            $('[custom_iframe_holder="pop"]').attr('class', 'cih_no');
        });
    });
}
initMaPop(jQuery);
$(document).ready(function() {
    'use strict';
    $('body').append('<style type="text/css"> .cih_no{display: none;}.cih_yes{display: block; position: fixed; width: 100%; height: 100%; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, 0.75); z-index: 99999999999999999999999;} ' +
        '[custom_iframe_="show"],[custom_video_="show"]{ position: fixed; top: 95px; left: 0; right: 0; bottom: 15px;} ' +
        '[custom_iframe_="show_btn"]{ position: fixed; top: 55px; z-index: 999999999; right: 50px; height: 30px; width: 30px; padding: 0px! important;border-radius:100%}</style>' +
        '<div custom_iframe_holder="pop" class="cih_no"></div>');
});

function main_file(__BASE_URL__, __FILE_BASE_URL__, form_Data, upload_display, window, $, initMaPop) {
    'use strict';

    $(upload_display).html(`<div class="col-md-12">
        <div class="mb-3">
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> Files </i>
                </div>
            </div>
            <div class="card-body py-0">
                <div class="collapse show py-2" id="email_upload_file_toggle">
                    <div class="container">
                        <div class="row" upload_file="display_files"></div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn-actions-pane-right btn btn-primary collapsed" aria-expanded="false"
                    type="button" data-toggle="collapse" href="#email_upload_file_toggle">Toggle Files</button>
            </div>
        </div>
    </div>`);
    initMaPop($);
    $('[multiple="true"][type="file"], [single="true"][type="file"]').on('change', function(e) {
        try {
            var formData = new FormData(document.querySelector(form_Data));

            $.ajax({
                type: 'POST',
                url: __BASE_URL__ + 'upload',
                // url: __BASE_URL__ + 'upload_attachment.php',
                data: formData,
                // headers: {
                //     "Authorization": "Bearer oeiodsiosd9403b2bf0b349443j9rjsb4ywfddf8fd9089b",
                //     "Access-Control-Allow-Origin": "*/*",
                //     "Accept": "application/json, text/plain, */*"
                // },
                beforeSend: function(request) {
                    request.setRequestHeader("Authorization", "Bearer oeiodsiosd9403b2bf0b349443j9rjsb4ywfddf8fd9089b");
                    request.setRequestHeader("Access-Control-Allow-Origin", "*/*");
                    request.setRequestHeader("Accept", "application/json, text/plain, */*");
                },
                xhr: function() {
                    var myXhr = $.ajaxSettings.xhr();
                    if (myXhr.upload) {
                        myXhr.upload.addEventListener('progress', progress, false);
                    }
                    return myXhr;
                },
                cache: false,
                contentType: false,
                processData: false,

                success: function(data) {
                    // console.log(data);
                    data = JSON.parse(data);
                    show_upload(data.response.files);
                    add_file_id(data.response.files);
                    $('[multiple="true"][type="file"]').val(''); //NEW
                    $('[single="true"][type="file"]').val(''); //NEW
                },

                error: function(data) {
                    console.log(data);
                }
            });
        } catch (error) {
            console.log(error);
        }

        e.preventDefault();

    });

    function progress(e) {
        if (e.lengthComputable) {
            var max = e.total;
            var current = e.loaded;

            var Percentage = (current * 100) / max;
            Percentage = parseInt(Percentage);
            console.log(Percentage);

            if (Percentage >= 100) {
                $('[myProgress]').hide();
            } else {
                $('[myProgress]').show();
                move(Percentage, 100);
            }
        }
    }

    function move($width, $maxWidth) {
        var elem = document.querySelector('[myBar]');
        var width = $width;
        var maxWidth = $maxWidth;
        elem.style.width = width * 1 + '%';
        elem.innerHTML = width * 1 + '%';
    }

    function extn(name) {
        return name.substring(name.lastIndexOf('.')).split('.')[1].toLowerCase();
    }
    var idArry = [];

    function add_file_id(data) {
        for (var i = 0; i < data.length; i++) {
            var id = data[i].pdccmc_id === undefined ? data[i].id : data[i].pdccmc_id;
            if ($('[name="mAttachment[]"]').length > 0) {
                $('[name="mAttachment[]"]').append('<option value="' + id + '" selected>' + id + '</option>');
            } else {
                console.log("herre")
                $('[name="mAttachment"]').html('<option value="' + id + '" selected>' + id + '</option>');
            }
            idArry.push(id)
        }
    }

    function remove_file_id(id) {
        var newIdArry = [];
        if ($('[name="mAttachment[]"]').length > 0) {
            $('[name="mAttachment[]"]').empty();
        } else {
            $('[name="mAttachment"]').empty();
        }
        for (var i = 0; i < idArry.length; i++) {
            var idAry = idArry[i];
            if (Number(idAry) !== Number(id)) {
                newIdArry.push(idAry);
                if ($('[name="mAttachment[]"]').length > 0) {
                    $('[name="mAttachment[]"]').append('<option value="' + idAry + '" selected>' + idAry + '</option>');
                } else {
                    $('[name="mAttachment"]').html('<option value="' + idAry + '" selected>' + idAry + '</option>');
                }
            }
        }
        idArry = newIdArry;
    }

    function fileIcon(ext) {
        // console.log(ext)
        if (ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "gif") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-picture-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "mp4" || ext === "3gp") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-video-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "mp3") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-audio-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "pdf") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-pdf-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "zip" || ext === "rar") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-archive-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "html" || ext === "xhtml" || ext === "htm" || ext === "css" || ext === "php" || ext === "rb" || ext === "py" || ext === "js") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-code-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "doc" || ext === "docx") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-word-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "xlsx") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-excel-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "pptx" || ext === "ppt") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-powerpoint-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else if (ext === "accdb") {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-wpforms fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        } else {
            return '<span style="width: auto">' +
                '<span class="d-block fa fa-file-o fa-3x text-info text-center" style="width: auto;text-align: center;"></span>' +
                '</span>';
        }
    }

    function fileAction(ext, url) {
        if (ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "gif") {
            return '<span img="act" style="width: auto">' +
                '<a href="' + url + '" class="w-100 d-block fa text-center"> Preview </a>' +
                '</span>';
        } else if (ext === "mp4" || ext === "3gp") {
            return '<span style="width: auto">' +
                '<a href="#" class="w-100 d-block fa text-center" custom_iframe="btn" custom_iframe_url="' + url + '" custom_iframe_ext="' + ext + '"> Preview</a>' +
                '</span>';
        } else if (ext === "mp3") {
            return '<span style="width: auto">' +
                '<a href="#" class="w-100 d-block fa text-center" custom_iframe="btn" custom_iframe_url="' + url + '" custom_iframe_ext="' + ext + '"> Preview</a>' +
                '</span>';
        } else if (ext === "pdf" || ext === "doc" || ext === "docx" || ext === "xlsx" || ext === "pptx" || ext === "ppt" || ext === "accdb") {
            return '<span style="width: auto">' +
                '<a href="#" class="w-100 d-block fa text-info text-center" custom_iframe="btn" custom_iframe_url="' + url + '" custom_iframe_ext="' + ext + '"> Preview</a>' +
                '</span>';
        } else if (ext === "zip" || ext === "rar") {
            return '<span style="width: auto">' +
                '<span class="d-block fa  text-info text-center" style="width: auto;text-align: center;">No Preview</span>' +
                '</span>';
        } else if (ext === "html" || ext === "xhtml" || ext === "htm" || ext === "css" || ext === "php" || ext === "rb" || ext === "py" || ext === "js") {
            return '<span style="width: auto">' +
                '<span class="d-block fa text-info text-center" style="width: auto;text-align: center;">No Preview</span>' +
                '</span>';
        } else {
            return '<span style="width: auto">' +
                '<span class="d-block fa text-info text-center" style="width: auto;text-align: center;">No Preview</span>' +
                '</span>';
        }
    }

    function removeFileAttch() {
        $('[remove_uploaded_file_this]').on('click', function(e) {
            e.preventDefault();
            var $id = $(e.currentTarget).attr('remove_uploaded_file_this');
            var $cid = $('[name="client_id"]').val();
            Swal.fire({
                title: `<small><i><strong>remove this file?</strong></i></small>`,
                type: 'info',
                html: `<b></b>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Yes',
                showLoaderOnConfirm: true,
                preConfirm: (removeFile) => {
                    if (removeFile) {
                        $.ajax({
                            type: 'POST',
                            url: __BASE_URL__ + 'remove',
                            data: JSON.stringify({ id: $id, client_id: $cid }),
                            cache: false,
                            contentType: false,
                            processData: false,
                            headers: {
                                "Authorization": "Bearer oeiodsiosd9403b2bf0b349443j9rjsb4ywfddf8fd9089b",
                                "Access-Control-Allow-Origin": "*/*",
                                "Accept": "application/json, text/plain, */*"
                            },
                            mode: "cors",
                            success: function(data) {
                                $('[uploaded_file_this="' + $id + '"]').remove();
                                remove_file_id($id);
                            },
                            error: function(data) {
                                console.log(data);
                            }
                        });
                    } else {
                        swal.close();
                    }
                }
            });
        });
    }

    function show_upload(data) {
        for (var i = 0; i < data.length; i++) {
            var _E_ = data[i];
            var _ID_ = _E_.pdccmc_id === undefined ? _E_.id : _E_.pdccmc_id;
            var _NAME_ = _E_.pdccmc_attachment === undefined ? _E_.attachment : _E_.pdccmc_attachment;
            var _EXT_ = extn(_NAME_);
            $('[upload_file="display_files"]').append('<div class="col-sm-6 col-md-4 px-2" style="width:50%" uploaded_file_this="' + _ID_ + '">' +
                '<div class="card ml-0 mr-0 mt-1 mb-1">' +
                '<div class="card-header m-0 p-1">' +
                '<button type="button" class="btn btn-outline-danger btn-sm fa pull-right small" style="padding: 2px; margin: 0;" remove_uploaded_file_this="' + _ID_ + '"> remove <span class="fa fa-close"></span></button>' +
                '</div>' + '<div class="card-body m-0 p-1">' +
                fileIcon(_EXT_) +
                '</div>' + '<div class="card-footer m-0 p-1">' +
                fileAction(_EXT_, __FILE_BASE_URL__ + _NAME_) +
                '</div>' +
                '</div>' +
                '</div>');
        }
        removeFileAttch();
        initMaPop($);
    }
}

if ($('[upload_file="multiple"]').length > 0) {
    (function(__BASE_URL__, __FILE_BASE_URL__, form_Data, upload_display, window, $, initMaPop) {
        main_file(__BASE_URL__, __FILE_BASE_URL__, form_Data, upload_display, window, $, initMaPop);
    })($('[email-post-attachments="true"]').attr("action"), $('[name="file_api_location"][id="file_api_location"]').val(), '[upload_file="multiple"]', '[upload_file="display"]', window, jQuery, initMaPop);
}

if ($('[upload_file-alt="multiple"]').length > 0) {
    (function(__BASE_URL__, __FILE_BASE_URL__, form_Data, upload_display, window, $, initMaPop) {
        main_file(__BASE_URL__, __FILE_BASE_URL__, form_Data, upload_display, window, $, initMaPop);
    })($('[email-post-attachments="true"]').attr("action"), $('[name="file_api_location"][id="file_api_location"]').val(), '[upload_file-alt="multiple"]', '[upload_file-alt="display"]', window, jQuery, initMaPop);
}

const json_form = (url: string, data: string, confirm_msg: string, token: string, noSwalResponse: boolean = false, callbackFx: ((arg0: any) => any) | null = null) => {
  // @ts-ignore
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
    preConfirm: (savePackage: any) => {
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
          if (callbackFx !== null) {
            return callbackFx(data);
          }
        } else {
          if (data.error == true) {
            const errorList = data['msg'];
            // @ts-ignore
            Swal.fire({
              title: '<strong>Error(s)</strong>',
              type: 'error',
              html: errorList,
              showCloseButton: true,
              focusConfirm: false
            });
          } else if (data.error == false) {
            const message = data['msg'];
            // @ts-ignore
            Swal.fire({
              title: `<strong><u><i>${message}</i></u></strong>`,
              type: 'success',
              focusConfirm: false
            });
            setTimeout(function () {
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
(function (window, document, _selector, jsonForm) {
  const TOKEN = 'oeiodsiosd9403b2bf0b349443j9rjsb4ywfddf8fd9089b';
  document.addEventListener('DOMContentLoaded', function (loaded) {
    const btnSubmitPost = ((selector: string) => {
      document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('click', function (fE) {
          fE.preventDefault();
          console.log(element)

          // @ts-ignore
          var confirm_msg = element['attributes']['btn-submit-post--confirm']['value'],
            // @ts-ignore
            url = element['attributes']['btn-submit-post--url']['value'],
            // @ts-ignore
            data = element['attributes']['btn-submit-post']['value'];

          jsonForm(url = url, data = data, confirm_msg = confirm_msg, TOKEN,);
        }, false);
      })
    })(_selector)
  });
})(window, document, '[btn-submit-post]', json_form);

      //   cc._s("[btn-submit-post]", function(element) {
      //     element.addEventListener('click', function(fE) {
      //         fE.preventDefault();
      //         console.log(element)

      //         var confirm_msg = element['attributes']['btn-submit-post--confirm']['value'];
      //         var url = element['attributes']['btn-submit-post--url']['value'];
      //         var data = element['attributes']['btn-submit-post']['value'];

      //         cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
      //     }, false);

      // });

// tsc --script --lib DOM,DOM.Iterable,ES6 --target ES6 --minify --out main.js main.ts --watch
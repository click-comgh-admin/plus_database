import { CONSTANTS } from "@@addons/constants";

if ('serviceWorker' in navigator) {

  window.addEventListener('load', () => {

    // // navigator.serviceWorker.register(CONSTANTS.URLS.BASE_URL + 'akwaaba-forms/service-worker.js').then(registration => {
    // // @ts-ignore
    // console.log({"window['service-worker-url-path']": window['service-worker-url-path']});
    // @ts-ignore
    navigator.serviceWorker.register(window['service-worker-url-path']).then(registration => {

      // console.log('SW registered: ', registration);

    }).catch(registrationError => {

      console.log('SW registration has failed: ', registrationError);

    });

  });

}
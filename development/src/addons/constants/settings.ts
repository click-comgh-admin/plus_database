// console.log({ "window.location.href": window.location.href });

// const PRODUCTION = false;
const PRODUCTION = true;
let _HOME_PAGE_BASE_URL: string;

let _isClientApp: boolean;
if (window.location.href.includes(_HOME_PAGE_BASE_URL)) {
  _isClientApp = true;
} else {
  _isClientApp = false;
}

// console.log({ _isClientApp });

export const APP_SETTINGS = {
  production: PRODUCTION,
  isClientApp: _isClientApp,
}

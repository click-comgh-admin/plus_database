import { APP_SETTINGS } from "./settings";

let _BASE_URL: string, _API_BASE_URL: string,
  _AKWAABA_API_BASE_URL: string, _FILE_BUCKET_BASE_URL: string,
  _HOME_PAGE_BASE_URL: string, _LOGIN_PAGE_BASE_URL: string,
  _PUBLIC_BASE_URL: string, _PUBLIC_PAGE_BASE_URL: string,
  _PUBLIC_LOGIN_PAGE_BASE_URL: string, _REGISTRATION_BASE_URL: string,
  _REG_CONNECTION_BASE_URL: string, __clientIdentifier: string,
  _pdb_client: string;

if (APP_SETTINGS.production) {
  const DOMAIN_ADDRESS = window.location.origin.replace(/^https?:\/\//, '');
  console.log({DOMAIN_ADDRESS, 'DOMAIN_ADDRESS.includes("-2.akwaabasoftware.com")': DOMAIN_ADDRESS.includes("-2.akwaabasoftware.com")})

  const BaseUrl = "akwaabasoftware.com/";
  _API_BASE_URL = "https://db-api.akwaabasoftware.com/";
  _AKWAABA_API_BASE_URL = DOMAIN_ADDRESS.includes("-2.akwaabasoftware.com")
    ? "https://db-api-v2-2." + BaseUrl : "https://db-api-v2." + BaseUrl;

  _REGISTRATION_BASE_URL = "https://register." + BaseUrl;
  _REG_CONNECTION_BASE_URL = "https://connect." + BaseUrl;

  __clientIdentifier = "akwaabaclients." + BaseUrl;
  _BASE_URL = "https://" + __clientIdentifier;
  _PUBLIC_BASE_URL = "https://akwaabaapp." + BaseUrl;
  _FILE_BUCKET_BASE_URL = "https://file-bucket.akwaabasoftware.com/";
  _HOME_PAGE_BASE_URL = _BASE_URL + "";
  _PUBLIC_PAGE_BASE_URL = _PUBLIC_BASE_URL + "";

  _pdb_client = DOMAIN_ADDRESS.includes("-2.akwaabasoftware.com")
    ? "https://database-2.akwaabasoftware.com/" : "https://database.akwaabasoftware.com/";

  _LOGIN_PAGE_BASE_URL = _pdb_client + "login";
} else {
  __clientIdentifier = "akwaaba-forms/";
  // const IP_ADDRESS = '192.168.43.161';
  // const IP_ADDRESS = '192.168.173.1';
  // const IP_ADDRESS = '192.168.0.179';
  const IP_ADDRESS = '192.168.2.51';
  _BASE_URL = "http://127.0.0.1:9002/";
  // _BASE_URL = "http://192.168.173.172:9002/";
  _API_BASE_URL = "http://" + IP_ADDRESS + "/AMG/plus_db/api/";
  _AKWAABA_API_BASE_URL = _BASE_URL + "api/";
  // _pdb_client = "http://" + IP_ADDRESS + "/AMG/plus_db/client_dashboard/";
  _pdb_client = "http://" + IP_ADDRESS + ":84/";

  _FILE_BUCKET_BASE_URL = "http://" + IP_ADDRESS + "/AMG/plus_db/file_bucket/";
  _HOME_PAGE_BASE_URL = _BASE_URL + __clientIdentifier;
  _PUBLIC_PAGE_BASE_URL = _BASE_URL + "akwaaba-forms-public/";
  _LOGIN_PAGE_BASE_URL = _pdb_client + "login";
  _REGISTRATION_BASE_URL = "http://localhost:3000/";
  _REG_CONNECTION_BASE_URL = "http://localhost:3001/";
}

export const URLS = {
  BASE_URL: _BASE_URL,
  API_BASE_URL: _API_BASE_URL,
  PDB_CLIENT: _pdb_client,
  AKWAABA_API_BASE_URL: _AKWAABA_API_BASE_URL,
  FILE_BUCKET_BASE_URL: _FILE_BUCKET_BASE_URL,
  HOME_PAGE_BASE_URL: _HOME_PAGE_BASE_URL,
  PUBLIC_PAGE_BASE_URL: _PUBLIC_PAGE_BASE_URL,
  LOGIN_PAGE_BASE_URL: _LOGIN_PAGE_BASE_URL,
  PUBLIC_LOGIN_PAGE_BASE_URL: _PUBLIC_LOGIN_PAGE_BASE_URL,
  REGISTRATION_BASE_URL: _REGISTRATION_BASE_URL,
  REG_CONNECTION_BASE_URL: _REG_CONNECTION_BASE_URL,
  FORGOT_PASSWORD_URL: "https://password-reset.akwaabasoftware.com/client-user/forgot-password",
  PUBLIC_BASE_URL: "https://akwaabasoftware.com/",
  CLICK_COM_BASE_URL: "https://clickcomgh.com/",
  // SERVICE_WORKER: SERVICE_WORKER
}

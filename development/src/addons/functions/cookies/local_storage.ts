import { get_cookie, set_cookies } from ".";

export class AppStorageItem {
  public get_storage_item = (key: string) => {
    if (typeof (Storage) !== undefined) {
      return localStorage.getItem(key);
    } else {
      return get_cookie(key)
    }
  }
  
  public set_storage_item = (key: string, value: string, time?: number, path?: string) => {
    if (typeof (Storage) !== undefined) {
      localStorage.setItem(key, value);
    } else {
      set_cookies(key, value, time, path)
    }
  }
  
  public remove_storage_item = (key: string) => {
    if (typeof (Storage) !== undefined) {
      localStorage.removeItem(key);
    } else {
      set_cookies(key, "", -1);
    }
  }
}







export const urlQueryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  return params;
}
export const urlQueryParamsGet = (query: string) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  let value: string = null;
  for (const key in params) {
    if (key === query) {
      value = params[key]
    }
  }
  return value;
}
export const urlQueryParamsGetAll = (query: string) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = urlSearchParams.getAll(query);
  return params;
}

export const urlQueryParamsJoin = (object:{
  [k: string]: string;
}) => {
  let urlStr: string = "";
  let index = 0;
  for (const key in object) {
    index += 1; 
    urlStr += `${(index > 1) ? "&": ""}${key}=${object[key]}`;
  }
  return urlStr;
}
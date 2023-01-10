export const getValueFromFormDataKey = (formData: FormData, key: string) => {
  let object: object = {};
  formData.forEach((value, _key) => {
    // console.log({value, _key})
    // Reflect.has in favor of: object.hasOwnProperty(_key)
    if (!Reflect.has(object, _key)) {
      // @ts-ignore
      object[_key] = value;
      return;
    }
    // @ts-ignore
    if (!Array.isArray(object[_key])) {
      // @ts-ignore
      object[_key] = [object[_key]];
    }
    // @ts-ignore
    object[_key].push(value);
  });
  // @ts-ignore
  return object[key];
}
export const formDataToJson = (formData: FormData) => {
  let object: object = {};
  formData.forEach((value, key) => {
    // Reflect.has in favor of: object.hasOwnProperty(key)
    if (!Reflect.has(object, key)) {
      // @ts-ignore
      object[key] = value;
      return;
    }
    // @ts-ignore
    if (!Array.isArray(object[key])) {
      // @ts-ignore
      object[key] = [object[key]];
    }
    // @ts-ignore
    object[key].push(value);
  });
  return JSON.stringify(object);
}
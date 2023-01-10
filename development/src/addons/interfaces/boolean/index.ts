export const Boolean_I = (bool: any) => {
  const _bool = String(bool).toLowerCase();
  // console.info({_bool});
  
  if (_bool === "1") {
    return true;
  } else if (_bool === "true") {
    return true;
  } else if (bool === true) {
    return true;
  } else {
    return false;
  }
}
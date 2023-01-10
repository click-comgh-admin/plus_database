export function Time_I(dateTime: string): Date {
  const __dT: string = "00:00:00",
    _dT_ = String(dateTime).toLocaleLowerCase().split("T");
  let _dT: string = __dT;
  if (_dT_.length > 1) {
    _dT = _dT_[1];
    // _dT = _dT_[1].split('.')[0];
  } else if (_dT_.length === 1) {
    _dT = _dT_[0];
  }

  if (_dT === 'null') {
    return null;
  }

  let today = new Date();
  const newTime = _dT.split(':');
  // console.log({ today, newTime })
  if (newTime[0] !== undefined) {
    today.setHours(Number(newTime[0]));
  }
  if (newTime[1] !== undefined) {
    today.setMinutes(Number(newTime[1]));
  }
  if (newTime[2] !== undefined) {
    today.setSeconds(Number(newTime[2]));
  }
  // console.log({ today })
  return today;
}
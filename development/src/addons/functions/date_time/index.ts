export const dateTime = (date: string = "") => {
  // new Date(date)
  let now = new Date(),
    year = now.getFullYear(),
    month = (now.getMonth() + 1),
    day = now.getDate(),
    hour = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds(),
    getDate = year + '-' + month + '-' + day,
    getTime = hour + ":" + minutes + ":" + seconds,
    newDateTime = new Date(year, month, day, hour, minutes, seconds),
    dateTime = getDate + ' ' + getTime,
    code = year + month + day + hour + minutes + seconds;
  return { dateTime: newDateTime, __string__: dateTime, __code__: code, };
}

export const getDateTime = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  const __date = new Date(),
    _DateString = `${date}`;
  
  let _date = new Date(_DateString);
  return _date.toLocaleString('en-US', options);
}
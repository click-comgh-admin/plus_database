export const getTime = (time: Date) => {
  const __time = new Date(),
    _DateString = `${__time.getDate()}/${__time.getMonth()}/${__time.getFullYear()} ${time}`;
  
  let _time = new Date(_DateString);
  // console.log({"time": time, "__time": __time, "__time.getDate()": __time.getDate(), "_DateString": _DateString, "_time": _time})
  return _time;
}

export const getLocalTime = (time: Date, options?: Intl.DateTimeFormatOptions) => {
  console.log({time});
  
  return time === undefined? "-": time.toLocaleTimeString('en-US', options);
}
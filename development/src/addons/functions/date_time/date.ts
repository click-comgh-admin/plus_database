export const getDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  const __date = new Date(),
    _DateString = `${date}`;
  
  let _date = new Date(_DateString);
  return _date.toLocaleDateString('en-US', options);
}
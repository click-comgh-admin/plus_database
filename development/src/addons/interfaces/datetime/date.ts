export function Date_I(dateTime: string): Date {

  if (dateTime === 'null' || dateTime === null) {
    return null;
  }

  let date = new Date(dateTime);
  
  // console.log({ date })
  return date;
}
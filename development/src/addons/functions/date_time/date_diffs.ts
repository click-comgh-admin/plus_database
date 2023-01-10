/**
 * ##### GET DATE DIFFERENCE
 * @param date2?: Date | null 
 * @param date1?: Date | null 
 * @returns number
 */
export const DateDifference = (date2?: Date | null, date1?: Date | null) => {
  const then = (date2 === null) || (date2 === undefined) ? new Date() : date2;
  const now = (date1 === null) || (date1 === undefined) ? new Date() : date1;

  // const msBetweenDates = Math.abs(then.getTime() - now.getTime());
  const msBetweenDates = then.getTime() - now.getTime();

  const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

  return hoursBetweenDates
}

/**
 * ##### GET DATE DIFFERENCE IN SPECIFIED HOURS
 * ______
 * - To get in seconds use (60 * 60)
 * ______
 * 
 * @param date2?: Date | null 
 * @param date1?: Date | null 
 * @param minutes: number ...Defaults to 60 minutes
 * 
 * @returns `number` ...in minutes 
 */
export const DateDifferenceMinutes = (date2?: Date | null, date1?: Date | null, minutes: number = 60,) => {
  const hoursBetweenDates = DateDifference(date2, date1);
  return hoursBetweenDates * minutes;
}
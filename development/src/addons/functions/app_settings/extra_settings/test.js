const then = new Date("2022-12-07T17:18:35.612Z");
const now = new Date("2022-12-06T17:18:35.612Z");

const msBetweenDates = Math.abs(then.getTime() - now.getTime());

const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

console.log({ hoursBetweenDates })

if (hoursBetweenDates > 24) {
    console.log('date is within 24 hours');
} else {
    console.log('date is NOT within 24 hours');
}
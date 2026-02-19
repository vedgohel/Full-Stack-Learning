// dates

/*
let myDate = new Date();
console.log(myDate.toString()); // Current date and time
console.log(myDate.getDate()); // Day of the month (1-31)
console.log(myDate.toLocaleDateString()); // Local date format
console.log(myDate.getFullYear()); // Full year (e.g., 2023)
console.log(myDate.getMonth()); // Month (0-11, where 0 is January)
console.log(myDate.getDay()); // Day of the week (0-6, where 0 is Sunday)
console.log(myDate.getHours()); // Hour (0-23)


console.log(typeof myDate); // "object"
*/

// Creating a date object with a specific date
let myDate1 = new Date("01-10-2025"); // Invalid date format

// Correct format for creating a date object
let myDate2 = new Date("2023-10-01T12:00:00Z");
console.log(myDate1.toDateString()); // Specific date and time


// let myDate3 = new Date.tolocaleDateString('default', {
//     weekday: 'long',
//     year: 'numeric',

// });

// console.log(myDate3); // Localized date string
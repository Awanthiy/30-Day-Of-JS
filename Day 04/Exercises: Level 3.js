function daysInMonth(month, year) {
  // Handle case-insensitive month input
  month = month.toLowerCase();

  // Array of days in each month (non-leap year)
  const daysInMonthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Check for leap year
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // February in leap year has 29 days
  if (isLeapYear && month === "february") {
    return daysInMonthArray[1] = 29;
  }

  // Return days for other months
  return daysInMonthArray[month.substring(0, 3) - 1]; // Get index from month substring
}

while (true) {
  const month = prompt("Enter a month: ");
  if (!month) break; // Exit loop if user enters nothing

  const year = parseInt(prompt("Enter year: "));

  const numDays = daysInMonth(month, year);
  console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has ${numDays} days.`);
}

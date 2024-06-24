function getFormattedTime(format = "%Y-%m-%d %H:%M") {
  const now = new Date();

  // Ensure two digits for hour and minute using padStart
  const twoDigitNumber = (number) => number.toString().padStart(2, "0");
  const formattedTime = format
    .replace("%Y", now.getFullYear())
    .replace("%m", twoDigitNumber(now.getMonth() + 1))  
    .replace("%d", twoDigitNumber(now.getDate()))
    .replace("%H", twoDigitNumber(now.getHours()))
    .replace("%M", twoDigitNumber(now.getMinutes()));

  return formattedTime;
}

// Example usage with YYYY-MM-DD HH:mm format
const formattedTime1 = getFormattedTime();
console.log(formattedTime1);  

// Example usage with DD-MM-YYYY HH:mm format
const formattedTime2 = getFormattedTime("%d-%m-%Y %H:%M");
console.log(formattedTime2);  

// Example usage with DD/MM/YYYY HH:mm format
const formattedTime3 = getFormattedTime("%d/%m/%Y %H:%M");
console.log(formattedTime3);  

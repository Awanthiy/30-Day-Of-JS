// Grading system
function calculateGrade(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 89) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "D";
  } else if (score >= 0 && score <= 49) {
    return "F";
  } else {
    return "Invalid score";
  }
}

const studentScore = parseInt(prompt("Enter student's score: "));
const studentGrade = calculateGrade(studentScore);
console.log(`Student's grade: ${studentGrade}`);

// Season check
function checkSeason(month) {
  month = month.toLowerCase(); // Convert to lowercase for case-insensitive matching
  switch (month) {
    case "september":
    case "october":
    case "november":
      return "Autumn";
    case "december":
    case "january":
    case "february":
      return "Winter";
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "Summer";
    default:
      return "Invalid month";
  }
}

const userMonth = prompt("Enter a month: ");
const currentSeason = checkSeason(userMonth);
console.log(`The season is: ${currentSeason}`);

// Weekend/working day check
function isWeekend(day) {
  const lowerDay = day.toLowerCase(); // Convert to lowercase for case-insensitive matching
  return lowerDay === "saturday" || lowerDay === "sunday";
}

const userDay = prompt("What is the day today? ");
const isWeekendDay = isWeekend(userDay);
console.log(isWeekendDay ? `${userDay} is a weekend.` : `${userDay} is a working day.`);

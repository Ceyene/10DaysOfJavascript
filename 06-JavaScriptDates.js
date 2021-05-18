// Objective
// In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.
// Task
// Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.
function getDayName(dateString) {
  let dayName;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Write your code here
  const dayNumber = new Date(dateString).getDay();
  dayName = days[dayNumber];
  return dayName;
}

// Objective
// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.
// Task
// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
// Complete the function in the editor so that it does the following:
// - Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:
// where A is the rectangle's area and P is its perimeter.
// - Creates an array consisting of  and  and sorts it in ascending order.
// - Returns the sorted array.

function sides(literals, ...expressions) {
  const [A, P] = expressions;
  const root = Math.sqrt(P * P - 16 * A);
  const s1 = (P + root) / 4;
  const s2 = (P - root) / 4;
  const sidesArray = [s1, s2].sort();
  return sidesArray;
}

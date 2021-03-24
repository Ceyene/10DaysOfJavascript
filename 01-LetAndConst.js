//Objective
//In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.
//Task
//Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
//Read a number, , denoting the radius of a circle from stdin.
//Use  and  to calculate the  and  of a circle having radius .
//Print  as the first line of output and print  as the second line of output.

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  let r = parseFloat(readLine());
  // Print the area of the circle:
  let area = PI * Math.pow(r, 2);
  console.log(area);
  // Print the perimeter of the circle:
  let perimeter = 2 * PI * r;
  console.log(perimeter);
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

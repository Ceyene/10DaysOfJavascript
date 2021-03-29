//Objective
//In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.
//Task
//Complete the reverseString function; it has one parameter, s. You must perform the following actions:
//Try to reverse string s using the split, reverse, and join methods.
//If an exception is thrown, catch it and print the contents of the exception's  on a new line.
//Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
function reverseString(s) {
  try {
    let newArr = s.split("");
    let reverse = newArr.reverse();
    s = reverse.join("");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(s);
  }
}

reverseString("murcielago");
reverseString(12345);

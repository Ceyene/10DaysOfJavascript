//Objective
//In this challenge, we learn about switch statements. Check out the attached tutorial for more details.
//Task
//Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s.charAt(0)) {
    case "a" || "e" || "i" || "o" || "u":
      letter = "A";
      break;
    case "b" || "c" || "d" || "f" || "g":
      letter = "B";
      break;
    case "h" || "j" || "k" || "l" || "m":
      letter = "C";
      break;
    case "n" ||
      "p" ||
      "q" ||
      "r" ||
      "s" ||
      "t" ||
      "v" ||
      "w" ||
      "x" ||
      "y" ||
      "z":
      letter = "D";
      break;
  }
  return letter;
}

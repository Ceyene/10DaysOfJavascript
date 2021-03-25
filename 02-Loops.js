//Objective
//In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.
//Task
//First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
//Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let long = s.length;
  let vowels = ["a", "e", "i", "o", "u"];
  let consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < long; i++) {
    vowels.indexOf(s[i]) !== -1 && console.log(s[i]);
  }
  for (let i = 0; i < long; i++) {
    consonants.indexOf(s[i]) !== -1 && console.log(s[i]);
  }
}

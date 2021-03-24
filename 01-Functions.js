//Objective
//Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.
//Task
//Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

const number = 4;

function factorial(num) {
  let factNum = 1;
  for (let i = 1; i <= num; i++) {
    factNum *= i;
  }
  return factNum;
}

factorial(number);

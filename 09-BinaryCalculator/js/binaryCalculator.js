const res = document.getElementById("res");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");

const checkOperator = () => {
  if (
    res.innerHTML.endsWith("+") ||
    res.innerHTML.endsWith("-") ||
    res.innerHTML.endsWith("*") ||
    res.innerHTML.endsWith("/")
  )
    return true;
};

btn0.addEventListener("click", () => {
  res.innerHTML += "0";
});

btn1.addEventListener("click", () => {
  res.innerHTML += "1";
});

btnSum.addEventListener("click", () => {
  if (res.innerHTML.length != 0 && !checkOperator()) res.innerHTML += "+";
});

btnSub.addEventListener("click", () => {
  if (res.innerHTML.length != 0 && !checkOperator()) res.innerHTML += "-";
});

btnMul.addEventListener("click", () => {
  if (res.innerHTML.length != 0 && !checkOperator()) res.innerHTML += "*";
});

btnDiv.addEventListener("click", () => {
  if (res.innerHTML.length != 0 && !checkOperator()) res.innerHTML += "/";
});

btnClr.addEventListener("click", () => {
  res.innerHTML = "";
});

btnEql.addEventListener("click", () => {
  if (!checkOperator()) {
    let re = /\d+/g;
    let re2 = /[\+\-\*\/]+/g;
    let numbers = res.innerHTML.match(re);
    let operations = res.innerHTML.match(re2);
    while (operations.length > 0) {
      if (operations.includes("*")) {
        let indexOfMul = operations.indexOf("*");
        let mul =
          (indexOfMul != 0
            ? parseInt(numbers[indexOfMul - 1], 2)
            : parseInt(numbers[indexOfMul], 2)) *
          parseInt(numbers[indexOfMul + 1], 2);
        numbers.splice(indexOfMul, 2);
        numbers.splice(indexOfMul, 0, mul.toString(2));
        operations.splice(indexOfMul, 1);
      } else if (operations.includes("/")) {
        let indexOfDiv = operations.indexOf("/");
        let division =
          (indexOfDiv != 0
            ? parseInt(numbers[indexOfDiv - 1], 2)
            : parseInt(numbers[indexOfDiv], 2)) /
          parseInt(numbers[indexOfDiv + 1], 2);
        numbers.splice(indexOfDiv, 2);
        numbers.splice(indexOfDiv, 0, division.toString(2));
        operations.splice(indexOfDiv, 1);
      } else if (operations.includes("+")) {
        let indexOfSum = operations.indexOf("+");
        let sum =
          (indexOfSum != 0
            ? parseInt(numbers[indexOfSum - 1], 2)
            : parseInt(numbers[indexOfSum], 2)) +
          parseInt(numbers[indexOfSum + 1], 2);
        numbers.splice(indexOfSum, 2);
        numbers.splice(indexOfSum, 0, sum.toString(2));
        operations.splice(indexOfSum, 1);
      } else {
        let indexOfSub = operations.indexOf("-");
        let sub =
          (indexOfSub != 0
            ? parseInt(numbers[indexOfSub - 1], 2)
            : parseInt(numbers[indexOfSub], 2)) -
          parseInt(numbers[indexOfSub + 1], 2);
        numbers.splice(indexOfSub, 2);
        numbers.splice(indexOfSub, 0, sub.toString(2));
        operations.splice(indexOfSub, 1);
      }
    }
    res.innerHTML = numbers[0].toString(2);
  } else alert("Line must ends with number.");
});

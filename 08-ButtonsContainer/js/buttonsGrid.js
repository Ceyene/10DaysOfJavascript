let buttonTags = [2, 3, 6, 9, 8, 7, 4, 1];
let ids = [2, 3, 6, 9, 8, 7, 4, 1];

let btn5 = document.getElementById("btn5");

btn5.addEventListener("click", () => {
  buttonTags.unshift(buttonTags.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = buttonTags[i];
  }
});

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  const count = Number(e.currentTarget.innerText) + 1;
  e.currentTarget.innerText = count;
});

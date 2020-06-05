const buttonSearch = document.querySelector("#page-home main a");
const modal = document.querySelector("#modal");
const close = document.querySelector("#modal .header a");

buttonSearch.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  /* ou usar o evento remove */
  /* modal.classList.remove("hidden") */
});

close.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  /* ou usar o evento add */
  /* modal.classList.add("hidden") */
});

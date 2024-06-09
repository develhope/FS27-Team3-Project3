const cieBtnRight = document.querySelector(".cie-button-right");
const cieBtnLeft = document.querySelector(".cie-button-left");
const primoCarosello = document.querySelector(".cie-card-container");

cieBtnRight.addEventListener("click", () => {
  console.log(primoCarosello.clientWidth);
  primoCarosello.scrollBy({
    left: primoCarosello.clientWidth / 1,
    behavior: "smooth",
  });
});

cieBtnLeft.addEventListener("click", () => {
  primoCarosello.scrollBy({
    left: -primoCarosello.clientWidth / 1,
    behavior: "smooth",
  });
});

const scBtnRight = document.querySelector(".sc-button-right");
const scBtnLeft = document.querySelector(".sc-button-left");
const secondoCarosello = document.querySelector(".sc-card-container");

scBtnRight.addEventListener("click", () => {
  console.log(secondoCarosello.clientWidth);
  secondoCarosello.scrollBy({
    left: secondoCarosello.clientWidth / 1,
    behavior: "smooth",
  });
});

scBtnLeft.addEventListener("click", () => {
  secondoCarosello.scrollBy({
    left: -secondoCarosello.clientWidth / 1,
    behavior: "smooth",
  });
});

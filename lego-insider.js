/*
function addText(){
hiddenText.style.display = "inline-block";
svg.style.transform = "rotate(270deg)";
}; */

const button = document.querySelector(".insider-freccietta");
const svg = document.getElementById("insiderSvg");
const hiddenText = document.querySelector(".hidden-text");
let clickCount = 0; 

function addText() {
  clickCount++; 

  if (clickCount === 2) {

    hiddenText.style.display = "inline-block";
    svg.style.transform = "rotate(270deg)";

  }
 else {

    hiddenText.style.display = "none";
    svg.style.transform = "rotate(90deg)";
    
  }
}
clickCount = 0

button.addEventListener("click", addText);

// const button = document.querySelector(".insider-freccietta");
// const svg = document.getElementById("insiderSvg");
// const hiddenText = document.querySelector(".hidden-text");
// let clickCount = 0;

// function addText() {
//   clickCount++;

//   if (clickCount % 2 === 0) {
//     // On every second click (2, 4, 6, ...), show text and rotate svg
//     hiddenText.style.display = "inline-block";
//     svg.style.transform = "rotate(270deg)";
//   } else {
//     // On every first click (1, 3, 5, ...), hide text and reset svg rotation
//     hiddenText.style.display = "none";
//     svg.style.transform = "rotate(90deg)";
//   }
// }

// button.addEventListener("click", addText);
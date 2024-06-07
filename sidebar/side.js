document.addEventListener("DOMContentLoaded", function () {
  const acquista = document.getElementById("acquista");
  const closeBtn = document.getElementById("close-btn");
  const side = document.querySelector(".side-white-box");
  const overlay = document.getElementById("overlay");

  acquista.addEventListener("click", function (event) {
    // event.preventDefault();
    side.classList.add("side-white-box-visible");
    overlay.classList.add("dark-trasparency-visible");
  });

  closeBtn.addEventListener("click", function () {
    side.classList.remove("side-white-box-visible");
    overlay.classList.remove("dark-trasparency-visible");
  });

  // overlay.addEventListener("click", function () {
  //   side.classList.remove("side-white-box-visible");
  //   overlay.classList.remove("dark-trasparency-visible");
  // });
});

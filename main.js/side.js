document.addEventListener("DOMContentLoaded", function () {
  const acquista = document.getElementById("acquista");
  const closeBtn = document.getElementById("close-btn");
  const side = document.querySelector(".side-white-box");
  const overlay = document.getElementById("overlay");
  const acquistaList = document.getElementById("acquista-list");
  const scopriBtn = document.getElementById("scopri");
  const scopriList = document.getElementById("scopri-list");
  const aiutoBtn = document.getElementById("aiuto");
  const aiutoList = document.getElementById("aiuto-list");

  acquista.addEventListener("click", function (event) {
    side.classList.add("side-white-box-visible");
    overlay.classList.add("dark-trasparency-visible");
    acquistaList.classList.add("side-list-show");
  });

  scopriBtn.addEventListener("click", function (event) {
    side.classList.add("side-white-box-visible");
    overlay.classList.add("dark-trasparency-visible");
    scopriList.classList.add("side-list-show");
  });

  aiutoBtn.addEventListener("click", function (event) {
    side.classList.add("side-white-box-visible");
    overlay.classList.add("dark-trasparency-visible");
    aiutoList.classList.add("side-list-show");
  });

  closeBtn.addEventListener("click", function () {
    side.classList.remove("side-white-box-visible");
    overlay.classList.remove("dark-trasparency-visible");
  });
});

// overlay.addEventListener("click", function () {
//   side.classList.remove("side-white-box-visible");
//   overlay.classList.remove("dark-trasparency-visible");
// });
// });

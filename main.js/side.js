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

  
  function openSidebar(sideElement, listElement) {
    
    setTimeout(() => {
      sideElement.style.transition = "transform 0.3s ease-in-out";
      sideElement.classList.add("side-white-box-visible");
    }, 1000); 

    
    setTimeout(() => {
      listElement.style.transition = "opacity 0.3s ease-in-out";
      listElement.classList.add("side-list-show");
    }, 2000); 
  }

  
  function closeSidebar(sideElement) {
    sideElement.classList.remove("side-white-box-visible");
  }

  acquista.addEventListener("click", function (event) {
    openSidebar(side, acquistaList);
    overlay.classList.add("dark-trasparency-visible");
  });

  scopriBtn.addEventListener("click", function (event) {
    openSidebar(side, scopriList);
    overlay.classList.add("dark-trasparency-visible");
  });

  aiutoBtn.addEventListener("click", function (event) {
    openSidebar(side, aiutoList);
    overlay.classList.add("dark-trasparency-visible");
  });

  closeBtn.addEventListener("click", function () {
    closeSidebar(side); 
  });

  
  overlay.addEventListener("click", function () {
    closeSidebar(side); 
    overlay.classList.remove("dark-trasparency-visible");
  });
});

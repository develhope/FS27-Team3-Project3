document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("searchButton");
  const closeButton = document.getElementById("closeButton");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", function() {
    searchButton.style.display = "none";
    searchInput.style.display = "block";
    closeButton.style.display = "flex";
    searchInput.focus();
  });

  closeButton.addEventListener("click", function() {
    searchButton.style.display = "flex";
    searchInput.style.display = "none";
    closeButton.style.display = "none";
    searchInput.value = "";
  });
});
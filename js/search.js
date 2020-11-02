
const formButton = document.querySelector(".search-button");
const searchPopup = document.querySelector(".modal-search");
const searchStart = searchPopup.querySelector(".form-input-date")

formButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (searchPopup.classList.contains("modal-show")) {
    searchPopup.classList.remove("modal-show");
  } else {
    searchPopup.classList.add("modal-show");
  }
  searchStart.focus();
});


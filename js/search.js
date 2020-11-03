
const formButton = document.querySelector(".search-button");
const searchPopup = document.querySelector(".modal-search");
const searchDateFrom = searchPopup.querySelector(".date-from");
const searchDateTo = searchPopup.querySelector(".date-to");
let searchAdultNum = searchPopup.querySelector(".adult-num");
const searchAdultDec = searchPopup.querySelector(".adult-dec");
const searchAdultInc = searchPopup.querySelector(".adult-inc");
let searchChildNum = searchPopup.querySelector(".child-num");
const searchChildDec = searchPopup.querySelector(".child-dec");
const searchChildInc = searchPopup.querySelector(".child-inc");
const searchStart = searchPopup.querySelector(".form-input-date");
const searchSend = searchPopup.querySelector(".form-button-submit");

let hasStorageAdult = true;
let hasStorageChild = true;
let storage = ""

formButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (searchPopup.classList.contains("modal-show")) {
    searchPopup.classList.remove("modal-show");
  } else {
    searchPopup.classList.add("modal-show");
  }

  try {
    storage = localStorage.getItem("numAdult");
  } catch (err) {
    hasStorageAdult = false;
  }
  if (hasStorageAdult & storage != null) {
    searchAdultNum.value = storage;
  } else {
    searchAdultNum.value = 2;
  }
  console.log(storage);

  try {
    storage = localStorage.getItem("numChild");
  } catch (err) {
    hasStorageChild = false;
  }
  if (hasStorageChild & storage != null) {
    searchChildNum.value = storage;
  } else {
    searchChildNum.value = 0;
  }
  console.log(storage);

  searchStart.focus();
});

searchAdultDec.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log(searchAdultNum.value);
  if (parseInt(searchAdultNum.value, 10) > 1) {
    searchAdultNum.value = parseInt(searchAdultNum.value, 10) - 1;
  }
});

searchAdultInc.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log(searchAdultNum.value);
  if (parseInt(searchAdultNum.value, 10) < 100) {
    searchAdultNum.value = parseInt(searchAdultNum.value, 10) + 1;
  }
});

searchChildDec.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log(searchChildNum.value);
  if (parseInt(searchChildNum.value, 10) > 0) {
    searchChildNum.value = parseInt(searchChildNum.value, 10) - 1;
    // localStorage.setItem("numAdult", searchAdultNum);
  }
});

searchChildInc.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log(searchChildNum.value);
  if (parseInt(searchChildNum.value, 10) < 100) {
    searchChildNum.value = parseInt(searchChildNum.value, 10) + 1;
    // localStorage.setItem("numAdult", searchAdultNum);
  }
});

searchSend.addEventListener("click", function(evt) {
  localStorage.setItem("numAdult", parseInt(searchAdultNum.value, 10));
  localStorage.setItem("numChild", parseInt(searchChildNum.value, 10));
});

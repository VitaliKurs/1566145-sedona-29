const formButton=document.querySelector(".search-button"),searchPopup=document.querySelector(".modal-search"),searchDateFrom=searchPopup.querySelector(".date-from"),searchDateTo=searchPopup.querySelector(".date-to");let searchAdultNum=searchPopup.querySelector(".adult-num");const searchAdultDec=searchPopup.querySelector(".adult-dec"),searchAdultInc=searchPopup.querySelector(".adult-inc");let searchChildNum=searchPopup.querySelector(".child-num");const searchChildDec=searchPopup.querySelector(".child-dec"),searchChildInc=searchPopup.querySelector(".child-inc"),searchStart=searchPopup.querySelector(".form-input-date"),searchSend=searchPopup.querySelector(".form-button-submit");let hasStorageAdult=!0,hasStorageChild=!0,storage="";formButton.addEventListener("click",function(e){e.preventDefault(),searchPopup.classList.contains("modal-show")?searchPopup.classList.remove("modal-show"):searchPopup.classList.add("modal-show");try{storage=localStorage.getItem("numAdult")}catch(e){hasStorageAdult=!1}searchAdultNum.value=hasStorageAdult&null!=storage?storage:2,console.log(storage);try{storage=localStorage.getItem("numChild")}catch(e){hasStorageChild=!1}searchChildNum.value=hasStorageChild&null!=storage?storage:0,searchStart.focus()}),document.addEventListener("DOMContentLoaded",function(e){e.preventDefault();try{storage=localStorage.getItem("numAdult")}catch(e){hasStorageAdult=!1}searchAdultNum.value=hasStorageAdult&null!=storage?storage:2,console.log(storage);try{storage=localStorage.getItem("numChild")}catch(e){hasStorageChild=!1}searchChildNum.value=hasStorageChild&null!=storage?storage:0}),searchAdultDec.addEventListener("click",function(e){e.preventDefault(),console.log(searchAdultNum.value),parseInt(searchAdultNum.value,10)>1&&(searchAdultNum.value=parseInt(searchAdultNum.value,10)-1)}),searchAdultInc.addEventListener("click",function(e){e.preventDefault(),console.log(searchAdultNum.value),parseInt(searchAdultNum.value,10)<100&&(searchAdultNum.value=parseInt(searchAdultNum.value,10)+1)}),searchChildDec.addEventListener("click",function(e){e.preventDefault(),console.log(searchChildNum.value),parseInt(searchChildNum.value,10)>0&&(searchChildNum.value=parseInt(searchChildNum.value,10)-1)}),searchChildInc.addEventListener("click",function(e){e.preventDefault(),console.log(searchChildNum.value),parseInt(searchChildNum.value,10)<100&&(searchChildNum.value=parseInt(searchChildNum.value,10)+1)}),searchSend.addEventListener("click",function(e){localStorage.setItem("numAdult",parseInt(searchAdultNum.value,10)),localStorage.setItem("numChild",parseInt(searchChildNum.value,10))});
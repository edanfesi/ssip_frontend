const closeInformation = document.getElementById("close-information");
const openInformation = document.getElementById("view-information");
const information = document.getElementById("information");
const informationC = document.getElementById("information__container");

const openAdd = document.getElementById("add-employee");
const closeAdd = document.getElementById("close-add");
const add = document.getElementById("add");
const addC = document.getElementById("add__container");


openInformation.addEventListener("click", (e) => {
  e.preventDefault();
  informationC.style.opacity = "1"
  informationC.style.visibility = "visible"
  information.classList.toggle("information-close")
})

closeInformation.addEventListener("click", (e) => {
  information.classList.toggle("information-close")
  setTimeout(() => {
    informationC.style.opacity = "0"
    informationC.style.visibility = "hidden"
  }, 600)
})

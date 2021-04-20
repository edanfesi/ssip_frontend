const openAdd = document.getElementById("add-employee");
const closeAdd = document.getElementById("close-add");
const add = document.getElementById("add");
const addC = document.getElementById("add__container");

const employeeList = document.getElementById("employee_list")
const dataAddNode = document.querySelectorAll("#add_form input")
const dataAdd = [...dataAddNode]
const addEmployee = document.getElementById('btn-add')

function addNewEmployee (e) {
  e.preventDefault()
  let createDiv = document.createElement('div')
  let newCard = employeeList.appendChild(createDiv)
  newCard.setAttribute("class", "employee--card")
  let createleft = newCard.appendChild(createDiv)
  createleft.setAttribute("class", "employee__left")
  let createActive = createleft.appendChild(createDiv)
  createActive.setAttribute("class", "employee--active")
}

openAdd.addEventListener("click", (e) => {
  e.preventDefault();
  addC.style.opacity = "1"
  addC.style.visibility = "visible"
  add.classList.toggle("add-close")
})

closeAdd.addEventListener("click", (e) => {
  add.classList.toggle("add-close")
  setTimeout(() => {
    addC.style.opacity = "0"
    addC.style.visibility = "hidden"
  }, 600)
})

addEmployee.addEventListener("click", addNewEmployee);

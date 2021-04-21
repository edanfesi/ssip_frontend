

//funcion que renderiza todos los usuarios que tiene la api
function renderUsers(users) {
  for(i=0; i < users.length; i++ ) {
    const divNode = document.createElement('div')
    employeeList.appendChild(divNode)
    divNode.setAttribute("class", "employee--card")
    divNode.innerHTML = `
        <div class="employee__left">
          <figure>
            <img src="${users[i].picture.medium}" alt="Employee picture">
            <div class="is-active"></div>
          </figure>
          <div class="employee__info">
            <p class="employee__info--name">${users[i].name.first} ${users[i].name.last}</p>
            <p class="employee__info--position">${users[i].phone}</p>
          </div>
        </div>
        <a href="#" class="view" id="view-information">View</a>`
  }
}
//funcion que trae la api y ejecuta el la funcion que renderiza todos los usuarios que tiene la api
const traerApi = function  () {
  fetch("http://ssip-backend.herokuapp.com/api/ssip/user")
  .then(res => res.json())
  .then(data => {
    usuarios = data.results
    console.log(usuarios)
    renderUsers(usuarios)
    return usuarios
  })
}
traerApi()

//lista de empleados que hay
const employeeList = document.getElementById("employee_list")

//traer elementos de la seccion information
const closeInformation = document.getElementById("close-information");
const openInformation = document.querySelectorAll('#view-information');
const information = document.getElementById("information");
const informationC = document.getElementById("information__body");



//traer elemento de la seccion de añadir empleado
const openAdd = document.getElementById("add-employee");
const closeAdd = document.getElementById("close-add");
const add = document.getElementById("add");
const addC = document.getElementById("add__container");
const addEmployee = document.getElementById('btn-add');

const dataAddNode = document.querySelectorAll("#add_form input")
const dataAdd = [...dataAddNode]


function addNewEmployee () {
  for(i = 0; i < dataAdd.length; i++) {
    const divNode = document.createElement('div')
    informationC.appendChild(divNode)
    divNode.setAttribute("class", "body__data")
    divNode.innerHTML = `
            <p class="body__data--title">${dataAdd[i].id}</p>
            <p class="body__data--text">${dataAdd[i].value}</p>`
  }
  setTimeout(() => {
    addC.style.opacity = "0"
    addC.style.visibility = "hidden"
  }, 600)
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

function searchFilters(input, selector) {
  document.addEventListener("keyup", e => {
    if(e.target.matches(input)) {
      document.querySelectorAll(selector).forEach((el) =>
      el.textContent.toUpperCase().includes(e.target.value) || el.textContent.toLowerCase().includes(e.target.value)
      ? el.parentNode.parentNode.parentNode.classList.remove("filter")
      : el.parentNode.parentNode.parentNode.classList.add("filter")
      );
    }
  });
}

function openview(e) {
  let input = this.target
  console.log(`${e.data} en  ${this.name}`);
}


openInformation
// openInformation.addEventListener("click", (e) => {
//   e.preventDefault();
//   informationC.style.opacity = "1"
//   informationC.style.visibility = "visible"
//   information.classList.toggle("information-close")
// })

// closeInformation.addEventListener("click", (e) => {
//   information.classList.toggle("information-close")
//   setTimeout(() => {
//     informationC.style.opacity = "0"
//     informationC.style.visibility = "hidden"
//   }, 600)
// })


searchFilters(".inputSearch", ".employee__info--name")
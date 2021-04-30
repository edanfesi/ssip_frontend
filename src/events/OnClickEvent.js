const SsipResource = require('../resources/SsipResource');

const locationhref = window.location.origin.includes('localhost') ? window.location.origin : `${window.location.origin}/ssip_frontend`

console.log(locationhref)

async function LoginUser() {
    const inputUsername = document.getElementById('username') || null;
    const inputPassword = document.getElementById('password') || null;

    if (inputUsername && inputPassword) {
        const userData = {
            "username": inputUsername.value,
            "password": inputPassword.value
        }

        const response = await SsipResource.loginUser(userData);
        console.log(JSON.stringify(response));

        if (response.status == 204) {
            window.localStorage.setItem("username", inputUsername.value);
            location.href = `${locationhref}/#/2fa`;
        }
    }
}

async function TwoFactorAuth() {
    const inputToken1 = document.getElementById('input-token-1') || null;
    const inputToken2 = document.getElementById('input-token-2') || null;
    const inputToken3 = document.getElementById('input-token-3') || null;
    const inputToken4 = document.getElementById('input-token-4') || null;

    if (inputToken1 && inputToken2 && inputToken3 && inputToken4) {
        console.log("localstorage", localStorage.getItem("username"))
        const token = inputToken1.value + inputToken2.value + inputToken3.value + inputToken4.value;
        const response = await SsipResource.twoFactor({ token }, { "AUTH-USER": localStorage.getItem("username") })
        console.log(JSON.stringify(response));
        if (response.status == 200) {
            console.log(response.data)
            location.href = `${locationhref}/#/${response.data.id}`;
        }
    }
}


function Temporizador(id, inicio, final){
    this.id = id;
    this.inicio = inicio;
    this.final = final;
    this.contador = this.inicio;

    this.conteoSegundos = function(){
        if (this.contador == this.final){
            SsipResource.logoutUser()
            location.href = `${locationhref}`
        return;
        }

        document.getElementById(this.id).innerHTML = this.contador--;
        setTimeout(this.conteoSegundos.bind(this), 1000);
    };
}

async function openAdd () {
    const add = document.getElementById("add");
    const addC = document.getElementById("add__container");
    addC.style.opacity = "1"
    addC.style.visibility = "visible"
    add.classList.toggle("add-close")
}
async function closeAdd () {
    const addC = document.getElementById("add__container");
    add.classList.toggle("add-close")
    setTimeout(() => {
        addC.style.opacity = "0"
        addC.style.visibility = "hidden"
    }, 600)
}

function openEdit () {
    const edit = document.getElementById("edit");
    const editC = document.getElementById("edit__container");
    editC.style.opacity = "1"
    editC.style.visibility = "visible"
    edit.classList.toggle("edit-close")
}
async function closeEdit () {
    const edit = document.getElementById("edit");
    const editC = document.getElementById("edit__container");
    edit.classList.toggle("edit-close")
    setTimeout(() => {
        editC.style.opacity = "0"
        editC.style.visibility = "hidden"
    }, 600)
}
async function addNewEmployee () {
    const addC = document.getElementById("add__container");
    const addForm = document.getElementById("add_form")
    const formDataAdd = new FormData(addForm)
    const employeeId = 2;
    const country = "col"


    const response = await SsipResource.createUser({
        name: formDataAdd.get('name'),
        last_name: formDataAdd.get('last_name'),
        country: country,
        department: formDataAdd.get('department'),
        work_position: formDataAdd.get('work_position'),
        username: `${formDataAdd.get('name')}.${formDataAdd.get('last_name')}`,
        password: formDataAdd.get('pass'),
        email: formDataAdd.get('email'),
        role_id: employeeId
    })

    console.log(JSON.stringify(response))

    setTimeout(() => {
        addC.style.opacity = "0"
        addC.style.visibility = "hidden"
    }, 600)
}

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

async function deleteUser () {
    const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1];
    const response = await SsipResource.deleteUserById(id)
    console.log(response)
    window.history.back()

}

async function editEmployee () {
    const editC = document.getElementById("edit__container");
    const editForm = document.getElementById("edit_form")
    const formDataEdit = new FormData(editForm)
    const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1];

    const response = await SsipResource.updateUser(id, {
        name: formDataEdit.get('name'),
        last_name: formDataEdit.get('last_name'),
        department: formDataEdit.get('department'),
        work_position: formDataEdit.get('work_position'),
        email: formDataEdit.get('email')
    })
    console.log(response)

    setTimeout(() => {
    editC.style.opacity = "0"
    editC.style.visibility = "hidden"
    }, 600)
}

async function logOut () {
    const response = await SsipResource.logoutUser()
    console.log(response)
}



export { LoginUser, TwoFactorAuth, Temporizador, openAdd, closeAdd, addNewEmployee, searchFilters, openEdit, closeEdit, deleteUser, editEmployee, logOut };
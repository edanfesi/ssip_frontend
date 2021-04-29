const SsipResource = require('../resources/SsipResource');

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
            location.href = `${window.location.origin}/#/2fa`;
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
            location.href = `${window.location.origin}/#/${response.data.id}`;
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
async function addNewEmployee () {
    const addC = document.getElementById("add__container");
    const dataAddNode = document.querySelectorAll("#add_form input")
    const dataAdd = [...dataAddNode]

    const response = await SsipResource.createUser({
        "name": dataAdd[0],
        "last_name": dataAdd[1],
        "department": dataAdd[2],
        "work_position": dataAdd[3],
        "username": undefined,
        "password": dataAdd[4],
        "email": dataAdd[5],
        "role_id": 2
    })
    console.log(response)

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



export { LoginUser, TwoFactorAuth, Temporizador, openAdd, closeAdd, addNewEmployee, searchFilters };
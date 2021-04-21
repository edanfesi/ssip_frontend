const inputUsername = document.getElementById("username")
const inputpassword = document.getElementById("password")
const btnSubmit = document.getElementById("submit")
const boxResponse = document.getElementById("response")

const autenticar = async function  () {
  const user = {
    username: inputUsername.value,
    password: inputpassword.value
  }
  if(inputUsername.value === "" || inputpassword.value === "") {
    alert("agrega los campos correspondientes")
  }else {
    const response = await fetch("http://ssip-backend.herokuapp.com/api/ssip/user/auth", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Headers": '*'
      }
    })
    if(response.status === 401) {
      alert("contraseña incorrecta")
    }
    if(response.status === 200) {
      const data = await response.json()
      if(data.role_id === 1) {
        location.href = "/pages/admin_dash/index.html"
      }else {
        location.href = "/pages/employee_dash/index.html"
      }
    console.log(response.body)
    }
  }
}

btnSubmit.addEventListener("click", autenticar)

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

        // print message
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
            console.log(response.data[0])
            location.href = `${window.location.origin}/#/${response.data[0].id}`;
        }
    }
}

export { LoginUser, TwoFactorAuth };
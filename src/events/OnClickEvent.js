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

        location.href = `${window.location.origin}/#/2fa`;
    }
}

async function TwoFactorAuth() {
    location.href = `${window.location.origin}/#/1`; 
}

export { LoginUser, TwoFactorAuth };
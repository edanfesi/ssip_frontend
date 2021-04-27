import Header from '../templates/Header';

import { toRender } from '../utils/RouterUtils';
import { LoginUser, TwoFactorAuth  } from '../events/OnClickEvent';

import Footer from "../templates/Footer"

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    const footer = document.getElementById('footer')

    header.innerHTML = await Header();
    content.innerHTML = await toRender();
    footer.innerHTML = await Footer();

    await addEventToElement();
};

async function addEventToElement() {
    const loginBtn = document.getElementById("submit") || {};
    loginBtn.onclick = LoginUser;

    const twoFactorAuthBtn = document.getElementById('two-factor-submit') || {};
    twoFactorAuthBtn.onclick = TwoFactorAuth;
}

export default router;
import Header from '../templates/Header';

import { toRender } from '../utils/RouterUtils';
import { LoginUser, TwoFactorAuth, Temporizador, openAdd, closeAdd, addNewEmployee, searchFilters  } from '../events/OnClickEvent';

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

    if(location.hash.slice(1).toLocaleLowerCase().split('/')[1] == 2 ) {
        let temporizador = new Temporizador('temporizador', 40, 0);
        temporizador.conteoSegundos();
    } else if (location.hash.slice(1).toLocaleLowerCase().split('/')[1] == 1) {
        searchFilters(".inputSearch", ".employee__info--name")

        const openAddFigure = document.getElementById('add-employee') || {};
        openAddFigure.onclick = openAdd;

        const closeAddFigure = document.getElementById("close-add") || {};
        closeAddFigure.onclick = closeAdd;

        const addEmployee = document.getElementById('btn-add') || {};
        addEmployee.onclick = addNewEmployee;
    }

}


export default router;



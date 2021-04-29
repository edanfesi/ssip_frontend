import Header from '../templates/Header';

import { toRender } from '../utils/RouterUtils';
import { LoginUser, TwoFactorAuth, Temporizador, openAdd, closeAdd, addNewEmployee, searchFilters, openEdit, closeEdit, deleteUser, editEmployee, logOut  } from '../events/OnClickEvent';

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

    if (location.hash.slice(1).toLocaleLowerCase().split('/')[1] == 1) {
        searchFilters(".inputSearch", ".employee__info--name")

        const openAddFigure = document.getElementById('add-employee') || {};
        openAddFigure.onclick = openAdd;

        const closeAddFigure = document.getElementById("close-add") || {};
        closeAddFigure.onclick = closeAdd;

        const addEmployee = document.getElementById('btn-add') || {};
        addEmployee.onclick = addNewEmployee;
    }

    if (location.hash.slice(1).toLocaleLowerCase().split('/')[1] > 1 & location.hash.slice(1).toLocaleLowerCase().split('/').includes('detail') == false) {
        let temporizador = new Temporizador('temporizador', 40, 0);
        temporizador.conteoSegundos();
    }



    const deleteEmployeeButton = document.getElementById('delete-button') || {}
    deleteEmployeeButton.onclick = deleteUser;

    const openEditdiv = document.getElementById('edit-div') || {};
    openEditdiv.onclick = openEdit;

    const closeEditdiv = document.getElementById("close-edit") || {};
    closeEditdiv.onclick = closeEdit;

    const confirmEdit = document.getElementById("btn-edit") || {};
    confirmEdit.onclick = editEmployee;


}



export default router;



import Header from '../templates/Header';

import { toRender } from '../utils/RouterUtils';

import Footer from "../templates/Footer"

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    const footer = document.getElementById('footer')

    header.innerHTML = await Header();
    content.innerHTML = await toRender();
    footer.innerHTML = await Footer();
};

export default router;
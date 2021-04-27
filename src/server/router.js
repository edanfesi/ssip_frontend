import Header from '../templates/Header';

import { toRender } from '../utils/RouterUtils';

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');

    header.innerHTML = await Header();
    content.innerHTML = await toRender();
};

export default router;
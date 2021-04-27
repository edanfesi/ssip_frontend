import router from './server/router';
import "./assets/styles/App.scss";

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

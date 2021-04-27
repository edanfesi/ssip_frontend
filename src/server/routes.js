import Home from '../pages/Home';
import UserDetail from '../pages/UserDetail';
import TwoFactor from '../pages/TwoFactor';

const routes = {
    '/': Home,
    '/:id': UserDetail,
    '/2fa': TwoFactor,
};

export default routes;
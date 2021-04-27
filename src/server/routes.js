import Home from '../pages/Home';
import UserDetail from '../pages/UserDetail';

const routes = {
    '/': Home,
    '/:id': UserDetail
};

export default routes;
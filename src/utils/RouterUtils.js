import routes from '../server/routes';
import Error404 from '../pages/Error404';

const getHash = () => {
    const hash = location.hash.slice(1).toLocaleLowerCase().split('/')
    if(hash[2]) {
        return `${hash[1]}/${hash[2]}`
    } else if(hash[1]) {
        return location.hash.slice(1).toLocaleLowerCase().split('/')[1];
    } else {
        return '/'
    }
}

const resolveRoute = (hash) => {
    console.log(hash)
    if (hash.length <= 3) {
        const route = hash === '/' ? hash : hash === "2fa" ? `/2fa` : "/:id";
        return route;
    } else if (hash.includes('/detail')) {
        return '/:id/detail'
    }

    return `/${hash}`;
}

async function toRender(){
    const hash = getHash();
    const route = resolveRoute(hash);

    const render = routes[route] || Error404;

    return render();
}

export { toRender };
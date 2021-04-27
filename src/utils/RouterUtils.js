import routes from '../server/routes';
import Error404 from '../pages/Error404';

const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1]
    || '/';

const resolveRoute = (hash) => {
    console.log(hash)
    if (hash.length <= 3) {
        const route = hash === '/' ? hash : hash === "2fa" ? `/2fa` : "/:id";
        return route; 
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
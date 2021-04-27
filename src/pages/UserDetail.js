import Error404 from './Error404';
import Admin from './Admin';
import Employee from './Employee';

const SsipResource = require('../resources/SsipResource');

const UserDetail = async () => {
    // Obtener la informacion del usuario.
    const userId = location.hash.slice(1).toLocaleLowerCase().split('/')[1];
    console.log(userId)
    if (!userId) {
        return Error404();
    }

    const response = await SsipResource.getUserById(parseInt(userId));
    const userData = response.data;
    if (!userData) {
        return Error404();
    }

    const userDetail = userData[0];
    let view = "";
    console.log(userDetail)
    if (userDetail.role_id === 1) {
        view = Admin(userDetail)
    } else {
        view = Employee(userDetail);
    }

    return view;
}

export default UserDetail;
const SsipResource = require('../resources/SsipResource');

const UserDetail = async () => {
    const data = await SsipResource.getAllUsers();
    console.log('data', data)
    return `${JSON.stringify(data)}`;
}

export default UserDetail;
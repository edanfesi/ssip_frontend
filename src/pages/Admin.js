const SsipResource = require('../resources/SsipResource');

const Admin = async (userData = {}) => {
  console.log("Soy admin", JSON.stringify(userData));

  const responseUserList = await SsipResource.getAllUsers()
  const userList = responseUserList.data.filter((user) => user.id != userData.id);
  console.log(userList);

  const view = `
  <div class="main-admin">
    <div class="header__user">
      <figure>
        <img src="https://i.ibb.co/mC1fY21/user-icon.png" alt="Employee picture">
      </figure>
      <div class="header__user__body">
        <h2>${userData.name} ${userData.last_name}</h2>
        <p>${userData.work_position}</p>
      </div>
      <div class="header__user--icons">
        <figure id="add-employee">
          <img src="https://i.ibb.co/vwyz2dZ/add-employee-icon.png" alt="add employee icon">
        </figure>
      </div>
    </div>
    <section class="search">
      <p class="search--title">Users</p>
      <form action="">
        <input type="search" placeholder="Search..." id="inputSearch" class="inputSearch">
      </form>
    </section>
    <section class="employees" id="employee_list">
      ${userList.map(user => `
        <div class="employee--card">
          <div class="employee__left">
            <figure>
              <img src="https://i.ibb.co/mC1fY21/user-icon.png" alt="Employee picture">
              <div class="is-active"></div>
            </figure>
            <div class="employee__info">
              <p class="employee__info--name">${user.name} ${user.last_name}</p>
              <p class="employee__info--position">${user.work_position}</p>
            </div>
          </div>
          <a href="/#/${user.id}" class="view" id="view-information">View</a>
        </div>
      `).join('')}
    </section>
    <section class="add__container" id="add__container">
      <div class="add add-close" id="add">
        <p class="close" id="close-add">X</p>
        <h2>Add new employee</h2>
        <form class="add_form" id="add_form">
          <div>
            <label for="name">Name</label>
            <input type="text" class="name_input" id="name" placeholder="Name..." name="name">
          </div>
    
          <div>
            <label for="last_name">Last name</label>
            <input type="text" class="name_input" id="last_name" placeholder="Last name..." name="last_name">
          </div>
    
          <div>
            <label for="department">Department</label>
            <input type="text" class="name_input" id="department" placeholder="Department..." name="department">
          </div>
    
          <div>
            <label for="position">Position</label>
            <input type="text" class="name_input" id="position" placeholder="Position..." name="work_position">
          </div>
    
          <div>
            <label for="password">Password</label>
            <input type="text" class="name_input" id="password" placeholder="Password..." name="pass">
          </div>

          <div>
            <label for="email">Email</label>
            <input type="text" class="email_input" id="email" placeholder="Email..." name="email">
          </div>
          <button type="submit" class="btn-add" id="btn-add">Add</button>
        </form>
      </div>
    </section>
  </div>
  `
  return view;
};

export default Admin;
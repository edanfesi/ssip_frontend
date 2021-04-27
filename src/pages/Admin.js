const Admin = () => {
  const view = `
  <div class="main-admin">
    <div class="header__user">
      <figure>
        <img src="https://i.ibb.co/mC1fY21/user-icon.png" alt="Employee picture">
      </figure>
      <div class="header__user__body">
        <h2>admin</h2>
        <p></p>
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
            <label for="entry_date">Entry date</label>
            <input type="date" class="name_input" id="Entry_date" name="created_at">
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
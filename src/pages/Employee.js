const Employee = (userData = {}) => {
  console.log("Soy un employee", JSON.stringify(userData)); 
  const view = `
  <div class="main-employee">
    <section class="header__user">
      <figure>
        <img src="https://i.ibb.co/mC1fY21/user-icon.png" class="header__user--profile" alt="Employee picture">
      </figure>
      <div class="header__user__body">
        <h2>Name: ${userData.name} ${userData.last_name}</h2>
        <p>Work position: ${userData.work_position}</p>
        <p>Country: ${userData.country}</p>
        <p>Department: ${userData.department}</p>
        <p>Created at: ${userData.created_at}</p>
      </div>
    </section>
    <section class="logged-in">
      <img src="https://i.ibb.co/7pnXZyn/success.png" alt="success">
      <p class="logged-in--title">You are logged in</p>
      <p class="logged-in--text">time remaining: </p>
      <p class="logged-in--time" id="temporizador">40</p>
    </section>
  </div>`
  
  return view;
};

export default Employee;
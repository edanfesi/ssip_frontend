const Employee = () => {
  const view = `
  <div class="main-employee">
    <section class="header__user">
      <figure>
        <img src="https://i.ibb.co/mC1fY21/user-icon.png" class="header__user--profile" alt="Employee picture">
      </figure>
      <div class="header__user__body">
        <h2>Andrea Rios</h2>
        <p>UI/UX</p>
      </div>
    </section>
    <section class="logged-in">
      <img src="https://i.ibb.co/7pnXZyn/success.png" alt="success">
      <p class="logged-in--title">You are logged in</p>
      <p class="logged-in--text">time remaining: </p>
      <p class="logged-in--time" id="temporizador">40</p>
    </section>
  </div>
  `
  return view;
};

export default Employee;
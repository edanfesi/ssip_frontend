const SsipResource = require('../resources/SsipResource');

const Home = () => {
  const view = `
    <div class="main-login">
      <section class="login">
        <h1 class="login--title">Welcome</h1>
        <p class="login--text">It's good to see you here again</p>
        <form action="" class="login-form">
          <label for="username" class="login__card">
            <p>Username</p>
            <input type="text" id="username" placeholder="Username" required>
          </label>
          <label for="password" class="login__card">
            <p>Password</p>
            <input type="password" id="password" placeholder="Password" required>
          </label>
          <label for="forgot-pass" class="login__remember">
            <input type="checkbox">
            <span>Remember this device</span>
          </label>
        </form>
        <button class="login--submit" id="submit">Log in</button>
      </section>
    </div>
  `;
  return view;
}



export default Home;
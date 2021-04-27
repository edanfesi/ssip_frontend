const TwoFactor = () => {
  const view = `
  <div class="main-two">
    <div class="two-factor">
      <p class="two-factor--title">Verify your account</p>
      <div class="two-factor__input">
        <p>You've received a email with your code.</p>
        <img src="https://i.ibb.co/JCwRxsF/two-Factor-Draw.png" alt="Two factor image" class="two-factor__input--image">
        <form action="" class="phone-form" id="phone_form">
          <input type="text" maxlength="1" title="Agrega el codigo" required id="input-token-1">
          <input type="text" maxlength="1" title="Agrega el codigo" required id="input-token-2">
          <input type="text" maxlength="1" title="Agrega el codigo" required id="input-token-3">
          <input type="text" maxlength="1" title="Agrega el codigo" required id="input-token-4">
        </form>
      </div>
      <input type="button" value="Verify" form="phone_form" id="two-factor-submit">
    </div>
  </div>
  `
  return view;
};

export default TwoFactor;
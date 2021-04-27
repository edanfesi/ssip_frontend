const User = () => {
  const view = `
      <section class="information__container" id="information__container">
        <div class="information information-close" id="information">
          <p class="close" id="close-information">X</p>
          <div class="information__header">
            <figure>
              <img src="https://i.ibb.co/mC1fY21/user-icon.png" alt="Employee picture">
            </figure>
            <div class="information__header__text">
              <h2>Andrea Rios</h2>
              <p>UI/UX</p>
            </div>
          </div>
          <div class="information__body">
            <p>information</p>
            <div class="body__data">
              <p class="body__data--title">ID:</p>
              <p class="body__data--text"></p>
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Fullname:</p>
              <p class="body__data--text"></p>
              <img src="https://i.ibb.co/JFcb3ND/edit-icon.png" alt="Edit icon" class="edit-icon">
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Department:</p>
              <p class="body__data--text"></p>
              <img src="https://i.ibb.co/JFcb3ND/edit-icon.png" alt="Edit icon" class="edit-icon">
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Position:</p>
              <p class="body__data--text"></p>
              <img src="https://i.ibb.co/JFcb3ND/edit-icon.png" alt="Edit icon" class="edit-icon">
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Password:</p>
              <p class="body__data--text"></p>
              <img src="https://i.ibb.co/JFcb3ND/edit-icon.png" alt="Edit icon" class="edit-icon">
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Entry date:</p>
              <p class="body__data--text"></p>
              <img src="https://i.ibb.co/JFcb3ND/edit-icon.png" alt="Edit icon" class="edit-icon">
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Modification date:</p>
              <p class="body__data--text"></p>
              <img src="https://i.ibb.co/JFcb3ND/edit-icon.png" alt="Edit icon" class="edit-icon">
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Status:</p>
              <p class="body__data--text"></p>
              <img src="https://i.ibb.co/JFcb3ND/edit-icon.png" alt="Edit icon" class="edit-icon">
            </div>
          </div>
        </div>
      </section>
  `
  return view;
};

export default User;
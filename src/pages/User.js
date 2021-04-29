import SsipResource from "../resources/SsipResource"
const User = async () => {
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

  const view = `
      <section class="information__container" id="information__container">
        <div class="information information-close" id="information">
        <figure class="edit_container" id="edit-div"><img src="https://i.ibb.co/JFcb3ND/edit-icon.png" alt="Edit icon" class="edit-icon" ></figure>
          <div class="information__header">
            <figure>
              <img src="https://i.ibb.co/mC1fY21/user-icon.png" alt="Employee picture">
            </figure>
            <div class="information__header__text">
              <h2>${userData.name} ${userData.last_name} </h2>
              <p>${userData.work_position}</p>
            </div>
          </div>
          <div class="information__body">
            <p>information</p>
            <div class="body__data">
              <p class="body__data--title">ID:</p>
              <p class="body__data--text">${userId}</p>
            </div>

            <div class="body__data">
              <p class="body__data--title">Fullname:</p>
              <p class="body__data--text">${userData.name} ${userData.last_name} </p>
            </div>

            <div class="body__data">
              <p class="body__data--title">Department:</p>
              <p class="body__data--text">${userData.department}</p>
            </div>

            <div class="body__data">
              <p class="body__data--title">Position:</p>
              <p class="body__data--text">${userData.work_position}</p>
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Password:</p>
              <p class="body__data--text">${userData.password}</p>
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Entry date:</p>
              <p class="body__data--text">${userData.created_at}</p>
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Modification date:</p>
              <p class="body__data--text">${userData.updated_at}</p>
            </div>
      
            <div class="body__data">
              <p class="body__data--title">Status:</p>
              <p class="body__data--text"></p>
            </div>
          </div>
          <button class="delete-button" id="delete-button">Delete</button>
        </div>
      </section>


      <section class="edit__container" id="edit__container">
        <div class="edit edit-close" id="edit">
          <p class="close" id="close-edit">X</p>
          <h2>Edit employee</h2>
          <form class="edit_form" id="edit_form">
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
              <label for="email">Email</label>
              <input type="text" class="email_input" id="email" placeholder="Email..." name="email">
            </div>
          </form>
          <button class="btn-edit" id="btn-edit">Add</button>
        </div>
      </section>
  `
  return view;
};

export default User;
import React from "react";
import Header from "../Header/Header.jsx";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <div>
      <Header />
      <div className="content">
        <main className="profile">
          <h1 className="profile__greeting">Привет, {name}!</h1>
          <div className="profile__container">
            <p className="profile__name">Имя</p>
            <p className="profile__value">{name}</p>
          </div>
          <div className="profile__container profile__container_type_email">
            <p className="profile__name">E-mail</p>
            <p className="profile__value">{email}</p>
          </div>
          <div className="profile__button-container">
            <button
              className="profile__edit"
              type="button"
              value="edit"
              onClick={props.onPopupOpen}
            >
              Редактировать
            </button>
            <button
              className="profile__log-out"
              type="button"
              value="logOt"
              onClick={props.onLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
          <EditProfilePopup
            isOpen={props.isPopupOpen}
            onUpdateUser={props.onUpdateUser}
            isSussess={props.isSussess}
            isFail={props.isFail}
            toolText={props.toolText}
            onClose={props.onPopupClose}
          />
        </main>
      </div>
    </div>
  );
}

export default Profile;

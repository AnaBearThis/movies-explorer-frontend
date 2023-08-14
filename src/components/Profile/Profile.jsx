import React from "react";
import Header from "../Header/Header.jsx";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile(props) {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
      }, [currentUser]
    ); 

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    };

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
    };


    return (
        <div>
            <Header />
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
                    <button className="profile__edit" type="button" value='edit' onClick={handleEditProfileClick}>Редактировать</button>
                    <button className="profile__log-out" type="button" value='logOt' onClick={props.onLogout}>Выйти из аккаунта</button>
                </div>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={props.onUpdateUser} isSussess={props.isSussess} isFail={props.isFail} toolTip={props.toolTip} onClose={closeAllPopups} />
            </main>
        </div>
    )
}

export default Profile;
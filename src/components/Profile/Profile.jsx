import React from "react";
import Header from "../Header/Header.jsx";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup.jsx";

function Profile() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    };

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
    };

    function handleLogOut() {
        window.location.href = '/'
    }

    return (
        <div>
            <Header />
            <main className="profile">
                <h1 className="profile__greeting">Привет, Настасья!</h1>
                <div className="profile__container">
                    <p className="profile__name">Имя</p>
                    <p className="profile__value">Настасья</p>
                </div>
                <div className="profile__container profile__container_type_email">
                    <p className="profile__name">E-mail</p>
                    <p className="profile__value">pochta@yandex.ru</p>
                </div>
                <div className="profile__button-container">
                    <button className="profile__edit" type="button" value='edit' onClick={handleEditProfileClick}>Редактировать</button>
                    <button className="profile__log-out" type="button" value='logOt' onClick={handleLogOut}>Выйти из аккаунта</button>
                </div>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            </main>
        </div>
    )
}

export default Profile;
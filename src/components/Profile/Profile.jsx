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

    return (
        <div>
            <Header />
            <section className="profile">
                <p className="profile__greeting">Привет, Настасья!</p>
                <div className="profile__container">
                    <p className="profile__name">Имя</p>
                    <p className="profile__value">Настасья</p>
                </div>
                <div className="profile__container profile__container_type_email">
                    <p className="profile__name">E-mail</p>
                    <p className="profile__value">pochta@yandex.ru</p>
                </div>
                <div className="profile__buttonContainer">
                    <button className="profile__edit" type="button" value='edit' onClick={handleEditProfileClick}>Редактировать</button>
                    <button className="profile__logOut" type="button" value='logOt'>Выйти из аккаунта</button>
                </div>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            </section>
        </div>
    )
}

export default Profile;
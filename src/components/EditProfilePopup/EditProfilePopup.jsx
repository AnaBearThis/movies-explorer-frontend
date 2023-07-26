function EditProfilePopup(props) {
    return (
        <div className={`edit-profile-popup ${props.isOpen && 'edit-profile-popup_opened'}`}>
            <div className="edit-profile-popup__container">
                <p className="profile__greeting">Привет, Настасья!</p>
                <form className="profile__formEdit">
                    <div className="profile__container">
                        <label className="profile__name" htmlFor="input-name">Имя</label>
                        <input
                            className="profile__input-edit"
                            id="input-name"
                            type="text"
                            name="name"
                            placeholder="Настасья"
                            required
                            minLength="2"
                            maxLength="40"/>
                    </div>
                    <div className="profile__container profile__container_type_email">
                        <label className="profile__name" htmlFor="input-email">E-mail</label>
                        <input
                            className="profile__input-edit"
                            id="input-email"
                            type="email"
                            name="email"
                            placeholder="pochta@yandex.ru"
                            required/>
                    </div>
                        <button className="profile__button-submit" type="submit" value='save'>Сохранить</button>
                </form>
                <button className="edit-profile-popup__buttonClose" type="button" aria-label="закрыть" onClick={props.onClose} />
            </div>    
        </div>
    )
}

export default EditProfilePopup;
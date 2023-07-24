function EditProfilePopup(props) {
    return (
        <div className={`editProfilePopup ${props.isOpen && 'editProfilePopup_opened'}`}>
            <div className="editProfilePopup__container">
                <p className="profile__greeting">Привет, Настасья!</p>
                <form className="profile__formEdit">
                    <div className="profile__container">
                        <p className="profile__name">Имя</p>
                        <input
                            className="profile__inputEdit"
                            id="input-name"
                            type="text"
                            name="name"
                            placeholder="Настасья"
                            required
                            minLength="2"
                            maxLength="40"/>
                    </div>
                    <div className="profile__container profile__container_type_email">
                        <p className="profile__name">E-mail</p>
                        <input
                            className="profile__inputEdit"
                            id="input-email"
                            type="email"
                            name="email"
                            placeholder="pochta@yandex.ru"
                            required/>
                    </div>
                        <button className="profile__buttonSubmit" type="submit" value='save'>Сохранить</button>
                </form>
                <button className="editProfilePopup__buttonClose" type="button" aria-label="закрыть" onClick={props.onClose} />
            </div>    
        </div>
    )
}

export default EditProfilePopup;
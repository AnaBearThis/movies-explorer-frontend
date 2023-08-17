import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    setValues({
      "input-name": currentUser.name,
      "input-email": currentUser.email,
    });
  }, [currentUser]);

  React.useEffect(() => {
    const noValueChanged =
      values["input-name"] === currentUser.name &&
      values["input-email"] === currentUser.email;
    if (noValueChanged === true) {
      setIsValid(false);
    }
  }, [values, currentUser]);

  const handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setValues({ ...values, [id]: value });
    setErrors({ ...errors, [`${id}-error`]: target.validationMessage });
    const inputName = document.getElementById("input-name");
    const inputEmail = document.getElementById("input-email");

    if (inputName.validity.patternMismatch === true) {
      console.log(inputName.validity);
      inputName.setCustomValidity(
        "Поле Имя должно содержать только латиницу, кириллицу, пробел или дефис."
      );
    } else if (inputName.validity.patternMismatch === false) {
      inputName.setCustomValidity("");
      setErrors({ ...errors, [`${id}-error`]: target.validationMessage });
    }

    if (inputEmail.validity.patternMismatch === true) {
      console.log(inputEmail.validity);
      setErrors({
        ...errors,
        [`${id}-error`]:
          "Поле E-mail должно содержать действительный e-mail адрес.",
      });
    } else if (inputEmail.validity.patternMismatch === false) {
      inputEmail.setCustomValidity("");
      setErrors({ ...errors, [`${id}-error`]: target.validationMessage });
    }
    console.log(errors);
    setIsValid(target.closest("form").checkValidity());
  };

  console.log(values["input-name"]);

  React.useEffect(() => {
    const btnSubmit = document.querySelector(".profile__button-submit");
    if (isValid === false) {
      btnSubmit.setAttribute("disabled", true);
    } else {
      btnSubmit.removeAttribute("disabled");
    }
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: values["input-name"],
      email: values["input-email"],
    });
  }

  return (
    <div
      className={`edit-profile-popup ${
        props.isOpen && "edit-profile-popup_opened"
      }`}
    >
      <div className="edit-profile-popup__container">
        <p className="profile__greeting">Привет, {currentUser.name}!</p>
        <form className="profile__formEdit" onSubmit={isValid && handleSubmit}>
          <div className="profile__container">
            <label className="profile__name" htmlFor="input-name">
              Имя
            </label>
            <input
              className="profile__input-edit"
              onChange={handleChange}
              pattern="[a-zA-Zа-яА-ЯёЁ\- ]*"
              title="Поле Имя должно содержать только латиницу, кириллицу, пробел или дефис."
              id="input-name"
              type="text"
              name="name"
              placeholder="имя"
              value={values["input-name"]}
              required
              minLength="2"
              maxLength="40"
            />
          </div>
          <span
            id="input-name-error"
            name="name"
            className={`error ${!isValid && "error_type_visible"}`}
          >
            {errors ? errors["input-name-error"] : ""}
          </span>
          <div className="profile__container profile__container_type_email">
            <label className="profile__name" htmlFor="input-email">
              E-mail
            </label>
            <input
              className="profile__input-edit"
              onChange={handleChange}
              pattern="^\S+@\S+\.\S+$"
              title="Поле E-mail должно содержать действительный e-mail адрес."
              id="input-email"
              type="email"
              name="email"
              placeholder="e-mail"
              value={values["input-email"]}
              required
            />
          </div>
          <span
            id="input-email-error"
            name="email"
            className={`error ${!isValid && "error_type_visible"}`}
          >
            {errors ? errors["input-email-error"] : ""}
          </span>
          <p
            className={`info-tool-tip ${
              (props.isSuccess || props.isFail) && "info-tool-tip_type_visible"
            }`}
          >
            {props.toolText}
          </p>
          <button
            className={`profile__button-submit ${
              !isValid && "profile__button-submit_type_inactive"
            }`}
            type="submit"
            value="save"
          >
            Сохранить
          </button>
        </form>
        <button
          className="edit-profile-popup__buttonClose"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default EditProfilePopup;

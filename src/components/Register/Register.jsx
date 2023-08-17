import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register(props) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const btnSubmit = document.querySelector(".sign__button-submit");
    console.log(btnSubmit);
    if (isValid === false) {
      btnSubmit.setAttribute("disabled", true);
    } else {
      btnSubmit.removeAttribute("disabled");
    }
  }, [isValid]);

  if (props.isLoggedIn === true) {
    navigate("/movies", { replace: true });
  }

  console.log(props.isSuccess);
  console.log(props.isFail);

  const handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setValues({ ...values, [id]: value });
    setErrors({ ...errors, [`${id}-error`]: target.validationMessage });
    const inputName = document.getElementById("input-name");
    if (inputName.validity.patternMismatch === true) {
      console.log(inputName.validity);
      inputName.setCustomValidity(
        "Поле Имя должно содержать только латиницу, кириллицу, пробел или дефис."
      );
    } else if (inputName.validity.patternMismatch === false) {
      console.log(inputName.validity);
      inputName.setCustomValidity("");
      setErrors({ ...errors, [`${id}-error`]: target.validationMessage });
    }
    const inputEmail = document.getElementById("input-email");
    if (inputEmail.validity.patternMismatch === true) {
      console.log(inputName.validity);
      inputEmail.setCustomValidity(
        "Поле Email должно содержать действительный e-mail адрес."
      );
    } else if (inputEmail.validity.patternMismatch === false) {
      console.log(inputName.validity);
      inputEmail.setCustomValidity("");
      setErrors({ ...errors, [`${id}-error`]: target.validationMessage });
    }
    console.log(errors);
    setIsValid(target.closest("form").checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = values["input-name"];
    const email = values["input-email"];
    const password = values["input-password"];
    props.onRegister(name, email, password);
  };

  return (
    <main className="register">
      <Link className="link-bar__link" to="/">
        <img className="logo" src={logo} alt="логотип" />
      </Link>
      <h1 className="sign__heading">Добро пожаловать!</h1>
      <form
        className="sign__form"
        onSubmit={isValid && handleSubmit}
        onChange={handleChange}
        values={values}
        errors={errors}
      >
        <div className="sign__container">
          <label className="sign__name" htmlFor="input-name">
            Имя
          </label>
          <input
            className="sign__input"
            id="input-name"
            type="text"
            name="name"
            pattern="[a-zA-Zа-яА-ЯёЁ\- ]*"
            title="Поле Имя должно содержать только латиницу, кириллицу, пробел или дефис."
            placeholder="Настасья"
            required
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
        </div>
        <span
          id="input-name-error"
          name="name"
          className={`error ${!isValid && "error_type_visible"}`}
        >
          {errors ? errors["input-name-error"] : ""}
        </span>
        <div className="sign__container">
          <label className="sign__name" htmlFor="input-email">
            E-mail
          </label>
          <input
            className="sign__input"
            id="input-email"
            type="email"
            name="email"
            pattern="^\S+@\S+\.\S+$"
            title="Поле E-mail должно содержать действительный e-mail адрес."
            placeholder="bulochk@yandex.ru"
            required
            onChange={handleChange}
          />
        </div>
        <span
          id="input-email-error"
          name="email"
          className={`error ${!isValid && "error_type_visible"}`}
        >
          {errors ? errors["input-email-error"] : ""}
        </span>
        <div className="sign__container">
          <label className="sign__name" htmlFor="input-password">
            Пароль
          </label>
          <input
            className="sign__input sign__input_type_error"
            id="input-password"
            type="password"
            name="password"
            placeholder="12345678"
            minLength="6"
            maxLength="40"
            required
            onChange={handleChange}
          />
        </div>
        <span
          id="input-password-error"
          name="password"
          className={`error ${!isValid && "error_type_visible"}`}
        >
          {errors ? errors["input-password-error"] : ""}
        </span>
        <p
          className={`info-tool-tip ${
            (props.isSuccess || props.isFail) && "info-tool-tip_type_visible"
          }`}
        >
          {props.toolText}
        </p>
        <button
          className={`sign__button-submit ${
            !isValid && "sign__button-submit_type_inactive"
          }`}
          type="submit"
          value="save"
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="sign__footer">
        <p className="sign__text">Уже зарегистрированы?</p>
        <Link className="sign__link" to="/signin">
          Войти
        </Link>
      </div>
    </main>
  );
}

export default Register;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailValidator from "email-validator";
import logo from "../../images/logo.svg";

function Login(props) {
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

  const handleChange = (e) => {
    const target = e.target;
    const id = target.id;
    const value = target.value;
    console.log(EmailValidator.validate(value));
    setValues({ ...values, [id]: value });
    setErrors({ ...errors, [`${id}-error`]: target.validationMessage });
    const inputEmail = document.getElementById("input-email");
    if (EmailValidator.validate(value) === false) {
      inputEmail.setCustomValidity(
        "Поле Email должно содержать действительный e-mail адрес."
      );
    } else if (EmailValidator.validate(value) === true) {
      inputEmail.setCustomValidity("");
      setErrors({ ...errors, [`${id}-error`]: target.validationMessage });
    }
    console.log(errors);
    setIsValid(target.closest("form").checkValidity());
  };
  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = values["input-email"];
    const password = values["input-password"];
    props.onLogin(email, password);
    setValues({ email: "", password: "" });
  };

  return (
    <main className="login">
      <Link className="link-bar__link" to="/">
        <img className="logo" src={logo} alt="логотип" />
      </Link>
      <h1 className="sign__heading">Рады видеть!</h1>
      <form
        className="sign__form"
        onSubmit={isValid && handleSubmit}
        onChange={handleChange}
        values={values}
        errors={errors}
      >
        <div className="sign__container">
          <label className="sign__name">E-mail</label>
          <input
            className="sign__input"
            id="input-email"
            type="email"
            name="email"
            placeholder="bulochk@yandex.ru"
            required
            onChange={handleChange}
          />
        </div>
        <span
          id="input-email-error"
          name="name"
          className={`error ${!isValid && "error_type_visible"}`}
        >
          {errors ? errors["input-email-error"] : ""}
        </span>
        <div className="sign__container">
          <label className="sign__name">Пароль</label>
          <input
            className="sign__input"
            id="input-password"
            type="password"
            name="password"
            placeholder="12345678"
            required
            minLength="6"
            maxLength="40"
            onChange={handleChange}
          />
        </div>
        <span
          id="input-password-error"
          name="name"
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
          className={`sign__button-submit sign__button-submit_type_login ${
            !isValid && "sign__button-submit_type_inactive"
          }`}
          type="submit"
          value="save"
        >
          Войти
        </button>
      </form>
      <div className="sign__footer">
        <p className="sign__text">Ещё не зарегистрированы?</p>
        <Link className="sign__link" to="/signup">
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default Login;

import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Register() {
    return (
        <div className="register">
            <Link className='linkBar__link' to='/'><img className='logo' src={logo} alt='логотип' /></Link>
            <h2 className='sign__heading'>Добро пожаловать!</h2>
            <form className="sign__form">
                    <div className="sign__container">
                        <p className="sign__name">Имя</p>
                        <input
                            className="sign__input"
                            id="input-name"
                            type="text"
                            name="name"
                            required
                            minLength="2"
                            maxLength="40"/>
                    </div>
                    <span id="input-name-error" className="error">Что-то пошло не так...</span>
                    <div className="sign__container">
                        <p className="sign__name">E-mail</p>
                        <input
                            className="sign__input"
                            id="input-email"
                            type="email"
                            name="email"
                            required/>
                    </div>
                    <span id="input-email-error" className="error">Что-то пошло не так...</span>
                    <div className="sign__container">
                        <p className="sign__name">Пароль</p>
                        <input
                            className="sign__input sign__input_type_error"
                            id="input-password"
                            type="password"
                            name="password"
                            required/>
                    </div>
                    <span id="input-password-error" className="error error_type_visible">Что-то пошло не так...</span>
                    <button className="sign__buttonSubmit" type="submit" value='save'>Зарегистрироваться</button>
                </form>
                <div className='sign__footer'>
                    <p className='sign__text'>Уже зарегистрированы?</p>
                    <Link className='sign__link' to='/signin'>Войти</Link>
                </div>
        </div>
    )
}

export default Register;
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
    return (
        <main className="register">
            <Link className='link-bar__link' to='/'><img className='logo' src={logo} alt='логотип' /></Link>
            <h1 className='sign__heading'>Добро пожаловать!</h1>
            <form className="sign__form">
                    <div className="sign__container">
                        <label className="sign__name" htmlFor='input-name'>Имя</label>
                        <input
                            className="sign__input"
                            id="input-name"
                            type="text"
                            name="name"
                            placeholder='Настасья'
                            required
                            minLength="2"
                            maxLength="40"/>
                    </div>
                    <span id="input-name-error" className="error">Что-то пошло не так...</span>
                    <div className="sign__container">
                        <label className="sign__name" htmlFor='input-email'>E-mail</label>
                        <input
                            className="sign__input"
                            id="input-email"
                            type="email"
                            name="email"
                            placeholder='bulochk@yandex.ru'
                            required/>
                    </div>
                    <span id="input-email-error" className="error">Что-то пошло не так...</span>
                    <div className="sign__container">
                        <label className="sign__name" htmlFor='input-password'>Пароль</label>
                        <input
                            className="sign__input sign__input_type_error"
                            id="input-password"
                            type="password"
                            name="password"
                            placeholder="12345678"
                            minLength="6"
                            maxLength="40"
                            required/>
                    </div>
                    <span id="input-password-error" className="error error_type_visible">Что-то пошло не так...</span>
                    <button className="sign__buttonSubmit" type="submit" value='save'>Зарегистрироваться</button>
                </form>
                <div className='sign__footer'>
                    <p className='sign__text'>Уже зарегистрированы?</p>
                    <Link className='sign__link' to='/signin'>Войти</Link>
                </div>
        </main>
    )
}

export default Register;
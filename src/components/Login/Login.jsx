import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
    return (
        <main className="login">
            <Link className='link-bar__link' to='/'><img className='logo' src={logo} alt='логотип' /></Link>
            <h1 className='sign__heading'>Рады видеть!</h1>
            <form className="sign__form">
                <div className="sign__container">
                    <label className="sign__name">E-mail</label>
                    <input
                        className="sign__input"
                        id="input-email"
                        type="email"
                        name="email"
                        placeholder="bulochk@yandex.ru"
                        required/>
                </div>
                <span id="input-email-error" className="error">Что-то пошло не так...</span>
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
                        maxLength="40"/>
                </div>
                <span id="input-password-error" className="error"></span>
                <button className="sign__buttonSubmit sign__buttonSubmit_type_login" type="submit" value='save'>Войти</button>
            </form>
            <div className='sign__footer'>
                <p className='sign__text'>Ещё не зарегистрированы?</p>
                <Link className='sign__link' to='/signup'>Регистрация</Link>
            </div>
                
        </main>
    )
}

export default Login;
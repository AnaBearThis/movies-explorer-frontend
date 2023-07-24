import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Login() {
    return (
        <div className="login">
            <Link className='linkBar__link' to='/'><img className='logo' src={logo} alt='логотип' /></Link>
            <h2 className='sign__heading'>Рады видеть!</h2>
            <form className="sign__form">
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
                        className="sign__input"
                        id="input-password"
                        type="password"
                        name="password"
                        required
                        minLength="4"/>
                </div>
                <span id="input-password-error" className="error"></span>
                <button className="sign__buttonSubmit sign__buttonSubmit_type_login" type="submit" value='save'>Войти</button>
            </form>
            <div className='sign__footer'>
                <p className='sign__text'>Ещё не зарегистрированы?</p>
                <Link className='sign__link' to='/signup'>Регистрация</Link>
            </div>
                
        </div>
    )
}

export default Login;
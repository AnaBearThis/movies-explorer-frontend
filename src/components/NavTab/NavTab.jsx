import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function NavTab() {
    return (
        <section className='nav-tab'>
            <img className='logo' src={logo} alt='логотип' />
            <nav className='link-bar'>
                <ul className='link-bar__list'>
                    <li><Link className='link-bar__link link-bar__link_type_transparent' to='/signup'>Регистрация</Link></li>
                    <li><Link className='link-bar__link link-bar__link_type_colored' to='/signin'>Войти</Link></li>
                </ul>
            </nav>
        </section>
    )
}

export default NavTab;
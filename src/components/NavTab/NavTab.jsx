import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function NavTab() {
    return (
        <div className='navTab'>
            <img className='logo' src={logo} alt='логотип' />
            <div className='linkBar'>
                <Link className='linkBar__link linkBar__link_type_transparent' to='/signup'>Регистрация</Link>
                <Link className='linkBar__link linkBar__link_type_colored' to='/signin'>Войти</Link>
            </div>
        </div>
    )
}

export default NavTab;
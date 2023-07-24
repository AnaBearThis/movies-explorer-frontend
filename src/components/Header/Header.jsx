import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import profileIcon from '../../images/profileicon.png';
import Navigation from '../Navigation/Navigation.jsx';

function Header() {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    function handleMenuClick() {
        setMenuOpen(true);
    };

    function closeMenu() {
        setMenuOpen(false);
    };

    return (
        <div className='header'>
            <div className='header__container'>
                <Link className='linkBar__link' to='/'><img className='logo' src={logo} alt='логотип' /></Link>
                <div className='linkBar linkBar_type_header'>
                    <Link className='linkBar__link linkBar__link_type_inactive' to='/movies'>Фильмы</Link>
                    <Link className='linkBar__link' to='/saved-movies'>Сохраненные фильмы</Link>
                </div>
            </div>  
            <Link className='linkBar__link linkBar__link_type_profile' to='/profile'><img className='linkBar__icon' src={profileIcon} alt='иконка для перехода в профиль'></img></Link>
            <button className='header__nav' type='button' onClick={handleMenuClick}></button>
            <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
        </div>
    )
}

export default Header;
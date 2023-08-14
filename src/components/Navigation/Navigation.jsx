import { Link } from "react-router-dom";
import profileIcon from "../../images/profileicon.png"

function Navigation(props) {
    return (
        <div className={`navigation ${props.isOpen && 'navigation_open'}`}>
            <div className="navigation__container">
                <button className="navigation__buttonClose" type="button" onClick={props.onClose}></button>
                <div className="navigation__link-container">
                    <Link className={`navigation__link ${window.location.href === 'http://localhost:3001/' && 'navigation__link_type_active'}`} to='/'>Главная</Link>
                    <Link className={`navigation__link ${props.isOnMoviesPage && 'navigation__link_type_active'}`} to='/movies'>Фильмы</Link>
                    <Link className={`navigation__link ${props.isOnSavedMoviesPage && 'navigation__link_type_active'}`} to='/saved-movies'>Сохранённые фильмы</Link>
                </div>
                <Link className="navigation__link navigation__link_type_profile" to='/profile'><img className='link-bar__icon' src={profileIcon} alt='аккаунт'/></Link>
            </div>
        </div>
    )
}

export default Navigation;
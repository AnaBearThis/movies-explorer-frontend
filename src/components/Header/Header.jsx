import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation.jsx";

function Header(props) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function handleMenuClick() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <section className="header">
      <div className="content">
        <div className="header__content">
          <div className="header__container">
            <Link className="link-bar__link" to="/">
              <img className="logo" src={logo} alt="логотип" />
            </Link>
            <div className="link-bar link-bar_type_header">
              <Link
                className={`link-bar__link ${
                  props.isOnMoviesPage && "link-bar__link_type_active"
                }`}
                to="/movies"
              >
                Фильмы
              </Link>
              <Link
                className={`link-bar__link ${
                  props.isOnSavedMoviesPage && "link-bar__link_type_active"
                }`}
                to="/saved-movies"
              >
                Сохраненные фильмы
              </Link>
            </div>
          </div>
          <Link
            className="link-bar__link link-bar__link_type_profile"
            to="/profile"
          ></Link>
          <button
            className="header__nav"
            type="button"
            onClick={handleMenuClick}
          ></button>
          <Navigation
            isOpen={isMenuOpen}
            onClose={closeMenu}
            isOnMoviesPage={props.isOnMoviesPage}
            isOnSavedMoviesPage={props.isOnSavedMoviesPage}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;

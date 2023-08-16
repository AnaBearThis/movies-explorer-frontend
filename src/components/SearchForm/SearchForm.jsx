import React from "react";
import searchTransp from "../../images/iconsearchTransparent.svg";
import moviesApi from "../../utils/MoviesApi.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function SearchForm(props) {
  const [filmName, setFilmName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [isNotFound, setNotFound] = React.useState(false);
  const [isFail, setFail] = React.useState(false);
  const [toolTip, setToolTip] = React.useState("");

  const shortBtn = document.getElementsByClassName("search-form__check")[0];

  function handleFilmNameChange(e) {
    setFilmName(e.target.value);
  }

  function handleSubmit(e) {
    console.log(props.cards);
    e.preventDefault();
    if (props.isOnMoviesPage === true) {
      props.setCards([]);
    } else if (props.isOnSavedMoviesPage === true) {
      props.setSavedFilms([]);
    }
    setLoading(true);
    setNotFound(false);
    setError(false);

    let foundFilms;

    if (filmName === "") {
      setLoading(false);
      setError(true);
    } else {
      if (props.isOnMoviesPage === true) {
        localStorage.setItem("filmName", filmName);
        moviesApi
          .getCards()
          .then((data) => {
            setTimeout(setLoading, 3000, false);
            console.log(data);
            foundFilms = data.filter(
              (card) =>
                card.nameRU.toLowerCase().includes(filmName.toLowerCase()) ||
                card.nameEN.toLowerCase().includes(filmName.toLowerCase())
            );
            console.log(foundFilms);
          })
          .then(() => {
            if (foundFilms.length === 0) {
              setTimeout(setNotFound, 3000, true);
              localStorage.setItem("foundFilms", JSON.stringify(foundFilms));
            } else {
              setTimeout(props.setCards, 3000, foundFilms);
              localStorage.setItem("foundFilms", JSON.stringify(foundFilms));
            }
            console.log(isNotFound);
            console.log(localStorage.foundFilms);
          })
          .catch((err) => {
            console.log(`Error ${err}`);
            setTimeout(setLoading, 3000, false);
            setTimeout(setFail, 3000, true);
            setTimeout(
              setToolTip,
              3000,
              "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
            );
            props.setCards([]);
          });
      } else if (props.isOnSavedMoviesPage === true) {
        setTimeout(setLoading, 3000, false);
        foundFilms = props.savedFilms.filter(
          (card) =>
            card.nameRU.toLowerCase().includes(filmName.toLowerCase()) ||
            card.nameEN.toLowerCase().includes(filmName.toLowerCase())
        );
        console.log(foundFilms);
        if (foundFilms.length === 0) {
          setTimeout(setNotFound, 3000, true);
        } else {
          setTimeout(props.setSavedFilms, 3000, foundFilms);
        }
      }
    }
  }

  function handleShort() {
    props.setShort(!props.isShort);
    shortBtn.classList.toggle("search-form__check_type_active");
  }

  React.useEffect(() => {
    if (props.isShort === true) {
      localStorage.setItem("isShort", true);
    } else if (props.isShort === false) {
      localStorage.setItem("isShort", false);
    }
  }, [props.isShort]);

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__container">
          <img
            className="search-form__icon"
            src={searchTransp}
            alt="иконка поиска"
          />
          <input
            className="search-form__input"
            value={filmName || ""}
            onChange={handleFilmNameChange}
            id="input-film"
            type="string"
            name="filmName"
            placeholder={
              props.isOnMoviesPage === true
                ? localStorage.filmName || "Фильм"
                : "Фильм"
            }
            required
          />
          <button
            type="submit"
            className="search-form__submit-button"
            value="искать"
          ></button>
          <span
            id="input-film-error"
            className={`error error_type_film ${
              isError && "error_type_visible"
            }`}
          >
            Нужно ввести ключевое слово
          </span>
        </div>
        <FilterCheckbox onClick={handleShort} />
        <p
          className={`info-tool-tip ${isFail && "info-tool-tip_type_visible"}`}
        >
          {toolTip}
        </p>
        {isLoading && <Preloader />}
        {isNotFound && (
          <p className="search-form__not-found">Ничего не найдено</p>
        )}
      </form>
    </section>
  );
}

export default SearchForm;

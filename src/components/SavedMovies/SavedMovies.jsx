import React from "react";
import Header from "../Header/Header.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedMoviesList from "../SavedMoviesList/SavedMoviesList.jsx";

function SavedMovies(props) {
  const [isShort, setShort] = React.useState();
  const [isOnMoviesPage, setMoviesPage] = React.useState(false);
  const [isOnSavedMoviesPage, setSavedMoviesPage] = React.useState(false);

  React.useEffect(() => {
      if (isOnSavedMoviesPage === true) {
        props.setFoundSavedFilms(props.savedFilms)
      }
  }, [props.savedFilms, isOnSavedMoviesPage])

  React.useEffect(() => {
    if (
      window.location.href === "http://localhost:3001/movies" ||
      window.location.href ===
        "https://movies-ana-bear.nomoredomains.xyz/movies"
    ) {
      setMoviesPage(true);
    } else {
      setMoviesPage(false);
    }
  }, []);

  React.useEffect(() => {
    if (
      window.location.href === "http://localhost:3001/saved-movies" ||
      window.location.href ===
        "https://movies-ana-bear.nomoredomains.xyz/saved-movies"
    ) {
      setSavedMoviesPage(true);
    } else {
      setSavedMoviesPage(false);
    }
  }, []);

  return (
    <main className="saved-movies">
      <div className="content">
        <Header
          isOnMoviesPage={isOnMoviesPage}
          isOnSavedMoviesPage={isOnSavedMoviesPage}
        />
        <SearchForm
          isOnMoviesPage={isOnMoviesPage}
          isOnSavedMoviesPage={isOnSavedMoviesPage}
          isShort={isShort}
          setShort={setShort}
          savedFilms={props.savedFilms}
          setSavedFilms={props.setSavedFilms}
          foundSavedFilms={props.foundSavedFilms}
          setFoundSavedFilms={props.setFoundSavedFilms}
        />
        <SavedMoviesList
          isOnMoviesPage={isOnMoviesPage}
          isOnSavedMoviesPage={isOnSavedMoviesPage}
          savedFilms={props.savedFilms}
          setSavedFilms={props.setSavedFilms}
          foundSavedFilms={props.foundSavedFilms}
          setFoundSavedFilms={props.setFoundSavedFilms}
          isShort={isShort}
          setShort={setShort}
          onDelete={props.onCardDelete}
          isDeleteSuccess={props.isDeleteSuccess}
          isDeleteFail={props.isDeleteFail}
          cardDeleteToolText={props.cardDeleteToolText}
        />
      </div>
      <Footer />
    </main>
  );
}

export default SavedMovies;

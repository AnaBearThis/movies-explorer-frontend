import React from 'react';
import Header from '../Header/Header.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Footer from '../Footer/Footer.jsx';

function Movies(props) {
    const [isShort, setShort] = React.useState();
    const [isOnMoviesPage, setMoviesPage] = React.useState(false);
    const [isOnSavedMoviesPage, setSavedMoviesPage] = React.useState(false);

    React.useEffect(() => {
        if (window.location.href === 'http://localhost:3001/movies' || window.location.href === 'https://movies-ana-bear.nomoredomains.xyz/movies') {
            setMoviesPage(true)
        } else {
            setMoviesPage(false)
        }
      }, [])
    
      React.useEffect(() => {
          if (window.location.href === 'http://localhost:3001/saved-movies' || window.location.href === 'https://movies-ana-bear.nomoredomains.xyz/saved-movies') {
              setSavedMoviesPage(true)
          } else {
              setSavedMoviesPage(false)
          }
      }, [])
    
    return (
        <main className="movies">
            <Header
                isOnMoviesPage={isOnMoviesPage}
                isOnSavedMoviesPage={isOnSavedMoviesPage}
            />
            <SearchForm
                isOnMoviesPage={isOnMoviesPage}
                isOnSavedMoviesPage={isOnSavedMoviesPage}
                cards={props.cards}
                savedFilms={props.savedFilms}
                setSavedFilms={props.setSavedFilms}
                foundSavedFilms={props.foundSavedFilms}
                setFoundSavedFilms={props.setFoundSavedFilms}
                setCards={props.setCards}
                isShort={isShort}
                setShort={setShort} />
            {localStorage.filmName && localStorage.foundFilms && <MoviesCardList
                isOnMoviesPage={isOnMoviesPage}
                isOnSavedMoviesPage={isOnSavedMoviesPage}
                cards={props.cards}
                setCards={props.setCards}
                isShort={isShort}
                setShort={setShort}
                onCardSave={props.onCardSave}
                savedFilms={props.savedFilms}
                onDelete={props.onCardDelete}
            />}
            <Footer />
        </main>
    )
}

export default Movies;
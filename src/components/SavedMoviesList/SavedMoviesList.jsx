import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

function SavedMoviesList(props) {
    // const [isOnMoviesPage, setMoviesPage] = React.useState(false);
    // const [isOnSavedMoviesPage, setSavedMoviesPage] = React.useState(false);

    // React.useEffect(() => {
    //     if (window.location.href === 'http://localhost:3001/movies' || window.location.href === 'movies-ana-bear.nomoredomains.xyz/movies') {
    //         setMoviesPage(true)
    //     } else {
    //         setMoviesPage(false)
    //     }
    // }, [])

    // React.useEffect(() => {
    //     if (window.location.href === 'http://localhost:3001/saved-movies' || window.location.href === 'movies-ana-bear.nomoredomains.xyz/saved-movies') {
    //         setSavedMoviesPage(true)
    //     } else {
    //         setSavedMoviesPage(false)
    //     }
    // }, [])

    return (
        <section>
            <ul className="saved-movies-list">
                {
                            props.foundSavedFilms.map(card => (
                                <li>
                                    <MoviesCard
                                        key={card.id}
                                        card={card}
                                        isOnMoviesPage={props.isOnMoviesPage}
                                        isOnSavedMoviesPage={props.isOnSavedMoviesPage}
                                        savedFilms={props.savedFilms}
                                        onDelete={props.onDelete}
                                    />
                                </li>
                            ))
                    }
            </ul>
        </section>
    )
};

export default SavedMoviesList;
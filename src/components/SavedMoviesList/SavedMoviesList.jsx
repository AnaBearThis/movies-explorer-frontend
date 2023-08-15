import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

function SavedMoviesList(props) {

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
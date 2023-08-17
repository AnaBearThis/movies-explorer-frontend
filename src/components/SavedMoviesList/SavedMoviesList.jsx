import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import MoviesCardPopup from "../MoviesCardPopup/MoviesCardPopup.jsx";

function SavedMoviesList(props) {
  const [shownCards, setShownCards] = React.useState([]);
  console.log(props.foundSavedFilms)

  React.useEffect(() => {
    setShownCards(props.foundSavedFilms);
    if (props.isShort === true) {
      setShownCards(props.foundSavedFilms.filter((card) => card.duration <= 40));
    }
  }, [props.isShort, props.foundSavedFilms]);

  return (
    <section>
      <ul className="saved-movies-list">
        {shownCards.map((card) => (
          <li>
            <MoviesCard
              key={card.id}
              card={card}
              isOnMoviesPage={props.isOnMoviesPage}
              isOnSavedMoviesPage={props.isOnSavedMoviesPage}
              savedFilms={props.savedFilms}
              onDelete={props.onDelete}
              isDeleteSuccess={props.isDeleteSuccess}
              isDeleteFail={props.isDeleteFail}
              cardDeleteToolText={props.cardDeleteToolText}
            />
          </li>
        ))}
      </ul>
      {(props.isSaveFail === true || props.isDeleteFail === true) && (
        <MoviesCardPopup
          cardToolText={
            (props.isSaveFail === true && props.cardToolText) ||
            (props.isDeleteFail === true && props.cardDeleteToolText)
          }
        />
      )}
    </section>
  );
}

export default SavedMoviesList;

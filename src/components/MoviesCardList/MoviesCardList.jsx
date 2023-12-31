import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import More from "../More/More.jsx";
import MoviesCardPopup from "../MoviesCardPopup/MoviesCardPopup.jsx";

const MoviesCardList = React.memo((props) => {
  let storedFilms = JSON.parse(localStorage.foundFilms);
  const [shownCards, setShownCards] = React.useState([]);
  const [cardsToShow, setCardsToShow] = React.useState(12);
  const [anotherRow, setAnotherRow] = React.useState(3);
  const [shortFilms, setShortFilms] = React.useState([]);
  const [thereIsMore, setThereIsMore] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 900) {
      setCardsToShow(12);
      setAnotherRow(3);
    } else if (window.innerWidth > 760 && window.innerWidth <= 900) {
      setCardsToShow(8);
      setAnotherRow(2);
    } else if (window.innerWidth <= 760) {
      setCardsToShow(5);
      setAnotherRow(1);
    }
  }, []);

  window.onresize = function () {
    if (window.innerWidth > 900) {
      setTimeout(setCardsToShow, 2000, 12);
      setTimeout(setAnotherRow, 2000, 3);
    } else if (window.innerWidth > 760 && window.innerWidth <= 900) {
      setTimeout(setCardsToShow, 2000, 8);
      setTimeout(setAnotherRow, 2000, 2);
    } else if (window.innerWidth <= 760) {
      setTimeout(setCardsToShow, 2000, 5);
      setTimeout(setAnotherRow, 2000, 1);
    }
  };

  React.useEffect(() => {
    props.setCards(storedFilms);
    if (localStorage.isShort === "true") {
      const shortBtn = document.querySelector(".search-form__check");
      props.setShort(true);
      shortBtn.classList.add("search-form__check_type_active");
      setShownCards(
        storedFilms.filter((card) => card.duration <= 40).slice(0, cardsToShow)
      );
      setShortFilms(storedFilms.filter((card) => card.duration <= 40).slice(0, cardsToShow))
    } else if (localStorage.isShort === "false") {
      setShownCards(storedFilms.slice(0, cardsToShow));
    }
  }, []);

  React.useEffect(() => {
    setShownCards(props.cards.slice(0, cardsToShow));
    if (props.isShort === true) {
      setShownCards(
        props.cards.filter((card) => card.duration <= 40).slice(0, cardsToShow)
      );
    }
  }, [props.cards, props.isShort, cardsToShow]);

  const cardList = function () {
    if (props.cards.length === 0) {
      return storedFilms;
    } else {
      return props.cards;
    }
  };

  React.useEffect(() => {
    if (
      shownCards.length === Array.from(props.cards).length ||
      shownCards.length === storedFilms.length || 
      shownCards.length === shortFilms.length
    ) {
      setThereIsMore(false)
    } else if (
      props.cards.length > shownCards.length ||
      storedFilms.length > shownCards.length ||
      shortFilms.length > shownCards.length
    ) {
      setThereIsMore(true)
    } else {
      setThereIsMore(false)
    }
  }, [props.cards, shortFilms.length, storedFilms.length, shownCards.length])

  function showMore() {
    const toBeShownCards = Math.min(
      anotherRow,
      cardList().length - shownCards.length
    );
    const updatedCardsToShow = cardsToShow + toBeShownCards;
    setCardsToShow(updatedCardsToShow);
    console.log(updatedCardsToShow);
    setShownCards(cardList().slice(0, updatedCardsToShow));
    console.log(cardsToShow);
  }

  if (storedFilms.length === 0 && props.cards.length === 0) {
    return <section className="movies-card-list"></section>;
  } else {
    return (
      <section>
        <section className="movies-card-list">
          {shownCards.map((card) => (
            <MoviesCard
              key={card.id}
              card={card}
              isOnMoviesPage={props.isOnMoviesPage}
              isOnSavedMoviesPage={props.isOnSavedMoviesPage}
              storedFilms={storedFilms}
              onSave={props.onCardSave}
              isSaveSuccess={props.isSaveSuccess}
              isSaveFail={props.isSaveFail}
              cardToolText={props.cardToolText}
              savedFilms={props.savedFilms}
              onDelete={props.onDelete}
              isDeleteSuccess={props.isDeleteSuccess}
              isDeleteFail={props.isDeleteFail}
              cardDeleteToolText={props.cardDeleteToolText}
            />
          ))}
        </section>
        {thereIsMore === true && <More onClick={showMore} />}
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
});

export default MoviesCardList;

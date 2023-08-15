import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import More from '../More/More.jsx';

const MoviesCardList = React.memo((props) => {
    let storedFilms = JSON.parse(localStorage.foundFilms)
    const [shownCards, setShownCards] = React.useState([])
    const [cardsToShow, setCardsToShow] = React.useState(12)
    const [anotherRow, setAnotherRow] = React.useState(3)

    const shortBtn = document.getElementsByClassName('search-form__check')[0];

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
    }, [])

    window.onresize = function() {
        if (window.innerWidth > 900) {
            setTimeout(setCardsToShow, 2000, 12)
            setTimeout(setAnotherRow, 2000, 3)
        } else if (window.innerWidth > 760 && window.innerWidth <= 900) {
            setTimeout(setCardsToShow, 2000, 8)
            setTimeout(setAnotherRow, 2000, 2)
        } else if (window.innerWidth <= 760) {
            setTimeout(setCardsToShow, 2000, 5)
            setTimeout(setAnotherRow, 2000, 1)
        }
    }    

    React.useEffect(() => {
        props.setCards(storedFilms)
        if (localStorage.isShort === 'true') {
            props.setShort(true)
            shortBtn.classList.add('search-form__check_type_active');
            setShownCards(storedFilms.filter((card) => (card.duration <= 40)).slice(0, cardsToShow))
        } else if (localStorage.isShort === 'false') {
            setShownCards(storedFilms.slice(0, cardsToShow))
        }
    }, [])
    
    React.useEffect(() => {
        setShownCards(props.cards.slice(0, cardsToShow))
        if (props.isShort === true) {
            setShownCards(props.cards.filter((card) => (card.duration <= 30)).slice(0, cardsToShow))
        }
    }, [props.cards, props.isShort, cardsToShow])

    const cardList = function() {
        if (props.cards.length === 0) {
            return storedFilms
        } else {
            return props.cards
        }
    }

    function thereIsMore() {
        if (shownCards.length === Array.from(props.cards).length || shownCards.length === storedFilms.length) {
                return false
        } else if (props.cards.length > shownCards.length || storedFilms.length > shownCards.length) {
                return true
        } else {
                return false
        }
    }

    thereIsMore()

    function showMore() {
        const toBeShownCards = Math.min(anotherRow, cardList().length - shownCards.length);
        const updatedCardsToShow = cardsToShow + toBeShownCards;
        setCardsToShow(updatedCardsToShow);
        console.log(updatedCardsToShow);
        setShownCards(cardList().slice(0, updatedCardsToShow));
        console.log(cardsToShow);
    }

    function handleCardSave(card) {
        props.onCardSave(card);
        storedFilms = storedFilms.map((c) => {
                const newCard = {...card, saved: 'yes'}
              if (c.id === card.id) {
                return newCard;
              } else {
                return c;
              }
            })
        localStorage.setItem('foundFilms', JSON.stringify(storedFilms));    
        props.setCards(storedFilms);
    }

    function handleCardDelete(card) {
        props.onDelete(card);
        storedFilms = storedFilms.map((c) => {
            const newCard = {...card, saved: 'no'}
            console.log(newCard)
          if (c.id === card.id) {
            return newCard;
          } else {
            return c;
          }
        })
        localStorage.setItem('foundFilms', JSON.stringify(storedFilms));    
        props.setCards(storedFilms);
    }

    if (storedFilms.length === 0 && props.cards.length === 0) {
        return (
            <section className="movies-card-list"></section>
        )
    } else {
        return (
            <section>
                <section className="movies-card-list">
                    {
                            shownCards.map(card => (
                                <MoviesCard
                                    key={card.id}
                                    card={card}
                                    isOnMoviesPage={props.isOnMoviesPage}
                                    isOnSavedMoviesPage={props.isOnSavedMoviesPage}
                                    storedFilms={storedFilms}
                                    onSave={handleCardSave}
                                    savedFilms={props.savedFilms}
                                    onDelete={handleCardDelete}
                                />
                            ))
                    }
                </section>
                {thereIsMore() === true && <More onClick={showMore}/>} 
            </section>
        )
    }
});

export default MoviesCardList;
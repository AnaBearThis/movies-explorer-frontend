import React from "react";

function MoviesCard(props) {
    const isSaved = props.card.saved === 'yes'

    React.useEffect(() => {
        if (props.savedFilms.find(c => c.movieId === props.card.id) !== undefined) {
            let card = document.getElementById(props.card.id);
            console.log(card)
            let btnSave = card.querySelector(".movies-card__save");
            console.log(btnSave)
            btnSave.classList.add('movies-card__save_type_saved')
        } else if (props.savedFilms.find(c => c.movieId === props.card.id) === undefined && window.location.href === 'http://localhost:3001/movies'){
            let card = document.getElementById(props.card.id);
            console.log(card)
            let btnSave = card.querySelector(".movies-card__save");
            console.log(btnSave)
            btnSave.classList.remove('movies-card__save_type_saved')
        }
    }, [])

    console.log(props.card)

    function handleClick() {
        window.open(
            `${props.card.trailerLink}`,
            '_blank'
        )
    }

    function convertMinutesToHoursAndMinutes(minutes) {
        var hours = Math.floor(minutes / 60);
        var remainingMinutes = minutes % 60;
      
        return hours + " ч " + remainingMinutes + " м";
    }

    function handleSave(e) {
        let card = document.getElementById(props.card.id);
        let btnSave = card.getElementsByClassName('movies-card__save')[0];
        if (btnSave.classList.contains('movies-card__save_type_saved')) {
            props.onDelete(props.card)
        } else {
            props.onSave(props.card);
        }
    }

    function handleDelete(e) {
        console.log(props.card)
        console.log(e.target)
        props.onDelete(props.card)
    }

    return (

        <div className="movies-card" id={props.card.id}>
            <div className="movies-card__name-container">
                <h2 className="movies-card__name">{props.card.nameRU}</h2>
                <p className="movies-card__duration">{convertMinutesToHoursAndMinutes(props.card.duration)}</p>
            </div>
            <img className="movies-card__poster" src={(props.isOnMoviesPage === true && `https://api.nomoreparties.co/${props.card.image.url}`) || (props.isOnSavedMoviesPage === true && `${props.card.image}`)} alt={props.nameRU} onClick={handleClick}/>
            {props.isOnMoviesPage === true && <button className={`movies-card__save ${isSaved && 'movies-card__save_type_saved'}`} type='buttton' value='save' id='save' onClick={handleSave}/>}
            {props.isOnSavedMoviesPage === true && <button className='movies-card__button-delete' type='buttton' value='delete' id='delete' onClick={handleDelete}/>}
            <label htmlFor='save'></label>
        </div>
    )
};

export default MoviesCard;
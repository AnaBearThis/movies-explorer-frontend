import poster from '../../images/poster.png';

function SavedMovieCard() {
    return (
        <div className="savedMovieCard">
            <div className="moviesCard__nameContainer">
                <p className="moviesCard__name">В погоне за Бенкси</p>
                <p className="moviesCard__duration">27 минут</p>
            </div>
            <img className="moviesCard__poster" src={poster} alt='постер фильма'/>
            <button className="moviesCard__buttonDelete" type="button" value="delete"></button>
        </div>
    )
}

export default SavedMovieCard;
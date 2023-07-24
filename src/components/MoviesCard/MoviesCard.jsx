import poster from '../../images/poster.png';

function MoviesCard() {
    return (
        <div className="moviesCard">
            <div className="moviesCard__nameContainer">
                <p className="moviesCard__name">В погоне за Бенкси</p>
                <p className="moviesCard__duration">27 минут</p>
            </div>
            <img className="moviesCard__poster" src={poster} alt='постер фильма'/>
            <input className='moviesCard__save' type='radio' value='save' id='save' />
            <label for='save'></label>
        </div>
    )
};

export default MoviesCard;
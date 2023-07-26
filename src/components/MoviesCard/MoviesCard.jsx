import poster from '../../images/poster.png';

function MoviesCard() {
    return (
        <div className="movies-card">
            <div className="movies-card__name-container">
                <h2 className="movies-card__name">В погоне за Бенкси</h2>
                <p className="movies-card__duration">27 минут</p>
            </div>
            <img className="movies-card__poster" src={poster} alt='постер фильма'/>
            <input className='movies-card__save' type='radio' value='save' id='save' />
            <label for='save'></label>
        </div>
    )
};

export default MoviesCard;
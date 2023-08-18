import poster from "../../images/poster.png";

function SavedMovieCard() {
  return (
    <div className="saved-movie-card">
      <div className="movies-card__name-container">
        <p className="movies-card__name">В погоне за Бенкси</p>
        <p className="movies-card__duration">27 минут</p>
      </div>
      <img className="movies-card__poster" src={poster} alt="постер фильма" />
      <button
        className="movies-card__button-delete"
        type="button"
        value="delete"
      ></button>
    </div>
  );
}

export default SavedMovieCard;

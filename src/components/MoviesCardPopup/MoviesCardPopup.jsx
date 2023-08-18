import failPic from "../../images/fail.png";

function MoviesCardPopup(props) {
  return (
    <div className="movies-card-popup">
      <div className="movies-card-popup__container">
        <img className="movies-card-popup__pic" src={failPic} alt="ошибка" />
        <p className="movies-card-popup__text">{props.cardToolText}</p>
      </div>
    </div>
  );
}

export default MoviesCardPopup;

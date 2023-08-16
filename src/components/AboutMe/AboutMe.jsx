import photo from "../../images/me.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="content">
        <h2 className="section__heading">Студент</h2>
        <div className="about-me__container">
          <div className="about-me__text">
            <p className="about-me__name">Анастасия</p>
            <p className="about-me__about">Фронтенд-разработчица, 25 лет</p>
            <p className="about-me__description">
              Я родилась и выросла в Костроме, закончила ЛГУ имени А.С.Пушкина
              по специальности Лингвистика. Я усердно изучаю тайные практики
              программирования и уже, например, сделала этот сайт. Пока у меня
              есть только машина, огромная любовь к музыке и невероятное
              стремление стать сеньоритой фронтенда. Ну или хокаге.
            </p>
            <a
              className="about-me__link"
              href="https://github.com/AnaBearThis"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img
            className="about-me__pic"
            src={photo}
            alt="портрет великолепной студентки"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

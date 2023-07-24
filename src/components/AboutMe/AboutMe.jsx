import photo from '../../images/me.jpg';

function AboutMe() {
    return (
        <section className="aboutMe">
            <h2 className="section__heading">Студент</h2>
            <div className='aboutContainer'>
                <div className='aboutMe__text'>
                    <p className="aboutMe__name">Анастасия</p>
                    <p className="aboutMe__about">Фронтенд-разработчица, 25 лет</p>
                    <p className="aboutMe__description">Я родилась и выросла в Костроме, закончила ЛГУ имени А.С.Пушкина по специальности Лингвистика. Я усердно изучаю тайные практики программирования и уже, например, сделала этот сайт. Пока у меня есть только машина, огромная любовь к музыке и невероятное стремление стать сеньоритой фронтенда. Ну или хокаге.</p>
                    <a className='aboutMe__link' href='https://github.com/AnaBearThis' target="_blank" rel='noreferrer'>Github</a>
                </div>   
                <img className='aboutMe__pic' src={photo} alt='портрет великолепной студентки'/> 
            </div>
        </section>
    )
}

export default AboutMe;
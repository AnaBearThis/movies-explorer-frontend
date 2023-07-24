function AboutProject() {
    return (
        <section className='aboutProject'>
            <h2 className="section__heading">О проекте</h2>
            <div className="descriptionContainer">
                <div className="description description_type_aboutProject">
                    <h3 className="description__heading">Дипломный проект включал 5 этапов</h3>
                    <p className="description__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="description description_type_aboutProject">
                    <h3 className="description__heading">На выполнение диплома ушло 5 недель</h3>
                    <p className="description__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="progressContainer">
                <p className="progress__time progress__time_type_colored">1 неделя</p>
                <p className="progress__time">4 недели</p>
            </div>
            <div className="progressContainer">
                <p className="progress__side">Back-end</p>
                <p className="progress__side">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;
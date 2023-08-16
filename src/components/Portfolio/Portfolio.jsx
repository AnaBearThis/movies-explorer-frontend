function Portfolio() {
  return (
    <section className="portfolio">
      <div className="content">
        <p className="portfolio__subheading">Портфолио</p>
        <ul className="portfolio__projects">
          <li className="portfolio__link-container">
            <a
              className="portfolio__link-project"
              href="https://github.com/AnaBearThis/how-to-learn-public"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт<p className="portfolio__linkPic">↗</p>
            </a>
          </li>
          <li className="portfolio__link-container">
            <a
              className="portfolio__link-project"
              href="https://github.com/AnaBearThis/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт<p className="portfolio__linkPic">↗</p>
            </a>
          </li>
          <li className="portfolio__link-container portfolio__link-container_type_no-line">
            <a
              className="portfolio__link-project"
              href="https://github.com/AnaBearThis/react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение<p className="portfolio__linkPic">↗</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;

function Footer() {
  return (
    <section className="footer">
      <div className="content">
        <p className="footer__ending">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <p className="footer__year">© 2023</p>
          <ul className="footer__links">
            <li>
              <a
                className="footer__link"
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;

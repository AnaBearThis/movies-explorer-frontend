import Header from "../Header/Header.jsx";
import NavTab from "../NavTab/NavTab.jsx";

function Promo(props) {
  return (
    <section className="promo">
      <div className="content">
        {props.isLoggedIn ? <Header /> : <NavTab />}
        <h1 className="promo__heading">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;

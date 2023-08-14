import Header from "../Header/Header.jsx";
import NavTab from "../NavTab/NavTab.jsx";

function Promo(props) {
    return (
        <section className="promo">
            {props.isLoggedIn ? <Header /> : <NavTab />}
            <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

export default Promo;
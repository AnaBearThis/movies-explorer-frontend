import React from "react";
import Promo from "../Promo/Promo.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import Techs from "../Techs/Techs.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Footer from "../Footer/Footer.jsx";

function Main(props) {
  return (
    <main className="main">
      <Promo isLoggedIn={props.loggedIn} />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;

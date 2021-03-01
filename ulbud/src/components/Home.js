import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Menu from './Menu';
import { NavLink } from "react-router-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class Home extends Component {
  render() {
    return (
      <>
      <section className="home_section">
         <Menu/>
        <Banner />
        <AboutCompany />
        <Materials />
      </section>
     
      </>
    );
  }
}

class Banner extends Component {
  render() {
    return (
      <>
        <div className="banner_background"></div>
        <div className="banner_content_area">
          <div className="banner_text">firma z wieloletnim doświadczeniem</div>
          <div className="banner_btn_area">
            <Link
              className="banner_btn about"
              to="about_company"
              spy={true}
              smooth={true}
              duration={700}
            >
              O firmie
            </Link>
            <NavLink className="banner_btn job" exact to="/job">
              Chcesz nawiązać współpracę?
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}
class AboutCompany extends Component {
  render() {
    return (
      <>
        <div className="about_company" id="about_company">
          <Fade bottom>
            <div className="text_main">
              <div className="text_header">
                <h2> O</h2>
                <h2>nas</h2>
              </div>
              <p>
                Jesteśmy firmą z kilkunastoletnim doświadczeniem, specjalizującą
                się w termoizolacji budynków mieszkalnych oraz pracami
                związanymi z remontami budynków. Możemy pochwalić się wieloma
                rzetelnymi pracami z terminowym wykonaniem.
              </p>
            </div>
          </Fade>
          <div className="about_text">
            <Fade bottom>
              <div className="what_we_do">
                <h2>Wykonujemy</h2>
                <ul>
                  <li>Docieplenia budynków metodą lekką-mokrą i suchą</li>
                  <li>Wymiana stolarki okiennej i drzwiowej</li>
                  <li>Pokrycia i docieplenia stropodachów</li>
                  <li>Opaski wokół budynków</li>
                  <li>
                    Zadaszenia nad balkonami, wejściami wraz z ich remontem
                  </li>
                  <li>Balustrady na balkonach</li>
                  <li>Instalacje odgromowe</li>
                </ul>
              </div>
            </Fade>
            <Fade bottom>
              <div className="about_img"></div>
            </Fade>
          </div>
        </div>
      </>
    );
  }
}
class Materials extends Component {
  state = {
    logos: 7,
  };
  render() {
    const items = [];
    for (let i = 0; i < 7; i++) {
      items.push(<div className="producents_logo" key={i}></div>);
    }
    return (
      <>
        <div className="materials">
          <p>
            Pracujemy na materiałach najwyższej jakości oraz współpracujemy z
            takimi producentami jak
          </p>
          <div className="producents">{items}</div>
        </div>
      </>
    );
  }
}
export default Home;

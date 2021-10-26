import React from "react";
import Logo from "../../assets/img/logo.png";
import NavImg from "../../assets/img/nav-img.png";
import "../../App.css";

export const HeaderComponent = () => {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="htt" className="nav__logo">
            <img src={Logo} alt="" className="nav__logo-img" />
            Halloween
          </a>
          <div className="nav__menu" id="nav_menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="http://google.com" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#trick" className="nav__link">
                  Candy
                </a>
              </li>
              <li className="nav__item">
                <a href="#new" className="nav__link">
                  New
                </a>
              </li>
              <a href="http" className="button button--ghost">
                Support
              </a>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>

            <img src={NavImg} alt="" className="nav__img" />
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /* Toggle Menu */
  const [toggle, showMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (e) => {
    // Mengambil href dari link yang diklik
    const href = e.target.getAttribute("href");
    // Set activeLink menjadi href dari link yang diklik
    setActiveLink(href);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Miko
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  activeLink === "#home" ? "active-link" : ""
                }`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  activeLink === "#about" ? "active-link" : ""
                }`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${
                  activeLink === "#skills" ? "active-link" : ""
                }`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                className={`nav__link ${
                  activeLink === "#qualification" ? "active-link" : ""
                }`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Education
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#work"
                className={`nav__link ${
                  activeLink === "#work" ? "active-link" : ""
                }`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-scenery nav__icon"></i> Portofolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  activeLink === "#contact" ? "active-link" : ""
                }`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

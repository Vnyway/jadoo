import React from "react";
import { navLinks } from "../constants";

const Header = () => {
  return (
    <header className="header__wrapper">
      <nav className="header">
        <a href="#" className="header__logo">
          <img src="/logo.svg" alt="logo" />
        </a>
        <div className="header__navigation">
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.id} className="header__link-item">
                <a href={link.ref} className="header__link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a className="header__subscribe" href="#subscribe">
            Subscribe
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

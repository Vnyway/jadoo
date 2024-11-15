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
              <li
                key={link.id}
                className="header__link-item"
                style={{ animationDelay: `${(link.id + 1) * 0.3}s` }}>
                <a href={link.ref} className="header__link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="header__subscribe"
            href="#subscribe"
            style={{ animationDelay: `${(navLinks.length + 2) * 0.3}s` }}>
            Subscribe
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

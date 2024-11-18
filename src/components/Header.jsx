import React from "react";
import { navLinks } from "../constants";

const Header = () => {
  const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };
      document.addEventListener("mousedown", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
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
        <div ref={node} className="header__burger__wrapper">
          <button
            className={`header__burger header__burger${
              open ? "--open" : "--closed"
            }`}
            onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </button>
          <ul
            open={open}
            className={`header__menu header__menu${
              open ? "--open" : "--closed"
            }`}>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;

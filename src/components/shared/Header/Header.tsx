/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

/* eslint-disable prettier/prettier */
function Header() {
  // const [open, setOpen] = useState(false);

  // adding the states
  const [isActive, setIsActive] = useState(false);

  // add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    // <div className="App">
    <header className={classNames(styles.header_section, "center")}>
      <nav className={classNames(styles.navbar, "center")}>
        {/* logo */}
        <a href="https://aquera.com/" className={classNames(styles.logo)}>
          <img
            src="https://aquera.com/hubfs/aquera-logo-2.svg"
            className=""
            alt="Flowbite Logo"
            loading="lazy"
            width={100}
            height={100}
          />
        </a>

        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <li onClick={removeActive}>
            <Link
              to="/"
              className={classNames(styles.navLink)}
              aria-current="page">
              <a href="https://leadschool.in/about-us/know-the-company/">
                Home
              </a>
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link
              to="/about"
              className={classNames(styles.navLink)}
              aria-current="page">
              <a href="https://leadschool.in/about-us/know-the-company/">
                About
              </a>
            </Link>
          </li>
        </ul>

        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}>
          <span className={classNames(styles.bar)} />
          <span className={classNames(styles.bar)} />
          <span className={classNames(styles.bar)} />
        </div>
      </nav>
    </header>
  );
}

export default Header;

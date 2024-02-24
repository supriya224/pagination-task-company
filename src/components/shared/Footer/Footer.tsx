/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from "classnames";
import styles from "./footer.module.css";

/* eslint-disable prettier/prettier */
function Footer() {
  return (
    // <div className={classNames(styles.footer_section)}>
    <footer className={classNames(styles.footer_section)}>
      <div className={classNames(styles.footer_section)}>
        <p className={classNames(styles.content_section, "center")}>
          © 2020 All rights reserved{" "}
        </p>
      </div>
    </footer>
    // </div>
  );
}

export default Footer;

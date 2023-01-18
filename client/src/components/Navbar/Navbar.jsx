import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar=()=>{
  return (
    <>
      <header>
        <nav>
          <div className={styles.left}>
            <Link to="/" className={styles.left}>
              LOGO
            </Link>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                {" "}
                <Link to="/" className={styles.link}>
                  Home
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/AddPage" className={styles.link}>
                  Add Page
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/Author" className={styles.link}>
                  Author
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/Book" className={styles.link}>
                  Book
                </Link>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

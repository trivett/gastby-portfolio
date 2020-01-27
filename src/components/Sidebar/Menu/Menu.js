import React from "react";
import { Link } from "gatsby";
import styles from "./Menu.module.scss";

const Menu = ({ menu }) => (
  <nav className={styles["menu"]}>
    <ul className={styles["menu__list"]}>
      {menu.map(item => (
        <li className={styles["menu__list-item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["menu__list-item-link"]}
            activeClassName={styles["menu__list-item-link--active"]}
          >
            {item.label}
          </Link>
        </li>
      ))}

      <li className={styles["menu__list-item"]} key={"trello"}>
        <a
          href='/trivett_resume.pdf'
          target='_blank'
          className={styles["menu__list-item-link"]}
        >
          Resume
        </a>
      </li>
      <li className={styles["menu__list-item"]} key={"trello"}>
        <a
          href='https://trello.com/b/uZ3hapB7/books'
          target='_blank'
          className={styles["menu__list-item-link"]}
        >
          What I am reading
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;

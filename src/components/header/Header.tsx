import { FC } from "react";

import { Logo } from "./logo/Logo";
import { Menu } from "./menu/Menu";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo />
        <Menu />
        <ul id="menuList" className={styles.menu}>
          <li className={styles.item}>
            <a href="#portfolio">портфолио</a>
          </li>
          <li className={styles.item}>
            <a href="#competencies">компетенции</a>
          </li>
          <li className={styles.item}>
            <a href="#services">услуги</a>
          </li>
          <li className={styles.item}>
            <a href="#footer">контакты</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

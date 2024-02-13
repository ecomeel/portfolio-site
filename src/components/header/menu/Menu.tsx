import { FC } from "react";

import { Navigation } from "../../share/navigation/Navigation";
import styles from "./menu.module.scss";

export const Menu: FC = () => {
  function handleBurgerClick() {
    const menuListNode = document.getElementById("menuList");
    const burgerBtnNode = document.getElementById('burgerBtn')
    menuListNode?.classList.toggle("active-burger");
    burgerBtnNode?.classList.toggle("rotate-icon");
  }
  return (
    <nav className={styles.menu}>
      {/* <Navigation /> */}
      <ul className={styles.menu}>
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
      <button id="burgerBtn" className={styles.burger} onClick={handleBurgerClick}></button>
    </nav>
  );
};

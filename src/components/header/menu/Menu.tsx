import { FC } from "react";
import { motion } from "framer-motion";

import styles from "./menu.module.scss";

export const Menu: FC = () => {
  function handleBurgerClick() {
    const menuListNode = document.getElementById("menuList");
    const burgerBtnNode = document.getElementById("burgerBtn");
    menuListNode?.classList.toggle("active-burger");
    burgerBtnNode?.classList.toggle("rotate-icon");
  }
  const navVariants = {
    hidden: { x: 1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  return (
    <motion.nav
      className={styles.menu}
      initial={'hidden'}
      animate={'visible'}
      transition={{
        duration: 1,
        type: "spring",
      }}
      variants={navVariants}
    >
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
      <button
        id="burgerBtn"
        className={styles.burger}
        onClick={handleBurgerClick}
      ></button>
    </motion.nav>
  );
};

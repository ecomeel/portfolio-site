import { FC } from "react";

import { Navigation } from "../../share/navigation/Navigation";
import styles from "./menu.module.scss";

export const Menu: FC = () => {
  function handleBurgerClick() {

  }
  return (
    <nav className={styles.menu}>
      <Navigation />
      <button className={styles.burger} onClick={handleBurgerClick}></button>
    </nav>
  );
};

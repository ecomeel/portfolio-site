import { FC } from "react";

import styles from "./navigation.module.scss";

export const Navigation: FC = () => {
  return (
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
  );
};

import { FC } from "react";

import { ISocial } from "libs/types";
import styles from './social.module.scss'

export const Social: FC<ISocial> = ({ title, link }) => {
  return (
    <li className={styles.social}>
      <a target="_blank" className={styles.link} href={link}>{title}</a>
    </li>
  );
};

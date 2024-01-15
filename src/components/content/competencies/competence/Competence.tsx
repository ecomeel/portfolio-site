import { FC } from "react";

import styles from './competence.module.scss'
import { ICompetence } from "libs/types";

export const Competence: FC<ICompetence> = ({
  title,
  description,
  img,
  imgAlt,
}) => {
  return (
    <li className={styles.competence}>
      <div className={styles.wrapper}>
        <img src={img} alt={imgAlt} />
      </div>
      <h3 className={`${styles.title} subtitle`}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

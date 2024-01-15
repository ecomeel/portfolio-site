import { FC } from "react";

import { IProject } from "libs/types";
import styles from "./project.module.scss";

export const Project: FC<IProject> = ({
  name,
  technologies,
  description,
  imgSrc,
  url,
}) => {
  return (
    <li className={styles.project}>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.technologies}>{technologies}</p>
      <a href={url} target="_blank">
        <img
          src={imgSrc}
          alt={name}
          className={styles.img}
        />
      </a>
    </li>
  );
};

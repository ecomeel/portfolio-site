import { FC } from "react";
import { motion } from "framer-motion";

import { IProject } from "libs/types";
import styles from "./project.module.scss";

interface IMyProject extends IProject {
  index: number
}

export const Project: FC<IMyProject> = ({
  index,
  name,
  technologies,
  description,
  imgSrc,
  url,
}) => {
  function setOrder(num: number) {
    if (num % 2 == 0) {
      return 1000
    } else {
      return -1000
    }
  }
  const listVariants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: (i: number) => ({ opacity: 0, x: setOrder(i) }),
  };
  return (
    <motion.li
      variants={listVariants}
      initial={"hidden"}
      // animate={"visible"}
      whileInView={'visible'}
      custom={index}
      className={styles.project}
    >
      <p className={styles.description}>{description}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.technologies}>{technologies}</p>
      <a href={url} target="_blank">
        <img src={imgSrc} alt={name} className={styles.img} />
      </a>
    </motion.li>
  );
};

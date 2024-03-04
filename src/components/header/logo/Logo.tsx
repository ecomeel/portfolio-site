import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./logo.module.scss";
export const Logo: FC = () => {
  return (
    <motion.p
      className={styles.logo}
      initial={{
        x: -1000,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: .8,
        type: 'spring'
      }}
    >
      Pulin
    </motion.p>
  );
};

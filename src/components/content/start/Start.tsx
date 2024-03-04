import { motion } from "framer-motion";
import styles from "./start.module.scss";

export const Start = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.text}>
          <motion.p
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              type: "spring",
            }}
            className={styles.description}
          >
            Разрабатываю имиджевые сайты для малого и среднего бизнеса, которые
            повышают престиж компании и позволяют выделиться на фоне конкурентов
          </motion.p>
          <motion.h1
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className={styles.title}
          >
            Привет, я Саша — фронтенд разработчик
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

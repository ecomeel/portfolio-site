import { FC } from "react";

import { Socials } from "./socials/Socials";
import styles from "./footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <h2 className={styles.title}>
            Портфолио фронтенд-разработчика <br />
            Пулина Александра
          </h2>
          <Socials />
        </div>
        <div className={styles.bottom}>
          <p>© Все права защищены. 2023</p>
          <p>Политика обработки данных</p>
        </div>
      </div>
    </footer>
  );
};

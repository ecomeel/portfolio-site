import styles from "./content.module.scss";
import { Start } from "./start/Start";
import { Portfolio } from "./portfolio/Portfolio";
import { Competencies } from "./competencies/Сompetencies";
import { Services } from "./services/Sevices";

export const Content = () => {
  return (
    <main>
      <Start />
      <div className={`${styles.blocks} container`}>
        <Portfolio />
        <Competencies />
        <Services />
      </div>
    </main>
  );
};

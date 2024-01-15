import styles from "./content.module.scss";
import { Start } from "./start/Start";
import { Portfolio } from "./portfolio/Portfolio";

export const Content = () => {
  return (
    <main>
      <Start />
      <div className={`${styles.blocks} container`}>
        <Portfolio />
      </div>
    </main>
  );
};

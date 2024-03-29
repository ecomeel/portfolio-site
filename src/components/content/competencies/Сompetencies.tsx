import { FC } from "react";

import { competenciesList } from "datas/competencies";
import styles from "./competencies.module.scss";
import { Competence } from "./competence/Competence";

export const Competencies: FC = () => {

  return (
    <section id="competencies">
      <h2 className="title">Мои компетенции</h2>
      <ul className={styles.list}>
        {competenciesList.map((competence) => (
          <Competence 
            key={competence.title}
            title={competence.title}
            description={competence.description}
            img={competence.img}
            imgAlt={competence.imgAlt}
          />
        ))}
      </ul>
    </section>
  );
};

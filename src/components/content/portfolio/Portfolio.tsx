import { Project } from "./project/Project";
import { projectsList } from "datas/projects";
import styles from "./portfolio.module.scss";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="title">Самые свежие проекты</h2>
      <ul className={styles.projects}>
        {projectsList.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            technologies={project.technologies}
            description={project.description}
            imgSrc={project.imgSrc}
            url={project.url}
          />
        ))}
      </ul>
      <a
        href="https://github.com/ecomeel"
        target="_blank"
        className={styles.button}
      >
        Смотреть все проекты
      </a>
    </section>
  );
};

import { Project } from "./project/Project";
import { projectsList } from "../../../libs/datas";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h2>Самые свежие проекты</h2>
        <ul>
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
        // href="https://github.com/ecomeel"
        // target="_blank"
        // class="projects__button"
        >
          Смотреть все проекты
        </a>
      </div>
    </section>
  );
};

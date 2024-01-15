import { FC } from "react";

import { servicesList } from "datas/services";
import { Service } from "./service/Service";
import styles from "./services.module.scss";

export const Services: FC = () => {
  return (
    <section id="services">
      <h2 className={`title ${styles.title}`}>
        Помогаю реализовать широкий спектр задач
      </h2>
      <ul>
        {servicesList.map((service) => (
          <Service
            title={service.title}
            description={service.description}
            img={service.img}
            imgAlt={service.imgAlt}
          />
        ))}
      </ul>
    </section>
  );
};

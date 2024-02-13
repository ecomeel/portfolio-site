import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { IService } from "libs/types";
import styles from "./service.module.scss";

export const Service: FC<IService> = ({ title, description, img, imgAlt }) => {
  return (
    // <li className={styles.service}>
    //   <img className={styles.image} src={img} alt={imgAlt} />
    //   <div className={styles.wrapper}>
    //     <h3 className={styles.title}>{title}</h3>
    //     <p className={styles.description}>{description}</p>
    //   </div>
    // </li>
    <SwiperSlide className={styles.service}>
      <img className={styles.image} src={img} alt={imgAlt} />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </SwiperSlide>
  );
};

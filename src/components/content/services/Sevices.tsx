import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import './services.scss';
import styles from "./services.module.scss";


import { servicesList } from "datas/services";

export const Services: FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section id="services">
      <h2 className={`title ${styles.title}`}>
        Помогаю реализовать широкий спектр задач
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {servicesList.map((service) => (
          <SwiperSlide className={styles.service}>
            <img
              className={styles.image}
              src={service.img}
              alt={service.imgAlt}
            />
            <div className={styles.wrapper}>
              <h3 className={styles.subtitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

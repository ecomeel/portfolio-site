import { FC } from "react";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { servicesList } from "datas/services";
import { Service } from "./service/Service";
import styles from "./services.module.scss";

export const Services: FC = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: styles.dots,
    pauseOnHover: true
  };

  return (
    <section id="services">
      <h2 className={`title ${styles.title}`}>
        Помогаю реализовать широкий спектр задач
      </h2>
      <Slider {...settings}>
        {servicesList.map((service) => (
          <Service
            title={service.title}
            description={service.description}
            img={service.img}
            imgAlt={service.imgAlt}
          />
        ))}
      </Slider>
    </section>
  );
};

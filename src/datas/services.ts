import { IService } from "libs/types";
import serviceImage1 from "assets/services/1.png";
import serviceImage2 from "assets/services/2.png";
import serviceImage3 from "assets/services/3.png";

export const servicesList: IService[] = [
  {
    title: "Разработка сайта под ключ",
    description:
      "Это создание дизайн веб-сайтов созданный для удобства пользователя и решения бизнес-задач.Сайты должны быть понятными и удобными, ведь чем понятнее сайт, тем быстрее пользователь совершит целевое действие",
    img: serviceImage1,
    imgAlt: "Сайты под ключ",
  },
  {
    title: "Верстка сайтов",
    description:
      "Это процесс создания HTML-документов и применения к ним стилей на CSS. Фронтенд разработчик может помочь создать привлекательный и удобный интерфейс для вашего сайта",
    img: serviceImage2,
    imgAlt: "Верстка сайтов",
  },
  {
    title: "Разработка мобильного интерфейса",
    description:
      "Это процесс создания интерактивных элементов на странице с помощью JavaScript. Фронтенд разработчик может помочь создать динамический и удобный пользовательский интерфейс для вашего сайта или приложения.",
    img: serviceImage3,
    imgAlt: "Разработка мобильного интерфейса",
  },
];

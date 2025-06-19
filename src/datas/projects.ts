import { IProject } from "../libs/types";
import houseStaffImage from 'assets/projects/house-staff.png'
import metricaImage from 'assets/projects/metrica.png'
import registrationFormImage from 'assets/projects/registration-form.png'
// import usersBlogImage from 'assets/projects/users-blog.png'
import RcCityImage from "assets/projects/rc-city.png"
import JokiJoyaImage from "assets/projects/joki-joya.png"
import nothingStoreImage from 'assets/projects/nothing.png'

export const projectsList: IProject[] = [
  {
    name: "Rc City",
    technologies: "vue3, Pinia",
    description: "Личный кабинет юрлиц кэшбек сервиса",
    imgSrc: RcCityImage,
    url: "https://rc.city/"
  },
  {
    name: "Joki Joya",
    technologies: "Nuxt3, vue3, Pinia, JQuery",
    description: "Главный сайт парка равзлечений Joki Joya. Админка менеджеров",
    imgSrc: JokiJoyaImage,
    url: "https://joki-joya.ru/"
  },
  {
    name: "Метрика",
    technologies: "Верстка, настройка",
    description: "Дизайн интерьера",
    imgSrc: metricaImage,
    url: "https://ecomeel.github.io/metrica/",
  },
  {
    name: "Личный кабинет",
    technologies: "TS, React, RTK, Router, Firebase",
    description: "Форма Регистрации",
    imgSrc: registrationFormImage,
    url: "https://ecomeel.github.io/autorization/",
  },
  {
    name: "Nothing",
    technologies: "Верстка, настройка",
    description: "Презентация проекта",
    imgSrc: nothingStoreImage,
    url: "https://ecomeel.github.io/nothing-store/",
  },
];

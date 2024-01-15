import { IProject } from "../libs/types";
import houseStaffImage from 'assets/projects/house-staff.png'
import metricaImage from 'assets/projects/metrica.png'
import registrationFormImage from 'assets/projects/registration-form.png'
import usersBlogImage from 'assets/projects/users-blog.png'
import nothingStoreImage from 'assets/projects/nothing.png'

export const projectsList: IProject[] = [
  {
    name: "House Staff",
    technologies: "TS, React, RTK, Router, Firebase",
    description: "Товары для дома / eCommerce",
    imgSrc: houseStaffImage,
    url: "https://ecomeel.github.io/eCommerce-react/",
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
    name: "Blog",
    technologies: "Vue, Vuex, Vue Router",
    description: "Users Blog",
    imgSrc: usersBlogImage,
    url: "https://ecomeel.github.io/users-blog/#/",
  },
  {
    name: "Nothing",
    technologies: "Верстка, настройка",
    description: "Презентация проекта",
    imgSrc: nothingStoreImage,
    url: "https://ecomeel.github.io/nothing-store/",
  },
];

import { ICompetence } from "libs/types";
import htmlImage from 'assets/competencies/html-icon.png'
import javascriptImage from 'assets/competencies/js-icon.png'
import reactImage from 'assets/competencies/react-icon.png'
import mobileImage from 'assets/competencies/mobile-icon.png'
export const competenciesList: ICompetence[] = [
  {
    title: "HTML и CSS",
    description:
      "это основа фронтенд разработки. Умение создавать и правильно структурировать HTML-документы, а также применять стили к этим документам на CSS, является обязательным навыком для каждого фронтенд разработчика.",
    img: htmlImage,
    imgAlt: "html",
  },
  {
    title: "JavaScript",
    description: "это язык программирования, который используется для создания динамического и интерактивного пользовательского интерфейса. Хороший фронтенд разработчик должен быть знаком с основами JavaScript, включая работу с DOM-деревом, асинхронными запросами и манипуляцией данными на стороне клиента.",
    img: javascriptImage,
    imgAlt: "javascript",
  },
  {
    title: "Работа с библиотеками и фреймворками",
    description: "фронтенд разработчики должны быть знакомы с различными библиотеками и фреймворками, такими как React, Angular, Vue и другими. Умение использовать готовые решения, адаптировать их под нужды проекта и расширять их функциональность, является очень важным навыком.",
    img: reactImage,
    imgAlt: "libraries",
  },
  {
    title: "Разработка для мобильных устройств и адаптивная верстка",
    description: "умение настраивать вертку под различные мобильные устройства является обязательным навыком в наше время, ведь далеко не каждый пользователь будет использовать наши приложения с широких мониторов и ноутбуков",
    img: mobileImage,
    imgAlt: "mobile",
  },
];

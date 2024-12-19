import center from "../../assets/images/center.png";
import day from "../../assets/images/day.png";
import niti from "../../assets/images/threads.png";
import niti1 from "../../assets/images/niti/niti1.png";
import niti2 from "../../assets/images/niti/niti2.png";
import niti3 from "../../assets/images/niti/niti3.png";
import niti4 from "../../assets/images/niti/niti4.png";
import niti5 from "../../assets/images/niti/niti5.png";
import code from "../../assets/images/code.png";

export const portfolioItems = [
  {
    image: niti,
    alt: "НИТИ",
    title: "НИТИ",
    description: "Кластер проектов по управлению современным образованием",
    images: [
      niti1,
      niti2,
      niti3,
      niti4,
      niti5,
    ],
    task: "Разработать современный фирменный стиль для научного института.",
    solution: "Создан минималистичный дизайн с акцентом на научную деятельность института.",
  },
  {
    image: code,
    alt: "КОДИИМ",
    title: "КОДИИМ",
    description: "Проект по развитию IT-образования.",
    images: [
      "images/projects/kodiim/1.jpg",
      "images/projects/kodiim/2.jpg",
      "images/projects/kodiim/3.jpg",
    ],
    task: "Создать идентичность для инновационного образовательного проекта.",
    solution: "Разработан яркий и динамичный визуальный язык, отражающий современный подход к образованию.",
  },
  {
    image: center,
    alt: "В центре науки",
    title: "В центре науки",
    description: "Научно-образовательный центр.",
    images: [
      "images/projects/science/1.jpg",
      "images/projects/science/2.jpg",
      "images/projects/science/3.jpg",
    ],
    task: "Разработать дизайн научно-популярного издания.",
    solution: "Создан современный макет, сочетающий информативность и визуальную привлекательность.",
  },
  {
    image: day,
    alt: "День физики",
    title: "День физики",
    description: "Популяризация науки среди молодежи.",
    images: [
      "images/projects/physics/1.jpg",
      "images/projects/physics/2.jpg",
      "images/projects/physics/3.jpg",
    ],
    task: "Создать визуальную идентичность для научного фестиваля.",
    solution: "Разработан запоминающийся стиль, отражающий научную тематику мероприятия.",
  },
];
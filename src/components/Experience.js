import React from "react";
import rings from "../assets/images/koltsa_fon1.svg";
import circle from "../assets/images/kruzhok_opyt_raboty.svg";

// Данные опыта
const experiences = [
  {
    id: 1,
    year: "2023-по наст. время",
    company: "Центр Педагогического Мастерства",
    role: "Графический дизайнер",
    tasks: ["Фирменный стиль", "SMM-дизайн (соцсети)", "Презентации", "Полиграфия"],
  },
  {
    id: 2,
    year: "2021-2022",
    company: "Банк УБРиР",
    role: "Ведущий дизайнер отдела коммуникаций",
    tasks: ["Презентации", "Коммуникационный дизайн", "Полиграфия"],
  },
];

const Experience = () => {
  return (
    <section className="relative mx-auto px-4 py-[0.75rem] max-w-[75rem]">
      {/* Фоновые кольца */}
      <div className="absolute top-3/4 left-1/2 w-[56rem] md:w-auto -translate-x-[35.7rem] md:-translate-x-[23rem] z-[-1] overflow-hidden">
        <img src={rings} alt="Кольца" className="w-full h-full object-contain" />
      </div>

      {/* Секции опыта */}
      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className="ml-[30.1025rem] md:ml-[31.875rem] mb-[7.21875rem] md:mb-[4.8125rem]"
        >
          <div className="relative">
            {/* Один кружок с пером только для первого блока */}
            {index === 0 && (
              <div className="absolute -top-[1.40625rem] md:-top-[0.9375rem] -left-[12.375rem] md:-left-[8.25rem] w-[7.875rem] md:w-[5.25rem] h-[7.875rem] md:h-[5.25rem]">
                <img src={circle} alt="Перо в кружке" className="w-full h-full object-contain" />
              </div>
            )}

            {/* Основной контент */}
            <div>
              <p className="mb-[0.1875rem] md:mb-[0.125rem] font-extralight font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                {exp.year}
              </p>
              <h3 className="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.25] tracking-[0.01em]">
                {exp.company}
              </h3>
              <h3 className="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                {exp.role}
              </h3>
              <ul className="font-onest font-extralight text-[3.28125rem] md:text-[2.1875rem] list-none">
                {exp.tasks.map((task, index) => (
                  <li
                    key={index}
                    className="relative mb-[0.75rem] md:mb-[0.1rem]"
                  >
                    <span className="absolute -left-[4.71rem] md:-left-[3.14rem] font-onest font-thin">&rarr;</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;

import React from "react";

const SkillsList = ({ items }) => (
  <ul className="font-onest font-extralight text-[3.28125rem] md:text-[2.1875rem] list-none">
    {items.map((item, index) => (
      <li
        key={index}
        className="relative mb-[0.75rem] md:mb-[0.1rem] whitespace-pre-line"
      >
        <span className="absolute -left-[4.71rem] md:-left-[3.14rem] font-onest font-thin">&rarr;</span>
        {item}
      </li>
    ))}
  </ul>
);

export default SkillsList;

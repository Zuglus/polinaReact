import React from "react";
import SkillsSection from "./SkillsSection";
import SkillsHeader from "./SkillsHeader";
import SkillsBackground from "./SkillsBackground";
import SkillsPhotoName from "./SkillsPhotoName";

// Данные для Hard и Soft Skills
const skills = [
  { category: "Hard", items: ["PowerPoint", "Figma", "Photoshop,\nIllustrator, InDesign"] },
  { category: "Soft", items: ["Системность", "Креативность", "Ответственность"] },
];

const Skills = () => {
  return (
    <section className="relative mx-auto px-4 py-[3.75rem] max-w-[75rem]">

      <SkillsBackground />
      <SkillsHeader>Резюме</SkillsHeader>
      <SkillsPhotoName />

      {/* Секции Hard и Soft Skills */}
      <div className="ml-[29.8125rem] md:ml-[31.875rem]">
        {skills.map(({ category, items }) => (
          <SkillsSection key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

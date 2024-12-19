import React from "react";
import SkillsTitle from "./SkillsTitle";
import SkillsList from "./SkillsList";

const SkillsSection = ({ category, items }) => (
  <div className="mb-[5.5rem] md:mb-[3rem]">
    <SkillsTitle title={`${category} skills`} />
    <SkillsList items={items} />
  </div>
);

export default SkillsSection;
